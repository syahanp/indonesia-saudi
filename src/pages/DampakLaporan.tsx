import {
  Users,
  MapPin,
  Zap,
  Coins,
  ArrowUp,
  Download,
  Info,
  ArrowRight,
  ShieldCheck,
  HeartHandshake,
  Settings,
  Megaphone,
  BriefcaseBusiness,
  FileCheck,
  LineChart,
  MessageSquare,
  Clock,
  Heart,
  Lightbulb,
  Leaf,
  Home,
  CheckCircle2,
  CalendarDays,
  ChevronRight
} from "lucide-react";
import { Link } from "react-router-dom";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { motion } from "motion/react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function DampakLaporan() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState(t("dampak_laporan.periods.all"));
  const genericImg = "https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?auto=format&fit=crop&q=80&w=2070";

  const chartData = [
    { name: t("dampak_laporan.transparency.categories.program"), value: 83, color: '#167ce1' },
    { name: t("dampak_laporan.transparency.categories.operational"), value: 10, color: '#7C3AED' },
    { name: t("dampak_laporan.transparency.categories.fundraising"), value: 5, color: '#F43F5E' },
    { name: t("dampak_laporan.transparency.categories.reserve"), value: 2, color: '#FBBF24' },
  ];

  const tabs = [
    t("dampak_laporan.periods.all"),
    t("dampak_laporan.periods.last3"),
    t("dampak_laporan.periods.last6"),
    t("dampak_laporan.periods.last12")
  ];

  return (
    <div className="pt-32 pb-20 bg-[#fbfcff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-14">
          <div className="max-w-xl">
            <h1 className="text-[42px] lg:text-[48px] font-bold text-primary-deep mb-4 leading-tight">
              {t("dampak_laporan.title")}
            </h1>
            <p className="text-[15px] font-medium text-slate-500 leading-relaxed max-w-lg">
              {t("dampak_laporan.desc")}
            </p>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest pl-1">{t("dampak_laporan.select_period")}</span>
              <div className="flex bg-white rounded-xl border border-slate-100 p-1.5 shadow-sm gap-1">
                {tabs.map((tab) => (
                  <button 
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-5 py-2.5 rounded-lg text-[13px] font-bold transition-all flex items-center gap-2 ${
                      activeTab === tab 
                      ? "bg-primary-deep text-white shadow-md shadow-primary-deep/20" 
                      : "text-slate-500 hover:text-slate-800"
                    }`}
                  >
                    {tab === t("dampak_laporan.periods.all") && <Clock size={14} className={activeTab === tab ? "text-white" : "text-primary-deep"} />}
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between gap-8">
              <div className="flex items-center gap-2 text-[12px] font-semibold text-slate-400">
                <Clock size={14} /> 
                <span>{t("dampak_laporan.data_until", { date: "30 April 2025" })}</span>
                <Info size={14} className="text-slate-300 ml-1" />
              </div>
              <div className="flex gap-3">
                <button className="px-5 py-2.5 bg-white border border-slate-100 shadow-sm rounded-xl text-primary-deep text-[13px] font-bold flex items-center gap-2 hover:bg-slate-50 transition-all">
                  <Download size={16} /> {t("dampak_laporan.download_report")}
                </button>
                <Link to="/proyek" className="px-5 py-2.5 bg-primary-deep text-white shadow-sm rounded-xl text-[13px] font-bold flex items-center gap-2 hover:bg-primary-dark transition-all hover:-translate-y-0.5">
                  {t("dampak_laporan.view_projects")} <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-5 mb-16">
          <StatCard 
            icon={<Users size={22} />}
            value="10.000+"
            label={t("dampak_laporan.stats.beneficiaries")}
            sub={t("dampak_laporan.stats.beneficiaries_sub")}
            trend="+ 12%"
            trendLabel={t("dampak_laporan.stats.from_previous")}
          />
          <StatCard 
            icon={<CheckCircle2 size={22} />}
            value="30+"
            label={t("dampak_laporan.stats.completed")}
            sub={t("dampak_laporan.stats.completed_sub")}
            trend="+ 8%"
            trendLabel={t("dampak_laporan.stats.from_previous")}
          />
          <StatCard 
            icon={<MapPin size={22} />}
            value="12"
            label={t("dampak_laporan.stats.villages")}
            sub={t("dampak_laporan.stats.villages_sub")}
            trend="+ 9%"
            trendLabel={t("dampak_laporan.stats.from_previous")}
          />
          <StatCard 
            icon={<Zap size={22} />}
            value="18"
            label={t("dampak_laporan.stats.electricity")}
            sub={t("dampak_laporan.stats.electricity_sub")}
            trend="+ 15%"
            trendLabel={t("dampak_laporan.stats.from_previous")}
          />
          <StatCard 
            icon={<Coins size={22} />}
            value="SAR 6.2M+"
            label={t("dampak_laporan.stats.total_donation")}
            sub={t("dampak_laporan.stats.donors_sub")}
            trend="+ 10%"
            trendLabel={t("dampak_laporan.stats.from_previous")}
            highlight
          />
        </div>

        {/* Financial Transparency */}
        <div className="grid lg:grid-cols-[1.1fr_1.3fr] gap-8 mb-20">
          <div className="bg-white border border-slate-100 rounded-[2.5rem] p-10 shadow-sm relative overflow-hidden">
            <h3 className="text-[20px] font-bold text-primary-deep mb-1">{t("dampak_laporan.transparency.title")}</h3>
            <p className="text-[13px] font-bold text-slate-400 mb-10">{t("dampak_laporan.transparency.period_label", { period: t("dampak_laporan.periods.all") })}</p>
            
            <div className="flex flex-col md:flex-row items-center gap-12 mb-10">
              <div className="relative w-64 h-64 shrink-0">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={chartData}
                      cx="50%"
                      cy="50%"
                      innerRadius={80}
                      outerRadius={105}
                      paddingAngle={4}
                      stroke="none"
                      dataKey="value"
                    >
                      {chartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                  <p className="text-[11px] font-bold text-slate-400 mb-1">{t("dampak_laporan.transparency.total_funds")}</p>
                  <p className="text-[20px] font-extrabold text-primary-deep tracking-tight">SAR 6.200.000</p>
                </div>
              </div>

              <div className="space-y-4 w-full">
                {chartData.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center group cursor-pointer">
                    <div className="flex items-center gap-3">
                      <div className="w-3.5 h-3.5 rounded-full shadow-sm" style={{ backgroundColor: item.color }}></div>
                      <span className="text-[14px] font-bold text-slate-600 group-hover:text-primary-deep transition-colors">{item.name}</span>
                    </div>
                    <span className="text-[14px] font-extrabold text-slate-900">{item.value}%</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-50/50 border border-blue-100 rounded-2xl p-5 flex items-start gap-4">
               <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary-deep shadow-sm shrink-0 mt-0.5">
                <ShieldCheck size={20} />
               </div>
               <p className="text-[13px] font-medium text-slate-700 leading-relaxed">
                 <span className="font-bold text-primary-deep">{t("dampak_laporan.transparency.trust_badge")}</span> <br/> {t("dampak_laporan.transparency.trust_desc")}
               </p>
            </div>
          </div>

          <div className="bg-white border border-slate-100 rounded-[2.5rem] p-10 shadow-sm flex flex-col justify-between">
             <div className="space-y-8">
               <h3 className="text-[18px] font-extrabold text-primary-deep">{t("dampak_laporan.transparency.usage_details")}</h3>
               <div className="space-y-8">
                 <div className="flex justify-between items-center group">
                   <div className="flex items-center gap-5">
                     <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-primary-deep group-hover:bg-primary-light transition-colors shadow-sm">
                      <HeartHandshake size={20} />
                     </div>
                     <span className="text-[15px] font-bold text-slate-700">{t("dampak_laporan.transparency.categories.program")}</span>
                   </div>
                   <span className="text-[15px] font-extrabold text-slate-900 tracking-tight">SAR 5.146.000</span>
                 </div>
                 <div className="flex justify-between items-center group">
                   <div className="flex items-center gap-5">
                    <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-indigo-500 group-hover:bg-indigo-50 transition-colors shadow-sm">
                      <Settings size={20} />
                     </div>
                     <span className="text-[15px] font-bold text-slate-700">{t("dampak_laporan.transparency.categories.operational")}</span>
                   </div>
                   <span className="text-[15px] font-extrabold text-slate-900 tracking-tight">SAR 620.000</span>
                 </div>
                 <div className="flex justify-between items-center group">
                   <div className="flex items-center gap-5">
                    <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-rose-500 group-hover:bg-rose-50 transition-colors shadow-sm">
                      <Megaphone size={20} />
                     </div>
                     <span className="text-[15px] font-bold text-slate-700">{t("dampak_laporan.transparency.categories.fundraising")}</span>
                   </div>
                   <span className="text-[15px] font-extrabold text-slate-900 tracking-tight">SAR 310.000</span>
                 </div>
                 <div className="flex justify-between items-center group">
                   <div className="flex items-center gap-5">
                    <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-amber-500 group-hover:bg-amber-50 transition-colors shadow-sm">
                      <BriefcaseBusiness size={20} />
                     </div>
                     <span className="text-[15px] font-bold text-slate-700">{t("dampak_laporan.transparency.categories.reserve")}</span>
                   </div>
                   <span className="text-[15px] font-extrabold text-slate-900 tracking-tight">SAR 124.000</span>
                 </div>
               </div>
             </div>
             
             <div className="mt-12 bg-blue-50/50 p-6 rounded-2xl flex justify-between items-center border border-blue-100">
               <span className="text-[18px] font-extrabold text-primary-deep">{t("dampak_laporan.transparency.total")}</span>
               <span className="text-[24px] font-extrabold text-primary-deep tracking-tight">SAR 6.200.000</span>
             </div>
          </div>
        </div>

        {/* Laporan Berkala */}
        <div className="mb-20">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-[22px] font-bold text-primary-deep mb-2">{t("dampak_laporan.periodic_reports.title")}</h2>
              <p className="text-[14px] font-medium text-slate-400">{t("dampak_laporan.periodic_reports.subtitle")}</p>
            </div>
            <button className="text-[13px] font-bold text-primary-deep hover:text-primary-dark flex items-center gap-2 transition-colors">
              {t("dampak_laporan.periodic_reports.view_all")} <ArrowRight size={16} />
            </button>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { t: t("dampak_laporan.periodic_reports.items.monthly", { month: t("dampak_laporan.months.april"), year: "2025" }), p: t("dampak_laporan.periodic_reports.items.period_monthly", { month: t("dampak_laporan.months.april"), year: "2025" }), s: "2.4 MB" },
              { t: t("dampak_laporan.periodic_reports.items.monthly", { month: t("dampak_laporan.months.march"), year: "2025" }), p: t("dampak_laporan.periodic_reports.items.period_monthly", { month: t("dampak_laporan.months.march"), year: "2025" }), s: "2.1 MB" },
              { t: t("dampak_laporan.periodic_reports.items.monthly", { month: t("dampak_laporan.months.february"), year: "2025" }), p: t("dampak_laporan.periodic_reports.items.period_monthly", { month: t("dampak_laporan.months.february"), year: "2025" }), s: "2.0 MB" },
              { t: t("dampak_laporan.periodic_reports.items.annual", { year: "2024" }), p: t("dampak_laporan.periodic_reports.items.period_annual", { year: "2024" }), s: "5.8 MB" },
            ].map((lap, idx) => (
              <div key={idx} className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all flex items-center justify-between group cursor-pointer hover:border-primary-deep/20 hover:-translate-y-1">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-rose-50 rounded-xl flex items-center justify-center font-bold text-rose-500 text-[10px] group-hover:bg-rose-100 transition-colors">
                    PDF
                  </div>
                  <div>
                    <h4 className="text-[13px] font-bold text-slate-800 mb-0.5 leading-tight group-hover:text-primary-deep transition-colors">{lap.t}</h4>
                    <p className="text-[11px] font-bold text-slate-400 mb-0.5">{lap.p}</p>
                    <p className="text-[11px] font-bold text-slate-300">{lap.s}</p>
                  </div>
                </div>
                <div className="text-slate-300 group-hover:text-primary-deep transition-colors p-1">
                  <Download size={18} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ringkasan Perkembangan Proyek Table */}
        <div className="mb-20">
          <div className="flex justify-between items-end mb-8">
             <div>
              <h2 className="text-[22px] font-bold text-primary-deep mb-2">{t("dampak_laporan.project_progress.title")}</h2>
              <p className="text-[14px] font-medium text-slate-400">{t("dampak_laporan.project_progress.subtitle")}</p>
            </div>
            <Link to="/proyek" className="text-[13px] font-bold text-primary-deep hover:text-primary-dark flex items-center gap-2 transition-colors">
              {t("dampak_laporan.project_progress.view_all")} <ArrowRight size={16} />
            </Link>
          </div>

          <div className="bg-white border border-slate-100 rounded-[2rem] shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[900px]">
                <thead>
                  <tr className="bg-[#f8f9fa] border-b border-slate-100">
                    <th className="px-8 py-5 text-[11px] font-bold text-slate-400 uppercase tracking-widest min-w-[280px]">{t("dampak_laporan.project_progress.cols.project")}</th>
                    <th className="px-6 py-5 text-[11px] font-bold text-slate-400 uppercase tracking-widest w-[15%]">{t("dampak_laporan.project_progress.cols.location")}</th>
                    <th className="px-6 py-5 text-[11px] font-bold text-slate-400 uppercase tracking-widest w-[12%] text-center">{t("dampak_laporan.project_progress.cols.type")}</th>
                    <th className="px-6 py-5 text-[11px] font-bold text-slate-400 uppercase tracking-widest w-[25%]">{t("dampak_laporan.project_progress.cols.progress")}</th>
                    <th className="px-8 py-5 text-[11px] font-bold text-slate-400 uppercase tracking-widest w-[12%] text-center">{t("dampak_laporan.project_progress.cols.status")}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  <TableRow 
                    img={genericImg}
                    title="Jembatan Desa Lembah Harapan"
                    loc="Sulawesi Tengah"
                    type={t("programs.jembatan.title")}
                    progress={80}
                    status={t("proyek.status_berjalan")}
                    statusColor="bg-blue-50 text-blue-600"
                    progColor="bg-primary-deep"
                  />
                  <TableRow 
                    img={genericImg}
                    title="Listrik Masuk Desa Suka Maju"
                    loc="Nusa Tenggara Barat"
                    type={t("programs.listrik.title")}
                    progress={100}
                    status={t("proyek.status_selesai")}
                    statusColor="bg-green-50 text-green-600"
                    progColor="bg-primary-deep"
                  />
                  <TableRow 
                    img={genericImg}
                    title="Jembatan Desa Watu Mori"
                    loc="Nusa Tenggara Timur"
                    type={t("programs.jembatan.title")}
                    progress={45}
                    status={t("proyek.status_berjalan")}
                    statusColor="bg-blue-50 text-blue-600"
                    progColor="bg-primary-deep"
                  />
                  <TableRow 
                    img={genericImg}
                    title="Listrik Masuk Desa Bintang Timur"
                    loc="Sulawesi Selatan"
                    type={t("programs.listrik.title")}
                    progress={60}
                    status={t("proyek.status_perencanaan")}
                    statusColor="bg-sky-50 text-sky-600"
                    progColor="bg-primary-deep"
                  />
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Komitmen Transparansi */}
        <div className="mb-20">
          <h2 className="text-[22px] font-bold text-primary-deep mb-8">{t("dampak_laporan.commitments.title")}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.isArray(t("dampak_laporan.commitments.items", { returnObjects: true })) && 
              (t("dampak_laporan.commitments.items", { returnObjects: true }) as any[]).map((item: any, idx: number) => (
                <CommitmentCard 
                  key={idx}
                  icon={idx === 0 ? <FileCheck size={24} /> : idx === 1 ? <LineChart size={24} /> : idx === 2 ? <ShieldCheck size={24} /> : <Users size={24} />}
                  title={item.title}
                  desc={item.desc}
                />
              ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-primary-darkest rounded-[3rem] p-10 lg:p-14 flex flex-col lg:flex-row items-center justify-between gap-10 shadow-2xl relative overflow-hidden">
          <div className="absolute left-0 top-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary-deep rounded-full blur-[120px]"></div>
          </div>
          <div className="relative z-10 max-w-2xl text-center lg:text-left">
            <h3 className="text-2xl lg:text-3xl font-extrabold text-white mb-4">{t("dampak_laporan.cta.title")}</h3>
            <p className="text-[15px] text-slate-300 font-medium leading-relaxed">
              {t("dampak_laporan.cta.desc")}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full sm:w-auto relative z-10">
             <Link to="/proyek" className="px-8 py-4 bg-white text-slate-900 rounded-full font-bold text-[14px] flex items-center justify-center gap-2 hover:bg-slate-50 transition-all shadow-sm hover:-translate-y-1">
              {t("dampak_laporan.view_projects")} <ArrowRight size={18} />
            </Link>
            <Link to="/donasi" className="px-8 py-4 bg-primary-deep text-white border border-primary-deep rounded-full font-bold text-[14px] flex items-center justify-center gap-2 hover:bg-primary-dark transition-all shadow-lg hover:-translate-y-1">
              <Heart size={18} fill="currentColor" /> {t("nav.donasi_sekarang")}
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

function StatCard({ icon, value, label, sub, trend, trendLabel, highlight = false }: any) {
  return (
    <div className={`bg-white border border-slate-100 rounded-3xl p-8 flex flex-col items-center text-center shadow-sm relative group hover:border-primary-deep/20 transition-all ${highlight ? 'ring-1 ring-primary-deep/5' : ''}`}>
      <div className="w-14 h-14 bg-slate-50 rounded-full flex items-center justify-center mb-6 text-primary-deep shadow-inner group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <p className="text-2xl font-extrabold text-slate-900 mb-1.5 tracking-tight">{value}</p>
      <p className="text-[13px] font-bold text-slate-800 mb-1 leading-tight">{label}</p>
      <p className="text-[11px] font-bold text-slate-400 mb-5">{sub}</p>
      <div className="mt-auto px-3.5 py-1.5 bg-blue-50 rounded-full text-[11px] font-extrabold text-primary-deep flex items-center gap-1.5">
        <ArrowUp size={12} strokeWidth={3} /> {trend} <span className="opacity-60 text-[10px]">{trendLabel}</span>
      </div>
    </div>
  );
}

function TableRow({ img, title, loc, type, progress, status, statusColor, progColor }: any) {
  return (
    <tr className="hover:bg-slate-50/50 transition-colors group">
      <td className="px-8 py-5 flex items-center gap-5">
        <div className="w-16 h-11 rounded-lg overflow-hidden shadow-sm shrink-0 border border-slate-100 group-hover:scale-105 transition-transform">
          <img 
            src={img} 
            className="w-full h-full object-cover" 
            referrerPolicy="no-referrer"
          />
        </div>
        <span className="text-[13px] font-bold text-slate-800 leading-tight group-hover:text-primary-deep transition-colors">{title}</span>
      </td>
      <td className="px-6 py-5 text-[13px] font-bold text-slate-500">{loc}</td>
      <td className="px-6 py-5 text-center">
        <span className="inline-block px-3 py-1.5 bg-slate-50 rounded-lg text-[11px] font-extrabold text-slate-500 border border-slate-100 uppercase tracking-tighter">{type}</span>
      </td>
      <td className="px-6 py-5">
        <div className="flex items-center gap-5 pr-4">
           <span className="text-[13px] font-extrabold text-slate-900 w-10 shrink-0">{progress}%</span>
           <div className="flex-1 h-2 bg-slate-50 rounded-full overflow-hidden border border-slate-100 p-0.5">
              <div 
                className={`h-full rounded-full ${progColor} shadow-sm`} 
                style={{ width: `${progress}%` }}
              ></div>
           </div>
        </div>
      </td>
      <td className="px-8 py-5 text-center">
         <span className={`inline-block px-4 py-1.5 rounded-lg text-[11px] font-extrabold ${statusColor} min-w-[90px]`}>
          {status}
         </span>
      </td>
    </tr>
  );
}

function CommitmentCard({ icon, title, desc }: any) {
  return (
    <div className="bg-white border border-slate-100 rounded-[2rem] p-8 shadow-sm flex flex-col items-center text-center group hover:border-primary-deep/20 transition-all hover:bg-slate-50/30">
      <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-6 text-primary-deep shadow-sm border border-slate-50 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h4 className="text-[15px] font-extrabold text-slate-800 mb-3 leading-tight">{title}</h4>
      <p className="text-[12px] text-slate-400 font-bold leading-relaxed">{desc}</p>
    </div>
  );
}
