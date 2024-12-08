import json
import numpy as np
import tensorflow as tf
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense
from sklearn.model_selection import train_test_split
from tensorflow.keras.preprocessing.text import Tokenizer
from tensorflow.keras.preprocessing.sequence import pad_sequences
from sklearn.preprocessing import LabelEncoder
from tensorflow.keras.utils import to_categorical
import pickle
import subprocess

# Cargar los datos desde data.json
with open("../data/data.json", "r", encoding="utf-8") as file:
    data = json.load(file)
    print(len(data["intents"]), "intenciones cargadas.")

# Preprocesamiento
def preprocess_data(data):
    X, y = [], []
    for intent in data["intents"]:
        for example in intent["examples"]:
            X.append(example)
            y.append(intent["intent"])
    return X, y

X, y = preprocess_data(data)

# Convertir las etiquetas (intenciones) a valores numéricos
encoder = LabelEncoder()
y_encoded = encoder.fit_transform(y)
y_onehot = to_categorical(y_encoded)

# Tokenización y padding
tokenizer = Tokenizer(num_words=1000, oov_token="<OOV>")
tokenizer.fit_on_texts(X)
X_tokenized = tokenizer.texts_to_sequences(X)
X_padded = pad_sequences(X_tokenized, maxlen=10)

# Dividir los datos en conjuntos de entrenamiento y prueba
X_train, X_test, y_train, y_test = train_test_split(X_padded, y_onehot, test_size=0.2, random_state=42)

# Construcción del modelo
model = Sequential([
    Dense(16, activation='relu', input_shape=(X_train.shape[1],)),  # Se define explícitamente el input_shape
    Dense(16, activation='relu'),
    Dense(len(y_onehot[0]), activation='softmax')
])

# Compilación del modelo
model.compile(optimizer='adam', loss='categorical_crossentropy', metrics=['accuracy'])

# Entrenamiento
model.fit(X_train, y_train, epochs=20, batch_size=8, validation_data=(X_test, y_test))

# Guardar el modelo en formato HDF5 (.h5)
model_path = "modelo_python/chatbot_model.keras"
model.save(model_path)
print(f"Modelo entrenado y guardado como '{model_path}'.")

# Guardar el tokenizer y el encoder
tokenizer_path = "modelo_python/tokenizer.pkl"
encoder_path = "modelo_python/label_encoder.pkl"
with open(tokenizer_path, "wb") as tokenizer_file:
    pickle.dump(tokenizer, tokenizer_file)
with open(encoder_path, "wb") as encoder_file:
    pickle.dump(encoder, encoder_file)

print(f"Tokenizer guardado como '{tokenizer_path}'.")
print(f"Label Encoder guardado como '{encoder_path}'.")

# Verificar que el modelo se guarda correctamente en formato .keras
try:
    model_loaded = tf.keras.models.load_model(model_path)
    print(f"El modelo fue cargado correctamente desde '{model_path}'.")
except Exception as e:
    print(f"Error al cargar el modelo: {e}")


# Convertir el modelo al formato TensorFlow.js en la carpeta modelo_nodejs
tfjs_output_path = "modelo_nodejs/"
try:
    subprocess.run([
        "tensorflowjs_converter",
        "--input_format=keras",  # Asegúrate de usar el formato Keras
        "--skip_op_check",
        model_path,  # La ruta al archivo .keras
        tfjs_output_path  # La ruta donde se guardará el modelo convertido
    ], check=True)
    print(f"Modelo convertido a formato TensorFlow.js en '{tfjs_output_path}'.")
except FileNotFoundError:
    print("Error: Asegúrate de que 'tensorflowjs_converter' está instalado y disponible en tu PATH.")
except subprocess.CalledProcessError as e:
    print(f"Error durante la conversión: {e}")
except Exception as ex:
    print(f"Error inesperado: {ex}")
