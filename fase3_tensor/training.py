import json
import nltk
import numpy as np
from sklearn.preprocessing import LabelEncoder
from nltk.stem import WordNetLemmatizer
from nltk.corpus import stopwords
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense
from tensorflow.keras.optimizers import SGD
from tensorflow.keras.utils import to_categorical  

nltk.download('punkt')
nltk.download('wordnet')
nltk.download('stopwords')  

lemmatizer = WordNetLemmatizer()

ignore_words = set(stopwords.words('spanish'))  

with open('data.json') as file:
    data = json.load(file)

training_sentences = []
training_labels = []
classes = []
words = []

for intent in data['intents']:
    for pattern in intent['patterns']:
        word_list = nltk.word_tokenize(pattern)
        words.extend(word_list)
        
        training_sentences.append(pattern)
        
        training_labels.append(intent['tag'])
    
    classes.append(intent['tag'])

words = [lemmatizer.lemmatize(w.lower()) for w in words if w not in ignore_words]
words = sorted(list(set(words)))

label_encoder = LabelEncoder()
label_encoder.fit(training_labels)
training_labels_encoded = label_encoder.transform(training_labels)

training_labels_one_hot = to_categorical(training_labels_encoded, num_classes=len(classes))

training_sentences_ready = []
for sentence in training_sentences:
    sentence_words = nltk.word_tokenize(sentence)
    sentence_words = [lemmatizer.lemmatize(w.lower()) for w in sentence_words if w not in ignore_words]
    training_sentences_ready.append(sentence_words)

training_data = []
for sentence_words in training_sentences_ready:
    bag = [0] * len(words)
    for word in sentence_words:
        if word in words:
            bag[words.index(word)] = 1
    training_data.append(bag)

training_data = np.array(training_data)

model = Sequential()
model.add(Dense(128, input_dim=len(training_data[0]), activation='relu'))
model.add(Dense(64, activation='relu'))
model.add(Dense(len(classes), activation='softmax'))

model.compile(loss='categorical_crossentropy', optimizer=SGD(learning_rate=0.01, momentum=0.9), metrics=['accuracy'])

model.fit(training_data, training_labels_one_hot, epochs=200, batch_size=5, verbose=1)

model.save('chatbot_model.h5')

import pickle
pickle.dump(label_encoder, open('label_encoder.pkl', 'wb'))

pickle.dump(words, open('words.pkl', 'wb'))

print("Modelo entrenado y guardado con éxito.")
