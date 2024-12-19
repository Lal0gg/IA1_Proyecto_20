require('@tensorflow/tfjs-node');
const use = require('@tensorflow-models/universal-sentence-encoder');

const fs = require('fs');
const path = './chatbot-model.json'; 

// Cargar el modelo
const loadChatbotModel = async () => {
  if (path.endsWith('.json')) {
    const rawData = fs.readFileSync(path, 'utf8');
    return JSON.parse(rawData);
  } else {
    const { chatbotModel } = require('./chatbot-model.js');
    return chatbotModel;
  }
};

// Encontrar la mejor respuesta para el input del usuario
const findBestResponse = async (userInput, chatbotModel, encoderModel) => {
  // Obtener embeddings del input del usuario
  const userEmbedding = await encoderModel.embed([userInput]);
  const userEmbeddingArray = userEmbedding.arraySync()[0];


  // Calcular similitud 
  const similarityScores = chatbotModel.inputs.map(inputEmbedding => {
    return inputEmbedding.reduce((sum, value, i) => sum + value * userEmbeddingArray[i], 0);
  });


  // Encontrar la mejor respuesta basada en la similitud
  const bestMatchIndex = similarityScores.indexOf(Math.max(...similarityScores));
  return chatbotModel.responses[bestMatchIndex];
};



// Ejecutar el chatbot en la consola
const runChatbot = async () => {
  try {
    console.log("Cargando modelo de embeddings...");
    const encoderModel = await use.load();
    console.log("Modelo de embeddings cargado exitosamente.");

    console.log("Cargando modelo del chatbot...");
    const chatbotModel = await loadChatbotModel();
    console.log("Modelo del chatbot cargado exitosamente.");

    // Interfaz de usuario en la terminal
    const readline = require('readline');
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    console.log("\n¡Chatbot listo para interactuar! Escribe tu mensaje o 'salir' para terminar.");

    rl.on('line', async (input) => {
      if (input.toLowerCase() === 'salir') {
        console.log("¡Adiós!");
        rl.close();
      } else {
        const response = await findBestResponse(input, chatbotModel, encoderModel);
        console.log(`Chatbot: ${response}`);
      }
    });
  } catch (error) {
    console.error("Error al ejecutar el chatbot:", error);
  }
};

runChatbot();
