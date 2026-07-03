import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ListOrdered, ArrowUp, ArrowDown, CheckCircle2 } from 'lucide-react';
import { cn } from '../lib/utils';

export default function ZenSort({ items, onGameEnd }: { items: string[]; onGameEnd: () => void }) {
  const [list, setList] = useState<string[]>([]);
  const [isWon, setIsWon] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Shuffle on mount safely
    setList([...items].sort(() => Math.random() - 0.5));
  }, [items]);

  const moveUp = (index: number) => {
    if (index === 0) return;
    const newList = [...list];
    const temp = newList[index - 1];
    newList[index - 1] = newList[index];
    newList[index] = temp;
    setList(newList);
    setError(false);
  };

  const moveDown = (index: number) => {
    if (index === list.length - 1) return;
    const newList = [...list];
    const temp = newList[index + 1];
    newList[index + 1] = newList[index];
    newList[index] = temp;
    setList(newList);
    setError(false);
  };

  const checkOrder = () => {
    if (list.join() === items.join()) {
      setIsWon(true);
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  if (isWon) {
    return (
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center p-12 bg-[#022c22] border border-[#34d399]/30 rounded-2xl text-center gap-6 shadow-2xl max-w-xl mx-auto w-full">
         <div className="w-24 h-24 bg-[#34d399]/20 rounded-full flex items-center justify-center border border-[#34d399]/40">
            <CheckCircle2 className="w-12 h-12 text-[#34d399]" />
         </div>
         <h2 className="text-4xl font-bold text-[#ecfdf5]">Armonía Perfecta</h2>
         <p className="text-[#a7f3d0]">Has restaurado el flujo narrativo correctamente. La paz ha regresado.</p>
         <button onClick={onGameEnd} className="mt-4 bg-[#34d399]/20 border border-[#34d399] text-[#34d399] hover:bg-[#34d399]/30 px-8 py-3 rounded-xl font-bold transition-colors">
           Regresar al Menú
         </button>
      </motion.div>
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto flex flex-col items-center">
      <div className="w-full flex flex-col items-center mb-8 gap-2">
         <ListOrdered className="w-10 h-10 text-[#34d399] mb-2" />
         <h2 className="text-[32px] font-bold text-text-main">El Orden Zen</h2>
         <p className="text-text-muted text-sm text-center">Respira profundo y coloca estos eventos en el orden cronológico o lógico correcto. No hay temporizador.</p>
      </div>

      <div className="w-full flex flex-col gap-3">
         <AnimatePresence>
            {list.map((item, idx) => (
              <motion.div 
                layout 
                key={item}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full bg-surface border border-border px-6 py-4 rounded-xl flex items-center justify-between gap-4 shadow-sm"
              >
                 <span className="text-lg font-medium text-text-main">{item}</span>
                 <div className="flex bg-accent rounded-lg border border-border">
                    <button onClick={() => moveUp(idx)} disabled={idx === 0} className="p-2 hover:bg-border disabled:opacity-30 rounded-l-lg transition-colors text-text-muted hover:text-text-main">
                      <ArrowUp className="w-5 h-5" />
                    </button>
                    <div className="w-[1px] bg-border" />
                    <button onClick={() => moveDown(idx)} disabled={idx === list.length - 1} className="p-2 hover:bg-border disabled:opacity-30 rounded-r-lg transition-colors text-text-muted hover:text-text-main">
                      <ArrowDown className="w-5 h-5" />
                    </button>
                 </div>
              </motion.div>
            ))}
         </AnimatePresence>
      </div>

      <button 
        onClick={checkOrder}
        className={cn(
          "mt-8 w-full max-w-xs py-4 rounded-xl font-bold text-lg transition-all duration-300",
          error ? "bg-red-500/20 text-red-500 border border-red-500" : "bg-[#34d399]/10 text-[#34d399] border border-[#34d399] hover:bg-[#34d399]/20"
        )}
      >
        {error ? "Orden Incorrecto" : "Verificar Armonía"}
      </button>
    </div>
  );
}
