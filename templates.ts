export const mvpTemplates: Record<string, { title: string, description: string, category: string, gameData: any }> = {
  "es-ortografia": {
    title: "Ortografía y Acentuación",
    description: "Módulo de práctica sobre reglas de acentuación (agudas, graves, esdrújulas), diptongos e hiatos.",
    category: "Español",
    gameData: {
      "towerClimb": [
        { "question": "¿Qué palabra lleva tilde por ser esdrújula?", "options": ["Cántaro", "Corazón", "Árbol", "Café"], "answer": "Cántaro" },
        { "question": "¿Cuál es el hiato en esta lista de palabras?", "options": ["Cacao", "Aire", "Cielo", "Auto"], "answer": "Cacao" },
        { "question": "¿Cuál es la palabra aguda con tilde de esta lista?", "options": ["Balón", "Lápiz", "Mesa", "Pájaro"], "answer": "Balón" },
        { "question": "¿Qué opción contiene una palabra grave o llana con tilde?", "options": ["Árbol", "Brújula", "Sofá", "Canción"], "answer": "Árbol" }
      ],
      "millionaire": [
        { "question": "La palabra 'árbol' lleva tilde en la 'a' porque...", "options": ["Es aguda terminada en L", "Es grave terminada en consonante distinta de N o S", "Es esdrújula", "Es un hiato"], "answer": "Es grave terminada en consonante distinta de N o S" },
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
        { "question": "Sílaba que se pronuncia con mayor fuerza de voz en una palabra", "options": ["Átona", "Tónica", "Penúltima", "Aguda"], "answer": "Tónica" },
        { "question": "Tipo de tilde que diferencia palabras idénticas pero con distintas funciones (ej. de/dé)", "options": ["Enfática", "Diacrítica", "Ortográfica", "Normativa"], "answer": "Diacrítica" },
        { "question": "Encuentro de dos vocales que se pronuncian en sílabas distintas", "options": ["Diptongo", "Hiato", "Triptongo", "Sinalefa"], "answer": "Hiato" }
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
    description: "Módulo para niños de 11 años con más de 50 preguntas sobre organelos celulares (ATP), sistemas del cuerpo, glóbulos, átomos y datos curiosos de la salud.",
    category: "Ciencias",
    gameData: {
      "towerClimb": [
        { "question": "¿Cuál es el órgano más grande del cuerpo humano?", "options": ["El hígado", "El cerebro", "La piel", "El intestino"], "answer": "La piel" },
        { "question": "¿Qué gas absorben las plantas de la atmósfera durante la fotosíntesis?", "options": ["Oxígeno", "Nitrógeno", "Dióxido de carbono", "Hidrógeno"], "answer": "Dióxido de carbono" },
        { "question": "¿Cómo se llaman los componentes subatómicos que forman el núcleo de un átomo?", "options": ["Electrones", "Protones y neutrones", "Moléculas", "Células"], "answer": "Protones y neutrones" },
        { "question": "¿Cuál es la principal función de los glóbulos blancos en la sangre?", "options": ["Transportar oxígeno", "Coagular heridas", "Defender de infecciones", "Producir energía"], "answer": "Defender de infecciones" },
        { "question": "¿Cómo se llama el reino de la naturaleza al que pertenecen los hongos?", "options": ["Plantae", "Animalia", "Fungi", "Protista"], "answer": "Fungi" },
        { "question": "¿Qué planeta tiene el día más corto del Sistema Solar, durando unas 10 horas?", "options": ["Venus", "Mercurio", "Júpiter", "Saturno"], "answer": "Júpiter" },
        { "question": "¿Cuál es la capa más interna y de mayor temperatura en la Tierra?", "options": ["La corteza", "El manto", "La atmósfera", "El núcleo"], "answer": "El núcleo" },
        { "question": "¿Qué orgánulo celular produce la mayor parte del ATP (energía)?", "options": ["Ribosoma", "Mitocondria", "Lisosoma", "Núcleo"], "answer": "Mitocondria" },
        { "question": "¿Cómo se llama la propiedad por la cual los líquidos se oponen a fluir (como la miel)?", "options": ["Densidad", "Viscosidad", "Solubilidad", "Tensión superficial"], "answer": "Viscosidad" },
        { "question": "¿Qué tipo de energía se obtiene a partir del calor interno de la Tierra?", "options": ["Solar", "Eólica", "Geotérmica", "Hidráulica"], "answer": "Geotérmica" },
        { "question": "¿Qué hueso es el más largo y fuerte del cuerpo humano?", "options": ["Húmero", "Fémur", "Radio", "Costilla"], "answer": "Fémur" },
        { "question": "¿Qué tipo de células no poseen un núcleo celular definido por una membrana?", "options": ["Eucariotas", "Procariotas", "Animales", "Vegetales"], "answer": "Procariotas" },
        { "question": "¿Cuál es el animal vertebrado más veloz del planeta al lanzarse en picada?", "options": ["Guepardo", "Halcón peregrino", "Águila calva", "Vencejo"], "answer": "Halcón peregrino" },
        { "question": "¿Qué sustancia verde de las hojas absorbe la luz solar para la fotosíntesis?", "options": ["Savia", "Clorofila", "Glucosa", "Agua"], "answer": "Clorofila" },
        { "question": "¿Cuántas cámaras o cavidades tiene el corazón humano?", "options": ["2 cavidades", "3 cavidades", "4 cavidades", "5 cavidades"], "answer": "4 cavidades" }
      ],
      "millionaire": [
        { "question": "¿Cuál es el compuesto químico más abundante en el citoplasma de una célula?", "options": ["Proteínas", "Agua", "Lípidos", "Glucosa"], "answer": "Agua" },
        { "question": "¿Qué capa de la atmósfera contiene la capa de ozono que filtra los rayos UV?", "options": ["Troposfera", "Estratosfera", "Mesosfera", "Termosfera"], "answer": "Estratosfera" },
        { "question": "¿Cómo se llama el proceso de división celular para producir células sexuales?", "options": ["Mitosis", "Meiosis", "Fisión binaria", "Fotosíntesis"], "answer": "Meiosis" },
        { "question": "¿Cuál de estos animales es un invertebrado del grupo de los equinodermos?", "options": ["Pulpo", "Estrella de mar", "Cangrejo", "Caracol"], "answer": "Estrella de mar" },
        { "question": "¿Cuál es el gas más abundante en la atmósfera de la Tierra?", "options": ["Oxígeno", "Nitrógeno", "Dióxido de carbono", "Argón"], "answer": "Nitrógeno" },
        { "question": "¿Qué parte del ojo enfoca la luz en la retina?", "options": ["Córnea", "Cristalino", "Iris", "Pupila"], "answer": "Cristalino" },
        { "question": "¿Qué tipo de enlace químico ocurre cuando dos átomos comparten electrones?", "options": ["Enlace iónico", "Enlace covalente", "Enlace metálico", "Puente de hidrógeno"], "answer": "Enlace covalente" },
        { "question": "¿Cuál es el elemento químico más ligero y abundante en todo el Universo?", "options": ["Helio", "Hidrógeno", "Oxígeno", "Carbono"], "answer": "Hidrógeno" },
        { "question": "¿Cuál es la función principal del intestino grueso en el sistema digestivo?", "options": ["Digerir proteínas", "Absorber nutrientes", "Absorber agua", "Producir bilis"], "answer": "Absorber agua" },
        { "question": "¿Cómo se llama el cambio directo del estado sólido al gaseoso sin pasar por el líquido?", "options": ["Evaporación", "Sublimación", "Condensación", "Solidificación"], "answer": "Sublimación" },
        { "question": "¿En qué parte del cuerpo humano se produce la hormona insulina?", "options": ["El hígado", "El páncreas", "El estómago", "Los riñones"], "answer": "El páncreas" },
        { "question": "¿Qué fuerza física describe la oposición al movimiento entre dos superficies en contacto?", "options": ["Gravedad", "Inercia", "Fricción", "Magnetismo"], "answer": "Fricción" },
        { "question": "¿Quién propuso la teoría de la evolución por selección natural en el siglo XIX?", "options": ["Gregor Mendel", "Louis Pasteur", "Charles Darwin", "Isaac Newton"], "answer": "Charles Darwin" },
        { "question": "¿Qué tipo de células sanguíneas ayudan a detener las hemorragias formando coágulos?", "options": ["Glóbulos rojos", "Glóbulos blancos", "Plaquetas", "Neuronas"], "answer": "Plaquetas" },
        { "question": "¿Qué gigante planeta gaseoso tiene una densidad media menor que la del agua?", "options": ["Júpiter", "Saturno", "Urano", "Neptuno"], "answer": "Saturno" }
      ],
      "conceptConquest": [
        { "term": "Mitocondria", "definition": "Orgánulo encargado de la respiración celular y de producir energía (ATP)." },
        { "term": "Procariota", "definition": "Célula primitiva que no tiene su material genético rodeado por una membrana nuclear." },
        { "term": "Ecosistema", "definition": "Comunidad de seres vivos que interactúan entre sí y con el medio físico no vivo." },
        { "term": "Cloroplasto", "definition": "Orgánulo de células vegetales donde se almacena la clorofila y ocurre la fotosíntesis." },
        { "term": "Átomo", "definition": "La partícula más pequeña de un elemento que mantiene sus propiedades químicas." },
        { "term": "Homeostasis", "definition": "La capacidad de un ser vivo de mantener estable su ambiente interno (como la temperatura)." },
        { "term": "Presión atmosférica", "definition": "La fuerza que ejerce el peso del aire sobre la superficie de la Tierra." },
        { "term": "Gravedad", "definition": "Fuerza de atracción mutua que experimentan dos objetos con masa." },
        { "term": "Hormona", "definition": "Sustancia química liberada por glándulas que regula funciones en el cuerpo." },
        { "term": "Estoma", "definition": "Pequeño poro en las hojas de las plantas que regula el intercambio de gases." }
      ],
      "detective": {
        "story": "La materia está formada por átomos, los cuales tienen electrones en su núcleo. En el cuerpo, las venas llevan sangre oxigenada directamente desde el corazón a los órganos. Además, la fotosíntesis es realizada por plantas durante la noche liberando helio al aire.",
        "lies": [
          { "falsePhrase": "electrones en su núcleo", "truth": "protones y neutrones en su núcleo (los electrones orbitan alrededor)" },
          { "falsePhrase": "venas llevan sangre oxigenada", "truth": "arterias llevan sangre oxigenada (las venas llevan sangre desoxigenada)" },
          { "falsePhrase": "durante la noche liberando helio", "truth": "durante el día liberando oxígeno" }
        ]
      },
      "safeBox": [
        { "question": "¿Cuántos planetas rocosos existen en nuestro Sistema Solar (Mercurio, Venus, Tierra, Marte)?", "answer": 4 },
        { "question": "Un ser humano promedio posee ¿cuántos sentidos sensoriales primarios?", "answer": 5 },
        { "question": "¿En cuántos estados físicos principales se presenta el agua de forma natural en la Tierra?", "answer": 3 },
        { "question": "¿Cuántas extremidades tiene un pulpo común?", "answer": 8 }
      ],
      "pixelReveal": [
        { "question": "El único satélite natural de la Tierra", "options": ["Fobos", "Deimos", "Luna", "Titán"], "answer": "Luna" },
        { "question": "Órgano más grande del cuerpo humano", "options": ["Hígado", "Piel", "Cerebro", "Corazón"], "answer": "Piel" },
        { "question": "Gas indispensable para la vida terrestre producido por fotosíntesis", "options": ["Helio", "Oxígeno", "Argón", "Cloro"], "answer": "Oxígeno" },
        { "question": "Hueso más largo del esqueleto humano", "options": ["Fémur", "Clavícula", "Radio", "Tibia"], "answer": "Fémur" },
        { "question": "Elemento químico de la tabla periódica representado por la letra 'O'", "options": ["Oro", "Ósmio", "Oxígeno", "Plata"], "answer": "Oxígeno" },
        { "question": "Mamífero marino que respira por un espiráculo", "options": ["Delfín", "Tiburón", "Barracuda", "Pulpo"], "answer": "Delfín" },
        { "question": "Fuerza física que nos mantiene unidos al suelo", "options": ["Fricción", "Gravedad", "Magnetismo", "Inercia"], "answer": "Gravedad" },
        { "question": "Orgánulo celular central que contiene el material genético", "options": ["Mitocondria", "Núcleo", "Ribosoma", "Lisosoma"], "answer": "Núcleo" }
      ],
      "zenSort": [
        "La luz solar es absorbida por la clorofila de las hojas",
        "Las raíces absorben agua y sales minerales del suelo",
        "El dióxido de carbono entra a través de los estomas",
        "La fotosíntesis produce glucosa (alimento) y oxígeno",
        "Las plantas liberan el oxígeno al aire que respiramos"
      ],
      "bossRaid": {
        "bossName": "Super-Bacteria Patógena",
        "maxHp": 1000,
        "questions": [
          { "question": "¿Qué tipo de medicamentos combaten específicamente las infecciones bacterianas?", "options": ["Antibióticos", "Antivirales", "Analgésicos", "Antihistamínicos"], "answer": "Antibióticos", "damage": 200 },
          { "question": "¿Qué descubridor de la penicilina en 1928 revolucionó la medicina moderna?", "options": ["Louis Pasteur", "Alexander Fleming", "Robert Koch", "Gregor Mendel"], "answer": "Alexander Fleming", "damage": 200 },
          { "question": "¿Cómo se llama el proceso de purificación de líquidos mediante calor inventado por Louis Pasteur?", "options": ["Pasteurización", "Filtración", "Evaporación", "Destilación"], "answer": "Pasteurización", "damage": 200 },
          { "question": "¿Qué estructura bacteriana protege a la célula de ataques externos y desecación?", "options": ["Pared celular", "Membrana celular", "Núcleo", "Flagelo"], "answer": "Pared celular", "damage": 150 },
          { "question": "¿Qué células del sistema inmunitario fabrican anticuerpos contra los patógenos?", "options": ["Glóbulos rojos", "Linfocitos", "Plaquetas", "Neuronas"], "answer": "Linfocitos", "damage": 150 },
          { "question": "¿Cuál es una vía común de transmisión de bacterias patógenas al comer?", "options": ["Manos sucias o comida mal lavada", "Usar cubiertos limpios", "Beber agua embotellada", "Comer verduras cocidas"], "answer": "Manos sucias o comida mal lavada", "damage": 100 }
        ]
      }
    }
  },
  "cultura-primaria": {
    title: "Cultura General Básica",
    description: "Módulo para niños de 11 años con más de 50 preguntas sobre historia mundial, geografía, astronomía, el río Amazonas y los dinosaurios.",
    category: "Cultura",
    gameData: {
      "towerClimb": [
        { "question": "¿Cuál es el río más largo y caudaloso del mundo?", "options": ["El Nilo", "El Amazonas", "El Misisipi", "El Yangtsé"], "answer": "El Amazonas" },
        { "question": "¿En qué ciudad se encuentra el famoso reloj Big Ben y el parlamento británico?", "options": ["París", "Roma", "Londres", "Dublín"], "answer": "Londres" },
        { "question": "¿Cuál es el océano más grande del planeta Tierra?", "options": ["Océano Atlántico", "Océano Índico", "Océano Pacífico", "Océano Ártico"], "answer": "Océano Pacífico" },
        { "question": "¿Qué civilización antigua construyó la ciudadela de Machu Picchu en Perú?", "options": ["Maya", "Azteca", "Inca", "Egipcia"], "answer": "Inca" },
        { "question": "¿Qué país europeo colonizó la mayor parte del continente americano durante el siglo XVI?", "options": ["Inglaterra", "Francia", "España", "Portugal"], "answer": "España" },
        { "question": "¿Qué país de Europa destaca por su forma geográfica de bota en el mapa?", "options": ["España", "Grecia", "Italia", "Francia"], "answer": "Italia" },
        { "question": "¿Cuál es la montaña más alta del mundo con 8848 metros de altura?", "options": ["K2", "Aconcagua", "Monte Everest", "Kilimanjaro"], "answer": "Monte Everest" },
        { "question": "¿Qué famoso artista renacentista pintó La Última Cena y la Mona Lisa?", "options": ["Miguel Ángel", "Rafael", "Leonardo da Vinci", "Donatello"], "answer": "Leonardo da Vinci" },
        { "question": "¿Qué antigua maravilla del mundo sobrevivió hasta hoy en el desierto de Egipto?", "options": ["El Faro de Alejandría", "Las Pirámides de Giza", "El Coloso de Rodas", "Jardines Colgantes"], "answer": "Las Pirámides de Giza" },
        { "question": "¿En qué año se firmó el Descubrimiento de América por Cristóbal Colón?", "options": ["1453", "1492", "1521", "1776"], "answer": "1492" },
        { "question": "¿Cuál es el país más extenso del planeta en superficie terrestre?", "options": ["Canadá", "Rusia", "China", "Estados Unidos"], "answer": "Rusia" },
        { "question": "Quién fue el autor de la Grecia clásica que escribió la Ilíada y la Odisea?", "options": ["Sócrates", "Platón", "Homero", "Aristóteles"], "answer": "Homero" },
        { "question": "¿Qué país asiático tiene la muralla militar defensiva más larga del mundo?", "options": ["Japón", "China", "India", "Mongolia"], "answer": "China" },
        { "question": "¿Cuál es el desierto más árido y caluroso del planeta ubicado en África?", "options": ["Desierto de Gobi", "Desierto del Sáhara", "Desierto de Atacama", "Desierto de Kalahari"], "answer": "Desierto del Sáhara" },
        { "question": "¿Qué línea imaginaria divide a la Tierra exactamente en hemisferio Norte y Sur?", "options": ["Meridiano de Greenwich", "Ecuador", "Trópico de Cáncer", "Trópico de Capricornio"], "answer": "Ecuador" }
      ],
      "millionaire": [
        { "question": "¿Cuál es el metal del que está hecha la Estatua de la Libertad, dándole su color verde por oxidación?", "options": ["Hierro", "Cobre", "Aluminio", "Bronce"], "answer": "Cobre" },
        { "question": "¿Qué país de América del Sur es el más grande en territorio y población?", "options": ["Argentina", "Colombia", "Brasil", "Perú"], "answer": "Brasil" },
        { "question": "Cuál es el instrumento de cuerda frotada más grande y de tono más grave en una orquesta?", "options": ["Violonchelo", "Viola", "Violín", "Contrabajo"], "answer": "Contrabajo" },
        { "question": "¿Qué país europeo destaca por tener canales y góndolas en la ciudad de Venecia?", "options": ["Francia", "Italia", "España", "Holanda"], "answer": "Italia" },
        { "question": "¿Cuál es el animal mamífero más grande que haya existido jamás en la Tierra?", "options": ["Elefante africano", "Tiranosaurio Rex", "Ballena azul", "Tiburón ballena"], "answer": "Ballena azul" },
        { "question": "¿Qué país asiático es conocido tradicionalmente como el País del Sol Naciente?", "options": ["China", "Japón", "Corea del Sur", "India"], "answer": "Japón" },
        { "question": "¿Cuál es el libro de mapas geográficos más completo de un territorio o el mundo?", "options": ["Enciclopedia", "Diccionario", "Catálogo", "Atlas"], "answer": "Atlas" },
        { "question": "¿En qué continente se originó la especie humana (Homo sapiens)?", "options": ["Asia", "Europa", "África", "América"], "answer": "África" },
        { "question": "¿Quién fue el científico alemán que formuló la famosa Teoría de la Relatividad?", "options": ["Isaac Newton", "Galileo Galilei", "Albert Einstein", "Stephen Hawking"], "answer": "Albert Einstein" },
        { "question": "¿Cuál es la capital de Australia?", "options": ["Sídney", "Melbourne", "Canberra", "Brisbane"], "answer": "Canberra" },
        { "question": "¿En qué cordillera montañosa de América se encuentra el volcán más alto del mundo?", "options": ["Los Alpes", "El Himalaya", "Los Andes", "Las Rocosas"], "answer": "Los Andes" },
        { "question": "¿Qué civilización de Mesopotamia inventó la escritura cuneiforme?", "options": ["Egipcia", "Sumeria", "Romana", "Griega"], "answer": "Sumeria" },
        { "question": "¿Qué país donó la Estatua de la Libertad a los Estados Unidos en 1886?", "options": ["Reino Unido", "Francia", "España", "Italia"], "answer": "Francia" },
        { "question": "¿Cuál es el planeta con la rotación sobre su propio eje más rápida del Sistema Solar?", "options": ["Júpiter", "Saturno", "Urano", "Neptuno"], "answer": "Júpiter" },
        { "question": "¿Quién fue el primer ser humano en viajar al espacio exterior en 1961?", "options": ["Neil Armstrong", "Yuri Gagarin", "Buzz Aldrin", "John Glenn"], "answer": "Yuri Gagarin" }
      ],
      "conceptConquest": [
        { "term": "Cuneiforme", "definition": "El sistema de escritura más antiguo conocido inventado por los sumerios." },
        { "term": "Renacimiento", "definition": "Gran movimiento cultural y artístico en Europa que revivió el arte y ciencia clásicos." },
        { "term": "Ecuador", "definition": "La línea imaginaria horizontal que divide la Tierra en los hemisferios Norte y Sur." },
        { "term": "Glaciación", "definition": "Período histórico de bajas temperaturas donde gran parte de la Tierra se cubrió de hielo." },
        { "term": "Fósil", "definition": "Restos o huellas de organismos antiguos que se conservaron en piedra." },
        { "term": "Monarquía", "definition": "Forma de gobierno donde el jefe de Estado es un rey o reina." },
        { "term": "Aconcagua", "definition": "La montaña más alta de América, ubicada en la cordillera de los Andes." },
        { "term": "Antigüedad clásica", "definition": "Período histórico de florecimiento de las civilizaciones griega y romana." },
        { "term": "Atlas", "definition": "Libro o colección ordenada de mapas geográficos." },
        { "term": "Asteroide", "definition": "Cuerpo rocoso y metálico que orbita el Sol, más pequeño que un planeta." }
      ],
      "detective": {
        "story": "El Big Ben es una famosa torre inclinada de mármol ubicada en París. Fue construida por los antiguos incas. Siglos después, Leonardo da Vinci pintó el cuadro del Grito allí. Los historiadores confirman que Cristóbal Colón llegó a América en el año 1942.",
        "lies": [
          { "falsePhrase": "torre inclinada de mármol ubicada en París", "truth": "torre de reloj ubicada en Londres" },
          { "falsePhrase": "por los antiguos incas", "truth": "por los británicos en el siglo XIX" },
          { "falsePhrase": "en el año 1942", "truth": "en el año 1492" }
        ]
      },
      "safeBox": [
        { "question": "¿Cuántos colores tiene la bandera nacional de Francia (azul, blanco, rojo)?", "answer": 3 },
        { "question": "¿Cuántos corazones tiene un pulpo común?", "answer": 3 },
        { "question": "¿En cuántas cámaras o cavidades se divide el corazón de un mamífero?", "answer": 4 },
        { "question": "Un octágono regular es una figura geométrica de ¿cuántos lados?", "answer": 8 }
      ],
      "pixelReveal": [
        { "question": "Torre metálica muy famosa de París", "options": ["Torre de Pisa", "Torre Eiffel", "Big Ben", "Estatua de la Libertad"], "answer": "Torre Eiffel" },
        { "question": "Gran muralla de piedra en Asia", "options": ["Muralla de Berlín", "Gran Muralla China", "Coliseo Romano", "Pirámides"], "answer": "Gran Muralla China" },
        { "question": "Pintura famosa con una sonrisa misteriosa de Leonardo da Vinci", "options": ["La Noche Estrellada", "El Grito", "Mona Lisa", "Guernica"], "answer": "Mona Lisa" },
        { "question": "La montaña más alta de América del Sur", "options": ["Everest", "Aconcagua", "Kilimanjaro", "K2"], "answer": "Aconcagua" },
        { "question": "País europeo con forma de bota", "options": ["España", "Francia", "Italia", "Grecia"], "answer": "Italia" },
        { "question": "Idioma nativo en España y la mayor parte de América Latina", "options": ["Inglés", "Portugués", "Español", "Alemán"], "answer": "Español" },
        { "question": "Color primario que representa el cielo y los océanos", "options": ["Rojo", "Azul", "Amarillo", "Verde"], "answer": "Azul" },
        { "question": "Período geológico del mesozoico famoso por los dinosaurios", "options": ["Cretácico", "Jurásico", "Triásico", "Pérmico"], "answer": "Jurásico" }
      ],
      "zenSort": [
        "Los dinosaurios dominan la Tierra durante la era Mesozoica",
        "Un asteroide masivo choca en la península de Yucatán en México",
        "Una densa capa de ceniza y hollín cubre la atmósfera terrestre",
        "La temperatura desciende drásticamente extinguiendo a los dinosaurios",
        "Los pequeños mamíferos sobreviven, proliferan y evolucionan"
      ],
      "bossRaid": {
        "bossName": "Monstruo de la Ignorancia",
        "maxHp": 1000,
        "questions": [
          { "question": "¿Qué país donó la Estatua de la Libertad a los Estados Unidos?", "options": ["Francia", "España", "Reino Unido", "Alemania"], "answer": "Francia", "damage": 200 },
          { "question": "¿Qué científico revolucionó la física con la Teoría de la Relatividad?", "options": ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Stephen Hawking"], "answer": "Albert Einstein", "damage": 200 },
          { "question": "¿Qué civilización antigua inventó el sistema de escritura cuneiforme?", "options": ["Sumeria", "Egipcia", "Romana", "Griega"], "answer": "Sumeria", "damage": 200 },
          { "question": "¿En qué país se encuentran las famosas Pirámides de Giza?", "options": ["Egipto", "México", "Perú", "Grecia"], "answer": "Egipto", "damage": 150 },
          { "question": "¿Qué línea imaginaria divide la Tierra en los hemisferios Norte y Sur?", "options": ["Ecuador", "Meridiano de Greenwich", "Trópico de Cáncer", "Eje Terrestre"], "answer": "Ecuador", "damage": 150 },
          { "question": "¿Qué animal marino destaca por tener tres corazones y sangre azul?", "options": ["El pulpo", "La ballena azul", "El tiburón blanco", "El delfín"], "answer": "El pulpo", "damage": 100 }
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
        { "question": "Resultado de sumar 5 más 5", "options": ["8", "9", "10", "12"], "answer": "10" },
        { "question": "Figura geométrica redonda sin lados ni esquinas", "options": ["Cuadrado", "Triángulo", "Círculo", "Rectángulo"], "answer": "Círculo" },
        { "question": "Signo que se usa para realizar una suma", "options": ["Mas", "Menos", "Por", "Igual"], "answer": "Mas" }
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
          { "question": "Cuál es el resultado de 4 x 3?", "options": ["12", "10", "14", "16"], "answer": "12", "damage": 400 },
          { "question": "Si sumas 20 más 30, ¿cuánto te da?", "options": ["40", "50", "60", "70"], "answer": "50", "damage": 350 },
          { "question": "Si tienes 15 chocolates y te comes 5, ¿cuántos te quedan?", "options": ["10", "5", "12", "8"], "answer": "10", "damage": 300 }
        ]
      }
    }
  }
};
