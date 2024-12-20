require('@tensorflow/tfjs-node');
const use = require('@tensorflow-models/universal-sentence-encoder');
const fs = require('fs');

// Datos de entrenamiento
const trainingData = require('./data'); 


(async () => {
  try {
    // Cargar el modelo Universal Sentence Encoder
    const model = await use.load();
    console.log("Modelo cargado exitosamente.");


    // Preparar los datos de entrenamiento
    const inputs = trainingData.map(data => data.input);
    const responses = trainingData.map(data => data.response); 


    // Generar embeddings para las entradas
    const embeddings = await model.embed(inputs);
    const inputEmbeddings = embeddings.arraySync(); 


    // Crear el modelo 
    const chatbotModel = {
      inputs: inputEmbeddings,
      responses: responses
    };


    // Guardar el modelo como JSON
    const jsonPath = './chatbot-model.json';
    fs.writeFileSync(jsonPath, JSON.stringify(chatbotModel, null, 2));
    console.log(`Modelo guardado como archivo JSON en: ${jsonPath}`);


    // Guardar el modelo como JS
    const jsPath = './chatbot-model.js';
    const jsContent = `export const chatbotModel = ${JSON.stringify(chatbotModel, null, 2)};`;
    fs.writeFileSync(jsPath, jsContent);
    console.log(`Modelo guardado como archivo JS en: ${jsPath}`);

    
  } catch (error) {
    console.error("Error durante el entrenamiento o la exportación:", error);
  }
})();
