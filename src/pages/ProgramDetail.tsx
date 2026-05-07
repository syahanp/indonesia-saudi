import { 
  Heart, 
  Milestone, 
  Users, 
  MapPin,
  ChevronRight,
  GraduationCap,
  HeartPulse,
  Activity,
  UsersRound,
  Building,
  ArrowRight,
  Search,
  RotateCcw,
  LayoutGrid,
  Map,
  Check,
  History,
  Zap
} from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { initialProjects } from "./Proyek";

export default function ProgramDetail() {
  const { t } = useTranslation();
  const { id } = useParams();
  
  const programKey = id?.includes('listrik') ? 'listrik' : 'jembatan';
  const programTitle = t(`programs.${programKey}.title`);
  const programIcon = programKey === 'listrik' ? <Zap size={32} className="text-primary-deep" strokeWidth={1.5} /> : <Milestone size={32} className="text-primary-deep" strokeWidth={1.5} />;
  const programSummary = t(`programs.${programKey}.desc`);

  const heroStats = programKey === 'jembatan' ? [
    { icon: <Milestone size={32} className="text-primary-deep shrink-0" strokeWidth={1.5} />, val: "12", label: t("programs.jembatan.label1") },
    { icon: <Milestone size={32} className="text-slate-400 shrink-0" strokeWidth={1.5} />, val: "4", label: t("programs.jembatan.label2"), subIcon: true },
    { icon: <Users size={32} className="text-primary-deep shrink-0" strokeWidth={1.5} />, val: "1.850+", label: t("programs.jembatan.label3") }
  ] : [
    { icon: <Zap size={32} className="text-primary-deep shrink-0" strokeWidth={1.5} />, val: "6", label: t("programs.listrik.label1") },
    { icon: <Zap size={32} className="text-slate-400 shrink-0" strokeWidth={1.5} />, val: "2", label: t("programs.listrik.label2"), subIcon: true },
    { icon: <Users size={32} className="text-primary-deep shrink-0" strokeWidth={1.5} />, val: "600+", label: t("programs.listrik.label3") }
  ];

  const mainImpactStats = programKey === 'jembatan' ? [
    { icon: <Milestone size={28} className="text-primary-deep" strokeWidth={1.5} />, val: "12", label: t("programs.jembatan.label1") },
    { icon: <Milestone size={28} className="text-slate-400" strokeWidth={1.5} />, val: "4", label: t("programs.jembatan.label2"), subIcon: true },
    { icon: <Users size={28} className="text-primary-deep" strokeWidth={1.5} />, val: "1.850+", label: t("programs.jembatan.label3") },
    { icon: <UsersRound size={28} className="text-primary-deep" strokeWidth={1.5} />, val: "350+", label: t("proyek.program_detail.family_connected") },
    { icon: <MapPin size={28} className="text-primary-deep" strokeWidth={1.5} />, val: "6", label: t("tentang_kami.stats.provinces") },
    { icon: <Building size={28} className="text-primary-deep" strokeWidth={1.5} />, val: "20+", label: t("proyek.program_detail.villages_impacted") }
  ] : [
    { icon: <Zap size={28} className="text-primary-deep" strokeWidth={1.5} />, val: "6", label: t("programs.listrik.label1") },
    { icon: <Zap size={28} className="text-slate-400" strokeWidth={1.5} />, val: "2", label: t("programs.listrik.label2"), subIcon: true },
    { icon: <Users size={28} className="text-primary-deep" strokeWidth={1.5} />, val: "600+", label: t("programs.listrik.label3") },
    { icon: <UsersRound size={28} className="text-primary-deep" strokeWidth={1.5} />, val: "120+", label: t("proyek.program_detail.family_connected") },
    { icon: <MapPin size={28} className="text-primary-deep" strokeWidth={1.5} />, val: "3", label: t("tentang_kami.stats.provinces") },
    { icon: <Building size={28} className="text-primary-deep" strokeWidth={1.5} />, val: "8+", label: t("proyek.program_detail.villages_impacted") }
  ];

  const projects = initialProjects.filter(p => p.type === programKey);
  const genericImg = "https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?auto=format&fit=crop&q=80&w=2070";

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <div className="text-[13px] text-slate-500 mb-10 font-medium">
          <Link to="/" className="hover:text-primary-deep transition-colors">{t("nav.beranda")}</Link>
          <span className="mx-2">&gt;</span>
          <span className="hover:text-primary-deep transition-colors cursor-pointer">{t("proyek.label_program")}</span>
          <span className="mx-2">&gt;</span>
          <span className="text-slate-800">{t("programs.jembatan.title")}</span>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative pt-6 pb-32 lg:pb-48 mb-20">
        <div className="absolute inset-0 z-0">
           <img src={programKey === 'listrik' ? "/listrik.png" : "/jembatan-gantung.png"} alt="Hero" className="w-full h-full object-cover object-right" />
           <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl">
            <p className="text-sm font-bold text-slate-600 tracking-widest uppercase mb-4">{t("proyek.program_detail.label")}</p>
            <h1 className="text-5xl lg:text-6xl font-bold text-primary-deep leading-[1.1] mb-6 font-display">
              {programTitle}
            </h1>
            <p className="text-[18px] text-slate-800 leading-relaxed font-semibold mb-6 max-w-xl">
              {programSummary}
            </p>
            <p className="text-[14px] text-slate-600 leading-relaxed font-medium max-w-lg mb-12">
               {t("proyek.program_detail.hero_desc")}
            </p>
            
            {/* Stats row */}
            <div className="flex flex-wrap gap-8 lg:gap-12 items-center">
              {heroStats.map((s, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="relative">
                    {s.icon}
                    {s.subIcon && (
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-primary-deep rounded-full flex items-center justify-center">
                        <History size={10} className="text-white" />
                      </div>
                    )}
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-slate-900 leading-none">{s.val}</p>
                    <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mt-1">{s.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Tentang Program & Manfaat */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="bg-white rounded-[2rem] p-10 border border-slate-100 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-6 font-display">{t("proyek.program_detail.about_title")}</h3>
            <div className="space-y-6 text-[14px] text-slate-600 leading-relaxed font-medium">
              <p>
                {t("proyek.program_detail.about_p1")}
              </p>
              <p>
                {t("proyek.program_detail.about_p2")}
              </p>
            </div>
          </div>

          <div className="bg-[#f8f9fa] rounded-[2rem] p-10 border border-slate-100 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-6 font-display">{t("proyek.program_detail.main_benefits")}</h3>
            <ul className="space-y-4">
              <li className="flex gap-4 items-start">
                <GraduationCap size={20} className="text-primary-deep shrink-0 mt-0.5" />
                <span className="text-[14px] text-slate-700 font-medium">{t("proyek.program_detail.benefit1")}</span>
              </li>
              <li className="flex gap-4 items-start">
                <HeartPulse size={20} className="text-primary-deep shrink-0 mt-0.5" />
                <span className="text-[14px] text-slate-700 font-medium">{t("proyek.program_detail.benefit2")}</span>
              </li>
              <li className="flex gap-4 items-start">
                <Activity size={20} className="text-primary-deep shrink-0 mt-0.5" />
                <span className="text-[14px] text-slate-700 font-medium">{t("proyek.program_detail.benefit3")}</span>
              </li>
              <li className="flex gap-4 items-start">
                <UsersRound size={20} className="text-primary-deep shrink-0 mt-0.5" />
                <span className="text-[14px] text-slate-700 font-medium">{t("proyek.program_detail.benefit4")}</span>
              </li>
              <li className="flex gap-4 items-start">
                <Building size={20} className="text-primary-deep shrink-0 mt-0.5" />
                <span className="text-[14px] text-slate-700 font-medium">{t("proyek.program_detail.benefit5")}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Dampak Program Banner */}
        <div className="bg-white rounded-[2rem] p-10 border border-slate-100 shadow-sm">
           <h3 className="text-lg font-bold text-slate-900 mb-8 font-display">{t("proyek.program_detail.program_impact")}</h3>
           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 divide-x divide-slate-100">
              {mainImpactStats.map((s, idx) => (
                <div key={idx} className={`flex flex-col gap-3 ${idx !== 0 ? 'pl-8' : ''}`}>
                  <div className="relative w-max">
                    {s.icon}
                    {s.subIcon && (
                      <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-primary-deep rounded-full flex items-center justify-center">
                        <History size={8} className="text-white" />
                      </div>
                    )}
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-slate-900 leading-none">{s.val}</p>
                    <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mt-1.5 leading-tight">
                      {s.label.split(' ').map((word, i, arr) => (
                        <span key={i}>{word}{i < arr.length - 1 && <br />}</span>
                      ))}
                    </p>
                  </div>
                </div>
              ))}
           </div>
        </div>

        {/* Projects Listing */}
        <div className="pt-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 border-b border-slate-200 pb-6">
            <div>
              <h2 className="text-[26px] font-bold text-slate-900 mb-2 font-display">{t("proyek.program_detail.projects_in_program", { title: programTitle })}</h2>
              <p className="text-slate-500 text-sm font-medium">{t("proyek.program_detail.projects_subtitle", { title: programTitle })}</p>
            </div>
            
            <div className="flex items-center gap-4 mt-6 md:mt-0">
              <span className="text-xs font-bold text-slate-500">{t("proyek.program_detail.view_label")}</span>
              <div className="flex bg-[#f1f5f9] rounded-lg p-1 border border-slate-200">
                <button className="flex items-center gap-2 px-3 py-1.5 bg-white shadow-sm rounded text-xs font-bold text-slate-800">
                  <LayoutGrid size={14} /> {t("proyek.program_detail.view_grid")}
                </button>
                <button className="flex items-center gap-2 px-3 py-1.5 rounded text-xs font-bold text-slate-500 hover:text-slate-800">
                  <Map size={14} /> {t("proyek.program_detail.view_map")}
                </button>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-[280px_1fr] gap-8 items-start">
            {/* Filters Sidebar */}
            <div className="bg-white border text-sm border-slate-200 rounded-2xl p-6 shadow-sm sticky top-28">
              <h3 className="font-bold text-slate-900 text-base mb-6">{t("proyek.filter_title")}</h3>
              
              <div className="mb-6">
                <p className="font-bold text-[11px] text-slate-500 uppercase tracking-widest mb-4">{t("proyek.label_status")}</p>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <div className="w-4 h-4 rounded bg-primary-deep flex items-center justify-center">
                      <Check size={12} className="text-white" />
                    </div>
                    <span className="font-semibold text-slate-800 text-[13px]">{t("proyek.all_statuses")}</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <div className="w-4 h-4 rounded border border-slate-300 group-hover:border-primary-deep transition-colors bg-white"></div>
                    <div className="w-2 h-2 rounded-full bg-[#f59e0b]"></div>
                    <span className="font-semibold text-slate-600 text-[13px]">{t("proyek.status_perencanaan")}</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <div className="w-4 h-4 rounded border border-slate-300 group-hover:border-primary-deep transition-colors bg-white"></div>
                    <div className="w-2 h-2 rounded-full bg-[#22c55e]"></div>
                    <span className="font-semibold text-slate-600 text-[13px]">{t("proyek.status_berjalan")}</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <div className="w-4 h-4 rounded border border-slate-300 group-hover:border-primary-deep transition-colors bg-white"></div>
                    <div className="w-2 h-2 rounded-full bg-[#0f172a]"></div>
                    <span className="font-semibold text-slate-600 text-[13px]">{t("proyek.status_selesai")}</span>
                  </label>
                </div>
              </div>

              <div className="mb-6">
                <p className="font-bold text-[11px] text-slate-500 uppercase tracking-widest mb-4">{t("proyek.label_province")}</p>
                <select className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-[13px] font-semibold text-slate-700 bg-[#f8f9fa] focus:outline-none focus:border-primary-deep focus:ring-1 focus:ring-primary-deep">
                  <option>{t("proyek.all_provinces")}</option>
                  <option>Sulawesi Tengah</option>
                  <option>Nusa Tenggara Timur</option>
                  <option>Kalimantan Barat</option>
                </select>
              </div>

              <div className="mb-8">
                <p className="font-bold text-[11px] text-slate-500 uppercase tracking-widest mb-4">{t("proyek.label_search")}</p>
                <div className="relative">
                  <input type="text" placeholder={t("proyek.search_placeholder")} className="w-full border border-slate-200 rounded-lg pl-3 pr-9 py-2.5 text-[13px] font-semibold text-slate-700 bg-[#f8f9fa] focus:outline-none focus:border-primary-deep focus:ring-1 focus:ring-primary-deep" />
                  <Search size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" />
                </div>
              </div>

              <button className="w-full flex items-center justify-center gap-2 border border-slate-200 rounded-lg py-2.5 text-[12px] font-bold text-slate-600 hover:bg-slate-50 transition-colors">
                <RotateCcw size={14} /> {t("proyek.reset_filter")}
              </button>
            </div>

            {/* Grid */}
            <div className="space-y-10">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((p, idx) => (
                  <motion.div 
                    key={idx}
                    whileHover={{ y: -5 }}
                    className="relative bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm transition-all hover:shadow-xl group flex flex-col h-full"
                  >
                    <Link to="/proyek/jembatan-desa-lembah-harapan" className="absolute inset-0 z-10" />
                    <div className="relative h-[200px] shrink-0">
                      <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                      <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase shadow-sm ${
                        p.status === 'Selesai' ? 'bg-primary-light text-primary-deep' : 
                        p.status === 'Perencanaan' ? 'bg-[#fef3c7] text-[#b45309]' :
                        'bg-primary-light text-primary-deep'
                      }`}>
                        {p.status === 'Selesai' ? t("proyek.status_selesai") : p.status === 'Perencanaan' ? t("proyek.status_perencanaan") : t("proyek.status_berjalan")}
                      </div>
                    </div>
                    
                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="text-[15px] font-bold text-slate-900 mb-2 leading-tight group-hover:text-primary-deep transition-colors">{p.title}</h3>
                      <div className="flex items-center gap-1.5 text-slate-400 text-[12px] mb-4">
                        <MapPin size={14} className="text-slate-400 shrink-0" />
                        <span className="font-semibold text-slate-500">{p.loc}</span>
                      </div>
                      
                      <p className="text-[13px] text-slate-500 mb-6 leading-relaxed font-medium flex-1">
                        {p.desc}
                      </p>

                      <div className="space-y-4 pt-4 border-t border-slate-100 mt-auto">
                        <div className="space-y-2">
                          <div className="flex justify-between text-[11px] font-bold">
                            <span className="text-slate-500">{t("proyek.labels.collected")}</span>
                            <span className="text-slate-500">{t("proyek.labels.target")}</span>
                          </div>
                          <div className="flex justify-between text-[13px] font-bold text-slate-900 mb-2">
                             <span>{p.terkumpul}</span>
                             <span>{p.target}</span>
                          </div>
                          <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                            <motion.div 
                              initial={{ width: 0 }}
                              whileInView={{ width: `${p.progress}%` }}
                              transition={{ duration: 1.2, ease: "circOut" }}
                              className={`h-full ${p.status === 'Selesai' ? 'bg-primary-deep' : p.status === 'Perencanaan' ? 'bg-[#f59e0b]' : 'bg-primary-deep'}`}
                            />
                          </div>
                          <div className="flex justify-end text-[11px] font-bold text-slate-900 tracking-wider">
                            {p.progress}%
                          </div>
                        </div>

                        <Link to={`/proyek/${p.id}`} className="relative z-20 flex items-center gap-2 text-[13px] font-bold text-slate-800 hover:text-primary-deep group/btn transition-colors pt-2">
                          {t("proyek.labels.details")} <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="flex justify-center">
                <button className="flex items-center gap-2 px-6 py-3 border border-slate-200 rounded-full text-sm font-bold text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-all bg-white shadow-sm">
                  {t("proyek.program_detail.load_more_projects")} <ChevronRight size={16} className="rotate-90" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="bg-[#f8f9fa] rounded-[2rem] border border-slate-200 p-8 lg:p-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm border border-slate-100 shrink-0">
               <Heart size={32} className="text-primary-deep" strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{t("proyek.program_detail.support_banner_title", { title: programTitle })}</h3>
              <p className="text-[13px] text-slate-600 font-medium">{t("proyek.program_detail.support_banner_desc", { title: programTitle })}</p>
            </div>
          </div>
          <div className="flex gap-4 shrink-0 w-full md:w-auto">
            <button className="flex-1 md:flex-none bg-[#e11d48] text-white px-6 py-3.5 rounded-full text-sm font-bold flex justify-center items-center gap-2 hover:opacity-90 transition-all shadow-md hover:shadow-lg">
              <Heart size={16} /> {t("nav.donasi_sekarang")}
            </button>
            <button className="flex-1 md:flex-none bg-white text-primary-deep border border-slate-200 px-6 py-3.5 rounded-full text-sm font-bold flex justify-center items-center gap-2 hover:border-primary-deep hover:bg-slate-50 transition-all shadow-sm">
              {t("proyek.program_detail.how_to_donate")}
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}
