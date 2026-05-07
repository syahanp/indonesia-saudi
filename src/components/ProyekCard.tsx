import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { MapPin, Milestone, Zap, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

interface ProyekProps {
  id?: string;
  img: string;
  title: string;
  loc: string;
  status: string;
  type: string;
  desc: string;
  progress: number;
  terkumpul: string;
  target: string;
}

export default function ProyekCard({ project }: { project: ProyekProps }) {
  const { t } = useTranslation();
  const p = project;

  // Translate status and types if possible
  const translatedStatus = p.status === 'Selesai' ? t("proyek.status_selesai") : 
                          p.status === 'Perencanaan' ? t("proyek.status_perencanaan") : 
                          t("proyek.status_berjalan");

  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="relative bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm transition-all hover:shadow-xl group flex flex-col h-full"
    >
      <Link to={`/proyek/${p.id || 'jembatan-desa-lembah-harapan'}`} className="absolute inset-0 z-10" />
      <div className="relative h-[220px] shrink-0">
        <img 
          src={p.img} 
          alt={p.title} 
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
        />
        <div className={`absolute top-4 left-4 px-3 py-1.5 rounded-full text-[11px] font-bold tracking-widest uppercase shadow-sm ${
          p.status === 'Selesai' ? 'bg-[#0f172a] text-white' : 
          p.status === 'Perencanaan' ? 'bg-[#fef3c7] text-[#b45309]' :
          'bg-primary-light text-primary-deep'
        }`}>
          {translatedStatus}
        </div>
        {/* Icon circle bottom right */}
        <div className="absolute -bottom-6 right-6 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg border border-slate-100">
          {p.type === 'jembatan' ? (
            <Milestone size={24} className="text-slate-800" strokeWidth={1.5} />
          ) : (
            <Zap size={24} className="text-slate-800" strokeWidth={1.5} />
          )}
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-1 pt-8">
        <h3 className="text-[17px] font-bold text-slate-900 mb-2 leading-tight group-hover:text-primary-deep transition-colors">
          {p.id ? t(`proyek.projects.${p.id}.title`) : p.title}
        </h3>
        <div className="flex items-center gap-1.5 text-slate-400 text-[13px] mb-4">
          <MapPin size={14} className="text-slate-400 shrink-0" />
          <span className="font-semibold text-slate-600">
            {p.id ? t(`proyek.projects.${p.id}.loc`) : p.loc}
          </span>
        </div>
        
        <p className="text-[13px] text-slate-600 mb-6 leading-relaxed font-medium flex-1">
          {p.id ? t(`proyek.projects.${p.id}.desc`) : p.desc}
        </p>

        <div className="space-y-4 pt-4 border-t border-slate-100 mt-auto">
          <div className="space-y-2">
             <div className="flex justify-between text-[11px] font-bold">
              <span className="text-slate-600">{t("proyek.labels.progress")}</span>
              <span className="text-slate-900 tracking-wider">{p.progress}%</span>
            </div>
            <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
               <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${p.progress}%` }}
                  transition={{ duration: 1.2, ease: "circOut" }}
                  className={`h-full ${p.status === 'Selesai' ? 'bg-[#0f172a]' : p.status === 'Perencanaan' ? 'bg-[#f59e0b]' : 'bg-primary-deep'}`}
               />
            </div>
          </div>

          <div className="flex justify-between items-end pt-2">
            <div className="space-y-0.5">
              <span className="text-[10px] text-slate-500 font-bold tracking-wide">{t("proyek.labels.collected")}</span>
              <p className="text-[13px] font-bold text-slate-900">{p.terkumpul}</p>
            </div>
            <div className="space-y-0.5 text-right">
              <span className="text-[10px] text-slate-500 font-bold tracking-wide">{t("proyek.labels.target")}</span>
              <p className="text-[13px] font-bold text-slate-900">{p.target}</p>
            </div>
          </div>

          <div className="pt-3 border-t border-slate-100">
            <Link to={`/proyek/${p.id || 'jembatan-desa-lembah-harapan'}`} className="relative z-20 flex items-center justify-between w-full text-[13px] font-bold text-slate-800 hover:text-primary-deep group/btn transition-colors">
              {t("proyek.labels.details")} <ArrowRight size={16} className="text-slate-400 group-hover/btn:translate-x-1 transition-transform group-hover/btn:text-primary-deep" />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
