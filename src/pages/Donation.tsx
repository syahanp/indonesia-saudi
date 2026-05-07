import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { 
  MapPin, 
  Users, 
  Zap, 
  Target, 
  CalendarDays, 
  CheckCircle2, 
  CreditCard, 
  Smartphone, 
  Landmark, 
  MessageSquare, 
  Phone, 
  Mail, 
  ArrowRight, 
  Heart, 
  Info,
  ShieldCheck,
  Lightbulb,
  Leaf,
  Home,
  Check
} from "lucide-react";

export default function Donation() {
  const { t } = useTranslation();
  const [selectedNominal, setSelectedNominal] = useState<number | string>(250);
  const [paymentMethod, setPaymentMethod] = useState("credit");

  const nominalOptions = [
    { value: 50, label: "Cahaya Harapan" },
    { value: 100, label: "Cahaya Keluarga" },
    { value: 250, label: "Cahaya Kehidupan" },
    { value: 500, label: "Cahaya Desa" },
    { value: 1000, label: "Cahaya Masa Depan" },
  ];

  const projectImg = "https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?auto=format&fit=crop&q=80&w=2070";

  return (
    <div className="pt-24 pb-20 bg-[#fbfcff]">
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="text-[12px] text-slate-500 font-bold mb-8 flex items-center gap-2">
          <Link to="/" className="hover:text-primary-deep transition-colors">Beranda</Link>
          <span className="opacity-50">&gt;</span>
          <Link to="/proyek" className="hover:text-primary-deep transition-colors">Proyek</Link>
          <span className="opacity-50">&gt;</span>
          <Link to="/proyek/1" className="hover:text-primary-deep transition-colors">Listrik Suka Maju</Link>
          <span className="opacity-50">&gt;</span>
          <span className="text-primary-deep">Donasi</span>
        </div>
      </div>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="grid lg:grid-cols-[1.2fr_1.5fr] gap-0 bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm">
          <div className="p-10 lg:p-12 flex flex-col justify-center">
            <span className="inline-block px-4 py-1.5 rounded-full text-[12px] font-bold text-green-600 bg-green-50 mb-6 w-fit">
              Proyek Listrik
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-primary-deep leading-tight mb-4">
              Listrik<br />Desa Suka Maju
            </h1>
            <div className="flex items-center gap-2 text-slate-500 mb-6 text-[14px] font-medium">
              <MapPin size={18} />
              <span>Nusa Tenggara Barat</span>
            </div>
            <p className="text-slate-600 mb-10 leading-relaxed text-[15px]">
              Menyediakan akses listrik andal dan berkelanjutan bagi 120 keluarga di Desa Suka Maju.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t border-slate-50">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-primary-deep font-bold text-[18px]">
                  <Users size={18} />
                  <span>120</span>
                </div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Penerima Manfaat</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-primary-deep font-bold text-[18px]">
                  <Zap size={18} />
                  <span>2,5 KM</span>
                </div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Jaringan Dibangun</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-primary-deep font-bold text-[18px]">
                  <CheckCircle2 size={18} />
                  <span>100%</span>
                </div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Target Tercapai</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-primary-deep font-bold text-[18px]">
                  <CalendarDays size={18} />
                  <span>Mei 2025</span>
                </div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Target Selesai</p>
              </div>
            </div>
          </div>
          <div className="relative h-[400px] lg:h-auto overflow-hidden group">
            <img 
              src={projectImg} 
              alt="Project Village" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
            <Link 
              to="/proyek/1" 
              className="absolute bottom-8 right-8 bg-black/60 backdrop-blur-md text-white px-6 py-3 rounded-full text-[13px] font-bold flex items-center gap-2 border border-white/20 hover:bg-black transition-all"
            >
              Lihat Detail Proyek <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1.8fr_1fr] gap-12 items-start">
          
          {/* Donation Form */}
          <div className="space-y-8">
            <div className="mb-4">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Donasi untuk Proyek Ini</h2>
              <p className="text-slate-500 text-[14px]">Setiap donasi Anda akan membawa cahaya bagi keluarga di Desa Suka Maju.</p>
            </div>

            <div className="bg-white rounded-3xl border border-slate-100 p-8 shadow-sm space-y-10">
              {/* Step 1: Nominal */}
              <section className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary-deep text-white flex items-center justify-center font-bold text-sm shrink-0">1</div>
                  <h3 className="font-bold text-slate-900">Pilih Nominal Donasi</h3>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                  {nominalOptions.map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => setSelectedNominal(opt.value)}
                      className={`relative p-6 rounded-2xl border text-left transition-all group ${
                        selectedNominal === opt.value 
                        ? "border-primary-deep bg-blue-50/50 ring-1 ring-primary-deep shadow-sm" 
                        : "border-slate-100 hover:border-primary-deep/30 bg-white"
                      }`}
                    >
                      <p className={`text-[18px] font-bold mb-1 ${selectedNominal === opt.value ? "text-primary-deep" : "text-slate-900"}`}>
                        AED {opt.value}
                      </p>
                      <p className="text-[12px] font-medium text-slate-500">{opt.label}</p>
                      {selectedNominal === opt.value && (
                        <div className="absolute top-3 right-3 w-5 h-5 rounded-full bg-primary-deep text-white flex items-center justify-center">
                          <Check size={12} strokeWidth={3} />
                        </div>
                      )}
                    </button>
                  ))}
                  <button
                    onClick={() => setSelectedNominal("")}
                    className={`p-6 rounded-2xl border text-left transition-all ${
                      selectedNominal === "" 
                      ? "border-primary-deep bg-blue-50/50 ring-1 ring-primary-deep shadow-sm" 
                      : "border-slate-100 hover:border-primary-deep/30 bg-white"
                    }`}
                  >
                    <p className={`text-[15px] font-bold mb-1 text-slate-900`}>Nominal Lainnya</p>
                    <p className="text-[12px] font-medium text-slate-400">Masukkan nominal</p>
                  </button>
                </div>

                <div className="bg-[#f0f7ff] rounded-2xl p-5 flex items-start gap-4 text-primary-deep border border-blue-100/50">
                  <ShieldCheck size={24} className="shrink-0 mt-0.5" />
                  <p className="text-[12px] font-semibold leading-relaxed">
                    Donasi Anda 100% digunakan untuk pelaksanaan proyek ini. Kami tidak memotong biaya administrasi dari donasi Anda.
                  </p>
                </div>
              </section>

              {/* Step 2: Data Donatur */}
              <section className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary-deep text-white flex items-center justify-center font-bold text-sm shrink-0">2</div>
                  <h3 className="font-bold text-slate-900">Data Donatur</h3>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[13px] font-bold text-slate-700">Nama Lengkap</label>
                    <input 
                      type="text" 
                      placeholder="Masukkan nama lengkap"
                      className="w-full px-5 py-4 rounded-xl border border-slate-100 focus:outline-none focus:ring-2 focus:ring-primary-deep/20 transition-all text-sm font-medium"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[13px] font-bold text-slate-700">Email</label>
                    <input 
                      type="email" 
                      placeholder="Masukkan email Anda"
                      className="w-full px-5 py-4 rounded-xl border border-slate-100 focus:outline-none focus:ring-2 focus:ring-primary-deep/20 transition-all text-sm font-medium"
                    />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-[13px] font-bold text-slate-700">Nomor Telepon</label>
                    <div className="flex gap-3">
                      <div className="flex items-center gap-2 px-4 py-4 rounded-xl border border-slate-100 bg-slate-50 text-sm font-bold shrink-0">
                         <img src="https://flagcdn.com/w20/ae.png" alt="UAE Flag" className="w-5" />
                         <span>+971</span>
                         <span className="text-slate-400 rotate-90">|</span>
                      </div>
                      <input 
                        type="tel" 
                        placeholder="Masukkan nomor telepon"
                        className="w-full px-5 py-4 rounded-xl border border-slate-100 focus:outline-none focus:ring-2 focus:ring-primary-deep/20 transition-all text-sm font-medium"
                      />
                    </div>
                  </div>
                </div>

                <label className="flex items-center gap-3 cursor-pointer group w-fit">
                  <div className="relative">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-5 h-5 rounded-md border-2 border-slate-200 peer-checked:bg-primary-deep peer-checked:border-primary-deep transition-all flex items-center justify-center">
                      <Check size={14} className="text-white transform scale-0 peer-checked:scale-100 transition-transform" strokeWidth={3} />
                    </div>
                  </div>
                  <span className="text-[13px] font-bold text-slate-600 group-hover:text-primary-deep transition-colors">Sembunyikan nama saya (anonim)</span>
                  <Info size={14} className="text-slate-400" />
                </label>
              </section>

              {/* Step 3: Metode Pembayaran */}
              <section className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary-deep text-white flex items-center justify-center font-bold text-sm shrink-0">3</div>
                  <h3 className="font-bold text-slate-900">Metode Pembayaran</h3>
                </div>

                <div className="space-y-3">
                  {[
                    { id: "credit", label: "Kartu Kredit / Debit", icons: ["visa", "mastercard"] },
                    { id: "apple", label: "Apple Pay / Google Pay", icons: ["applepay", "googlepay"] },
                    { id: "transfer", label: "Bank Transfer", icons: ["bank"] },
                    { id: "sadad", label: "SADAD / Pembayaran Instan", icons: ["sadad"] },
                  ].map((method) => (
                    <label 
                      key={method.id}
                      className={`flex items-center justify-between p-5 rounded-2xl border cursor-pointer transition-all ${
                        paymentMethod === method.id 
                        ? "border-primary-deep bg-blue-50/20 ring-1 ring-primary-deep" 
                        : "border-slate-100 hover:border-slate-200"
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                          paymentMethod === method.id ? "border-primary-deep" : "border-slate-300"
                        }`}>
                          {paymentMethod === method.id && <div className="w-2.5 h-2.5 rounded-full bg-primary-deep" />}
                        </div>
                        <input 
                          type="radio" 
                          name="payment" 
                          className="sr-only" 
                          checked={paymentMethod === method.id}
                          onChange={() => setPaymentMethod(method.id)}
                        />
                        <span className="text-[14px] font-bold text-slate-800">{method.label}</span>
                      </div>
                      <div className="flex gap-2">
                        {method.id === "credit" && (
                          <div className="flex gap-2 items-center">
                            <img src="/src/assets/images/regenerated_image_1778134100035.svg" alt="Visa" className="h-4 opacity-80" />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-5 opacity-80" />
                          </div>
                        )}
                        {method.id === "apple" && (
                          <div className="flex gap-2 items-center">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b0/Apple_Pay_logo.svg" alt="Apple Pay" className="h-4 opacity-80" />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Google_Pay_Logo.svg" alt="Google Pay" className="h-4 opacity-80" />
                          </div>
                        )}
                         {method.id === "transfer" && <Landmark size={18} className="text-slate-400" />}
                         {method.id === "sadad" && <div className="w-10 h-5 bg-slate-100 rounded text-[8px] flex items-center justify-center font-bold text-slate-400">SADAD</div>}
                      </div>
                    </label>
                  ))}
                </div>
              </section>

              <div className="pt-6 border-t border-slate-50">
                <button className="w-full bg-primary-deep text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-primary-dark transition-all shadow-xl shadow-primary-deep/20 hover:-translate-y-0.5 group">
                  Lanjutkan Pembayaran <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <p className="text-center text-[12px] text-slate-400 font-medium mt-6 flex items-center justify-center gap-2">
                   <ShieldCheck size={14} /> Transaksi Anda aman dan terenkripsi
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6 sticky top-28">
            {/* Donation Summary */}
            <div className="bg-white rounded-3xl border border-slate-100 p-8 shadow-sm space-y-8">
              <h3 className="text-[18px] font-bold text-slate-900">Ringkasan Donasi</h3>
              
              <div className="space-y-6">
                <div>
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1">Proyek</p>
                  <p className="text-[15px] font-bold text-slate-800 leading-snug">Listrik Masuk Desa Suka Maju</p>
                </div>

                <div>
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">{t("proyek.detail.donation_nominal")}</p>
                  <p className="text-[20px] font-bold text-primary-deep">AED {selectedNominal || 0}</p>
                </div>

                <div className="flex justify-between items-center text-[13px] pt-4 border-t border-slate-50">
                  <span className="text-slate-500 font-medium">Biaya Platform</span>
                  <span className="text-green-600 font-bold">GRATIS</span>
                </div>

                <div className="flex justify-between items-center pt-6 border-t border-slate-100">
                  <span className="text-[15px] font-bold text-primary-deep">Total Donasi</span>
                  <span className="text-[22px] font-extrabold text-primary-deep">AED {selectedNominal || 0}</span>
                </div>
              </div>
            </div>

            {/* Impact */}
            <div className="bg-white rounded-3xl border border-slate-100 p-8 shadow-sm space-y-8">
              <h3 className="text-[18px] font-bold text-slate-900">Dampak Donasi Anda</h3>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-primary-deep shrink-0">
                    <Lightbulb size={20} />
                  </div>
                  <div>
                    <h4 className="text-[14px] font-bold text-slate-800 mb-1">1 Donasi = 1 Titik Cahaya</h4>
                    <p className="text-[12px] text-slate-500 leading-relaxed font-normal">Membantu menyediakan instalasi listrik untuk satu titik rumah.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-600 shrink-0">
                    <Leaf size={20} />
                  </div>
                  <div>
                    <h4 className="text-[14px] font-bold text-slate-800 mb-1">Mendukung Energi Bersih</h4>
                    <p className="text-[12px] text-slate-500 leading-relaxed font-normal">Menggunakan sumber energi terbarukan untuk masa depan yang lebih hijau.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
                    <Users size={20} />
                  </div>
                  <div>
                    <h4 className="text-[14px] font-bold text-slate-800 mb-1">Meningkatkan Kualitas Hidup</h4>
                    <p className="text-[12px] text-slate-500 leading-relaxed font-normal">Anak-anak bisa belajar di malam hari, warga bisa beraktivitas lebih produktif.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
                    <Home size={20} />
                  </div>
                  <div>
                    <h4 className="text-[14px] font-bold text-slate-800 mb-1">Mewujudkan Desa Mandiri</h4>
                    <p className="text-[12px] text-slate-500 leading-relaxed font-normal">Mendorong pertumbuhan ekonomi lokal dan kemandirian desa.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Need Help */}
            <div className="bg-white rounded-3xl border border-slate-100 p-8 shadow-sm space-y-6">
              <h3 className="text-[16px] font-bold text-slate-900">Butuh Bantuan?</h3>
              <p className="text-[13px] text-slate-500">Hubungi kami jika Anda memiliki pertanyaan seputar donasi.</p>
              
              <div className="space-y-4">
                <a href="tel:+622112345678" className="flex items-center gap-3 text-[14px] font-bold text-slate-700 hover:text-primary-deep transition-colors">
                  <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400">
                    <Phone size={16} />
                  </div>
                  +62 21 1234 5678
                </a>
                <a href="mailto:info@bulansabitbiru.org" className="flex items-center gap-3 text-[14px] font-bold text-slate-700 hover:text-primary-deep transition-colors">
                  <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400">
                    <Mail size={16} />
                  </div>
                  info@bulansabitbiru.org
                </a>
              </div>

              <button className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-slate-200 text-[14px] font-bold text-slate-700 hover:bg-slate-50 transition-all">
                <MessageSquare size={18} className="text-primary-deep" /> Chat dengan Kami
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
