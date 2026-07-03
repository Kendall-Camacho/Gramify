import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, Folder, FileText, Plus, X, Gamepad2, Settings2, Trash2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ValidationEditor from './ValidationEditor';
import { useGameStore } from '../store/gameStore';

export interface QuestionBank {
  id: number;
  title: string;
  description: string;
  category: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  questions?: any[];
}

export default function Library() {
  const navigate = useNavigate();
  const { setGameData, setActiveMode } = useGameStore();

  const [selectedDoc, setSelectedDoc] = useState<QuestionBank | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [questionBanks, setQuestionBanks] = useState<QuestionBank[]>([]);

  const fetchBanks = async () => {
    try {
      const res = await fetch('/api/banks');
      const data = await res.json();
      setQuestionBanks(data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchBanks();
  }, [isEditing]);

  const handlePlayGame = () => {
    if (!selectedDoc || !selectedDoc.questions) return;
    
    // Reconstruir el formato de gameData que espera el Dashboard
    const reconstructedData: any = {};
    selectedDoc.questions.forEach(q => {
       reconstructedData[q.gameMode] = typeof q.data === 'string' ? JSON.parse(q.data) : q.data;
    });

    setGameData(reconstructedData);
    setActiveMode('menu'); // Load the selection menu for this bank
    navigate('/'); // Back to dashboard
  };

  if (isEditing && selectedDoc) {
     return <ValidationEditor bank={selectedDoc} onClose={() => { setIsEditing(false); setSelectedDoc(null); }} />;
  }

  return (
    <div className="w-full max-w-5xl mx-auto p-6 md:p-12 text-text-main flex flex-col gap-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-border pb-8">
         <div className="flex flex-col gap-2">
             <h1 className="text-[32px] font-bold tracking-[-0.01em] flex items-center gap-3">
               <BookOpen className="w-8 h-8 text-secondary" />
               Biblioteca de Materiales
             </h1>
             <p className="text-text-muted text-sm">
               Administra todos tus documentos didácticos y los módulos generados para clase.
             </p>
         </div>
         <button className="bg-primary/10 border border-primary text-primary hover:bg-primary/20 flex items-center gap-2 py-2 px-6 rounded-lg text-[14px] font-medium transition-all">
            <Plus className="w-4 h-4" />
            Añadir Documento
         </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
         {questionBanks.map((bank) => (
           <motion.div 
             key={bank.id}
             className="bg-surface rounded-xl border border-border p-6 flex flex-col gap-4 relative"
             whileHover={{ y: -2 }}
             transition={{ duration: 0.2 }}
           >
             <div className="flex items-start justify-between">
               <div className="p-3 bg-accent rounded-lg border border-border">
                  <Folder className="w-6 h-6 text-text-muted" />
               </div>
               <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-text-muted bg-border px-2 py-1 rounded">
                 {bank.status === 'draft' ? 'Borrador' : 'Aprobado'}
               </span>
             </div>
             <div>
               <h3 className="font-semibold text-[16px] leading-tight mb-2">{bank.title}</h3>
               <p className="text-text-muted text-xs">Categoría: {bank.category}</p>
             </div>
             
             <div className="mt-auto pt-4 border-t border-border flex items-center justify-between">
                <span className="text-[11px] font-medium uppercase tracking-wider text-primary">
                  Juegos Extraídos
                </span>
                <span 
                  className="text-secondary text-sm cursor-pointer hover:underline font-bold"
                  onClick={() => setSelectedDoc(bank)}
                >
                  Abrir Juegos
                </span>
             </div>
           </motion.div>
         ))}
      </div>

      <AnimatePresence>
        {selectedDoc && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-[#0a0a0c]/80 backdrop-blur-sm"
              onClick={() => setSelectedDoc(null)}
            />
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 10 }}
              className="relative w-full max-w-lg bg-surface border border-border rounded-2xl shadow-2xl overflow-hidden flex flex-col"
            >
              <div className="p-6 border-b border-border flex justify-between items-start">
                <div>
                   <div className="flex items-center gap-3 mb-2">
                     <span className={`text-[10px] font-mono font-bold uppercase tracking-widest px-2 py-1 rounded ${selectedDoc.status === 'draft' ? 'bg-yellow-500/10 text-yellow-500' : 'bg-green-500/10 text-green-500'}`}>
                       {selectedDoc.status === 'draft' ? 'Borrador / Sin Validar' : 'Aprobado'}
                     </span>
                     <span className="text-text-muted text-xs">{new Date(selectedDoc.createdAt).toLocaleDateString()}</span>
                   </div>
                   <h2 className="text-2xl font-bold">{selectedDoc.title}</h2>
                   <p className="text-text-muted mt-2 text-sm">{selectedDoc.description}</p>
                </div>
                <button 
                  onClick={() => setSelectedDoc(null)}
                  className="p-2 text-text-muted hover:text-text-main hover:bg-border rounded-lg transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 flex flex-col gap-6">
                  <div className="flex flex-col gap-3">
                    <h3 className="font-semibold text-sm text-text-muted uppercase tracking-wider">Acciones</h3>
                    
                    <button 
                       onClick={() => setIsEditing(true)}
                       className="w-full flex items-center justify-between p-4 rounded-xl border border-[#8b5cf6]/30 bg-[#8b5cf6]/10 hover:bg-[#8b5cf6]/20 transition-all cursor-pointer group"
                    >
                       <div className="flex items-center gap-3">
                         <Settings2 className="w-5 h-5 text-secondary group-hover:rotate-45 transition-transform" />
                         <span className="font-medium">Validación Humana</span>
                       </div>
                       <span className="text-xs bg-[#8b5cf6]/20 text-primary px-2 py-1 rounded border border-[#8b5cf6]/30">
                         {selectedDoc.status === 'draft' ? 'Requerida' : 'Editar'}
                       </span>
                    </button>

                    <button 
                       onClick={handlePlayGame}
                       className="w-full flex items-center justify-between p-4 rounded-xl border border-primary/30 bg-primary/10 hover:bg-primary/20 transition-all cursor-pointer"
                    >
                       <div className="flex items-center gap-3">
                         <Gamepad2 className="w-5 h-5 text-primary" />
                         <span className="font-medium text-text-main">Modo Proyector (Empezar a Jugar)</span>
                       </div>
                    </button>
                  </div>
                
                <div className="pt-6 border-t border-border flex justify-between">
                   <button 
                     onClick={async () => {
                       if (confirm('¿Seguro que deseas eliminar este banco completo?')) {
                         await fetch(`/api/banks/${selectedDoc.id}`, { method: 'DELETE' });
                         setSelectedDoc(null);
                         fetchBanks();
                       }
                     }}
                     className="flex items-center gap-2 text-sm text-red-500 hover:text-red-400 transition-colors"
                   >
                     <Trash2 className="w-4 h-4" /> Eliminar Banco
                   </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
