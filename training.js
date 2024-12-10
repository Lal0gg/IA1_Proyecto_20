// Importar compromise
const nlp = require('compromise');
const fs = require('fs');

// Cargar el archivo data.json
const data = JSON.parse(fs.readFileSync('data.json'));

let model = {};

// Función para procesar ejemplos y respuestas
const trainModel = () => {
    data.intents.forEach(intent => {
        intent.examples.forEach(example => {
            const doc = nlp(example);
            
            if (!model[intent.intent]) {
                model[intent.intent] = [];
            }

            model[intent.intent].push(doc.text());
        });
    });
};

trainModel();

fs.writeFileSync('model.js', 'module.exports = ' + JSON.stringify(model, null, 2));

console.log('Modelo entrenado y guardado en training.js');
