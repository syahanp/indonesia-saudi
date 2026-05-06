import { 
  Heart, 
  Milestone, 
  Users, 
  MapPin,
  CheckCircle2,
  Handshake,
  Home, 
  Zap, 
  HeartHandshake, 
  ShieldCheck, 
  Leaf, 
  UsersRound, 
  TrendingUp, 
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

export default function TentangKami() {
  const genericImg = "https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?auto=format&fit=crop&q=80&w=2070";

  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <div className="relative pt-16 pb-32 lg:pb-48 mb-12">
        <div className="absolute inset-0 z-0">
           <img src={genericImg} alt="Hero" className="w-full h-full object-cover object-center" />
           <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-[13px] text-slate-600 font-semibold mb-6 flex items-center gap-2">
            <Link to="/" className="hover:text-primary-deep transition-colors">Beranda</Link>
            <span className="opacity-50">&gt;</span>
            <span className="text-slate-900">Tentang Kami</span>
          </div>

          <div className="max-w-2xl">
            <p className="text-xs font-bold text-slate-500 tracking-widest uppercase mb-4">TENTANG YAYASAN BULAN SABIT BIRU</p>
            <h1 className="text-4xl lg:text-5xl xl:text-[3.5rem] font-bold text-primary-deep leading-[1.1] mb-6 font-display">
              Menghubungkan Kebaikan dari Arab Saudi untuk Indonesia
            </h1>
            <p className="text-[15px] lg:text-[16px] text-slate-700 leading-relaxed font-medium">
              Yayasan Bulan Sabit Biru menjembatani dukungan para donatur dari Arab Saudi untuk menghadirkan perubahan nyata bagi masyarakat di pelosok Indonesia.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats bar */}
        <div className="relative z-20 -mt-20 lg:-mt-28 bg-white rounded-2xl shadow-xl border border-slate-200 p-6 lg:p-8 flex flex-wrap lg:flex-nowrap items-center justify-between gap-6 lg:gap-12 w-full mx-auto left-0 mb-16">
          <div className="flex items-center gap-4 shrink-0">
            <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-primary-deep">
              <Heart size={20} />
            </div>
            <div>
              <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-0.5">Sejak</p>
              <p className="text-xl font-bold text-slate-900 leading-none">2016</p>
              <p className="text-[11px] font-semibold text-slate-400 mt-1">Tahun Berdiri</p>
            </div>
          </div>

          <div className="w-px h-12 bg-slate-200 shrink-0 hidden md:block"></div>

          <div className="flex items-center gap-4 shrink-0">
            <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-primary-deep">
              <Milestone size={24} />
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-900 leading-none">30+</p>
              <p className="text-[11px] font-semibold text-slate-500 mt-1.5 whitespace-nowrap">Proyek Selesai</p>
            </div>
          </div>

          <div className="w-px h-12 bg-slate-200 shrink-0 hidden lg:block"></div>

          <div className="flex items-center gap-4 shrink-0">
            <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-primary-deep">
              <Users size={24} />
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-900 leading-none">10.000+</p>
              <p className="text-[11px] font-semibold text-slate-500 mt-1.5 whitespace-nowrap">Penerima Manfaat</p>
            </div>
          </div>

          <div className="w-px h-12 bg-slate-200 shrink-0 hidden lg:block"></div>

          <div className="flex items-center gap-4 shrink-0">
             <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-primary-deep">
              <MapPin size={24} />
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-900 leading-none">10</p>
              <p className="text-[11px] font-semibold text-slate-500 mt-1.5 whitespace-nowrap">Provinsi</p>
            </div>
          </div>
        </div>

        {/* Indonesia x Saudi Arabia */}
        <div className="text-center mb-16 pt-12 lg:pt-0">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-deep font-display flex items-center justify-center gap-4">
            Indonesia <span className="text-slate-300 font-normal">x</span> Saudi Arabia
          </h2>
          <p className="text-slate-600 mt-3 font-medium">Dua Kekuatan, Satu Tujuan: Dampak Nyata</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-32 items-stretch">
          {/* Indonesia Column */}
          <div className="bg-[#f8f9fa] rounded-[2.5rem] p-10 flex flex-col items-center text-center border border-slate-100 relative">
            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm absolute -top-7 left-1/2 -translate-x-1/2">
              <div className="w-7 h-7 rounded-full bg-red-600 overflow-hidden relative border border-slate-100">
                 <div className="absolute inset-0 bg-white bottom-1/2"></div>
              </div>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4 mt-2">Indonesia</h3>
            <p className="text-sm text-slate-600 mb-8 font-medium leading-relaxed">Banyak daerah di pelosok Indonesia masih menghadapi tantangan:</p>
            <ul className="text-left space-y-4 mb-10 w-full text-[13px] text-slate-700">
              {["Infrastruktur terbatas", "Akses listrik minim", "Akses pendidikan dan kesehatan sulit", "Peluang ekonomi terbatas"].map((item, i) => (
                <li key={i} className="flex gap-3 items-start font-medium leading-tight">
                  <CheckCircle2 size={18} className="text-slate-400 shrink-0" /> 
                  <span className="-mt-0.5">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-auto w-full h-44 rounded-2xl overflow-hidden shrink-0">
              <img src={genericImg} alt="Indonesia" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Center Interaction Column */}
          <div className="flex flex-col items-center text-center justify-center py-12 px-6 relative">
            <div className="w-20 h-20 bg-white rounded-full shadow-2xl flex items-center justify-center mb-8 border border-slate-50 z-10 shrink-0 transform hover:scale-105 transition-transform duration-500">
              <Handshake size={32} className="text-primary-deep" />
            </div>
            <h3 className="text-[22px] font-bold text-slate-900 mb-6 leading-snug">Kami menghubungkan<br/>keduanya menjadi<br/>dampak nyata.</h3>
            <p className="text-[13px] text-slate-500 leading-relaxed font-semibold max-w-[260px]">
              Kebaikan dari para donatur di Arab Saudi kami salurkan secara amanah, transparan, dan tepat sasaran untuk membangun masa depan yang lebih baik bagi masyarakat Indonesia.
            </p>
          </div>

          {/* Saudi Column */}
          <div className="bg-primary-light rounded-[2.5rem] p-10 flex flex-col items-center text-center border border-primary-border relative shadow-lg shadow-primary-deep/5">
            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm absolute -top-7 left-1/2 -translate-x-1/2">
              <div className="w-7 h-7 rounded-full bg-primary-deep overflow-hidden flex items-center justify-center border border-slate-100">
                 <span className="text-white text-[8px] font-bold leading-none tracking-tighter">SA</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4 mt-2">Arab Saudi</h3>
            <p className="text-sm text-slate-600 mb-8 font-medium leading-relaxed">Para donatur dari Arab Saudi memiliki kekuatan luar biasa:</p>
            <ul className="text-left space-y-4 mb-10 w-full text-[13px] text-slate-700">
              {["Semangat berbagi yang tinggi", "Donasi berkelanjutan", "Kepedulian terhadap sesama umat manusia", "Nilai-nilai Islam yang mendorong kebaikan"].map((item, i) => (
                <li key={i} className="flex gap-3 items-start font-medium leading-tight">
                  <CheckCircle2 size={18} className="text-primary-deep shrink-0 fill-primary-light" /> 
                  <span className="-mt-0.5">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-auto w-full h-44 rounded-2xl overflow-hidden shrink-0">
              <img src={genericImg} alt="Saudi" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* Tentang Yayasan Bulan Sabit Biru Box */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-32 items-stretch">
          <div className="bg-white p-10 lg:p-14 rounded-[3rem] border border-slate-100 shadow-xl shadow-slate-200/20 flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 font-display">Tentang Yayasan Bulan Sabit Biru</h2>
            <p className="text-slate-600 leading-relaxed text-[15px] mb-12 font-medium">
              Yayasan Bulan Sabit Biru adalah organisasi nirlaba yang berkomitmen meningkatkan kualitas hidup masyarakat di daerah terpencil melalui pembangunan infrastruktur dasar dan program pengembangan komunitas yang berkelanjutan.
            </p>
            
            <div className="space-y-8">
              <div className="flex gap-5 items-start">
                <Home size={28} className="text-primary-deep shrink-0" strokeWidth={1.5} />
                <div>
                  <h4 className="font-bold text-[15px] text-slate-900 mb-1">Berbasis di Indonesia</h4>
                  <p className="text-[13px] text-slate-500 font-medium leading-relaxed">Kami bekerja langsung di lapangan bersama masyarakat lokal.</p>
                </div>
              </div>
              <div className="flex gap-5 items-start">
                <Zap size={28} className="text-primary-deep shrink-0" strokeWidth={1.5} />
                <div>
                  <h4 className="font-bold text-[15px] text-slate-900 mb-1">Fokus pada Infrastruktur & Energi</h4>
                  <p className="text-[13px] text-slate-500 font-medium leading-relaxed">Membangun jembatan, menghadirkan listrik, membuka akses bagi masa depan yang lebih baik.</p>
                </div>
              </div>
              <div className="flex gap-5 items-start">
                <HeartHandshake size={28} className="text-primary-deep shrink-0" strokeWidth={1.5} />
                <div>
                  <h4 className="font-bold text-[15px] text-slate-900 mb-1">Didukung Donatur Internasional</h4>
                  <p className="text-[13px] text-slate-500 font-medium leading-relaxed">Terutama dari para donatur dan mitra dari Arab Saudi.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative rounded-[3rem] overflow-hidden min-h-[400px] lg:min-h-full">
            <img src={genericImg} className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-x-0 bottom-0 top-1/3 bg-gradient-to-t from-primary-deep/90 to-transparent"></div>
            <div className="absolute bottom-10 left-10 right-10 bg-white/95 backdrop-blur-md p-8 rounded-3xl border border-white text-center shadow-2xl">
              <h3 className="text-[22px] font-bold text-slate-900 leading-snug">Terima kasih para donatur<br/>dari Arab Saudi</h3>
              <p className="text-[15px] font-bold text-primary-deep mt-3">Jazakumullahu khairan</p>
            </div>
          </div>
        </div>

        {/* Nilai-nilai & Komitmen Transparansi */}
        <div className="grid xl:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16 mb-40 items-stretch">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-10 font-display">Nilai-Nilai Kami</h2>
            <div className="grid grid-cols-2 gap-x-8 gap-y-12">
              <div className="flex flex-col items-start pr-4">
                <div className="w-14 h-14 rounded-2xl bg-primary-light flex items-center justify-center text-primary-deep mb-5 border border-primary-border">
                  <ShieldCheck size={28} strokeWidth={1.5} />
                </div>
                <h4 className="font-bold text-[15px] text-slate-900 mb-2">Transparansi</h4>
                <p className="text-[13px] text-slate-500 leading-relaxed font-medium">Kami kelola setiap donasi dengan jujur dan terbuka.</p>
              </div>
              <div className="flex flex-col items-start pr-4">
                <div className="w-14 h-14 rounded-2xl bg-primary-light flex items-center justify-center text-primary-deep mb-5 border border-primary-border">
                  <Leaf size={28} strokeWidth={1.5} />
                </div>
                <h4 className="font-bold text-[15px] text-slate-900 mb-2">Keberlanjutan</h4>
                <p className="text-[13px] text-slate-500 leading-relaxed font-medium">Kami bangun solusi jangka panjang dan berdampak.</p>
              </div>
              <div className="flex flex-col items-start pr-4">
                <div className="w-14 h-14 rounded-2xl bg-primary-light flex items-center justify-center text-primary-deep mb-5 border border-primary-border">
                  <UsersRound size={28} strokeWidth={1.5} />
                </div>
                <h4 className="font-bold text-[15px] text-slate-900 mb-2">Kolaborasi</h4>
                <p className="text-[13px] text-slate-500 leading-relaxed font-medium">Kami bekerja bersama masyarakat, donatur, dan mitra.</p>
              </div>
              <div className="flex flex-col items-start pr-4">
                <div className="w-14 h-14 rounded-2xl bg-primary-light flex items-center justify-center text-primary-deep mb-5 border border-primary-border">
                  <TrendingUp size={28} strokeWidth={1.5} />
                </div>
                <h4 className="font-bold text-[15px] text-slate-900 mb-2">Dampak Nyata</h4>
                <p className="text-[13px] text-slate-500 leading-relaxed font-medium">Setiap program kami fokus pada perubahan yang terukur.</p>
              </div>
            </div>
          </div>

          <div className="bg-[#f8f9fa] rounded-[3rem] p-10 lg:p-14 border border-slate-100 flex gap-8 items-center overflow-hidden relative shadow-sm">
            <div className="flex-1 relative z-10 space-y-8 pr-12">
              <h2 className="text-[26px] font-bold text-slate-900 mb-8 font-display">Komitmen Transparansi</h2>
              {[
                "100% dana digunakan untuk program sesuai tujuan yang ditetapkan.",
                "Setiap proyek dapat dipantau progres dan laporannya secara berkala.",
                "Laporan keuangan dan dampak dipublikasikan secara berkala."
              ].map((item, idx) => (
                <div key={idx} className="flex gap-5 items-start">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-lg border border-slate-50 shrink-0">
                    <ShieldCheck size={20} className="text-primary-deep" />
                  </div>
                  <p className="text-[14px] font-medium text-slate-600 leading-relaxed mt-2">{item}</p>
                </div>
              ))}
            </div>
            <div className="w-[45%] h-full absolute right-0 top-0 hidden md:block">
              <div className="absolute inset-0 bg-gradient-to-r from-[#f8f9fa] via-[#f8f9fa]/80 to-transparent z-10 w-1/2"></div>
              <img src={genericImg} className="w-full h-full object-cover grayscale-[0.2]" />
            </div>
          </div>
        </div>

        {/* Dampak yang Telah Kami Wujudkan */}
        <div className="mb-40">
          <h2 className="text-3xl font-bold text-slate-900 mb-10 font-display">Dampak yang Telah Kami Wujudkan</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { label: "Akses sulit dan berbahaya", label2: "Jembatan aman, akses terbuka" },
              { label: "Desa gelap tanpa listrik", label2: "Listrik hadir, kehidupan berubah" },
              { label: "Perjalanan jauh ke sekolah", label2: "Lebih dekat ke pendidikan" }
            ].map((item, idx) => (
              <div key={idx} className="space-y-5">
                <div className="flex gap-3 h-[200px]">
                  <div className="flex-1 relative rounded-2xl overflow-hidden group shadow-md">
                    <img src={genericImg} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] bg-black/40 text-white font-bold backdrop-blur-md border border-white/20 uppercase tracking-widest">Sebelum</div>
                  </div>
                  <div className="flex-1 relative rounded-2xl overflow-hidden group shadow-md border-2 border-primary-deep/10">
                    <img src={genericImg} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] bg-primary-deep/80 text-white font-bold backdrop-blur-md border border-white/20 uppercase tracking-widest">Sesudah</div>
                  </div>
                </div>
                <p className="text-[12px] font-bold text-slate-600 flex justify-between">
                  <span className="flex-1 text-left opacity-60 pr-2">{item.label}</span>
                  <span className="flex-1 text-right text-primary-deep pl-2">{item.label2}</span>
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action & Ayat */}
        <div className="grid lg:grid-cols-[1fr_1.8fr] gap-6">
          <div className="bg-primary-dark text-white p-12 rounded-[3.5rem] flex flex-col justify-center text-center shadow-2xl relative overflow-hidden">
            {/* simple abstract pattern */}
            <div className="absolute right-0 top-0 w-48 h-48 bg-primary-deep rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 opacity-50"></div>
            <div className="relative z-10">
              <p className="text-3xl font-bold mb-6 leading-relaxed bg-primary-dark w-max mx-auto p-4 rounded-3xl" style={{fontFamily: "Arial, sans-serif"}}>
                مَا أَنْفَقْتُمْ مِنْ شَيْءٍ فَهُوَ يُخْلِفُهُ
              </p>
              <p className="text-[15px] font-medium opacity-90 leading-relaxed mb-4 italic text-primary-border">
                "Dan apa saja yang kamu infakkan, maka Allah akan menggantinya..."
              </p>
              <p className="text-[13px] font-bold opacity-60 uppercase tracking-widest">(QS. Saba: 39)</p>
            </div>
          </div>
          
          <div className="bg-[#f8f9fa] rounded-[3.5rem] border border-slate-100 flex overflow-hidden shadow-sm">
            <div className="flex-[1.5] p-12 lg:p-14 flex flex-col justify-center">
              <h2 className="text-[28px] font-bold text-slate-900 mb-5 font-display leading-tight">Mari Jadi Bagian dari Perubahan</h2>
              <p className="text-[14px] text-slate-600 font-medium leading-relaxed mb-10 max-w-sm">
                Setiap donasi adalah amanah yang kami jaga dengan penuh tanggung jawab untuk menghadirkan manfaat yang berkelanjutan bagi masyarakat Indonesia.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-primary-deep text-white px-8 py-4 rounded-full text-sm font-bold flex items-center gap-3 hover:bg-primary-dark transition-all shadow-lg hover:shadow-xl hover:scale-105">
                  <Heart size={18} fill="currentColor" /> Donasi Sekarang
                </button>
                <button className="bg-white text-primary-deep border border-slate-200 px-8 py-4 rounded-full text-sm font-bold flex items-center gap-3 hover:border-primary-deep transition-all hover:bg-slate-50">
                  Lihat Proyek <ArrowRight size={18} />
                </button>
              </div>
            </div>
            <div className="flex-1 hidden md:block">
              <img src={genericImg} className="w-full h-full object-cover rounded-l-[4rem] my-4 mr-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
