import {
  Users,
  Milestone,
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
  Heart
} from "lucide-react";
import { Link } from "react-router-dom";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { motion } from "motion/react";

export default function DampakLaporan() {
  const genericImg = "https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?auto=format&fit=crop&q=80&w=640";

  const chartData = [
    { name: 'Program & Proyek', value: 83, color: 'var(--color-primary-deep)' },
    { name: 'Operasional', value: 10, color: '#86efac' },
    { name: 'Penggalangan Dana', value: 5, color: '#cbd5e1' },
    { name: 'Cadangan', value: 2, color: '#f1f5f9' },
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div className="max-w-xl">
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4 font-display">
              Dampak & Laporan
            </h1>
            <p className="text-[15px] font-medium text-slate-600 leading-relaxed">
              Transparansi adalah amanah. Kami berkomitmen untuk menyajikan laporan keuangan dan perkembangan proyek secara terbuka dan akuntabel.
            </p>
          </div>

          <div className="flex flex-col items-start lg:items-end gap-5 shrink-0">
            <div className="flex flex-col gap-2 w-full lg:w-auto">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">Pilih Periode</span>
              <div className="flex bg-white rounded-lg border border-slate-200 p-1 flex-wrap gap-1 shadow-sm w-full lg:w-auto">
                <button className="flex-1 lg:flex-none px-4 py-2 bg-primary-light text-primary-deep shadow-sm rounded border border-primary-border text-[13px] font-bold flex justify-center items-center gap-2">
                  <Clock size={14} /> Semua Waktu
                </button>
                <button className="flex-1 lg:flex-none px-4 py-2 text-slate-500 hover:text-slate-800 text-[13px] font-bold flex justify-center items-center transition-colors">
                  3 Bulan Terakhir
                </button>
                <button className="flex-1 lg:flex-none px-4 py-2 text-slate-500 hover:text-slate-800 text-[13px] font-bold flex justify-center border-l-0 lg:border-l border-slate-200 items-center transition-colors">
                  6 Bulan Terakhir
                </button>
                <button className="flex-1 lg:flex-none px-4 py-2 text-slate-500 hover:text-slate-800 text-[13px] font-bold flex justify-center border-l-0 lg:border-l border-slate-200 items-center transition-colors">
                  1 Tahun Terakhir
                </button>
              </div>
            </div>

            <div className="flex items-center gap-4 w-full lg:w-auto justify-between lg:justify-end">
              <p className="text-[12px] font-semibold text-slate-500 flex items-center gap-1.5">
                <Clock size={12} /> Data hingga 30 April 2025 <Info size={12} className="text-slate-400" />
              </p>
              <div className="flex gap-3">
                <button className="px-4 py-2 bg-white border border-slate-200 shadow-sm rounded-lg text-slate-700 text-[13px] font-bold flex items-center gap-2 hover:bg-slate-50 transition-colors">
                  <Download size={14} /> Unduh Laporan
                </button>
                <Link to="/proyek" className="px-4 py-2 bg-primary-deep border border-primary-deep shadow-sm rounded-lg text-white text-[13px] font-bold flex items-center gap-2 hover:bg-primary-dark transition-colors">
                  Lihat Proyek <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-16">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col items-center text-center shadow-sm">
            <div className="w-12 h-12 bg-[#f8f9fa] rounded-full flex items-center justify-center mb-4 text-slate-600">
              <Users size={24} strokeWidth={1.5} />
            </div>
            <p className="text-2xl font-bold text-slate-900 mb-1">10.000+</p>
            <p className="text-[13px] font-bold text-slate-800 mb-1">Penerima Manfaat</p>
            <p className="text-[11px] font-medium text-slate-500 mb-4">di berbagai wilayah Indonesia</p>
            <div className="mt-auto px-3 py-1 bg-primary-light rounded-full text-[11px] font-bold text-primary-deep flex items-center gap-1 w-max">
              <ArrowUp size={10} strokeWidth={3} /> 12% <span className="opacity-70 font-semibold ml-0.5">dari periode sebelumnya</span>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col items-center text-center shadow-sm">
            <div className="w-12 h-12 bg-[#f8f9fa] rounded-full flex items-center justify-center mb-4 text-slate-600">
              <Milestone size={24} strokeWidth={1.5} />
            </div>
            <p className="text-2xl font-bold text-slate-900 mb-1">30+</p>
            <p className="text-[13px] font-bold text-slate-800 mb-1">Proyek Selesai</p>
            <p className="text-[11px] font-medium text-slate-500 mb-4">Jembatan & Listrik</p>
            <div className="mt-auto px-3 py-1 bg-primary-light rounded-full text-[11px] font-bold text-primary-deep flex items-center gap-1 w-max">
              <ArrowUp size={10} strokeWidth={3} /> 8% <span className="opacity-70 font-semibold ml-0.5">dari periode sebelumnya</span>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col items-center text-center shadow-sm">
            <div className="w-12 h-12 bg-[#f8f9fa] rounded-full flex items-center justify-center mb-4 text-slate-600">
              <MapPin size={24} strokeWidth={1.5} />
            </div>
            <p className="text-2xl font-bold text-slate-900 mb-1">12</p>
            <p className="text-[13px] font-bold text-slate-800 mb-1">Desa Terdampak</p>
            <p className="text-[11px] font-medium text-slate-500 mb-4">di 6 Provinsi</p>
            <div className="mt-auto px-3 py-1 bg-primary-light rounded-full text-[11px] font-bold text-primary-deep flex items-center gap-1 w-max">
              <ArrowUp size={10} strokeWidth={3} /> 9% <span className="opacity-70 font-semibold ml-0.5">dari periode sebelumnya</span>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col items-center text-center shadow-sm">
             <div className="w-12 h-12 bg-[#f8f9fa] rounded-full flex items-center justify-center mb-4 text-slate-600">
              <Zap size={24} strokeWidth={1.5} />
            </div>
            <p className="text-2xl font-bold text-slate-900 mb-1">18</p>
            <p className="text-[13px] font-bold text-slate-800 mb-1">Desa Berlistrik</p>
            <p className="text-[11px] font-medium text-slate-500 mb-4">Akses listrik andal</p>
            <div className="mt-auto px-3 py-1 bg-primary-light rounded-full text-[11px] font-bold text-primary-deep flex items-center gap-1 w-max">
              <ArrowUp size={10} strokeWidth={3} /> 15% <span className="opacity-70 font-semibold ml-0.5">dari periode sebelumnya</span>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col items-center text-center shadow-sm col-span-2 lg:col-span-1">
             <div className="w-12 h-12 bg-[#f8f9fa] rounded-full flex items-center justify-center mb-4 text-slate-600">
              <Coins size={24} strokeWidth={1.5} />
            </div>
            <p className="text-2xl font-bold text-slate-900 mb-1">SAR 6.2M+</p>
            <p className="text-[13px] font-bold text-slate-800 mb-1">Total Donasi Terkumpul</p>
            <p className="text-[11px] font-medium text-slate-500 mb-4">dari para donatur</p>
            <div className="mt-auto px-3 py-1 bg-primary-light rounded-full text-[11px] font-bold text-primary-deep flex items-center gap-1 w-max">
              <ArrowUp size={10} strokeWidth={3} /> 10% <span className="opacity-70 font-semibold ml-0.5">dari periode sebelumnya</span>
            </div>
          </div>
        </div>

        {/* Financial Transparency */}
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-6 mb-16">
          <div className="bg-white border border-slate-200 rounded-[2rem] p-8 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-1 font-display">Transparansi Keuangan</h3>
            <p className="text-[13px] font-medium text-slate-500 mb-8">Periode: Semua Waktu</p>
            
            <div className="flex flex-col md:flex-row items-center gap-12 mb-8">
              <div className="relative w-64 h-64 shrink-0">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={chartData}
                      cx="50%"
                      cy="50%"
                      innerRadius={80}
                      outerRadius={100}
                      stroke="none"
                      dataKey="value"
                      startAngle={90}
                      endAngle={-270}
                    >
                      {chartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                  <p className="text-[12px] font-bold text-slate-500 mb-1">Total Dana</p>
                  <p className="text-[17px] font-bold text-slate-900">SAR 6.200.000</p>
                </div>
              </div>

              <div className="space-y-4 w-full">
                {chartData.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 rounded-full border-2 border-white shadow-sm" style={{ backgroundColor: item.color }}></div>
                      <span className="text-[14px] font-medium text-slate-700">{item.name}</span>
                    </div>
                    <span className="text-[14px] font-bold text-slate-900">{item.value}%</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#f8f9fa] border border-slate-100 rounded-xl p-5 flex items-start gap-4">
               <ShieldCheck size={24} className="text-primary-deep shrink-0 mt-0.5" strokeWidth={1.5} />
               <p className="text-[13px] font-medium text-slate-700 leading-relaxed">
                 <span className="font-bold text-slate-900 blo">100% dana donasi digunakan untuk pelaksanaan program dan proyek.</span> <br/> Biaya operasional dijaga seminimal mungkin untuk memastikan dampak maksimal.
               </p>
            </div>
          </div>

          <div className="bg-[#fcfdfd] border border-slate-200 rounded-[2rem] p-8 shadow-sm flex flex-col justify-between">
             <div>
               <h3 className="text-[17px] font-bold text-slate-900 mb-8 font-display">Rincian Penggunaan Dana</h3>
               <div className="space-y-6">
                 <div className="flex justify-between items-center">
                   <div className="flex items-center gap-4">
                     <HeartHandshake size={20} className="text-slate-500" />
                     <span className="text-[14px] font-medium text-slate-700">Program & Proyek</span>
                   </div>
                   <span className="text-[14px] font-bold text-slate-900">SAR 5.146.000</span>
                 </div>
                 <div className="flex justify-between items-center">
                   <div className="flex items-center gap-4">
                     <Settings size={20} className="text-slate-500" />
                     <span className="text-[14px] font-medium text-slate-700">Operasional</span>
                   </div>
                   <span className="text-[14px] font-bold text-slate-900">SAR 620.000</span>
                 </div>
                 <div className="flex justify-between items-center">
                   <div className="flex items-center gap-4">
                     <Megaphone size={20} className="text-slate-500" />
                     <span className="text-[14px] font-medium text-slate-700">Penggalangan Dana</span>
                   </div>
                   <span className="text-[14px] font-bold text-slate-900">SAR 310.000</span>
                 </div>
                 <div className="flex justify-between items-center">
                   <div className="flex items-center gap-4">
                     <BriefcaseBusiness size={20} className="text-slate-500" />
                     <span className="text-[14px] font-medium text-slate-700">Cadangan</span>
                   </div>
                   <span className="text-[14px] font-bold text-slate-900">SAR 124.000</span>
                 </div>
               </div>
             </div>
             
             <div className="pt-6 border-t border-slate-200 mt-8 flex justify-between items-center bg-primary-light p-5 rounded-2xl border-b-[3px] border-b-primary-border">
               <span className="text-[18px] font-bold text-slate-900">Total</span>
               <span className="text-[20px] font-bold text-slate-900">SAR 6.200.000</span>
             </div>
          </div>
        </div>

        {/* Laporan Berkala */}
        <div className="mb-16">
          <div className="flex justify-between items-end mb-6">
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-2 font-display">Laporan Berkala</h2>
              <p className="text-[13px] font-medium text-slate-500">Unduh laporan keuangan, program, dan dampak kami secara berkala.</p>
            </div>
            <button className="text-[13px] font-bold text-slate-600 hover:text-primary-deep flex items-center gap-2 transition-colors">
              Lihat Semua Laporan <ArrowRight size={14} />
            </button>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { t: "Laporan April 2025", p: "Periode April 2025", s: "2.4 MB" },
              { t: "Laporan Maret 2025", p: "Periode Maret 2025", s: "2.1 MB" },
              { t: "Laporan Februari 2025", p: "Periode Februari 2025", s: "2.0 MB" },
              { t: "Laporan Tahunan 2024", p: "Periode Jan - Des 2024", s: "5.8 MB" },
            ].map((lap, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow flex items-center justify-between group cursor-pointer group hover:border-slate-300">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#f8f9fa] rounded-xl flex items-center justify-center font-bold text-slate-400 group-hover:text-primary-deep group-hover:bg-primary-light transition-colors">
                    PDF
                  </div>
                  <div>
                    <h4 className="text-[13px] font-bold text-slate-900 mb-1 leading-tight group-hover:text-primary-deep transition-colors">{lap.t}</h4>
                    <p className="text-[11px] font-medium text-slate-500 mb-1">{lap.p}</p>
                    <p className="text-[11px] font-bold text-slate-400">{lap.s}</p>
                  </div>
                </div>
                <button className="text-slate-400 group-hover:text-slate-900 transition-colors p-2">
                  <Download size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Ringkasan Perkembangan Proyek Table */}
        <div className="mb-16">
          <div className="flex justify-between items-end mb-6">
             <div>
              <h2 className="text-xl font-bold text-slate-900 mb-2 font-display">Ringkasan Perkembangan Proyek</h2>
              <p className="text-[13px] font-medium text-slate-500">Status kemajuan proyek utama yang sedang berjalan.</p>
            </div>
            <Link to="/proyek" className="text-[13px] font-bold text-slate-600 hover:text-primary-deep flex items-center gap-2 transition-colors">
              Lihat Semua Proyek <ArrowRight size={14} />
            </Link>
          </div>

          <div className="bg-white border border-slate-200 rounded-[1.5rem] shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[800px]">
                <thead>
                  <tr className="bg-[#f8f9fa] border-b border-slate-200">
                    <th className="px-6 py-4 text-[12px] font-bold text-slate-500 uppercase tracking-widest min-w-[280px]">Proyek</th>
                    <th className="px-6 py-4 text-[12px] font-bold text-slate-500 uppercase tracking-widest w-[20%]">Lokasi</th>
                    <th className="px-6 py-4 text-[12px] font-bold text-slate-500 uppercase tracking-widest w-[10%] text-center">Jenis</th>
                    <th className="px-6 py-4 text-[12px] font-bold text-slate-500 uppercase tracking-widest w-[25%]">Progres</th>
                    <th className="px-6 py-4 text-[12px] font-bold text-slate-500 uppercase tracking-widest w-[10%] text-center">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 py-4 flex items-center gap-4">
                      <img src={genericImg} className="w-14 h-10 object-cover rounded shadow-sm shrink-0" />
                      <span className="text-[13px] font-bold text-slate-900">Jembatan Desa Lembah Harapan</span>
                    </td>
                    <td className="px-6 py-4 text-[13px] font-medium text-slate-600">Sulawesi Tengah</td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-block px-2.5 py-1 bg-slate-100 rounded text-[11px] font-bold text-slate-600">Jembatan</span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-4">
                         <span className="text-[13px] font-bold text-slate-900 w-10">80%</span>
                         <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                            <div className="w-[80%] h-full bg-primary-deep"></div>
                         </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                       <span className="text-[12px] font-bold text-primary-deep">Berjalan</span>
                    </td>
                  </tr>

                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 py-4 flex items-center gap-4">
                      <img src={genericImg} className="w-14 h-10 object-cover rounded shadow-sm shrink-0" />
                      <span className="text-[13px] font-bold text-slate-900">Listrik Masuk Desa Suka Maju</span>
                    </td>
                    <td className="px-6 py-4 text-[13px] font-medium text-slate-600">Nusa Tenggara Barat</td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-block px-2.5 py-1 bg-slate-100 rounded text-[11px] font-bold text-slate-600">Listrik</span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-4">
                         <span className="text-[13px] font-bold text-slate-900 w-10">100%</span>
                         <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                            <div className="w-[100%] h-full bg-[#0f172a]"></div>
                         </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                       <span className="text-[12px] font-bold text-[#0f172a]">Selesai</span>
                    </td>
                  </tr>

                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 py-4 flex items-center gap-4">
                      <img src={genericImg} className="w-14 h-10 object-cover rounded shadow-sm shrink-0" />
                      <span className="text-[13px] font-bold text-slate-900">Jembatan Desa Watu Mori</span>
                    </td>
                    <td className="px-6 py-4 text-[13px] font-medium text-slate-600">Nusa Tenggara Timur</td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-block px-2.5 py-1 bg-slate-100 rounded text-[11px] font-bold text-slate-600">Jembatan</span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-4">
                         <span className="text-[13px] font-bold text-slate-900 w-10">45%</span>
                         <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                            <div className="w-[45%] h-full bg-primary-deep"></div>
                         </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                       <span className="text-[12px] font-bold text-primary-deep">Berjalan</span>
                    </td>
                  </tr>

                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 py-4 flex items-center gap-4">
                      <img src={genericImg} className="w-14 h-10 object-cover rounded shadow-sm shrink-0" />
                      <span className="text-[13px] font-bold text-slate-900">Listrik Masuk Desa Bintang Timur</span>
                    </td>
                    <td className="px-6 py-4 text-[13px] font-medium text-slate-600">Sulawesi Selatan</td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-block px-2.5 py-1 bg-slate-100 rounded text-[11px] font-bold text-slate-600">Listrik</span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-4">
                         <span className="text-[13px] font-bold text-slate-900 w-10">60%</span>
                         <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                            <div className="w-[60%] h-full bg-[#10b981]"></div>
                         </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                       <span className="text-[12px] font-bold text-[#0ea5e9]">Perencanaan</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Komitmen Transparansi */}
        <div className="mb-16">
          <h2 className="text-xl font-bold text-slate-900 mb-6 font-display">Komitmen Transparansi Kami</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white border border-slate-200 rounded-[1.5rem] p-6 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center shrink-0 border border-slate-200 text-slate-700">
                <FileCheck size={20} strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="text-[14px] font-bold text-slate-900 mb-2 leading-tight">Laporan diperbarui secara berkala</h4>
                <p className="text-[12px] text-slate-500 font-medium leading-relaxed">Kami rutin memperbarui laporan keuangan dan perkembangan proyek setiap bulan.</p>
              </div>
            </div>
            <div className="bg-white border border-slate-200 rounded-[1.5rem] p-6 shadow-sm flex items-start gap-4">
               <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center shrink-0 border border-slate-200 text-slate-700">
                <LineChart size={20} strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="text-[14px] font-bold text-slate-900 mb-2 leading-tight">Setiap proyek dapat dipantau</h4>
                <p className="text-[12px] text-slate-500 font-medium leading-relaxed">Donatur dapat melihat progres proyek secara real-time melalui halaman proyek.</p>
              </div>
            </div>
            <div className="bg-white border border-slate-200 rounded-[1.5rem] p-6 shadow-sm flex items-start gap-4">
               <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center shrink-0 border border-slate-200 text-slate-700">
                <ShieldCheck size={20} strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="text-[14px] font-bold text-slate-900 mb-2 leading-tight">Dana digunakan sesuai tujuan</h4>
                <p className="text-[12px] text-slate-500 font-medium leading-relaxed">Seluruh dana disalurkan untuk program dan proyek yang memberi dampak nyata.</p>
              </div>
            </div>
            <div className="bg-white border border-slate-200 rounded-[1.5rem] p-6 shadow-sm flex items-start gap-4">
               <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center shrink-0 border border-slate-200 text-slate-700">
                <MessageSquare size={20} strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="text-[14px] font-bold text-slate-900 mb-2 leading-tight">Terbuka bagi donatur</h4>
                <p className="text-[12px] text-slate-500 font-medium leading-relaxed">Kami terbuka terhadap masukan dan pertanyaan dari para donatur.</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-[#0f2c1f] rounded-[2rem] border border-primary-border p-8 lg:p-10 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl relative overflow-hidden">
          <div className="absolute right-0 top-0 w-64 h-64 bg-primary-deep blur-[80px] rounded-full opacity-50 pointer-events-none"></div>
          <div className="relative z-10 w-full md:w-auto">
            <h3 className="text-xl font-bold text-white mb-2">Bersama, Kita Ciptakan Dampak yang Berkelanjutan</h3>
            <p className="text-[13px] text-slate-300 font-medium">Setiap donasi Anda adalah amanah yang membawa perubahan nyata bagi masyarakat di pelosok Indonesia.</p>
          </div>
          <div className="flex gap-4 shrink-0 w-full md:w-auto relative z-10">
             <Link to="/proyek" className="flex-1 md:flex-none bg-white text-slate-800 px-6 py-3.5 rounded-full text-sm font-bold flex justify-center items-center gap-2 hover:bg-slate-50 transition-all shadow-sm">
              Lihat Proyek <ArrowRight size={16} />
            </Link>
            <button className="flex-1 md:flex-none bg-primary-deep border border-primary-border text-white px-6 py-3.5 rounded-full text-sm font-bold flex justify-center items-center gap-2 hover:bg-primary-dark transition-all shadow-md">
              <Heart size={16} /> Donasi Sekarang
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
