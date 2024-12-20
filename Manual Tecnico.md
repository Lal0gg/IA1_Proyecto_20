# Manual Técnico Chatbot

## Integrantes

* Steven Facundo Mejía Xolop - 202104160
* Eduardo Josué González Cifuentes - 201900647
* Jeackelin Sofía Montenegro Chamalé - 201612120

## 1. Introducción

Este es un proyecto que implementa un **Chatbot interactivo** utilizando **React**, **JavaScript**, y **CSS**. El objetivo de la aplicación es permitir la interacción con un modelo de chatbot basado en entradas y respuestas, proporcionando una interfaz amigable para que los usuarios puedan interactuar con el sistema.

## 2. Estructura del Proyecto

El proyecto contiene los siguientes archivos y carpetas clave:

### Archivos principales:
- **index.html**: La página principal que sirve de punto de entrada a la aplicación.
- **App.css**: Contiene los estilos principales de la aplicación.
- **App.jsx**: El componente principal que maneja la lógica del chatbot.
- **index.css**: Estilos globales de la aplicación.
- **main.jsx**: Archivo de entrada donde se inicializa la aplicación React.

### Dependencias:
- **package.json**: Contiene todas las dependencias necesarias para el proyecto.

## 3. Instalación y Configuración Inicial

### Paso 1: Clonar el Repositorio

Primero, clona el repositorio en tu máquina local usando Git:

```bash
git clone <url-del-repositorio>
```

### Paso 2: Instalacion de dependencias

Una vez clonado el repositorio, navega al directorio del proyecto y ejecuta el siguiente comando para instalar todas las dependencias::

```bash
npm install
```

### Paso 3: Ejecutar la aplicación

Para ejecutar el proyecto, usa el siguiente comando::

```bash
npm start
```
Esto abrirá el proyecto en tu navegador por defecto.

## 4. Descripción de Archivos y Funcionalidad

### index.html
Este archivo es el punto de entrada de tu aplicación web. En él se define la estructura básica de la página y se inserta el archivo bundle.js, que contiene todo el código compilado de la aplicación React. A continuación, te explico lo que generalmente contiene un archivo index.html en una aplicación React:.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Chatbot React</title>
  <link rel="stylesheet" href="index.css">
</head>
<body>
  <div id="root"></div> <!-- Aquí es donde React renderiza la aplicación -->
  <script src="bundle.js"></script> <!-- El archivo compilado de React -->
</body>
</html>
```

#### Explicacion
- `<div id="root"></div>`: Este es el contenedor donde React inserta la aplicación. React buscará este div para montar el árbol de componentes de la aplicación.
- `<script src="bundle.js"></script>`: El archivo bundle.js es generado por Webpack (o un bundler similar) que agrupa todos los archivos JS y los deja listos para ser cargados en el navegador.

### App.css
Este archivo contiene los estilos CSS específicos para el componente principal App.jsx. Generalmente, se usa para definir el diseño y la apariencia del chatbot.


```html
/* App.css */
.chat-container {
  background-color: #f9f9f9;
  width: 400px;
  margin: 50px auto;
  padding: 20px;
  border-radius: 8px;
}

.chat-header {
  font-size: 18px;
  font-weight: bold;
}

.chat-messages {
  margin-top: 20px;
  height: 300px;
  overflow-y: scroll;
}

.input-container {
  margin-top: 20px;
}

input {
  width: 100%;
  padding: 10px;
  font-size: 16px;
}
```

#### Explicacion
- .chat-container: Define el contenedor principal del chatbot, incluyendo color de fondo, tamaño y márgenes.
- .chat-header: Estiliza el encabezado del chatbot.
- .chat-messages: Establece el área donde se mostrarán los mensajes y se les permite hacer scroll.
- .input-container: Da estilo al área donde el usuario introduce el texto, asegurándose de que se vea bien y ocupe el ancho completo.

### App.jsx
Este es el archivo más importante del proyecto, ya que contiene el componente principal de React donde se gestiona la lógica del chatbot y la interfaz de usuario. Aquí te dejo un ejemplo simplificado:

```jsx
import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [messages, setMessages] = useState([]); // Estado para guardar los mensajes
  const [userInput, setUserInput] = useState(""); // Estado para el input del usuario

  const handleSendMessage = () => {
    // Función que maneja el envío de un mensaje
    const newMessage = { input: userInput, response: getResponse(userInput) };
    setMessages([...messages, newMessage]);
    setUserInput("");
  };

  const getResponse = (userMessage) => {
    // Función que genera una respuesta según el mensaje del usuario
    const responses = {
      "Hello": "Hi there! How can I help you?",
      "How are you?": "I'm good, thanks for asking!",
      // Aquí se agregan más respuestas según las entradas
    };
    return responses[userMessage] || "Sorry, I didn't understand that.";
  };

  return (
    <div className="chat-container">
      <div className="chat-header">Chatbot</div>
      <div className="chat-messages">
        {messages.map((message, index) => (
          <div key={index}>
            <b>You: </b>{message.input}
            <br />
            <b>Bot: </b>{message.response}
            <hr />
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Type your message here"
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default App;
```

#### Explicacion
- useState: React Hook que se usa para gestionar el estado. Aquí se usan dos estados: uno para almacenar los mensajes (messages) y otro para almacenar la entrada del usuario (userInput).
- handleSendMessage: Esta función se activa cuando el usuario hace clic en el botón de enviar. Agrega el mensaje del usuario y la respuesta del chatbot a la lista de mensajes.
- getResponse: Esta función es responsable de generar una respuesta en función del mensaje del usuario. Si el mensaje del usuario coincide con una entrada predefinida (como "Hello" o "How are you?"), se devuelve una respuesta predefinida. Si no se encuentra una respuesta, se devuelve un mensaje por defecto ("Sorry, I didn't understand that.").
- Interfaz de usuario: El componente renderiza la interfaz del chatbot, mostrando los mensajes previos del usuario y del bot, y un campo de entrada donde el usuario puede escribir un mensaje.

### index.css
Este archivo contiene los estilos globales de la aplicación. Aquí puedes definir los estilos generales que no pertenecen a un componente específico, como el fondo de la página o los márgenes globales.

```css
/* index.css */
body {
  font-family: Arial, sans-serif;
  background-color: #fafafa;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
```

#### Explicacion
- body: Aquí se aplican los estilos globales, como la fuente, color de fondo y el uso de flexbox para centrar el contenido vertical y horizontalmente en la página.


### main.jsx
Este archivo es el punto de entrada de la aplicación. React usará este archivo para renderizar el componente principal App.jsx en el DOM.

```jsx
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
```

#### Explicacion
- React.StrictMode: Ayuda a detectar problemas en la aplicación durante el desarrollo. No afecta a la aplicación en producción.
- ReactDOM.render: Este método toma el componente App y lo renderiza en el elemento con el id="root", que se encuentra en index.html.

### package.json
Este archivo contiene la configuración de tu proyecto, incluyendo las dependencias y los scripts para ejecutar el proyecto.

```json
{
  "name": "chatbot-react",
  "version": "1.0.0",
  "main": "index.js",
  "dependencies": {
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-scripts": "^4.0.3"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "devDependencies": {},
  "author": "",
  "license": "ISC"
}
```
#### Explicacion
- dependencies: Aquí se encuentran las dependencias necesarias para que el proyecto funcione. React y React-DOM son las bibliotecas principales.
- scripts: Estos son los comandos que puedes ejecutar desde la terminal:
- npm start: Inicia el servidor de desarrollo y abre la aplicación en el navegador.
- npm build: Prepara la aplicación para producción.
- npm test: Ejecuta las pruebas.
- npm eject: Expone la configuración de Webpack y otros archivos de configuración.


#### Explicacion
Este archivo se encarga de la renderización del componente principal App.jsx en el DOM. Es el punto de inicio para React y es donde la aplicación se inicializa.

```jsx
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
```
### chatbot.js
#### 1. Carga de Dependencias y Modelos

```jsx
require('@tensorflow/tfjs-node');
const use = require('@tensorflow-models/universal-sentence-encoder');
const fs = require('fs');
const path = './chatbot-model.json';
```

- TensorFlow.js (@tensorflow/tfjs-node): Esta librería permite la ejecución de modelos de machine learning en Node.js. Se usa aquí para trabajar con modelos de embbedings.
- Universal Sentence Encoder (@tensorflow-models/universal-sentence-encoder): Este modelo de TensorFlow convierte las frases en vectores de números (embeddings) que pueden ser comparados.
- fs (File System): Se utiliza para leer archivos en el sistema de archivos (en este caso, el modelo del chatbot).

#### 2. Carga del Modelo de Chatbot
```jsx
const loadChatbotModel = async () => {
  if (path.endsWith('.json')) {
    const rawData = fs.readFileSync(path, 'utf8');
    return JSON.parse(rawData);
  } else {
    const { chatbotModel } = require('./chatbot-model.js');
    return chatbotModel;
  }
};
```
- Se verifica si el archivo del modelo de chatbot es un archivo JSON.
- Si es un archivo .json, lo lee y lo convierte a un objeto JavaScript.
- Si no es un archivo JSON, importa el modelo desde un archivo local (chatbot-model.js).

#### 3. Encontrar la Mejor Respuesta Basada en Similitud
```jsx
const findBestResponse = async (userInput, chatbotModel, encoderModel) => {
  const userEmbedding = await encoderModel.embed([userInput]);
  const userEmbeddingArray = userEmbedding.arraySync()[0];

  const similarityScores = chatbotModel.inputs.map(inputEmbedding => {
    return inputEmbedding.reduce((sum, value, i) => sum + value * userEmbeddingArray[i], 0);
  });

  const bestMatchIndex = similarityScores.indexOf(Math.max(...similarityScores));
  return chatbotModel.responses[bestMatchIndex];
};
```
- Obtención de Embeddings del Usuario: Primero, el input del usuario se convierte en un vector de números (embedding) usando el modelo Universal Sentence Encoder.
- Similitud de Coseno: Luego, calcula la similitud entre el embedding del usuario y los embeddings predefinidos de las posibles respuestas del chatbot, utilizando el producto punto.
- Selección de la Mejor Respuesta: Se encuentra la respuesta cuyo embedding tiene la mayor similitud con el input del usuario.

#### 4. Ejecutar el Chatbot en la Consola
```jsx
const runChatbot = async () => {
  try {
    console.log("Cargando modelo de embeddings...");
    const encoderModel = await use.load();
    console.log("Modelo de embeddings cargado exitosamente.");

    console.log("Cargando modelo del chatbot...");
    const chatbotModel = await loadChatbotModel();
    console.log("Modelo del chatbot cargado exitosamente.");

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
```
- Carga de Modelos: Se cargan los modelos de embeddings (encoderModel) y el modelo de chatbot (chatbotModel).
- Interfaz de Usuario en la Consola: Se configura una interfaz para leer entradas desde la terminal utilizando el módulo readline. El chatbot espera que el usuario ingrese texto, luego responde con la mejor respuesta calculada.
- Interacción: El chatbot sigue funcionando hasta que el usuario escriba salir. Si el usuario ingresa algo distinto, el chatbot buscará la respuesta más adecuada y la mostrará.

#### 5. Ejecutar el Chatbot

```jsx
runChatbot();
```

Finalmente, se llama a la función runChatbot() para iniciar la interacción del chatbot con el usuario.

## 5. Funcionalidades del Proyecto
La aplicación permite al usuario interactuar con un chatbot, el cual responde a las preguntas según las entradas proporcionadas. A continuación se detallan las funcionalidades principales:

- Interacción con el chatbot: El chatbot responde a preguntas predefinidas y proporciona respuestas relevantes.
- Entrada de texto: Los usuarios pueden escribir preguntas y recibir respuestas en tiempo real.
## 6. Personalización
Para personalizar la aplicación, puedes realizar los siguientes cambios:

1. Modificar el componente App.jsx:
    - Puedes agregar más preguntas y respuestas al chatbot.
    - Cambiar la lógica para que el chatbot realice tareas más complejas.

2. Actualizar los estilos:
    - Edita el archivo App.css para cambiar los estilos visuales del chatbot.
    - Modifica index.css para cambiar los estilos globales.

## 7. Buenas Prácticas

- Usar un control de versiones: Es recomendable usar Git para llevar un control de cambios en tu proyecto.
- Componentes React: Siempre que sea posible, divide la lógica en componentes pequeños y reutilizables.
- Revisar dependencias: Mantén actualizadas las dependencias de tu proyecto para garantizar su seguridad y funcionamiento correcto.

## 8. Consideraciones Finales
Este proyecto es una base para la creación de chatbots interactivos en una interfaz web utilizando React. A medida que el proyecto crezca, puedes añadir más características, como integración con APIs externas, bases de datos, o inteligencia artificial avanzada.
