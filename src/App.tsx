/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { useState, useEffect, useRef } from "react";
import { Routes, Route, Link, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import TentangKami from "./pages/TentangKami";
import ProgramDetail from "./pages/ProgramDetail";
import Proyek, { initialProjects } from "./pages/Proyek";
import ProyekDetail from "./pages/ProyekDetail";
import Donation from "./pages/Donation";
import DampakLaporan from "./pages/DampakLaporan";
import Login from "./pages/Login";
import Account from "./pages/Account";
import ProyekCard from "./components/ProyekCard";
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
  Moon,
  Home as HomeIcon,
  Coins,
  Phone,
  Sprout,
  User,
  ChevronLeft
} from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const { user, isAuthenticated } = useAuth();
  const [isLangOpen, setIsLangOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isTentangKami = location.pathname === "/tentang-kami";
  const isProyek = location.pathname.startsWith("/proyek");
  const isDampakLaporan = location.pathname === "/dampak-laporan";

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsLangOpen(false);
  };

  const navItems = [
    { key: "beranda", label: t("nav.beranda"), path: "/" },
    { key: "proyek", label: t("nav.proyek"), path: "/proyek" },
    { key: "dampak_laporan", label: t("nav.dampak_laporan"), path: "/dampak-laporan" },
    { key: "tentang_kami", label: t("nav.tentang_kami"), path: "/tentang-kami" },
  ];

  const languages = [
    { code: 'id', name: 'Indonesian', flag: '🇮🇩' },
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'ar', name: 'Arabic', flag: '🇦🇪' },
  ];

  const handleDonasiNav = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isAuthenticated) {
      navigate("/donasi");
    } else {
      navigate("/login");
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-20 h-20">
              <img src="/bulan_sabit_biru_icon.png" alt={t('brand.first') + ' ' + t('brand.second')} className="w-full h-full object-contain" />
            </div>
            <div>
              <h1 className="text-[24px] font-bold text-primary-deep leading-none uppercase tracking-wide">{t("brand.first")}</h1>
              <p className="text-[24px] font-extrabold text-primary-deep leading-none uppercase mt-0.5">{t("brand.second")}</p>
            </div>
          </Link>
          
          <div className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => {
              const isActive = (item.key === "tentang_kami" && isTentangKami) || 
                               (item.key === "proyek" && isProyek) || 
                               (item.key === "dampak_laporan" && isDampakLaporan) || 
                               (item.key === "beranda" && !isTentangKami && !isProyek && !isDampakLaporan && location.pathname === "/");
              
              return (
                <Link 
                  key={item.key} 
                  to={item.path}
                  className={`text-[13px] font-bold transition-all ${isActive ? "text-primary-deep border-b-2 border-primary-deep pb-2" : "text-slate-600 hover:text-primary-deep"}`}
                >
                  {item.label}
                </Link>
              )
            })}
          </div>

          <div className="flex items-center gap-4">
            <div className="relative" ref={dropdownRef}>
              <button 
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="h-10 px-3 rounded-full border border-slate-200 flex items-center gap-2 text-slate-600 hover:text-primary-deep hover:border-primary-deep transition-all font-bold text-sm"
                id="language-toggle-btn"
              >
                <div className="w-5 h-5 rounded-full overflow-hidden flex items-center justify-center bg-slate-50 text-xs">
                  {languages.find(l => l.code === i18n.language)?.flag || languages[0].flag}
                </div>
                <span className="uppercase text-[11px] tracking-wider">{i18n.language}</span>
              </button>
              
              {isLangOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-slate-100 rounded-2xl shadow-xl py-2 z-[110]">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className={`w-full flex items-center gap-3 px-4 py-2 text-left text-sm font-bold hover:bg-slate-50 transition-colors ${i18n.language === lang.code ? "text-primary-deep" : "text-slate-600"}`}
                    >
                      <span className="text-lg">{lang.flag}</span>
                      {lang.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            {isAuthenticated ? (
              <Link to="/akun" className="flex items-center gap-3 pl-2 pr-4 py-1.5 rounded-full border border-slate-100 hover:bg-slate-50 transition-all group">
                <div className="w-8 h-8 rounded-full overflow-hidden border border-slate-200">
                  <img src={user?.avatar} alt={user?.name} className="w-full h-full object-cover" />
                </div>
                <span className="text-[12px] font-bold text-slate-700 group-hover:text-primary-deep hidden md:inline">{user?.name.split(' ')[0]}</span>
              </Link>
            ) : (
              <Link to="/login" className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:text-primary-deep hover:border-primary-deep transition-all">
                <User size={18} />
              </Link>
            )}

            <button 
              onClick={handleDonasiNav}
              className="bg-[#e11d48] text-white px-6 py-3 rounded-full text-sm font-bold flex items-center gap-2 hover:opacity-90 transition-all shadow-lg shadow-pink-500/20 hover:-translate-y-0.5 cursor-pointer"
            >
              <Heart size={16} fill="currentColor" />
              <span className="hidden sm:inline">{t("nav.donasi_sekarang")}</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  const handleDonationClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isAuthenticated) {
      navigate('/donasi');
    } else {
      navigate('/login');
    }
  };

  return (
  <section className="relative pt-20">
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 z-0">
        <img 
          src="/landing-hero.png" 
          alt="Children on bridge" 
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center"
        />
        <div className={`absolute inset-0 ${i18n.language === 'ar' ? 'bg-gradient-to-l' : 'bg-gradient-to-r'} from-white via-white lg:via-white/95 to-transparent`}></div>
      </div>
    </div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20 lg:pt-20 lg:pb-20 relative z-10">
      <div className="max-w-2xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 bg-primary-light text-primary-deep px-4 py-1.5 rounded-full w-fit mb-6 border border-primary-deep/10"
        >
          <Users size={14} />
          <span className="text-xs font-semibold">{t("hero.badge")}</span>
        </motion.div>
        
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl lg:text-7xl font-bold text-primary-deep leading-[1.1] mb-8"
          >
            {t("hero.title")}
          </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-slate-600 mb-10 leading-relaxed max-w-lg"
        >
          {t("hero.subtitle")}
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap gap-4"
        >
          <Link to="/proyek" className="btn-primary">
            <Globe size={18} />
            {t("hero.cta_secondary")}
          </Link>
          <button 
            onClick={handleDonationClick}
            className="btn-secondary cursor-pointer"
          >
            <Heart size={18} className="text-primary-deep" />
            {t("hero.cta_primary")}
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
        <h3 className="text-[22px] font-bold text-primary-deep flex items-center gap-3">
          {t("home_stats.title")} <span className="text-primary-mid text-[13px] font-bold leading-none tracking-wide">{t("home_stats.update_label")}</span>
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-100">
          <div className="flex items-center gap-5 lg:pr-8 pt-4 md:pt-0">
            <div className="w-[68px] h-[68px] rounded-full bg-primary-light flex items-center justify-center text-primary-deep shrink-0 border border-primary-border">
              <Users size={32} strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-[28px] font-bold text-slate-900 leading-none mb-1.5">2.450+</p>
              <p className="text-[14px] font-bold text-slate-800 mb-0.5 leading-tight">{t("home_stats.beneficiaries")}</p>
              <p className="text-[12px] text-slate-500 leading-tight md:whitespace-pre-line">{t("home_stats.beneficiaries_sub").replace(' ', '\n')}</p>
            </div>
          </div>

          <div className="flex items-center gap-5 lg:px-8 pt-4 md:pt-0">
            <div className="w-[68px] h-[68px] rounded-full bg-primary-light flex items-center justify-center text-primary-deep shrink-0 border border-primary-border">
              <Milestone size={32} strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-[28px] font-bold text-slate-900 leading-none mb-1.5">18</p>
              <p className="text-[14px] font-bold text-slate-800 mb-0.5 leading-tight">{t("home_stats.projects_completed")}</p>
              <p className="text-[12px] text-slate-500 leading-tight">{t("home_stats.projects_sub")}</p>
            </div>
          </div>

          <div className="flex items-center gap-5 lg:px-8 pt-4 md:pt-0">
            <div className="w-[68px] h-[68px] rounded-full bg-primary-light flex items-center justify-center text-primary-deep shrink-0 border border-primary-border">
              <HomeIcon size={32} strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-[28px] font-bold text-slate-900 leading-none mb-1.5">12</p>
              <p className="text-[14px] font-bold text-slate-800 mb-0.5 leading-tight">{t("home_stats.villages_impacted")}</p>
              <p className="text-[12px] text-slate-500 leading-tight">{t("home_stats.villages_sub")}</p>
            </div>
          </div>

          <div className="flex items-center gap-5 lg:pl-8 pt-4 md:pt-0">
            <div className="w-[68px] h-[68px] rounded-full bg-primary-light flex items-center justify-center text-primary-deep shrink-0 border border-primary-border">
              <Coins size={32} strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-[28px] font-bold text-slate-900 leading-none mb-1.5">{t("home_stats.collected")}</p>
              <p className="text-[14px] font-bold text-slate-800 mb-0.5 leading-tight">{t("home_stats.collected_label")}</p>
              <p className="text-[12px] text-slate-500 leading-tight">{t("home_stats.from_donors")}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
  );
};

const ProgramSection = () => {
  const { t } = useTranslation();
  const programs = [
    {
      id: "1",
      title: t("programs.jembatan.title"),
      desc: t("programs.jembatan.desc"),
      stats: [
        { label: t("programs.jembatan.label1"), val: "12" },
        { label: t("programs.jembatan.label2"), val: "4" },
        { label: t("programs.jembatan.label3"), val: "1.850+" },
      ],
      img: "/jembatan-gantung.png",
      icon: <Milestone className="text-primary-deep" size={24} />
    },
    {
      id: "2",
      title: t("programs.listrik.title"),
      desc: t("programs.listrik.desc"),
      stats: [
        { label: t("programs.listrik.label1"), val: "6" },
        { label: t("programs.listrik.label2"), val: "2" },
        { label: t("programs.listrik.label3"), val: "600+" },
      ],
      img: "/listrik.png",
      icon: <Zap className="text-primary-deep" size={24} />
    }
  ];

  return (
    <section className="pt-32 pb-24 lg:pt-48 lg:pb-32 bg-white z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4 font-display text-2xl lg:text-3xl">{t("programs.title")}</h2>
            <p className="text-slate-600 max-w-xl text-sm leading-relaxed">
              {t("programs.subtitle")}
            </p>
          </div>
          <a href="#" className="flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-primary-deep transition-colors group">
            {t("programs.view_all")} <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
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
                <img 
                  src={p.img} 
                  alt={p.title} 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover" 
                />
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

const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button 
      onClick={onClick}
      className="absolute -right-7 top-1/2 -translate-y-1/2 w-14 h-14 bg-white rounded-full shadow-xl flex items-center justify-center border border-slate-50 hover:bg-slate-50 transition-all hover:scale-110 active:scale-95 hidden xl:flex z-30 group"
    >
      <ChevronRight size={28} className="text-slate-900" />
    </button>
  );
};

const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button 
      onClick={onClick}
      className="absolute -left-7 top-1/2 -translate-y-1/2 w-14 h-14 bg-white rounded-full shadow-xl flex items-center justify-center border border-slate-50 hover:bg-slate-50 transition-all hover:scale-110 active:scale-95 hidden xl:flex z-30 group"
    >
      <ChevronLeft size={28} className="text-slate-900" />
    </button>
  );
};

const ProgressSection = () => {
  const { t } = useTranslation();
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <section className="py-24 bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4 font-display text-2xl lg:text-3xl">{t("stats.latest_progress")}</h2>
            <p className="text-slate-600 text-sm leading-relaxed">{t("stats.progress_desc")}</p>
          </div>
          <Link to="/proyek" className="flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-primary-deep transition-colors group">
            {t("stats.view_all_projects")} <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="pb-8 px-4">
          <Slider {...settings}>
            {initialProjects.slice(0, 6).map((p, idx) => (
              <div key={idx} className="px-3 h-full">
                <ProyekCard project={p} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

const AboutSection = () => {
  const { t } = useTranslation();
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#f1f7ff] rounded-[2rem] p-8 lg:p-12 flex flex-col lg:flex-row items-center lg:items-start gap-12 relative overflow-hidden border border-blue-50">
          {/* Logo */}
          <div className="shrink-0 w-48 h-48 lg:w-64 lg:h-64 flex items-center justify-center">
            <img 
              src="/bulan_sabit_biru_icon.png" 
              alt="Logo" 
              className="w-full h-full object-contain"
            />
          </div>

          <div className="flex-grow">
          {/* Main Info */}
            <div>
              <h2 className="text-2xl font-bold text-primary-deep mb-6 leading-tight">{t("about_section.title")}</h2>
              <p className="text-slate-600 text-sm leading-relaxed mb-10">
                {t("about_section.desc")}
              </p>
            </div>

            <div className="flex-grow flex flex-col xl:flex-row gap-10 xl:gap-16">
            {/* Features Grid */}
            <div className="flex-grow grid grid-cols-1 md:grid-cols-3 gap-8 lg:pt-2">
              <div className="flex flex-col items-start space-y-4">
                <div className="text-primary-deep">
                  <ShieldCheck size={48} strokeWidth={1} />
                </div>
                <h4 className="text-[15px] font-bold text-primary-deep">{t("about_section.trust_title")}</h4>
                <p className="text-[12px] text-slate-500 font-medium leading-relaxed">
                  {t("about_section.trust_desc")}
                </p>
              </div>

              <div className="flex flex-col items-start space-y-4">
                <div className="text-primary-deep">
                  <Users size={48} strokeWidth={1} />
                </div>
                <h4 className="text-[15px] font-bold text-primary-deep">{t("about_section.reach_title")}</h4>
                <p className="text-[12px] text-slate-500 font-medium leading-relaxed">
                   {t("about_section.reach_desc")}
                </p>
              </div>

              <div className="flex flex-col items-start space-y-4">
                <div className="text-primary-deep">
                  <Sprout size={48} strokeWidth={1} />
                </div>
                <h4 className="text-[15px] font-bold text-primary-deep">{t("about_section.impact_title")}</h4>
                <p className="text-[12px] text-slate-500 font-medium leading-relaxed">
                  {t("about_section.impact_desc")}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-4">
          <Link 
                to="/tentang-kami" 
                className="inline-flex items-center gap-3 px-8 py-3.5 rounded-xl border border-primary-deep/40 bg-white shadow-sm text-primary-deep font-bold text-sm hover:bg-slate-50 transition-all group"
              >
                {t("about_section.learn_more")} 
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
          </div>
          
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-primary-darkest text-white pt-24 pb-12 overflow-hidden relative">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-20 items-start">
        {/* Brand & Logo */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12">
              <img src="/bulan_sabit_biru_icon.png" alt={t('brand.first') + ' ' + t('brand.second')} className="w-full h-full object-contain brightness-0 invert" />
            </div>
            <div>
              <p className="text-[14px] font-bold tracking-tight uppercase leading-none">{t("brand.first")}</p>
              <p className="text-[20px] font-extrabold tracking-tight uppercase leading-none mt-1">{t("brand.second")}</p>
            </div>
          </div>
          <div className="space-y-1">
            <p className="text-[13px] text-slate-300 font-medium">{t("footer.brand_line1")}</p>
            <p className="text-[13px] text-slate-300 font-medium">{t("footer.brand_line2")}</p>
          </div>
          <div className="flex gap-4 pt-4">
            {[Facebook, Instagram, Youtube, Mail].map((Icon, idx) => (
              <a key={idx} href="#" className="text-white hover:text-primary-light transition-colors">
                <Icon size={22} strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </div>

        {/* Tentang Kami */}
        <div className="lg:col-span-2 space-y-6">
          <h4 className="text-[14px] font-bold text-white uppercase tracking-wider">{t("footer.about_title")}</h4>
          <p className="text-[12px] text-slate-300 leading-relaxed font-medium">
            {t("footer.about_desc")}
          </p>
          <Link to="/tentang-kami" className="text-[12px] font-bold text-white flex items-center gap-2 hover:translate-x-1 transition-transform">
            {t("footer.learn_more")} <ArrowRight size={14} />
          </Link>
        </div>

        {/* Tautan Cepat */}
        <div className="lg:col-span-2 space-y-6">
          <h4 className="text-[14px] font-bold text-white uppercase tracking-wider">{t("footer.quick_links")}</h4>
          <ul className="space-y-4 text-[13px] text-slate-300 font-medium">
            <li><Link to="/" className="hover:text-white transition-colors">{t("nav.beranda")}</Link></li>
            <li><Link to="/proyek" className="hover:text-white transition-colors">{t("nav.proyek")}</Link></li>
            <li><Link to="/program" className="hover:text-white transition-colors">{t("nav.proyek")}</Link></li>
            <li><Link to="/dampak-laporan" className="hover:text-white transition-colors">{t("nav.dampak_laporan")}</Link></li>
            <li><Link to="/tentang-kami" className="hover:text-white transition-colors">{t("nav.tentang_kami")}</Link></li>
          </ul>
        </div>

        {/* Informasi */}
        <div className="lg:col-span-2 space-y-6">
          <h4 className="text-[14px] font-bold text-white uppercase tracking-wider">{t("footer.info")}</h4>
          <ul className="space-y-5 text-[13px] text-slate-300 font-medium">
            <li className="flex gap-3 items-center">
              <Phone size={18} className="text-white shrink-0"/> 
              <span>+62 21 1234 5678</span>
            </li>
            <li className="flex gap-3 items-center">
              <Mail size={18} className="text-white shrink-0"/> 
              <span>info@bulansabitbiru.org</span>
            </li>
            <li className="flex gap-3 items-start">
              <MapPin size={18} className="text-white shrink-0 mt-0.5"/> 
              <span className="leading-relaxed">Jl. Kebon Nanas No. 10<br/>Jakarta Selatan 12345</span>
            </li>
          </ul>
        </div>

        {/* Dukungan */}
        <div className="lg:col-span-1 space-y-6">
          <h4 className="text-[14px] font-bold text-white uppercase tracking-wider">{t("footer.support")}</h4>
          <ul className="space-y-4 text-[13px] text-slate-300 font-medium">
            <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
            <li><a href="#" className="hover:text-white transition-colors">{t("footer.privacy")}</a></li>
            <li><a href="#" className="hover:text-white transition-colors">{t("footer.terms")}</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Hubungi Kami</a></li>
          </ul>
        </div>

        {/* Saudi Box */}
        <div className="lg:col-span-3">
          <div className="border border-white/20 p-8 rounded-3xl bg-white/5 backdrop-blur-sm h-full flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-[14px] font-bold text-white">{t("footer.saudi_box.title")}</h4>
                <div className="w-8 h-5 rounded overflow-hidden">
                  <img src="https://flagcdn.com/w80/ae.png" alt="AE" className="w-full h-full object-cover" />
                </div>
              </div>
              <p className="text-[28px] font-bold text-white leading-tight mb-4" dir="rtl">{t("footer.saudi_box.thanks")}</p>
            </div>
            <div className="space-y-1">
              <p className="text-[12px] text-slate-300 font-medium">{t("footer.saudi_box.subtitle")}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-8 border-t border-white/10 flex justify-center text-center text-[13px] font-medium text-slate-400">
        <p>{t("footer.copyright")}</p>
      </div>
    </div>
  </footer>
  );
};

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
  const { i18n } = useTranslation();
  const direction = i18n.language === 'ar' ? 'rtl' : 'ltr';

  useEffect(() => {
    document.documentElement.dir = direction;
    document.documentElement.lang = i18n.language;
  }, [direction, i18n.language]);

  return (
    <AuthProvider>
      <ScrollToTop />
      <div className={`min-h-screen flex flex-col font-sans ${direction === 'rtl' ? 'font-arabic' : ''}`} dir={direction}>
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tentang-kami" element={<TentangKami />} />
            <Route path="/program/:id" element={<ProgramDetail />} />
            <Route path="/proyek" element={<Proyek />} />
            <Route path="/proyek/:id" element={<ProyekDetail />} />
            <Route path="/donasi" element={<Donation />} />
            <Route path="/dampak-laporan" element={<DampakLaporan />} />
            <Route path="/login" element={<Login />} />
            <Route path="/akun" element={<Account />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </AuthProvider>
  );
}

