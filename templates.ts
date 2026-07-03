export const mvpTemplates: Record<string, { title: string, description: string, category: string, gameData: any }> = {
  "es-ortografia": {
    title: "Ortografía y Acentuación",
    description: "Módulo MVP de práctica sobre reglas de acentuación (agudas, graves, esdrújulas), diptongos e hiatos.",
    category: "Español",
    gameData: {
      "towerClimb": [
        { "question": "¿Qué palabra lleva tilde por ser esdrújula?", "options": ["Cántaro", "Corazón", "Árbol", "Café"], "answer": "Cántaro" },
        { "question": "¿Cuál es el hiato en esta lista de palabras?", "options": ["Cacao", "Aire", "Cielo", "Auto"], "answer": "Cacao" },
        { "question": "¿Cuál es la palabra aguda con tilde de esta lista?", "options": ["Balón", "Lápiz", "Mesa", "Pájaro"], "answer": "Balón" },
        { "question": "¿Qué opción contiene una palabra grave o llana con tilde?", "options": ["Árbol", "Brújula", "Sofá", "Canción"], "answer": "Árbol" }
      ],
      "millionaire": [
        { "question": "¿Cuál es la sílaba tónica de la palabra 'dilema'?", "options": ["di", "le", "ma", "ninguna"], "answer": "le" },
        { "question": "Las palabras esdrújulas se acentúan siempre en la...", "options": ["Última sílaba", "Penúltima sílaba", "Antepenúltima sílaba", "Trasantepeúltima sílaba"], "answer": "Antepenúltima sílaba" },
        { "question": "¿Cuál es el monosílabo correcto que lleva tilde diacrítica para indicar afirmación?", "options": ["Sí", "Si", "Se", "Te"], "answer": "Sí" },
        { "question": "Identifique el diptongo de la siguiente lista:", "options": ["Causa", "Poeta", "Día", "Baúl"], "answer": "Causa" }
      ],
      "conceptConquest": [
        { "term": "Aguda", "definition": "Palabra cuya sílaba tónica es la última. Lleva tilde si termina en n, s o vocal." },
        { "term": "Grave", "definition": "Palabra cuya sílaba tónica es la penúltima. Lleva tilde si no termina en n, s o vocal." },
        { "term": "Esdrújula", "definition": "Palabra cuya sílaba tónica es la antepenúltima. Siempre lleva tilde." }
      ],
      "detective": {
        "story": "Las palabras agudas siempre llevan tilde cuando terminan en cualquier consonante. Por ejemplo, la palabra lápiz es un ejemplo claro de palabra aguda con tilde. En cambio, las esdrújulas casi nunca se acentúan gráficamente.",
        "lies": [
          { "falsePhrase": "cualquier consonante", "truth": "N, S o vocal" },
          { "falsePhrase": "lápiz es un ejemplo claro de palabra aguda", "truth": "lápiz es una palabra grave" },
          { "falsePhrase": "casi nunca", "truth": "siempre" }
        ]
      },
      "safeBox": [
        { "question": "¿Cuántas sílabas tiene la palabra 'anticonstitucionalmente'?", "answer": 9 },
        { "question": "¿Cuántas vocales abiertas (A, E, O) hay en la palabra 'Aéreo'?", "answer": 4 },
        { "question": "¿Cuántas palabras de esta lista son esdrújulas: 'árbol, pájaro, helicóptero, café, rápido'?", "answer": 3 },
        { "question": "¿Cuántos diptongos hay en la frase: 'El viento sopla fuerte en el puerto'?", "answer": 3 }
      ],
      "pixelReveal": [
        { "question": "Sílaba que se pronuncia con mayor fuerza de voz en una palabra", "answer": "Tónica" },
        { "question": "Tipo de tilde que diferencia palabras idénticas pero con distintas funciones (ej. de/dé)", "answer": "Diacrítica" },
        { "question": "Encuentro de dos vocales que se pronuncian en sílabas distintas", "answer": "Hiato" }
      ],
      "zenSort": [
        "Identificar la sílaba tónica de la palabra",
        "Clasificar la palabra según su acento (aguda, grave, esdrújula)",
        "Revisar la terminación de la palabra (vocal, n, s, u otra)",
        "Aplicar la regla general de acentuación correspondiente",
        "Colocar la tilde ortográfica si la regla lo requiere"
      ],
      "bossRaid": {
        "bossName": "Señor de la Ortografía",
        "maxHp": 1000,
        "questions": [
          { "question": "¿Qué palabra está mal escrita?", "options": ["Hervir", "Gerundio", "Biceversa", "Exhibir"], "answer": "Biceversa", "damage": 400 },
          { "question": "¿Cuál es el antónimo correcto de 'ortografía'?", "options": ["Cacografía", "Disgrafía", "Agrafía", "Taquigrafía"], "answer": "Cacografía", "damage": 350 },
          { "question": "¿Qué signo de puntuación se usa para introducir una enumeración?", "options": ["Punto y coma", "Dos puntos", "Puntos suspensivos", "Guion"], "answer": "Dos puntos", "damage": 300 }
        ]
      }
    }
  },
  "ciencias-primaria": {
    title: "Ciencias y Cuerpo Humano",
    description: "Módulo infantil (2º a 4º de primaria) con más de 50 preguntas sobre la célula, órganos del cuerpo, alimentación y datos curiosos sobre huesos y sangre.",
    category: "Ciencias",
    gameData: {
      "towerClimb": [
        { "question": "¿Cuál es el órgano que bombea sangre a todo el cuerpo?", "options": ["Pulmones", "Estómago", "Corazón", "Cerebro"], "answer": "Corazón" },
        { "question": "¿Qué gas vital respiramos que proviene de los árboles?", "options": ["Dióxido de carbono", "Oxígeno", "Nitrógeno", "Helio"], "answer": "Oxígeno" },
        { "question": "¿Cuántos huesos tiene aproximadamente el cuerpo de un adulto?", "options": ["100 huesos", "150 huesos", "206 huesos", "300 huesos"], "answer": "206 huesos" },
        { "question": "¿Cómo se llaman los animales que comen únicamente plantas?", "options": ["Carnívoros", "Herbívoros", "Omnívoros", "Insectívoros"], "answer": "Herbívoros" },
        { "question": "¿Qué parte de la planta absorbe el agua y nutrientes del suelo?", "options": ["El tallo", "Las hojas", "La flor", "La raíz"], "answer": "La raíz" },
        { "question": "¿Cuál es el planeta más grande de nuestro Sistema Solar?", "options": ["Tierra", "Marte", "Saturno", "Júpiter"], "answer": "Júpiter" },
        { "question": "¿Cómo se llama el proceso por el cual el agua líquida se convierte en vapor?", "options": ["Condensación", "Evaporación", "Solidificación", "Fusión"], "answer": "Evaporación" },
        { "question": "¿Qué animal es un mamífero que vive en el agua?", "options": ["El tiburón", "El pulpo", "La ballena", "La medusa"], "answer": "La ballena" },
        { "question": "¿Cuál es la estrella más cercana a la Tierra que nos da luz y calor?", "options": ["Alfa Centauri", "La Luna", "El Sol", "Polaris"], "answer": "El Sol" },
        { "question": "¿Qué órgano nos sirve para pensar y enviar señales al resto del cuerpo?", "options": ["El corazón", "El cerebro", "El hígado", "Los pulmones"], "answer": "El cerebro" },
        { "question": "¿Cómo se llaman los animales que nacen de huevos puestos por su madre?", "options": ["Vivíparos", "Ovíparos", "Mamíferos", "Herbívoros"], "answer": "Ovíparos" },
        { "question": "¿Qué insecto cambia de forma a través de la metamorfosis?", "options": ["El perro", "El león", "La mariposa", "El delfín"], "answer": "La mariposa" },
        { "question": "¿Cuál es el único mamífero capaz de volar?", "options": ["El águila", "El murciélago", "La ardilla voladora", "El colibrí"], "answer": "El murciélago" },
        { "question": "¿Qué parte del cuerpo nos permite doblar los brazos y piernas?", "options": ["Los músculos", "Las articulaciones", "Los pulmones", "Las costillas"], "answer": "Las articulaciones" },
        { "question": "¿Qué sentido usamos para saborear una deliciosa manzana?", "options": ["El olfato", "El tacto", "La vista", "El gusto"], "answer": "El gusto" }
      ],
      "millionaire": [
        { "question": "¿De qué color es la clorofila que tienen las plantas en sus hojas?", "options": ["Amarillo", "Rojo", "Azul", "Verde"], "answer": "Verde" },
        { "question": "¿Qué sustancia líquida y roja viaja por nuestras venas llevando oxígeno?", "options": ["El agua", "La saliva", "La sangre", "El sudor"], "answer": "La sangre" },
        { "question": "¿Cuál de estos animales es un reptil?", "options": ["El águila", "La rana", "El cocodrilo", "El oso"], "answer": "El cocodrilo" },
        { "question": "¿Cómo se llama el satélite natural que gira alrededor de la Tierra?", "options": ["El Sol", "Júpiter", "La Luna", "Venus"], "answer": "La Luna" },
        { "question": "¿Qué órgano usamos para respirar el aire?", "options": ["Los riñones", "Los pulmones", "El estómago", "El corazón"], "answer": "Los pulmones" },
        { "question": "¿Qué clase de animal es la rana, que vive en el agua y en la tierra?", "options": ["Mamífero", "Reptil", "Anfibio", "Ave"], "answer": "Anfibio" },
        { "question": "¿De qué animal proviene la lana con la que hacemos suéteres calentitos?", "options": ["De la vaca", "Del caballo", "De la oveja", "Del cerdo"], "answer": "De la oveja" },
        { "question": "¿Dónde vive un oso polar en su estado natural?", "options": ["En el Polo Sur", "En la selva", "En el desierto", "En el Polo Norte"], "answer": "En el Polo Norte" },
        { "question": "¿Cuál de estos es un estado básico de la materia?", "options": ["Caliente", "Sólido", "Frío", "Suave"], "answer": "Sólido" },
        { "question": "¿Cuál es el músculo más activo del cuerpo humano, que nunca para de latir?", "options": ["El bíceps", "El corazón", "La lengua", "El cerebro"], "answer": "El corazón" },
        { "question": "¿Cuántos dientes de leche tienen los niños aproximadamente?", "options": ["10 dientes", "20 dientes", "32 dientes", "40 dientes"], "answer": "20 dientes" },
        { "question": "¿De qué color es el agua pura en estado líquido?", "options": ["Azul", "Blanca", "Transparente", "Verde"], "answer": "Transparente" },
        { "question": "¿Qué parte de la célula contiene las instrucciones de todo lo que debe hacer (su ADN)?", "options": ["La membrana", "El núcleo", "El citoplasma", "La vacuola"], "answer": "El núcleo" },
        { "question": "¿Qué animal tiene el cuello más largo del mundo?", "options": ["El elefante", "La jirafa", "La avestruz", "El flamenco"], "answer": "La jirafa" },
        { "question": "¿Qué órgano del cuerpo digiere la comida que tragamos?", "options": ["El corazón", "El estómago", "El cerebro", "Los pulmones"], "answer": "El estómago" }
      ],
      "conceptConquest": [
        { "term": "Célula", "definition": "La parte más pequeña y viva que forma a todos los seres vivos." },
        { "term": "Fotosíntesis", "definition": "La forma en que las plantas fabrican su propio alimento usando la luz del sol." },
        { "term": "Esqueleto", "definition": "El conjunto de todos los huesos que sostienen nuestro cuerpo y protegen los órganos." },
        { "term": "Atmósfera", "definition": "La capa de aire que rodea a la Tierra y nos permite respirar." },
        { "term": "Herbívoros", "definition": "Animales que comen únicamente hojas, frutas y plantas." },
        { "term": "Carnívoros", "definition": "Animales que se alimentan de la carne de otros animales." },
        { "term": "Ovíparos", "definition": "Animales que nacen a partir de un huevo puesto por su madre." },
        { "term": "Gravedad", "definition": "La fuerza invisible que atrae las cosas hacia el suelo y evita que salgamos flotando." },
        { "term": "Termómetro", "definition": "Instrumento médico que se usa para medir la temperatura del cuerpo." },
        { "term": "Condensación", "definition": "Cuando el vapor de agua sube al cielo, se enfría y forma las nubes." }
      ],
      "detective": {
        "story": "El cuerpo humano es increíble. Un adulto tiene alrededor de 50 huesos en total. El órgano principal para pensar es el corazón, el cual se ubica dentro de la cabeza. Para respirar, los seres humanos utilizamos los riñones, que absorben el oxígeno.",
        "lies": [
          { "falsePhrase": "alrededor de 50 huesos", "truth": "alrededor de 206 huesos" },
          { "falsePhrase": "el corazón, el cual se ubica dentro de la cabeza", "truth": "el cerebro, el cual se ubica dentro de la cabeza" },
          { "falsePhrase": "utilizamos los riñones", "truth": "utilizamos los pulmones" }
        ]
      },
      "safeBox": [
        { "question": "¿Cuántos ojos tiene una araña común en la mayoría de los casos?", "answer": 8 },
        { "question": "Un adulto promedio tiene aproximadamente ¿cuántos litros de sangre en el cuerpo?", "answer": 5 },
        { "question": "¿Cuántos sentidos básicos tiene el ser humano (vista, oído, olfato, gusto y tacto)?", "answer": 5 },
        { "question": "¿Cuántas patas tiene un insecto cualquiera?", "answer": 6 }
      ],
      "pixelReveal": [
        { "question": "Estrella gigante amarilla que da luz y calor a la Tierra", "answer": "Sol" },
        { "question": "Líquido vital indispensable que cubre la mayor parte de nuestro planeta", "answer": "Agua" },
        { "question": "Gas vital que respiramos y purifican las plantas", "answer": "Oxígeno" },
        { "question": "Órgano que controla los pensamientos y movimientos", "answer": "Cerebro" },
        { "question": "Animal doméstico conocido como el mejor amigo del hombre", "answer": "Perro" },
        { "question": "Único mamífero marino que respira por un espiráculo en su lomo", "answer": "Delfín" },
        { "question": "El felino más rápido de la tierra", "answer": "Guepardo" },
        { "question": "Grupo de animales al que pertenecen los leones, perros y humanos", "answer": "Mamíferos" }
      ],
      "zenSort": [
        "La oruga nace de un pequeño huevo en una hoja",
        "La oruga come muchas hojas y crece rápidamente",
        "La oruga se envuelve en una crisálida colgada de una rama",
        "Dentro de la crisálida ocurre la gran transformación celular",
        "Una hermosa mariposa sale volando de la crisálida"
      ],
      "bossRaid": {
        "bossName": "Virus Mutante Gigante",
        "maxHp": 1000,
        "questions": [
          { "question": "¿Qué hábito diario evita que los virus entren a nuestro cuerpo?", "options": ["Lavarse las manos", "Jugar videojuegos", "Dormir tarde", "Correr descalzo"], "answer": "Lavarse las manos", "damage": 200 },
          { "question": "¿Cómo se llama la medicina que nos inyectan para enseñarle a nuestro cuerpo a combatir virus?", "options": ["Vacuna", "Caramelo", "Jarabe", "Venda"], "answer": "Vacuna", "damage": 200 },
          { "question": "¿Qué pequeños seres vivos invisibles al ojo humano pueden causarnos gripe?", "options": ["Microbios y virus", "Hormigas", "Peces", "Gatos"], "answer": "Microbios y virus", "damage": 200 },
          { "question": "¿Cuál es la mejor forma de limpiar las verduras antes de comerlas?", "options": ["Lavarlas con agua limpia", "Limpiarlas con la camisa", "Soplarlas", "Dejarlas al sol"], "answer": "Lavarlas con agua limpia", "damage": 150 },
          { "question": "¿Qué parte de nuestro cuerpo nos defiende de las enfermedades como un ejército?", "options": ["El sistema inmunológico", "Los huesos", "El cabello", "Las uñas"], "answer": "El sistema inmunológico", "damage": 150 },
          { "question": "¿Qué debemos comer para crecer sanos y fuertes?", "options": ["Frutas y verduras", "Solo dulces", "Refrescos", "Papas fritas"], "answer": "Frutas y verduras", "damage": 100 }
        ]
      }
    }
  },
  "cultura-primaria": {
    title: "Cultura General Básica",
    description: "Módulo infantil (2º a 4º de primaria) con más de 50 preguntas curiosas sobre geografía mundial, monumentos famosos como el Big Ben, el río Amazonas y los dinosaurios.",
    category: "Cultura",
    gameData: {
      "towerClimb": [
        { "question": "¿Cuál es el río más largo y caudaloso del mundo?", "options": ["El Nilo", "El Amazonas", "El Misisipi", "El Sena"], "answer": "El Amazonas" },
        { "question": "¿En qué ciudad de Europa se encuentra el famoso reloj Big Ben?", "options": ["París", "Roma", "Londres", "Madrid"], "answer": "Londres" },
        { "question": "¿Cuántos continentes tiene el planeta Tierra en total?", "options": ["3 continentes", "5 continentes", "6 continentes", "8 continentes"], "answer": "6 continentes" },
        { "question": "¿Hace cuántos millones de años aproximadamente se extinguieron los dinosaurios?", "options": ["1 millón de años", "5 millones de años", "66 millones de años", "500 millones de años"], "answer": "66 millones de años" },
        { "question": "¿Qué país de América del Norte es famoso por sus pirámides del Sol y la Luna y el mariachi?", "options": ["Canadá", "México", "Brasil", "Colombia"], "answer": "México" },
        { "question": "¿Cuál es el idioma oficial de la mayor parte de los países de América del Sur?", "options": ["Inglés", "Francés", "Español", "Alemán"], "answer": "Español" },
        { "question": "Qué gran océano separa a América de Europa y África?", "options": ["Océano Pacífico", "Océano Índico", "Océano Atlántico", "Océano Ártico"], "answer": "Océano Atlántico" },
        { "question": "¿Cuál es la montaña más alta de todo el planeta Tierra?", "options": ["El K2", "El Monte Everest", "El Kilimanjaro", "El Aconcagua"], "answer": "El Monte Everest" },
        { "question": "¿Quién pintó el famoso cuadro de la Mona Lisa?", "options": ["Pablo Picasso", "Vincent van Gogh", "Leonardo da Vinci", "Michelangelo"], "answer": "Leonardo da Vinci" },
        { "question": "¿Qué país asiático tiene la muralla de piedra más larga del mundo?", "options": ["Japón", "China", "India", "Corea"], "answer": "China" },
        { "question": "¿En qué país de Europa se inventó la deliciosa pizza?", "options": ["España", "Francia", "Italia", "Grecia"], "answer": "Italia" },
        { "question": "¿Cuál es el animal terrestre más rápido del mundo entero?", "options": ["El león", "El caballo", "El guepardo", "El avestruz"], "answer": "El guepardo" },
        { "question": "¿Qué planeta de nuestro Sistema Solar tiene unos anillos muy grandes y brillantes?", "options": ["Júpiter", "Urano", "Saturno", "Neptuno"], "answer": "Saturno" },
        { "question": "¿Cuál es el país más grande de todo el mundo en tamaño de territorio?", "options": ["Canadá", "Rusia", "China", "Estados Unidos"], "answer": "Rusia" },
        { "question": "¿Qué antiguo monumento en Egipto tiene cuerpo de león y cabeza humana?", "options": ["La Pirámide de Keops", "La Esfinge", "El Obelisco", "El Templo de Luxor"], "answer": "La Esfinge" }
      ],
      "millionaire": [
        { "question": "¿Cuál es el metal del que está hecha principalmente la Estatua de la Libertad?", "options": ["Oro", "Cobre", "Hierro", "Plata"], "answer": "Cobre" },
        { "question": "¿Qué instrumento musical tiene teclas blancas y negras y cuerdas dentro?", "options": ["La guitarra", "La trompeta", "El piano", "La flauta"], "answer": "El piano" },
        { "question": "¿Cuál es el país de origen de los osos pandas gigantes?", "options": ["Australia", "China", "Canadá", "Brasil"], "answer": "China" },
        { "question": "¿Qué país sudamericano es famoso por tener forma de una larga y delgada tira junto al océano?", "options": ["Argentina", "Chile", "Perú", "Brasil"], "answer": "Chile" },
        { "question": "¿En qué continente queda el desierto más caluroso y grande del mundo, el Sáhara?", "options": ["Asia", "América", "África", "Europa"], "answer": "África" },
        { "question": "¿Qué color se obtiene al mezclar pintura azul y pintura amarilla?", "options": ["Morado", "Verde", "Naranja", "Marrón"], "answer": "Verde" },
        { "question": "¿Cómo se llama el gran libro que contiene los mapas de todos los países del mundo?", "options": ["Diccionario", "Enciclopedia", "Atlas", "Novela"], "answer": "Atlas" },
        { "question": "¿Qué animal es conocido tradicionalmente como el rey de la selva?", "options": ["El tigre", "El elefante", "El león", "El gorila"], "answer": "El león" },
        { "question": "¿Cuál es la capital de Francia, famosa por la hermosa Torre Eiffel?", "options": ["Madrid", "París", "Roma", "Londres"], "answer": "París" },
        { "question": "¿En qué estación del año las hojas de los árboles se caen y se vuelven amarillas?", "options": ["Primavera", "Verano", "Otoño", "Invierno"], "answer": "Otoño" },
        { "question": "¿Cuántos colores tiene el arcoíris en el cielo?", "options": ["5 colores", "7 colores", "10 colores", "12 colores"], "answer": "7 colores" },
        { "question": "¿Qué país del continente oceánico es famoso por sus canguros y koalas?", "options": ["Nueva Zelanda", "Japón", "Australia", "Madagascar"], "answer": "Australia" },
        { "question": "¿Qué forma geométrica tiene tres lados iguales o diferentes?", "options": ["Cuadrado", "Círculo", "Triángulo", "Rectángulo"], "answer": "Triángulo" },
        { "question": "¿Cuál es la fruta más consumida del mundo y que es famosa por ser amarilla?", "options": ["La manzana", "La naranja", "El banano / plátano", "La uva"], "answer": "El banano / plátano" },
        { "question": "¿Qué personaje histórico cruzó el océano y llegó a América en 1492?", "options": ["Marco Polo", "Cristóbal Colón", "Julio César", "Napoleón"], "answer": "Cristóbal Colón" }
      ],
      "conceptConquest": [
        { "term": "Pirámide", "definition": "Gran monumento antiguo de piedra con forma triangular hecho en Egipto." },
        { "term": "Planeta", "definition": "Un gran cuerpo redondo que gira alrededor de una estrella como el Sol." },
        { "term": "Arcoíris", "definition": "Un arco de 7 colores que se forma en el cielo cuando llueve y sale el sol." },
        { "term": "Océano", "definition": "Una gigantesca masa de agua salada que cubre la mayor parte de la Tierra." },
        { "term": "Dinosaurio", "definition": "Un reptil gigante que vivió en la Tierra hace millones de años." },
        { "term": "Continente", "definition": "Una de las grandes extensiones de tierra del planeta, como América o Europa." },
        { "term": "Brújula", "definition": "Instrumento con una aguja magnética que siempre señala el Norte." },
        { "term": "Volcán", "definition": "Una montaña que tiene una apertura por donde sale lava muy caliente." },
        { "term": "Capital", "definition": "La ciudad principal de un país donde están sus gobernantes." },
        { "term": "Fósil", "definition": "El resto o huella de un animal o planta antigua que se convirtió en piedra." }
      ],
      "detective": {
        "story": "El Big Ben es una famosa torre inclinada ubicada en la hermosa ciudad de París. Es un monumento muy antiguo. Cerca de allí, la gente come pizza, que es un platillo originario de Japón. Los científicos dicen que los dinosaurios se extinguieron hace tan solo 5 años.",
        "lies": [
          { "falsePhrase": "torre inclinada ubicada en la hermosa ciudad de París", "truth": "torre de reloj ubicada en Londres" },
          { "falsePhrase": "originario de Japón", "truth": "originario de Italia" },
          { "falsePhrase": "hace tan solo 5 años", "truth": "hace 66 millones de años" }
        ]
      },
      "safeBox": [
        { "question": "¿Cuántos colores tiene la bandera de la mayoría de los países (como México, España o Colombia)?", "answer": 3 },
        { "question": "¿Cuántas patas tiene una araña de rincón?", "answer": 8 },
        { "question": "¿En cuántos continentes de la Tierra hay osos pandas salvajes en la actualidad?", "answer": 1 },
        { "question": "Si multiplicas el número de lados de un cuadrado por dos, y le restas cuatro, ¿cuánto te queda?", "answer": 4 }
      ],
      "pixelReveal": [
        { "question": "Torre metálica muy famosa ubicada en París", "answer": "Eiffel" },
        { "question": "Gran muralla de piedra visible desde el espacio en Asia", "answer": "China" },
        { "question": "Pintura famosa de una mujer con una sonrisa misteriosa", "answer": "Mona Lisa" },
        { "question": "La montaña más alta de América del Sur", "answer": "Aconcagua" },
        { "question": "País con forma de bota en Europa", "answer": "Italia" },
        { "question": "Idioma que hablamos en España y América Latina", "answer": "Español" },
        { "question": "Color primario que representa el cielo y el mar", "answer": "Azul" },
        { "question": "Período en el que los dinosaurios dominaban el planeta", "answer": "Jurásico" }
      ],
      "zenSort": [
        "Los dinosaurios dominan la Tierra por millones de años",
        "Un enorme asteroide choca contra la Tierra en México",
        "Una gran nube de polvo y ceniza oscurece el cielo global",
        "Las plantas y animales gigantes mueren por falta de luz solar",
        "Los mamíferos pequeños sobreviven y evolucionan en humanos"
      ],
      "bossRaid": {
        "bossName": "Monstruo de la Ignorancia",
        "maxHp": 1000,
        "questions": [
          { "question": "¿Qué país regaló la Estatua de la Libertad a los Estados Unidos?", "options": ["Francia", "España", "Inglaterra", "Italia"], "answer": "Francia", "damage": 200 },
          { "question": "¿Cómo se llama el instrumento de viento que tocan los marineros en las películas?", "options": ["Armónica", "Flauta", "Trompeta", "Acordeón"], "answer": "Armónica", "damage": 200 },
          { "question": "¿Qué animal duerme colgado de las ramas cabeza abajo?", "options": ["El murciélago", "El mono", "El oso", "El pájaro"], "answer": "El murciélago", "damage": 200 },
          { "question": "¿En qué país se encuentran las famosas Pirámides de Giza?", "options": ["Egipto", "Grecia", "México", "Perú"], "answer": "Egipto", "damage": 150 },
          { "question": "¿Qué línea imaginaria divide a la Tierra en hemisferio Norte y Sur?", "options": ["El Ecuador", "Meridiano de Greenwich", "Trópico de Cáncer", "Círculo Polar"], "answer": "El Ecuador", "damage": 150 },
          { "question": "Qué animal marino tiene tres corazones y sangre azul?", "options": ["El pulpo", "La ballena", "El delfín", "El tiburón"], "answer": "El pulpo", "damage": 100 }
        ]
      }
    }
  },
  "mates-primaria": {
    title: "Matemáticas Divertidas",
    description: "Módulo infantil (2º a 4º de primaria) con más de 50 retos de cálculo mental simple, sumas, restas y resolución de acertijos lógicos.",
    category: "Matemáticas",
    gameData: {
      "towerClimb": [
        { "question": "Si tienes 3 manzanas y te regalan 4 más, ¿cuántas tienes ahora?", "options": ["6 manzanas", "7 manzanas", "8 manzanas", "9 manzanas"], "answer": "7 manzanas" },
        { "question": "¿Cuánto es 5 veces 2 (5 x 2)?", "options": ["8", "10", "12", "15"], "answer": "10" },
        { "question": "Si tienes un billete de 10 monedas y gastas 4, ¿cuánto te queda?", "options": ["4 monedas", "5 monedas", "6 monedas", "7 monedas"], "answer": "6 monedas" },
        { "question": "Completa la serie numérica: 2, 4, 6, 8, ...", "options": ["9", "10", "11", "12"], "answer": "10" }
      ],
      "millionaire": [
        { "question": "¿Cuántos minutos tiene una hora completa?", "options": ["30 minutos", "50 minutos", "60 minutos", "100 minutos"], "answer": "60" },
        { "question": "¿Cuánto es la mitad de 18?", "options": ["8", "9", "10", "12"], "answer": "9" },
        { "question": "Si multiplicas cualquier número por 0, ¿cuál es el resultado?", "options": ["El mismo número", "Cero", "Uno", "Diez"], "answer": "Cero" }
      ],
      "conceptConquest": [
        { "term": "Suma", "definition": "Operación de juntar o añadir varias cantidades para obtener un total." },
        { "term": "Resta", "definition": "Operación de quitar una cantidad a otra para saber cuánto queda." },
        { "term": "Multiplicación", "definition": "Operación de sumar un mismo número varias veces de forma rápida." }
      ],
      "detective": {
        "story": "En matemáticas, para restar cosas lo que hacemos es sumar más elementos. Por ejemplo, si a 5 manzanas le restamos 2 nos quedan 7 manzanas. Además, sabemos que los números impares siempre terminan en los dígitos 2, 4 u 8.",
        "lies": [
          { "falsePhrase": "lo que hacemos es sumar más elementos", "truth": "lo que hacemos es quitar elementos" },
          { "falsePhrase": "nos quedan 7 manzanas", "truth": "nos quedan 3 manzanas" },
          { "falsePhrase": "terminan en los dígitos 2, 4 u 8", "truth": "terminan en los dígitos 1, 3, 5, 7 o 9" }
        ]
      },
      "safeBox": [
        { "question": "Si tienes 12 lápices y los repartes por igual entre 2 amigos, ¿cuántos recibe cada uno?", "answer": 6 },
        { "question": "¿Cuánto es 3 multiplicado por 3?", "answer": 9 },
        { "question": "Si a 10 le restas 8, ¿cuánto te queda?", "answer": 2 },
        { "question": "Si tienes 3 bolsas con 2 dulces en cada una, ¿cuántos dulces tienes en total?", "answer": 6 }
      ],
      "pixelReveal": [
        { "question": "Resultado de sumar 5 más 5", "answer": "Diez" },
        { "question": "Figura geométrica redonda sin lados ni esquinas", "answer": "Círculo" },
        { "question": "Signo que se usa para realizar una suma", "answer": "Mas" }
      ],
      "zenSort": [
        "Identificar los datos del problema",
        "Elegir la operación matemática (suma, resta, etc.)",
        "Realizar el cálculo matemático con cuidado",
        "Obtener el resultado numérico",
        "Escribir la respuesta final completa"
      ],
      "bossRaid": {
        "bossName": "Mago de las Operaciones",
        "maxHp": 1000,
        "questions": [
          { "question": "¿Cuál es el resultado de 4 x 3?", "options": ["12", "10", "14", "16"], "answer": "12", "damage": 400 },
          { "question": "Si sumas 20 más 30, ¿cuánto te da?", "options": ["40", "50", "60", "70"], "answer": "50", "damage": 350 },
          { "question": "Si tienes 15 chocolates y te comes 5, ¿cuántos te quedan?", "options": ["10", "5", "12", "8"], "answer": "10", "damage": 300 }
        ]
      }
    }
  }
};
