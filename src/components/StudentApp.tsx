import React, { useState, useEffect } from 'react';
import { io, Socket } from 'socket.io-client';
import { motion, AnimatePresence } from 'framer-motion';
import { BrainCircuit, CopyCheck, Goal, Target, TextSearch, KeyRound } from 'lucide-react';
import TowerClimb from './TowerClimb';
import Millionaire from './Millionaire';
import SafeBox from './SafeBox';
import PixelReveal from './PixelReveal';
import ZenSort from './ZenSort';
import TheDetective from './TheDetective';

let socket: Socket | null = null;

export default function StudentApp() {
  const [pin, setPin] = useState('');
  const [name, setName] = useState('');
  const [status, setStatus] = useState<'login' | 'waiting' | 'playing' | 'game_over'>('login');
  const [gameData, setGameData] = useState<any>(null);
  const [bossHp, setBossHp] = useState(0);
  const [bossMaxHp, setBossMaxHp] = useState(0);
  const [completedGames, setCompletedGames] = useState<Record<string, boolean>>({});
  const [activeMode, setActiveMode] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    socket = io();

    socket.on('joined_room', (data) => {
      setStatus('waiting');
      setErrorMsg('');
    });

    socket.on('error_join', (msg) => {
      setErrorMsg(msg);
    });

    socket.on('game_started', (data) => {
      setGameData(data.gameData);
      setBossMaxHp(data.bossMaxHp);
      setBossHp(data.bossHp);
      setStatus('playing');
    });

    socket.on('boss_updated', (data) => {
      setBossHp(data.bossHp);
    });

    socket.on('game_over', (data) => {
      setStatus('game_over');
    });

    socket.on('host_disconnected', () => {
      setStatus('login');
      setErrorMsg('El profesor ha desconectado la sala.');
      setCompletedGames({});
    });

    return () => {
      socket?.disconnect();
    };
  }, []);

  const handleJoin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!pin || !name) return;
    socket?.emit('join_room', { pin, name });
  };

  const handleGameEnd = (gameId: string, score: number) => {
    setCompletedGames(prev => ({ ...prev, [gameId]: true }));
    setActiveMode(null);
    socket?.emit('player_damage', { pin, damage: score });
  };

  if (status === 'login') {
    return (
      <div className="flex-1 flex flex-col items-center justify-center p-6 w-full max-w-md mx-auto">
        <div className="bg-surface border border-border p-8 rounded-2xl w-full flex flex-col gap-6">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-[#a855f7]">Unirse a la Clase</h1>
            <p className="text-text-muted text-sm mt-1">Ingresa el PIN proporcionado por tu profesor</p>
          </div>
          <form onSubmit={handleJoin} className="flex flex-col gap-4">
            {errorMsg && <div className="p-3 bg-red-500/20 border border-red-500/30 text-red-400 text-sm rounded-lg text-center">{errorMsg}</div>}
            <input 
              type="text" 
              placeholder="PIN de Juego" 
              value={pin}
              onChange={e => setPin(e.target.value)}
              className="w-full bg-background border border-border rounded-lg px-4 py-3 text-center text-2xl font-mono tracking-widest outline-none focus:border-[#a855f7] transition-colors"
              required
            />
            <input 
              type="text" 
              placeholder="Tu Nombre" 
              value={name}
              onChange={e => setName(e.target.value)}
              className="w-full bg-background border border-border rounded-lg px-4 py-3 text-center outline-none focus:border-[#a855f7] transition-colors"
              required
            />
            <button type="submit" className="w-full bg-[#a855f7] hover:bg-[#9333ea] text-white font-bold py-3 rounded-lg transition-colors mt-2">
              Entrar al Juego
            </button>
          </form>
        </div>
      </div>
    );
  }

  if (status === 'waiting') {
    return (
      <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
        <motion.div animate={{ scale: [1, 1.05, 1] }} transition={{ repeat: Infinity, duration: 2 }}>
          <BrainCircuit className="w-16 h-16 text-[#a855f7] mb-6 mx-auto opacity-80" />
        </motion.div>
        <h2 className="text-3xl font-bold text-white mb-2">¡Estás dentro, {name}!</h2>
        <p className="text-text-muted">Espera a que el profesor inicie la batalla...</p>
      </div>
    );
  }

  if (status === 'game_over') {
     return (
       <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
         <h1 className="text-4xl font-extrabold text-green-400 mb-4">¡Jefe Derrotado!</h1>
         <p className="text-text-muted">Han logrado superar la prueba. Mira la pantalla del profesor para ver los resultados.</p>
       </div>
     );
  }

  if (activeMode && gameData) {
     return (
       <div className="w-full h-full flex flex-col overflow-auto bg-background">
         <div className="p-4 border-b border-border bg-surface flex justify-between items-center">
            <button onClick={() => setActiveMode(null)} className="text-text-muted hover:text-white">Volver a Misiones</button>
            <div className="text-sm font-bold text-[#a855f7]">HP del Jefe: {bossHp} / {bossMaxHp}</div>
         </div>
         {activeMode === 'tower-climb' && gameData.towerClimb && (
           <TowerClimb questions={gameData.towerClimb} onGameEnd={(correct) => handleGameEnd('tower-climb', correct * 50)} />
         )}
         {activeMode === 'millionaire' && gameData.millionaire && (
           <Millionaire questions={gameData.millionaire} onGameEnd={(correct) => handleGameEnd('millionaire', correct * 30)} />
         )}
         {activeMode === 'safe-box' && gameData.safeBox && (
           <SafeBox questions={gameData.safeBox} onGameEnd={(correct) => handleGameEnd('safe-box', correct * 40)} />
         )}
         {activeMode === 'pixel-reveal' && gameData.pixelReveal && (
           <PixelReveal questions={gameData.pixelReveal} onGameEnd={(correct) => handleGameEnd('pixel-reveal', correct * 40)} />
         )}
         {activeMode === 'zen-sort' && gameData.zenSort && (
           <ZenSort items={gameData.zenSort} onGameEnd={() => handleGameEnd('zen-sort', 100)} />
         )}
         {activeMode === 'detective' && gameData.detective && (
           <TheDetective data={gameData.detective} onGameEnd={(correct) => handleGameEnd('detective', correct * 50)} />
         )}
       </div>
     );
  }

  return (
    <div className="w-full flex-1 p-6 md:p-12 overflow-auto text-text-main flex flex-col gap-8 max-w-4xl mx-auto">
      <div className="flex flex-col gap-2 bg-surface p-6 rounded-2xl border border-[#a855f7]/30 text-center items-center">
        <h2 className="text-2xl font-bold text-white">Batalla en Curso</h2>
        <div className="w-full max-w-md h-4 bg-background rounded-full mt-4 overflow-hidden border border-border">
          <div className="h-full bg-gradient-to-r from-red-600 to-[#a855f7] transition-all duration-500" style={{ width: `${Math.max(0, (bossHp / bossMaxHp) * 100)}%` }}></div>
        </div>
        <div className="text-text-muted mt-2 text-sm font-mono">{bossHp} / {bossMaxHp} HP restantes</div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[
          { id: 'tower-climb', icon: Goal, title: 'Torre del Saber', color: 'text-secondary', bg: 'bg-secondary/20', border: 'border-secondary/30' },
          { id: 'millionaire', icon: Target, title: 'Millonario', color: 'text-primary', bg: 'bg-primary/20', border: 'border-primary/30' },
          { id: 'safe-box', icon: KeyRound, title: 'La Caja Fuerte', color: 'text-amber-400', bg: 'bg-amber-400/20', border: 'border-amber-400/30' },
          { id: 'pixel-reveal', icon: BrainCircuit, title: 'Descubre la Imagen', color: 'text-pink-400', bg: 'bg-pink-400/20', border: 'border-pink-400/30' },
          { id: 'zen-sort', icon: CopyCheck, title: 'Orden Zen', color: 'text-emerald-400', bg: 'bg-emerald-400/20', border: 'border-emerald-400/30' },
          { id: 'detective', icon: TextSearch, title: 'El Detective', color: 'text-blue-400', bg: 'bg-blue-400/20', border: 'border-blue-400/30' },
        ].map(mod => {
          const isDone = completedGames[mod.id];
          return (
            <div 
              key={mod.id}
              onClick={() => !isDone && setActiveMode(mod.id)}
              className={`p-5 rounded-xl border ${isDone ? 'border-border bg-background opacity-50 cursor-not-allowed' : `border-border bg-surface cursor-pointer hover:border-[#a855f7]/50 hover:bg-[#a855f7]/10` } transition-all`}
            >
              <div className={`p-3 w-max rounded-xl border ${isDone ? 'bg-background border-border text-text-muted' : `${mod.bg} ${mod.border} ${mod.color}` } mb-3`}>
                <mod.icon className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg">{mod.title}</h3>
              {isDone && <p className="text-xs text-green-400 mt-1 uppercase font-bold tracking-wider">¡Completado!</p>}
            </div>
          )
        })}
      </div>
    </div>
  );
}
