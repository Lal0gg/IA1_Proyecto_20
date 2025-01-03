import numpy as np
import nltk
import json
import pickle
from tensorflow.keras.models import load_model
from nltk.stem import WordNetLemmatizer
from nltk.tokenize import word_tokenize

lemmatizer = WordNetLemmatizer()

model = load_model('chatbot_model.h5')

label_encoder = pickle.load(open('label_encoder.pkl', 'rb'))

words = pickle.load(open('words.pkl', 'rb'))

with open('data.json') as file:
    data = json.load(file)

def clean_up_sentence(sentence):
    sentence_words = word_tokenize(sentence)
    sentence_words = [lemmatizer.lemmatize(w.lower()) for w in sentence_words]
    return sentence_words

def bow(sentence, words):
    sentence_words = clean_up_sentence(sentence)
    bag = [0] * len(words)
    for s in sentence_words:
        for i, word in enumerate(words):
            if word == s:
                bag[i] = 1
    return np.array(bag)

def predict_class(sentence):
    bow_input = bow(sentence, words)
    
    prediction = model.predict(np.array([bow_input]))[0]
    predicted_class = np.argmax(prediction)
    
    predicted_label = label_encoder.inverse_transform([predicted_class])
    
    return predicted_label[0]

def get_response(intent):
    for i in data['intents']:
        if i['tag'] == intent:
            return np.random.choice(i['responses'])

def chat():
    print("¡Hola! Soy tu chatbot. Escribe 'salir' para finalizar.")
    
    while True:
        user_input = input("Tú: ")
        
        if user_input.lower() == 'salir':
            print("¡Adiós!")
            break
        
        intent = predict_class(user_input)
        
        response = get_response(intent)
        
        print(f"Chatbot: {response}")

if __name__ == "__main__":
    chat()