import json
import numpy as np
import tensorflow as tf
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense, Dropout, LSTM, Embedding
from sklearn.model_selection import train_test_split
from tensorflow.keras.preprocessing.text import Tokenizer
from tensorflow.keras.preprocessing.sequence import pad_sequences
from sklearn.preprocessing import LabelEncoder
from tensorflow.keras.utils import to_categorical
from tensorflow.keras.callbacks import EarlyStopping
import pickle

# Cargar los datos
with open("datax.json", "r", encoding="utf-8") as file:
    data = json.load(file)

def preprocess_data(data):
    X, y = [], []
    for intent in data["intents"]:
        for example in intent["examples"]:
            X.append(example)
            y.append(intent["intent"])
    return X, y

X, y = preprocess_data(data)

# Convertir etiquetas
encoder = LabelEncoder()
y_encoded = encoder.fit_transform(y)
y_onehot = to_categorical(y_encoded)

# Tokenización más robusta
tokenizer = Tokenizer(num_words=2000, oov_token="<OOV>")
tokenizer.fit_on_texts(X)
X_tokenized = tokenizer.texts_to_sequences(X)
X_padded = pad_sequences(X_tokenized, maxlen=15)  # Aumentar longitud máxima

# División de datos
X_train, X_test, y_train, y_test = train_test_split(X_padded, y_onehot, test_size=0.2, random_state=42)

# Modelo mejorado
model = Sequential([
    Embedding(len(tokenizer.word_index) + 1, 50, input_length=X_padded.shape[1]),
    LSTM(64, return_sequences=True),
    Dropout(0.5),
    LSTM(32),
    Dropout(0.3),
    Dense(64, activation='relu'),
    Dropout(0.3),
    Dense(len(y_onehot[0]), activation='softmax')
])

# Configuración de callbacks
early_stopping = EarlyStopping(
    monitor='val_loss',
    patience=5,
    restore_best_weights=True
)

# Compilación
model.compile(
    optimizer=tf.keras.optimizers.Adam(learning_rate=0.001),
    loss='categorical_crossentropy',
    metrics=['accuracy']
)

# Entrenamiento
history = model.fit(
    X_train, y_train,
    epochs=50,
    batch_size=16,
    validation_split=0.2,
    callbacks=[early_stopping]
)

# Evaluación
test_loss, test_accuracy = model.evaluate(X_test, y_test)
print(f"Test Accuracy: {test_accuracy * 100:.2f}%")

# Guardar modelo
model.save("modelo_python/chatbot_model.h5")

# Guardar tokenizer y encoder
with open("modelo_python/tokenizer.pkl", "wb") as tokenizer_file:
    pickle.dump(tokenizer, tokenizer_file)
with open("modelo_python/label_encoder.pkl", "wb") as encoder_file:
    pickle.dump(encoder, encoder_file)

# Predicción de ejemplo
predictions = model.predict(X_test[:5])
for i, pred in enumerate(predictions):
    print(f"Ejemplo {i+1}: {encoder.classes_[np.argmax(pred)]}")