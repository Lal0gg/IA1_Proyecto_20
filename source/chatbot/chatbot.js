const tf = require('@tensorflow/tfjs-node');
const fs = require('fs');

// Rutas de los archivos
const modelPath = './modelo_nodejs/model.json'; // Ruta al modelo convertido a TensorFlow.js
const dataPath = './data.json'; // Ruta al archivo de datos con intenciones y respuestas

// Variables para el modelo y los datos
let model;
let intentsData;

// Cargar el modelo TensorFlow.js
async function loadModel() {
    try {
        model = await tf.loadLayersModel(`file://${modelPath}`);
        console.log('Modelo cargado exitosamente.');
    } catch (err) {
        console.error('Error al cargar el modelo:', err);
    }
}

// Cargar datos de intenciones
function loadData() {
    try {
        const rawData = fs.readFileSync(dataPath, 'utf-8');
        intentsData = JSON.parse(rawData);
        console.log('Datos de intenciones cargados.');
    } catch (err) {
        console.error('Error al cargar los datos de intenciones:', err);
    }
}

// Procesar entrada del usuario (dummy tokenizer)
function preprocessInput(userInput, maxLen = 10) {
    // Simulación básica de tokenización (convertir palabras a valores numéricos)
    const words = userInput.toLowerCase().split(' ');
    const wordIndices = words.map((word) => word.charCodeAt(0) % 100); // Convertir caracteres a índices
    const padded = Array(maxLen).fill(0); // Rellenar con ceros
    for (let i = 0; i < Math.min(words.length, maxLen); i++) {
        padded[i] = wordIndices[i];
    }
    return tf.tensor2d([padded]);
}

// Predecir la intención basada en la entrada del usuario
async function predictIntent(userInput) {
    if (!model) {
        throw new Error('El modelo no está cargado.');
    }

    try {
        const inputTensor = preprocessInput(userInput);
        const prediction = model.predict(inputTensor);
        const predictedIndex = prediction.argMax(-1).dataSync()[0]; // Obtener el índice de mayor probabilidad
        return intentsData.intents[predictedIndex].intent;
    } catch (err) {
        console.error('Error al predecir la intención:', err);
        return 'Lo siento, hubo un problema al procesar tu solicitud.';
    }
}

// Obtener una respuesta basada en la intención
function getResponse(intent) {
    const intentObj = intentsData.intents.find((item) => item.intent === intent);
    if (intentObj) {
        const responses = intentObj.responses;
        return responses[Math.floor(Math.random() * responses.length)];
    }
    return 'Lo siento, no entendí eso.';
}

// Inicializar el chatbot
async function chatbot() {
    await loadModel();
    loadData();

    console.log('Chatbot: ¡Hola! Escribe algo para comenzar (o "salir" para terminar).');
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    rl.on('line', async (userInput) => {
        if (userInput.toLowerCase() === 'salir') {
            console.log('Chatbot: ¡Hasta luego!');
            rl.close();
        } else {
            try {
                const intent = await predictIntent(userInput);
                const response = getResponse(intent);
                console.log(`Chatbot: ${response}`);
            } catch (err) {
                console.error('Error:', err.message);
            }
        }
    });
}

// Ejecutar el chatbot
chatbot();
