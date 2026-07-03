import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ImageIcon, CheckCircle2, Award } from 'lucide-react';
import { cn } from '../lib/utils';

export default function PixelReveal({ questions, onGameEnd }: { questions: any[]; onGameEnd: () => void }) {
  const [hiddenTiles, setHiddenTiles] = useState<Set<number>>(new Set([0,1,2,3,4,5,6,7,8]));
  const [currentQIndex, setCurrentQIndex] = useState(0);

  const isWon = hiddenTiles.size === 0;
  const currentQ = questions[currentQIndex % questions.length];
  const options = currentQ?.options || [];

  const handleOption = (option: string) => {
    if (isWon || !currentQ) return;

    if (option.trim().toLowerCase() === currentQ.answer.trim().toLowerCase()) {
      // Find a random hidden tile and reveal it
      const hiddenArray = Array.from(hiddenTiles);
      if (hiddenArray.length > 0) {
        const randomTile = hiddenArray[Math.floor(Math.random() * hiddenArray.length)];
        setHiddenTiles(prev => {
           const next = new Set(prev);
           next.delete(randomTile);
           return next;
        });
      }
      setCurrentQIndex(prev => prev + 1);
    }
  };

  if (isWon) {
    return (
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center p-12 bg-surface border border-pink-500/30 rounded-2xl text-center gap-6 shadow-[0_0_40px_rgba(236,72,153,0.1)] max-w-2xl mx-auto w-full">
         <div className="w-full aspect-video rounded-xl overflow-hidden relative shadow-2xl">
           <img src="https://picsum.photos/seed/science/800/600" alt="Revealed" className="w-full h-full object-cover" />
         </div>
         <h2 className="text-4xl font-bold text-pink-400 mt-4">¡Imagen Revelada Completamente!</h2>
         <p className="text-pink-200/70">Tu enfoque constante descubrió el panorama oculto.</p>
         <button onClick={onGameEnd} className="mt-2 bg-pink-500/20 border border-pink-500 text-pink-500 hover:bg-pink-500/30 px-8 py-3 rounded-xl font-bold transition-colors">
           Regresar al Menú
         </button>
      </motion.div>
    );
  }

  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row gap-10 items-center justify-center">
      
      {/* The Puzzle Area */}
      <div className="w-full md:w-1/2 flex items-center justify-center">
         <div className="w-[400px] h-[400px] relative rounded-xl overflow-hidden border-4 border-border shadow-2xl bg-black">
            {/* Background Image */}
            <img src="https://picsum.photos/seed/science/800/600" alt="Background" className="absolute inset-0 w-full h-full object-cover" />
            
            {/* The 3x3 Grid Overlay */}
            <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-[2px]">
               {[0,1,2,3,4,5,6,7,8].map(i => (
                 <AnimatePresence key={i}>
                   {hiddenTiles.has(i) && (
                     <motion.div 
                       exit={{ opacity: 0, scale: 0.8 }} 
                       className="w-full h-full bg-[#0f172a] flex items-center justify-center border border-white/5"
                     />
                   )}
                 </AnimatePresence>
               ))}
            </div>
         </div>
      </div>

      {/* The Question Area */}
      <div className="w-full md:w-1/2 flex flex-col gap-6">
         <div className="flex items-center gap-3">
            <ImageIcon className="w-8 h-8 text-pink-500" />
            <h3 className="text-2xl font-bold text-text-main">Imagen Revelada</h3>
         </div>
         <p className="text-text-muted text-sm">Responde con atención y sin prisa. Cada logro remueve un bloque del panel misterioso.</p>
         
         <motion.div 
            key={currentQIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mt-6 bg-surface border border-border p-8 rounded-2xl shadow-lg flex flex-col gap-6"
         >
            <h4 className="text-xl font-semibold">{currentQ.question}</h4>
            <div className="flex flex-col gap-3">
               {options && options.length > 0 ? (
                 options.map((opt: string, i: number) => (
                   <button 
                     key={i}
                     onClick={() => handleOption(opt)}
                     className="w-full text-left p-4 rounded-xl border border-border bg-accent hover:border-pink-500/50 hover:bg-pink-500/10 transition-colors cursor-pointer"
                   >
                     {opt}
                   </button>
                 ))
               ) : (
                 <div className="flex flex-col gap-3">
                   <input 
                     type="text" 
                     placeholder="Escribe tu respuesta aquí..." 
                     className="w-full p-4 rounded-xl border border-border bg-accent text-white focus:outline-none focus:border-pink-500 text-sm"
                     onKeyDown={(e) => {
                       if (e.key === 'Enter') {
                         handleOption(e.currentTarget.value);
                         e.currentTarget.value = '';
                       }
                     }}
                   />
                   <button 
                     onClick={(e) => {
                       const input = e.currentTarget.previousElementSibling as HTMLInputElement;
                       handleOption(input.value);
                       input.value = '';
                     }}
                     className="w-full p-4 rounded-xl bg-pink-500 text-white font-bold hover:bg-pink-600 transition-colors text-sm cursor-pointer"
                   >
                     Verificar Respuesta
                   </button>
                 </div>
               )}
            </div>
         </motion.div>
      </div>

    </div>
  );
}
