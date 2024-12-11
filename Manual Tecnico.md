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
La estructura del proyecto está organizada en distintos archivos que cumplen funciones específicas dentro del sistema. A continuación, se detallan los archivos clave del proyecto:

* `data.json`: Contiene los ejemplos de preguntas y respuestas para cada intención (saludo, despedida, etc.).
* `training.js`: Código que entrena el modelo utilizando los datos de `data.json`.
* `chatbot.js`: Archivo principal donde el chatbot interactúa con el usuario y responde a las consultas.
* `model.js`: Define las respuestas adicionales para la gestión de errores y aclaraciones del chatbot.
* `package.json`: Contiene las dependencias y configuraciones del proyecto.
* `App.jsx`: Archivo donde se implementa la interfaz de usuario de React.
* `App.css`: Contiene los estilos CSS para la interfaz.
* `index.html`: Archivo HTML que estructura la página y carga la aplicación React.

### 2.2 Diagrama de Flujo
1. **Entrenamiento:**
El archivo `training.js` procesa los datos de `data.json`, entrena el modelo y lo guarda en formato .keras.
2. **Interacción con el Usuario**:
El archivo `chatbot.js` carga el modelo entrenado y responde las preguntas del usuario.
El usuario interactúa con el chatbot a través de la interfaz web.
3. **Respuesta de Intenciones**:
El chatbot identifica la intención de la pregunta utilizando la función `predict_intent` en `chatbot.js`.
Posteriormente, el chatbot responde con la respuesta correspondiente usando la función `get_response`.



## 3. Instalación y Configuración
### 3.1 Requisitos Previos
* **Node.js:** Se requiere tener Node.js instalado para ejecutar los archivos `.js`.
* **npm:** Necesario para instalar las dependencias del proyecto.
* **React:** Se requiere un entorno de desarrollo de React (utilizando Vite en este caso).
### 3.2 Instalación del Proyecto
Clonar el repositorio:

```bash
git clone <URL_del_repositorio>
cd <nombre_del_repositorio>
```
Instalar las dependencias: Asegúrate de tener npm instalado en tu máquina. Luego, ejecuta el siguiente comando para instalar las dependencias necesarias:

```bash
npm install
```
Instalar las dependencias adicionales:

```bash
npm install compromise
```
    
## 4. Uso del Chatbot
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
* **`predict_intent(user_input)`**: Procesa la entrada del usuario y devuelve la intención detectada.
* **`get_response(intent)`**: Retorna la respuesta correspondiente según la intención detectada.


## 6. Mantenimiento y Actualización
### 6.1 Añadir Nuevas Intenciones
Para añadir nuevas intenciones:

1. Edita el archivo `data.json` y agrega nuevas intenciones con sus respectivos ejemplos y respuestas.
2. Ejecuta `training.js` nuevamente para reentrenar el modelo con las nuevas intenciones.
3. 
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

**Carga de los datos (data.json)**
```javascript
// Cargar los datos desde data.json
with open("data/data.json", "r", encoding="utf-8") as file:
    data = json.load(file)
    print(len(data["intents"]), "intenciones cargadas.");
```
**Explicación**: Se carga el archivo `data.json`, que contiene las intenciones y las respuestas. El archivo se carga como un objeto JSON para que sea fácil acceder a los datos.

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
**Explicación**: La función `preprocess_data` separa los ejemplos de preguntas (`X`) y las intenciones correspondientes (`y`), listando cada ejemplo con su correspondiente clase de intención.

**Codificación de las etiquetas**
```javascript
// Convertir las etiquetas (intenciones) a valores numéricos
encoder = new LabelEncoder();
y_encoded = encoder.fit_transform(y);
y_onehot = to_categorical(y_encoded);
```
**Explicación**: Las intenciones en `y` son codificadas a números con `LabelEncoder` y luego se convierten en vectores **One-Hot** con `to_categorical` para ser procesados por el modelo.

**Tokenización y Padding**
```javascript
// Tokenización y padding
tokenizer = new Tokenizer({ num_words: 1000, oov_token: "<OOV>" });
tokenizer.fit_on_texts(X);
X_tokenized = tokenizer.texts_to_sequences(X);
X_padded = pad_sequences(X_tokenized, { maxlen: 10 });
```
**Explicación**: Los textos de entrada se convierten a secuencias de números mediante `Tokenizer`. Luego se aplica `pad_sequences` para asegurarse de que todas las secuencias tengan la misma longitud.

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
**Explicación**: Se construye un modelo neuronal con dos capas ocultas de 16 neuronas, seguido de una capa de salida con una neurona por cada clase de intención. El modelo se entrena con los datos de entrada y etiquetas.

**Guardado del Modelo y Otros Recursos**
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
**Explicación**: El modelo, el tokenizador y el codificador de etiquetas se guardan en archivos para su uso posterior en el chatbot.
