const trainingData = [
  {
    input: "Hola, ¿cómo estás?",
    response: "¡Hola! Estoy bien, ¿y tú?"
  },
  {
    input: "¿Qué puedes hacer?",
    response: "Soy un chatbot que puede responder tus preguntas y mantener una conversación básica."
  },
  {
    input: "¿Cuál es tu nombre?",
    response: "Soy tu asistente virtual, puedes llamarme Chatbot."
  },
  {
    input: "Adiós",
    response: "¡Hasta luego! Espero verte pronto."
  },
  {
    input: "¿Qué es la inteligencia artificial?",
    response: "La inteligencia artificial es el campo de estudio que se enfoca en crear máquinas capaces de realizar tareas que normalmente requieren inteligencia humana."
  },
  {
    input: "¿Qué significa la teoría de la relatividad?",
    response: "La teoría de la relatividad, propuesta por Albert Einstein, establece que las leyes de la física son las mismas para todos los observadores en movimiento relativo entre sí."
  },
  {
    input: "¿Qué es el cambio climático?",
    response: "El cambio climático se refiere a los cambios significativos y duraderos en las condiciones climáticas globales, principalmente causado por la actividad humana."
  },
  {
    input: "¿Cómo se define el amor?",
    response: "El amor es un sentimiento complejo que involucra afecto, apego y cuidado hacia otra persona u objeto."
  },
  {
    input: "¿Qué es la democracia?",
    response: "La democracia es un sistema de gobierno en el que el poder es ejercido por el pueblo, a través del sufragio libre y elecciones periódicas."
  },
  {
    input: "¿Qué significa la teoría de cuerdas?",
    response: "La teoría de cuerdas es una teoría física que propone que las partículas fundamentales no son puntos, sino cuerdas vibrantes de energía."
  },
  {
    input: "¿Qué es la evolución?",
    response: "La evolución es el proceso mediante el cual las especies cambian a lo largo del tiempo debido a la selección natural y otros factores."
  },
  {
    input: "¿Cómo se define el liderazgo?",
    response: "El liderazgo es la capacidad de influir y guiar a un grupo de personas para alcanzar un objetivo común."
  },
  {
    input: "¿Qué es la física cuántica?",
    response: "La física cuántica es la rama de la física que estudia los fenómenos a escalas extremadamente pequeñas, como partículas subatómicas."
  },
  {
    input: "¿Qué significa la economía circular?",
    response: "La economía circular es un modelo económico que busca reducir el desperdicio y aprovechar al máximo los recursos al cerrar el ciclo de vida de los productos."
  },
  {
    input: "¿Qué es el capitalismo?",
    response: "El capitalismo es un sistema económico basado en la propiedad privada de los medios de producción y en la libre competencia."
  },
  {
    input: "¿Cómo se define la globalización?",
    response: "La globalización es el proceso de interconexión e interdependencia de los países a nivel económico, cultural y político."
  },
  {
    input: "¿Qué es el arte moderno?",
    response: "El arte moderno se refiere a las obras de arte que se desarrollaron desde finales del siglo XIX hasta mediados del siglo XX, caracterizadas por nuevas formas de expresión."
  },
  {
    input: "¿Qué significa el término blockchain?",
    response: "Blockchain es una tecnología de registro distribuido que permite almacenar información de manera segura y descentralizada."
  },
  {
    input: "¿Qué es la sostenibilidad?",
    response: "La sostenibilidad es la capacidad de mantener o mejorar los sistemas ambientales, sociales y económicos sin comprometer las necesidades de las futuras generaciones."
  },
  {
    input: "¿Qué significa la biodiversidad?",
    response: "La biodiversidad es la variedad de formas de vida en la Tierra, que incluye especies, ecosistemas y diversidad genética."
  },
  {
    input: "¿Qué es el metaverso?",
    response: "El metaverso es un espacio virtual compartido, generado por la interacción de la realidad física y la digital, donde los usuarios pueden interactuar en tiempo real."
  },
  {
    input: "¿Qué es el feminismo?",
    response: "El feminismo es un movimiento social y político que busca la igualdad de derechos entre mujeres y hombres."
  },
  {
    input: "¿Qué es la ética?",
    response: "La ética es la rama de la filosofía que estudia los principios de la moralidad y la conducta humana."
  },
  {
    input: "¿Qué significa la inteligencia emocional?",
    response: "La inteligencia emocional se refiere a la capacidad de reconocer, comprender y manejar nuestras propias emociones y las de los demás."
  },
  {
    input: "¿Qué es el Big Data?",
    response: "Big Data es un conjunto de datos extremadamente grandes y complejos que requieren herramientas especiales para su procesamiento y análisis."
  },
  {
    input: "¿Cómo se define el concepto de marketing?",
    response: "El marketing es el conjunto de actividades y estrategias utilizadas para promover y vender productos o servicios."
  },
  {
    input: "¿Qué significa la nanotecnología?",
    response: "La nanotecnología es la manipulación de la materia a una escala molecular o atómica para desarrollar productos nuevos y avanzados."
  },
  {
    input: "¿Qué es el transhumanismo?",
    response: "El transhumanismo es un movimiento filosófico y científico que busca mejorar las capacidades humanas mediante la tecnología."
  },
  {
    input: "¿Qué es el universo?",
    response: "El universo es el conjunto de todo lo que existe: la totalidad del espacio, tiempo, materia y energía."
  },
  {
    input: "¿Cómo se define el concepto de justicia?",
    response: "La justicia es el concepto moral y político que busca la equidad y la imparcialidad en la distribución de recursos, oportunidades y derechos."
  },
  {
    input: "¿Qué es la física de partículas?",
    response: "La física de partículas estudia las partículas fundamentales que constituyen la materia y las fuerzas que las gobiernan."
  },
  {
    input: "¿Qué significa el concepto de democracia participativa?",
    response: "La democracia participativa es un modelo en el que los ciudadanos tienen una participación directa en la toma de decisiones políticas, más allá del voto."
  },
  {
    input: "¿Qué es el socialismo?",
    response: "El socialismo es una ideología política y económica que aboga por la propiedad colectiva de los medios de producción y la distribución equitativa de los recursos."
  },
  {
    input: "¿Qué es el materialismo histórico?",
    response: "El materialismo histórico es una teoría de Karl Marx que sostiene que la historia humana es el resultado de la lucha de clases y de la evolución de los modos de producción."
  },
  {
    input: "¿Qué significa la neurociencia?",
    response: "La neurociencia es el estudio del sistema nervioso, incluyendo el cerebro y su influencia en el comportamiento y las funciones cognitivas."
  },
  {
    input: "¿Qué es la ética profesional?",
    response: "La ética profesional se refiere a los principios morales y las normas que guían el comportamiento dentro de una determinada profesión."
  },
  {
    input: "¿Qué es la biotecnología?",
    response: "La biotecnología es el uso de organismos vivos o sus componentes para desarrollar productos y soluciones en áreas como la medicina, la agricultura y la industria."
  },
  {
    input: "¿Qué significa el concepto de resiliencia?",
    response: "La resiliencia es la capacidad de un sistema o individuo para resistir y adaptarse frente a situaciones adversas o de cambio."
  },
  {
    input: "¿Qué es la inteligencia colectiva?",
    response: "La inteligencia colectiva es la capacidad compartida de un grupo de individuos para resolver problemas, crear ideas y tomar decisiones."
  },
  {
    input: "¿Qué es el cambio tecnológico?",
    response: "El cambio tecnológico se refiere a la evolución de las tecnologías y cómo estas transforman las sociedades y economías."
  },
  {
    input: "¿Cómo se define el concepto de bienestar?",
    response: "El bienestar es el estado de salud física y mental positiva, junto con la satisfacción general con la vida."
  },
  {
    input: "¿Qué significa la globalización económica?",
    response: "La globalización económica se refiere a la creciente interdependencia económica de los países, debido al aumento del comercio y la inversión internacional."
  },
  {
    input: "¿Qué es la teoría de la mente?",
    response: "La teoría de la mente es la capacidad de atribuir estados mentales (pensamientos, creencias, deseos) a otros y comprender que los demás tienen perspectivas diferentes."
  },
  {
    input: "¿Qué significa la geopolítica?",
    response: "La geopolítica estudia la influencia de la geografía, la economía y la política en las relaciones internacionales y la toma de decisiones globales."
  },
  {
    input: "¿Qué es la física relativista?",
    response: "La física relativista es la rama de la física que estudia fenómenos que ocurren a velocidades cercanas a la de la luz, tal como la teoría de la relatividad de Einstein."
  },
  {
    input: "¿Qué significa la economía conductual?",
    response: "La economía conductual estudia cómo las decisiones económicas son influenciadas por factores psicológicos, sociales y emocionales."
  },
  {
    input: "¿Qué es el arte contemporáneo?",
    response: "El arte contemporáneo se refiere a las formas de arte creadas en la segunda mitad del siglo XX y hasta la actualidad, a menudo influenciado por la tecnología y el contexto social."
  },
  {
    input: "¿Qué es el modelo neoliberal?",
    response: "El modelo neoliberal es una teoría económica que promueve la reducción del papel del estado en la economía y la expansión de los mercados libres."
  },
  {
    input: "¿Qué es el ciberespacio?",
    response: "El ciberespacio es el entorno virtual formado por la interconexión de redes de comunicación globales y las actividades realizadas en él."
  },
  {
    input: "¿Qué significa la sostenibilidad económica?",
    response: "La sostenibilidad económica se refiere a la capacidad de una economía para mantenerse a largo plazo, garantizando el bienestar sin agotar los recursos."
  },
  {
    input: "¿Qué es el pensamiento crítico?",
    response: "El pensamiento crítico es la capacidad de analizar y evaluar información de manera objetiva, buscando la verdad y evitando prejuicios."
  },
  {
    input: "¿Qué es la inteligencia artificial explicativa?",
    response: "La inteligencia artificial explicativa busca que los sistemas de inteligencia artificial puedan proporcionar explicaciones claras y comprensibles sobre sus decisiones y procesos."
  },
  {
    input: "¿Qué es la programación?",
    response: "La programación es el proceso de escribir, probar y mantener el código que permite a las computadoras ejecutar tareas específicas."
},
{
    input: "¿Qué es un algoritmo?",
    response: "Un algoritmo es una serie de pasos ordenados y finitos que resuelven un problema o realizan una tarea."
},
{
    input: "¿Quién fue Albert Einstein?",
    response: "Albert Einstein fue un físico teórico conocido por desarrollar la teoría de la relatividad, que revolucionó la física moderna."
},
{
    input: "¿Qué es una galaxia?",
    response: "Una galaxia es un sistema masivo de estrellas, planetas, gases y polvo unidos por la gravedad."
},
{
    input: "¿Qué es una red neuronal?",
    response: "Una red neuronal es un modelo computacional inspirado en el cerebro humano, utilizado en inteligencia artificial para aprender patrones y hacer predicciones."
},
{
    input: "¿Qué es la música?",
    response: "La música es el arte de combinar sonidos y silencios en el tiempo para expresar emociones o ideas."
},
{
    input: "¿Qué es el Big Bang?",
    response: "El Big Bang es la teoría que explica el origen del universo como una gran explosión que ocurrió hace aproximadamente 13.8 mil millones de años."
},
{
    input: "¿Qué es el arte?",
    response: "El arte es una forma de expresión humana que utiliza diversos medios como la pintura, la escultura, la música y la danza para comunicar emociones e ideas."
},
{
    input: "¿Cómo se define la felicidad?",
    response: "La felicidad es un estado emocional positivo que resulta de la satisfacción con la vida y las experiencias agradables."
},
{
    input: "¿Qué es el respeto?",
    response: "El respeto es un valor fundamental que implica reconocer y valorar los derechos, las opiniones y las cualidades de los demás."
},
{
    input: "¿Qué es un agujero negro?",
    response: "Un agujero negro es una región del espacio con una fuerza gravitacional tan fuerte que nada, ni siquiera la luz, puede escapar de él."
},
{
  input: "¿Qué es la fotosíntesis?",
  response: "La fotosíntesis es el proceso por el cual las plantas convierten la luz solar en energía química."
},
{
  input: "¿Quién escribió 'Don Quijote de la Mancha'?",
  response: "El autor de 'Don Quijote de la Mancha' es Miguel de Cervantes."
},
{
  input: "¿Cuál es el idioma más hablado en el mundo?",
  response: "El idioma más hablado en el mundo por número de hablantes nativos es el mandarín."
},
{
  input: "¿Qué país tiene más islas en el mundo?",
  response: "Suecia tiene más islas que cualquier otro país en el mundo."
},
{
  input: "¿Quién ganó el último Mundial de Fútbol?",
  response: "El último Mundial de Fútbol lo ganó Argentina en 2022."
},
{
  input: "¿Qué es el baloncesto?",
  response: "El baloncesto es un deporte en el que dos equipos compiten para anotar puntos lanzando un balón a través de un aro."
},
{
  input: "¿Quién es el mejor tenista del mundo?",
  response: "La respuesta depende del ranking actual, pero Novak Djokovic, Rafael Nadal y Roger Federer suelen destacarse."
},
{
  input: "¿Cómo puedo llevar una dieta saludable?",
  response: "Para llevar una dieta saludable, incluye frutas, verduras, proteínas magras y evita alimentos ultraprocesados y azúcares añadidos."
},
{
  input: "¿Cuántas horas debo dormir al día?",
  response: "Se recomienda dormir entre 7 y 9 horas por noche para adultos."
},
{
  input: "¿Qué es el ejercicio cardiovascular?",
  response: "El ejercicio cardiovascular incluye actividades como correr, nadar o andar en bicicleta, que mejoran la salud del corazón."
},  
{
    input: "¿Qué es la economía?",
    response: "La economía es la ciencia que estudia cómo las personas y las sociedades gestionan los recursos escasos para satisfacer sus necesidades."
},
{
    input: "¿Qué es un ecosistema?",
    response: "Un ecosistema es una comunidad de seres vivos que interactúan entre sí y con su entorno en un área específica."
},
{
    input: "¿Qué es el teatro?",
    response: "El teatro es una forma de arte que utiliza actores en un escenario para representar historias frente a una audiencia."
},
{
    input: "¿Qué es la globalización?",
    response: "La globalización es el proceso de integración mundial a través del intercambio de bienes, ideas, cultura y tecnología."
},
{
    input: "¿Qué es un virus informático?",
    response: "Un virus informático es un programa malicioso diseñado para dañar, robar información o interrumpir el funcionamiento de un sistema."
},
{
    input: "¿Qué es la psicología?",
    response: "La psicología es la ciencia que estudia el comportamiento humano y los procesos mentales."
},
{
    input: "¿Qué es el agua?",
    response: "El agua es una sustancia química compuesta por dos átomos de hidrógeno y uno de oxígeno, esencial para la vida en la Tierra."
},
{
    input: "¿Qué es la literatura?",
    response: "La literatura es el arte de la palabra escrita o hablada que busca expresar ideas, emociones e historias."
},
{
    input: "¿Qué son las emociones?",
    response: "Las emociones son respuestas psicológicas y fisiológicas a estímulos internos o externos que influyen en nuestro comportamiento."
},
{
    input: "¿Qué es un lenguaje de programación?",
    response: "Un lenguaje de programación es un conjunto de reglas y símbolos que permiten a los programadores escribir instrucciones para las computadoras."
},
{
    input: "¿Qué es un sistema operativo?",
    response: "Un sistema operativo es el software que administra los recursos de hardware y software en una computadora y permite la interacción con el usuario."
},
{
    input: "¿Qué es el tiempo?",
    response: "El tiempo es una magnitud física que permite medir la duración y el orden de los eventos."
},
{
    input: "¿Qué es una estrella?",
    response: "Una estrella es un cuerpo celeste compuesto principalmente de hidrógeno y helio que produce luz y calor a través de la fusión nuclear."
},
{
    input: "¿Qué es el cine?",
    response: "El cine es una forma de arte y entretenimiento que utiliza imágenes en movimiento para contar historias."
},
{
    input: "¿Qué es el aprendizaje automático?",
    response: "El aprendizaje automático es un subcampo de la inteligencia artificial que permite a las máquinas aprender y mejorar a partir de datos sin ser programadas explícitamente."
},
{
    input: "¿Qué es la ética?",
    response: "La ética es la rama de la filosofía que estudia los principios y valores que guían el comportamiento humano."
},
{
    input: "¿Qué es la luz?",
    response: "La luz es una forma de energía que viaja en ondas y es visible para el ojo humano."
},
{
    input: "¿Qué es un planeta?",
    response: "Un planeta es un cuerpo celeste que orbita una estrella, tiene suficiente masa para ser esférico y ha despejado su órbita de otros objetos."
},
{
  input: "Hola",
  response: "¡Hola! ¿Cómo estás?"
},
{
  input: "Buenas tardes",
  response: "¡Buenas tardes! Espero que tengas un gran día."
},
{
  input: "Buenos días",
  response: "¡Buenos días! ¿En qué puedo ayudarte hoy?"
},
{
  input: "Buenas noches",
  response: "¡Buenas noches! Espero que tengas un buen descanso."
},
{
  input: "¿Qué tal?",
  response: "¡Hola! Todo bien, ¿y tú?"
},
{
  input: "Hola, ¿cómo va todo?",
  response: "¡Hola! Todo va bien, gracias por preguntar. ¿Y tú?"
},
{
  input: "¡Hey!",
  response: "¡Hey! ¿Qué tal?"
},
{
  input: "¡Hola amigo!",
  response: "¡Hola! Me alegra verte por aquí."
},
{
  input: "¿Cómo estás?",
  response: "Estoy bien, gracias. ¿Y tú?"
},
{
  input: "¿Qué onda?",
  response: "¡Hola! Todo tranquilo, ¿y tú?"
},
{
  input: "Saludos",
  response: "¡Saludos! ¿Cómo te va?"
},
{
  input: "¡Hola a todos!",
  response: "¡Hola! Espero que todos estén muy bien."
},
{
  input: "Hola, ¿qué hay de nuevo?",
  response: "¡Hola! No mucho, ¿y tú? ¿Qué hay de nuevo?"
},
{
  input: "¡Buenas!",
  response: "¡Buenas! ¿Cómo te encuentras hoy?"
},
{
  input: "Hola, ¿qué tal tu día?",
  response: "¡Hola! Mi día va genial, gracias por preguntar. ¿Y el tuyo?"
},
{
  input: "¡Hola, mundo!",
  response: "¡Hola, mundo! Es un placer estar aquí contigo."
},
{
  input: "Hola, ¿qué haces?",
  response: "¡Hola! Aquí, listo para ayudarte. ¿Y tú, qué haces?"
},
{
  input: "¡Qué gusto verte!",
  response: "¡El gusto es mío! ¿Cómo estás?"
},
{
  input: "¡Hola de nuevo!",
  response: "¡Hola otra vez! ¿En qué puedo ayudarte ahora?"
},
{
  input: "¡Buenas, qué tal todo?",
  response: "¡Buenas! Todo va bien, gracias. ¿Y tú?"
},
{
  input: "Hola, ¿me recuerdas?",
  response: "¡Hola! Claro que sí. ¿Cómo te va?"
},
{
  input: "¡Hola, amigo mío!",
  response: "¡Hola! Qué gusto saludarte."
},
{
  input: "Hola, Chatbot",
  response: "¡Hola! ¿Cómo estás?"
},
{
  input: "Hola, ¿cómo amaneciste?",
  response: "¡Hola! Amanecí muy bien, gracias. ¿Y tú?"
},
{
  input: "Hola, ¿cómo va tu día?",
  response: "¡Hola! Mi día va excelente, gracias. ¿Y el tuyo?"
},
{
  input: "Hola, ¿qué cuentas?",
  response: "¡Hola! Todo tranquilo por aquí, ¿y tú?"
},
{
  input: "Hola, ¿qué tal tu mañana?",
  response: "¡Hola! Mi mañana ha sido productiva. ¿Y la tuya?"
},
{
  input: "Hola, ¿qué tal tu tarde?",
  response: "¡Hola! Mi tarde va bien, gracias. ¿Y la tuya?"
},
{
  input: "Hola, ¿qué tal tu noche?",
  response: "¡Hola! Mi noche está tranquila. ¿Y la tuya?"
},
{
  input: "¡Qué gusto saludarte!",
  response: "¡El gusto es mío! ¿En qué puedo ayudarte?"
},
{
input: "¡Hola, qué alegría verte!",
response: "¡Hola! El sentimiento es mutuo. ¿Cómo te va?"
},
{
input: "Buenas, ¿cómo marcha todo?",
response: "¡Hola! Todo marcha bien, gracias por preguntar. ¿Y tú?"
},
{
input: "¡Hola, cómo te encuentras hoy?",
response: "¡Hola! Me encuentro excelente, gracias. ¿Y tú?"
},
{
input: "Hola, ¿qué novedades tienes?",
response: "¡Hola! No muchas novedades por aquí, pero dispuesto a charlar contigo."
},
{
input: "¡Buenas, qué sorpresa verte por aquí!",
response: "¡Hola! Me alegra sorprenderte. ¿Cómo estás?"
},
{
input: "Hola, espero que estés bien",
response: "¡Hola! Muchas gracias, espero que tú también lo estés."
},
{
input: "¡Hey, cómo anda la cosa?",
response: "¡Hey! Todo en orden, ¿y tú?"
},
{
input: "Hola, ¿cómo te va la vida?",
response: "¡Hola! La vida me trata bien, ¿y a ti?"
},
{
input: "¡Hola, qué buena energía tienes!",
response: "¡Gracias! ¡Tú también irradias buena energía! ¿En qué puedo ayudarte?"
},
{
input: "Hola, ¿cómo pinta el día?",
response: "¡Hola! El día pinta bien, ¿y el tuyo?"
},
{
input: "¡Hola, cuánto tiempo sin verte!",
response: "¡Hola! Sí, ha pasado un tiempo. ¿Qué tal todo?"
},
{
input: "Hola, ¿qué tal te sientes hoy?",
response: "¡Hola! Me siento genial, gracias. ¿Y tú cómo estás?"
},
{
input: "¡Hola, qué tal la vida últimamente?",
response: "¡Hola! Todo marcha bien últimamente, ¿y tú?"
},
{
input: "Hola, ¿qué hay de interesante?",
response: "¡Hola! Muchas cosas interesantes por descubrir. ¿Tienes algo en mente?"
},
{
input: "¡Hola, compañero!",
response: "¡Hola! ¿Qué tal va todo?"
},
{
input: "Hola, ¿cómo has estado estos días?",
response: "¡Hola! He estado bien, gracias. ¿Y tú?"
},
{
input: "Hola, ¿cómo está todo por tu lado?",
response: "¡Hola! Todo está tranquilo por aquí. ¿Y tú?"
},
{
input: "Hasta luego, que tengas un buen día.",
response: "¡Gracias! Que tengas un excelente día también. Nos vemos pronto."
},
{
input: "Adiós, hablamos luego.",
response: "¡Adiós! Estaré aquí cuando me necesites. Hasta luego."
},
{
input: "Nos vemos mañana.",
response: "¡Perfecto! Hasta mañana. Cuídate."
},
{
input: "Chao, cuídate mucho.",
response: "¡Chao! Cuídate también. ¡Que estés bien!"
},
{
input: "Me tengo que ir, nos vemos.",
response: "¡Entendido! Hasta la próxima, que te vaya bien."
},
{
input: "Fue un gusto hablar contigo. Adiós.",
response: "¡El gusto fue mío! Adiós, espero que volvamos a hablar pronto."
},
{
input: "Me despido, hasta la próxima.",
response: "¡Hasta la próxima! Que tengas un gran día."
},
{
input: "Bueno, ya me voy. Cuídate.",
response: "¡Claro! Cuídate mucho también. Hasta luego."
},
{
input: "Nos vemos más tarde.",
response: "¡De acuerdo! Nos vemos más tarde. Estaré aquí cuando vuelvas."
},
{
input: "Me desconecto, que estés bien.",
response: "¡Hasta luego! Que todo te salga bien."
},
{
input: "Te dejo por ahora, hablamos después.",
response: "¡Está bien! Hablamos después. Cuídate."
},
{
input: "Creo que es hora de despedirnos.",
response: "Tienes razón, ha sido un placer. ¡Hasta pronto!"
},
{
input: "Adiós, ha sido un gusto.",
response: "¡Adiós! El gusto ha sido mío. Nos vemos pronto."
},
{
input: "Me retiro, que tengas buena tarde.",
response: "¡Hasta luego! Espero que tengas una tarde excelente."
},
{
input: "Bueno, esto es todo por hoy.",
response: "¡Entendido! Hasta la próxima, espero que tengas un buen día."
},
{
input: "Nos vemos en otra ocasión.",
response: "¡Claro! Hasta la próxima. Cuídate mucho."
},
{
input: "Fue un gusto, pero debo irme.",
response: "¡El gusto fue mío! Que te vaya muy bien."
},
{
input: "Ya es tarde, mejor me voy.",
response: "¡Claro! Descansa bien y nos vemos pronto."
},
{
input: "Hasta aquí llegamos por ahora.",
response: "De acuerdo, hasta aquí por hoy. ¡Nos vemos pronto!"
},
{
input: "Te dejo, cuídate mucho.",
response: "¡Gracias! Cuídate también. Hasta la próxima."
},
{
input: "Bueno, tengo que irme ya.",
response: "¡Entendido! Que te vaya bien. Nos vemos luego."
},
{
input: "Chao, nos vemos en la próxima charla.",
response: "¡Chao! Estaré esperando nuestra próxima conversación."
},
{
input: "Gracias por tu ayuda.",
response: "¡De nada! Me alegra haber podido ayudarte. Vuelve cuando lo necesites."
},
{
input: "Fue útil hablar contigo. Gracias.",
response: "¡Gracias a ti por confiar en mí! Siempre estoy aquí para ayudarte."
},
{
input: "Gracias por todo.",
response: "¡Es un placer ayudarte! Espero volver a verte pronto."
},
{
input: "Me ayudaste mucho, gracias.",
response: "¡De nada! Me alegra haber sido útil. Vuelve cuando quieras."
},
{
input: "Gracias por responder mis preguntas.",
response: "¡Con gusto! Si tienes más preguntas, no dudes en preguntar."
},
{
input: "Hasta luego y gracias.",
response: "¡Hasta luego! Gracias por usar este modelo. Que tengas un excelente día."
},
{
input: "Aprecio tu ayuda. Gracias.",
response: "¡Gracias a ti por permitirme ayudarte! Espero verte pronto."
},
{
input: "Te agradezco mucho.",
response: "¡No hay de qué! Siempre es un gusto ayudarte."
},
{
input: "Gracias por estar ahí.",
response: "¡Siempre estaré aquí para ti! Gracias por usar este modelo."
},
{
input: "Me sirvió mucho tu ayuda, gracias.",
response: "¡Qué alegría saber eso! Siempre que lo necesites, estaré aquí."
},
{
input: "Gracias por tu tiempo.",
response: "¡Gracias a ti por usar este modelo! Espero haber sido de ayuda."
},
{
input: "Gracias, me voy satisfecho.",
response: "¡Eso es genial! Gracias por confiar en mí. Nos vemos pronto."
},
{
input: "Buen trabajo, gracias.",
response: "¡Gracias! Tus palabras son muy valiosas. Estoy aquí para ayudarte cuando quieras."
},
{
input: "Gracias por ser tan claro.",
response: "¡De nada! Mi objetivo es que todo quede claro. Nos vemos la próxima vez."
},
{
input: "Me voy, pero gracias por todo.",
response: "¡Gracias a ti! Espero verte de nuevo. Cuídate mucho."
},
{
input: "Cuéntame un chiste.",
response: "¿Por qué el libro de matemáticas estaba triste? Porque tenía demasiados problemas."
},
{
input: "Dime un chiste corto.",
response: "¡Claro! ¿Qué hace una abeja en el gimnasio? ¡Zum-ba!"
},
{
input: "¿Sabes algún chiste bueno?",
response: "¡Sí! ¿Por qué el computador fue al médico? Porque tenía un virus."
},
{
input: "Hazme reír.",
response: "¿Qué le dice una impresora a otra? ¡Esa hoja es tuya o es una copia!"
},
{
input: "Dime algo gracioso.",
response: "¿Por qué no puedes confiar en un átomo? ¡Porque lo inventan todo!"
},
{
input: "Dime una broma.",
response: "¿Qué hace un perro con un taladro? ¡Taladrando!"
},
{
input: "Dame una broma ligera.",
response: "¿Qué hace un pez cuando ve Netflix? ¡Pone su aletas favoritas!"
},
{
input: "¿Puedes decir una broma tonta?",
response: "Claro. ¿Qué hace un café en el gimnasio? ¡Se pone espresso!"
},
{
input: "Broma rápida, por favor.",
response: "¿Qué hace una cama en el hospital? ¡Se encuentra en recuperación!"
},
{
input: "¿Sabes bromas simples?",
response: "¡Sí! ¿Por qué el tomate no toma decisiones? Porque siempre está hecho puré."
},
{
input: "Dime una adivinanza.",
response: "Blanca por dentro, verde por fuera. Si quieres que te lo diga, espera. ¿Qué es? ¡La pera!"
},
{
input: "Quiero una adivinanza difícil.",
response: "Tengo ojos, pero no veo. Tengo corona, pero no soy rey. ¿Qué soy? ¡Una piña!"
},
{
input: "¿Puedes decirme una adivinanza fácil?",
response: "Llevo años en el mar y no sé nadar. ¿Quién soy? ¡El ancla!"
},
{
input: "Dame una adivinanza rápida.",
response: "Vuelo sin alas, lloro sin ojos. ¿Qué soy? ¡La nube!"
},
{
input: "¿Sabes adivinanzas para niños?",
response: "Tengo orejas largas, salto muy alto, como zanahorias y vivo en el campo. ¿Quién soy? ¡El conejo!"
},
{
input: "Dame una frase motivacional.",
response: "No importa lo lento que vayas, siempre y cuando no te detengas."
},
{
input: "Quiero una frase de inspiración.",
response: "El éxito no se mide por lo que logras, sino por los obstáculos que superas."
},
{
input: "¿Tienes alguna frase motivadora?",
response: "La clave del éxito es empezar antes de estar listo."
},
{
input: "Necesito ánimos. ¿Tienes una frase?",
response: "Cree en ti mismo y todo será posible."
},
{
input: "¿Puedes darme una frase positiva?",
response: "Cada día es una nueva oportunidad para ser mejor que ayer."
},
{
input: "Dame una frase para reflexionar.",
response: "La vida no se trata de encontrarte a ti mismo, sino de crearte a ti mismo."
},
{
input: "¿Tienes alguna frase profunda?",
response: "Lo esencial es invisible a los ojos. Solo se ve bien con el corazón."
},
{
input: "Quiero una frase filosófica.",
response: "No es más rico quien más tiene, sino quien menos necesita."
},
{
input: "Dame una frase sabia.",
response: "El sabio no dice todo lo que piensa, pero siempre piensa todo lo que dice."
},
{
input: "Dime algo para pensar.",
response: "El tiempo es la única riqueza que no se puede recuperar."
},
{
input: "Dame una frase de amor.",
response: "El amor no se mira, se siente, y aún más cuando estás junto a mí."
},
{
input: "Quiero algo romántico.",
response: "Eres la razón por la que sonrío cada día."
},
{
input: "¿Tienes frases bonitas de amor?",
response: "Te amo no solo por lo que eres, sino por lo que soy cuando estoy contigo."
},
{
input: "Dame una frase para dedicar.",
response: "Tu amor es la melodía que llena mi vida de armonía."
},
{
input: "¿Puedes darme una frase romántica?",
response: "Desde que te conocí, sé que los milagros existen."
},
{
input: "Dame una frase graciosa.",
response: "No soy perezoso, estoy en modo ahorro de energía."
},
{
input: "Quiero una frase divertida.",
response: "La vida es corta, sonríele a quien te hace reír... y cómete el postre primero."
},
{
input: "¿Tienes frases chistosas?",
response: "No tengo estrés, tengo un compañero invisible llamado caos que me acompaña siempre."
},
{
input: "Algo gracioso, por favor.",
response: "No tengo todo lo que quiero, pero tengo WiFi, y eso es suficiente por ahora."
},
{
input: "Frase para reírme.",
response: "A veces pienso que me esfuerzo tanto en no hacer nada, que ya es todo un logro."
},
{
input: "Hola, ¿cómo estás?",
response: "¡Hola! Estoy bien, ¿y tú?"
},
{
input: "¿Qué puedes hacer?",
response: "Soy un chatbot que puede responder tus preguntas y mantener una conversación básica."
},
{
input: "¿Cuál es tu nombre?",
response: "Soy tu asistente virtual, puedes llamarme Chatbot."
},
{
input: "Adiós",
response: "¡Hasta luego! Espero verte pronto."
},
{
input: "¿Qué es la inteligencia artificial?",
response: "La inteligencia artificial es el campo de estudio que se enfoca en crear máquinas capaces de realizar tareas que normalmente requieren inteligencia humana."
},
{
input: "¿Qué significa la teoría de la relatividad?",
response: "La teoría de la relatividad, propuesta por Albert Einstein, establece que las leyes de la física son las mismas para todos los observadores en movimiento relativo entre sí."
},
{
input: "¿Qué es el cambio climático?",
response: "El cambio climático se refiere a los cambios significativos y duraderos en las condiciones climáticas globales, principalmente causado por la actividad humana."
},
{
input: "¿Cómo se define el amor?",
response: "El amor es un sentimiento complejo que involucra afecto, apego y cuidado hacia otra persona u objeto."
},
{
input: "¿Qué es la democracia?",
response: "La democracia es un sistema de gobierno en el que el poder es ejercido por el pueblo, a través del sufragio libre y elecciones periódicas."
},
{
input: "¿Qué significa la teoría de cuerdas?",
response: "La teoría de cuerdas es una teoría física que propone que las partículas fundamentales no son puntos, sino cuerdas vibrantes de energía."
},
{
input: "¿Qué es la evolución?",
response: "La evolución es el proceso mediante el cual las especies cambian a lo largo del tiempo debido a la selección natural y otros factores."
},
{
input: "¿Cómo se define el liderazgo?",
response: "El liderazgo es la capacidad de influir y guiar a un grupo de personas para alcanzar un objetivo común."
},
{
input: "¿Qué es la física cuántica?",
response: "La física cuántica es la rama de la física que estudia los fenómenos a escalas extremadamente pequeñas, como partículas subatómicas."
},
{
input: "¿Qué significa la economía circular?",
response: "La economía circular es un modelo económico que busca reducir el desperdicio y aprovechar al máximo los recursos al cerrar el ciclo de vida de los productos."
},
{
input: "¿Qué es el capitalismo?",
response: "El capitalismo es un sistema económico basado en la propiedad privada de los medios de producción y en la libre competencia."
},
{
input: "¿Cómo se define la globalización?",
response: "La globalización es el proceso de interconexión e interdependencia de los países a nivel económico, cultural y político."
},
{
input: "¿Qué es el arte moderno?",
response: "El arte moderno se refiere a las obras de arte que se desarrollaron desde finales del siglo XIX hasta mediados del siglo XX, caracterizadas por nuevas formas de expresión."
},
{
input: "¿Qué significa el término blockchain?",
response: "Blockchain es una tecnología de registro distribuido que permite almacenar información de manera segura y descentralizada."
},
{
input: "¿Qué es la sostenibilidad?",
response: "La sostenibilidad es la capacidad de mantener o mejorar los sistemas ambientales, sociales y económicos sin comprometer las necesidades de las futuras generaciones."
},
{
input: "¿Qué significa la biodiversidad?",
response: "La biodiversidad es la variedad de formas de vida en la Tierra, que incluye especies, ecosistemas y diversidad genética."
},
{
input: "¿Qué es el metaverso?",
response: "El metaverso es un espacio virtual compartido, generado por la interacción de la realidad física y la digital, donde los usuarios pueden interactuar en tiempo real."
},
{
input: "¿Qué es el feminismo?",
response: "El feminismo es un movimiento social y político que busca la igualdad de derechos entre mujeres y hombres."
},
{
input: "¿Qué es la ética?",
response: "La ética es la rama de la filosofía que estudia los principios de la moralidad y la conducta humana."
},
{
input: "¿Qué significa la inteligencia emocional?",
response: "La inteligencia emocional se refiere a la capacidad de reconocer, comprender y manejar nuestras propias emociones y las de los demás."
},
{
input: "¿Qué es el Big Data?",
response: "Big Data es un conjunto de datos extremadamente grandes y complejos que requieren herramientas especiales para su procesamiento y análisis."
},
{
input: "¿Cómo se define el concepto de marketing?",
response: "El marketing es el conjunto de actividades y estrategias utilizadas para promover y vender productos o servicios."
},
{
input: "¿Qué significa la nanotecnología?",
response: "La nanotecnología es la manipulación de la materia a una escala molecular o atómica para desarrollar productos nuevos y avanzados."
},
{
input: "¿Qué es el transhumanismo?",
response: "El transhumanismo es un movimiento filosófico y científico que busca mejorar las capacidades humanas mediante la tecnología."
},
{
input: "¿Qué es el universo?",
response: "El universo es el conjunto de todo lo que existe: la totalidad del espacio, tiempo, materia y energía."
},
{
input: "¿Cómo se define el concepto de justicia?",
response: "La justicia es el concepto moral y político que busca la equidad y la imparcialidad en la distribución de recursos, oportunidades y derechos."
},
{
input: "¿Qué es la física de partículas?",
response: "La física de partículas estudia las partículas fundamentales que constituyen la materia y las fuerzas que las gobiernan."
},
{
input: "¿Qué significa el concepto de democracia participativa?",
response: "La democracia participativa es un modelo en el que los ciudadanos tienen una participación directa en la toma de decisiones políticas, más allá del voto."
},
{
input: "¿Qué es el socialismo?",
response: "El socialismo es una ideología política y económica que aboga por la propiedad colectiva de los medios de producción y la distribución equitativa de los recursos."
},
{
input: "¿Qué es el materialismo histórico?",
response: "El materialismo histórico es una teoría de Karl Marx que sostiene que la historia humana es el resultado de la lucha de clases y de la evolución de los modos de producción."
},
{
input: "¿Qué significa la neurociencia?",
response: "La neurociencia es el estudio del sistema nervioso, incluyendo el cerebro y su influencia en el comportamiento y las funciones cognitivas."
},
{
input: "¿Qué es la ética profesional?",
response: "La ética profesional se refiere a los principios morales y las normas que guían el comportamiento dentro de una determinada profesión."
},
{
input: "¿Qué es la biotecnología?",
response: "La biotecnología es el uso de organismos vivos o sus componentes para desarrollar productos y soluciones en áreas como la medicina, la agricultura y la industria."
},
{
input: "¿Qué significa el concepto de resiliencia?",
response: "La resiliencia es la capacidad de un sistema o individuo para resistir y adaptarse frente a situaciones adversas o de cambio."
},
{
input: "¿Qué es la inteligencia colectiva?",
response: "La inteligencia colectiva es la capacidad compartida de un grupo de individuos para resolver problemas, crear ideas y tomar decisiones."
},
{
input: "¿Qué es el cambio tecnológico?",
response: "El cambio tecnológico se refiere a la evolución de las tecnologías y cómo estas transforman las sociedades y economías."
},
{
input: "¿Cómo se define el concepto de bienestar?",
response: "El bienestar es el estado de salud física y mental positiva, junto con la satisfacción general con la vida."
},
{
input: "¿Qué significa la globalización económica?",
response: "La globalización económica se refiere a la creciente interdependencia económica de los países, debido al aumento del comercio y la inversión internacional."
},
{
input: "¿Qué es la teoría de la mente?",
response: "La teoría de la mente es la capacidad de atribuir estados mentales (pensamientos, creencias, deseos) a otros y comprender que los demás tienen perspectivas diferentes."
},
{
input: "¿Qué significa la geopolítica?",
response: "La geopolítica estudia la influencia de la geografía, la economía y la política en las relaciones internacionales y la toma de decisiones globales."
},
{
input: "¿Qué es la física relativista?",
response: "La física relativista es la rama de la física que estudia fenómenos que ocurren a velocidades cercanas a la de la luz, tal como la teoría de la relatividad de Einstein."
},
{
input: "¿Qué significa la economía conductual?",
response: "La economía conductual estudia cómo las decisiones económicas son influenciadas por factores psicológicos, sociales y emocionales."
},
{
input: "¿Qué es el arte contemporáneo?",
response: "El arte contemporáneo se refiere a las formas de arte creadas en la segunda mitad del siglo XX y hasta la actualidad, a menudo influenciado por la tecnología y el contexto social."
},
{
input: "¿Qué es el modelo neoliberal?",
response: "El modelo neoliberal es una teoría económica que promueve la reducción del papel del estado en la economía y la expansión de los mercados libres."
},
{
input: "¿Qué es el ciberespacio?",
response: "El ciberespacio es el entorno virtual formado por la interconexión de redes de comunicación globales y las actividades realizadas en él."
},
{
input: "¿Qué significa la sostenibilidad económica?",
response: "La sostenibilidad económica se refiere a la capacidad de una economía para mantenerse a largo plazo, garantizando el bienestar sin agotar los recursos."
},
{
input: "¿Qué es el pensamiento crítico?",
response: "El pensamiento crítico es la capacidad de analizar y evaluar información de manera objetiva, buscando la verdad y evitando prejuicios."
},
{
input: "¿Qué es la inteligencia artificial explicativa?",
response: "La inteligencia artificial explicativa busca que los sistemas de inteligencia artificial puedan proporcionar explicaciones claras y comprensibles sobre sus decisiones y procesos."
},
{
input: "¿Qué es la programación?",
response: "La programación es el proceso de escribir, probar y mantener el código que permite a las computadoras ejecutar tareas específicas."
},
{
input: "¿Qué es un algoritmo?",
response: "Un algoritmo es una serie de pasos ordenados y finitos que resuelven un problema o realizan una tarea."
},
{
input: "¿Quién fue Albert Einstein?",
response: "Albert Einstein fue un físico teórico conocido por desarrollar la teoría de la relatividad, que revolucionó la física moderna."
},
{
input: "¿Qué es una galaxia?",
response: "Una galaxia es un sistema masivo de estrellas, planetas, gases y polvo unidos por la gravedad."
},
{
input: "¿Qué es una red neuronal?",
response: "Una red neuronal es un modelo computacional inspirado en el cerebro humano, utilizado en inteligencia artificial para aprender patrones y hacer predicciones."
},
{
input: "¿Qué es la música?",
response: "La música es el arte de combinar sonidos y silencios en el tiempo para expresar emociones o ideas."
},
{
input: "¿Qué es el Big Bang?",
response: "El Big Bang es la teoría que explica el origen del universo como una gran explosión que ocurrió hace aproximadamente 13.8 mil millones de años."
},
{
input: "¿Qué es el arte?",
response: "El arte es una forma de expresión humana que utiliza diversos medios como la pintura, la escultura, la música y la danza para comunicar emociones e ideas."
},
{
input: "¿Cómo se define la felicidad?",
response: "La felicidad es un estado emocional positivo que resulta de la satisfacción con la vida y las experiencias agradables."
},
{
input: "¿Qué es el respeto?",
response: "El respeto es un valor fundamental que implica reconocer y valorar los derechos, las opiniones y las cualidades de los demás."
},
{
input: "¿Qué es un agujero negro?",
response: "Un agujero negro es una región del espacio con una fuerza gravitacional tan fuerte que nada, ni siquiera la luz, puede escapar de él."
},
{
input: "¿Qué es la fotosíntesis?",
response: "La fotosíntesis es el proceso por el cual las plantas convierten la luz solar en energía química."
},
{
input: "¿Quién escribió 'Don Quijote de la Mancha'?",
response: "El autor de 'Don Quijote de la Mancha' es Miguel de Cervantes."
},
{
input: "¿Cuál es el idioma más hablado en el mundo?",
response: "El idioma más hablado en el mundo por número de hablantes nativos es el mandarín."
},
{
input: "¿Qué país tiene más islas en el mundo?",
response: "Suecia tiene más islas que cualquier otro país en el mundo."
},
{
input: "¿Quién ganó el último Mundial de Fútbol?",
response: "El último Mundial de Fútbol lo ganó Argentina en 2022."
},
{
input: "¿Qué es el baloncesto?",
response: "El baloncesto es un deporte en el que dos equipos compiten para anotar puntos lanzando un balón a través de un aro."
},
{
input: "¿Quién es el mejor tenista del mundo?",
response: "La respuesta depende del ranking actual, pero Novak Djokovic, Rafael Nadal y Roger Federer suelen destacarse."
},
{
input: "¿Cómo puedo llevar una dieta saludable?",
response: "Para llevar una dieta saludable, incluye frutas, verduras, proteínas magras y evita alimentos ultraprocesados y azúcares añadidos."
},
{
input: "¿Cuántas horas debo dormir al día?",
response: "Se recomienda dormir entre 7 y 9 horas por noche para adultos."
},
{
input: "¿Qué es el ejercicio cardiovascular?",
response: "El ejercicio cardiovascular incluye actividades como correr, nadar o andar en bicicleta, que mejoran la salud del corazón."
},  
{
input: "¿Qué es la economía?",
response: "La economía es la ciencia que estudia cómo las personas y las sociedades gestionan los recursos escasos para satisfacer sus necesidades."
},
{
input: "¿Qué es un ecosistema?",
response: "Un ecosistema es una comunidad de seres vivos que interactúan entre sí y con su entorno en un área específica."
},
{
input: "¿Qué es el teatro?",
response: "El teatro es una forma de arte que utiliza actores en un escenario para representar historias frente a una audiencia."
},
{
input: "¿Qué es la globalización?",
response: "La globalización es el proceso de integración mundial a través del intercambio de bienes, ideas, cultura y tecnología."
},
{
input: "¿Qué es un virus informático?",
response: "Un virus informático es un programa malicioso diseñado para dañar, robar información o interrumpir el funcionamiento de un sistema."
},
{
input: "¿Qué es la psicología?",
response: "La psicología es la ciencia que estudia el comportamiento humano y los procesos mentales."
},
{
input: "¿Qué es el agua?",
response: "El agua es una sustancia química compuesta por dos átomos de hidrógeno y uno de oxígeno, esencial para la vida en la Tierra."
},
{
input: "¿Qué es la literatura?",
response: "La literatura es el arte de la palabra escrita o hablada que busca expresar ideas, emociones e historias."
},
{
input: "¿Qué son las emociones?",
response: "Las emociones son respuestas psicológicas y fisiológicas a estímulos internos o externos que influyen en nuestro comportamiento."
},
{
input: "¿Qué es un lenguaje de programación?",
response: "Un lenguaje de programación es un conjunto de reglas y símbolos que permiten a los programadores escribir instrucciones para las computadoras."
},
{
input: "¿Qué es un sistema operativo?",
response: "Un sistema operativo es el software que administra los recursos de hardware y software en una computadora y permite la interacción con el usuario."
},
{
input: "¿Qué es el tiempo?",
response: "El tiempo es una magnitud física que permite medir la duración y el orden de los eventos."
},
{
input: "¿Qué es una estrella?",
response: "Una estrella es un cuerpo celeste compuesto principalmente de hidrógeno y helio que produce luz y calor a través de la fusión nuclear."
},
{
input: "¿Qué es el cine?",
response: "El cine es una forma de arte y entretenimiento que utiliza imágenes en movimiento para contar historias."
},
{
input: "¿Qué es el aprendizaje automático?",
response: "El aprendizaje automático es un subcampo de la inteligencia artificial que permite a las máquinas aprender y mejorar a partir de datos sin ser programadas explícitamente."
},
{
input: "¿Qué es la ética?",
response: "La ética es la rama de la filosofía que estudia los principios y valores que guían el comportamiento humano."
},
{
input: "¿Qué es la luz?",
response: "La luz es una forma de energía que viaja en ondas y es visible para el ojo humano."
},
{
input: "¿Qué es un planeta?",
response: "Un planeta es un cuerpo celeste que orbita una estrella, tiene suficiente masa para ser esférico y ha despejado su órbita de otros objetos."
},
{
input: "Hola",
response: "¡Hola! ¿Cómo estás?"
},
{
input: "Buenas tardes",
response: "¡Buenas tardes! Espero que tengas un gran día."
},
{
input: "Buenos días",
response: "¡Buenos días! ¿En qué puedo ayudarte hoy?"
},
{
input: "Buenas noches",
response: "¡Buenas noches! Espero que tengas un buen descanso."
},
{
input: "¿Qué tal?",
response: "¡Hola! Todo bien, ¿y tú?"
},
{
input: "Hola, ¿cómo va todo?",
response: "¡Hola! Todo va bien, gracias por preguntar. ¿Y tú?"
},
{
input: "¡Hey!",
response: "¡Hey! ¿Qué tal?"
},
{
input: "¡Hola amigo!",
response: "¡Hola! Me alegra verte por aquí."
},
{
input: "¿Cómo estás?",
response: "Estoy bien, gracias. ¿Y tú?"
},
{
input: "¿Qué onda?",
response: "¡Hola! Todo tranquilo, ¿y tú?"
},
{
input: "Saludos",
response: "¡Saludos! ¿Cómo te va?"
},
{
input: "¡Hola a todos!",
response: "¡Hola! Espero que todos estén muy bien."
},
{
input: "Hola, ¿qué hay de nuevo?",
response: "¡Hola! No mucho, ¿y tú? ¿Qué hay de nuevo?"
},
{
input: "¡Buenas!",
response: "¡Buenas! ¿Cómo te encuentras hoy?"
},
{
input: "Hola, ¿qué tal tu día?",
response: "¡Hola! Mi día va genial, gracias por preguntar. ¿Y el tuyo?"
},
{
input: "¡Hola, mundo!",
response: "¡Hola, mundo! Es un placer estar aquí contigo."
},
{
input: "Hola, ¿qué haces?",
response: "¡Hola! Aquí, listo para ayudarte. ¿Y tú, qué haces?"
},
{
input: "¡Qué gusto verte!",
response: "¡El gusto es mío! ¿Cómo estás?"
},
{
input: "¡Hola de nuevo!",
response: "¡Hola otra vez! ¿En qué puedo ayudarte ahora?"
},
{
input: "¡Buenas, qué tal todo?",
response: "¡Buenas! Todo va bien, gracias. ¿Y tú?"
},
{
input: "Hola, ¿me recuerdas?",
response: "¡Hola! Claro que sí. ¿Cómo te va?"
},
{
input: "¡Hola, amigo mío!",
response: "¡Hola! Qué gusto saludarte."
},
{
input: "Hola, Chatbot",
response: "¡Hola! ¿Cómo estás?"
},
{
input: "Hola, ¿cómo amaneciste?",
response: "¡Hola! Amanecí muy bien, gracias. ¿Y tú?"
},
{
input: "Hola, ¿cómo va tu día?",
response: "¡Hola! Mi día va excelente, gracias. ¿Y el tuyo?"
},
{
input: "Hola, ¿qué cuentas?",
response: "¡Hola! Todo tranquilo por aquí, ¿y tú?"
},
{
input: "Hola, ¿qué tal tu mañana?",
response: "¡Hola! Mi mañana ha sido productiva. ¿Y la tuya?"
},
{
input: "Hola, ¿qué tal tu tarde?",
response: "¡Hola! Mi tarde va bien, gracias. ¿Y la tuya?"
},
{
input: "Hola, ¿qué tal tu noche?",
response: "¡Hola! Mi noche está tranquila. ¿Y la tuya?"
},
{
input: "¡Qué gusto saludarte!",
response: "¡El gusto es mío! ¿En qué puedo ayudarte?"
},
{
input: "¡Hola, qué alegría verte!",
response: "¡Hola! El sentimiento es mutuo. ¿Cómo te va?"
},
{
input: "Buenas, ¿cómo marcha todo?",
response: "¡Hola! Todo marcha bien, gracias por preguntar. ¿Y tú?"
},
{
input: "¡Hola, cómo te encuentras hoy?",
response: "¡Hola! Me encuentro excelente, gracias. ¿Y tú?"
},
{
input: "Hola, ¿qué novedades tienes?",
response: "¡Hola! No muchas novedades por aquí, pero dispuesto a charlar contigo."
},
{
input: "¡Buenas, qué sorpresa verte por aquí!",
response: "¡Hola! Me alegra sorprenderte. ¿Cómo estás?"
},
{
input: "Hola, espero que estés bien",
response: "¡Hola! Muchas gracias, espero que tú también lo estés."
},
{
input: "¡Hey, cómo anda la cosa?",
response: "¡Hey! Todo en orden, ¿y tú?"
},
{
input: "Hola, ¿cómo te va la vida?",
response: "¡Hola! La vida me trata bien, ¿y a ti?"
},
{
input: "¡Hola, qué buena energía tienes!",
response: "¡Gracias! ¡Tú también irradias buena energía! ¿En qué puedo ayudarte?"
},
{
input: "Hola, ¿cómo pinta el día?",
response: "¡Hola! El día pinta bien, ¿y el tuyo?"
},
{
input: "¡Hola, cuánto tiempo sin verte!",
response: "¡Hola! Sí, ha pasado un tiempo. ¿Qué tal todo?"
},
{
input: "Hola, ¿qué tal te sientes hoy?",
response: "¡Hola! Me siento genial, gracias. ¿Y tú cómo estás?"
},
{
input: "¡Hola, qué tal la vida últimamente?",
response: "¡Hola! Todo marcha bien últimamente, ¿y tú?"
},
{
input: "Hola, ¿qué hay de interesante?",
response: "¡Hola! Muchas cosas interesantes por descubrir. ¿Tienes algo en mente?"
},
{
input: "¡Hola, compañero!",
response: "¡Hola! ¿Qué tal va todo?"
},
{
input: "Hola, ¿cómo has estado estos días?",
response: "¡Hola! He estado bien, gracias. ¿Y tú?"
},
{
input: "Hola, ¿cómo está todo por tu lado?",
response: "¡Hola! Todo está tranquilo por aquí. ¿Y tú?"
},
{
input: "Hasta luego, que tengas un buen día.",
response: "¡Gracias! Que tengas un excelente día también. Nos vemos pronto."
},
{
input: "Adiós, hablamos luego.",
response: "¡Adiós! Estaré aquí cuando me necesites. Hasta luego."
},
{
input: "Nos vemos mañana.",
response: "¡Perfecto! Hasta mañana. Cuídate."
},
{
input: "Chao, cuídate mucho.",
response: "¡Chao! Cuídate también. ¡Que estés bien!"
},
{
input: "Me tengo que ir, nos vemos.",
response: "¡Entendido! Hasta la próxima, que te vaya bien."
},
{
input: "Fue un gusto hablar contigo. Adiós.",
response: "¡El gusto fue mío! Adiós, espero que volvamos a hablar pronto."
},
{
input: "Me despido, hasta la próxima.",
response: "¡Hasta la próxima! Que tengas un gran día."
},
{
input: "Bueno, ya me voy. Cuídate.",
response: "¡Claro! Cuídate mucho también. Hasta luego."
},
{
input: "Nos vemos más tarde.",
response: "¡De acuerdo! Nos vemos más tarde. Estaré aquí cuando vuelvas."
},
{
input: "Me desconecto, que estés bien.",
response: "¡Hasta luego! Que todo te salga bien."
},
{
input: "Te dejo por ahora, hablamos después.",
response: "¡Está bien! Hablamos después. Cuídate."
},
{
input: "Creo que es hora de despedirnos.",
response: "Tienes razón, ha sido un placer. ¡Hasta pronto!"
},
{
input: "Adiós, ha sido un gusto.",
response: "¡Adiós! El gusto ha sido mío. Nos vemos pronto."
},
{
input: "Me retiro, que tengas buena tarde.",
response: "¡Hasta luego! Espero que tengas una tarde excelente."
},
{
input: "Bueno, esto es todo por hoy.",
response: "¡Entendido! Hasta la próxima, espero que tengas un buen día."
},
{
input: "Nos vemos en otra ocasión.",
response: "¡Claro! Hasta la próxima. Cuídate mucho."
},
{
input: "Fue un gusto, pero debo irme.",
response: "¡El gusto fue mío! Que te vaya muy bien."
},
{
input: "Ya es tarde, mejor me voy.",
response: "¡Claro! Descansa bien y nos vemos pronto."
},
{
input: "Hasta aquí llegamos por ahora.",
response: "De acuerdo, hasta aquí por hoy. ¡Nos vemos pronto!"
},
{
input: "Te dejo, cuídate mucho.",
response: "¡Gracias! Cuídate también. Hasta la próxima."
},
{
input: "Bueno, tengo que irme ya.",
response: "¡Entendido! Que te vaya bien. Nos vemos luego."
},
{
input: "Chao, nos vemos en la próxima charla.",
response: "¡Chao! Estaré esperando nuestra próxima conversación."
},
{
input: "Gracias por tu ayuda.",
response: "¡De nada! Me alegra haber podido ayudarte. Vuelve cuando lo necesites."
},
{
input: "Fue útil hablar contigo. Gracias.",
response: "¡Gracias a ti por confiar en mí! Siempre estoy aquí para ayudarte."
},
{
input: "Gracias por todo.",
response: "¡Es un placer ayudarte! Espero volver a verte pronto."
},
{
input: "Me ayudaste mucho, gracias.",
response: "¡De nada! Me alegra haber sido útil. Vuelve cuando quieras."
},
{
input: "Gracias por responder mis preguntas.",
response: "¡Con gusto! Si tienes más preguntas, no dudes en preguntar."
},
{
input: "Hasta luego y gracias.",
response: "¡Hasta luego! Gracias por usar este modelo. Que tengas un excelente día."
},
{
input: "Aprecio tu ayuda. Gracias.",
response: "¡Gracias a ti por permitirme ayudarte! Espero verte pronto."
},
{
input: "Te agradezco mucho.",
response: "¡No hay de qué! Siempre es un gusto ayudarte."
},
{
input: "Gracias por estar ahí.",
response: "¡Siempre estaré aquí para ti! Gracias por usar este modelo."
},
{
input: "Me sirvió mucho tu ayuda, gracias.",
response: "¡Qué alegría saber eso! Siempre que lo necesites, estaré aquí."
},
{
input: "Gracias por tu tiempo.",
response: "¡Gracias a ti por usar este modelo! Espero haber sido de ayuda."
},
{
input: "Gracias, me voy satisfecho.",
response: "¡Eso es genial! Gracias por confiar en mí. Nos vemos pronto."
},
{
input: "Buen trabajo, gracias.",
response: "¡Gracias! Tus palabras son muy valiosas. Estoy aquí para ayudarte cuando quieras."
},
{
input: "Gracias por ser tan claro.",
response: "¡De nada! Mi objetivo es que todo quede claro. Nos vemos la próxima vez."
},
{
input: "Me voy, pero gracias por todo.",
response: "¡Gracias a ti! Espero verte de nuevo. Cuídate mucho."
},
{
input: "Cuéntame un chiste.",
response: "¿Por qué el libro de matemáticas estaba triste? Porque tenía demasiados problemas."
},
{
input: "Dime un chiste corto.",
response: "¡Claro! ¿Qué hace una abeja en el gimnasio? ¡Zum-ba!"
},
{
input: "¿Sabes algún chiste bueno?",
response: "¡Sí! ¿Por qué el computador fue al médico? Porque tenía un virus."
},
{
input: "Hazme reír.",
response: "¿Qué le dice una impresora a otra? ¡Esa hoja es tuya o es una copia!"
},
{
input: "Dime algo gracioso.",
response: "¿Por qué no puedes confiar en un átomo? ¡Porque lo inventan todo!"
},
{
input: "Dime una broma.",
response: "¿Qué hace un perro con un taladro? ¡Taladrando!"
},
{
input: "Dame una broma ligera.",
response: "¿Qué hace un pez cuando ve Netflix? ¡Pone su aletas favoritas!"
},
{
input: "¿Puedes decir una broma tonta?",
response: "Claro. ¿Qué hace un café en el gimnasio? ¡Se pone espresso!"
},
{
input: "Broma rápida, por favor.",
response: "¿Qué hace una cama en el hospital? ¡Se encuentra en recuperación!"
},
{
input: "¿Sabes bromas simples?",
response: "¡Sí! ¿Por qué el tomate no toma decisiones? Porque siempre está hecho puré."
},
{
input: "Dime una adivinanza.",
response: "Blanca por dentro, verde por fuera. Si quieres que te lo diga, espera. ¿Qué es? ¡La pera!"
},
{
input: "Quiero una adivinanza difícil.",
response: "Tengo ojos, pero no veo. Tengo corona, pero no soy rey. ¿Qué soy? ¡Una piña!"
},
{
input: "¿Puedes decirme una adivinanza fácil?",
response: "Llevo años en el mar y no sé nadar. ¿Quién soy? ¡El ancla!"
},
{
input: "Dame una adivinanza rápida.",
response: "Vuelo sin alas, lloro sin ojos. ¿Qué soy? ¡La nube!"
},
{
input: "¿Sabes adivinanzas para niños?",
response: "Tengo orejas largas, salto muy alto, como zanahorias y vivo en el campo. ¿Quién soy? ¡El conejo!"
},
{
input: "Dame una frase motivacional.",
response: "No importa lo lento que vayas, siempre y cuando no te detengas."
},
{
input: "Quiero una frase de inspiración.",
response: "El éxito no se mide por lo que logras, sino por los obstáculos que superas."
},
{
input: "¿Tienes alguna frase motivadora?",
response: "La clave del éxito es empezar antes de estar listo."
},
{
input: "Necesito ánimos. ¿Tienes una frase?",
response: "Cree en ti mismo y todo será posible."
},
{
input: "¿Puedes darme una frase positiva?",
response: "Cada día es una nueva oportunidad para ser mejor que ayer."
},
{
input: "Dame una frase para reflexionar.",
response: "La vida no se trata de encontrarte a ti mismo, sino de crearte a ti mismo."
},
{
input: "¿Tienes alguna frase profunda?",
response: "Lo esencial es invisible a los ojos. Solo se ve bien con el corazón."
},
{
input: "Quiero una frase filosófica.",
response: "No es más rico quien más tiene, sino quien menos necesita."
},
{
input: "Dame una frase sabia.",
response: "El sabio no dice todo lo que piensa, pero siempre piensa todo lo que dice."
},
{
input: "Dime algo para pensar.",
response: "El tiempo es la única riqueza que no se puede recuperar."
},
{
input: "Dame una frase de amor.",
response: "El amor no se mira, se siente, y aún más cuando estás junto a mí."
},
{
input: "Quiero algo romántico.",
response: "Eres la razón por la que sonrío cada día."
},
{
input: "¿Tienes frases bonitas de amor?",
response: "Te amo no solo por lo que eres, sino por lo que soy cuando estoy contigo."
},
{
input: "Dame una frase para dedicar.",
response: "Tu amor es la melodía que llena mi vida de armonía."
},
{
input: "¿Puedes darme una frase romántica?",
response: "Desde que te conocí, sé que los milagros existen."
},
{
input: "Dame una frase graciosa.",
response: "No soy perezoso, estoy en modo ahorro de energía."
},
{
input: "Quiero una frase divertida.",
response: "La vida es corta, sonríele a quien te hace reír... y cómete el postre primero."
},
{
input: "¿Tienes frases chistosas?",
response: "No tengo estrés, tengo un compañero invisible llamado caos que me acompaña siempre."
},
{
input: "Algo gracioso, por favor.",
response: "No tengo todo lo que quiero, pero tengo WiFi, y eso es suficiente por ahora."
},
{
input: "Frase para reírme.",
response: "A veces pienso que me esfuerzo tanto en no hacer nada, que ya es todo un logro."
}
];

module.exports = trainingData;
