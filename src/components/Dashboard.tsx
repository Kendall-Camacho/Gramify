import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Upload, FileText, Play, Loader2, Sparkles, Server, CopyCheck, BrainCircuit, Goal, CircleDollarSign, Search, Lock, ImageIcon, ListOrdered } from 'lucide-react';
import { cn } from '../lib/utils';
import BossRaid from './BossRaid';
import ConceptMatching from './ConceptMatching';
import TowerClimb from './TowerClimb';
import Millionaire from './Millionaire';
import SafeBox from './SafeBox';
import PixelReveal from './PixelReveal';
import ZenSort from './ZenSort';
import TheDetective from './TheDetective';
import GamePreview from './GamePreview';
import { useGameStore } from '../store/gameStore';

export default function Dashboard() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const { gameData, setGameData, activeMode, setActiveMode } = useGameStore();

  const handleDemoTrigger = async () => {
    setIsGenerating(true);
    try {
      const demoRes = await fetch('/api/demo-material');
      if (!demoRes.ok) {
         const errText = await demoRes.text();
         throw new Error(`Server Error (${demoRes.status}): ${errText.substring(0, 100)}`);
      }
      const { content } = await demoRes.json();

      const genRes = await fetch('/api/generate-game', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: content })
      });
      
      if (!genRes.ok) {
         const errText = await genRes.text();
         throw new Error(`Server Error (${genRes.status}): ${errText.substring(0, 100)}`);
      }
      const data = await genRes.json();
      if (data.error) throw new Error(data.error);

      // El servidor de Prisma ahora inserta por su cuenta
      setGameData(data.gameData || data);
      setActiveMode('menu'); // Switch to menu instead of directly to boss
    } catch (err: any) {
      console.error(err);
      alert('Error al generar: ' + err.message);
    } finally {
      setIsGenerating(false);
    }
  };

  const fileUploadHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;
    setIsGenerating(true);
    try {
      const formData = new FormData();
      formData.append('document', e.target.files[0]);
      
      const genRes = await fetch('/api/generate-game', {
        method: 'POST',
        body: formData
      });
      
      if (!genRes.ok) {
         const errText = await genRes.text();
         throw new Error(`Server Error (${genRes.status}): ${errText.substring(0, 100)}`);
      }
      const data = await genRes.json();
      if (data.error) throw new Error(data.error);
      
      setGameData(data.gameData || data);
      setActiveMode('menu');
    } catch (err: any) {
       console.error(err);
       alert('Error al subir: ' + err.message);
    } finally {
      setIsGenerating(false);
    }
  };

  // Interceptar la renderizacion de los juegos si no hemos presionado EMPEZAR
  if (activeMode !== 'upload' && activeMode !== 'menu' && gameData) {
     if (!isGameStarted) {
        return (
          <div className="w-full flex-1 flex items-center justify-center p-4">
            <GamePreview 
              activeMode={activeMode} 
              gameData={gameData} 
              onStart={() => setIsGameStarted(true)} 
              onBack={() => { setActiveMode('menu'); setIsGameStarted(false); }} 
            />
          </div>
        );
     }
  }

  if (activeMode === 'boss-raid' && gameData?.bossRaid) {
     return (
       <div className="w-full flex-1 flex items-center justify-center p-4">
         <BossRaid 
           bossName={gameData.bossRaid.bossName}
           maxHp={gameData.bossRaid.maxHp}
           questions={gameData.bossRaid.questions}
           onGameEnd={(won) => {
             alert(won ? '¡Victoria! ¡La clase derrotó al jefe!' : 'Derrota... El jefe era demasiado fuerte.');
             setActiveMode('menu'); setIsGameStarted(false);
           }}
         />
       </div>
     );
  }

  if (activeMode === 'concept-matching' && gameData?.conceptConquest) {
     return (
       <div className="w-full flex-1 flex items-start justify-center p-4 pt-12">
         <ConceptMatching 
           concepts={gameData.conceptConquest}
           onGameEnd={() => { setActiveMode('menu'); setIsGameStarted(false); }}
         />
       </div>
     );
  }

  if (activeMode === 'tower-climb' && gameData?.towerClimb) {
     return (
       <div className="w-full flex-1 flex items-start justify-center p-4 pt-12">
         <TowerClimb 
           questions={gameData.towerClimb}
           onGameEnd={() => { setActiveMode('menu'); setIsGameStarted(false); }}
         />
       </div>
     );
  }

  if (activeMode === 'millionaire' && gameData?.millionaire) {
     return (
       <div className="w-full flex-1 flex items-start justify-center p-4 pt-4 lg:pt-12">
         <Millionaire 
           questions={gameData.millionaire}
           onGameEnd={() => { setActiveMode('menu'); setIsGameStarted(false); }}
         />
       </div>
     );
  }

  if (activeMode === 'safe-box' && gameData?.safeBox) {
     return (
       <div className="w-full flex-1 flex items-start justify-center p-4 pt-4 lg:pt-12">
         <SafeBox 
           questions={gameData.safeBox}
           onGameEnd={() => { setActiveMode('menu'); setIsGameStarted(false); }}
         />
       </div>
     );
  }

  if (activeMode === 'pixel-reveal' && gameData?.pixelReveal) {
     return (
       <div className="w-full flex-1 flex items-start justify-center p-4 pt-4 lg:pt-12">
         <PixelReveal 
           questions={gameData.pixelReveal}
           onGameEnd={() => { setActiveMode('menu'); setIsGameStarted(false); }}
         />
       </div>
     );
  }

  if (activeMode === 'zen-sort' && gameData?.zenSort) {
     return (
       <div className="w-full flex-1 flex items-start justify-center p-4 pt-4 lg:pt-12">
         <ZenSort 
           items={gameData.zenSort}
           onGameEnd={() => { setActiveMode('menu'); setIsGameStarted(false); }}
         />
       </div>
     );
  }

  if (activeMode === 'detective' && gameData?.detective) {
     return (
       <div className="w-full flex-1 flex items-start justify-center p-4 pt-4 lg:pt-12">
         <TheDetective 
           data={gameData.detective}
           onGameEnd={() => { setActiveMode('menu'); setIsGameStarted(false); }}
         />
       </div>
     );
  }

  if (activeMode === 'menu' && gameData) {
     return (
       <div className="w-full max-w-5xl mx-auto p-6 md:p-12 text-text-main flex flex-col gap-10">
         <div className="flex flex-col gap-2 border-b border-border pb-8 text-center items-center">
            <h2 className="text-[32px] font-bold tracking-[-0.01em] text-secondary">
              ¡Generación Completada!
            </h2>
            <p className="text-text-muted text-sm">
              Tus módulos generados por IA están listos. Selecciona un juego para iniciar con tus alumnos.
            </p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div 
               className="bg-surface rounded-xl border border-[#8b5cf6]/30 overflow-hidden cursor-pointer group hover:bg-[#8b5cf6]/10 transition-colors"
               whileHover={{ y: -2 }}
               onClick={() => setActiveMode('boss-raid')}
            >
               <div className="p-6 flex flex-col gap-4">
                  <div className="p-3 bg-[#8b5cf6]/20 self-start rounded-xl border border-[#8b5cf6]/30">
                     <BrainCircuit className="w-6 h-6 text-[#8b5cf6]" />
                  </div>
                  <h3 className="text-xl font-bold">Batalla Final</h3>
                  <p className="text-text-muted text-xs">Juego multijugador colaborativo contra un enemigo principal.</p>
               </div>
            </motion.div>

            <motion.div 
               className="bg-surface rounded-xl border border-primary/30 overflow-hidden cursor-pointer group hover:bg-primary/10 transition-colors"
               whileHover={{ y: -2 }}
               onClick={() => setActiveMode('concept-matching')}
            >
               <div className="p-6 flex flex-col gap-4">
                  <div className="p-3 bg-primary/20 self-start rounded-xl border border-primary/30">
                     <CopyCheck className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Conceptos</h3>
                  <p className="text-text-muted text-xs">Estudia con tarjetas didácticas y pon a prueba tu retención asociando pares.</p>
               </div>
            </motion.div>

            <motion.div 
               className="bg-surface rounded-xl border border-secondary/30 overflow-hidden cursor-pointer group hover:bg-secondary/10 transition-colors"
               whileHover={{ y: -2 }}
               onClick={() => setActiveMode('tower-climb')}
            >
               <div className="p-6 flex flex-col gap-4">
                  <div className="p-3 bg-secondary/20 self-start rounded-xl border border-secondary/30">
                     <Goal className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold">Torre del Saber</h3>
                  <p className="text-text-muted text-xs">Progresión rigurosa de opciones múltiples para escalar los pisos de la torre.</p>
               </div>
            </motion.div>
            
            <motion.div 
               className="bg-surface rounded-xl border border-yellow-500/30 overflow-hidden cursor-pointer group hover:bg-yellow-500/10 transition-colors"
               whileHover={{ y: -2 }}
               onClick={() => setActiveMode('millionaire')}
            >
               <div className="p-6 flex flex-col gap-4">
                  <div className="p-3 bg-yellow-500/20 self-start rounded-xl border border-yellow-500/30">
                     <CircleDollarSign className="w-6 h-6 text-yellow-500" />
                  </div>
                  <h3 className="text-xl font-bold text-yellow-500">Millonario</h3>
                  <p className="text-text-muted text-xs">Trivia clásica de alto riesgo con comodines y escalera de premios.</p>
               </div>
            </motion.div>

            <motion.div 
               className="bg-surface rounded-xl border border-[#34d399]/30 overflow-hidden cursor-pointer group hover:bg-[#34d399]/10 transition-colors"
               whileHover={{ y: -2 }}
               onClick={() => setActiveMode('zen-sort')}
            >
               <div className="p-6 flex flex-col gap-4">
                  <div className="p-3 bg-[#34d399]/20 self-start rounded-xl border border-[#34d399]/30">
                     <ListOrdered className="w-6 h-6 text-[#34d399]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#34d399]">El Orden Zen</h3>
                  <p className="text-text-muted text-xs">Ordena pacíficamente conceptos y viñetas históricas sin presión de tiempo.</p>
               </div>
            </motion.div>

            <motion.div 
               className="bg-surface rounded-xl border border-[#ec4899]/30 overflow-hidden cursor-pointer group hover:bg-[#ec4899]/10 transition-colors"
               whileHover={{ y: -2 }}
               onClick={() => setActiveMode('pixel-reveal')}
            >
               <div className="p-6 flex flex-col gap-4">
                  <div className="p-3 bg-[#ec4899]/20 self-start rounded-xl border border-[#ec4899]/30">
                     <ImageIcon className="w-6 h-6 text-[#ec4899]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#ec4899]">Imagen Revelada</h3>
                  <p className="text-text-muted text-xs">Completar las preguntas de forma asertiva desbloquea un rompecabezas visual.</p>
               </div>
            </motion.div>

            <motion.div 
               className="bg-surface rounded-xl border border-[#818cf8]/30 overflow-hidden cursor-pointer group hover:bg-[#818cf8]/10 transition-colors"
               whileHover={{ y: -2 }}
               onClick={() => setActiveMode('detective')}
            >
               <div className="p-6 flex flex-col gap-4">
                  <div className="p-3 bg-[#818cf8]/20 self-start rounded-xl border border-[#818cf8]/30">
                     <Search className="w-6 h-6 text-[#818cf8]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#818cf8]">El Detective</h3>
                  <p className="text-text-muted text-xs">Lee una historia y descubre las mentiras sembradas por la inteligencia artificial.</p>
               </div>
            </motion.div>

            <motion.div 
               className="bg-surface rounded-xl border border-gray-400/50 overflow-hidden cursor-pointer group hover:bg-gray-400/10 transition-colors"
               whileHover={{ y: -2 }}
               onClick={() => setActiveMode('safe-box')}
            >
               <div className="p-6 flex flex-col gap-4">
                  <div className="p-3 bg-gray-400/20 self-start rounded-xl border border-gray-400/50">
                     <Lock className="w-6 h-6 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-400">La Caja Fuerte</h3>
                  <p className="text-text-muted text-xs">Resuelve acertijos lógicos y numéricos para desbloquear el código de una bóveda.</p>
               </div>
            </motion.div>

         </div>
         
         <div className="flex justify-center mt-4">
            <button 
              onClick={() => setActiveMode('upload')}
              className="text-sm text-text-muted hover:text-text-main hover:underline"
            >
              ← Volver al Panel
            </button>
         </div>
       </div>
     );
  }

  return (
    <div className="w-full max-w-5xl mx-auto p-6 md:p-12 text-text-main flex flex-col gap-10 relative">
      <AnimatePresence>
        {isGenerating && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 backdrop-blur-md"
          >
            <div className="flex flex-col items-center gap-6 text-center">
              <motion.div 
                animate={{ rotate: 360, scale: [1, 1.2, 1] }} 
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <Sparkles className="w-16 h-16 text-primary" />
              </motion.div>
              <div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                  Destilando Conocimiento...
                </h2>
                <p className="text-text-muted text-sm max-w-sm">
                  Gemini está estructurando narrativas, elaborando trampas y armando niveles para tu clase.
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex flex-col gap-2 border-b border-border pb-8">
         <h1 className="text-[32px] font-bold tracking-[-0.01em] flex items-center gap-3">
           <Sparkles className="w-8 h-8 text-secondary" />
           Panel de Control Docente
         </h1>
         <p className="text-text-muted text-sm">
           Sube los materiales de tu clase para generar juegos interactivos y módulos al instante con IA.
         </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Upload Section */}
        <motion.div 
          className="bg-surface rounded-xl border border-border p-8 flex flex-col gap-6"
          whileHover={{ y: -2 }}
          transition={{ duration: 0.2 }}
        >
           <p className="text-[11px] uppercase tracking-[0.1em] text-text-muted font-semibold">Fuentes</p>
           <div>
             <h3 className="text-[18px] font-medium mb-1">Subir Material</h3>
             <p className="text-[13px] text-text-muted mb-6">Soporta TXT, PDF, DOCX analizados mediante la API de Gemini.</p>
             <label className="cursor-pointer bg-accent hover:bg-border border border-border text-text-primary py-2 px-6 rounded-lg text-[14px] font-medium transition-colors inline-flex items-center gap-2">
                <Upload className="w-4 h-4" />
                Seleccionar Archivo
                <input type="file" className="hidden" onChange={fileUploadHandler} disabled={isGenerating} />
             </label>
           </div>
        </motion.div>

        {/* Demo Mode / AI Generation */}
        <motion.div 
          className="bg-surface rounded-xl border border-border p-8 flex flex-col gap-6"
          whileHover={{ y: -2 }}
          transition={{ duration: 0.2 }}
        >
           <p className="text-[11px] uppercase tracking-[0.1em] text-text-muted font-semibold">Inicio Rápido</p>
           <div>
             <h3 className="text-[18px] font-medium mb-1">Activar Modo Demo</h3>
             <p className="text-[13px] text-text-muted mb-6">Genera todos los mini-juegos al instante basados en "Historia de la Criptografía".</p>
             <button
               onClick={handleDemoTrigger}
               disabled={isGenerating}
               className={cn(
                 "flex items-center gap-2 py-2 px-6 rounded-lg text-[14px] font-medium transition-all",
                 isGenerating 
                  ? "bg-accent border border-border text-text-muted cursor-not-allowed" 
                  : "bg-primary/10 border border-primary text-primary hover:bg-primary/20"
               )}
             >
               {isGenerating ? (
                 <>
                   <Loader2 className="w-4 h-4 animate-spin" />
                   Generando...
                 </>
               ) : (
                 <>
                   <Play className="w-4 h-4" />
                   Iniciar Clase Demo
                 </>
               )}
             </button>
           </div>
        </motion.div>
      </div>
    </div>
  );
}
