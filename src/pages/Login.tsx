import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { 
  Lock, 
  Eye, 
  EyeOff, 
  ShieldCheck, 
  TrendingUp, 
  Users, 
  Heart,
  Handshake,
  CheckCircle2,
  User,
  Loader2
} from "lucide-react";
import { motion } from "motion/react";
import { useAuth } from "../contexts/AuthContext";

export default function Login() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { login } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      await login(email || "donatur@example.com");
      navigate('/akun');
    } catch (error) {
      console.error("Login failed", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fbff] flex flex-col">
      <div className="max-w-7xl mx-auto w-full px-4 mt-8 pt-20 pb-20">
        <div className="grid lg:grid-cols-2 gap-x-8 items-center">
          {/* Left Content - Hidden on Mobile */}
          <div className="hidden lg:flex relative flex-col p-8 lg:p-12">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="max-w-xl"
            >
              <h1 className="text-[44px] font-extrabold text-[#0D2451] leading-[1.1] mb-6">
                {t('login.welcome')} <br />
                <span className="text-primary-deep">{t('brand.first')} {t('brand.second')}</span>
              </h1>
              
              <p className="text-[17px] font-semibold text-slate-600 mb-12">
                {t('login.subtitle')}
              </p>

              <div className="space-y-10">
                {[
                  { 
                    title: t('login.features.secure.title'), 
                    desc: t('login.features.secure.desc'),
                    icon: <ShieldCheck className="text-primary-deep" size={24} />,
                    bgColor: "bg-[#eef4ff]"
                  },
                  { 
                    title: t('login.features.impact.title'), 
                    desc: t('login.features.impact.desc'),
                    icon: <Users className="text-[#FF3D77]" size={24} />,
                    bgColor: "bg-[#fff0f4]"
                  },
                  { 
                    title: t('login.features.transparent.title'), 
                    desc: t('login.features.transparent.desc'),
                    icon: <Handshake className="text-primary-deep" size={24} />,
                    bgColor: "bg-[#eef4ff]"
                  },
                  { 
                    title: t('login.features.sustainable.title'), 
                    desc: t('login.features.sustainable.desc'),
                    icon: <TrendingUp className="text-[#FF3D77]" size={24} />,
                    bgColor: "bg-[#fff0f4]"
                  }
                ].map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + (idx * 0.1) }}
                    className="flex gap-6 items-center"
                  >
                    <div className={`w-14 h-14 rounded-2xl ${item.bgColor} flex items-center justify-center shrink-0 shadow-sm border border-white`}>
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-extrabold text-[16px] text-[#0D2451] mb-0.5">{item.title}</h4>
                      <p className="text-[14px] text-slate-500 font-bold leading-relaxed max-w-[280px]">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Content - Form Card */}
          <div className="flex justify-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="w-full max-w-[600px] bg-white rounded-[2rem] shadow-[0_32px_128px_-32px_rgba(0,0,32,0.08)] p-12 lg:p-16 border border-white"
            >
              <h2 className="text-[32px] font-extrabold text-[#0D2451] tracking-tight mb-2">
                {t('login.form_title').split(' ').slice(0, -2).join(' ')} <span className="text-primary-deep">{t('login.form_title').split(' ').slice(-2).join(' ')}</span>
              </h2>
              <p className="text-slate-500 text-[15px] mb-12 font-bold leading-relaxed">
                {t('login.form_subtitle')}
              </p>

              <form className="space-y-8" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-[14px] font-extrabold text-[#0D2451] mb-3">{t('login.email_label')}</label>
                  <div className="relative">
                    <span className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400">
                      <User size={22} className="stroke-[2.5]" />
                    </span>
                    <input 
                      type="text" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={t('login.email_placeholder')} 
                      className="w-full pl-16 pr-6 py-5 rounded-2xl border border-slate-100 bg-[#f8fbff] focus:bg-white focus:border-primary-deep outline-none transition-all text-sm font-bold text-[#0D2451] placeholder:text-slate-400"
                      required
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-3">
                    <label className="block text-[14px] font-extrabold text-[#0D2451]">{t('login.password_label')}</label>
                    <Link to="#" className="text-[13px] font-bold text-[#FF3D77] hover:underline">{t('login.forgot_password')}</Link>
                  </div>
                  <div className="relative">
                    <span className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400">
                      <Lock size={22} className="stroke-[2.5]" />
                    </span>
                    <input 
                      type={showPassword ? "text" : "password"} 
                      placeholder={t('login.password_placeholder')} 
                      className="w-full pl-16 pr-16 py-5 rounded-2xl border border-slate-100 bg-[#f8fbff] focus:bg-white focus:border-primary-deep outline-none transition-all text-sm font-bold text-[#0D2451] placeholder:text-slate-400"
                      required
                    />
                    <button 
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                    >
                      {showPassword ? <EyeOff size={22} /> : <Eye size={22} />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button 
                    type="button"
                    onClick={() => setRememberMe(!rememberMe)}
                    className={`w-6 h-6 rounded-lg border-2 transition-all flex items-center justify-center ${rememberMe ? "bg-primary-deep border-primary-deep text-white" : "border-slate-200 bg-white"}`}
                  >
                    {rememberMe && <CheckCircle2 size={14} fill="currentColor" className="text-white" />}
                  </button>
                  <span className="text-[14px] font-bold text-[#0D2451]">{t('login.remember_me')}</span>
                </div>

                <button 
                  disabled={isLoading}
                  className="w-full py-5 bg-primary-deep text-white rounded-2xl font-extrabold hover:bg-[#0038ce] transition-all shadow-xl shadow-blue-600/20 text-[18px] flex items-center justify-center gap-3"
                >
                  {isLoading && <Loader2 size={24} className="animate-spin" />}
                  {isLoading ? 'Memproses...' : t('login.submit')}
                </button>
              </form>

              <div className="relative my-12 text-center">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-slate-100"></div>
                </div>
                <span className="relative px-6 bg-white text-[13px] font-bold text-slate-400 leading-none">{t('login.or_with')}</span>
              </div>

              <div className="grid grid-cols-1 gap-4">
                <button className="w-full py-4.5 px-8 rounded-2xl border border-slate-50 bg-[#f8fbff] flex items-center justify-center gap-4 text-[14px] font-extrabold text-[#0D2451] hover:bg-white hover:border-slate-100 transition-all shadow-sm">
                  <img src="https://www.google.com/favicon.ico" alt="Google" className="w-6 h-6" />
                  {t('login.google')}
                </button>
                <button className="w-full py-4.5 px-8 rounded-2xl border border-slate-50 bg-[#f8fbff] flex items-center justify-center gap-4 text-[14px] font-extrabold text-[#0D2451] hover:bg-white hover:border-slate-100 transition-all shadow-sm">
                  <img src="https://www.apple.com/favicon.ico" alt="Apple" className="w-6 h-6" />
                  {t('login.apple')}
                </button>
              </div>

              <p className="mt-14 text-center text-[15px] font-bold text-slate-500">
                {t('login.no_account')} <Link to="#" className="text-primary-deep font-extrabold hover:underline">{t('login.register')}</Link>
              </p>
            </motion.div>
          </div>
        </div>

        {/* Bottom Banner Section */}
        <div className="mt-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-[2.5rem] border border-slate-50 px-12 py-10 shadow-2xl shadow-slate-200/50 flex flex-wrap lg:grid lg:grid-cols-4 items-center justify-between"
          >
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-3xl bg-[#eef4ff] flex items-center justify-center text-primary-deep">
                <ShieldCheck size={32} strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="font-extrabold text-[#0D2451] text-[16px] leading-tight mb-1">{t('login.stats.secure_title')}</h4>
                <p className="text-[13px] text-slate-500 font-bold leading-relaxed">{t('login.stats.secure_desc')}</p>
              </div>
            </div>

            <div className="flex items-center gap-6 lg:border-l lg:border-slate-100 lg:pl-12">
              <div className="w-16 h-16 rounded-3xl bg-[#fff0f4] flex items-center justify-center text-[#FF3D77]">
                <Users size={32} strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="font-extrabold text-[#0D2451] text-[16px] leading-tight mb-1">{t('login.stats.donors_title')}</h4>
                <p className="text-[13px] text-slate-500 font-bold leading-relaxed">{t('login.stats.donors_desc')}</p>
              </div>
            </div>

            <div className="flex items-center gap-6 lg:border-l lg:border-slate-100 lg:pl-12">
              <div className="w-16 h-16 rounded-3xl bg-[#eef4ff] flex items-center justify-center text-primary-deep">
                <Heart size={32} strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="font-extrabold text-[#0D2451] text-[16px] leading-tight mb-1">{t('login.stats.beneficiaries_title')}</h4>
                <p className="text-[13px] text-slate-500 font-bold leading-relaxed">{t('login.stats.beneficiaries_desc')}</p>
              </div>
            </div>

            <div className="flex items-center gap-6 lg:border-l lg:border-slate-100 lg:pl-12">
              <div className="w-16 h-16 rounded-3xl bg-[#fff0f4] flex items-center justify-center text-[#FF3D77]">
                <TrendingUp size={32} strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="font-extrabold text-[#0D2451] text-[16px] leading-tight mb-1">{t('login.stats.transparent_title')}</h4>
                <p className="text-[13px] text-slate-500 font-bold leading-relaxed">{t('login.stats.transparent_desc')}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <footer className="bg-[#061E3B] text-white py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10 mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-[13px] font-bold text-slate-400">
           <p>{t('footer.copyright')}</p>
           <div className="flex gap-8">
             <Link to="#" className="hover:text-white transition-colors">{t('footer.terms')}</Link>
             <Link to="#" className="hover:text-white transition-colors">{t('footer.privacy')}</Link>
           </div>
        </div>
      </footer>
    </div>
  );
}
