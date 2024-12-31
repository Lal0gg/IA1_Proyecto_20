import json
import pickle
import numpy as np
import tensorflow as tf
from tensorflow.keras.preprocessing.sequence import pad_sequences

# Cargar modelo y recursos
model = tf.keras.models.load_model("modelo_python/chatbot_model.h5")

with open("modelo_python/tokenizer.pkl", "rb") as tokenizer_file:
    tokenizer = pickle.load(tokenizer_file)

with open("modelo_python/label_encoder.pkl", "rb") as encoder_file:
    label_encoder = pickle.load(encoder_file)

# Función para predecir la intención
def predict_intent(user_input):
    # Preprocesar la entrada del usuario
    sequences = tokenizer.texts_to_sequences([user_input])
    padded_sequences = pad_sequences(sequences, maxlen=10)

    # Realizar predicción
    prediction = model.predict(padded_sequences)
    intent_index = np.argmax(prediction)
    intent = label_encoder.inverse_transform([intent_index])[0]

    return intent

# Función para responder al usuario
def get_response(intent):
    with open("datax.json", "r", encoding="utf-8") as file:
        data = json.load(file)
    for item in data["intents"]:
        if item["intent"] == intent:
            return np.random.choice(item["responses"])

# Ciclo principal del chatbot
def chatbot():
    print("Chatbot: ¡Hola! Escribe algo para comenzar (o escribe 'salir' para terminar).")
    while True:
        user_input = input("Tú: ")
        if user_input.lower() == "salir":
            print("Chatbot: ¡Hasta luego!")
            break
        intent = predict_intent(user_input)
        response = get_response(intent)
        print(f"Chatbot: {response}")

# Ejecutar el chatbot
if __name__ == "__main__":
    chatbot()