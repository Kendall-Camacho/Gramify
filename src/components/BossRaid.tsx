import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Shield, Swords, Heart, Zap, Crosshair } from 'lucide-react';
import { cn } from '../lib/utils';
import confetti from 'canvas-confetti';

interface Question {
  question: string;
  options: string[];
  answer: string;
  damage: number;
}

interface BossRaidProps {
  bossName: string;
  maxHp: number;
  questions: Question[];
  onGameEnd: (won: boolean) => void;
}

export default function BossRaid({ bossName, maxHp, questions, onGameEnd }: BossRaidProps) {
  const [currentHp, setCurrentHp] = useState(maxHp);
  const [classHp, setClassHp] = useState(100);
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isEvaluating, setIsEvaluating] = useState(false);
  const [bossShake, setBossShake] = useState(false);
  const [playerShake, setPlayerShake] = useState(false);
  const [damageText, setDamageText] = useState<{ value: number; x: number; y: number; type: 'boss' | 'player' } | null>(null);

  const currentQ = questions[currentQIndex % questions.length]; // Loop questions if needed

  const handleOptionSelect = (option: string) => {
    if (isEvaluating) return;
    
    setSelectedOption(option);
    setIsEvaluating(true);

    setTimeout(() => {
      if (option === currentQ.answer) {
        // Correct - Damage Boss
        const newHp = Math.max(0, currentHp - currentQ.damage);
        setCurrentHp(newHp);
        
        setDamageText({ value: currentQ.damage, x: 60, y: 30, type: 'boss' });
        setBossShake(true);
        setTimeout(() => setBossShake(false), 500);

        if (newHp === 0) {
          triggerVictory();
        } else {
           nextQuestion();
        }

      } else {
        // Wrong - Damage Player 
        // In a real game, this might be based on time or direct consequence. Using fixed 25 for demo.
        const dmg = 25;
        const newClassHp = Math.max(0, classHp - dmg);
        setClassHp(newClassHp);

        setDamageText({ value: dmg, x: 30, y: 70, type: 'player' });
        setPlayerShake(true);
        setTimeout(() => setPlayerShake(false), 500);

        if (newClassHp === 0) {
          setTimeout(() => onGameEnd(false), 2000);
        } else {
           nextQuestion();
        }
      }
    }, 1000); // 1s suspension
  };

  const nextQuestion = () => {
    setTimeout(() => {
      setSelectedOption(null);
      setIsEvaluating(false);
      setDamageText(null);
      setCurrentQIndex(prev => prev + 1);
    }, 1500);
  };

  const triggerVictory = () => {
    confetti({
      particleCount: 150,
      spread: 100,
      origin: { y: 0.6 },
      colors: ['#22d3ee', '#8b5cf6', '#a78bfa']
    });
    setTimeout(() => onGameEnd(true), 3500);
  };

  const hpPercentage = (currentHp / maxHp) * 100;
  const classHpPercentage = (classHp / 100) * 100;

  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col gap-6">
       
       <div className="flex w-full items-start justify-between px-4 md:px-0 relative">
          
          {/* Class Stats */}
          <motion.div animate={{ x: playerShake ? [-10, 10, -10, 10, 0] : 0 }} className="flex flex-col gap-2 w-[35%]">
             <div className="flex items-center justify-between text-sm uppercase tracking-wider font-bold">
               <span className="text-[#22d3ee] flex items-center gap-2"><Shield className="w-4 h-4"/> Nivel de Clase</span>
               <span className="text-text-muted">{classHp}%</span>
             </div>
             <div className="h-4 w-full bg-accent border border-border rounded-full overflow-hidden">
               <motion.div 
                 className="h-full bg-gradient-to-r from-[#06b6d4] to-[#22d3ee]"
                 animate={{ width: `${classHpPercentage}%` }}
                 transition={{ duration: 0.5 }}
               />
             </div>
          </motion.div>

          <div className="absolute left-[50%] top-6 -translate-x-[50%] -translate-y-4 font-bold italic text-3xl text-border select-none">
             VS
          </div>

          {/* Boss Stats */}
          <motion.div animate={{ x: bossShake ? [-15, 15, -15, 15, 0] : 0 }} className="flex flex-col gap-2 w-[45%]">
             <div className="flex items-center justify-between text-sm uppercase tracking-wider font-bold">
               <span className="text-[#ef4444] flex items-center gap-2"><Crosshair className="w-4 h-4"/> {bossName}</span>
               <span className="text-text-muted">{currentHp} / {maxHp}</span>
             </div>
             <div className="h-4 w-full bg-accent border border-border rounded-full overflow-hidden flex justify-end">
               <motion.div 
                 className="h-full bg-gradient-to-l from-[#ef4444] to-[#b91c1c]"
                 animate={{ width: `${hpPercentage}%` }}
                 transition={{ duration: 0.5 }}
               />
             </div>
          </motion.div>
       </div>

       {/* Floating Damage Text */}
       <AnimatePresence>
         {damageText && (
            <motion.div
               initial={{ opacity: 0, y: 0, scale: 0.5 }}
               animate={{ opacity: 1, y: -40, scale: 1.2 }}
               exit={{ opacity: 0 }}
               className={cn(
                  "absolute font-black text-4xl drop-shadow-[0_0_15px_rgba(0,0,0,0.8)] z-50 pointer-events-none",
                  damageText.type === 'boss' ? "text-primary" : "text-red-500",
                  damageText.type === 'boss' ? "right-[20%] top-[30%]" : "left-[20%] top-[30%]"
               )}
            >
               -{damageText.value} ¡Daño!
            </motion.div>
         )}
       </AnimatePresence>

       {/* Battle Arena Visuals */}
       <div className="w-full aspect-video md:aspect-[21/9] bg-[#050505] border border-border rounded-2xl relative overflow-hidden shadow-[inset_0_0_100px_rgba(0,0,0,0.8)] flex items-center justify-center">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1f1025] to-transparent opacity-50 pointer-events-none"></div>

          {/* Player Avatars representation */}
          <div className="absolute bottom-4 md:bottom-8 left-8 md:left-16 flex gap-2">
             {[1,2,3,4,5].map(i => (
               <div key={i} className="w-8 h-8 md:w-12 md:h-12 bg-primary/20 border border-primary/50 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(34,211,238,0.2)]">
                  <span className="text-[10px] md:text-sm font-bold text-primary">P{i}</span>
               </div>
             ))}
          </div>

          {/* Boss representation */}
          <motion.div 
            animate={{ 
               y: [0, -10, 0], 
               scale: bossShake ? [1, 0.9, 1.1, 1] : 1,
               filter: bossShake ? ["brightness(1)", "brightness(2) hue-rotate(90deg)", "brightness(1)"] : "brightness(1)"
            }} 
            transition={{ y: { repeat: Infinity, duration: 4, ease: "easeInOut" } }}
            className="w-48 h-48 md:w-64 md:h-64 absolute right-10 md:right-24 top-10 md:top-1/2 md:-translate-y-1/2"
          >
             <div className="w-full h-full bg-[#ef4444] rounded-[40%] bg-gradient-to-br from-[#ef4444] to-[#7f1d1d] shadow-[0_0_50px_rgba(239,68,68,0.3)] border-4 border-[#b91c1c] flex items-center justify-center relative overflow-hidden">
                <div className="absolute w-20 h-2 bg-black/40 top-1/3 rounded-full"></div>
                <div className="w-16 h-16 bg-black rounded-full shadow-[inset_0_0_20px_rgba(239,68,68,0.8)] border border-[#ef4444]"></div>
             </div>
          </motion.div>
       </div>

       {/* Question panel */}
       <div className="w-full bg-surface border border-border rounded-2xl p-6 md:p-8 flex flex-col gap-6 shadow-xl relative z-20 -mt-12 mx-auto w-[90%]">
          <h3 className="text-xl md:text-2xl font-bold leading-relaxed">{currentQ.question}</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             {currentQ.options.map((option, idx) => {
               const isSelected = selectedOption === option;
               let btnClass = "border-border bg-accent hover:border-text-muted hover:bg-border/50";
               
               if (isSelected) {
                 if (isEvaluating) {
                    btnClass = "border-primary bg-primary/20 text-primary scale-[1.02] shadow-[0_0_20px_rgba(34,211,238,0.2)]";
                 }
               }
               
               // Show correct answer result after evaluation starts
               if (isEvaluating && option === currentQ.answer && isSelected) {
                  btnClass = "border-[#22c55e] bg-[#22c55e]/20 text-[#22c55e] scale-[1.02]";
               } else if (isEvaluating && isSelected && option !== currentQ.answer) {
                  btnClass = "border-red-500 bg-red-500/20 text-red-500 scale-[1.02]";
               }

               return (
                 <button 
                  key={idx}
                  disabled={isEvaluating}
                  onClick={() => handleOptionSelect(option)}
                  className={cn("p-4 rounded-xl border text-left font-medium transition-all duration-300", btnClass)}
                 >
                   {option}
                 </button>
               );
             })}
          </div>
       </div>

    </div>
  );
}
