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
* `chatbot.js`: Archivo principal donde el chatbot interactúa con el usuario y responde a las consultas.
* `package.json`: Contiene las dependencias y configuraciones del proyecto.
* `App.jsx`: Archivo donde se implementa la interfaz de usuario de React.
* `index.html`: Archivo HTML que estructura la página y carga la aplicación React.

### 2.2 Diagrama de Flujo
1. **Entrenamiento:**
El modelo se entrena utilizando los datos de data.json. Este proceso se realiza previamente antes de la interacción con el usuario y no requiere intervención directa en el proyecto actual.
2. **Interacción con el Usuario**:
* El archivo chatbot.js gestiona la interacción entre el usuario y el chatbot.
* El modelo entrenado se utiliza para predecir la intención de las preguntas del usuario y generar respuestas adecuadas.
3. **Respuesta de Intenciones**:
* El chatbot utiliza la función predict_intent en chatbot.js para detectar la intención de la consulta del usuario.
* Luego, el chatbot responde utilizando la función get_response, que selecciona la respuesta adecuada de acuerdo con la intención detectada.



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

### 4.1 Interacción con el Chatbot
El chatbot te permitirá hacer preguntas y recibir respuestas basadas en el modelo entrenado. Simplemente escribe tu pregunta en el campo de texto y presiona "Enviar". La interfaz gráfica muestra tanto las preguntas como las respuestas en el chat.

### 4.2 Ejemplo de Interacción
* Usuario: "Hola"
* Chatbot: "¡Hola! ¿Todo bien?"

## 5. Detalles Técnicos
### 5.1 Modelo de Machine Learning
El modelo es un modelo de clasificación de texto basado en redes neuronales. Se entrena utilizando los datos de data.json y se ajusta para detectar la intención de la pregunta del usuario.

El modelo es capaz de clasificar varias intenciones como:

* **Saludo**: Cuando el usuario saluda al chatbot.
* **Despedida**: Cuando el usuario se despide del chatbot.
* **Consultas generales**: Preguntas relacionadas con temas académicos, generales o de interés.

### 5.2 Funciones Principales en chatbot.js
predict_intent(user_input): Esta función toma el mensaje del usuario, lo procesa y predice la intención del mensaje.

```javascript
function predict_intent(user_input) {
    sequences = tokenizer.texts_to_sequences([user_input]);
    padded_sequences = pad_sequences(sequences, { maxlen: 10 });

    prediction = model.predict(padded_sequences);
    intent_index = np.argmax(prediction);
    confidence = np.max(prediction);
    console.log(`Confianza: ${confidence}`);

    if (confidence < 0.6) {
        return "no_reconocido";
    }

    intent = label_encoder.inverse_transform([intent_index])[0];
    return intent;
}
```
**Explicación**: Esta función transforma la entrada del usuario en una secuencia numérica, la procesa con el modelo y calcula la confianza de la predicción. Si la confianza es baja (por debajo de 0.6), se devuelve la intención "no_reconocido", de lo contrario, se devuelve la intención predicha.

**get_response(intent)**: Esta función devuelve la respuesta correspondiente según la intención predicha.

```javascript
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
**Explicación**: Esta función busca en el archivo data.json la intención correspondiente y devuelve una de las respuestas asociadas a esa intención. Si no se encuentra la intención, devuelve un mensaje predeterminado.

### 5.3 data.json
Este archivo contiene las intenciones y las respuestas del chatbot. Cada intención tiene ejemplos de preguntas y respuestas que el chatbot utiliza para responder a las consultas.

Ejemplo de data.json:

```json
{
  "intents": [
    {
      "intent": "saludo",
      "examples": [
        "Hola", "Buenas tardes", "¿Qué tal?"
      ],
      "responses": [
        "¡Hola! ¿Cómo estás?", "¡Hola! ¿Todo bien?"
      ]
    },
    {
      "intent": "despedida",
      "examples": [
        "Adiós", "Hasta luego", "Nos vemos"
      ],
      "responses": [
        "¡Hasta luego!", "¡Nos vemos pronto!"
      ]
    }
  ]
}
```
**Explicación**: Cada intención en data.json tiene una lista de ejemplos (preguntas que el chatbot puede recibir) y respuestas (respuestas posibles que el chatbot puede dar).


## 6. Mantenimiento y Actualización
### 6.1 Añadir Nuevas Intenciones
Para añadir nuevas intenciones, debes seguir los siguientes pasos:

1. Edita el archivo data.json y agrega nuevas intenciones con sus ejemplos y respuestas.
2. El chatbot procesará automáticamente estas nuevas intenciones sin necesidad de reentrenar el modelo, ya que las respuestas se seleccionan dinámicamente.
### 6.2 Actualizar el Modelo
Aunque el modelo no se actualiza automáticamente con las nuevas intenciones, si se desea mejorar la precisión del modelo o cambiar su comportamiento:

1. Entrenar el modelo nuevamente con un conjunto de datos actualizado.
2. Reemplazar el modelo existente con el nuevo modelo entrenado.

## 7. Errores Comunes

* Problemas con `compromise`: Si no se puede cargar `compromise`, asegúrate de que esté correctamente instalado ejecutando:
    ```bash
    npm install compromise
    ```
