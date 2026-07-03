import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Layers, CheckCircle2, XCircle, Play, BookOpen } from 'lucide-react';
import { cn } from '../lib/utils';

interface Concept {
  term: string;
  definition: string;
}

interface ConceptMatchingProps {
  concepts: Concept[];
  onGameEnd: () => void;
}

export default function ConceptMatching({ concepts, onGameEnd }: ConceptMatchingProps) {
  const [mode, setMode] = useState<'flashcards' | 'matching'>('flashcards');
  
  // Flashcard State
  const [currentCardIdx, setCurrentCardIdx] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  // Matching Game State
  const [shuffledTerms, setShuffledTerms] = useState<Concept[]>([]);
  const [shuffledDefs, setShuffledDefs] = useState<Concept[]>([]);
  const [selectedTerm, setSelectedTerm] = useState<string | null>(null);
  const [selectedDef, setSelectedDef] = useState<string | null>(null);
  const [matchedPairs, setMatchedPairs] = useState<Set<string>>(new Set());
  const [wrongMatch, setWrongMatch] = useState<boolean>(false);

  React.useEffect(() => {
    const terms = [...concepts].sort(() => Math.random() - 0.5);
    const defs = [...concepts].sort(() => Math.random() - 0.5);
    setShuffledTerms(terms);
    setShuffledDefs(defs);
    setMatchedPairs(new Set());
    setSelectedTerm(null);
    setSelectedDef(null);
  }, [concepts, mode]);

  React.useEffect(() => {
    if (selectedTerm && selectedDef) {
      if (selectedTerm === selectedDef) {
        setTimeout(() => {
          setMatchedPairs(prev => new Set(prev).add(selectedTerm));
          setSelectedTerm(null);
          setSelectedDef(null);
        }, 500);
      } else {
        setWrongMatch(true);
        setTimeout(() => {
          setWrongMatch(false);
          setSelectedTerm(null);
          setSelectedDef(null);
        }, 800);
      }
    }
  }, [selectedTerm, selectedDef]);

  const handleNextCard = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentCardIdx((prev) => (prev + 1) % concepts.length);
    }, 150);
  };

  const handlePrevCard = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentCardIdx((prev) => (prev - 1 + concepts.length) % concepts.length);
    }, 150);
  };

  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col items-center">
      <div className="w-full flex items-center justify-between mb-8 border-b border-border pb-6">
         <div>
            <h2 className="text-[28px] font-bold text-text-main flex items-center gap-3">
              <Layers className="w-7 h-7 text-primary" />
              Empareja Conceptos
            </h2>
            <p className="text-text-muted mt-1 text-sm">Estudia tus fichas didácticas o compite en el juego de pares.</p>
         </div>
         <div className="flex bg-surface border border-border p-1 rounded-lg">
           <button 
             onClick={() => setMode('flashcards')}
             className={cn("flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors", mode === 'flashcards' ? "bg-accent text-text-main" : "text-text-muted hover:text-text-main")}
           >
             <BookOpen className="w-4 h-4" /> Estudiar
           </button>
           <button 
             onClick={() => setMode('matching')}
             className={cn("flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors", mode === 'matching' ? "bg-accent text-text-main" : "text-text-muted hover:text-text-main")}
           >
             <Play className="w-4 h-4" /> Jugar
           </button>
         </div>
      </div>

      {mode === 'flashcards' && (
        <div className="flex flex-col items-center w-full max-w-2xl gap-8">
           <div 
             className="w-full aspect-[3/2] relative perspective-1000 cursor-pointer group"
             onClick={() => setIsFlipped(!isFlipped)}
           >
             <motion.div
               className="w-full h-full relative preserve-3d"
               animate={{ rotateX: isFlipped ? 180 : 0 }}
               transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
               style={{ transformStyle: 'preserve-3d' }}
             >
                <div className="absolute w-full h-full backface-hidden bg-surface border-2 border-border rounded-2xl flex flex-col items-center justify-center p-8 shadow-xl" style={{ backfaceVisibility: 'hidden' }}>
                  <span className="absolute top-6 left-6 text-xs uppercase tracking-widest text-[#8b5cf6] font-bold bg-[#8b5cf6]/10 px-3 py-1 rounded">Término</span>
                  <h3 className="text-4xl font-bold text-center text-text-main leading-tight">
                    {concepts[currentCardIdx].term}
                  </h3>
                  <p className="absolute bottom-6 text-sm text-text-muted">Clic para girar</p>
                </div>
                <div className="absolute w-full h-full backface-hidden bg-accent border-2 border-primary/30 rounded-2xl flex flex-col items-center justify-center p-10 shadow-xl" style={{ backfaceVisibility: 'hidden', transform: 'rotateX(180deg)' }}>
                  <span className="absolute top-6 left-6 text-xs uppercase tracking-widest text-primary font-bold bg-primary/10 px-3 py-1 rounded">Definición</span>
                  <p className="text-xl md:text-2xl text-center text-text-main leading-relaxed">
                    {concepts[currentCardIdx].definition}
                  </p>
                </div>
             </motion.div>
           </div>
           <div className="flex items-center gap-6">
              <button onClick={handlePrevCard} className="px-6 py-2 rounded-lg border border-border text-text-main hover:bg-accent transition-colors">Atrás</button>
              <span className="text-text-muted font-mono">{currentCardIdx + 1} / {concepts.length}</span>
              <button onClick={handleNextCard} className="px-6 py-2 rounded-lg border border-border text-text-main hover:bg-accent transition-colors">Siguiente</button>
           </div>
        </div>
      )}

      {mode === 'matching' && (
        <div className="w-full flex items-start gap-8 mt-4">
           {/* Terms Column */}
           <div className="w-1/2 flex flex-col gap-4">
              <h4 className="text-xs uppercase tracking-widest text-text-muted mb-2 font-semibold">Términos</h4>
              <AnimatePresence>
                {shuffledTerms.map((concept) => {
                  if (matchedPairs.has(concept.term)) return null;
                  const isSelected = selectedTerm === concept.term;
                  const isWrong = isSelected && wrongMatch;
                  return (
                    <motion.button
                      key={`term-${concept.term}`} layout initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, scale: 0.9 }}
                      onClick={() => !selectedTerm && setSelectedTerm(concept.term)}
                      className={cn("p-4 text-left rounded-xl border text-[15px] font-medium transition-all", isSelected && !isWrong ? "border-primary bg-primary/10 shadow-[0_0_15px_rgba(34,211,238,0.2)]" : isWrong ? "border-red-500 bg-red-500/10 text-red-100" : "border-border bg-surface hover:border-text-muted")}
                    >
                      {concept.term}
                    </motion.button>
                  );
                })}
              </AnimatePresence>
           </div>
           {/* Definitions Column */}
           <div className="w-1/2 flex flex-col gap-4">
              <h4 className="text-xs uppercase tracking-widest text-text-muted mb-2 font-semibold">Significados</h4>
              <AnimatePresence>
                {shuffledDefs.map((concept) => {
                  if (matchedPairs.has(concept.term)) return null;
                  const isSelected = selectedDef === concept.term;
                  const isWrong = isSelected && wrongMatch;
                  return (
                    <motion.button
                      key={`def-${concept.term}`} layout initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, scale: 0.9 }}
                      onClick={() => !selectedDef && setSelectedDef(concept.term)}
                      className={cn("p-4 text-left rounded-xl border text-[14px] leading-relaxed transition-all", isSelected && !isWrong ? "border-[#8b5cf6] bg-[#8b5cf6]/10 shadow-[0_0_15px_rgba(139,92,246,0.2)]" : isWrong ? "border-red-500 bg-red-500/10 text-red-100" : "border-border bg-surface hover:border-text-muted text-text-muted hover:text-text-main")}
                    >
                      {concept.definition}
                    </motion.button>
                  );
                })}
              </AnimatePresence>
           </div>
           {matchedPairs.size === concepts.length && concepts.length > 0 && (
             <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="absolute inset-0 bg-background/90 backdrop-blur flex flex-col items-center justify-center gap-6">
                <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center">
                   <CheckCircle2 className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-3xl font-bold text-text-main">¡Completado!</h3>
                <p className="text-text-muted">Has logrado emparejar todos los conceptos sin fallar.</p>
                <button onClick={onGameEnd} className="bg-primary text-background px-8 py-3 rounded-xl font-bold mt-4 hover:bg-primary/90 transition-colors">Volver al Menú</button>
             </motion.div>
           )}
        </div>
      )}
    </div>
  );
}
