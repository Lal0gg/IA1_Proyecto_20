import tkinter as tk
from tkinter import ttk
from chatbot import predict_intent, get_response  # Importa las funciones del chatbot

class ChatBubble(tk.Frame):
    def __init__(self, parent, text, is_user):
        super().__init__(parent, bg="#1E1E1E")
        
        # Determinar colores según el emisor
        bubble_color = "#0e2f10" if is_user else "#030d33"
        
        # Marco de la burbuja
        bubble = tk.Label(
            self,
            text=text,
            bg=bubble_color,
            fg="white",
            font=("Helvetica", 12),
            wraplength=300,
            justify=tk.LEFT,
            padx=12,
            pady=8,
            relief="flat"
        )
        bubble.pack(side=tk.RIGHT if is_user else tk.LEFT)
        
        # Alinear a la derecha para el usuario, a la izquierda para las respuestas
        self.pack(fill=tk.X, padx=10, pady=5, anchor="e" if is_user else "w")

class ChatGPTUI:
    def __init__(self, root):
        self.root = root
        self.root.title("USACgpt")
        self.root.geometry("500x700")
        self.root.configure(bg="#1E1E1E")
        
        # Marco principal
        main_frame = tk.Frame(root, bg="#1E1E1E")
        main_frame.pack(fill=tk.BOTH, expand=True)
        
        # Título
        title_frame = tk.Frame(main_frame, bg="#1E1E1E")
        title_frame.pack(pady=10)
        
        title_label = tk.Label(
            title_frame,
            text="USACgpt",
            bg="#1E1E1E",
            fg="white",
            font=("Helvetica", 16, "bold")
        )
        title_label.pack()
        
        # Área de chat
        self.chat_frame = tk.Frame(main_frame, bg="#1E1E1E")
        self.chat_frame.pack(fill=tk.BOTH, expand=True, padx=10)
        
        # Canvas y scrollbar
        self.canvas = tk.Canvas(self.chat_frame, bg="#1E1E1E", highlightthickness=0)
        self.scrollbar = ttk.Scrollbar(self.chat_frame, orient="vertical", command=self.canvas.yview)
        
        self.message_frame = tk.Frame(self.canvas, bg="#1E1E1E")
        self.canvas.create_window((0, 0), window=self.message_frame, anchor="nw", width=460)
        
        # Configurar canvas
        self.canvas.configure(yscrollcommand=self.scrollbar.set)
        self.canvas.pack(side=tk.LEFT, fill=tk.BOTH, expand=True)
        self.scrollbar.pack(side=tk.RIGHT, fill=tk.Y)
        
        # Frame de entrada
        input_frame = tk.Frame(main_frame, bg="#1E1E1E")
        input_frame.pack(fill=tk.X, padx=10, pady=10)
        
        self.input_box = tk.Entry(
            input_frame,
            bg="#2D2D2D",
            fg="white",
            font=("Helvetica", 12),
            insertbackground="white"
        )
        self.input_box.pack(side=tk.LEFT, fill=tk.X, expand=True, padx=(0, 10))
        
        send_button = ttk.Button(input_frame, text="Enviar", command=self.send_message)
        send_button.pack(side=tk.RIGHT)
        
        # Bind events
        self.message_frame.bind("<Configure>", self.on_frame_configure)
        self.input_box.bind("<Return>", lambda e: self.send_message())
        
    def on_frame_configure(self, event=None):
        self.canvas.configure(scrollregion=self.canvas.bbox("all"))
        
    def send_message(self):
        message = self.input_box.get().strip()
        if message:
            # Mensaje del usuario
            ChatBubble(self.message_frame, message, True)
            
            # Limpiar entrada
            self.input_box.delete(0, tk.END)
            
            # Obtener respuesta del chatbot
            intent = predict_intent(message)  # Predice la intención
            response = get_response(intent)  # Obtiene la respuesta basada en la intención
            
            # Mensaje de respuesta
            ChatBubble(self.message_frame, response, False)
            
            # Scroll al final
            self.canvas.update_idletasks()
            self.canvas.yview_moveto(1.0)

if __name__ == "__main__":
    root = tk.Tk()
    app = ChatGPTUI(root)
    root.mainloop()
