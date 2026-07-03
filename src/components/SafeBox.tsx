import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Lock, KeyRound, Unlock, XCircle } from 'lucide-react';
import { cn } from '../lib/utils';
import { shuffleQuestions } from '../lib/shuffle';

export default function SafeBox({ questions, onGameEnd }: { questions: any[]; onGameEnd: (correct?: number) => void }) {
  const randomizedQuestions = React.useMemo(() => shuffleQuestions(questions), [questions]);
  const [digits, setDigits] = useState<string[]>(Array(4).fill(''));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [errorStatus, setErrorStatus] = useState<string | null>(null);

  const isWon = currentIndex >= 4;

  const handleKeypad = (num: number) => {
    if (isWon || errorStatus) return;

    if (num === randomizedQuestions[currentIndex].answer) {
      // Correct!
      const newDigits = [...digits];
      newDigits[currentIndex] = num.toString();
      setDigits(newDigits);
      setCurrentIndex(prev => prev + 1);
    } else {
      // Wrong! Buzz!
      setErrorStatus("ACCESO DENEGADO");
      setTimeout(() => setErrorStatus(null), 1500);
    }
  };

  if (isWon) {
    return (
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center p-12 bg-surface border border-yellow-500/30 rounded-2xl text-center gap-6 shadow-[0_0_40px_rgba(234,179,8,0.2)] max-w-xl mx-auto w-full">
         <div className="w-24 h-24 bg-yellow-500/20 rounded-full flex items-center justify-center border border-yellow-500/40">
            <Unlock className="w-12 h-12 text-yellow-500" />
         </div>
         <h2 className="text-4xl font-bold text-yellow-500">¡Bóveda Desbloqueada!</h2>
         <p className="text-yellow-200">Lograste descifrar el código maestro correctamente.</p>
         <div className="flex gap-4 mt-6">
           <button onClick={() => onGameEnd(currentIndex)} className="bg-yellow-500/20 border border-yellow-500 text-yellow-500 hover:bg-yellow-500/30 px-8 py-3 rounded-xl font-bold transition-colors">
             Regresar al Menú
           </button>
         </div>
      </motion.div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col md:flex-row gap-12 items-center justify-center">
      
      {/* The Safe UI */}
      <div className="bg-[#1e293b] p-8 rounded-3xl border-8 border-[#334155] flex flex-col items-center shadow-2xl relative">
         <div className="w-full flex items-center justify-between mb-8">
           <Lock className={cn("w-8 h-8 transition-colors", errorStatus ? "text-red-500" : "text-text-muted")} />
           <div className={cn("font-mono font-bold text-sm tracking-widest px-3 py-1 bg-black rounded shadow-[inset_0_0_10px_rgba(0,0,0,0.5)]", errorStatus ? "text-red-500" : "text-[#22c55e]")}>
              {errorStatus || "SISTEMA SEGURO"}
           </div>
         </div>

         {/* Digital Code Display */}
         <div className={cn("bg-black p-6 rounded-xl flex gap-4 mb-10 shadow-[inset_0_0_15px_rgba(0,0,0,0.8)] border", errorStatus ? "border-red-500/50" : "border-[#334155]")}>
            {digits.map((d, i) => (
              <div key={i} className={cn("w-14 h-20 flex items-center justify-center font-mono text-5xl font-bold bg-[#0f172a] rounded overflow-hidden relative", d ? "text-[#22c55e]" : "text-[#334155]")}>
                {d || "0"}
                {i === currentIndex && !errorStatus && (
                  <motion.div animate={{ opacity: [1, 0, 1] }} transition={{ repeat: Infinity, duration: 1 }} className="absolute bottom-2 w-8 h-1 bg-yellow-500" />
                )}
              </div>
            ))}
         </div>

         {/* Keypad */}
         <div className="grid grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => (
              <button key={num} onClick={() => handleKeypad(num)} className="w-16 h-16 rounded-full bg-[#334155] border-b-4 border-b-[#0f172a] active:border-b-0 active:translate-y-1 hover:bg-[#475569] text-white font-bold text-2xl transition-all">
                {num}
              </button>
            ))}
            <div />
            <button onClick={() => handleKeypad(0)} className="w-16 h-16 rounded-full bg-[#334155] border-b-4 border-b-[#0f172a] active:border-b-0 active:translate-y-1 hover:bg-[#475569] text-white font-bold text-2xl transition-all">
                0
            </button>
         </div>
      </div>

      {/* The Clue Area */}
      <div className="w-full md:w-1/2 flex flex-col gap-6">
         <h3 className="text-[28px] font-bold text-text-main flex items-center gap-3">
            <KeyRound className="w-8 h-8 text-secondary" />
            La Caja Fuerte
         </h3>
         <p className="text-text-muted">Analiza la pista matemática o lógica, e ingresa el dígito numérico en el teclado. Si cometes un error, el candado rechazará el código de inmediato.</p>
         
         <AnimatePresence mode="wait">
            <motion.div 
               key={currentIndex}
               initial={{ opacity: 0, x: 20 }}
               animate={{ opacity: 1, x: 0 }}
               exit={{ opacity: 0, x: -20 }}
               className="bg-accent border border-border p-8 rounded-2xl shadow-xl mt-4"
             >
               <span className="text-xs font-bold uppercase tracking-widest text-secondary font-mono">Dígito Requerido #{currentIndex + 1}</span>
               <h4 className="text-2xl font-semibold mt-4 leading-relaxed">{randomizedQuestions[currentIndex]?.question}</h4>
             </motion.div>
         </AnimatePresence>
      </div>
      
    </div>
  );
}
