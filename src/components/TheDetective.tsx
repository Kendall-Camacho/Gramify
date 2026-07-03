import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Info, CheckCircle2 } from 'lucide-react';
import { cn } from '../lib/utils';

export default function TheDetective({ data, onGameEnd }: { data: { story: string; lies: { falsePhrase: string; truth: string }[] }; onGameEnd: (correct?: number) => void }) {
  const [foundLies, setFoundLies] = useState<Set<number>>(new Set());
  const [clickError, setClickError] = useState(false);
  const [clickPos, setClickPos] = useState({ x: 0, y: 0 });

  // Tokenize story into words to allow clicking on specific sections
  const words = data.story.split(' ');

  const handleWordClick = (word: string, index: number, e: React.MouseEvent) => {
    let foundLieIndex = -1;

    data.lies.forEach((lie, lieIndex) => {
       if (lie.falsePhrase.includes(word) && word.length > 2 && !foundLies.has(lieIndex)) {
          foundLieIndex = lieIndex;
       }
    });

    if (foundLieIndex !== -1) {
       setFoundLies(prev => new Set(prev).add(foundLieIndex));
    } else {
       setClickPos({ x: e.clientX, y: e.clientY });
       setClickError(true);
       setTimeout(() => setClickError(false), 500);
    }
  };

  const isWon = foundLies.size === data.lies.length;

  if (isWon) {
    return (
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center p-12 bg-[#312e81] border border-[#818cf8]/30 rounded-2xl text-center gap-6 shadow-[0_0_40px_rgba(49,46,129,0.5)] max-w-xl mx-auto w-full">
         <div className="w-24 h-24 bg-[#818cf8]/20 rounded-full flex items-center justify-center border border-[#818cf8]/40">
            <Search className="w-12 h-12 text-[#818cf8]" />
         </div>
         <h2 className="text-4xl font-bold text-[#e0e7ff]">¡Caso Cerrado!</h2>
         <p className="text-[#c7d2fe]">Has identificado toda la información falsa y desvelado la verdad oculta.</p>
         <button onClick={() => onGameEnd(data.lies.length)} className="mt-4 bg-[#818cf8]/20 border border-[#818cf8] text-[#818cf8] hover:bg-[#818cf8]/30 px-8 py-3 rounded-xl font-bold transition-colors">
           Regresar al Menú
         </button>
      </motion.div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col items-center">
       <div className="w-full flex flex-col items-center mb-10 gap-2">
         <Search className="w-10 h-10 text-[#818cf8] mb-2" />
         <h2 className="text-[32px] font-bold text-text-main">El Detective</h2>
         <p className="text-text-muted text-sm text-center max-w-xl">Lee el documento en absoluto silencio. La inteligencia artificial ha plantado <span className="text-white font-bold">{data.lies.length} mentiras</span>. Haz clic en las palabras sospechosas para desenmascararlas.</p>
      </div>

      <div className="w-full bg-[#1e1b4b] border-2 border-[#312e81] rounded-2xl p-8 relative overflow-hidden shadow-2xl">
         {/* Red flash effect on wrong click */}
         <AnimatePresence>
           {clickError && (
             <motion.div 
                initial={{ opacity: 0.8 }}
                animate={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-red-500/20 pointer-events-none"
             />
           )}
         </AnimatePresence>

         <div className="max-w-2xl mx-auto flex flex-wrap gap-x-2 gap-y-3 leading-loose text-xl text-[#c7d2fe]">
            {words.map((word, i) => (
              <span 
                key={i} 
                className="cursor-pointer hover:bg-[#3730a3] hover:text-white px-1 rounded transition-colors"
                onClick={(e) => handleWordClick(word, i, e)}
              >
                {word}
              </span>
            ))}
         </div>
      </div>

      <div className="w-full mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
         {data.lies.map((lie, i) => {
           const isFound = foundLies.has(i);
           return (
             <div key={i} className={cn("p-6 border rounded-xl flex flex-col gap-2 transition-colors", isFound ? "bg-[#3730a3] border-[#818cf8]" : "bg-surface border-border")}>
                <div className="flex justify-between items-center">
                   <h3 className="font-bold text-sm tracking-wider uppercase text-text-muted">Evidencia #{i + 1}</h3>
                   {isFound ? <CheckCircle2 className="w-5 h-5 text-[#818cf8]" /> : <Search className="w-5 h-5 text-text-muted opacity-50" />}
                </div>
                {isFound ? (
                  <div className="mt-2 text-sm">
                     <p className="line-through text-red-300 opacity-80">{lie.falsePhrase}</p>
                     <p className="text-[#818cf8] font-semibold mt-1">→ {lie.truth}</p>
                  </div>
                ) : (
                  <div className="mt-2 text-sm text-text-muted italic opacity-50">Por descubrir...</div>
                )}
             </div>
           );
         })}
      </div>
    </div>
  );
}
