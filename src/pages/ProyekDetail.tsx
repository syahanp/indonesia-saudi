import { 
  MapPin, 
  Image as ImageIcon, 
  CalendarDays, 
  Target, 
  Barcode, 
  FileText, 
  Activity, 
  History, 
  LayoutList, 
  ImagePlus, 
  HeartHandshake, 
  Users, 
  GraduationCap, 
  Clock, 
  TrendingUp, 
  Heart, 
  Share2,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  ListTodo
} from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { initialProjects } from "./Proyek";

export default function ProyekDetail() {
  const { t, i18n } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const genericImg = "https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?auto=format&fit=crop&q=80&w=2070";

  const project = initialProjects.find(p => p.id === id) || initialProjects[0];
  const p = project;

  const title = p.id ? t(`proyek.projects.${p.id}.title`) : p.title;
  const loc = p.id ? t(`proyek.projects.${p.id}.loc`) : p.loc;
  const desc = p.id ? t(`proyek.projects.${p.id}.desc`) : p.desc;

  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <div className="relative pt-10 pb-16 lg:pb-16 mb-12">
        <div className="absolute inset-0 z-0">
           <img src="/jembatan-gantung.png" alt="Hero" className="w-full h-full object-cover object-center" />
           <div className={`absolute inset-0 ${i18n.language === 'ar' ? 'bg-gradient-to-l' : 'bg-gradient-to-r'} from-white via-white/95 lg:via-white/80 to-transparent`}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-[12px] text-slate-600 font-bold mb-8 flex items-center gap-2">
            <Link to="/" className="hover:text-primary-deep transition-colors">{t("nav.beranda")}</Link>
            <span className="opacity-50">&gt;</span>
            <Link to="/proyek" className="hover:text-primary-deep transition-colors">{t("nav.proyek")}</Link>
            <span className="opacity-50">&gt;</span>
            <span className="text-slate-900">{title}</span>
          </div>

          <div className="max-w-2xl">
            <span className="inline-block px-4 py-2 rounded-xl text-[13px] font-bold text-primary-deep mb-6 bg-primary-light">
                {p.status === 'Selesai' ? t("proyek.status_selesai") : p.status === 'Perencanaan' ? t("proyek.status_perencanaan") : t("proyek.status_berjalan")}
            </span>
            <h1 className="text-4xl lg:text-6xl font-bold text-primary-deep leading-[1.1] mb-6 font-display">
              {title}
            </h1>
            <div className="flex items-center gap-2 text-slate-800 mb-6 font-semibold text-[16px]">
              <MapPin size={20} className="text-slate-800 shrink-0" />
              <span>{loc}</span>
            </div>
            <p className="text-[15px] lg:text-[16px] text-slate-800 leading-relaxed font-semibold max-w-xl">
              {desc}
            </p>
          </div>

          <div className="flex flex-col lg:flex-row justify-between items-end gap-6 mt-16 w-full">
            <div className="bg-white/95 backdrop-blur-md rounded-2xl border border-white p-5 lg:px-8 shadow-sm flex flex-wrap gap-x-10 gap-y-6 items-center">
               <div className="flex items-center gap-3">
                 <div className="text-primary-deep shrink-0">
                    <ListTodo size={22} strokeWidth={2} />
                 </div>
                 <div>
                   <p className="text-[10px] font-bold text-slate-500 mb-0.5">{t("proyek.detail.category")}</p>
                   <p className="text-[13px] font-bold text-slate-900">{p.type === 'jembatan' ? t("programs.jembatan.title") : t("programs.listrik.title")}</p>
                 </div>
               </div>
               
               <div className="w-px h-8 bg-slate-200 hidden md:block shrink-0"></div>
               
               <div className="flex items-center gap-3">
                 <div className="text-primary-deep shrink-0">
                    <CalendarDays size={22} strokeWidth={2} />
                 </div>
                 <div>
                   <p className="text-[10px] font-bold text-slate-500 mb-0.5">{t("proyek.detail.start_date")}</p>
                   <p className="text-[13px] font-bold text-slate-900">{p.status === 'Selesai' ? '2024' : '2025'}</p>
                 </div>
               </div>

               <div className="w-px h-8 bg-slate-200 hidden md:block shrink-0"></div>

               <div className="flex items-center gap-3">
                 <div className="text-primary-deep shrink-0">
                    <Target size={22} strokeWidth={2} />
                 </div>
                 <div>
                   <p className="text-[10px] font-bold text-slate-500 mb-0.5">{t("proyek.detail.end_date")}</p>
                   <p className="text-[13px] font-bold text-slate-900">{p.status === 'Selesai' ? '2024' : '2025'}</p>
                 </div>
               </div>

               <div className="w-px h-8 bg-slate-200 hidden lg:block shrink-0"></div>

               <div className="flex items-center gap-3">
                 <div className="text-primary-deep shrink-0">
                    <Barcode size={22} strokeWidth={2} />
                 </div>
                 <div>
                   <p className="text-[10px] font-bold text-slate-500 mb-0.5">{t("proyek.detail.project_id")}</p>
                   <p className="text-[13px] font-bold text-slate-900">{p.id}</p>
                 </div>
               </div>
            </div>
            
            <button className="bg-black/90 hover:bg-black backdrop-blur-md text-white px-5 py-3 rounded-xl text-[13px] font-bold flex items-center gap-2 transition-colors shadow-xl border border-white/10 shrink-0">
                <ImageIcon size={16} /> {t("proyek.detail.view_all_photos")}
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          
          {/* Main Content Area */}
          <div className="flex-[2] w-full">
            <div className="space-y-16">
              {/* Tentang Proyek */}
              <section>
                <h3 className="text-xl font-bold flex items-center gap-3 text-slate-900 mb-6 font-display">
                  <FileText size={24} className="text-slate-400" />
                  {t("proyek.detail.about_title")}
                </h3>
                <div className="text-[15px] text-slate-600 font-medium leading-relaxed bg-[#f8f9fa] p-8 rounded-3xl border border-slate-100">
                  {desc}
                </div>
              </section>

              {/* Progress Proyek */}
              <section>
                <h3 className="text-xl font-bold flex items-center gap-3 text-slate-900 mb-8 font-display">
                  <Activity size={24} className="text-slate-400" />
                  {t("proyek.detail.progress_title")}
                </h3>
                
                {/* Stepper */}
                <div className="mb-12 relative px-4 lg:px-8">
                  <div className="absolute top-6 left-8 right-8 h-1 bg-slate-100 -z-10 rounded-full"></div>
                  <div className="absolute top-6 left-8 right-1/2 h-1 bg-primary-deep -z-10 rounded-full"></div>
                  
                  <div className="flex justify-between relative text-center">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-primary-deep text-white flex items-center justify-center border-4 border-white shadow-sm mb-3">
                        <CheckCircle2 size={20} />
                      </div>
                      <p className="text-[12px] font-bold text-slate-900">
                        {t("proyek.program_detail.planning_step")}
                      </p>
                      <p className="text-[11px] font-medium text-slate-500">Des 2024</p>
                      <p className="text-[10px] font-bold text-primary-deep mt-1 tracking-wider uppercase">{t("proyek.status_selesai")}</p>
                    </div>

                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-primary-deep text-white flex items-center justify-center border-4 border-white shadow-sm mb-3">
                        <CheckCircle2 size={20} />
                      </div>
                      <p className="text-[12px] font-bold text-slate-900">
                        {t("proyek.program_detail.funding_step")}
                      </p>
                      <p className="text-[11px] font-medium text-slate-500">Jan 2025</p>
                      <p className="text-[10px] font-bold text-primary-deep mt-1 tracking-wider uppercase">{t("proyek.status_selesai")}</p>
                    </div>

                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-primary-deep text-white flex items-center justify-center border-4 border-primary-border shadow-md mb-3 ring-4 ring-primary-deep/10">
                        <History size={20} />
                      </div>
                      <p className="text-[12px] font-bold text-slate-900">
                        {t("proyek.program_detail.construction_step")}
                      </p>
                      <p className="text-[11px] font-medium text-slate-500">Feb 2025 - Apr 2025</p>
                      <p className="text-[10px] font-bold text-[#f59e0b] mt-1 tracking-wider uppercase">{t("proyek.status_berjalan")}</p>
                    </div>

                    <div className="flex flex-col items-center opacity-40">
                      <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center border-4 border-white shadow-sm mb-3">
                        <ListTodo size={20} />
                      </div>
                      <p className="text-[12px] font-bold text-slate-900">
                        {t("proyek.program_detail.finishing_step")}
                      </p>
                      <p className="text-[11px] font-medium text-slate-500">Mei 2025</p>
                      <p className="text-[10px] font-bold text-slate-400 mt-1 tracking-wider uppercase">{t("proyek.detail.status_waiting")}</p>
                    </div>

                    <div className="flex flex-col items-center opacity-40">
                      <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center border-4 border-white shadow-sm mb-3">
                         <Target size={20} />
                      </div>
                      <p className="text-[12px] font-bold text-slate-900">
                        {t("proyek.program_detail.completed_step")}
                      </p>
                      <p className="text-[11px] font-medium text-slate-500">Mei 2025</p>
                      <p className="text-[10px] font-bold text-slate-400 mt-1 tracking-wider uppercase">{t("proyek.detail.status_waiting")}</p>
                    </div>
                  </div>
                </div>

                {/* Overall bar */}
                <div className="flex justify-between text-[13px] font-bold text-slate-700 mb-3 items-end">
                  <span>{t("proyek.detail.overall_progress")}</span>
                  <span className="text-2xl font-bold text-slate-900 tracking-wider">{p.progress}%</span>
                </div>
                <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden shadow-inner">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${p.progress}%` }}
                    transition={{ duration: 1.2, ease: "circOut" }}
                    className="h-full bg-primary-deep"
                  />
                </div>
              </section>

              {/* Pembaruan Proyek */}
              <section>
                <div className="flex justify-between items-end mb-6">
                  <h3 className="text-xl font-bold flex items-center gap-3 text-slate-900 font-display">
                    <ImagePlus size={24} className="text-slate-400" />
                    {t("proyek.detail.updates_title")}
                  </h3>
                   <button className="text-[12px] font-bold text-slate-500 hover:text-primary-deep flex items-center gap-1 transition-colors">
                      {t("proyek.detail.view_all_updates")} <ArrowRight size={14} />
                   </button>
                </div>
                <p className="text-[13px] font-medium text-slate-500 mb-6">{t("proyek.detail.updates_subtitle")}</p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative">
                  {[
                    { d: "20 Apr 2025", p: "Pembangunan", t: "Pemasangan kabel utama jembatan hampir selesai." },
                    { d: "5 Apr 2025", p: "Pembangunan", t: "Pemasangan lantai kayu sepanjang 120 meter." },
                    { d: "18 Mar 2025", p: "Pondasi", t: "Pembuatan pondasi sisi utara telah selesai." },
                    { d: "28 Feb 2025", p: "Struktur", t: "Pemasangan tiang penyangga utama selesai." }
                  ].map((item, idx) => (
                    <div key={idx} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm group hover:shadow-md transition-shadow">
                      <div className="h-32 bg-slate-100 relative shrink-0">
                        <img src={genericImg} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        <div className="absolute top-2 left-2 bg-black/60 backdrop-blur text-white text-[10px] font-bold px-2 py-1 rounded shadow-sm">
                          {item.d}
                        </div>
                      </div>
                      <div className="p-4 flex flex-col justify-between h-auto">
                        <p className="text-[12px] font-semibold text-slate-800 leading-snug mb-4">{item.t}</p>
                        <span className="text-[10px] font-bold tracking-widest text-primary-deep uppercase bg-primary-light px-2 py-1 rounded w-max">
                          {item.p}
                        </span>
                      </div>
                    </div>
                  ))}

                  <button className="absolute -right-5 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg border border-slate-100 text-slate-600 hover:text-slate-900 z-10 hover:scale-105 transition-transform">
                     <ArrowRight size={20} />
                  </button>
                </div>
              </section>

              {/* Dampak yang Diharapkan */}
              <section>
                <h3 className="text-xl font-bold flex items-center gap-3 text-slate-900 mb-4 font-display">
                  <Target size={24} className="text-slate-400" />
                  {t("proyek.detail.expected_impact")}
                </h3>
                <p className="text-[13px] font-medium text-slate-500 mb-6">{t("proyek.detail.impact_subtitle")}</p>
                
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-[#f8f9fa] border border-slate-100 p-5 rounded-2xl flex items-start gap-4">
                    <Users size={24} className="text-primary-deep shrink-0" strokeWidth={1.5} />
                    <div>
                      <p className="text-[18px] font-bold text-slate-900 leading-none mb-1">350+</p>
                      <p className="text-[12px] font-bold text-slate-700 leading-tight mb-1">
                        {t("proyek.detail.impact_items.beneficiaries.title")}
                      </p>
                      <p className="text-[10px] text-slate-500 leading-tight">
                        {t("proyek.detail.impact_items.beneficiaries.desc")}
                      </p>
                    </div>
                  </div>
                  <div className="bg-[#f8f9fa] border border-slate-100 p-5 rounded-2xl flex items-start gap-4">
                    <GraduationCap size={24} className="text-primary-deep shrink-0" strokeWidth={1.5} />
                    <div>
                      <p className="text-[18px] font-bold text-slate-900 leading-none mb-1">120</p>
                      <p className="text-[12px] font-bold text-slate-700 leading-tight mb-1">
                        {t("proyek.detail.impact_items.students.title")}
                      </p>
                      <p className="text-[10px] text-slate-500 leading-tight">
                        {t("proyek.detail.impact_items.students.desc")}
                      </p>
                    </div>
                  </div>
                  <div className="bg-[#f8f9fa] border border-slate-100 p-5 rounded-2xl flex items-start gap-4">
                    <Clock size={24} className="text-primary-deep shrink-0" strokeWidth={1.5} />
                    <div>
                      <p className="text-[18px] font-bold text-slate-900 leading-none mb-1">2 Jam</p>
                      <p className="text-[12px] font-bold text-slate-700 leading-tight mb-1">
                        {t("proyek.detail.impact_items.time.title")}
                      </p>
                      <p className="text-[10px] text-slate-500 leading-tight">
                        {t("proyek.detail.impact_items.time.desc")}
                      </p>
                    </div>
                  </div>
                  <div className="bg-[#f8f9fa] border border-slate-100 p-5 rounded-2xl flex items-start gap-4">
                    <TrendingUp size={24} className="text-primary-deep shrink-0" strokeWidth={1.5} />
                    <div>
                      <p className="text-[12px] font-bold text-slate-700 leading-tight mb-1">
                        {t("proyek.detail.impact_items.economy.title")}
                      </p>
                      <p className="text-[10px] text-slate-500 leading-tight">
                        {t("proyek.detail.impact_items.economy.desc")}
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Didukung oleh */}
            </div>
          </div>

          {/* Right Sticky Column */}
          <div className="flex-1 w-full lg:max-w-[400px]">
            <div className="sticky top-28 space-y-6">
              
              {/* Box Pendanaan */}
              <div className="bg-[#fcfdfd] border border-slate-200 rounded-[2rem] p-8 shadow-sm">
                <h3 className="text-[17px] font-bold text-slate-900 mb-6 font-display border-b border-slate-100 pb-4">{t("proyek.detail.funding_summary")}</h3>
                
                <div className="space-y-6">
                  <div>
                    <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">{t("proyek.detail.funds_needed")}</p>
                    <p className="text-3xl font-bold text-slate-900">{p.target.replace('SAR', 'AED')}</p>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-end mb-2">
                       <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">{t("proyek.detail.funds_collected")}</p>
                       <p className="text-[14px] font-bold text-slate-900">({p.progress}%)</p>
                    </div>
                    <p className="text-2xl font-bold text-slate-900 mb-3">{p.terkumpul.replace('SAR', 'AED')}</p>
                    <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden shadow-inner">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${p.progress}%` }}
                        transition={{ duration: 1.5, ease: "circOut" }}
                        className="h-full bg-primary-deep"
                      />
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100">
                    <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-1">{t("proyek.detail.remaining_funds")}</p>
                    <p className="text-[16px] font-bold text-slate-900">AED 84.000</p>
                  </div>

                  <div className="pt-6 border-t border-slate-100">
                    <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-4">{t("proyek.detail.funds_usage")}</p>
                    <ul className="space-y-3">
                      <li className="flex justify-between items-center text-[13px]">
                        <span className="text-slate-600 font-medium">
                          {t("proyek.detail.funds_usage_items.construction")}
                        </span>
                        <span className="font-bold text-slate-900">78%</span>
                      </li>
                      <li className="flex justify-between items-center text-[13px]">
                        <span className="text-slate-600 font-medium">
                          {t("proyek.detail.funds_usage_items.logistics")}
                        </span>
                        <span className="font-bold text-slate-900">12%</span>
                      </li>
                      <li className="flex justify-between items-center text-[13px]">
                        <span className="text-slate-600 font-medium">
                          {t("proyek.detail.funds_usage_items.labor")}
                        </span>
                        <span className="font-bold text-slate-900">7%</span>
                      </li>
                      <li className="flex justify-between items-center text-[13px]">
                        <span className="text-slate-600 font-medium">
                          {t("proyek.detail.funds_usage_items.admin")}
                        </span>
                        <span className="font-bold text-slate-900">3%</span>
                      </li>
                    </ul>
                  </div>

                  <div className="pt-6">
                    <div className="bg-primary-light border border-primary-border rounded-xl p-4 flex gap-3 text-primary-deep">
                      <ShieldCheck size={20} className="shrink-0 mt-0.5" />
                      <p className="text-[12px] font-semibold leading-relaxed">
                        {t("proyek.detail.trust_badge")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Call to action Sticky Box */}
              <div className="bg-white border border-slate-200 rounded-[2rem] p-8 shadow-sm">
                <h3 className="text-[17px] font-bold text-slate-900 mb-3 font-display">{t("proyek.detail.support_title")}</h3>
                <p className="text-[13px] font-medium text-slate-500 mb-6 leading-relaxed">
                  {t("proyek.detail.support_desc")}
                </p>
                
                <div className="space-y-3">
                  <Link to="/donasi" className="w-full bg-primary-deep text-white px-6 py-4 rounded-xl text-[14px] font-bold flex justify-center items-center gap-2 hover:bg-primary-dark transition-all shadow-md hover:shadow-lg">
                    <Heart size={16} fill="currentColor" /> {t("nav.donasi_sekarang")}
                  </Link>
                  <button className="w-full bg-white text-slate-700 border border-slate-200 px-6 py-4 rounded-xl text-[14px] font-bold flex justify-center items-center gap-2 hover:bg-slate-50 transition-all shadow-sm">
                    <Share2 size={16} /> {t("proyek.detail.share_project")}
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* FULL WIDTH SECTIONS BEOLOW COLUMNS */}
        <div className="mt-16 space-y-6">
          <section className="bg-white border text-sm border-slate-200 rounded-[2rem] p-8 lg:p-10 shadow-sm relative overflow-hidden">
             <div className="flex flex-col md:flex-row md:justify-between items-start md:items-end mb-8 relative z-10">
               <div>
                 <h3 className="text-[18px] font-bold text-slate-900 mb-2 font-display">{t("proyek.detail.donors_support")}</h3>
                 <p className="text-[13px] font-medium text-slate-500">{t("proyek.detail.donors_thanks")}</p>
               </div>
                <button className="text-[12px] font-bold text-slate-500 hover:text-primary-deep flex items-center gap-1 transition-colors mt-4 md:mt-0">
                  {t("proyek.detail.view_all_donors")} <ArrowRight size={14} />
               </button>
             </div>
             
             <div className="grid grid-cols-2 md:grid-cols-5 gap-6 relative z-10">
                <div className="bg-white border border-slate-100 rounded-xl p-4 flex items-center justify-center gap-3 shadow-sm hover:-translate-y-1 transition-transform">
                   <div className="w-8 h-8 bg-slate-100 rounded-full shrink-0"></div>
                   <p className="text-[11px] font-bold text-slate-700 font-serif leading-tight text-right w-full">Al-Ataa Charity Foundation<br/><span className="opacity-50 text-[10px]">مؤسسة العطاء الخيري</span></p>
                </div>
                <div className="bg-white border border-slate-100 rounded-xl p-4 flex items-center justify-center gap-3 shadow-sm hover:-translate-y-1 transition-transform">
                   <div className="w-8 h-8 bg-slate-100 rounded-full shrink-0"></div>
                   <p className="text-[11px] font-bold text-slate-700 font-serif leading-tight text-right w-full">Ihsan Foundation<br/><span className="opacity-50 text-[10px]">إحسان</span></p>
                </div>
                 <div className="bg-white border border-slate-100 rounded-xl p-4 flex items-center justify-center gap-3 shadow-sm hover:-translate-y-1 transition-transform">
                   <div className="w-8 h-8 bg-slate-100 rounded-full shrink-0"></div>
                   <p className="text-[11px] font-bold text-slate-700 font-serif leading-tight text-right w-full">Albarakah Charity<br/><span className="opacity-50 text-[10px]">البركة الخيرية</span></p>
                </div>
                <div className="bg-white border border-slate-100 rounded-xl p-4 flex items-center justify-center gap-3 shadow-sm hover:-translate-y-1 transition-transform">
                   <div className="w-8 h-8 bg-slate-100 rounded-full shrink-0"></div>
                   <p className="text-[11px] font-bold text-slate-700 font-serif leading-tight text-right w-full">Nama Charity Association<br/><span className="opacity-50 text-[10px]">جمعية نماء الخيرية</span></p>
                </div>
                 <div className="bg-[#f8f9fa] border border-slate-100 rounded-xl p-4 flex items-center justify-center gap-3 text-slate-500 hover:text-slate-800 transition-colors cursor-pointer group">
                   <div className="w-8 h-8 bg-white border border-slate-200 rounded-full shrink-0 flex items-center justify-center group-hover:border-slate-400">
                     <Users size={14} />
                   </div>
                   <p className="text-[12px] font-bold">{t("proyek.detail.other_donors", { count: 42 })}</p>
                </div>
             </div>
          </section>

          {/* Bottom Quotes */}
          <div className="grid md:grid-cols-[1.5fr_1fr] gap-6">
            <div className="bg-primary-dark text-white p-10 rounded-[2rem] shadow-xl relative overflow-hidden flex flex-col justify-center">
               <div className="absolute right-0 top-0 w-32 h-32 bg-primary-deep rounded-full blur-[60px] opacity-60 pointer-events-none"></div>
               <p className="text-[16px] font-bold mb-4 leading-relaxed italic pr-8 relative z-10 opacity-90 text-primary-border">
                {t("proyek.detail.quote_text")}
              </p>
              <p className="text-[12px] font-bold opacity-60 uppercase tracking-widest relative z-10">{t("proyek.detail.quote_ref")}</p>
            </div>
            <div className="bg-primary-light text-primary-deep border border-primary-border p-10 rounded-[2rem] flex flex-col justify-center items-center text-center">
               <p className="text-[14px] font-bold mb-6 leading-relaxed">
                 {t("proyek.detail.investment_text")}
               </p>
                <Link to="/donasi" className="bg-primary-deep text-white px-8 py-3.5 rounded-full text-sm font-bold flex items-center gap-2 hover:bg-primary-dark transition-all shadow-lg hover:shadow-xl justify-center">
                  <Heart size={16} fill="currentColor" /> {t("nav.donasi_sekarang")}
                </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
