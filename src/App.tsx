/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import TentangKami from "./pages/TentangKami";
import ProgramDetail from "./pages/ProgramDetail";
import Proyek from "./pages/Proyek";
import ProyekDetail from "./pages/ProyekDetail";
import DampakLaporan from "./pages/DampakLaporan";
import { 
  ArrowRight, 
  Heart, 
  MapPin, 
  Users, 
  Zap, 
  Milestone, 
  Droplets,
  Globe,
  Instagram,
  Facebook,
  Youtube,
  Mail,
  ChevronRight,
  TrendingUp,
  Award,
  ShieldCheck,
  TreePine,
  Home as HomeIcon,
  Coins,
  Phone
} from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  const isTentangKami = location.pathname === "/tentang-kami";
  const isProyek = location.pathname.startsWith("/proyek");
  const isDampakLaporan = location.pathname === "/dampak-laporan";

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 bg-[#14532d] rounded-xl flex items-center justify-center text-white mb-1 group-hover:bg-[#064e3b] transition-colors shadow-lg">
              <TreePine size={26} strokeWidth={1.5} />
            </div>
            <div>
              <h1 className="text-[20px] font-bold text-[#14532d] leading-none uppercase tracking-wide">YAYASAN</h1>
              <p className="text-[20px] font-extrabold text-[#14532d] leading-none uppercase tracking-widest mt-0.5">KRISNA</p>
              <p className="text-[10px] text-slate-500 font-semibold tracking-wider mt-1">Berbagi untuk Negeri</p>
            </div>
          </Link>
          
          <div className="hidden lg:flex items-center gap-10">
            {["Beranda", "Proyek", "Dampak & Laporan", "Tentang Kami"].map((item) => {
              const isActive = (item === "Tentang Kami" && isTentangKami) || 
                               (item === "Proyek" && isProyek) || 
                               (item === "Dampak & Laporan" && isDampakLaporan) || 
                               (item === "Beranda" && !isTentangKami && !isProyek && !isDampakLaporan && location.pathname === "/");
              const path = item === "Tentang Kami" ? "/tentang-kami" : 
                           item === "Proyek" ? "/proyek" : 
                           item === "Dampak & Laporan" ? "/dampak-laporan" : 
                           item === "Beranda" ? "/" : `/#${item.toLowerCase().replace(/ /g, "-")}`;
              return (
                <Link 
                  key={item} 
                  to={path}
                  className={`text-[13px] font-bold transition-all ${isActive ? "text-[#14532d] border-b-2 border-[#14532d] pb-2" : "text-slate-600 hover:text-[#14532d]"}`}
                >
                  {item}
                </Link>
              )
            })}
          </div>

          <div className="flex items-center gap-4">
            <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:text-[#14532d] hover:border-[#14532d] transition-all">
              <Globe size={18} />
            </button>
            <button className="bg-[#14532d] text-white px-6 py-3 rounded-full text-sm font-bold flex items-center gap-2 hover:bg-[#064e3b] transition-all shadow-lg shadow-[#14532d]/20 hover:-translate-y-0.5">
              <Heart size={16} fill="currentColor" />
              <span className="hidden sm:inline">Donasi Sekarang</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => (
  <section className="relative pt-20">
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-0 right-0 w-full lg:w-3/5 h-full z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#f8f9fa] via-[#f8f9fa]/20 to-transparent lg:z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?auto=format&fit=crop&q=80&w=2070" 
          alt="Children on bridge" 
          className="w-full h-full object-cover lg:object-right"
        />
      </div>
    </div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-24 lg:pt-32 lg:pb-56 relative z-10">
      <div className="max-w-2xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 bg-primary-light text-primary-deep px-4 py-1.5 rounded-full w-fit mb-6 border border-primary-deep/10"
        >
          <Users size={14} />
          <span className="text-xs font-semibold">Didukung oleh para donatur dari Arab Saudi</span>
          <div className="w-4 h-3 bg-green-700 rounded-sm"></div>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl lg:text-7xl font-bold text-primary-deep leading-[1.1] mb-8"
        >
          Mewujudkan Dampak Nyata bagi Masyarakat yang Membutuhkan
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-slate-600 mb-10 leading-relaxed max-w-lg"
        >
          Bersama para donatur, kami menghadirkan akses infrastruktur, energi, dan peluang bagi masyarakat di pelosok Indonesia.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap gap-4"
        >
          <button className="btn-primary">
            <Globe size={18} />
            Lihat Proyek
          </button>
          <button className="btn-secondary">
            <Heart size={18} className="text-primary-deep" />
            Donasi Sekarang
          </button>
        </motion.div>
      </div>
    </div>

    {/* Stats Card Overlay */}
    <div className="relative z-50 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 translate-y-12 lg:translate-y-24">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white rounded-[2rem] p-8 lg:p-10 shadow-xl flex flex-col gap-8 border border-slate-100"
      >
        <h3 className="text-[22px] font-bold text-[#14532d] flex items-center gap-3">
          Dampak Kami <span className="text-[#166534] text-[13px] font-bold leading-none tracking-wide">(Update April 2025)</span>
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-100">
          <div className="flex items-center gap-5 lg:pr-8 pt-4 md:pt-0">
            <div className="w-[68px] h-[68px] rounded-full bg-[#f0fdf4] flex items-center justify-center text-[#14532d] shrink-0 border border-[#bbf7d0]">
              <Users size={32} strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-[28px] font-bold text-slate-900 leading-none mb-1.5">2.450+</p>
              <p className="text-[14px] font-bold text-slate-800 mb-0.5 leading-tight">Penerima Manfaat</p>
              <p className="text-[12px] text-slate-500 leading-tight">Di berbagai wilayah<br className="hidden lg:block"/>Indonesia</p>
            </div>
          </div>

          <div className="flex items-center gap-5 lg:px-8 pt-4 md:pt-0">
            <div className="w-[68px] h-[68px] rounded-full bg-[#f0fdf4] flex items-center justify-center text-[#14532d] shrink-0 border border-[#bbf7d0]">
              <Milestone size={32} strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-[28px] font-bold text-slate-900 leading-none mb-1.5">18</p>
              <p className="text-[14px] font-bold text-slate-800 mb-0.5 leading-tight">Proyek Selesai</p>
              <p className="text-[12px] text-slate-500 leading-tight">Jembatan & Listrik</p>
            </div>
          </div>

          <div className="flex items-center gap-5 lg:px-8 pt-4 md:pt-0">
            <div className="w-[68px] h-[68px] rounded-full bg-[#f0fdf4] flex items-center justify-center text-[#14532d] shrink-0 border border-[#bbf7d0]">
              <HomeIcon size={32} strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-[28px] font-bold text-slate-900 leading-none mb-1.5">12</p>
              <p className="text-[14px] font-bold text-slate-800 mb-0.5 leading-tight">Desa Terdampak</p>
              <p className="text-[12px] text-slate-500 leading-tight">Di 6 Provinsi</p>
            </div>
          </div>

          <div className="flex items-center gap-5 lg:pl-8 pt-4 md:pt-0">
            <div className="w-[68px] h-[68px] rounded-full bg-[#f0fdf4] flex items-center justify-center text-[#14532d] shrink-0 border border-[#bbf7d0]">
              <Coins size={32} strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-[28px] font-bold text-slate-900 leading-none mb-1.5">SAR 6.2M+</p>
              <p className="text-[14px] font-bold text-slate-800 mb-0.5 leading-tight">Donasi Terkumpul</p>
              <p className="text-[12px] text-slate-500 leading-tight">Dari para donatur</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

const ProgramSection = () => {
  const programs = [
    {
      id: "1",
      title: "Jembatan Gantung",
      desc: "Menghubungkan masyarakat dengan akses ke pendidikan, layanan kesehatan, dan aktivitas ekonomi.",
      stats: [
        { label: "Jembatan Terbangun", val: "12" },
        { label: "Proyek Berjalan", val: "4" },
        { label: "Penerima Manfaat", val: "1.850+" },
      ],
      img: "https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?auto=format&fit=crop&q=80&w=2070",
      icon: <Milestone className="text-primary-deep" size={24} />
    },
    {
      id: "2",
      title: "Listrik Masuk Desa",
      desc: "Menyediakan akses listrik yang andal untuk desa-desa yang belum terjangkau.",
      stats: [
        { label: "Desa Teraliri Listrik", val: "6" },
        { label: "Proyek Berjalan", val: "2" },
        { label: "Rumah Tangga Terdampak", val: "600+" },
      ],
      img: "https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?auto=format&fit=crop&q=80&w=2070",
      icon: <Zap className="text-primary-deep" size={24} />
    }
  ];

  return (
    <section className="pt-32 pb-24 lg:pt-48 lg:pb-32 bg-white z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4 font-display text-2xl lg:text-3xl">Program Kami</h2>
            <p className="text-slate-600 max-w-xl text-sm leading-relaxed">
              Kami berfokus pada pembangunan infrastruktur dasar yang membuka akses dan meningkatkan kualitas hidup masyarakat.
            </p>
          </div>
          <a href="#" className="flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-primary-deep transition-colors group">
            Lihat semua program <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {programs.map((p) => (
            <motion.div 
              key={p.id}
              className="bg-[#f8f9fa] rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm"
            >
              {/* Image Area */}
              <div className="relative h-[340px]">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                
                {/* Icon Circle */}
                <div className="absolute top-8 left-8 w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-lg">
                  {p.icon}
                </div>

                <div className="absolute bottom-8 left-10 right-20">
                  <h3 className="text-3xl font-bold text-white mb-3">{p.id}. {p.title}</h3>
                  <p className="text-slate-200 text-sm leading-relaxed max-w-sm">{p.desc}</p>
                </div>

                {/* Arrow Button */}
                <div className="absolute bottom-10 right-8">
                  <Link to="/program/jembatan-gantung" className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-xl cursor-pointer hover:bg-slate-50 transition-all hover:scale-105 group">
                    <ArrowRight size={22} className="text-slate-900 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Stats Area */}
              <div className="bg-white p-10 grid grid-cols-3">
                {p.stats.map((s, idx) => (
                  <div key={idx} className={`px-6 ${idx !== 0 ? 'border-l border-slate-100' : ''}`}>
                    <p className="text-3xl font-bold text-slate-800 mb-2">{s.val}</p>
                    <p className="text-[12px] text-slate-400 font-semibold leading-tight uppercase tracking-widest">{s.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProgressSection = () => {
  const projects = [
    {
      title: "Jembatan Desa Lembah Harapan",
      loc: "Sulawesi Tengah",
      progress: 80,
      target: "Mei 2025",
      status: "Berjalan",
      img: "https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?auto=format&fit=crop&q=80&w=2070"
    },
    {
      title: "Listrik Masuk Desa Suka Maju",
      loc: "Nusa Tenggara Barat",
      progress: 100,
      target: "Selesai",
      status: "Selesai",
      img: "https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?auto=format&fit=crop&q=80&w=2070"
    },
    {
      title: "Jembatan Desa Watu Mori",
      loc: "Nusa Tenggara Timur",
      progress: 45,
      target: "Juli 2025",
      status: "Berjalan",
      img: "https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?auto=format&fit=crop&q=80&w=2070"
    }
  ];

  return (
    <section className="py-24 bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4 font-display text-2xl lg:text-3xl">Perkembangan Terbaru</h2>
            <p className="text-slate-600 text-sm leading-relaxed">Lihat bagaimana dukungan Anda memberikan perubahan nyata di lapangan.</p>
          </div>
          <Link to="/proyek" className="flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-primary-deep transition-colors group">
            Lihat semua proyek <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {projects.map((p, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -5 }}
              className="bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-sm transition-all hover:shadow-xl group"
            >
              <div className="relative h-64 overflow-hidden">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className={`absolute top-6 left-6 px-5 py-2 rounded-full text-[11px] font-bold tracking-widest uppercase ${p.status === 'Selesai' ? 'bg-[#dcfce7] text-[#166534]' : 'bg-[#e8f5ed] text-[#14532d]'}`}>
                  {p.status}
                </div>
              </div>
              
              <div className="p-10">
                <h3 className="text-xl font-bold text-slate-900 mb-2 leading-tight group-hover:text-primary-deep transition-colors">{p.title}</h3>
                <div className="flex items-center gap-2 text-slate-400 text-sm mb-8">
                  <MapPin size={16} className="text-slate-400" />
                  <span className="font-medium text-slate-500">{p.loc}</span>
                </div>
                
                <p className="text-sm text-slate-500 mb-8 leading-relaxed font-medium">
                  {p.status === 'Selesai' ? '120 rumah kini telah mendapatkan akses listrik.' : `Progres pembangunan telah mencapai ${p.progress}%. Target selesai: ${p.target}`}
                </p>

                <div className="space-y-4">
                  <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${p.progress}%` }}
                      transition={{ duration: 1.2, ease: "circOut" }}
                      className={`h-full ${p.status === 'Selesai' ? 'bg-[#14532d]' : 'bg-[#14532d]'}`}
                    />
                  </div>
                  <div className="flex justify-end text-[12px] font-bold text-slate-900 tracking-wider">
                    {p.progress}%
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
          
          <button className="absolute -right-7 top-1/2 -translate-y-1/2 w-14 h-14 bg-white rounded-full shadow-xl flex items-center justify-center border border-slate-50 hover:bg-slate-50 transition-all hover:scale-110 active:scale-95 hidden xl:flex z-10 group">
            <ChevronRight size={28} className="text-slate-900" />
          </button>
        </div>
      </div>
    </section>
  );
};

const AboutSection = () => (
  <section className="py-24 bg-[#f1f3f1]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="bg-white/50 p-8 lg:p-12 rounded-[2rem] border border-white flex items-center justify-center">
           <img src="https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?auto=format&fit=crop&q=80&w=2070" alt="About" className="max-w-full h-auto rounded-3xl" />
        </div>
        
        <div className="space-y-12">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Tentang Yayasan KRISNA</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Yayasan KRISNA adalah organisasi nirlaba yang berkomitmen meningkatkan kualitas hidup masyarakat di daerah terpencil melalui pembangunan infrastruktur dan program pengembangan komunitas.
            </p>
            <button className="flex items-center gap-2 text-primary-deep font-bold border-b-2 border-primary-deep pb-1 hover:text-primary-mid hover:border-primary-mid transition-all">
              Pelajari Lebih Lanjut <ArrowRight size={18} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-primary-deep shadow-sm">
                <ShieldCheck size={20} />
              </div>
              <h4 className="font-bold text-slate-800">Transparansi 100%</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Setiap donasi digunakan sesuai tujuan program dan dapat dipertanggungjawabkan.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-primary-deep shadow-sm">
                <Users size={20} />
              </div>
              <h4 className="font-bold text-slate-800">Berbasis Komunitas</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Kami bekerja bersama masyarakat lokal untuk menciptakan dampak yang berkelanjutan.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-primary-deep shadow-sm">
                <TrendingUp size={20} />
              </div>
              <h4 className="font-bold text-slate-800">Dampak Berkelanjutan</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Kami menghadirkan solusi jangka panjang untuk manfaat bagi generasi mendatang.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-[#033120] text-white pt-24 pb-12 overflow-hidden relative border-t border-[#14532d]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-16 mb-20 items-start">
        {/* Brand */}
        <div className="col-span-2 lg:col-span-1 space-y-6">
          <div className="flex items-center gap-3">
             <div className="w-12 h-12 bg-[#14532d] shadow-inner rounded-xl flex items-center justify-center text-white border border-[#166534]">
                <TreePine size={28} strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-[18px] font-bold tracking-wide uppercase leading-none">YAYASAN</p>
                <p className="text-[18px] font-extrabold tracking-widest uppercase leading-none mt-0.5">KRISNA</p>
                <p className="text-[10px] text-slate-300 font-medium tracking-wider mt-1 block">Berbagi untuk Negeri</p>
              </div>
          </div>
        </div>

        {/* Tautan Cepat */}
        <div className="space-y-6">
          <h4 className="text-[15px] font-bold text-white mb-6">Tautan Cepat</h4>
          <ul className="space-y-4 text-[13px] text-slate-300 font-medium">
            <li><Link to="/" className="hover:text-white transition-colors">Beranda</Link></li>
            <li><Link to="/proyek" className="hover:text-white transition-colors">Proyek</Link></li>
            <li><Link to="/dampak-laporan" className="hover:text-white transition-colors">Dampak & Laporan</Link></li>
            <li><Link to="/tentang-kami" className="hover:text-white flex items-center gap-2 group transition-colors">
              Tentang Kami <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link></li>
          </ul>
        </div>

        {/* Hubungi Kami */}
        <div className="space-y-6">
          <h4 className="text-[15px] font-bold text-white mb-6">Hubungi Kami</h4>
          <ul className="space-y-4 text-[13px] text-slate-300 font-medium">
            <li className="flex gap-3 items-center"><Phone size={16} className="text-[#a7f3d0]"/> +62 21 1234 5678</li>
            <li className="flex gap-3 items-center"><Mail size={16} className="text-[#a7f3d0]"/> info@yayasankrisna.org</li>
            <li className="flex gap-3 items-start"><MapPin size={16} className="text-[#a7f3d0] shrink-0 mt-0.5"/> 
              <span className="leading-relaxed">Jl. Kebon Nanas No. 10<br/>Jakarta Selatan 12345</span>
            </li>
          </ul>
        </div>

        {/* Ikuti Kami */}
        <div className="space-y-6">
          <h4 className="text-[15px] font-bold text-white mb-6">Ikuti Kami</h4>
          <div className="flex gap-4">
            {[Facebook, Instagram, Youtube, Mail].map((Icon, idx) => (
              <a key={idx} href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 hover:border-white transition-all text-slate-300 hover:text-white">
                <Icon size={18} strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </div>

        {/* Didukung oleh */}
        <div className="col-span-2 lg:col-span-1 border border-white/10 p-6 rounded-2xl bg-white/5 backdrop-blur-sm self-stretch flex flex-col justify-center">
          <h4 className="text-[13px] font-bold text-white mb-4 leading-relaxed">Didukung oleh para donatur<br/>dari Arab Saudi <span className="bg-green-700 text-[10px] px-1.5 py-0.5 rounded ml-2 font-bold !text-white align-middle">SA</span></h4>
          <p className="text-xl font-bold font-serif text-[#a7f3d0] text-right mt-2 drop-shadow-sm" style={{fontFamily: "Arial, sans-serif"}}>شكراً لدعمكم المستمر</p>
        </div>
      </div>

      <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-center md:items-center text-center text-[11px] font-medium tracking-wide text-slate-400">
        <p>© 2025 Yayasan KRISNA. Semua Hak Dilindungi.</p>
      </div>
    </div>
  </footer>
);

const Home = () => {
  return (
    <>
      <Hero />
      <ProgramSection />
      <ProgressSection />
      <AboutSection />
    </>
  );
};

export default function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tentang-kami" element={<TentangKami />} />
          <Route path="/program/:id" element={<ProgramDetail />} />
          <Route path="/proyek" element={<Proyek />} />
          <Route path="/proyek/:id" element={<ProyekDetail />} />
          <Route path="/dampak-laporan" element={<DampakLaporan />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

