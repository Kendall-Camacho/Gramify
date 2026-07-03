import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { X, Check, Gamepad2, Settings2, ShieldCheck, AlertCircle, Save, Trash2 } from 'lucide-react';

interface Question {
  id: number;
  bankId: number;
  gameMode: string;
  difficulty: number;
  data: string | any; 
}

interface QuestionBank {
  id: number;
  title: string;
  category: string;
  status: string;
  questions?: Question[];
}

interface Props {
  bank: QuestionBank;
  onClose: () => void;
}

export default function ValidationEditor({ bank, onClose }: Props) {
  // Prisma envía `q.data` como string JSON, necesitamos parsearlo para trabajar
  const parsedQuestions = bank.questions?.map(q => ({
     ...q,
     data: typeof q.data === 'string' ? JSON.parse(q.data) : q.data
  })) || [];

  const [questions, setQuestions] = useState<Question[]>(parsedQuestions);
  const [editingQuestion, setEditingQuestion] = useState<Question | null>(null);
  const [formData, setFormData] = useState<any>(null);

  const handleApproveBank = async () => {
    await fetch(`/api/banks/${bank.id}/approve`, { method: 'PUT' });
    onClose();
  };

  const handleEditClick = (q: Question) => {
    setEditingQuestion(q);
    setFormData(JSON.parse(JSON.stringify(q.data))); // Deep copy for editing
  };

  const handleSaveEdit = async () => {
    if (editingQuestion) {
      await fetch(`/api/questions/${editingQuestion.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data: formData, difficulty: editingQuestion.difficulty })
      });
      
      setQuestions(questions.map(q => q.id === editingQuestion.id ? { ...editingQuestion, data: formData } : q));
      setEditingQuestion(null);
    }
  };

  const handleDelete = async (id: number) => {
    if (confirm('¿Seguro que deseas eliminar esta pregunta?')) {
       await fetch(`/api/questions/${id}`, { method: 'DELETE' });
       setQuestions(questions.filter(q => q.id !== id));
    }
  };

  const renderDataPreview = (q: Question) => {
     if (q.data.question) return <p className="font-medium">{q.data.question}</p>;
     if (q.data.term) return <p><span className="font-bold">{q.data.term}:</span> {q.data.definition}</p>;
     if (q.data.bossName) return <p className="font-bold text-red-500">Jefe: {q.data.bossName}</p>;
     if (q.data.story) return <p className="line-clamp-2 italic text-sm">{q.data.story}</p>;
     if (typeof q.data === 'string') return <p>{q.data}</p>;
     return <p className="text-text-muted italic">Datos complejos</p>;
  };

  const renderEditForm = () => {
     if (!formData) return null;

     return (
       <div className="flex flex-col gap-4">
         {Object.keys(formData).map((key) => {
           if (Array.isArray(formData[key])) {
             return (
               <div key={key}>
                 <label className="text-xs font-bold text-text-muted uppercase mb-1 block">{key}</label>
                 {formData[key].map((item: any, i: number) => (
                    <input 
                      key={i}
                      type="text" 
                      value={item}
                      onChange={(e) => {
                        const newArray = [...formData[key]];
                        newArray[i] = e.target.value;
                        setFormData({ ...formData, [key]: newArray });
                      }}
                      className="w-full bg-background border border-border rounded-md px-3 py-2 text-sm mb-2 focus:border-secondary outline-none"
                    />
                 ))}
               </div>
             )
           }
           if (typeof formData[key] === 'string' || typeof formData[key] === 'number') {
             return (
               <div key={key}>
                 <label className="text-xs font-bold text-text-muted uppercase mb-1 block">{key}</label>
                 {typeof formData[key] === 'string' ? (
                   <textarea
                     value={formData[key]}
                     onChange={(e) => setFormData({ ...formData, [key]: e.target.value })}
                     className="w-full bg-background border border-border rounded-md px-3 py-2 text-sm focus:border-secondary outline-none"
                     rows={3}
                   />
                 ) : (
                   <input
                     type="number"
                     value={formData[key]}
                     onChange={(e) => setFormData({ ...formData, [key]: Number(e.target.value) })}
                     className="w-full bg-background border border-border rounded-md px-3 py-2 text-sm focus:border-secondary outline-none"
                   />
                 )}
               </div>
             )
           }
           return null;
         })}
       </div>
     );
  };

  return (
    <div className="fixed inset-0 z-[100] flex bg-background/95 backdrop-blur-md">
      {/* Sidebar / List */}
      <div className="w-1/3 border-r border-border bg-surface flex flex-col h-full">
         <div className="p-6 border-b border-border flex flex-col gap-2">
            <button onClick={onClose} className="flex items-center gap-2 text-text-muted hover:text-text-main text-sm w-fit mb-4">
              <X className="w-4 h-4" /> Volver a Biblioteca
            </button>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-secondary" />
              <h2 className="text-xl font-bold">Validación Humana</h2>
            </div>
            <p className="text-xs text-text-muted">Revisa las preguntas extraídas por la IA. Elimina o ajusta lo que consideres incorrecto.</p>
         </div>
         
         <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3">
            {questions?.map((q) => (
              <div 
                key={q.id} 
                className={`p-4 rounded-xl border transition-all cursor-pointer group ${editingQuestion?.id === q.id ? 'border-primary bg-primary/10' : 'border-border bg-background hover:border-text-muted'}`}
                onClick={() => handleEditClick(q)}
              >
                <div className="flex justify-between items-start mb-2">
                  <span className="text-[10px] uppercase font-bold text-primary tracking-widest">{q.gameMode}</span>
                  <button 
                    onClick={(e) => { e.stopPropagation(); handleDelete(q.id!); }}
                    className="text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
                {renderDataPreview(q)}
              </div>
            ))}
         </div>
         <div className="p-4 border-t border-border bg-background">
            <button 
              onClick={handleApproveBank}
              className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 transition-all shadow-lg shadow-green-500/20"
            >
              <Check className="w-5 h-5" /> 
              Aprobar Banco Completamente
            </button>
         </div>
      </div>

      {/* Editor Panel */}
      <div className="flex-1 flex flex-col h-full">
         {editingQuestion ? (
            <div className="flex-1 overflow-y-auto p-12">
               <div className="max-w-2xl mx-auto bg-surface border border-border rounded-2xl p-8 flex flex-col gap-6 shadow-2xl">
                 <div className="flex items-center justify-between border-b border-border pb-4">
                   <h3 className="text-lg font-bold flex items-center gap-2">
                     <Settings2 className="w-5 h-5 text-text-muted" /> 
                     Editar Contenido de: <span className="text-primary">{editingQuestion.gameMode}</span>
                   </h3>
                 </div>
                 
                 <div className="flex items-center gap-4 border-b border-border pb-6">
                    <label className="text-sm font-medium text-text-muted">Dificultad (1-5):</label>
                    <input 
                      type="range" min="1" max="5" 
                      value={editingQuestion.difficulty}
                      onChange={(e) => setEditingQuestion({...editingQuestion, difficulty: parseInt(e.target.value)})}
                      className="w-32 accent-primary"
                    />
                    <span className="font-bold text-primary">{editingQuestion.difficulty}</span>
                 </div>

                 {renderEditForm()}

                 <div className="pt-6 mt-4 border-t border-border flex justify-end gap-3">
                   <button 
                     onClick={() => setEditingQuestion(null)}
                     className="px-6 py-2 border border-border rounded-lg text-sm text-text-muted hover:text-text-main hover:bg-accent transition-colors"
                   >
                     Cancelar
                   </button>
                   <button 
                     onClick={handleSaveEdit}
                     className="px-6 py-2 bg-primary hover:bg-primary/90 text-white rounded-lg text-sm font-medium flex items-center gap-2 transition-colors"
                   >
                     <Save className="w-4 h-4" /> Guardar Cambios
                   </button>
                 </div>
               </div>
            </div>
         ) : (
            <div className="flex-1 flex flex-col items-center justify-center gap-4 text-text-muted">
               <AlertCircle className="w-12 h-12 opacity-20" />
               <p>Selecciona una pregunta de la izquierda para validarla o editarla.</p>
            </div>
         )}
      </div>
    </div>
  );
}
