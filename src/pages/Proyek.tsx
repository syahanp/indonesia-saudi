import { 
  Search, 
  RotateCcw, 
  LayoutGrid, 
  Map as MapIcon, 
  MapPin, 
  ArrowRight, 
  ChevronDown, 
  Check,
  Milestone,
  Zap,
  Plus,
  Minus,
  LocateFixed
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { useState } from "react";

export default function Proyek() {
  const genericImg = "https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?auto=format&fit=crop&q=80&w=2070";
  const [view, setView] = useState<'grid' | 'map'>('grid');

  const projects = [
    {
      title: "Jembatan Desa Lembah Harapan",
      loc: "Sulawesi Tengah",
      progress: 80,
      desc: "Pembangunan jembatan gantung untuk menghubungkan desa dengan akses sekolah dan layanan kesehatan.",
      terkumpul: "SAR 420.000",
      target: "SAR 525.000",
      status: "Berjalan",
      type: "jembatan",
      img: genericImg
    },
    {
      title: "Listrik Masuk Desa Suka Maju",
      loc: "Nusa Tenggara Barat",
      progress: 100,
      desc: "Program penyediaan listrik tenaga surya untuk 120 rumah di desa yang belum terjangkau listrik PLN.",
      terkumpul: "SAR 310.000",
      target: "SAR 310.000",
      status: "Selesai",
      type: "listrik",
      img: genericImg
    },
    {
      title: "Jembatan Desa Watu Mori",
      loc: "Nusa Tenggara Timur",
      progress: 45,
      desc: "Pembangunan jembatan gantung sepanjang 120 meter untuk akses utama masyarakat.",
      terkumpul: "SAR 180.000",
      target: "SAR 400.000",
      status: "Berjalan",
      type: "jembatan",
      img: genericImg
    },
    {
      title: "Listrik Masuk Desa Bintang Timur",
      loc: "Sulawesi Selatan",
      progress: 15,
      desc: "Rencana penyediaan listrik solar home system untuk 150 rumah di wilayah terpencil.",
      terkumpul: "SAR 60.000",
      target: "SAR 400.000",
      status: "Perencanaan",
      type: "listrik",
      img: genericImg
    },
    {
      title: "Jembatan Desa Mekar Jaya",
      loc: "Kalimantan Barat",
      progress: 60,
      desc: "Pembangunan jembatan gantung untuk menghubungkan desa dengan pusat ekonomi dan pendidikan.",
      terkumpul: "SAR 240.000",
      target: "SAR 400.000",
      status: "Berjalan",
      type: "jembatan",
      img: genericImg
    },
    {
      title: "Listrik Masuk Desa Sinar Harapan",
      loc: "Maluku",
      progress: 10,
      desc: "Perencanaan instalasi listrik untuk 80 rumah di wilayah kepulauan.",
      terkumpul: "SAR 25.000",
      target: "SAR 250.000",
      status: "Perencanaan",
      type: "listrik",
      img: genericImg
    }
  ];

  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <div className="relative pt-12 pb-24 lg:pb-32 mb-12">
        <div className="absolute inset-0 z-0">
           <img src={genericImg} alt="Hero" className="w-full h-full object-cover object-center" />
           <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-xl">
            <h1 className="text-4xl font-bold text-slate-900 leading-[1.1] mb-4 font-display">
              Proyek Kami
            </h1>
            <p className="text-[14px] text-slate-700 leading-relaxed font-medium mb-8">
              Jelajahi berbagai proyek yang sedang kami kerjakan di seluruh pelosok Indonesia. Setiap donasi Anda membawa perubahan nyata.
            </p>
            
            {/* Breadcrumbs */}
            <div className="text-[12px] text-slate-600 font-semibold mb-6 flex items-center gap-2">
              <Link to="/" className="hover:text-[#14532d] transition-colors">Beranda</Link>
              <span>&gt;</span>
              <span className="text-slate-900">Proyek Kami</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filters */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm mb-8 flex flex-col lg:flex-row gap-6">
          <div className="flex-1">
            <h3 className="font-bold text-slate-900 text-[15px] mb-4">Filter Proyek</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <label className="block text-[11px] font-bold text-slate-500 mb-2">Cari Proyek</label>
                <div className="relative">
                  <input type="text" placeholder="Cari nama proyek atau lokasi..." className="w-full border border-slate-200 rounded-lg pl-3 pr-9 py-2.5 text-[13px] font-semibold text-slate-700 bg-white focus:outline-none focus:border-[#14532d] focus:ring-1 focus:ring-[#14532d]" />
                  <Search size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" />
                </div>
              </div>
              <div>
                <label className="block text-[11px] font-bold text-slate-500 mb-2">Program</label>
                <div className="relative">
                  <select className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-[13px] font-semibold text-slate-700 bg-white appearance-none focus:outline-none focus:border-[#14532d] focus:ring-1 focus:ring-[#14532d]">
                    <option>Semua Program</option>
                    <option>Jembatan Gantung</option>
                    <option>Listrik Masuk Desa</option>
                  </select>
                  <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-600 pointer-events-none" />
                </div>
              </div>
              <div>
                <label className="block text-[11px] font-bold text-slate-500 mb-2">Status</label>
                <div className="relative">
                  <select className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-[13px] font-semibold text-slate-700 bg-white appearance-none focus:outline-none focus:border-[#14532d] focus:ring-1 focus:ring-[#14532d]">
                    <option>Semua Status</option>
                    <option>Perencanaan</option>
                    <option>Berjalan</option>
                    <option>Selesai</option>
                  </select>
                  <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-600 pointer-events-none" />
                </div>
              </div>
              <div>
                <label className="block text-[11px] font-bold text-slate-500 mb-2">Provinsi</label>
                <div className="relative">
                   <select className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-[13px] font-semibold text-slate-700 bg-white appearance-none focus:outline-none focus:border-[#14532d] focus:ring-1 focus:ring-[#14532d]">
                    <option>Semua Provinsi</option>
                    <option>Sulawesi Tengah</option>
                    <option>Nusa Tenggara Timur</option>
                    <option>Kalimantan Barat</option>
                  </select>
                  <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-600 pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-end lg:pb-1">
             <button className="w-full lg:w-auto flex justify-center items-center gap-2 border border-slate-200 rounded-lg px-6 py-2.5 text-[13px] font-bold text-slate-700 hover:bg-slate-50 transition-colors">
               <RotateCcw size={14} /> Reset Filter
             </button>
          </div>
        </div>

        {/* View Toggles & Count */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <p className="text-[13px] text-slate-600 font-semibold shrink-0">24 proyek ditemukan</p>
          <div className="flex bg-[#f1f5f9] rounded-lg p-1 border border-slate-200 shrink-0">
            <button 
              onClick={() => setView('grid')}
              className={`flex items-center gap-2 px-4 py-2 rounded text-[13px] font-bold transition-all ${view === 'grid' ? 'bg-white shadow-sm text-slate-900 border border-slate-200/50' : 'text-slate-500 hover:text-slate-800'}`}
            >
              <LayoutGrid size={16} /> Tampilan Grid
            </button>
            <button 
              onClick={() => setView('map')}
              className={`flex items-center gap-2 px-4 py-2 rounded text-[13px] font-bold transition-all ${view === 'map' ? 'bg-white shadow-sm text-slate-900 border border-slate-200/50' : 'text-slate-500 hover:text-slate-800'}`}
            >
              <MapIcon size={16} /> Tampilan Peta
            </button>
          </div>
        </div>

        {/* Conditional View */}
        {view === 'grid' ? (
          <div>
            <div className="flex items-center gap-3 mb-6">
              <LayoutGrid size={24} className="text-slate-900" />
              <h2 className="text-2xl font-bold text-slate-900 font-display">Tampilan Grid</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              {projects.map((p, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -5 }}
                  className="relative bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm transition-all hover:shadow-xl group flex flex-col h-full"
                >
                  <Link to="/proyek/jembatan-desa-lembah-harapan" className="absolute inset-0 z-10" />
                  <div className="relative h-[220px] shrink-0">
                    <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className={`absolute top-4 left-4 px-3 py-1.5 rounded-full text-[11px] font-bold tracking-widest uppercase shadow-sm ${
                      p.status === 'Selesai' ? 'bg-[#0f172a] text-white' : 
                      p.status === 'Perencanaan' ? 'bg-[#fef3c7] text-[#b45309]' :
                      'bg-[#e8f5ed] text-[#14532d]'
                    }`}>
                      {p.status}
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
                    <h3 className="text-[17px] font-bold text-slate-900 mb-2 leading-tight group-hover:text-[#14532d] transition-colors">{p.title}</h3>
                    <div className="flex items-center gap-1.5 text-slate-400 text-[13px] mb-4">
                      <MapPin size={14} className="text-slate-400 shrink-0" />
                      <span className="font-semibold text-slate-600">{p.loc}</span>
                    </div>
                    
                    <p className="text-[13px] text-slate-600 mb-6 leading-relaxed font-medium flex-1">
                      {p.desc}
                    </p>

                    <div className="space-y-4 pt-4 border-t border-slate-100 mt-auto">
                      <div className="space-y-2">
                         <div className="flex justify-between text-[11px] font-bold">
                          <span className="text-slate-600">Progres</span>
                          <span className="text-slate-900 tracking-wider">{p.progress}%</span>
                        </div>
                        <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: `${p.progress}%` }}
                            transition={{ duration: 1.2, ease: "circOut" }}
                            className={`h-full ${p.status === 'Selesai' ? 'bg-[#0f172a]' : p.status === 'Perencanaan' ? 'bg-[#f59e0b]' : 'bg-[#14532d]'}`}
                          />
                        </div>
                      </div>

                      <div className="flex justify-between items-end pt-2">
                        <div className="space-y-0.5">
                          <span className="text-[10px] text-slate-500 font-bold tracking-wide">Dana Terkumpul</span>
                          <p className="text-[13px] font-bold text-slate-900">{p.terkumpul}</p>
                        </div>
                        <div className="space-y-0.5 text-right">
                          <span className="text-[10px] text-slate-500 font-bold tracking-wide">Total Kebutuhan</span>
                          <p className="text-[13px] font-bold text-slate-900">{p.target}</p>
                        </div>
                      </div>

                      <div className="pt-3 border-t border-slate-100">
                        <Link to="/proyek/jembatan-desa-lembah-harapan" className="relative z-20 flex items-center justify-between w-full text-[13px] font-bold text-slate-800 hover:text-[#14532d] group/btn transition-colors">
                          Lihat Detail <ArrowRight size={16} className="text-slate-400 group-hover/btn:translate-x-1 transition-transform group-hover/btn:text-[#14532d]" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex justify-center">
              <button className="flex items-center gap-2 px-6 py-3 border border-slate-200 rounded-xl text-[14px] font-bold text-slate-700 hover:bg-slate-50 transition-all bg-white shadow-sm">
                Muat Lebih Banyak <ChevronDown size={18} />
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <MapIcon size={24} className="text-slate-900" />
                <h2 className="text-2xl font-bold text-slate-900 font-display">Tampilan Peta</h2>
              </div>
              <button 
                onClick={() => setView('grid')}
                className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-lg text-[13px] font-bold text-slate-700 hover:bg-slate-50 transition-colors bg-white shadow-sm"
              >
                <LayoutGrid size={16} /> Tampilan Grid
              </button>
            </div>

            <div className="bg-[#f0fdf4] rounded-[2rem] border border-[#dcfce7] overflow-hidden flex flex-col md:flex-row h-[600px] shadow-sm">
              {/* Sidebar Peta */}
              <div className="w-full md:w-[280px] bg-white border-r border-[#dcfce7] p-6 flex flex-col shrink-0 overflow-y-auto">
                <h3 className="font-bold text-slate-900 text-[14px] mb-4">Filter Cepat</h3>
                
                <div className="space-y-4 mb-8">
                   <select className="w-full border border-slate-200 rounded-lg px-3 py-2 text-[13px] font-semibold text-slate-700 bg-white focus:outline-none focus:border-[#14532d]">
                    <option>Semua Program</option>
                  </select>

                  <div className="space-y-3 pl-1">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <div className="w-4 h-4 rounded bg-[#14532d] flex items-center justify-center">
                        <Check size={12} className="text-white" />
                      </div>
                      <span className="font-semibold text-slate-700 text-[13px] flex items-center gap-2"><Milestone size={14}/> Jembatan Gantung</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <div className="w-4 h-4 rounded bg-[#14532d] flex items-center justify-center">
                        <Check size={12} className="text-white" />
                      </div>
                      <span className="font-semibold text-slate-700 text-[13px] flex items-center gap-2"><Zap size={14}/> Listrik Masuk Desa</span>
                    </label>
                  </div>

                  <select className="w-full border border-slate-200 rounded-lg px-3 py-2 mt-4 text-[13px] font-semibold text-slate-700 bg-white focus:outline-none focus:border-[#14532d]">
                    <option>Semua Status</option>
                  </select>

                  <div className="space-y-3 pl-1">
                     <div className="flex items-center justify-between">
                       <label className="flex items-center gap-3 cursor-pointer">
                        <div className="w-2 h-2 rounded-full bg-[#f59e0b]"></div>
                        <span className="font-semibold text-slate-600 text-[13px]">Perencanaan</span>
                      </label>
                      <span className="text-[12px] font-bold text-slate-400">5</span>
                     </div>
                     <div className="flex items-center justify-between">
                       <label className="flex items-center gap-3 cursor-pointer">
                        <div className="w-2 h-2 rounded-full bg-[#22c55e]"></div>
                        <span className="font-semibold text-slate-600 text-[13px]">Berjalan</span>
                      </label>
                      <span className="text-[12px] font-bold text-slate-400">12</span>
                     </div>
                     <div className="flex items-center justify-between">
                       <label className="flex items-center gap-3 cursor-pointer">
                        <div className="w-2 h-2 rounded-full bg-[#0f172a]"></div>
                        <span className="font-semibold text-slate-600 text-[13px]">Selesai</span>
                      </label>
                      <span className="text-[12px] font-bold text-slate-400">7</span>
                     </div>
                  </div>
                </div>

                <div className="mt-auto">
                   <h3 className="font-bold text-slate-900 text-[13px] mb-3">Legenda</h3>
                   <div className="space-y-3 pl-1">
                      <div className="flex items-center gap-3">
                         <Milestone size={16} className="text-slate-600" />
                         <span className="text-[12px] font-medium text-slate-600">Jembatan Gantung</span>
                      </div>
                      <div className="flex items-center gap-3">
                         <Zap size={16} className="text-slate-600" />
                         <span className="text-[12px] font-medium text-slate-600">Listrik Masuk Desa</span>
                      </div>
                   </div>
                </div>
              </div>

              {/* Map Area */}
              <div className="flex-1 relative bg-[#e0f2fe] overflow-hidden flex items-center justify-center">
                 {/* Mock Maps Background */}
                 <div className="absolute inset-0 opacity-40 mix-blend-multiply" style={{
                   backgroundImage: `url('https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Indonesia_location_map.svg/1024px-Indonesia_location_map.svg.png')`,
                   backgroundSize: '80%',
                   backgroundPosition: 'center',
                   backgroundRepeat: 'no-repeat'
                 }}></div>

                 <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-slate-800 text-2xl tracking-widest opacity-20">INDONESIA</p>

                 {/* Markers */}
                 <div className="absolute top-[30%] left-[30%]">
                    <div className="w-8 h-8 bg-[#f59e0b] rounded-full text-white font-bold text-sm flex items-center justify-center shadow-lg border-2 border-white transform transition-transform hover:scale-110 cursor-pointer">
                      2
                    </div>
                 </div>

                 <div className="absolute top-[60%] left-[40%] text-center">
                    <div className="w-8 h-8 bg-[#14532d] rounded-full text-white font-bold text-sm flex items-center justify-center shadow-lg border-2 border-white transform transition-transform hover:scale-110 cursor-pointer mb-1 mx-auto">
                      8
                    </div>
                    <div className="bg-white rounded-full p-1 shadow-md inline-block">
                      <Zap size={14} className="text-slate-600"/>
                    </div>
                 </div>

                 <div className="absolute top-[45%] left-[50%] text-center">
                    <div className="w-8 h-8 bg-[#22c55e] rounded-full text-white font-bold text-sm flex items-center justify-center shadow-lg border-2 border-white transform transition-transform hover:scale-110 cursor-pointer mb-1 mx-auto">
                      3
                    </div>
                    <div className="bg-white rounded-full p-1 shadow-md inline-block">
                      <Milestone size={14} className="text-slate-600"/>
                    </div>
                 </div>

                  <div className="absolute top-[40%] left-[60%] text-center">
                    <div className="w-8 h-8 bg-[#14532d] rounded-full text-white font-bold text-sm flex items-center justify-center shadow-lg border-2 border-white transform transition-transform hover:scale-110 cursor-pointer mb-1 mx-auto">
                      6
                    </div>
                 </div>

                 <div className="absolute top-[65%] left-[65%] text-center">
                    <div className="w-8 h-8 bg-[#22c55e] rounded-full text-white font-bold text-sm flex items-center justify-center shadow-lg border-2 border-white transform transition-transform hover:scale-110 cursor-pointer mb-1 mx-auto">
                      2
                    </div>
                 </div>

                 <div className="absolute top-[50%] left-[75%]">
                    <div className="w-8 h-8 bg-[#22c55e] rounded-full text-white font-bold text-sm flex items-center justify-center shadow-lg border-2 border-white transform transition-transform hover:scale-110 cursor-pointer">
                      2
                    </div>
                    <p className="text-[10px] font-bold text-[#14532d] mt-1 drop-shadow-md">MALUKU</p>
                 </div>

                 <div className="absolute top-[45%] right-[15%]">
                    <div className="w-8 h-8 bg-[#f59e0b] rounded-full text-white font-bold text-sm flex items-center justify-center shadow-lg border-2 border-white transform transition-transform hover:scale-110 cursor-pointer">
                      1
                    </div>
                     <p className="text-[10px] font-bold text-[#14532d] mt-1 drop-shadow-md">PAPUA</p>
                 </div>

                 {/* Map Controls */}
                 <div className="absolute right-4 bottom-4 flex flex-col gap-2">
                   <div className="bg-white rounded-lg shadow-md border border-slate-200 overflow-hidden flex flex-col">
                     <button className="p-2 text-slate-600 hover:bg-slate-50 transition-colors border-b border-slate-200">
                       <Plus size={18} />
                     </button>
                     <button className="p-2 text-slate-600 hover:bg-slate-50 transition-colors">
                       <Minus size={18} />
                     </button>
                   </div>
                   <button className="bg-white p-2 text-slate-600 hover:bg-slate-50 transition-colors rounded-lg shadow-md border border-slate-200">
                     <LocateFixed size={18} />
                   </button>
                 </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
