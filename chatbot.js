const fs = require('fs');
const nlp = require('compromise');

// Cargar el modelo desde el archivo training.js
const model = require('./training.js');

// Cargar el archivo data.json
const data = JSON.parse(fs.readFileSync('data.json'));

// Función para encontrar la intención más cercana
const findIntent = (input) => {
    let maxMatch = 0;
    let matchedIntent = null;

    // Iterar sobre las intenciones para encontrar la mejor coincidencia
    data.intents.forEach(intent => {
        intent.examples.forEach(example => {
            const doc = nlp(example);
            const score = doc.match(input).length;

            if (score > maxMatch) {
                maxMatch = score;
                matchedIntent = intent.intent;
            }
        });
    });

    return matchedIntent;
};

// Función para obtener una respuesta aleatoria
const getResponse = (intent) => {
    const intentObj = data.intents.find(i => i.intent === intent);
    if (intentObj) {
        const randomIndex = Math.floor(Math.random() * intentObj.responses.length);
        return intentObj.responses[randomIndex];
    }
    return "Lo siento, no entendí eso.";
};

// Función para interactuar con el chatbot
const chat = (input) => {
    const intent = findIntent(input);
    console.log(input)
    if (intent) {
        return getResponse(intent);
    } else {
        return "Lo siento, no entendí eso.";
    }
};

// Ejemplo de uso
const userInput = "como te encuentras"; 
const response = chat(userInput);
console.log(response);
