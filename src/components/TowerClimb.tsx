import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Trophy, ChevronUp, CheckCircle2, XCircle, Milestone } from 'lucide-react';
import { cn } from '../lib/utils';

export default function TowerClimb({ questions, onGameEnd }: { questions: any[]; onGameEnd: () => void }) {
  const [currentFloor, setCurrentFloor] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isEvaluating, setIsEvaluating] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [gameWon, setGameWon] = useState(false);

  const currentQ = questions[currentFloor];

  const handleOptionSelect = (option: string) => {
    if (isEvaluating || gameOver || gameWon) return;
    
    setSelectedOption(option);
    setIsEvaluating(true);

    setTimeout(() => {
      if (option === currentQ.answer) {
        setTimeout(() => {
          if (currentFloor + 1 >= questions.length) { setGameWon(true); } 
          else { setCurrentFloor(prev => prev + 1); setSelectedOption(null); setIsEvaluating(false); }
        }, 800);
      } else {
        setTimeout(() => setGameOver(true), 800);
      }
    }, 600);
  };

  if (gameWon) {
    return (
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="w-full max-w-2xl mx-auto flex flex-col items-center justify-center p-12 bg-surface border border-[#22d3ee]/30 rounded-2xl shadow-[0_0_40px_rgba(34,211,238,0.15)] text-center gap-6">
         <div className="w-24 h-24 bg-[#22d3ee]/20 rounded-full flex items-center justify-center border border-[#22d3ee]/40">
            <Trophy className="w-12 h-12 text-[#22d3ee]" />
         </div>
         <h2 className="text-4xl font-bold text-text-main">¡Torre Conquistada!</h2>
         <p className="text-text-muted">Llegaste triunfante a la cima respondiendo impecablemente todo.</p>
         <button onClick={onGameEnd} className="mt-4 bg-[#22d3ee]/10 border border-[#22d3ee] text-[#22d3ee] hover:bg-[#22d3ee]/20 px-8 py-3 rounded-xl font-bold transition-colors">Volver al Menú</button>
      </motion.div>
    );
  }

  if (gameOver) {
    return (
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="w-full max-w-2xl mx-auto flex flex-col items-center justify-center p-12 bg-surface border border-red-500/30 rounded-2xl shadow-[0_0_40px_rgba(239,68,68,0.1)] text-center gap-6">
         <div className="w-24 h-24 bg-red-500/20 rounded-full flex items-center justify-center border border-red-500/40">
            <XCircle className="w-12 h-12 text-red-500" />
         </div>
         <h2 className="text-4xl font-bold text-text-main">¡Caíste!</h2>
         <p className="text-text-muted">Un error de cálculo te hizo resbalar. Prepara tu mente e inténtalo de nuevo.</p>
         <div className="flex gap-4 mt-4">
           <button onClick={() => { setCurrentFloor(0); setSelectedOption(null); setIsEvaluating(false); setGameOver(false); }} className="bg-accent border border-border hover:bg-border text-text-main px-8 py-3 rounded-xl font-bold transition-colors">Reintentar</button>
           <button onClick={onGameEnd} className="bg-surface border border-border text-text-muted hover:text-text-main px-8 py-3 rounded-xl font-bold transition-colors">Salir</button>
         </div>
      </motion.div>
    );
  }

  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row gap-8 items-start">
      <div className="w-full md:w-1/4 flex flex-col gap-4 bg-surface border border-border rounded-2xl p-6 relative overflow-hidden">
         <h3 className="font-bold text-lg border-b border-border pb-4 mb-4 flex items-center gap-2"><Milestone className="w-5 h-5 text-secondary" /> Escalada Visual</h3>
         <div className="flex flex-col-reverse gap-4 relative z-10">
            {questions.map((q: any, idx: number) => {
              const state = idx < currentFloor ? "completed" : idx === currentFloor ? "active" : "locked";
              return (
                <div key={idx} className="flex items-center gap-4 relative">
                  {idx !== 0 && <div className={cn("absolute -bottom-4 left-[15px] w-[2px] h-4", idx <= currentFloor ? "bg-primary" : "bg-border")} />}
                  <div className={cn("w-8 h-8 rounded-full flex items-center justify-center border-2 z-10 transition-colors", state === "completed" ? "bg-primary/20 border-primary text-primary" : state === "active" ? "bg-secondary/20 border-secondary text-secondary animate-pulse" : "bg-accent border-border text-text-muted")}>
                    {state === "completed" ? <CheckCircle2 className="w-4 h-4" /> : state === "active" ? <ChevronUp className="w-4 h-4" /> : <span className="text-xs font-bold">{idx + 1}</span>}
                  </div>
                  <div className={cn("text-sm font-medium", state === "active" ? "text-secondary font-bold" : state === "completed" ? "text-primary hover:line-through" : "text-text-muted")}>Piso {idx + 1}</div>
                </div>
              );
            })}
         </div>
      </div>
      <div className="w-full md:w-3/4">
        <AnimatePresence mode="wait">
          <motion.div key={currentFloor} initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -50 }} transition={{ duration: 0.4 }} className="w-full bg-surface border border-border rounded-2xl p-8 flex flex-col gap-8 shadow-xl">
             <div className="flex flex-col gap-4">
                <span className="text-xs font-mono font-bold tracking-widest uppercase text-secondary bg-secondary/10 border border-secondary/20 self-start px-3 py-1 rounded">Piso Acutual {currentFloor + 1}</span>
                <h2 className="text-2xl md:text-3xl font-bold leading-tight">{currentQ.question}</h2>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                {currentQ.options.map((option: string, idx: number) => {
                  const isSelected = selectedOption === option;
                  let btnStateClass = "bg-accent border-border hover:border-text-muted text-text-main";
                  if (isSelected) {
                     if (!isEvaluating) btnStateClass = "bg-primary/20 border-primary text-primary shadow-[0_0_15px_rgba(34,211,238,0.2)]";
                     else if (option === currentQ.answer) btnStateClass = "bg-[#22c55e]/20 border-[#22c55e] text-[#22c55e] shadow-[0_0_15px_rgba(34,197,94,0.3)]";
                     else btnStateClass = "bg-red-500/20 border-red-500 text-red-400 shadow-[0_0_15px_rgba(239,68,68,0.3)]";
                  } else if (isEvaluating && option === currentQ.answer) btnStateClass = "bg-[#22c55e]/10 border-[#22c55e]/50 text-[#22c55e]";
                  else if (isEvaluating) btnStateClass = "bg-background border-border text-text-muted opacity-50";

                  return <button key={idx} disabled={isEvaluating} onClick={() => handleOptionSelect(option)} className={cn("p-5 text-left rounded-xl border text-[16px] font-medium transition-all duration-300", btnStateClass)}>{option}</button>;
                })}
             </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
