# Manual Técnico Chatbot

## Integrantes

* Steven Facundo Mejía Xolop - 202104160
* Eduardo Josué González Cifuentes - 201900647
* Jeackelin Sofía Montenegro Chamalé - 201612120

## 1. Descripción General del Proyecto

### 1.1 Propósito
Este proyecto consiste en el desarrollo de un chatbot que responde a consultas básicas en idioma español. El chatbot es capaz de responder preguntas sobre materias, especializaciones, proyectos, oportunidades laborales, entre otros temas, utilizando un modelo entrenado en base a ejemplos de preguntas y respuestas.

### 1.2 Funcionalidad
- Maneja varias intenciones como "saludo", "despedida", "consultas académicas", entre otras.
- Utiliza un modelo de Machine Learning entrenado en un conjunto de datos en formato JSON.



## 2. Arquitectura del Proyecto

### 2.1 Estructura de Archivos
- **`data.json`**: Archivo que contiene los ejemplos de preguntas y respuestas (intenciones).
- **`training.js`**: Código para entrenar el modelo de chatbot con los datos de `data.json`.
- **`chatbot.js`**: Archivo principal donde el chatbot interactúa con el usuario.
- **`model.js`**: Archivo que maneja respuestas adicionales, como errores o consultas generales.
- **`package.json`**: Contiene las dependencias y configuraciones del proyecto.

### 2.2 Diagrama de Flujo
1. **Entrenamiento**:
   - El archivo `training.js` entrena el modelo utilizando los ejemplos de `data.json`.
   - El modelo se guarda en formato `.keras`.

2. **Interacción con el Usuario**:
   - El archivo `chatbot.js` carga el modelo entrenado y responde las preguntas de los usuarios.
   - El usuario interactúa con el chatbot a través de la consola.

3. **Respuesta de Intenciones**:
   - El chatbot detecta la intención de la pregunta utilizando la función `predict_intent` en `chatbot.js`.
   - Luego, el chatbot responde con la respuesta adecuada utilizando la función `get_response`.



## 3. Instalación y Configuración

### 3.1 Requisitos Previos
- **Node.js**: Se requiere tener **Node.js** instalado para ejecutar los archivos `.js`.
- **npm**: Necesario para instalar las dependencias del proyecto.

### 3.2 Instalación del Proyecto
1. **Clonar el repositorio**:
   ```bash
   git clone <URL_del_repositorio>
   cd <nombre_del_repositorio>
   ```
   
2. **Instalar las dependencias**:
Asegúrate de que tengas npm instalado en tu máquina. Luego, ejecuta el siguiente comando para instalar las dependencias necesarias
    ```bash
    npm install
    ```

3. **Instalar las dependencias adicionales**:
Si necesitas instalar `compromise`
    ```bash
    npm install compromise
    ```
    
## 4.Uso del Chatbot
### 4.1 Entrenamiento del Modelo

Para entrenar el modelo, ejecuta el archivo `training.js` en tu terminal:

```bash
node training.js
```

Este archivo procesará los datos de `data.json`, entrenará el modelo y lo guardará en formato `.keras`.

### 4.2 Interacción con el Chatbot
Una vez que el modelo esté entrenado, puedes iniciar el chatbot ejecutando `chatbot.js`:

```bash
node chatbot.js
```
El chatbot cargará el modelo entrenado y comenzará a responder a las preguntas del usuario.

## 5. Detalles Técnicos
### 5.1 Modelo de Machine Learning
El modelo utilizado es un modelo de clasificación de texto basado en redes neuronales entrenado con los datos de `data.json`. El modelo identifica la intención de la pregunta y responde con la respuesta correspondiente.

### 5.2 Uso de `compromise`
La librería `compromise` se utiliza para el procesamiento de texto, como la tokenización y la lematización, lo que permite una mejor clasificación de las intenciones y una mayor precisión al analizar las consultas del usuario.

### 5.3 Funciones Principales
* `predict_intent(user_input)`: Procesa la entrada del usuario y devuelve la intención detectada.
* `get_response(intent)`: Retorna la respuesta correspondiente según la intención detectada.


## 6. Mantenimiento y Actualización
### 6.1 Añadir Nuevas Intenciones
Para añadir nuevas intenciones:

1. Edita el archivo `data.json` y agrega nuevas intenciones con sus respectivos ejemplos y respuestas.
2. Ejecuta `training.js` nuevamente para reentrenar el modelo con las nuevas intenciones.

### 6.2 Mejorar el Modelo
* Añadir más ejemplos de preguntas y respuestas en `data.json` para mejorar la precisión.
* Ajustar los parámetros del modelo en `training.js` para mejorar el rendimiento.

### 6.3 Actualizar el Modelo
Cuando actualices el archivo `data.json` o modifiques las intenciones, asegúrate de volver a entrenar el modelo ejecutando el script `training.js`.

## 7. Errores Comunes

* Problemas con `compromise`: Si no se puede cargar `compromise`, asegúrate de que esté correctamente instalado ejecutando:
    ```bash
    npm install compromise
    ```

## 8. Explicación del Código
### 8.1 `training.js` - Código para entrenar el modelo
Este archivo es responsable de procesar los datos de entrada, entrenar el modelo de Machine Learning y guardarlo para su uso posterior. A continuación, se explica cada parte clave del archivo:

**Carga de los datos (`data.json`)**
```javascript
// Cargar los datos desde data.json
with open("data/data.json", "r", encoding="utf-8") as file:
    data = json.load(file)
    print(len(data["intents"]), "intenciones cargadas.");
```
* **Explicación:** Esta sección carga el archivo `data.json`, que contiene las intenciones, ejemplos y respuestas. El archivo se carga como un objeto JSON, lo que permite acceder a las intenciones y a sus ejemplos de manera estructurada.

**Preprocesamiento de los datos**
```javascript
// Preprocesamiento de datos
function preprocess_data(data) {
    let X = [], y = [];
    for (let intent of data["intents"]) {
        for (let example of intent["examples"]) {
            X.push(example);
            y.push(intent["intent"]);
        }
    }
    return [X, y];
}

let [X, y] = preprocess_data(data);
```
* **Explicación:** La función `preprocess_data` toma las intenciones del archivo JSON y separa los ejemplos de preguntas (`X`) de las intenciones asociadas a esas preguntas (`y`). Los ejemplos se almacenan en un array `X` y las intenciones correspondientes en el array `y`.


**Codificación de las etiquetas**
```javascript
// Convertir las etiquetas (intenciones) a valores numéricos
encoder = new LabelEncoder();
y_encoded = encoder.fit_transform(y);
y_onehot = to_categorical(y_encoded);
```
* **Explicación:** Las intenciones en `y` se codifican numéricamente utilizando `LabelEncoder`. Luego, se convierten en vectores **One-Hot** usando `to_categorical`, que es el formato que el modelo de Machine Learning necesita para clasificación multiclase.


**Tokenización y Padding**
```javascript
// Tokenización y padding
tokenizer = new Tokenizer({ num_words: 1000, oov_token: "<OOV>" });
tokenizer.fit_on_texts(X);
X_tokenized = tokenizer.texts_to_sequences(X);
X_padded = pad_sequences(X_tokenized, { maxlen: 10 });
```
* **Explicación:** `Tokenizer` se utiliza para convertir las palabras en los ejemplos de preguntas (`X`) a secuencias numéricas. Posteriormente, se aplica `pad_sequences` para asegurarse de que todas las secuencias tengan la misma longitud (en este caso, 10).


**Entrenamiento del Modelo**

```javascript
// Construcción del modelo
model = new Sequential([
    new Dense(16, { activation: 'relu', input_shape: [X_train.shape[1]] }),
    new Dense(16, { activation: 'relu' }),
    new Dense(y_onehot[0].length, { activation: 'softmax' })
]);

// Compilación y entrenamiento
model.compile({ optimizer: 'adam', loss: 'categorical_crossentropy', metrics: ['accuracy'] });
model.fit(X_train, y_train, { epochs: 20, batch_size: 8, validation_data: [X_test, y_test] });
```

* **Explicación:** El modelo es una red neuronal **densa** de 3 capas. La última capa tiene tantas neuronas como clases de intenciones, con una función de activación `softmax` para la clasificación multiclase. Después, se compila el modelo utilizando el optimizador `adam` y la función de pérdida `categorical_crossentropy`, que es adecuada para clasificación multiclase.


**Guardado del modelo y otros recursos**

```javascript
// Guardar el modelo, el tokenizer y el encoder
model.save("model/modelo_python/chatbot_model.keras");
with open("model/modelo_python/tokenizer.pkl", "wb") as tokenizer_file {
    pickle.dump(tokenizer, tokenizer_file);
}
with open("model/modelo_python/label_encoder.pkl", "wb") as encoder_file {
    pickle.dump(encoder, encoder_file);
}
```
* **Explicación:** El modelo entrenado, el tokenizador y el codificador de etiquetas se guardan en sus respectivos archivos. Estos archivos serán utilizados más adelante en el chatbot para hacer predicciones y clasificar las entradas del usuario.

### 8.2 `chatbot.js` - Interacción con el Usuario

Este archivo es responsable de la interacción en tiempo real con el usuario, cargando el modelo y proporcionando respuestas basadas en las intenciones detectadas.

**Cargar el modelo, el tokenizador y el encoder**
```javascript
// Cargar modelo y recursos
model = tf.keras.models.load_model("model/modelo_python/chatbot_model.h5");
with open("model/modelo_python/tokenizer.pkl", "rb") as tokenizer_file {
    tokenizer = pickle.load(tokenizer_file);
}
with open("model/modelo_python/label_encoder.pkl", "rb") as encoder_file {
    label_encoder = pickle.load(encoder_file);
}
```
* **Explicación:** El chatbot carga el modelo entrenado desde el archivo `.keras` guardado previamente. Además, carga el tokenizador y el codificador de etiquetas que se usaron durante el entrenamiento para poder procesar la entrada del usuario de la misma manera que se hizo con los datos de entrenamiento.


**Predecir la intención del usuario**
```javascript
// Función para predecir la intención
function predict_intent(user_input) {
    sequences = tokenizer.texts_to_sequences([user_input]);
    padded_sequences = pad_sequences(sequences, { maxlen: 10 });
    
    // Realizar predicción
    prediction = model.predict(padded_sequences);
    intent_index = np.argmax(prediction);
    confidence = np.max(prediction);  // Obtener la probabilidad de la predicción
    
    console.log(`Confianza: ${confidence}`);
    
    if (confidence < 0.6) {
        return "no_reconocido";
    }
    
    intent = label_encoder.inverse_transform([intent_index])[0];
    return intent;
}
```
* **Explicación:** Esta función toma la entrada del usuario, la convierte en una secuencia numérica utilizando el tokenizador, y luego realiza una predicción con el modelo. Si la confianza de la predicción es inferior a un umbral (en este caso, 0.6), el chatbot devuelve "no_reconocido". Si la predicción tiene suficiente confianza, devuelve la intención detectada.


**Generar respuestas basadas en la intención detectada**

```javascript
// Función para responder al usuario
function get_response(intent) {
    with open("data/data.json", "r", encoding="utf-8") as file {
        data = json.load(file);
    }
    
    for (item in data["intents"]) {
        if (item["intent"] === intent) {
            return np.random.choice(item["responses"]);
        }
    }
    
    return "Lo siento, no te entendí.";
}
```
* **Explicación:** Esta función busca la intención detectada en el archivo `data.json` y devuelve una de las respuestas asociadas con esa intención. Si no encuentra una coincidencia, devuelve una respuesta predeterminada como "Lo siento, no te entendí".

### 8.3 `model.js`

El archivo `model.js` es una parte crucial en la gestión de las respuestas del chatbot. En este archivo, se definen diferentes categorías de respuestas que el chatbot utilizará cuando no pueda procesar correctamente una consulta o cuando necesite pedir más detalles al usuario. Esto ayuda a hacer las interacciones más naturales y a mantener el flujo de la conversación, incluso cuando el chatbot no tiene una respuesta directa o clara.


**Propiedades de `model.js`**
**1. responder_en_errores**
Esta propiedad es un array de respuestas predeterminadas que el chatbot utilizará cuando no pueda entender o procesar una consulta. Si el chatbot no tiene la información necesaria o no puede encontrar una respuesta adecuada, seleccionará aleatoriamente una de estas respuestas.

**Ejemplos de respuestas de error:**

* "Perdón, no sé cómo responder a eso."
* "Lo siento, no tengo información sobre ese tema."
* "No estoy seguro de lo que necesitas, podrías aclararlo."
* "Eso está fuera de mi alcance por ahora."


Estas respuestas ayudan a manejar casos donde el chatbot no tiene conocimiento suficiente o no entiende completamente la pregunta. El uso de respuestas de error garantiza que el chatbot no se quede sin respuesta y pueda continuar con la interacción de manera adecuada.

**2. aclaraciones**
Esta propiedad contiene un array de respuestas que el chatbot usará cuando necesite pedir más detalles al usuario. Si la pregunta es ambigua o incompleta, el chatbot utilizará estas respuestas para solicitar más información o aclaración.

Ejemplos de respuestas de aclaración:

* "¿Podrías darme más detalles, por favor?"
* "¿Puedes ser más específico?"
* "Necesito un poco más de contexto para ayudarte."
* "¿Podrías aclarar a qué te refieres?"


Estas respuestas permiten al chatbot interactuar de manera más dinámica con el usuario, pidiendo detalles adicionales para poder proporcionar una respuesta más precisa.

**Código de Ejemplo en `model.js`**
El archivo `model.js` se estructura de la siguiente manera:

```javascript
module.exports = {
  "responder_en_errores": [
    "Perdón, no sé cómo responder a eso.",
    "Lo siento, no tengo información sobre ese tema.",
    "Disculpa, no entiendo la consulta.",
    "No estoy seguro de lo que necesitas, podrías aclararlo.",
    "Lamento no poder ayudarte con eso ahora mismo.",
    "Eso está fuera de mi alcance por ahora.",
    // más respuestas...
  ],
  "aclaraciones": [
    "¿Podrías darme más detalles, por favor?",
    "¿Puedes ser más específico?",
    "Necesito un poco más de contexto para ayudarte.",
    "¿Podrías aclarar a qué te refieres?"
    // más aclaraciones...
  ]
};
```
**¿Cómo utiliza el chatbot este archivo?**
1. Cuando no se puede entender la pregunta: Si el chatbot no puede identificar la intención del usuario, seleccionará una respuesta de la propiedad responder_en_errores.

2. Cuando el chatbot necesita más detalles: Si el chatbot necesita más contexto o información para proporcionar una respuesta precisa, seleccionará una respuesta de la propiedad aclaraciones.
 
3. Mejora de la experiencia del usuario: Estas respuestas permiten que el chatbot mantenga una conversación fluida, incluso cuando no puede dar una respuesta exacta, o cuando necesita más detalles para entender la consulta correctamente.
