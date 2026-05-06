/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Routes, Route, Link } from "react-router-dom";
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
  Home,
  Coins
} from "lucide-react";

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-20">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary-deep rounded-lg flex items-center justify-center text-white">
            <TreePine size={24} />
          </div>
          <div>
            <h1 className="text-xl font-bold text-primary-deep leading-tight uppercase tracking-wide">YAYASAN</h1>
            <p className="text-xl font-bold text-primary-deep leading-tight uppercase tracking-widest mt-[-4px]">KRISNA</p>
            <p className="text-[10px] text-slate-500 font-medium">Berbagi untuk Negeri</p>
          </div>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          {["Beranda", "Proyek", "Program", "Dampak & Laporan", "Tentang Kami"].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().replace(/ /g, "-")}`}
              className={`text-sm font-medium transition-colors ${item === "Beranda" ? "text-primary-deep border-b-2 border-primary-deep pb-1" : "text-slate-600 hover:text-primary-deep"}`}
            >
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button className="p-2 text-slate-600 hover:text-primary-deep transition-colors">
            <Globe size={20} />
          </button>
          <button className="bg-primary-deep text-white px-5 py-2.5 rounded-full font-semibold flex items-center gap-2 hover:bg-primary-mid transition-all shadow-lg shadow-primary-deep/20">
            <Heart size={18} fill="currentColor" />
            <span className="hidden sm:inline">Donasi</span>
          </button>
        </div>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative pt-20 overflow-hidden">
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
    
    <div className="absolute top-0 right-0 w-full lg:w-3/5 h-full z-0">
      <div className="absolute inset-0 bg-gradient-to-r from-[#f8f9fa] via-[#f8f9fa]/20 to-transparent lg:z-10"></div>
      <img 
        src="https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?auto=format&fit=crop&q=80&w=2070" 
        alt="Children on bridge" 
        className="w-full h-full object-cover lg:object-right"
      />
    </div>

    {/* Stats Card Overlay */}
    <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 translate-y-12 lg:translate-y-24">
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
              <Home size={32} strokeWidth={1.5} />
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
      img: "https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?auto=format&fit=crop&q=80&w=1080",
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
      img: "https://images.unsplash.com/photo-1509391366360-fe58f967ad76?auto=format&fit=crop&q=80&w=1080",
      icon: <Zap className="text-primary-deep" size={24} />
    }
  ];

  return (
    <section className="pt-32 pb-24 lg:pt-48 lg:pb-32 bg-white relative z-10">
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
                  <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-xl cursor-pointer hover:bg-slate-50 transition-all hover:scale-105 group">
                    <ArrowRight size={22} className="text-slate-900 group-hover:translate-x-0.5 transition-transform" />
                  </div>
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
      img: "https://images.unsplash.com/photo-1544063259-26d03f05f77a?auto=format&fit=crop&q=80&w=640"
    },
    {
      title: "Listrik Masuk Desa Suka Maju",
      loc: "Nusa Tenggara Barat",
      progress: 100,
      target: "Selesai",
      status: "Selesai",
      img: "https://images.unsplash.com/photo-1594819047050-99def0f5444b?auto=format&fit=crop&q=80&w=640"
    },
    {
      title: "Jembatan Desa Watu Mori",
      loc: "Nusa Tenggara Timur",
      progress: 45,
      target: "Juli 2025",
      status: "Berjalan",
      img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=640"
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
          <a href="#" className="flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-primary-deep transition-colors group">
            Lihat semua proyek <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
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
           <img src="https://cdni.iconscout.com/illustration/premium/thumb/charity-social-service-illustration-download-in-svg-png-gif-formats--giving-help-donation-voluntary-pack-people-illustrations-3721338.png" alt="About" className="max-w-full h-auto" />
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
  <footer className="bg-primary-deep text-white pt-20 pb-8 overflow-hidden relative">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="grid lg:grid-cols-3 gap-12 lg:gap-24 mb-16 items-start">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white border border-white/20">
                <TreePine size={24} />
              </div>
              <p className="text-xl font-bold tracking-widest uppercase">YAYASAN KRISNA</p>
          </div>
          <p className="text-4xl italic font-serif leading-tight opacity-90 max-w-sm">
            "Dan apa saja yang kamu infakkan, maka Allah akan menggantinya..."
          </p>
          <p className="text-sm opacity-60 font-medium">(QS. Saba: 39)</p>
        </div>

        <div className="space-y-6">
          <h4 className="text-sm font-bold uppercase tracking-widest text-brand-accent">Kemitraan Strategis</h4>
          <p className="text-lg leading-relaxed opacity-90">
            Dipercaya oleh para donatur dari Arab Saudi
          </p>
          <p className="text-sm opacity-60 leading-relaxed">
            Kami berterima kasih atas kepercayaan dan dukungan yang berkelanjutan dari para donatur dan mitra.
          </p>
        </div>

        <div className="space-y-6">
          <h4 className="text-sm font-bold uppercase tracking-widest text-brand-accent">Ikuti Perjalanan Kami</h4>
          <div className="flex gap-4">
            {[Facebook, Instagram, Youtube, Mail].map((Icon, idx) => (
              <a key={idx} href="#" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase font-bold tracking-widest opacity-40">
        <p>© 2025 Yayasan KRISNA. Semua Hak Dilindungi.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:opacity-100 transition-opacity">Kebijakan Privasi</a>
          <a href="#" className="hover:opacity-100 transition-opacity">Syarat & Ketentuan</a>
        </div>
      </div>
    </div>

    {/* Abstract background element */}
    <div className="absolute top-0 right-0 w-96 h-96 bg-brand-accent/10 blur-[150px] -translate-y-1/2 translate-x-1/2"></div>
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
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

