import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, Phone, Users, CheckCircle2, XCircle, ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';
import confetti from 'canvas-confetti';

interface Question {
  question: string;
  options: string[];
  answer: string;
}

export default function Millionaire({ questions, onGameEnd }: { questions: Question[]; onGameEnd: () => void }) {
  const [currentLevel, setCurrentLevel] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isEvaluating, setIsEvaluating] = useState(false);
  const [gameState, setGameState] = useState<'playing' | 'won' | 'lost'>('playing');
  const [eliminatedOptions, setEliminatedOptions] = useState<Set<string>>(new Set());
  
  // Lifelines state
  const [used5050, setUsed5050] = useState(false);
  const [usedPhone, setUsedPhone] = useState(false);
  const [usedAudience, setUsedAudience] = useState(false);
  const [activeLifelineContent, setActiveLifelineContent] = useState<React.ReactNode | null>(null);

  const prizeLadder = [
    "$100", "$200", "$300", "$500", "$1,000",
    "$2,000", "$4,000", "$8,000", "$16,000", "$32,000",
    "$64,000", "$125,000", "$250,000", "$500,000", "$1,000,000"
  ];
  const safeHavens = [4, 9, 14]; // Index of $1000, $32,000, $1M

  // Ensure we don't go out of bounds if the AI returned fewer than 15 questions
  const qIndex = Math.min(currentLevel, questions.length - 1);
  const currentQ = questions[qIndex];

  const handleOptionSelect = (option: string) => {
    if (isEvaluating || gameState !== 'playing') return;
    
    setSelectedOption(option);
    setIsEvaluating(true);

    // Initial Suspense (Orange)
    setTimeout(() => {
      // Reveal Result
      if (option === currentQ.answer) {
        setTimeout(() => {
          if (currentLevel + 1 >= prizeLadder.length || currentLevel + 1 >= questions.length) {
            triggerVictory();
          } else {
            setCurrentLevel(prev => prev + 1);
            setSelectedOption(null);
            setIsEvaluating(false);
            setEliminatedOptions(new Set());
            setActiveLifelineContent(null);
          }
        }, 2000);
      } else {
        setTimeout(() => setGameState('lost'), 2000);
      }
    }, 1500); 
  };

  const getWinnings = () => {
    let safeIndex = -1;
    for(let i=safeHavens.length-1; i>=0; i--) {
       if (currentLevel > safeHavens[i]) {
         safeIndex = safeHavens[i];
         break;
       }
    }
    return safeIndex === -1 ? "$0" : prizeLadder[safeIndex];
  };

  const triggerVictory = () => {
    confetti({ particleCount: 300, spread: 160, origin: { y: 0.5 }, colors: ['#eab308', '#fef08a', '#ca8a04'] });
    setGameState('won');
  };

  const use5050 = () => {
    if (used5050 || isEvaluating) return;
    setUsed5050(true);
    let wrongOptions = currentQ.options.filter(o => o !== currentQ.answer);
    wrongOptions = wrongOptions.sort(() => Math.random() - 0.5).slice(0, 2);
    setEliminatedOptions(new Set(wrongOptions));
  };

  const usePhone = () => {
    if (usedPhone || isEvaluating) return;
    setUsedPhone(true);
    setActiveLifelineContent(
      <div className="p-4 bg-[#0ea5e9]/10 border border-[#0ea5e9]/30 rounded-xl flex items-start gap-4">
         <Phone className="w-6 h-6 text-[#0ea5e9] shrink-0 mt-1" />
         <div>
           <p className="font-bold text-[#0ea5e9]">Asistente IA dice:</p>
           <p className="text-sm mt-1">"Estoy bastante seguro de que la respuesta correcta es <span className="font-bold text-white">'{currentQ.answer}'</span>... ¡Confía en mí!"</p>
         </div>
      </div>
    );
  };

  const useAudience = () => {
    if (usedAudience || isEvaluating) return;
    setUsedAudience(true);
    // Simulate audience vote heavily weighted to correct answer
    const percentages = currentQ.options.map(opt => opt === currentQ.answer ? Math.floor(Math.random() * 20) + 60 : Math.floor(Math.random() * 15));
    // Normalize to 100
    const sum = percentages.reduce((a,b)=>a+b, 0);
    const finalPcts = percentages.map(p => Math.round((p/sum)*100));

    setActiveLifelineContent(
      <div className="p-4 bg-purple-500/10 border border-purple-500/30 rounded-xl">
         <h4 className="font-bold text-purple-400 mb-3 flex items-center gap-2"><Users className="w-5 h-5"/> Votación del Público</h4>
         <div className="flex items-end h-24 gap-2 justify-center">
            {currentQ.options.map((opt, i) => (
              <div key={i} className="flex flex-col items-center gap-2 w-16" title={opt}>
                 <span className="text-xs text-text-muted">{finalPcts[i]}%</span>
                 <motion.div initial={{ height: 0 }} animate={{ height: `${finalPcts[i]}%` }} className="w-8 bg-purple-500/50 rounded-t-sm border border-purple-500/80" />
                 <span className="text-[10px] font-bold uppercase w-12 truncate text-center">{['A','B','C','D'][i]}</span>
              </div>
            ))}
         </div>
      </div>
    );
  };

  if (gameState === 'won') {
    return (
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="w-full max-w-2xl mx-auto flex flex-col items-center justify-center p-12 bg-[#020617] border-[4px] border-yellow-500/50 rounded-3xl shadow-[0_0_80px_rgba(234,179,8,0.3)] text-center gap-6">
         <div className="w-32 h-32 bg-gradient-to-br from-yellow-300 to-yellow-600 rounded-full flex items-center justify-center border-4 border-yellow-200 shadow-xl">
            <span className="text-5xl font-black text-black">$</span>
         </div>
         <h2 className="text-5xl font-black bg-gradient-to-b from-yellow-200 to-yellow-500 bg-clip-text text-transparent drop-shadow-sm">¡MILLONARIO!</h2>
         <p className="text-xl text-blue-200 font-medium">Respondiste todo perfectamente.</p>
         <button onClick={onGameEnd} className="mt-8 bg-yellow-500/20 border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 text-black hover:text-black hover:shadow-[0_0_20px_rgba(234,179,8,0.6)] px-10 py-4 rounded-full font-black uppercase tracking-widest transition-all">Regresar</button>
      </motion.div>
    );
  }

  if (gameState === 'lost') {
    return (
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="w-full max-w-2xl mx-auto flex flex-col items-center justify-center p-12 bg-[#020617] border-[4px] border-red-900/50 rounded-3xl text-center gap-6">
         <div className="w-24 h-24 bg-red-900/40 rounded-full flex items-center justify-center border-2 border-red-500">
            <XCircle className="w-12 h-12 text-red-500" />
         </div>
         <h2 className="text-4xl font-black text-red-500">Juego Terminado</h2>
         <p className="text-lg text-blue-200">Respuesta equivocada. Te llevas a casa un seguro de: <strong className="text-yellow-500 text-2xl ml-2">{getWinnings()}</strong></p>
         <button onClick={onGameEnd} className="mt-6 border-2 border-surface bg-surface text-text-muted hover:text-text-main px-8 py-3 rounded-full font-bold transition-all">Volver al Panel</button>
      </motion.div>
    );
  }

  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row gap-8 items-start select-none">
      
      {/* Main Question Area (Left) */}
      <div className="w-full md:w-2/3 flex flex-col gap-6">
         
         {/* Top Info Bar */}
         <div className="flex justify-between items-center bg-[#020617] border border-blue-900/50 p-4 rounded-2xl shadow-xl">
             <div className="flex items-center gap-3">
                 <div className="w-10 h-10 bg-yellow-500/10 border border-yellow-500 rounded-full flex items-center justify-center">
                    <span className="font-bold text-yellow-500">Q{currentLevel + 1}</span>
                 </div>
                 <span className="font-bold text-lg text-blue-100">{prizeLadder[currentLevel]}</span>
             </div>
             
             {/* Lifelines */}
             <div className="flex gap-3">
                <button 
                  onClick={use5050} disabled={used5050 || isEvaluating}
                  className={cn("w-14 h-10 rounded-full flex items-center justify-center font-bold text-sm border transition-all", used5050 ? "bg-black/50 border-gray-700 text-gray-700 opacity-50" : "bg-blue-900/30 border-blue-500 text-blue-300 hover:bg-blue-500 hover:text-white")}
                >
                  50:50
                </button>
                <button 
                  onClick={usePhone} disabled={usedPhone || isEvaluating}
                  className={cn("w-14 h-10 rounded-full flex items-center justify-center border transition-all", usedPhone ? "bg-black/50 border-gray-700 text-gray-700 opacity-50" : "bg-blue-900/30 border-blue-500 text-blue-300 hover:bg-blue-500 hover:text-white")}
                >
                  <Phone className="w-5 h-5" />
                </button>
                <button 
                  onClick={useAudience} disabled={usedAudience || isEvaluating}
                  className={cn("w-14 h-10 rounded-full flex items-center justify-center border transition-all", usedAudience ? "bg-black/50 border-gray-700 text-gray-700 opacity-50" : "bg-blue-900/30 border-blue-500 text-blue-300 hover:bg-blue-500 hover:text-white")}
                >
                  <Users className="w-5 h-5" />
                </button>
             </div>
         </div>

         {/* Lifelines Expansion Area */}
         <AnimatePresence>
            {activeLifelineContent && (
               <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden">
                  {activeLifelineContent}
               </motion.div>
            )}
         </AnimatePresence>

         {/* Question Box */}
         <div className="mt-8 relative flex justify-center">
            {/* The iconic hexagonal shape mockup using border radiuses */}
            <div className="w-full bg-[#020617] border-2 border-blue-600 rounded-[50px] p-8 md:p-12 shadow-[0_0_30px_rgba(37,99,235,0.2)] flex items-center justify-center text-center min-h-[160px] relative">
               <div className="absolute w-[calc(100%+40px)] h-[2px] bg-blue-600 top-1/2 -translate-y-1/2 -z-10"></div>
               <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white leading-relaxed z-10">{currentQ.question}</h2>
            </div>
         </div>

         {/* Answers Grid */}
         <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mt-6">
            {currentQ.options.map((option, idx) => {
               const letter = ['A', 'B', 'C', 'D'][idx];
               const isEliminated = eliminatedOptions.has(option);
               const isSelected = selectedOption === option;
               
               let styleClass = "border-blue-600 bg-[#020617] hover:bg-blue-900/50 text-white";
               let letterClass = "text-yellow-500";
               
               if (isEliminated) {
                 return <div key={idx} className="h-[70px]"></div>; // Blank space
               }

               if (isSelected) {
                  if (isEvaluating) {
                     if (option === currentQ.answer && isEvaluating) {
                        // After delay, correct flashes green
                        styleClass = "border-[#22c55e] bg-[#22c55e]/20 text-white shadow-[0_0_20px_rgba(34,197,94,0.4)] transition-all duration-300";
                        letterClass = "text-[#22c55e]";
                     } else if (option !== currentQ.answer && isEvaluating) {
                         // Wrong option flashes red
                        styleClass = "border-red-500 bg-red-500/20 text-white transition-all duration-300";
                        letterClass = "text-red-500";
                     }
                  }
                  
                  // Initial Orange selection wait
                  if (isEvaluating && styleClass === "border-blue-600 bg-[#020617] hover:bg-blue-900/50 text-white") {
                      styleClass = "border-yellow-500 bg-yellow-500/20 text-white shadow-[0_0_20px_rgba(234,179,8,0.4)]";
                      letterClass = "text-yellow-500";
                  }
               } else if (isEvaluating && option === currentQ.answer) {
                  // Show the correct answer in green even if not selected
                  styleClass = "border-[#22c55e] bg-[#22c55e]/20 text-white transition-all duration-300 delay-[1500ms]"; // Wait for orange flash
                  letterClass = "text-[#22c55e] transition-all duration-300 delay-[1500ms]";
               } else if (isEvaluating) {
                  styleClass = "border-blue-900 bg-[#020617] text-gray-500 opacity-50";
                  letterClass = "text-gray-600";
               }

               return (
                  <button 
                    key={idx} 
                    disabled={isEvaluating} 
                    onClick={() => handleOptionSelect(option)}
                    className={cn(
                       "relative h-[70px] border-2 rounded-[35px] flex items-center px-6 text-left transition-colors",
                       styleClass
                    )}
                  >
                     {/* Decorative connector lines */}
                     <div className={cn("absolute -left-4 w-4 h-[2px]", styleClass.split(' ')[0].replace('border-','bg-'))}></div>
                     <div className={cn("absolute -right-4 w-4 h-[2px]", styleClass.split(' ')[0].replace('border-','bg-'))}></div>
                     
                     <span className={cn("font-bold text-xl mr-4", letterClass)}>{letter}:</span>
                     <span className="font-semibold text-sm leading-tight md:text-base line-clamp-2 md:line-clamp-3 break-words">{option}</span>
                  </button>
               );
            })}
         </div>

      </div>

      {/* Prize Ladder (Right) */}
      <div className="hidden md:flex w-1/3 flex-col items-center bg-[#020617] border border-blue-900/50 rounded-2xl py-6 relative">
         <h3 className="font-black text-yellow-500 tracking-widest uppercase mb-4 text-center">Escalera<br/>de Premios</h3>
         <div className="flex flex-col-reverse w-full px-8 gap-1">
            {prizeLadder.map((prize, idx) => {
               const isActive = idx === currentLevel;
               const isPassed = idx < currentLevel;
               const isSafe = safeHavens.includes(idx);
               
               let textClass = "text-blue-500/50";
               if (isActive) textClass = "text-black bg-yellow-500";
               else if (isPassed) textClass = "text-yellow-600";
               else if (isSafe) textClass = "text-white font-bold";

               return (
                  <div key={idx} className={cn("flex justify-between items-center px-4 py-1 rounded", isActive ? "bg-yellow-500 text-black shadow-[0_0_10px_rgba(234,179,8,0.5)] font-bold" : "")}>
                     <span className={cn("w-6 text-right font-mono text-sm", textClass)}>{idx + 1}</span>
                     <span className={cn("font-mono text-lg tracking-wider", textClass)}>{prize}</span>
                  </div>
               );
            })}
         </div>
      </div>

    </div>
  );
}
