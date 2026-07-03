import 'dotenv/config';
import express from 'express';
import { createServer as createViteServer } from 'vite';
import multer from 'multer';
import { GoogleGenAI } from '@google/genai';
import path from 'path';
import { PrismaClient } from '@prisma/client';

import pg from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import { mvpTemplates } from './templates';

const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL
});
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

const upload = multer({ storage: multer.memoryStorage() });

async function startServer() {
  const app = express();
  const PORT = process.env.PORT || 3000;

  app.use(express.json());

  // === PRISMA ENDPOINTS ===
  app.get('/api/banks', async (req, res) => {
    try {
      const banks = await prisma.questionBank.findMany({
        orderBy: { createdAt: 'desc' },
        include: { questions: true }
      });
      res.json(banks);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch banks' });
    }
  });

  app.delete('/api/banks/:id', async (req, res) => {
    try {
      await prisma.questionBank.delete({ where: { id: Number(req.params.id) } });
      res.json({ success: true });
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete bank' });
    }
  });

  app.put('/api/banks/:id/approve', async (req, res) => {
    try {
      const bank = await prisma.questionBank.update({
        where: { id: Number(req.params.id) },
        data: { status: 'approved' }
      });
      res.json(bank);
    } catch (error) {
      res.status(500).json({ error: 'Failed to approve bank' });
    }
  });

  app.put('/api/questions/:id', async (req, res) => {
    try {
      const { data, difficulty } = req.body;
      const question = await prisma.question.update({
        where: { id: Number(req.params.id) },
        data: { data: JSON.stringify(data), difficulty }
      });
      res.json(question);
    } catch (error) {
      res.status(500).json({ error: 'Failed to update question' });
    }
  });

  app.delete('/api/questions/:id', async (req, res) => {
    try {
      await prisma.question.delete({ where: { id: Number(req.params.id) } });
      res.json({ success: true });
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete question' });
    }
  });
  // =========================

  // Demo material route
  app.get('/api/demo-material', (req, res) => {
    const defaultText = `
The History of Cybersecurity and Cryptography

Cryptography is the practice and study of techniques for secure communication in the presence of adversarial behavior. One of the earliest known forms of encryption is the Caesar Cipher, supposedly used by Julius Caesar, which involves shifting letters in the alphabet. 

During World War II, the Enigma machine was used by Nazi Germany to encrypt communications. The cracking of the Enigma code by Alan Turing and his team at Bletchley Park is credited with significantly shortening the war and is a foundation of modern computer science.

In 1977, the Data Encryption Standard (DES) was established by the US government. However, as computing power increased, DES became vulnerable. In 2001, it was replaced by the Advanced Encryption Standard (AES), which remains a global standard today.

Another massive leap came with Public Key Cryptography (Asymmetric Cryptography) introduced by Whitfield Diffie and Martin Hellman in 1976. This enabled secure communication without the prior exchange of a secret key. This eventually led to the widely used RSA algorithm.

Core Concepts:
- Symmetric Encryption: Uses the same key for encryption and decryption (e.g., AES).
- Asymmetric Encryption: Uses a public key for encryption and a private key for decryption (e.g., RSA).
- Hashing: A one-way function that turns data into a fixed-size string of characters.

Modern cybersecurity also deals with malware (ransomware, trojans), phishing, and securing network protocols (like SSL/TLS which secures HTTPS). 
    `.trim();
    res.json({ content: defaultText });
  });
  
  // Load predefined MVP templates without AI
  app.post('/api/load-template', async (req, res) => {
    try {
      const { templateId } = req.body;
      const template = mvpTemplates[templateId];
      if (!template) {
        return res.status(400).json({ error: 'Template not found' });
      }

      const bank = await prisma.questionBank.create({
        data: {
          title: template.title,
          description: template.description,
          category: template.category,
          status: 'approved',
          questions: {
            create: Object.keys(template.gameData).map(key => ({
              gameMode: key,
              difficulty: 3,
              data: JSON.stringify(template.gameData[key])
            }))
          }
        }
      });

      res.json({ bankId: bank.id, gameData: template.gameData });
    } catch (error: any) {
      console.error('Error loading template:', error);
      res.status(500).json({ error: error.message || 'Failed to load template' });
    }
  });

  // Game generation route using Gemini API
  app.post('/api/generate-game', upload.single('document'), async (req, res) => {
    try {
      const hasContent = req.body.text || req.file;

      if (!hasContent) {
         return res.status(400).json({ error: 'No text or document provided' });
      }

      let apiKey = process.env.GEMINI_API_KEY;
      if (apiKey) apiKey = apiKey.replace(/['"]+/g, '').trim();

      // If the user's key is the literally copied dummy text, we return a mocked response for the demo
      // If the user's key is the literally copied dummy text, we return a mocked response for the demo
      if (!apiKey || apiKey === "MY_GEMINI_API_KEY" || apiKey.includes("MY_GEMINI")) {
          console.warn("Using mocked data because GEMINI_API_KEY is invalid or missing.");
          const mockData = {
            "towerClimb": [
              { "question": "¿Cuál es la forma de encriptación más antigua conocida?", "options": ["AES", "RSA", "Cifrado César", "Enigma"], "answer": "Cifrado César" },
              { "question": "¿Qué estándar de encriptación reemplazó a DES en 2001?", "options": ["AES", "Función Hash", "Código Turing", "RSA"], "answer": "AES" },
              { "question": "¿Qué tipo de criptografía usa un par de claves pública y privada?", "options": ["Simétrica", "Cifrado César", "Hashing", "Asimétrica"], "answer": "Asimétrica" },
              { "question": "¿Qué máquina fue descifrada por el equipo de Alan Turing en la Segunda Guerra Mundial?", "options": ["La Bomba", "El Oráculo", "Enigma", "Colossus"], "answer": "Enigma" }
            ],
            "millionaire": [
              { "question": "¿De qué trata principalmente la criptografía?", "options": ["Comunicación segura", "Diseño gráfico", "Biología vegetal", "Patrones climáticos"], "answer": "Comunicación segura" },
              { "question": "¿Qué civilización antigua usó famosamente el Cifrado César?", "options": ["Romanos", "Griegos", "Egipcios", "Mayas"], "answer": "Romanos" },
              { "question": "¿Cuál es el término para el mensaje original sin encriptar?", "options": ["Texto cifrado", "Texto plano", "Hash", "Clave"], "answer": "Texto plano" },
              { "question": "En un algoritmo simétrico, ¿cuántas claves se necesitan para encriptar y desencriptar un mensaje?", "options": ["Una", "Dos", "Tres", "Cuatro"], "answer": "Una" },
              { "question": "¿Qué famosa máquina capturaron los Aliados para romper los códigos alemanes en la SGM?", "options": ["Máquina Enigma", "Máquina de Turing", "Analizador Diferencial", "Colossus"], "answer": "Máquina Enigma" },
              { "question": "¿Qué significa RSA?", "options": ["Rivest, Shamir, Adleman", "Random Secure Access", "Rapid System Algorithm", "Rigid Security Authenticator"], "answer": "Rivest, Shamir, Adleman" },
              { "question": "¿Cuál de estas NO es una criptomoneda basada en criptografía?", "options": ["Bitcoin", "Ethereum", "Monero", "PayPal"], "answer": "PayPal" },
              { "question": "¿Qué es un ataque de 'fuerza bruta'?", "options": ["Probar cada clave posible", "Sobornar a un empleado", "Destruir el servidor", "Inyectar código malicioso"], "answer": "Probar cada clave posible" },
              { "question": "Una función hash está diseñada para ser un proceso...", "options": ["De un solo sentido", "Reversible", "De doble sentido", "Simétrico"], "answer": "De un solo sentido" },
              { "question": "¿Los avances en qué campo amenazan con romper la encriptación RSA actual?", "options": ["Computación Cuántica", "Nanotecnología", "Inteligencia Artificial", "Blockchain"], "answer": "Computación Cuántica" }
            ],
            "conceptConquest": [
              { "term": "Criptografía Simétrica", "definition": "Usa la misma clave para encriptar y desencriptar los datos." },
              { "term": "Criptografía Asimétrica", "definition": "Usa una clave pública para cifrar y una privada para descifrar." },
              { "term": "Cifrado César", "definition": "Un cifrado de sustitución que desplaza letras por un número fijo." },
              { "term": "Función Hash", "definition": "Un algoritmo que mapea datos de tamaño arbitrario a una cadena de tamaño fijo." }
            ],
            "detective": {
               "story": "Durante la Segunda Guerra Mundial, la Alemania nazi utilizó la máquina Enigma para encriptar. Fue en gran medida descifrada por Alan Turing y su equipo utilizando El Oráculo. Años antes, los antiguos griegos utilizaron el cifrado César. Hoy, DES es el estándar global.",
               "lies": [
                 { "lie": "El Oráculo", "truth": "La Bomba" },
                 { "lie": "griegos", "truth": "romanos" },
                 { "lie": "DES", "truth": "AES" }
               ]
            },
            "safeBox": [
              { "clue": "Si A=1, B=2, C=3, el cifradoésar +1 de 'CAB' es:", "answer": "DBC" },
              { "clue": "Las claves en RSA son P_ _ LICA y P_ _ VADA", "answer": "UBRI" },
              { "clue": "El hash común produce datos de tamaño... ¿variable o fijo?", "answer": "FIJO" }
            ],
            "bossRaid": {
              "bossName": "Mega-Hacker Quántico",
              "maxHp": 4,
              "questions": [
                { "question": "¿Qué reemplazó al estándar DES?", "answer": "AES" },
                { "question": "¿Una llave o dos para criptografía asimétrica?", "answer": "Dos" },
                { "question": "¿Qué cifrado rotacional usaban los romanos?", "answer": "Cesar" },
                { "question": "¿Qué proceso unidireccional convierte datos en una firma fija?", "answer": "Hash" }
              ]
            },
            "pixelReveal": [
               { "question": "Protocolo seguro para web", "answer": "HTTPS" },
               { "question": "Ataque probando contraseñas aleatorias", "answer": "Fuerza Bruta" },
               { "question": "Criptomoneda que usa blockchain", "answer": "Bitcoin" }
            ],
            "zenSort": [
               "Cifrado César en Roma antigua",
               "Descifrado de Máquina Enigma",
               "Creación del Estándar DES",
               "Adopción del Estándar AES",
               "Desarrollo de Amenaza Cuántica"
            ]
          };

          const bank = await prisma.questionBank.create({
            data: {
              title: `Juegos de: ${req.file?.originalname || 'Demo Criptografía'}`,
              description: 'Borrador generado directamente de la Demo.',
              category: 'General',
              status: 'draft',
              questions: {
                create: Object.keys(mockData).map(key => ({
                  gameMode: key,
                  difficulty: 3,
                  data: JSON.stringify((mockData as any)[key])
                }))
              }
            }
          });

          return res.json({ bankId: bank.id, gameData: mockData });
      }

      const ai = apiKey ? new GoogleGenAI({ apiKey }) : new GoogleGenAI({});
      
      const promptContents: any[] = [];
      
      if (req.file) {
        promptContents.push({
          inlineData: {
            data: req.file.buffer.toString('base64'),
            mimeType: req.file.mimetype
          }
        });
      }

      const promptText = `
        You are Gramify's Game Engine API. Your job is to transform the provided educational text or document into JSON game data.
        
        Text to analyze:
        """
        ${req.body.text || "Document attached via inlineData."}
        """
        
        Extract core concepts, key dates, and logical relationships to create multiple game modes.
        CRITICAL: All generated content MUST be entirely in SPANISH language.
        Return ONLY valid JSON matching this schema exactly, do not wrap in markdown tags:
        {
          "towerClimb": [
             { "question": string, "options": [string, string, string, string], "answer": string }
          ],
          "millionaire": [
             { "question": string, "options": [string, string, string, string], "answer": string }
          ],
          "conceptConquest": [
             { "term": string, "definition": string }
          ],
          "detective": {
             "story": string,
             "lies": [ { "falsePhrase": string, "truth": string } ]
          },
          "safeBox": [
             { "question": string, "answer": number }
          ],
          "pixelReveal": [
             { "question": string, "options": [string, string, string, string], "answer": string }
          ],
          "zenSort": [ string, string, string, string, string ],
          "bossRaid": {
             "bossName": string, 
             "maxHp": number,
             "questions": [
               { "question": string, "options": [string, string, string, string], "answer": string, "damage": number }
             ]
          }
        }
        
        Ensure there are at least 3 tower climb questions, 4 concept definitions, and 3 tough boss battle questions. Boss maxHp should be around 1000, and question damage should add up to more than maxHp.
      `;

      promptContents.push(promptText);

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: promptContents,
        config: {
          responseMimeType: 'application/json',
        }
      });

      const jsonText = response.text || "{}";
      const gameData = JSON.parse(jsonText);
      
      const fileName = req.file?.originalname || 'Documento Generado';

      // Guardar en la DB
      const bank = await prisma.questionBank.create({
        data: {
          title: `Juegos de: ${fileName}`,
          description: 'Borrador generado por IA.',
          category: 'General',
          status: 'draft',
          questions: {
            create: Object.keys(gameData).map(key => ({
              gameMode: key,
              difficulty: 3,
              data: JSON.stringify(gameData[key])
            }))
          }
        }
      });
      
      res.json({ bankId: bank.id, gameData });
    } catch (error: any) {
      console.error('Error generating game:', error);
      res.status(500).json({ error: error.message || 'Failed to generate game data. If using your own key, make sure it is valid.' });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    // Production static serving
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
