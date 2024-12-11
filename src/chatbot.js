import nlp from 'compromise';
import data from '../public/data.json';

// Función para preprocesar texto usando `compromise`
const preprocessText = (text) => {
  const doc = nlp(text.toLowerCase());
  return doc
    .terms() // Filtra solo términos significativos
    .out('array') // Convierte los términos a un array de palabras
    .join(' ') // Reconstruye el texto
    .replace(/[^a-záéíóúüñ\s]/gi, '') // Elimina caracteres especiales
    .trim(); // Elimina espacios extra
};

// Convierte un texto en un objeto de frecuencia de palabras
const textToVector = (text) => {
  const words = text.split(' ');
  const vector = {};
  words.forEach((word) => {
    vector[word] = (vector[word] || 0) + 1;
  });
  return vector;
};

// Calcula el producto punto entre dos vectores
const dotProduct = (vec1, vec2) => {
  return Object.keys(vec1).reduce((sum, key) => {
    return sum + (vec1[key] * (vec2[key] || 0));
  }, 0);
};

// Calcula la magnitud de un vector
const vectorMagnitude = (vec) => {
  return Math.sqrt(Object.values(vec).reduce((sum, val) => sum + val * val, 0));
};

// Calcula la similitud de coseno entre dos textos
const cosineSimilarity = (text1, text2) => {
  const vec1 = textToVector(preprocessText(text1));
  const vec2 = textToVector(preprocessText(text2));
  const dot = dotProduct(vec1, vec2);
  const magnitude = vectorMagnitude(vec1) * vectorMagnitude(vec2);
  return magnitude === 0 ? 0 : dot / magnitude;
};

// Encuentra la intención más cercana al input del usuario
const findIntent = (input) => {
  const normalizedInput = preprocessText(input);
  let maxScore = 0;
  let matchedIntent = null;

  data.intents.forEach((intent) => {
    intent.examples.forEach((example) => {
      const score = cosineSimilarity(normalizedInput, preprocessText(example));
      if (score > maxScore) {
        maxScore = score;
        matchedIntent = intent.intent;
      }
    });
  });

  // Define un umbral mínimo para considerar una coincidencia
  return maxScore > 0.5 ? matchedIntent : null;
};

// Obtiene una respuesta aleatoria basada en la intención
const getResponse = (intent) => {
  const intentObj = data.intents.find((i) => i.intent === intent);
  if (intentObj) {
    const randomIndex = Math.floor(Math.random() * intentObj.responses.length);
    return intentObj.responses[randomIndex];
  }
  return 'Lo siento, no entendí eso.';
};

// Procesa el mensaje del usuario
export const chat = (input) => {
  const intent = findIntent(input);
  console.log(intent);
  return intent ? getResponse(intent) : 'Lo siento, no entendí eso.';
};
