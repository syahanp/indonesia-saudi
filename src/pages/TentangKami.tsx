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
  ArrowRight,
  Sprout,
  Calendar,
  HelpingHand
} from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import updatedImgBox from "../assets/images/regenerated_image_1778114589339.png";

export default function TentangKami() {
  const { t, i18n } = useTranslation();
  const genericImg = "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80";

  return (
    <div className="pt-24 pb-20 bg-white!">
      {/* Hero Section */}
      <div className="relative pt-16 pb-32 lg:pb-48 mb-12">
        <div className="absolute inset-0 z-0">
           <img src={genericImg} alt="Hero" className="w-full h-full object-cover object-center" />
           <div className={`absolute inset-0 ${i18n.language === 'ar' ? 'bg-gradient-to-l' : 'bg-gradient-to-r'} from-white via-white/95 to-transparent`}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-[13px] text-slate-600 font-semibold mb-6 flex items-center gap-2">
            <Link to="/" className="hover:text-primary-deep transition-colors">{t("nav.beranda")}</Link>
            <span className="opacity-50">&gt;</span>
            <span className="text-slate-900">{t("nav.tentang_kami")}</span>
          </div>

          <div className="max-w-2xl">
            <p className="text-xs font-bold text-slate-500 tracking-widest uppercase mb-4 uppercase">{t("about_section.title")}</p>
            <h1 className="text-4xl lg:text-5xl xl:text-[3.5rem] font-bold text-primary-deep leading-[1.1] mb-6 font-display">
              {t("tentang_kami.hero.title")}
            </h1>
            <p className="text-[15px] lg:text-[16px] text-slate-700 leading-relaxed font-medium">
              {t("tentang_kami.hero.subtitle")}
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
              <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-0.5">{t("tentang_kami.stats.since")}</p>
              <p className="text-xl font-bold text-slate-900 leading-none">2016</p>
              <p className="text-[11px] font-semibold text-slate-400 mt-1">{t("tentang_kami.stats.founded")}</p>
            </div>
          </div>

          <div className="w-px h-12 bg-slate-200 shrink-0 hidden md:block"></div>

          <div className="flex items-center gap-4 shrink-0">
            <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-primary-deep">
              <Milestone size={24} />
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-900 leading-none">30+</p>
              <p className="text-[11px] font-semibold text-slate-500 mt-1.5 whitespace-nowrap">{t("tentang_kami.stats.completed")}</p>
            </div>
          </div>

          <div className="w-px h-12 bg-slate-200 shrink-0 hidden lg:block"></div>

          <div className="flex items-center gap-4 shrink-0">
            <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-primary-deep">
              <Users size={24} />
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-900 leading-none">10.000+</p>
              <p className="text-[11px] font-semibold text-slate-500 mt-1.5 whitespace-nowrap">{t("tentang_kami.stats.beneficiaries")}</p>
            </div>
          </div>

          <div className="w-px h-12 bg-slate-200 shrink-0 hidden lg:block"></div>

          <div className="flex items-center gap-4 shrink-0">
             <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-primary-deep">
              <MapPin size={24} />
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-900 leading-none">10</p>
              <p className="text-[11px] font-semibold text-slate-500 mt-1.5 whitespace-nowrap">{t("tentang_kami.stats.provinces")}</p>
            </div>
          </div>
        </div>

        {/* Indonesia x Saudi Arabia Connection Section */}
        <div className="mb-32">
          <div className="bg-white rounded-[3rem] border border-slate-100 shadow-xl shadow-slate-200/20 overflow-hidden">
            <div className="grid lg:grid-cols-[1.2fr_1fr_1.2fr] items-center relative">
              
              {/* Indonesia Side */}
              <div className="relative h-full min-h-[500px] flex items-center">
                <div className="absolute inset-0 z-0">
                  <img 
                    src="https://images.unsplash.com/photo-1660632047991-686472de653d?q=80&w=2070" 
                    alt="Indonesia Village" 
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 ${i18n.language === 'ar' ? 'bg-gradient-to-l' : 'bg-gradient-to-r'} from-white/10 via-white/80 to-white`}></div>
                </div>
                
                <div className="relative z-10 p-10 lg:p-14 w-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-md">
                      <img src="https://flagcdn.com/w80/id.png" alt={t("countries.indonesia")} className="w-full h-full object-cover" />
                    </div>
                    <h3 className="text-3xl font-extrabold text-[#167ce1]">{t("countries.indonesia")}</h3>
                  </div>
                  
                  <p className="text-[15px] text-slate-700 font-bold mb-8 leading-relaxed max-w-[280px]">
                    {t("tentang_kami.connection.id_title")}
                  </p>
                  
                  <ul className="space-y-5">
                    {Array.isArray(t("tentang_kami.connection.id_list", { returnObjects: true })) && 
                      (t("tentang_kami.connection.id_list", { returnObjects: true }) as string[]).map((item, idx) => (
                        <li key={idx} className="flex items-center gap-4 text-[14px] font-bold text-slate-700">
                          <div className="w-6 h-6 rounded-full bg-[#167ce1] flex items-center justify-center text-white shrink-0">
                            <CheckCircle2 size={14} strokeWidth={3} />
                          </div>
                          {item}
                        </li>
                      ))}
                  </ul>
                </div>
              </div>

              {/* Connecting Center */}
              <div className="relative py-16 px-8 flex flex-col items-center text-center">
                {/* Dashed lines (simulated with SVG) */}
                <div className="absolute inset-0 pointer-events-none hidden lg:block">
                  <svg className="w-full h-full" viewBox="0 0 400 600" fill="none">
                    <path 
                      d="M0 150 Q200 100 400 150" 
                      stroke="#cbd5e1" 
                      strokeWidth="2" 
                      strokeDasharray="8 8" 
                      className="opacity-80"
                    />
                    <path 
                      d="M0 450 Q200 500 400 450" 
                      stroke="#cbd5e1" 
                      strokeWidth="2" 
                      strokeDasharray="8 8" 
                      className="opacity-80"
                    />
                  </svg>
                </div>

                <div className="w-24 h-24 bg-white rounded-full shadow-2xl flex items-center justify-center mb-8 border border-slate-50 relative z-10">
                  <div className="w-20 h-20 rounded-full border-2 border-dashed border-blue-200 flex items-center justify-center">
                    <Handshake size={40} className="text-[#167ce1]" strokeWidth={1.5} />
                  </div>
                </div>

                <h3 className="text-[24px] font-extrabold text-[#167ce1] mb-6 leading-tight max-w-[280px] relative z-10">
                  {t("tentang_kami.connection.center_title")}
                </h3>
                
                <p className="text-[13px] text-slate-500 leading-relaxed font-bold max-w-[280px] relative z-10">
                  {t("tentang_kami.connection.center_desc")}
                </p>
              </div>

                {/* UAE Side */}
              <div className="relative h-full min-h-[500px] flex items-center">
                <div className="absolute inset-0 z-0">
                  <img 
                    src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=2070" 
                    alt="Dubai UAE" 
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 ${i18n.language === 'ar' ? 'bg-gradient-to-r' : 'bg-gradient-to-l'} from-white/10 via-white/80 to-white`}></div>
                </div>
                
                <div className="relative z-10 p-10 lg:p-14 w-full flex flex-col items-end text-right">
                  <div className="flex items-center gap-4 mb-6">
                    <h3 className="text-3xl font-extrabold text-[#065f46]">{t("countries.uae")}</h3>
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-md">
                      <img src="/uae-flag-round-brand.png" alt={t("countries.uae")} className="w-full h-full object-cover" />
                    </div>
                  </div>
                  
                  <p className="text-[15px] text-slate-700 font-bold mb-8 leading-relaxed max-w-[280px]">
                    {t("tentang_kami.connection.sa_title")}
                  </p>
                  
                  <ul className="space-y-5">
                    {Array.isArray(t("tentang_kami.connection.sa_list", { returnObjects: true })) && 
                      (t("tentang_kami.connection.sa_list", { returnObjects: true }) as string[]).map((item, idx) => (
                        <li key={idx} className="flex flex-row-reverse items-center gap-4 text-[14px] font-bold text-slate-700">
                          <div className="w-6 h-6 rounded-full bg-[#065f46] flex items-center justify-center text-white shrink-0">
                            <CheckCircle2 size={14} strokeWidth={3} />
                          </div>
                          {item}
                        </li>
                      ))}
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Strategic Partnership Section */}
        <section className="mb-32 py-16">
          <div className="max-w-4xl mx-auto text-center px-4">
            <div className="flex items-center justify-center gap-6 lg:gap-12 mb-10">
              <div className="w-20 h-20 lg:w-28 lg:h-28 flex items-center justify-center p-2 bg-white rounded-2xl shadow-sm border border-slate-50">
                <img src="/bulan_sabit_biru_icon.png" alt={t('brand.first') + ' ' + t('brand.second')} className="w-full h-full object-contain" />
              </div>
              <div className="w-10 h-[2px] bg-slate-200 rounded-full"></div>
              <div className="w-20 h-20 lg:w-28 lg:h-28 flex items-center justify-center p-2 bg-white rounded-2xl shadow-sm border border-slate-50">
                <img src="/bulan-sabit-merah.svg" alt="Bulan Sabit Merah" className="w-full h-full object-contain" />
              </div>
            </div>
            
            <span className="inline-block px-4 py-1.5 rounded-full bg-slate-100 text-slate-500 text-[11px] font-bold tracking-widest uppercase mb-6">
              {t("tentang_kami.partnership.label")}
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-deep mb-8 leading-tight font-display">
              {t("tentang_kami.partnership.title")}
            </h2>
            <p className="text-[15px] lg:text-[16px] text-slate-600 leading-relaxed font-medium mb-12 max-w-2xl mx-auto">
              {t("tentang_kami.partnership.desc")}
            </p>

            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="bg-white p-8 lg:p-10 rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-200/20">
                <h4 className="text-[17px] font-bold text-primary-deep mb-4">{t("tentang_kami.partnership.mission_title")}</h4>
                <p className="text-[13px] text-slate-500 leading-relaxed font-medium">
                  {t("tentang_kami.partnership.mission_desc")}
                </p>
              </div>
              <div className="bg-primary-deep p-8 lg:p-10 rounded-[2rem] text-white shadow-xl shadow-blue-900/20">
                <h4 className="text-[17px] font-bold mb-6">{t("tentang_kami.partnership.label")}</h4>
                <ul className="space-y-4">
                  {Array.isArray(t("tentang_kami.partnership.items", { returnObjects: true })) && 
                    (t("tentang_kami.partnership.items", { returnObjects: true }) as string[]).map((item, idx) => (
                      <li key={idx} className="flex items-center gap-4 text-[13px] font-bold">
                        <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                          <CheckCircle2 size={14} strokeWidth={3} className="text-white" />
                        </div>
                        {item}
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Nilai-Nilai Kami Section */}
        <section className="py-24 bg-white mb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-primary-deep mb-2 inline-block relative">
              {t("tentang_kami.values.title")}
              <div className="absolute left-1/2 -bottom-2 w-12 h-1 bg-primary-deep transform -translate-x-1/2 rounded-full"></div>
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-20">
              {[
                { title: t("tentang_kami.values.list.transparency"), desc: t("tentang_kami.values.list.transparency_desc"), icon: <ShieldCheck size={40} strokeWidth={1} /> },
                { title: t("tentang_kami.values.list.sustainability"), desc: t("tentang_kami.values.list.sustainability_desc"), icon: <HelpingHand size={40} strokeWidth={1} /> },
                { title: t("tentang_kami.values.list.collaboration"), desc: t("tentang_kami.values.list.collaboration_desc"), icon: <Users size={40} strokeWidth={1} /> },
                { title: t("tentang_kami.values.list.impact"), desc: t("tentang_kami.values.list.impact_desc"), icon: <Heart size={40} strokeWidth={1} /> },
                { title: t("tentang_kami.values.list.integrity"), desc: t("tentang_kami.values.list.integrity_desc"), icon: <Leaf size={40} strokeWidth={1} /> },
              ].map((val, idx) => (
                <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
                  <div className="text-primary-deep mb-6">
                    {val.icon}
                  </div>
                  <h4 className="font-bold text-primary-deep mb-3 text-[15px]">{val.title}</h4>
                  <p className="text-[12px] text-slate-500 leading-relaxed font-medium">{val.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Apa yang Kami Lakukan Section */}
        <section className="py-24 bg-white mb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-primary-deep mb-2 inline-block relative">
              {t("what_we_do.title")}
              <div className="absolute left-1/2 -bottom-2 w-12 h-1 bg-primary-deep transform -translate-x-1/2 rounded-full"></div>
            </h2>

            <div className="grid lg:grid-cols-3 gap-6 mt-20">
              {/* Card 1 */}
              <div className="bg-[#f4f7ff] p-8 rounded-[2.5rem] border border-blue-50/50 flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-8 transition-all hover:shadow-lg hover:shadow-blue-100/20">
                <div className="shrink-0 text-primary-deep">
                  <Milestone size={80} strokeWidth={1} />
                </div>
                <div>
                  <h4 className="text-[17px] font-bold text-primary-deep mb-4 leading-snug">{t("what_we_do.infrastructure.title")}</h4>
                  <p className="text-[13px] text-slate-600 leading-relaxed font-medium">
                    {t("what_we_do.infrastructure.desc")}
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-[#fff4f7] p-8 rounded-[2.5rem] border border-pink-50/50 flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-8 transition-all hover:shadow-lg hover:shadow-pink-100/20">
                <div className="shrink-0 text-[#e14d7a]">
                  <UsersRound size={80} strokeWidth={1} />
                </div>
                <div>
                  <h4 className="text-[17px] font-bold text-[#e14d7a] mb-4 leading-snug">{t("what_we_do.community.title")}</h4>
                  <p className="text-[13px] text-slate-600 leading-relaxed font-medium">
                    {t("what_we_do.community.desc")}
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-[#f4f8f4] p-8 rounded-[2.5rem] border border-green-50/50 flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-8 transition-all hover:shadow-lg hover:shadow-green-100/20">
                <div className="shrink-0 text-emerald-700">
                  <Sprout size={80} strokeWidth={1} />
                </div>
                <div>
                  <h4 className="text-[17px] font-bold text-emerald-700 mb-4 leading-snug">{t("what_we_do.kindness.title")}</h4>
                  <p className="text-[13px] text-slate-600 leading-relaxed font-medium">
                    {t("what_we_do.kindness.desc")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Perjalanan Kami Section */}
        <section className="py-24 bg-white mb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-primary-deep mb-2 inline-block relative">
              {t("tentang_kami.journey.title")}
              <div className="absolute left-1/2 -bottom-2 w-12 h-1 bg-primary-deep transform -translate-x-1/2 rounded-full"></div>
            </h2>

            <div className="mt-28 relative">
              {/* Timeline Line */}
              <div className="absolute top-12 left-0 right-0 h-0.5 border-t-2 border-dashed border-blue-200 hidden lg:block opacity-60"></div>
              
              {/* Connector Dots */}
              <div className="absolute top-12 left-0 right-0 hidden lg:block pointer-events-none">
                <div className="absolute left-1/4 top-0 w-2.5 h-2.5 bg-primary-deep rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_0_6px_white]"></div>
                <div className="absolute left-2/4 top-0 w-2.5 h-2.5 bg-primary-deep rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_0_6px_white]"></div>
                <div className="absolute left-3/4 top-0 w-2.5 h-2.5 bg-primary-deep rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_0_6px_white]"></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
                {Array.isArray(t("tentang_kami.journey.timeline", { returnObjects: true })) && 
                  (t("tentang_kami.journey.timeline", { returnObjects: true }) as any[]).map((step, idx) => (
                    <div key={idx} className="flex flex-col items-center">
                      <div className="w-24 h-24 rounded-full bg-white shadow-xl shadow-blue-100/50 border border-slate-50 flex items-center justify-center text-primary-deep mb-8 transform hover:scale-110 transition-transform">
                        <div className="w-20 h-20 rounded-full border-2 border-dashed border-blue-100 flex items-center justify-center">
                          {[<Calendar size={28} strokeWidth={1.5} />, <Milestone size={28} strokeWidth={1.5} />, <MapPin size={28} strokeWidth={1.5} />, <TrendingUp size={28} strokeWidth={1.5} />][idx]}
                        </div>
                      </div>
                      <div className="text-[15px] font-bold text-primary-deep mb-2">{step.year}</div>
                      <h4 className="text-[17px] font-bold text-slate-800 mb-4">{step.title}</h4>
                      <p className="text-[13px] text-slate-500 leading-relaxed max-w-[240px] font-medium">
                        {step.desc}
                      </p>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-24">
           <div className="max-w-7xl mx-auto bg-primary-deep rounded-[2.5rem] overflow-hidden relative shadow-2xl">
             {/* Abstract Pattern / Background Leaves */}
             <div className="absolute inset-0 opacity-10 flex items-center justify-start pointer-events-none">
                <Sprout size={400} className="text-white -ml-20 -mt-20 transform -rotate-12" />
             </div>
             
             <div className="relative z-10 p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-12">
               <div className="text-center lg:text-left">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t("tentang_kami.cta.title")}</h2>
                  <p className="text-white/80 text-lg font-medium max-w-xl">
                    {t("tentang_kami.cta.desc")}
                  </p>
               </div>
               
               <div className="flex flex-wrap gap-5 justify-center shrink-0">
                  <Link 
                    to="/proyek" 
                    className="px-10 py-4 bg-white rounded-xl text-primary-deep font-bold hover:bg-slate-50 transition-all shadow-lg flex items-center gap-3"
                  >
                    {t("tentang_kami.cta.view_projects")} <ArrowRight size={20} />
                  </Link>
                  <Link 
                    to="/donasi"
                    className="px-10 py-4 bg-gradient-to-r from-[#e11d48] to-[#db2777] rounded-xl text-white font-bold hover:opacity-90 transition-all shadow-lg flex items-center gap-3"
                  >
                    <Heart size={20} fill="currentColor" /> {t("tentang_kami.cta.donate_now")}
                  </Link>
               </div>
             </div>
           </div>
        </section>
      </div>
    </div>
  );
}
