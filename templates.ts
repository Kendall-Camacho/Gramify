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
        { "question": "Identifique el diptongo de la siguiente lista:", "options": ["Causa", "Poeta", "Día", "Baúl"], "answer": "Causa" },
        { "question": "¿Qué palabra está escrita correctamente?", "options": ["Exhumar", "Esumar", "Hecsumar", "Exumar"], "answer": "Exhumar" },
        { "question": "¿Cuál de estas es una palabra aguda que NO lleva tilde?", "options": ["Reloj", "Papá", "Correrás", "Avión"], "answer": "Reloj" },
        { "question": "¿Qué opción representa un caso correcto de tilde diacrítica?", "options": ["El libro / Él lee", "Árbol / Arboleda", "Música / Musical", "Rápido / Rapidez"], "answer": "El libro / Él lee" },
        { "question": "Las palabras llanas o graves llevan tilde cuando...", "options": ["Terminan en N, S o vocal", "NO terminan en N, S o vocal", "Siempre", "Terminan en vocal"], "answer": "NO terminan en N, S o vocal" }
      ],
      "conceptConquest": [
        { "term": "Aguda", "definition": "Palabra cuya sílaba tónica es la última. Lleva tilde si termina en n, s o vocal." },
        { "term": "Grave", "definition": "Palabra cuya sílaba tónica es la penúltima. Lleva tilde si no termina en n, s o vocal." },
        { "term": "Esdrújula", "definition": "Palabra cuya sílaba tónica es la antepenúltima. Siempre lleva tilde." },
        { "term": "Diptongo", "definition": "Unión de dos vocales en una misma sílaba que se pronuncian juntas." }
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
  "ciencias-celula": {
    title: "La Célula y su Funcionamiento",
    description: "Módulo MVP sobre la estructura celular, orgánulos, diferencias entre célula animal y vegetal, y respiración celular.",
    category: "Ciencias",
    gameData: {
      "towerClimb": [
        { "question": "¿Qué orgánulo es responsable de la respiración celular y producción de ATP?", "options": ["Mitocondria", "Cloroplasto", "Ribosoma", "Lisosoma"], "answer": "Mitocondria" },
        { "question": "¿Qué estructura celular controla el paso de sustancias hacia dentro y fuera?", "options": ["Membrana plasmática", "Pared celular", "Aparato de Golgi", "Citoplasma"], "answer": "Membrana plasmática" },
        { "question": "¿Dónde se encuentra la mayor parte del material genético (ADN) en células eucariotas?", "options": ["Núcleo", "Nucleolo", "Vacuola", "Mitocondria"], "answer": "Núcleo" },
        { "question": "¿Qué estructura está presente en células vegetales pero NO en células animales?", "options": ["Pared celular", "Membrana plasmática", "Ribosomas", "Mitocondrias"], "answer": "Pared celular" }
      ],
      "millionaire": [
        { "question": "¿Cuál es la unidad básica estructural y funcional de todos los seres vivos?", "options": ["La célula", "El tejido", "El órgano", "El átomo"], "answer": "La célula" },
        { "question": "¿Qué orgánulo realiza la fotosíntesis en células vegetales?", "options": ["Cloroplasto", "Mitocondria", "Aparato de Golgi", "Lisosoma"], "answer": "Cloroplasto" },
        { "question": "La mitosis es un proceso de división celular que da como resultado...", "options": ["Dos células hijas idénticas", "Cuatro células hijas haploides", "Una célula diploide y una haploide", "Células sexuales"], "answer": "Dos células hijas idénticas" },
        { "question": "¿Cómo se llama la sustancia gelatinosa dentro de la célula que rodea a los orgánulos?", "options": ["Citoplasma", "Citosol", "Citoesqueleto", "Nucleoplasma"], "answer": "Citosol" },
        { "question": "¿Qué lípido constituye la bicapa de la membrana plasmática?", "options": ["Fosfolípido", "Triglicérido", "Colesterol", "Ácido graso"], "answer": "Fosfolípido" }
      ],
      "conceptConquest": [
        { "term": "Eucariota", "definition": "Célula con núcleo definido por una envoltura nuclear que contiene el material genético." },
        { "term": "Procariota", "definition": "Célula más simple que carece de núcleo verdadero y orgánulos membranosos." },
        { "term": "Mitocondria", "definition": "Orgánulo celular de doble membrana encargado de la obtención de energía metabólica (ATP)." },
        { "term": "Cloroplasto", "definition": "Orgánulo vegetal donde se lleva a cabo la fotosíntesis capturando luz solar." }
      ],
      "detective": {
        "story": "Las células procariotas se caracterizan por poseer un gran núcleo definido. Un ejemplo de procariota son las células humanas. Además, se sabe que las mitocondrias fabrican clorofila a partir de la luz del sol.",
        "lies": [
          { "falsePhrase": "poseer un gran núcleo definido", "truth": "carecer de núcleo definido" },
          { "falsePhrase": "las células humanas", "truth": "las bacterias" },
          { "falsePhrase": "mitocondrias fabrican clorofila", "truth": "cloroplastos realizan la fotosíntesis" }
        ]
      },
      "safeBox": [
        { "question": "¿Cuántas mitocondrias promedio hay en un glóbulo rojo maduro?", "answer": 0 },
        { "question": "¿Cuántos cromosomas tiene una célula somática humana normal?", "answer": 46 },
        { "question": "¿Cuántos nucleolos suele haber típicamente visibles en un núcleo interfásico común?", "answer": 1 },
        { "question": "¿Cuántas capas de fosfolípidos forman la membrana plasmática?", "answer": 2 }
      ],
      "pixelReveal": [
        { "question": "Proceso mediante el cual la célula vegetal produce glucosa usando luz solar", "answer": "Fotosíntesis" },
        { "question": "Molécula portadora de la información genética de la célula", "answer": "ADN" },
        { "question": "Red de filamentos proteicos que da forma e integridad física a la célula", "answer": "Citoesqueleto" }
      ],
      "zenSort": [
        "Replicación del ADN en el núcleo",
        "Condensación de la cromatina en cromosomas visibles",
        "Alineación de los cromosomas en la placa metafásica",
        "Separación de las cromátidas hermanas hacia los polos opuestos",
        "División del citoplasma (citocinesis) para formar dos células"
      ],
      "bossRaid": {
        "bossName": "Super-Bacteria Patógena",
        "maxHp": 1000,
        "questions": [
          { "question": "¿Qué fármaco ataca específicamente la pared celular bacteriana?", "options": ["Penicilina", "Ibuprofeno", "Insulina", "Aspirina"], "answer": "Penicilina", "damage": 400 },
          { "question": "¿Cuál es la principal forma de locomoción en bacterias?", "options": ["Flagelos", "Cilios", "Pseudópodos", "Contracción muscular"], "answer": "Flagelos", "damage": 350 },
          { "question": "¿Cómo se llama la transferencia directa de ADN entre bacterias?", "options": ["Conjugación", "Fisión binaria", "Mitosis", "Endocitosis"], "answer": "Conjugación", "damage": 300 }
        ]
      }
    }
  },
  "historia-revolucion": {
    title: "La Revolución Industrial",
    description: "Módulo MVP que cubre las innovaciones técnicas de los siglos XVIII y XIX, las transformaciones sociales y el surgimiento del capitalismo industrial.",
    category: "Historia",
    gameData: {
      "towerClimb": [
        { "question": "¿En qué país comenzó la Revolución Industrial a mediados del siglo XVIII?", "options": ["Gran Bretaña", "Francia", "Alemania", "Estados Unidos"], "answer": "Gran Bretaña" },
        { "question": "¿Qué invento de James Watt fue crucial para mecanizar las fábricas y el transporte?", "options": ["La máquina de vapor", "El telégrafo", "La locomotora eléctrica", "El telar hidráulico"], "answer": "La máquina de vapor" },
        { "question": "¿Cuál fue el principal combustible utilizado durante la primera fase de la revolución?", "options": ["Carbón mineral", "Petróleo", "Electricidad", "Madera"], "answer": "Carbón mineral" },
        { "question": "¿Qué nuevo grupo social urbano surgió compuesto por los trabajadores fabriles asalariados?", "options": ["Proletariado", "Burguesía", "Campesinado", "Clero"], "answer": "Proletariado" }
      ],
      "millionaire": [
        { "question": "¿Qué sector industrial fue el primero en mecanizarse y expandirse en Inglaterra?", "options": ["Textil", "Siderúrgico", "Químico", "Ferroviario"], "answer": "Textil" },
        { "question": "¿Quién diseñó la famosa locomotora de vapor conocida como 'The Rocket' en 1829?", "options": ["George Stephenson", "Robert Fulton", "James Watt", "Thomas Edison"], "answer": "George Stephenson" },
        { "question": "¿Qué obra económica clave fue publicada en 1776 por Adam Smith?", "options": ["La riqueza de las naciones", "El Capital", "El Manifiesto Comunista", "Principios de Economía Política"], "answer": "La riqueza de las naciones" },
        { "question": "La segunda fase de la Revolución Industrial (fines s. XIX) se caracterizó por el uso del petróleo y la...", "options": ["Electricidad", "Máquina de vapor", "Energía eólica", "Fuerza hidráulica"], "answer": "Electricidad" },
        { "question": "¿Qué movimiento obrero del siglo XIX destruía maquinaria como protesta?", "options": ["Ludismo", "Cartismo", "Socialismo", "Sindicalismo"], "answer": "Ludismo" },
        { "question": "¿Qué canal de navegación artificial fue inaugurado en 1869 uniendo el Mediterráneo con el Mar Rojo?", "options": ["Canal de Suez", "Canal de Panamá", "Canal de Corinto", "Canal de Kiel"], "answer": "Canal de Suez" }
      ],
      "conceptConquest": [
        { "term": "Proletariado", "definition": "Clase social constituida por los trabajadores asalariados de las fábricas que no poseen medios de producción." },
        { "term": "Burguesía", "definition": "Clase social dueña del capital y de las fábricas o medios de producción en el sistema capitalista." },
        { "term": "Ludismo", "definition": "Movimiento de protesta obrera surgido en Inglaterra que se oponía a la mecanización destruyendo máquinas." },
        { "term": "Capitalismo", "definition": "Sistema económico basado en la propiedad privada de los medios de producción y el libre mercado." }
      ],
      "detective": {
        "story": "La Revolución Industrial comenzó famosamente en Francia gracias a la máquina de vapor inventada por Julio César. Esto llevó a que los nobles del campo se convirtieran en el proletariado explotado que destruía trenes de juguete.",
        "lies": [
          { "falsePhrase": "en Francia", "truth": "en Inglaterra" },
          { "falsePhrase": "por Julio César", "truth": "por James Watt" },
          { "falsePhrase": "los nobles del campo", "truth": "los campesinos y artesanos" }
        ]
      },
      "safeBox": [
        { "question": "¿En qué año del siglo XVIII patentó James Watt su máquina de vapor mejorada (176X)?", "answer": 9 },
        { "question": "¿Cuántas horas de jornada laboral promedio tenían los niños en las fábricas tempranas del siglo XIX?", "answer": 14 },
        { "question": "¿En qué siglo comenzó la Segunda Revolución Industrial (s. XI_)?", "answer": 9 },
        { "question": "¿Cuántas revoluciones industriales principales reconocen los historiadores hasta la actualidad?", "answer": 4 }
      ],
      "pixelReveal": [
        { "question": "Combustible fósil que impulsó la industria del hierro y la máquina de vapor", "answer": "Carbón" },
        { "question": "Asociación de trabajadores creada para la defensa de sus intereses laborales", "answer": "Sindicato" },
        { "question": "Medio de transporte terrestre de gran tonelaje que acortó distancias continentales", "answer": "Ferrocarril" }
      ],
      "zenSort": [
        "Uso del telar manual en pequeños talleres domésticos",
        "Invención de la máquina de hilar Jenny",
        "Implementación de fábricas textiles con energía hidráulica",
        "Adaptación de la máquina de vapor a la hiladora mecánica",
        "Construcción de la primera línea ferroviaria comercial"
      ],
      "bossRaid": {
        "bossName": "Gran Magnate del Carbón",
        "maxHp": 1000,
        "questions": [
          { "question": "¿Qué práctica agraria eliminó los campos comunales en Inglaterra?", "options": ["Leyes de Cercamiento", "Rotación de cultivos", "Barbecho", "Agricultura colectiva"], "answer": "Leyes de Cercamiento", "damage": 400 },
          { "question": "¿Cuál fue el principal metal para construir máquinas, rieles y barcos?", "options": ["Hierro", "Cobre", "Bronce", "Aluminio"], "answer": "Hierro", "damage": 350 },
          { "question": "¿Qué epidemia asoló los barrios obreros hacinados por contaminación del agua?", "options": ["Cólera", "Viruela", "Gripe", "Peste negra"], "answer": "Cólera", "damage": 300 }
        ]
      }
    }
  },
  "mates-ecuaciones": {
    title: "Ecuaciones de Primer Grado",
    description: "Módulo MVP para practicar resolución de ecuaciones lineales simples, despeje de incógnitas y planteo de problemas matemáticos.",
    category: "Matemáticas",
    gameData: {
      "towerClimb": [
        { "question": "Resuelve para x: x + 5 = 12", "options": ["x = 7", "x = 17", "x = 6", "x = 8"], "answer": "x = 7" },
        { "question": "Resuelve para x: 3x = 15", "options": ["x = 5", "x = 12", "x = 18", "x = 3"], "answer": "x = 5" },
        { "question": "Resuelve para x: 2x - 4 = 10", "options": ["x = 7", "x = 6", "x = 8", "x = 12"], "answer": "x = 7" },
        { "question": "Resuelve para x: x / 3 = 6", "options": ["x = 18", "x = 9", "x = 2", "x = 3"], "answer": "x = 18" }
      ],
      "millionaire": [
        { "question": "En la ecuación 4x = 20, ¿qué operación debemos hacer a ambos lados para despejar x?", "options": ["Dividir por 4", "Restar 4", "Multiplicar por 4", "Sumar 4"], "answer": "Dividir por 4" },
        { "question": "Resuelve para x: 5x + 3 = 23", "options": ["x = 4", "x = 5", "x = 20", "x = 3"], "answer": "x = 4" },
        { "question": "Resuelve para x: 10 - x = 7", "options": ["x = 3", "x = -3", "x = 17", "x = 7"], "answer": "x = 3" },
        { "question": "Resuelve para x: 2x + 5 = x + 9", "options": ["x = 4", "x = 14", "x = 2", "x = -4"], "answer": "x = 4" },
        { "question": "El triple de un número aumentado en 2 es 17. ¿Cuál es el número?", "options": ["5", "6", "15", "7"], "answer": "5" }
      ],
      "conceptConquest": [
        { "term": "Ecuación", "definition": "Igualdad matemática entre dos expresiones que contiene una o más incógnitas." },
        { "term": "Incógnita", "definition": "Valor desconocido representado generalmente por una letra (ej. x) que se quiere hallar." },
        { "term": "Término", "definition": "Cada una de las partes separadas por signos de suma o resta en una ecuación." },
        { "term": "Miembro", "definition": "Cada una de las dos expresiones situadas a los lados del signo de igualdad." }
      ],
      "detective": {
        "story": "En una ecuación, el término que está sumando pasa al otro lado multiplicando directamente. Por ejemplo, en la expresión x + 3 = 5, el 3 pasa como x = 5 * 3. Asimismo, la letra x siempre debe valer cero para resolver el ejercicio.",
        "lies": [
          { "falsePhrase": "pasa al otro lado multiplicando directamente", "truth": "pasa al otro lado restando" },
          { "falsePhrase": "x = 5 * 3", "truth": "x = 5 - 3" },
          { "falsePhrase": "siempre debe valer cero", "truth": "debe despejarse para encontrar su valor" }
        ]
      },
      "safeBox": [
        { "question": "Si x + 4 = 12, ¿cuánto vale x?", "answer": 8 },
        { "question": "Si 3x - 1 = 20, ¿cuánto vale x?", "answer": 7 },
        { "question": "Si x/2 = 3, ¿cuánto vale x?", "answer": 6 },
        { "question": "Si 5 - x = 1, ¿cuánto vale x?", "answer": 4 }
      ],
      "pixelReveal": [
        { "question": "Valor de la incógnita que hace verdadera la igualdad en una ecuación", "answer": "Solución" },
        { "question": "Ecuación cuyo grado de la incógnita es uno", "answer": "Lineal" },
        { "question": "Símbolo de igualdad obligatorio en toda ecuación", "answer": "Igual" }
      ],
      "zenSort": [
        "Identificar la incógnita y los términos independientes",
        "Agrupar los términos con incógnita en un miembro y los números en el otro",
        "Realizar las operaciones de suma y resta en cada miembro",
        "Despejar la incógnita dividiendo por su coeficiente",
        "Comprobar el resultado sustituyendo el valor hallado en la ecuación original"
      ],
      "bossRaid": {
        "bossName": "Heredero de Pitágoras",
        "maxHp": 1000,
        "questions": [
          { "question": "Resuelve para x: 3(x + 2) - 2x = 10", "options": ["x = 4", "x = 8", "x = 2", "x = 6"], "answer": "x = 4", "damage": 400 },
          { "question": "Resuelve para x: 4x/2 + 5 = 15", "options": ["x = 5", "x = 10", "x = 2", "x = 20"], "answer": "x = 5", "damage": 350 },
          { "question": "Resuelve para x: 7x - 3 = 5x + 9", "options": ["x = 6", "x = 3", "x = 12", "x = 2"], "answer": "x = 6", "damage": 300 }
        ]
      }
    }
  }
};
