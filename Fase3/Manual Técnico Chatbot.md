---
title: Manual Técnico Chatbot

---

# Manual Técnico Chatbot

## Integrantes

* Steven Facundo Mejía Xolop - 202104160
* Eduardo Josué González Cifuentes - 201900647
* Jeackelin Sofía Montenegro Chamalé - 201612120

## 1. Introducción

Este es un proyecto que implementa un Chatbot interactivo utilizando Python y TensorFlow, diseñado para interactuar con los usuarios mediante un modelo de aprendizaje automático que responde a consultas relacionadas con una amplia variedad de temas. El chatbot utiliza una red neuronal para predecir respuestas basadas en entradas de texto, permitiendo una conversación fluida.

El proyecto está compuesto por varios módulos:

* chatbot.py: El núcleo del chatbot, que procesa las entradas y devuelve las respuestas utilizando el modelo entrenado.
* training.py: Este archivo se encarga del entrenamiento del modelo de red neuronal, procesando los datos de entrada y generando los archivos necesarios.
* main.py: Conecta la interfaz de usuario con el modelo, permitiendo la interacción entre el usuario y el chatbot.
* data.json: Contiene los datos de entrenamiento, con ejemplos de preguntas y respuestas que el chatbot utiliza para aprender.
* modelos entrenados (label_encoder.pkl, chatbot_model.h5, words.pkl): Archivos generados durante el entrenamiento que contienen el modelo y los codificadores necesarios para realizar las predicciones.

## 2. Estructura del Proyecto

El proyecto contiene los siguientes archivos clave:

Archivos principales:
* chatbot.py: Archivo que contiene las funciones del chatbot para predecir la intención de una entrada y generar una respuesta.
* training.py: Módulo que procesa los datos y entrena el modelo de aprendizaje automático, generando los archivos .h5, .pkl y .json.
* main.py: Interfaz que permite al usuario interactuar con el chatbot mediante una aplicación de consola o de escritorio.
* data.json: Archivo que contiene ejemplos de entradas y respuestas que el modelo utiliza para aprender.
* label_encoder.pkl: Contiene el codificador de etiquetas, que convierte las clases de las intenciones en valores numéricos.
* chatbot_model.h5: El modelo entrenado que contiene la red neuronal utilizada para predecir las respuestas.
* words.pkl: Contiene el vocabulario utilizado para convertir las palabras en un formato procesable por el modelo.


## 3. Instalación y Configuración Inicial

### Paso 1: Clonar el Repositorio

Primero, clona el repositorio en tu máquina local usando Git:

```bash
git clone <url-del-repositorio>
```

### Paso 2: Instalacion de dependencias

Una vez clonado el repositorio, navega al directorio del proyecto y ejecuta el siguiente comando para instalar todas las dependencias::

```bash
pip install -r requirements.txt
```

### Paso 3: Entrenamiento del Modelo

Ejecuta el archivo training.py para entrenar el modelo y generar los archivos necesarios (como el chatbot_model.h5, words.pkl, label_encoder.pkl).:

```bash
python training.py
```

### Paso 4: Ejecutar la Aplicación

Para ejecutar la aplicación y la interfaz de usuario, usa el siguiente comando:

```bash
python main.py
```
Esto abrirá una ventana de consola donde podrás interactuar con el chatbot.

## 4. Descripción de Archivos y Funcionalidad

### chatbot.py
Este archivo contiene las funciones principales para predecir las respuestas del chatbot a partir de la entrada del usuario. Su función principal es tomar el mensaje del usuario, convertirlo en un formato procesable y luego utilizar el modelo entrenado para predecir una respuesta adecuada.

#### Carga del modelo y las utilidades
```python
import tensorflow as tf
import numpy as np
import pickle
from nltk.stem import WordNetLemmatizer
from sklearn.preprocessing import LabelEncoder

# Cargar el modelo pre-entrenado
model = tf.keras.models.load_model('chatbot_model.h5')

# Cargar los archivos de palabras y etiquetas
words = pickle.load(open('words.pkl', 'rb'))
classes = pickle.load(open('label_encoder.pkl', 'rb'))

# Inicialización de lematizador
lemmatizer = WordNetLemmatizer()
```
#### Explicación:
* model = tf.keras.models.load_model('chatbot_model.h5'): Aquí se carga el modelo previamente entrenado en el archivo chatbot_model.h5.
* words y classes: Se cargan los archivos words.pkl y label_encoder.pkl, que contienen las palabras del vocabulario y las clases de etiquetas de las intenciones.
* Lematizador: Se usa para procesar las palabras ingresadas por el usuario antes de ser alimentadas al modelo, asegurando que las palabras estén en su forma base (lemmatizada).

#### Preprocesamiento de la entrada del usuario
```python
def clean_up_sentence(sentence):
    # Tokeniza la frase
    sentence_words = nltk.word_tokenize(sentence)
    sentence_words = [lemmatizer.lemmatize(word.lower()) for word in sentence_words]
    return sentence_words
```
#### Explicación:
* clean_up_sentence(sentence): Esta función toma una entrada de texto y la tokeniza (separa en palabras individuales). Luego, aplica lematización a cada palabra para reducirla a su forma raíz. Por ejemplo, "running" se convierte en "run".
#### Predicción de la clase de intención
```python
def predict_class(sentence):
    # Limpiar la frase y convertir a un vector de palabras
    sentence_words = clean_up_sentence(sentence)
    bag_of_words = [0]*len(words)
    
    # Marcamos las palabras presentes en la entrada
    for s in sentence_words:
        for i, word in enumerate(words):
            if word == s:
                bag_of_words[i] = 1

    # Predecir la clase con el modelo
    prediction = model.predict(np.array([bag_of_words]))[0]
    ERROR_THRESHOLD = 0.25
    predicted_class = np.argmax(prediction)
    
    return predicted_class, prediction[predicted_class]
```
#### Explicación:
* predict_class(sentence): Esta función convierte la entrada del usuario (un texto) en un vector binario donde cada posición indica la presencia de una palabra en el vocabulario (words). Luego, se utiliza el modelo para predecir la clase de intención de la entrada.
#### Generación de la respuesta más adecuada
```python
def get_response(intents_list, intents_json):
    # Predecir la respuesta con la clase
    intent = intents_list[0]
    for i in intents_json['intents']:
        if i['tag'] == intent:
            return random.choice(i['responses'])
```
#### Explicación:
get_response(intents_list, intents_json): Aquí, se toma la intención predicha y se busca la respuesta adecuada en el archivo data.json. La función random.choice() se usa para elegir una respuesta aleatoria dentro de las respuestas predefinidas para esa intención.


### training.py
Este archivo se encarga de entrenar el modelo del chatbot, procesar los datos de entrada, y generar los archivos necesarios como chatbot_model.h5, words.pkl, y label_encoder.pkl.

#### Preprocesamiento de datos
```python
import nltk
import json
import numpy as np
from nltk.stem import WordNetLemmatizer
from sklearn.preprocessing import LabelEncoder
import pickle

nltk.download(['punkt', 'wordnet'])

# Inicializar el lematizador
lemmatizer = WordNetLemmatizer()

# Cargar los datos de entrenamiento
intents = json.loads(open('data.json').read())
```
#### Explicación:
* nltk.download(['punkt', 'wordnet']): Se descargan los recursos necesarios de NLTK para tokenización y lematización.
* lemmatizer: Inicializa un lematizador para reducir las palabras a su forma raíz.
* intents: Se cargan los datos de entrenamiento desde data.json.
#### Creación de datos de entrenamiento
```python
# Listas para almacenar datos procesados
training_sentences = []
training_labels = []

# Recorrer las intenciones y sus patrones
for intent in intents['intents']:
    for pattern in intent['patterns']:
        # Tokenizar las frases
        word_list = nltk.word_tokenize(pattern)
        training_sentences.extend(word_list)
        training_labels.append(intent['tag'])
```
#### Explicación:
training_sentences y training_labels: Se llenan con las frases tokenizadas (inputs del usuario) y las etiquetas asociadas (intenciones).
nltk.word_tokenize(pattern): Tokeniza cada patrón de frase en palabras individuales.
#### Conversión de palabras y etiquetas
```python
# Eliminar duplicados y ordenar
training_sentences = sorted(list(set(training_sentences)))
training_labels = sorted(list(set(training_labels)))

# Crear el codificador de palabras
words = [lemmatizer.lemmatize(w.lower()) for w in training_sentences]
words = sorted(list(set(words)))

# Codificar las etiquetas
label_encoder = LabelEncoder()
label_encoder.fit(training_labels)
```
#### Explicación:
* training_sentences y training_labels: Se eliminan duplicados y se ordenan las listas de frases y etiquetas.
* words: Se lematizan las palabras y se eliminan los duplicados, generando un vocabulario único.
* LabelEncoder: Se usa para convertir las etiquetas (intenciones) en valores numéricos, ya que el modelo necesita trabajar con números.
#### Entrenamiento del modelo
```python
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense, Dropout
from tensorflow.keras.optimizers import SGD

# Crear el modelo de red neuronal
model = Sequential()
model.add(Dense(128, input_dim=len(words), activation='relu'))
model.add(Dropout(0.5))
model.add(Dense(len(training_labels), activation='softmax'))

# Compilar el modelo
model.compile(loss='categorical_crossentropy', optimizer=SGD(learning_rate=0.01, momentum=0.9), metrics=['accuracy'])

# Entrenar el modelo
model.fit(training_data, training_labels, epochs=200, batch_size=5)
```
#### Explicación:
* Modelo de red neuronal: Se crea una red neuronal de varias capas densas con activación relu y una capa de salida con softmax para clasificación.
* model.fit(): Entrena el modelo con los datos de entrada y las etiquetas de entrenamiento, utilizando categorical_crossentropy como función de pérdida y el optimizador SGD.
#### Guardado de archivos
```python
# Guardar el modelo entrenado
model.save('chatbot_model.h5')

# Guardar los archivos auxiliares
pickle.dump(words, open('words.pkl', 'wb'))
pickle.dump(label_encoder, open('label_encoder.pkl', 'wb'))
```
#### Explicación:
* model.save(): Guarda el modelo entrenado en un archivo .h5.
* pickle.dump(): Guarda el vocabulario de palabras y el codificador de etiquetas en archivos .pkl.
### main.py
Este archivo se conecta a la interfaz de usuario o la consola para permitir al usuario interactuar con el chatbot. Recibe la entrada del usuario, la procesa y devuelve una respuesta utilizando el modelo de predicción.

#### Ejemplo de código para ejecutar el chatbot en la consola
```python
from chatbot import get_response, predict_class

while True:
    user_input = input("Tú: ")
    if user_input.lower() == 'salir':
        print("Chatbot: ¡Hasta luego!")
        break
    intent_class, confidence = predict_class(user_input)
    response = get_response(intent_class)
    print(f"Chatbot: {response}")
```
#### Explicación:
Interacción con el usuario: El usuario ingresa un mensaje y el chatbot devuelve una respuesta. Si el usuario escribe "salir", el chatbot terminará la conversación.
### data.json
Este archivo contiene los datos utilizados para entrenar el modelo. Está estructurado en "intenciones", cada una con un conjunto de preguntas (patrones) y respuestas posibles.

```json

{
  "intents": [
    {
      "tag": "greeting",
      "patterns": ["Hola", "Buenos días", "Buenas tardes"],
      "responses": ["¡Hola! ¿Cómo te puedo ayudar hoy?"]
    },
    {
      "tag": "goodbye",
      "patterns": ["Adiós", "Hasta luego", "Nos vemos"],
      "responses": ["¡Hasta luego! Que tengas un buen día."]
    }
  ]
}
```
### label_encoder.pkl
Este archivo contiene el codificador de etiquetas que convierte las clases de intenciones en valores numéricos para ser procesados por el modelo.

### chatbot_model.h5
Este archivo contiene el modelo entrenado. Es una red neuronal que se ha entrenado con los datos de data.json para predecir las intenciones del usuario.

### words.pkl
Este archivo contiene un conjunto de todas las palabras que el modelo conoce. Se utiliza para convertir las palabras de entrada en una representación que el modelo pueda procesar.


## 5. Flujo de Trabajo
### 5.1 Entrenamiento del Modelo
* Preprocesamiento: El archivo training.py recoge los datos de data.json, los tokeniza y los lematiza, creando vectores de características para las preguntas.
* Entrenamiento: Se entrena una red neuronal utilizando los datos procesados. El modelo aprende a predecir intenciones basadas en entradas.
* Generación de Archivos: Los archivos generados, como chatbot_model.h5, son necesarios para la predicción.
### 5.2 Interacción con el Chatbot
* Entrada del Usuario: El usuario ingresa un mensaje en la interfaz proporcionada por main.py.
* Predicción de la Intención: El texto de entrada se procesa utilizando chatbot.py, donde se predice la intención.
* Respuesta: El chatbot devuelve la respuesta adecuada según la intención predicha, basada en las respuestas almacenadas en data.json.
## 6. Conclusión
El sistema USACgpt es un chatbot basado en aprendizaje automático que permite al usuario interactuar de manera fluida y natural. Se basa en técnicas de procesamiento de lenguaje natural (NLP) y redes neuronales para predecir respuestas relevantes a partir de las entradas del usuario.
