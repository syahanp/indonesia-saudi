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
import { useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { MapContainer, TileLayer, Marker, Popup, ZoomControl } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import ProyekCard from "../components/ProyekCard";
import L from 'leaflet';

// Fix missing marker icons
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

const getIconSvg = (type: string) => {
  if (type === 'jembatan') {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h13l4-3.5L18 6Z"/><path d="M12 13v8"/><path d="M12 3v3"/></svg>`;
  }
  return `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/></svg>`;
}

const createMarkerIcon = (type: string, status: string) => {
  const bgColorMap: Record<string, string> = {
    'Perencanaan': 'bg-[#f59e0b]',
    'Berjalan': 'bg-[#22c55e]',
    'Selesai': 'bg-[#0f172a]' // primary-deep
  };
  const colorClass = bgColorMap[status] || 'bg-[#0f172a]';

  const htmlString = `
    <div class="w-8 h-8 ${colorClass} rounded-full text-white flex items-center justify-center shadow-lg border-2 border-white hover:scale-110 transition-transform cursor-pointer">
      ${getIconSvg(type)}
    </div>
  `;

  return L.divIcon({
    html: htmlString,
    className: 'custom-map-marker', // custom class to remove default styling
    iconSize: [32, 32],
    iconAnchor: [16, 16],
    popupAnchor: [0, -16]
  });
};

const genericImg = "https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?auto=format&fit=crop&q=80&w=2070";

export const initialProjects = [
  {
    id: "KJ-2025-0012",
    title: "Jembatan Desa Lembah Harapan",
    loc: "Sulawesi Tengah",
    progress: 80,
    desc: "Pembangunan jembatan gantung untuk menghubungkan desa dengan akses sekolah dan layanan kesehatan.",
    terkumpul: "SAR 420.000",
    target: "SAR 525.000",
    status: "Berjalan",
    type: "jembatan",
    img: "/proyek-asset/ChatGPT Image May 7, 2026, 02_50_32 AM.png",
    lat: -1.43,
    lng: 120.47
  },
  {
    id: "KJ-2025-0013",
    title: "Listrik Masuk Desa Suka Maju",
    loc: "Nusa Tenggara Barat",
    progress: 100,
    desc: "Program penyediaan listrik tenaga surya untuk 120 rumah di desa yang belum terjangkau listrik PLN.",
    terkumpul: "SAR 310.000",
    target: "SAR 310.000",
    status: "Selesai",
    type: "listrik",
    img: "/proyek-asset/ChatGPT Image May 7, 2026, 02_50_37 AM.png",
    lat: -8.58,
    lng: 117.38
  },
  {
    id: "KJ-2025-0014",
    title: "Jembatan Desa Watu Mori",
    loc: "Nusa Tenggara Timur",
    progress: 45,
    desc: "Pembangunan jembatan gantung sepanjang 120 meter untuk akses utama masyarakat.",
    terkumpul: "SAR 180.000",
    target: "SAR 400.000",
    status: "Berjalan",
    type: "jembatan",
    img: "/proyek-asset/ChatGPT Image May 7, 2026, 02_50_41 AM.png",
    lat: -8.6,
    lng: 121.08
  },
  {
    id: "KJ-2025-0015",
    title: "Listrik Masuk Desa Bintang Timur",
    loc: "Sulawesi Selatan",
    progress: 15,
    desc: "Rencana penyediaan listrik solar home system untuk 150 rumah di wilayah terpencil.",
    terkumpul: "SAR 60.000",
    target: "SAR 400.000",
    status: "Perencanaan",
    type: "listrik",
    img: "/proyek-asset/ChatGPT Image May 7, 2026, 02_50_46 AM.png",
    lat: -4.11,
    lng: 119.98
  },
  {
    id: "KJ-2025-0016",
    title: "Jembatan Desa Mekar Jaya",
    loc: "Kalimantan Barat",
    progress: 60,
    desc: "Pembangunan jembatan gantung untuk menghubungkan desa dengan pusat ekonomi dan pendidikan.",
    terkumpul: "SAR 240.000",
    target: "SAR 400.000",
    status: "Berjalan",
    type: "jembatan",
    img: "/proyek-asset/ChatGPT Image May 7, 2026, 02_50_52 AM.png",
    lat: -0.1,
    lng: 111.4
  },
  {
    id: "KJ-2025-0017",
    title: "Listrik Masuk Desa Sinar Harapan",
    loc: "Maluku",
    progress: 10,
    desc: "Perencanaan instalasi listrik untuk 80 rumah di wilayah kepulauan.",
    terkumpul: "SAR 25.000",
    target: "SAR 250.000",
    status: "Perencanaan",
    type: "listrik",
    img: "/proyek-asset/ChatGPT Image May 7, 2026, 02_51_01 AM.png",
    lat: -3.2,
    lng: 129.5
  },
  {
    id: "KJ-2025-0018",
    title: "Jembatan Sungai Deli",
    loc: "Sumatera Utara",
    progress: 30,
    desc: "Renovasi jembatan utama untuk kelancaran transportasi warga antar desa.",
    terkumpul: "SAR 150.000",
    target: "SAR 500.000",
    status: "Berjalan",
    type: "jembatan",
    img: "/proyek-asset/ChatGPT Image May 7, 2026, 02_51_31 AM.png",
    lat: 3.59,
    lng: 98.67
  },
  {
    id: "KJ-2025-0019",
    title: "Listrik Masuk Desa Siak",
    loc: "Riau",
    progress: 100,
    desc: "Instalasi tenaga surya berkapasitas tinggi untuk penerangan desa di malam hari.",
    terkumpul: "SAR 200.000",
    target: "SAR 200.000",
    status: "Selesai",
    type: "listrik",
    img: "/proyek-asset/ChatGPT Image May 7, 2026, 02_50_32 AM.png",
    lat: 0.50,
    lng: 101.44
  },
  {
    id: "KJ-2025-0020",
    title: "Jembatan Gantung Garut Selatan",
    loc: "Jawa Barat",
    progress: 90,
    desc: "Akses vital bagi perekonomian warga yang terhambat kondisi sungai.",
    terkumpul: "SAR 360.000",
    target: "SAR 400.000",
    status: "Berjalan",
    type: "jembatan",
    img: "/proyek-asset/ChatGPT Image May 7, 2026, 02_50_37 AM.png",
    lat: -7.21,
    lng: 107.89
  },
  {
    id: "KJ-2025-0021",
    title: "Jembatan Anak Air",
    loc: "Sumatera Barat",
    progress: 10,
    desc: "Rencana pembangunan jembatan gantung pertama untuk pemukiman terpelosok.",
    terkumpul: "SAR 30.000",
    target: "SAR 300.000",
    status: "Perencanaan",
    type: "jembatan",
    img: "/proyek-asset/ChatGPT Image May 7, 2026, 02_50_41 AM.png",
    lat: -0.94,
    lng: 100.36
  },
  {
    id: "KJ-2025-0022",
    title: "Listrik Masuk Desa Ngadas",
    loc: "Jawa Timur",
    progress: 50,
    desc: "Proses pemasangan jalur listrik di kawasan pegunungan terisolir.",
    terkumpul: "SAR 125.000",
    target: "SAR 250.000",
    status: "Berjalan",
    type: "listrik",
    img: "/proyek-asset/ChatGPT Image May 7, 2026, 02_50_46 AM.png",
    lat: -8.0,
    lng: 112.63
  },
  {
    id: "KJ-2025-0023",
    title: "Penerangan Distrik Sentani",
    loc: "Papua",
    progress: 100,
    desc: "Sistem pencahayaan desa menggunakan panel surya komunal.",
    terkumpul: "SAR 450.000",
    target: "SAR 450.000",
    status: "Selesai",
    type: "listrik",
    img: "/proyek-asset/ChatGPT Image May 7, 2026, 02_50_52 AM.png",
    lat: -2.53,
    lng: 140.71
  },
  {
    id: "KJ-2025-0024",
    title: "Jembatan Gantung Meulaboh",
    loc: "Aceh",
    progress: 0,
    desc: "Perencanaan pengadaan jembatan bambu menjadi jembatan baja.",
    terkumpul: "SAR 0",
    target: "SAR 550.000",
    status: "Perencanaan",
    type: "jembatan",
    img: "/proyek-asset/ChatGPT Image May 7, 2026, 02_51_01 AM.png",
    lat: 4.14,
    lng: 96.12
  },
  {
    id: "KJ-2025-0025",
    title: "Listrik Masuk Desa Mahakam",
    loc: "Kalimantan Timur",
    progress: 75,
    desc: "Pengembangan infrastruktur listrik agar anak sekolah dapat belajar di malam hari.",
    terkumpul: "SAR 225.000",
    target: "SAR 300.000",
    status: "Berjalan",
    type: "listrik",
    img: "/proyek-asset/ChatGPT Image May 7, 2026, 02_51_31 AM.png",
    lat: -0.50,
    lng: 117.15
  },
  {
    id: "KJ-2025-0026",
    title: "Jembatan Minahasa",
    loc: "Sulawesi Utara",
    progress: 100,
    desc: "Menyatukan dua desa yang terpisah aliran sungai deras.",
    terkumpul: "SAR 600.000",
    target: "SAR 600.000",
    status: "Selesai",
    type: "jembatan",
    img: "/proyek-asset/ChatGPT Image May 7, 2026, 02_50_32 AM.png",
    lat: 1.28,
    lng: 124.78
  },
  {
    id: "KJ-2025-0027",
    title: "Listrik Masuk Desa Kintamani",
    loc: "Bali",
    progress: 20,
    desc: "Tahap awal pemasangan tiang listrik dan gardu induk desa.",
    terkumpul: "SAR 40.000",
    target: "SAR 200.000",
    status: "Berjalan",
    type: "listrik",
    img: "/proyek-asset/ChatGPT Image May 7, 2026, 02_50_37 AM.png",
    lat: -8.24,
    lng: 115.32
  }
];

export default function Proyek() {
  const { t } = useTranslation();
  const [view, setView] = useState<'grid' | 'map'>('grid');
  
  const [search, setSearch] = useState('');
  const [program, setProgram] = useState(t("proyek.all_programs"));
  const [status, setStatus] = useState(t("proyek.all_statuses"));
  const [provinsi, setProvinsi] = useState(t("proyek.all_provinces"));

  // Map filters
  const [mapProgram, setMapProgram] = useState(t("proyek.all_programs"));
  const [mapStatus, setMapStatus] = useState(t("proyek.all_statuses"));

  const filteredGridProjects = useMemo(() => {
    return initialProjects.filter(p => {
      if (search && !p.title.toLowerCase().includes(search.toLowerCase()) && !p.loc.toLowerCase().includes(search.toLowerCase())) return false;
      
      if (program !== t("proyek.all_programs")) {
        if (program === t("programs.jembatan.title") && p.type !== 'jembatan') return false;
        if (program === t("programs.listrik.title") && p.type !== 'listrik') return false;
      }
      
      if (status !== t("proyek.all_statuses")) {
        const currentStatus = p.status === 'Selesai' ? t("proyek.status_selesai") : 
                             p.status === 'Perencanaan' ? t("proyek.status_perencanaan") : 
                             t("proyek.status_berjalan");
        if (currentStatus !== status) return false;
      }
      
      if (provinsi !== t("proyek.all_provinces") && p.loc !== provinsi) return false;
      
      return true;
    });
  }, [search, program, status, provinsi, t]);

  const filteredMapProjects = useMemo(() => {
    return initialProjects.filter(p => {
      if (mapProgram !== t("proyek.all_programs")) {
        if (mapProgram === t("programs.jembatan.title") && p.type !== 'jembatan') return false;
        if (mapProgram === t("programs.listrik.title") && p.type !== 'listrik') return false;
      }
      if (mapStatus !== t("proyek.all_statuses")) {
        const currentStatus = p.status === 'Selesai' ? t("proyek.status_selesai") : 
                             p.status === 'Perencanaan' ? t("proyek.status_perencanaan") : 
                             t("proyek.status_berjalan");
        if (currentStatus !== mapStatus) return false;
      }
      return true;
    });
  }, [mapProgram, mapStatus, t]);

  const mapStats = useMemo(() => {
    const base = initialProjects.filter(p => {
      if (mapProgram !== t("proyek.all_programs")) {
        if (mapProgram === t("programs.jembatan.title") && p.type !== 'jembatan') return false;
        if (mapProgram === t("programs.listrik.title") && p.type !== 'listrik') return false;
      }
      return true;
    });

    return {
      perencanaan: base.filter(p => p.status === 'Perencanaan').length,
      berjalan: base.filter(p => p.status === 'Berjalan').length,
      selesai: base.filter(p => p.status === 'Selesai').length,
    }
  }, [mapProgram]);

  const resetFilters = () => {
    setSearch('');
    setProgram(t("proyek.all_programs"));
    setStatus(t("proyek.all_statuses"));
    setProvinsi(t("proyek.all_provinces"));
  };

  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <div className="relative pt-16 pb-32 lg:pb-48">
        <div className="absolute inset-0 z-0">
           <img 
             src={genericImg} 
             alt="Hero" 
             referrerPolicy="no-referrer"
             className="w-full h-full object-cover object-center" 
           />
           <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col justify-center h-full">
          <div className="max-w-2xl">
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-[1.1] mb-4 font-display">
              {t("proyek.hero_title")}
            </h1>
            <p className="text-[15px] lg:text-[16px] text-slate-700 leading-relaxed font-medium mb-8">
              {t("proyek.hero_subtitle")}
            </p>
            
            {/* Breadcrumbs */}
            <div className="text-[13px] text-slate-600 font-semibold mb-6 flex items-center gap-2">
              <Link to="/" className="hover:text-primary-deep transition-colors">{t("nav.beranda")}</Link>
              <span className="opacity-50">&gt;</span>
              <span className="text-slate-900">{t("proyek.hero_title")}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filters */}
        <div className="relative z-20 -mt-20 lg:-mt-28 bg-white rounded-2xl border border-slate-200 p-6 lg:p-8 shadow-xl mb-12 flex flex-col gap-4">
          <h3 className="font-bold text-slate-900 text-[18px]">{t("proyek.filter_title")}</h3>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
            <div>
              <label className="block text-[12px] font-bold text-slate-700 mb-2">{t("proyek.label_search")}</label>
              <div className="relative">
                <input 
                  type="text" 
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder={t("proyek.search_placeholder")} 
                  className="w-full border border-slate-200 rounded-lg pl-4 pr-10 py-3 text-[13px] font-semibold text-slate-700 bg-white focus:outline-none focus:border-primary-deep focus:ring-1 focus:ring-primary-deep shadow-sm" 
                />
                <Search size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" />
              </div>
            </div>
            <div>
              <label className="block text-[12px] font-bold text-slate-700 mb-2">{t("proyek.label_program")}</label>
              <div className="relative">
                <select 
                  value={program}
                  onChange={(e) => setProgram(e.target.value)}
                  className="w-full border border-slate-200 rounded-lg px-4 py-3 text-[13px] font-semibold text-slate-700 bg-white appearance-none focus:outline-none focus:border-primary-deep focus:ring-1 focus:ring-primary-deep shadow-sm"
                >
                  <option>{t("proyek.all_programs")}</option>
                  <option>{t("programs.jembatan.title")}</option>
                  <option>{t("programs.listrik.title")}</option>
                </select>
                <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-600 pointer-events-none" />
              </div>
            </div>
            <div>
              <label className="block text-[12px] font-bold text-slate-700 mb-2">{t("proyek.label_status")}</label>
              <div className="relative">
                <select 
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  className="w-full border border-slate-200 rounded-lg px-4 py-3 text-[13px] font-semibold text-slate-700 bg-white appearance-none focus:outline-none focus:border-primary-deep focus:ring-1 focus:ring-primary-deep shadow-sm"
                >
                  <option>{t("proyek.all_statuses")}</option>
                  <option>{t("proyek.status_perencanaan")}</option>
                  <option>{t("proyek.status_berjalan")}</option>
                  <option>{t("proyek.status_selesai")}</option>
                </select>
                <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-600 pointer-events-none" />
              </div>
            </div>
            <div>
              <label className="block text-[12px] font-bold text-slate-700 mb-2">{t("proyek.label_province")}</label>
              <div className="relative">
                 <select 
                  value={provinsi}
                  onChange={(e) => setProvinsi(e.target.value)}
                  className="w-full border border-slate-200 rounded-lg px-4 py-3 text-[13px] font-semibold text-slate-700 bg-white appearance-none focus:outline-none focus:border-primary-deep focus:ring-1 focus:ring-primary-deep shadow-sm"
                 >
                  <option>{t("proyek.all_provinces")}</option>
                  <option>Aceh</option>
                  <option>Bali</option>
                  <option>Jawa Barat</option>
                  <option>Jawa Timur</option>
                  <option>Kalimantan Barat</option>
                  <option>Kalimantan Timur</option>
                  <option>Maluku</option>
                  <option>Nusa Tenggara Barat</option>
                  <option>Nusa Tenggara Timur</option>
                  <option>Papua</option>
                  <option>Riau</option>
                  <option>Sulawesi Selatan</option>
                  <option>Sulawesi Tengah</option>
                  <option>Sulawesi Utara</option>
                  <option>Sumatera Barat</option>
                  <option>Sumatera Utara</option>
                </select>
                <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-600 pointer-events-none" />
              </div>
            </div>
            <div>
               <button 
                 onClick={resetFilters}
                 className="w-full flex justify-center items-center gap-2 border border-slate-200 rounded-lg px-6 py-3 text-[13px] font-bold text-slate-700 hover:bg-slate-50 transition-colors shadow-sm"
               >
                 <RotateCcw size={16} /> {t("proyek.reset_filter")}
               </button>
            </div>
          </div>
        </div>

        {/* View Toggles & Count */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <p className="text-[13px] text-slate-600 font-semibold shrink-0">
            {t("proyek.projects_found", { count: view === 'grid' ? filteredGridProjects.length : filteredMapProjects.length })}
          </p>
          <div className="flex bg-[#f1f5f9] rounded-lg p-1 border border-slate-200 shrink-0">
            <button 
              onClick={() => setView('grid')}
              className={`flex items-center gap-2 px-4 py-2 rounded text-[13px] font-bold transition-all ${view === 'grid' ? 'bg-white shadow-sm text-slate-900 border border-slate-200/50' : 'text-slate-500 hover:text-slate-800'}`}
            >
              <LayoutGrid size={16} /> {t("proyek.view_grid")}
            </button>
            <button 
              onClick={() => setView('map')}
              className={`flex items-center gap-2 px-4 py-2 rounded text-[13px] font-bold transition-all ${view === 'map' ? 'bg-white shadow-sm text-slate-900 border border-slate-200/50' : 'text-slate-500 hover:text-slate-800'}`}
            >
              <MapIcon size={16} /> {t("proyek.view_map")}
            </button>
          </div>
        </div>

        {/* Conditional View */}
        {view === 'grid' ? (
          <div>
            <div className="flex items-center gap-3 mb-6">
              <LayoutGrid size={24} className="text-slate-900" />
              <h2 className="text-2xl font-bold text-slate-900 font-display">{t("proyek.view_grid")}</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              {filteredGridProjects.map((p, idx) => (
                <ProyekCard key={idx} project={p} />
              ))}
            </div>

            <div className="flex justify-center">
              <button className="flex items-center gap-2 px-6 py-3 border border-slate-200 rounded-xl text-[14px] font-bold text-slate-700 hover:bg-slate-50 transition-all bg-white shadow-sm">
                {t("proyek.load_more")} <ChevronDown size={18} />
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <MapIcon size={24} className="text-slate-900" />
                <h2 className="text-2xl font-bold text-slate-900 font-display">{t("proyek.view_map")}</h2>
              </div>
            </div>

            <div className="bg-primary-light rounded-[2rem] border border-primary-border overflow-hidden flex flex-col md:flex-row h-[600px] shadow-sm">
              {/* Sidebar Peta */}
              <div className="w-full md:w-[280px] bg-white border-r border-primary-border p-6 flex flex-col shrink-0 overflow-y-auto">
                <h3 className="font-bold text-slate-900 text-[14px] mb-4">{t("proyek.quick_filter")}</h3>
                
                <div className="space-y-4 mb-8">
                   <select 
                    value={mapProgram}
                    onChange={(e) => setMapProgram(e.target.value)}
                    className="w-full border border-slate-200 rounded-lg px-3 py-2 text-[13px] font-semibold text-slate-700 bg-white focus:outline-none focus:border-primary-deep"
                   >
                    <option>{t("proyek.all_programs")}</option>
                    <option>{t("programs.jembatan.title")}</option>
                    <option>{t("programs.listrik.title")}</option>
                  </select>

                  <select 
                    value={mapStatus}
                    onChange={(e) => setMapStatus(e.target.value)}
                    className="w-full border border-slate-200 rounded-lg px-3 py-2 mt-4 text-[13px] font-semibold text-slate-700 bg-white focus:outline-none focus:border-primary-deep"
                  >
                    <option>{t("proyek.all_statuses")}</option>
                    <option>{t("proyek.status_perencanaan")}</option>
                    <option>{t("proyek.status_berjalan")}</option>
                    <option>{t("proyek.status_selesai")}</option>
                  </select>

                  <div className="space-y-3 pl-1 pt-4">
                     <div className="flex items-center justify-between">
                       <label className="flex items-center gap-3 cursor-pointer">
                        <div className="w-2 h-2 rounded-full bg-[#f59e0b]"></div>
                        <span className="font-semibold text-slate-600 text-[13px]">{t("proyek.status_perencanaan")}</span>
                      </label>
                      <span className="text-[12px] font-bold text-slate-400">{mapStats.perencanaan}</span>
                     </div>
                     <div className="flex items-center justify-between">
                       <label className="flex items-center gap-3 cursor-pointer">
                        <div className="w-2 h-2 rounded-full bg-[#22c55e]"></div>
                        <span className="font-semibold text-slate-600 text-[13px]">{t("proyek.status_berjalan")}</span>
                      </label>
                      <span className="text-[12px] font-bold text-slate-400">{mapStats.berjalan}</span>
                     </div>
                     <div className="flex items-center justify-between">
                       <label className="flex items-center gap-3 cursor-pointer">
                        <div className="w-2 h-2 rounded-full bg-[#0f172a]"></div>
                        <span className="font-semibold text-slate-600 text-[13px]">{t("proyek.status_selesai")}</span>
                      </label>
                      <span className="text-[12px] font-bold text-slate-400">{mapStats.selesai}</span>
                     </div>
                  </div>
                </div>

                <div className="mt-auto">
                   <h3 className="font-bold text-slate-900 text-[13px] mb-3">{t("proyek.legend")}</h3>
                   <div className="space-y-3 pl-1">
                      <div className="flex items-center gap-3">
                         <Milestone size={16} className="text-slate-600" />
                         <span className="text-[12px] font-medium text-slate-600">{t("programs.jembatan.title")}</span>
                      </div>
                      <div className="flex items-center gap-3">
                         <Zap size={16} className="text-slate-600" />
                         <span className="text-[12px] font-medium text-slate-600">{t("programs.listrik.title")}</span>
                      </div>
                   </div>
                </div>
              </div>

              {/* Map Area */}
              <div className="flex-1 relative bg-[#e0f2fe] overflow-hidden">
                <MapContainer 
                  center={[-2.5, 118]} 
                  zoom={5} 
                  zoomControl={false}
                  style={{ width: '100%', height: '100%' }}
                >
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <ZoomControl position="bottomright" />
                  
                  {filteredMapProjects.map(p => (
                    <Marker key={p.id} position={[p.lat, p.lng]} icon={createMarkerIcon(p.type, p.status)}>
                      <Popup>
                        <div className="text-left w-48">
                          <h4 className="font-bold text-slate-900 mb-1">{p.title}</h4>
                          <span className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-bold tracking-widest uppercase shadow-sm mb-2 ${
                            p.status === 'Selesai' ? 'bg-[#0f172a] text-white' : 
                            p.status === 'Perencanaan' ? 'bg-[#fef3c7] text-[#b45309]' :
                            'bg-primary-light text-primary-deep'
                          }`}>
                            {p.status === 'Selesai' ? t("proyek.status_selesai") : p.status === 'Perencanaan' ? t("proyek.status_perencanaan") : t("proyek.status_berjalan")}
                          </span>
                          <Link to="/proyek/jembatan-desa-lembah-harapan" className="block text-[12px] font-bold text-primary-deep mt-2 hover:underline">
                            {t("proyek.labels.details")} &rarr;
                          </Link>
                        </div>
                      </Popup>
                    </Marker>
                  ))}
                </MapContainer>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
