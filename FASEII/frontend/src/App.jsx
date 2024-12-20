import React, { useState, useEffect } from 'react';
import './App.css';
import './assets/chat.css';
import * as use from '@tensorflow-models/universal-sentence-encoder';
import { chatbotModel } from './chatbot-model'; 
import * as tf from '@tensorflow/tfjs';

const App = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [encoderModel, setEncoderModel] = useState(null);

  // Cargar el modelo de embeddings al cargar la aplicación
  useEffect(() => {
    const loadModels = async () => {
      console.log('Cargando modelo...');
      const encoder = await use.load();
      setEncoderModel(encoder);
      console.log('Modelo cargado');
    };

    loadModels();
  }, []);

  const preprocessText = (text) => {
    return text.toLowerCase().replace(/[^a-záéíóúüñ\s]/gi, '').trim();
  };

  const findBestResponse = async (userInput) => {
    if (!encoderModel) return 'Cargando modelo...';

    const userEmbedding = await encoderModel.embed([userInput]);
    const userEmbeddingArray = userEmbedding.arraySync()[0];

    // Calcular la similitud entre el input y las respuestas del chatbot
    const similarityScores = chatbotModel.inputs.map((inputEmbedding) => {
      return inputEmbedding.reduce((sum, value, i) => sum + value * userEmbeddingArray[i], 0);
    });

    const bestMatchIndex = similarityScores.indexOf(Math.max(...similarityScores));
    return chatbotModel.responses[bestMatchIndex];
  };

  const handleSend = async () => {
    if (input.trim()) {
      const userMessage = { text: input, sender: 'user' };

      // Solo añadir el mensaje del usuario antes de buscar la respuesta
      setMessages((prevMessages) => [...prevMessages, userMessage]);

      // Obtener respuesta del chatbot
      const response = await findBestResponse(preprocessText(input));
      const botResponse = { text: response, sender: 'bot' };

      // Luego añadir la respuesta del bot
      setMessages((prevMessages) => [...prevMessages, botResponse]);

      setInput('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <>
      <h1>UsacGpt</h1>
      <div className="chatbot">
        <div className="chat-window">
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.sender}`}>
              {msg.text}
            </div>
          ))}
        </div>
        <div className="input-area">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Escribe tu mensaje..."
          />
          <button onClick={handleSend}>Enviar</button>
        </div>
      </div>
    </>
  );
};

export default App;
