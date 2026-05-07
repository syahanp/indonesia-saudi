import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { 
  User, 
  History, 
  Heart, 
  Settings, 
  LogOut, 
  ChevronRight,
  PieChart as PieIcon,
  Award,
  ShieldCheck,
  Calendar,
  Grid
} from 'lucide-react';
import { 
  PieChart, 
  Pie, 
  Cell, 
  Tooltip, 
  ResponsiveContainer,
  Legend
} from 'recharts';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const donations = [
  { id: 1, date: '2025-04-15', amount: 5000, program: 'programs.jembatan.title', status: 'proyek.status_selesai' },
  { id: 2, date: '2025-03-22', amount: 2500, program: 'programs.listrik.title', status: 'proyek.status_selesai' },
  { id: 3, date: '2025-02-10', amount: 10000, program: 'programs.jembatan.title', status: 'proyek.status_selesai' },
  { id: 4, date: '2025-01-05', amount: 1500, program: 'programs.listrik.title', status: 'proyek.status_selesai' },
];

const COLORS = ['#0047FF', '#00D1FF', '#00E096', '#FFB800', '#FF3D77'];

const Account: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const chartData = [
    { name: t('programs.jembatan.title'), value: 65 },
    { name: t('programs.listrik.title'), value: 35 },
  ];

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 pt-24">
        <div className="text-center">
          <p className="text-slate-600 mb-4 font-bold">{t('account.no_auth')}</p>
          <button 
            onClick={() => navigate('/login')}
            className="btn-primary"
          >
            {t('account.back_to_login')}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8fbff] pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Profile */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-[2.5rem] p-8 lg:p-12 shadow-sm border border-slate-100 mb-10 flex flex-col md:flex-row items-center gap-10"
        >
          <div className="relative">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-slate-50 shadow-md">
              <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
            </div>
            <div className="absolute bottom-1 right-1 w-8 h-8 bg-primary-deep rounded-full flex items-center justify-center text-white border-2 border-white">
              <Settings size={14} />
            </div>
          </div>
          
          <div className="flex-grow text-center md:text-left">
            <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
              <h1 className="text-3xl font-extrabold text-[#0D2451]">{user.name}</h1>
              <span className="px-4 py-1.5 bg-[#eef4ff] text-primary-deep text-xs font-extrabold rounded-full w-fit mx-auto md:mx-0">
                {t('account.loyal_donor')}
              </span>
            </div>
            <p className="text-slate-500 font-bold mb-6">{user.email}</p>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <button className="flex items-center gap-2 px-5 py-2.5 bg-slate-50 text-[#0D2451] font-bold text-sm rounded-xl hover:bg-slate-100 transition-all">
                <Settings size={16} />
                {t('account.edit_profile')}
              </button>
              <button 
                onClick={handleLogout}
                className="flex items-center gap-2 px-5 py-2.5 bg-rose-50 text-rose-600 font-bold text-sm rounded-xl hover:bg-rose-100 transition-all"
              >
                <LogOut size={16} />
                {t('account.logout')}
              </button>
            </div>
          </div>

          <div className="hidden lg:grid grid-cols-1 gap-4 w-full max-w-[280px]">
             <div className="bg-[#f8fbff] p-8 rounded-3xl border border-slate-100 text-center">
                <p className="text-[12px] text-slate-400 font-extrabold uppercase tracking-wider mb-2">{t('account.total_donation')}</p>
                <p className="text-2xl font-extrabold text-primary-deep">{user.totalDonation.toLocaleString()} <span className="text-sm font-bold">AED</span></p>
             </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_380px] gap-10">
          
          {/* Main Dashboard Content */}
          <div className="space-y-10">
            
            {/* Impact Chart - Pie Chart */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-[2.5rem] p-8 lg:p-10 shadow-sm border border-slate-100"
            >
              <div className="flex justify-between items-center mb-10">
                <div>
                  <h3 className="text-xl font-extrabold text-[#0D2451] mb-1">{t('account.donation_impact')}</h3>
                  <p className="text-sm font-bold text-slate-400">{t('account.stats_desc')}</p>
                </div>
                <div className="hidden sm:flex items-center gap-2 text-primary-deep bg-[#eef4ff] px-4 py-2 rounded-xl text-sm font-bold">
                  <PieIcon size={16} />
                  <span>{chartData.length.toLocaleString(i18n.language)} {t('account.chart_categories')}</span>
                </div>
              </div>

              <div className="h-[320px] w-full relative">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={chartData}
                      cx="50%"
                      cy="50%"
                      innerRadius={80}
                      outerRadius={110}
                      paddingAngle={8}
                      dataKey="value"
                    >
                      {chartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ 
                        borderRadius: '16px', 
                        border: 'none', 
                        boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
                        fontWeight: 'bold'
                      }}
                      formatter={(value: number) => [`${value}%`, t('account.distribution')]}
                    />
                    <Legend 
                      verticalAlign="bottom" 
                      height={36}
                      iconType="circle"
                      formatter={(value) => <span className="text-xs font-bold text-slate-500">{value}</span>}
                    />
                  </PieChart>
                </ResponsiveContainer>
                
                {/* Central Label */}
                <div className="absolute top-[42%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
                   <p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest leading-none mb-1">{t('account.label_total')}</p>
                   <p className="text-2xl font-black text-primary-deep leading-none">{user.totalDonation.toLocaleString(i18n.language)}</p>
                   <p className="text-[10px] font-extrabold text-primary-deep uppercase tracking-widest leading-none mt-1">{t('dampak_laporan.currency')}</p>
                </div>
              </div>
            </motion.div>

            {/* Transaction History */}
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.2 }}
               className="bg-white rounded-[2.5rem] p-8 lg:p-10 shadow-sm border border-slate-100"
            >
               <div className="flex justify-between items-center mb-8">
                  <h3 className="text-xl font-extrabold text-[#0D2451]">{t('account.recent_history')}</h3>
                  <button className="text-sm font-bold text-primary-deep hover:underline">{t('account.view_all')}</button>
               </div>

               <div className="space-y-4">
                  {donations.map((donation) => (
                    <div 
                      key={donation.id}
                      className="flex items-center justify-between p-5 rounded-2xl border border-slate-50 hover:bg-[#f8fbff] transition-all group"
                    >
                      <div className="flex items-center gap-5">
                        <div className="w-12 h-12 rounded-xl bg-[#eef4ff] flex items-center justify-center text-primary-deep group-hover:scale-110 transition-transform">
                          <Heart size={20} fill="currentColor" />
                        </div>
                        <div>
                          <p className="text-[15px] font-extrabold text-[#0D2451] mb-1">{t(donation.program)}</p>
                          <div className="flex items-center gap-3 text-xs font-bold text-slate-400">
                            <span className="flex items-center gap-1">
                              <Calendar size={12} />
                              {new Date(donation.date).toLocaleDateString(i18n.language, { day: 'numeric', month: 'long', year: 'numeric' })}
                            </span>
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-200"></span>
                            <span className="text-emerald-500">{t(donation.status)}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-[16px] font-extrabold text-[#0D2451]">{donation.amount.toLocaleString(i18n.language)} {t('dampak_laporan.currency')}</p>
                        <button className="text-[12px] font-bold text-primary-deep flex items-center gap-1 mt-1 opacity-0 group-hover:opacity-100 transition-opacity ml-auto">
                          {t('account.certificate')} <ChevronRight size={14} />
                        </button>
                      </div>
                    </div>
                  ))}
               </div>
            </motion.div>
          </div>

          {/* Sidebar Area */}
          <div className="space-y-8">
            
            {/* Quick Actions Card */}
            <motion.div 
               initial={{ opacity: 0, x: 20 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ delay: 0.3 }}
               className="bg-primary-deep rounded-[2.5rem] p-8 text-white relative overflow-hidden shadow-xl shadow-blue-600/20"
            >
               <div className="relative z-10">
                  <h4 className="text-xl font-extrabold mb-6">{t('account.new_goodness')}</h4>
                  <p className="text-blue-100 text-sm font-bold leading-relaxed mb-8">{t('account.new_goodness_desc')}</p>
                  
                  <button 
                    onClick={() => navigate('/proyek')}
                    className="w-full py-4 bg-white text-primary-deep font-extrabold rounded-2xl text-sm hover:bg-blue-50 transition-all flex items-center justify-center gap-2"
                  >
                     <Grid size={16} />
                     {t('account.view_projects')}
                  </button>
               </div>
               
               {/* Abstract background shape */}
               <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
            </motion.div>

            {/* Help Card */}
            <motion.div 
               initial={{ opacity: 0, x: 20 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ delay: 0.5 }}
               className="bg-[#eef4ff] rounded-[2.5rem] p-8 border border-blue-100/50 shadow-sm"
            >
               <h4 className="text-lg font-extrabold text-primary-deep mb-3">{t('account.need_help')}</h4>
               <p className="text-sm text-slate-500 font-bold leading-relaxed mb-6">{t('account.support_desc')}</p>
               <button className="w-full py-4 bg-white text-primary-deep font-extrabold rounded-2xl text-sm shadow-sm hover:shadow-md transition-all">
                  {t('account.contact_support')}
               </button>
            </motion.div>

            {/* Information Card */}
            <motion.div 
               initial={{ opacity: 0, x: 20 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ delay: 0.6 }}
               className="bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-sm"
            >
               <h4 className="text-lg font-extrabold text-[#0D2451] mb-3">{t('account.data_security')}</h4>
               <p className="text-xs text-slate-400 font-bold leading-relaxed">
                 {t('account.data_security_desc')}
               </p>
            </motion.div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default Account;
