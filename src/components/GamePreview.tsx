import React from 'react';
import { motion } from 'motion/react';
import { Play, ArrowLeft, Gamepad2, Layers } from 'lucide-react';

interface Props {
  activeMode: string;
  gameData: any;
  onStart: () => void;
  onBack: () => void;
}

const modeNames: Record<string, string> = {
  'boss-raid': 'Batalla Final',
  'concept-matching': 'Conceptos',
  'tower-climb': 'Torre del Saber',
  'millionaire': 'Millonario',
  'zen-sort': 'Orden Zen',
  'pixel-reveal': 'Imagen Revelada',
  'detective': 'El Detective',
  'safe-box': 'Caja Fuerte'
};

export default function GamePreview({ activeMode, gameData, onStart, onBack }: Props) {
  let questions: any[] = [];
  
  // Extract questions based on mode structure
  if (activeMode === 'boss-raid' && gameData.bossRaid) questions = gameData.bossRaid.questions;
  else if (activeMode === 'concept-matching' && gameData.conceptConquest) questions = gameData.conceptConquest;
  else if (activeMode === 'tower-climb' && gameData.towerClimb) questions = gameData.towerClimb;
  else if (activeMode === 'millionaire' && gameData.millionaire) questions = gameData.millionaire;
  else if (activeMode === 'safe-box' && gameData.safeBox) questions = gameData.safeBox;
  else if (activeMode === 'pixel-reveal' && gameData.pixelReveal) questions = gameData.pixelReveal;
  else if (activeMode === 'detective' && gameData.detective) questions = gameData.detective.lies || [];
  else if (activeMode === 'zen-sort' && gameData.zenSort) questions = gameData.zenSort;

  const modeName = modeNames[activeMode] || 'Juego Dinámico';

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-4xl mx-auto p-6 flex flex-col items-center gap-8 text-center"
    >
      <div className="w-full flex justify-start">
        <button onClick={onBack} className="flex items-center gap-2 text-text-muted hover:text-white transition-colors">
          <ArrowLeft className="w-5 h-5" /> Volver
        </button>
      </div>

      <div className="flex flex-col items-center gap-4">
        <div className="w-24 h-24 bg-primary/20 border-2 border-primary/50 rounded-3xl flex items-center justify-center shadow-[0_0_40px_rgba(139,92,246,0.3)]">
          <Gamepad2 className="w-12 h-12 text-primary" />
        </div>
        <h1 className="text-4xl font-black uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400">
          {modeName}
        </h1>
        <p className="text-blue-200">Revisa el contenido antes de proyectarlo a la clase.</p>
      </div>

      <div className="w-full bg-[#020617] border border-blue-900/50 rounded-2xl p-6 shadow-xl text-left max-h-[40vh] overflow-y-auto">
        <div className="flex items-center gap-3 mb-6 border-b border-blue-900/50 pb-4">
          <Layers className="w-5 h-5 text-blue-400" />
          <h3 className="text-xl font-bold text-blue-100">Vista Previa de Preguntas ({questions.length})</h3>
        </div>

        <div className="flex flex-col gap-4">
          {questions.map((q, idx) => (
             <div key={idx} className="p-4 bg-blue-950/30 border border-blue-900/30 rounded-xl">
               <span className="text-xs font-bold text-blue-400 mb-2 block">Item {idx + 1}</span>
               <p className="font-medium text-white break-words">
                 {typeof q === 'string' ? q : q.question || q.term || q.clue || q.story || q.lie || JSON.stringify(q)}
               </p>
               {q.answer && <p className="text-sm text-green-400 mt-2 font-bold">Respuesta: {q.answer}</p>}
               {q.definition && <p className="text-sm text-green-400 mt-2 font-bold">Definición: {q.definition}</p>}
               {q.truth && <p className="text-sm text-green-400 mt-2 font-bold">Verdad: {q.truth}</p>}
             </div>
          ))}
        </div>
      </div>

      <button 
        onClick={onStart}
        className="mt-4 w-full md:w-auto bg-gradient-to-r from-primary to-purple-600 hover:scale-105 text-white font-black text-xl py-6 px-16 rounded-full flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(139,92,246,0.6)] transition-all cursor-pointer"
      >
        <Play className="w-6 h-6 fill-white" />
        ¡EMPEZAR A JUGAR!
      </button>
    </motion.div>
  );
}
