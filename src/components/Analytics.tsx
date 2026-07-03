import React from 'react';
import { motion } from 'motion/react';
import { LineChart, BarChart2, TrendingUp, Users } from 'lucide-react';

export default function Analytics() {
  return (
    <div className="w-full max-w-5xl mx-auto p-6 md:p-12 text-text-main flex flex-col gap-10">
      <div className="flex flex-col gap-2 border-b border-border pb-8">
         <h1 className="text-[32px] font-bold tracking-[-0.01em] flex items-center gap-3">
           <LineChart className="w-8 h-8 text-secondary" />
           Analíticas de Estudiantes
         </h1>
         <p className="text-text-muted text-sm">
           Monitorea el nivel participativo, porcentaje de aciertos y la retención del conocimiento a lo largo del tiempo.
         </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div 
          className="bg-surface rounded-xl border border-border p-6 flex flex-col gap-4"
          whileHover={{ y: -2 }}
        >
          <div className="flex items-center gap-3 text-text-muted">
             <Users className="w-5 h-5" />
             <span className="text-[12px] uppercase tracking-wider font-semibold">Total Participantes</span>
          </div>
          <div className="text-3xl font-bold">1,248</div>
          <p className="text-xs text-primary">+12% comparado a ayer</p>
        </motion.div>

        <motion.div 
          className="bg-surface rounded-xl border border-border p-6 flex flex-col gap-4"
          whileHover={{ y: -2 }}
        >
          <div className="flex items-center gap-3 text-text-muted">
             <TrendingUp className="w-5 h-5" />
             <span className="text-[12px] uppercase tracking-wider font-semibold">Precisión Promedio</span>
          </div>
          <div className="text-3xl font-bold">78.4%</div>
          <p className="text-xs text-secondary">Mejora notable del grupo B</p>
        </motion.div>

        <motion.div 
          className="bg-surface rounded-xl border border-border p-6 flex flex-col gap-4"
          whileHover={{ y: -2 }}
        >
          <div className="flex items-center gap-3 text-text-muted">
             <BarChart2 className="w-5 h-5" />
             <span className="text-[12px] uppercase tracking-wider font-semibold">Éxito vs Jefes</span>
          </div>
          <div className="text-3xl font-bold">64.2%</div>
          <p className="text-xs text-text-muted">La dificultad puede ser excesiva</p>
        </motion.div>
      </div>
      
      <div className="bg-surface border border-border rounded-xl p-8 flex items-center justify-center min-h-[300px]">
         <p className="text-text-muted font-mono text-sm">Las gráficas estadisticas aparecerán detalladas en esta zona.</p>
      </div>
    </div>
  );
}
