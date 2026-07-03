import React from 'react';
import { motion } from 'motion/react';
import { Settings as SettingsIcon, Cpu, Shield, Key } from 'lucide-react';

export default function Settings() {
  return (
    <div className="w-full max-w-5xl mx-auto p-6 md:p-12 text-text-main flex flex-col gap-10">
      <div className="flex flex-col gap-2 border-b border-border pb-8">
         <h1 className="text-[32px] font-bold tracking-[-0.01em] flex items-center gap-3">
           <SettingsIcon className="w-8 h-8 text-secondary" />
           Ajustes de IA
         </h1>
         <p className="text-text-muted text-sm">
           Configura la curva de dificultad, nivel cognitivo deseado y tus credenciales API.
         </p>
      </div>

      <div className="flex flex-col gap-8">
         {/* Config Section 1 */}
         <section className="flex flex-col md:flex-row gap-8">
             <div className="w-full md:w-1/3">
                 <h3 className="font-semibold text-lg flex items-center gap-2 mb-2">
                    <Cpu className="w-5 h-5 text-primary" />
                    Mecánicas del Motor
                 </h3>
                 <p className="text-sm text-text-muted">Ajusta cómo Gramify interpreta tus documentos y el rango de edades aplicable.</p>
             </div>
             <div className="w-full md:w-2/3 bg-surface border border-border rounded-xl p-8 flex flex-col gap-6">
                 <div>
                    <label className="text-[13px] font-semibold text-text-muted uppercase tracking-wider block mb-2">Dificultad Académica</label>
                    <select defaultValue="Preparatoria / Formación (Avanzado)" className="w-full bg-accent border border-border text-text-main rounded-lg p-3 outline-none focus:border-secondary">
                       <option>Primaria (Básico)</option>
                       <option>Secundaria (Intermedio)</option>
                       <option>Preparatoria / Formación (Avanzado)</option>
                    </select>
                 </div>
                 
                 <div>
                    <label className="text-[13px] font-semibold text-text-muted uppercase tracking-wider block mb-2">Salud Base del Jefe (HP)</label>
                    <div className="flex items-center gap-4">
                       <input type="range" min="500" max="5000" defaultValue="1000" className="w-full bg-border accent-primary h-2 rounded-lg appearance-none cursor-pointer" />
                       <span className="font-mono text-sm text-secondary bg-accent px-2 py-1 border border-border rounded">1000</span>
                    </div>
                 </div>
             </div>
         </section>

         {/* Config Section 2 */}
         <section className="flex flex-col md:flex-row gap-8 pt-8 border-t border-border">
             <div className="w-full md:w-1/3">
                 <h3 className="font-semibold text-lg flex items-center gap-2 mb-2">
                    <Key className="w-5 h-5 text-secondary" />
                    Preferencias de Conexión
                 </h3>
                 <p className="text-sm text-text-muted">Estado de tus credenciales de Google Gemini.</p>
             </div>
             <div className="w-full md:w-2/3 bg-surface border border-border rounded-xl p-8 flex flex-col gap-6">
                 <div>
                    <label className="text-[13px] font-semibold text-text-muted uppercase tracking-wider block mb-2">Proveedor de IA Activo</label>
                    <div className="bg-accent border border-border p-4 rounded-lg flex items-center justify-between">
                        <span className="font-medium">Google Generative AI</span>
                        <span className="text-[11px] font-mono tracking-widest text-[#22c55e] border border-[#22c55e]/30 bg-[#22c55e]/10 px-2 py-1 rounded">CONECTADO</span>
                    </div>
                 </div>
             </div>
         </section>
      </div>
    </div>
  );
}
