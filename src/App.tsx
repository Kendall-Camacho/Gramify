import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import { LogOut } from 'lucide-react';
import Dashboard from './components/Dashboard';
import Analytics from './components/Analytics';
import Library from './components/Library';
import Settings from './components/Settings';
import { useGameStore } from './store/gameStore';

export default function App() {
  const { activeMode, setActiveMode } = useGameStore();

  const getNavClass = ({ isActive }: { isActive: boolean }) => 
    `text-[14px] font-medium transition-colors decoration-transparent pb-5 -mb-[21px] border-b-2 ${
      isActive 
        ? 'text-text-main border-secondary' 
        : 'text-text-muted border-transparent hover:text-text-main hover:border-text-muted'
    }`;

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-background text-text-main font-sans">
        <header className="h-16 border-b border-border bg-[#0a0a0c]/80 backdrop-blur flex items-center px-8 sticky top-0 z-50 justify-between">
          <div className="font-extrabold text-[20px] tracking-[-0.02em] text-secondary flex items-center gap-2 uppercase">
            GRAMIFY <span className="text-text-main font-normal lowercase tracking-normal opacity-80">/ profesor</span>
          </div>
          <div className="flex gap-6 h-full items-center">
            <NavLink to="/" className={getNavClass}>Panel de Juego</NavLink>
            <NavLink to="/analytics" className={getNavClass}>Analíticas</NavLink>
            <NavLink to="/library" className={getNavClass}>Biblioteca</NavLink>
            <NavLink to="/settings" className={getNavClass}>Ajustes de IA</NavLink>
          </div>
          <div className="w-8 h-8 rounded-full bg-accent border border-border"></div>
        </header>
        
        <main className="flex-1 flex flex-col items-center bg-border gap-[1px]">
          <div className="w-full flex-1 bg-background flex flex-col items-center">
            <Routes>
               <Route path="/" element={<Dashboard />} />
               <Route path="/analytics" element={<Analytics />} />
               <Route path="/library" element={<Library />} />
               <Route path="/settings" element={<Settings />} />
            </Routes>
          </div>
        </main>
      </div>

      {/* Global Exit Game Button */}
      {(activeMode !== 'upload' && activeMode !== 'menu') && (
        <button
          onClick={() => setActiveMode('menu')}
          className="fixed bottom-6 right-6 z-[100] bg-red-600 hover:bg-red-500 text-white p-4 rounded-full shadow-2xl flex items-center justify-center gap-2 font-bold cursor-pointer transition-transform hover:scale-110 active:scale-95 group"
        >
          <LogOut className="w-6 h-6" />
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out px-0 group-hover:px-2">
            Abortar Juego
          </span>
        </button>
      )}
    </BrowserRouter>
  );
}
