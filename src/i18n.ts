import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'id',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      id: {
        translation: {
          nav: {
            beranda: "Beranda",
            proyek: "Proyek",
            dampak_laporan: "Dampak & Laporan",
            tentang_kami: "Tentang Kami",
            donasi_sekarang: "Donasi Sekarang",
          },
          brand: {
            first: "BULAN",
            second: "SABIT BIRU",
            full: "Yayasan BULAN SABIT BIRU"
          },
          countries: {
            indonesia: "Indonesia",
            uae: "Uni Emirat Arab"
          },
          hero: {
            badge: "Didukung oleh para donatur dari Uni Emirat Arab",
            title: "Mewujudkan Dampak Nyata bagi Masyarakat yang Membutuhkan",
            subtitle: "Bersama para donatur, kami menghadirkan akses infrastruktur, energi, dan peluang bagi masyarakat di pelosok Indonesia.",
            cta_primary: "Donasi Sekarang",
            cta_secondary: "Pelajari Lebih Lanjut",
          },
          home_stats: {
            title: "Dampak Kami",
            update_label: "(Update April 2025)",
            beneficiaries: "Penerima Manfaat",
            beneficiaries_sub: "Di berbagai wilayah Indonesia",
            projects_completed: "Proyek Selesai",
            projects_sub: "Jembatan & Listrik",
            villages_impacted: "Desa Terdampak",
            villages_sub: "Di 6 Provinsi",
            collected: "AED 6.2M+",
            collected_label: "Donasi Terkumpul",
            from_donors: "Dari para donatur"
          },
          what_we_do: {
            title: "Apa yang Kami Lakukan",
            infrastructure: {
              title: "Membangun Infrastruktur Dasar",
              desc: "Membangun jembatan, akses listrik, dan fasilitas umum untuk membuka akses dan peluang bagi masyarakat."
            },
            community: {
              title: "Mengembangkan Komunitas",
              desc: "Memberdayakan masyarakat melalui edukasi, pelatihan, dan program ekonomi berkelanjutan."
            },
            kindness: {
              title: "Menebar Kebaikan",
              desc: "Menyalurkan bantuan dari donatur dengan amanah untuk memberikan manfaat yang sebesar-besarnya."
            }
          },
          programs: {
            title: "Program Kami",
            subtitle: "Kami berfokus pada pembangunan infrastruktur dasar yang membuka akses dan meningkatkan kualitas hidup masyarakat.",
            view_all: "Lihat semua program",
            jembatan: {
              title: "Jembatan Gantung",
              desc: "Menghubungkan masyarakat dengan akses ke pendidikan, layanan kesehatan, dan aktivitas ekonomi.",
              label1: "Jembatan Terbangun",
              label2: "Proyek Berjalan",
              label3: "Penerima Manfaat"
            },
            listrik: {
              title: "Listrik",
              desc: "Menyediakan akses listrik yang andal untuk desa-desa yang belum terjangkau.",
              label1: "Desa Teraliri Listrik",
              label2: "Proyek Berjalan",
              label3: "Rumah Tangga Terdampak"
            }
          },
          stats: {
            collected: "Donasi Terkumpul",
            from_donors: "Dari para donatur",
            latest_progress: "Perkembangan Terbaru",
            progress_desc: "Lihat bagaimana dukungan Anda memberikan perubahan nyata di lapangan.",
            view_all_projects: "Lihat semua proyek"
          },
          about_section: {
            title: "Tentang Yayasan BULAN SABIT BIRU",
            desc: "Yayasan BULAN SABIT BIRU adalah organisasi nirlaba yang berkomitmen meningkatkan kualitas hidup masyarakat di daerah terpencil melalui pembangunan infrastruktur dan program pengembangan komunitas.",
            learn_more: "Pelajari Lebih Lanjut",
            trust_title: "Transparansi 100%",
            trust_desc: "Setiap donasi digunakan sesuai tujuan program dan dapat dipertanggungjawabkan.",
            reach_title: "Berbasis Komunitas",
            reach_desc: "Kami bekerja bersama masyarakat lokal untuk menciptakan dampak yang berkelanjutan.",
            impact_title: "Dampak Berkelanjutan",
            impact_desc: "Kami menghadirkan solusi jangka panjang untuk manfaat bagi generasi mendatang."
          },
          footer: {
            brand_line1: "Berbagi Hari Ini,",
            brand_line2: "Memberi Harapan Esok",
            about_title: "Tentang Kami",
            about_desc: "Yayasan BULAN SABIT BIRU berkomitmen membangun infrastruktur dan memberdayakan masyarakat di pelosok Indonesia.",
            learn_more: "Selengkapnya",
            quick_links: "Tautan Cepat",
            info: "Informasi",
            support: "Dukungan",
            copyright: "© 2025 Yayasan BULAN SABIT BIRU. Semua Hak Dilindungi.",
            terms: "Syarat & Ketentuan",
            privacy: "Kebijakan Privasi",
            saudi_box: {
              title: "Dukung program kami dari Uni Emirat Arab",
              subtitle: "Informasi donasi lokal untuk donatur di Uni Emirat Arab",
              thanks: "شكراً لدعمكم المستمر"
            }
          },
          proyek: {
            hero_title: "Proyek Kami",
            hero_subtitle: "Jelajahi berbagai proyek yang sedang kami kerjakan di seluruh pelosok Indonesia. Setiap donasi Anda membawa perubahan nyata.",
            filter_title: "Filter Proyek",
            search_placeholder: "Cari nama proyek atau lokasi...",
            label_search: "Cari Proyek",
            label_program: "Program",
            label_status: "Status",
            label_province: "Provinsi",
            reset_filter: "Reset Filter",
            status_perencanaan: "Perencanaan",
            status_berjalan: "Berjalan",
            status_selesai: "Selesai",
            all_programs: "Semua Program",
            all_statuses: "Semua Status",
            all_provinces: "Semua Provinsi",
            view_grid: "Tampilan Grid",
            view_map: "Tampilan Peta",
            projects_found: "{{count}} proyek ditemukan",
            load_more: "Muat Lebih Banyak",
            quick_filter: "Filter Cepat",
            legend: "Legenda",
            labels: {
              progress: "Progres",
              collected: "Dana Terkumpul",
              target: "Total Kebutuhan",
              details: "Lihat Detail"
            },
            detail: {
              back_to_projects: "Kembali ke Proyek",
              category: "Kategori",
              start_date: "Mulai Proyek",
              end_date: "Target Selesai",
              project_id: "ID Proyek",
              view_all_photos: "Lihat Semua Foto",
              about_title: "Tentang Proyek",
              progress_title: "Progres Proyek",
              overall_progress: "Progres Keseluruhan",
              updates_title: "Pembaruan Proyek",
              updates_subtitle: "Dokumentasi perkembangan proyek dari waktu ke waktu.",
              view_all_updates: "Lihat Semua Pembaruan",
              expected_impact: "Dampak yang Diharapkan",
              impact_subtitle: "Setelah proyek ini selesai, manfaat yang akan dirasakan oleh masyarakat.",
              funding_summary: "Ringkasan Pendanaan",
              funds_needed: "Dana Dibutuhkan",
              funds_collected: "Dana Terkumpul",
              remaining_funds: "Sisa Kebutuhan",
              funds_usage: "Rincian Penggunaan Dana",
              trust_badge: "100% donasi digunakan sesuai tujuan proyek.",
              support_title: "Dukung Proyek Ini",
              support_desc: "Bantuan Anda akan mempercepat penyelesaian proyek dan memberikan manfaat bagi lebih banyak masyarakat.",
              share_project: "Bagikan Proyek",
              donors_support: "Didukung oleh Para Donatur",
              donors_thanks: "Terima kasih kepada para donatur dari Uni Emirat Arab dan semua pihak yang telah berkontribusi.",
              view_all_donors: "Lihat Semua Donatur",
              other_donors: "+ {{count}} Donatur Lainnya",
              status_waiting: "Menunggu",
              impact_items: {
                beneficiaries: { title: "Warga Terbantu", desc: "Akses aman setiap hari" },
                students: { title: "Anak Sekolah", desc: "Bisa berangkat sekolah dengan aman" },
                time: { title: "Waktu Tempuh", desc: "Lebih cepat ke sekolah dan fasilitas kesehatan" },
                economy: { title: "Peningkatan Ekonomi", desc: "Mempermudah distribusi hasil pertanian dan aktivitas ekonomi" }
              },
              funds_usage_items: {
                construction: "Konstruksi & Material",
                logistics: "Transportasi & Logistik",
                labor: "Tenaga Kerja Lokal",
                admin: "Administrasi"
              },
              quote_text: '"Dan apa saja yang kamu infakkan, maka Allah akan menggantinya... Dan Dialah Pemberi rezeki yang sebaik-baiknya."',
              quote_ref: "(QS. Saba: 39)",
              investment_text: "Setiap donasi adalah investasi akhirat dan harapan baru bagi mereka."
            },
            program_detail: {
              label: "PROGRAM",
              about_title: "Tentang Program Ini",
              main_benefits: "Manfaat Utama",
              program_impact: "Dampak Program",
              family_connected: "Keluarga Terhubung",
              villages_impacted: "Desa Terdampak",
              projects_in_program: "Proyek dalam Program {{title}}",
              projects_subtitle: "Daftar proyek {{title}} yang sedang kami kerjakan di berbagai wilayah Indonesia.",
              view_label: "Tampilan",
              view_grid: "Grid",
              view_map: "Peta",
              load_more_projects: "Lihat Lebih Banyak Proyek",
              support_banner_title: "Dukung Program {{title}}",
              support_banner_desc: "Setiap donasi Anda membantu kami membangun lebih banyak infrastruktur dan menghubungkan lebih banyak harapan.",
              how_to_donate: "Lihat Cara Berdonasi",
              hero_desc: "Kami membangun solusi infrastruktur di desa-desa terpencil untuk mengatasi keterisoliran dan membuka akses menuju kehidupan yang lebih baik.",
              about_p1: "Banyak desa di Indonesia masih terpisah oleh sungai, lembah, atau jurang yang tidak memiliki akses jembatan yang aman. Kondisi ini menyulitkan anak-anak untuk pergi ke sekolah, warga mendapatkan layanan kesehatan, dan petani untuk memasarkan hasil panen.",
              about_p2: "Program Jembatan Gantung hadir untuk memberikan solusi berkelanjutan dengan membangun jembatan yang kuat, aman, dan dapat dimanfaatkan oleh masyarakat dalam jangka panjang.",
              benefit1: "Akses pendidikan lebih mudah bagi anak-anak",
              benefit2: "Akses layanan kesehatan lebih cepat dan aman",
              benefit3: "Peningkatan aktivitas ekonomi dan perdagangan",
              benefit4: "Mempererat konektivitas antar desa",
              benefit5: "Mendorong pembangunan wilayah secara menyeluruh",
              planning_step: "Perencanaan",
              funding_step: "Penggalangan Dana",
              construction_step: "Pembangunan",
              finishing_step: "Finishing",
              completed_step: "Selesai"
            },
            projects: {
              "KJ-2025-0012": { title: "Jembatan Desa Lembah Harapan", loc: "Sulawesi Tengah", desc: "Pembangunan jembatan gantung untuk menghubungkan desa dengan akses sekolah dan layanan kesehatan." },
              "KJ-2025-0013": { title: "Listrik Masuk Desa Suka Maju", loc: "Nusa Tenggara Barat", desc: "Program penyediaan listrik tenaga surya untuk 120 rumah di desa yang belum terjangkau listrik PLN." },
              "KJ-2025-0014": { title: "Jembatan Desa Watu Mori", loc: "Nusa Tenggara Timur", desc: "Pembangunan jembatan gantung sepanjang 120 meter untuk akses utama masyarakat." },
              "KJ-2025-0015": { title: "Listrik Masuk Desa Bintang Timur", loc: "Sulawesi Selatan", desc: "Rencana penyediaan listrik solar home system untuk 150 rumah di wilayah terpencil." },
              "KJ-2025-0016": { title: "Jembatan Desa Mekar Jaya", loc: "Kalimantan Barat", desc: "Pembangunan jembatan gantung untuk menghubungkan desa dengan pusat ekonomi dan pendidikan." },
              "KJ-2025-0017": { title: "Listrik Masuk Desa Sinar Harapan", loc: "Maluku", desc: "Perencanaan instalasi listrik untuk 80 rumah di wilayah kepulauan." },
              "KJ-2025-0018": { title: "Jembatan Sungai Deli", loc: "Sumatera Utara", desc: "Renovasi jembatan utama untuk kelancaran transportasi warga antar desa." },
              "KJ-2025-0019": { title: "Listrik Masuk Desa Siak", loc: "Riau", desc: "Instalasi tenaga surya berkapasitas tinggi untuk penerangan desa di malam hari." },
              "KJ-2025-0020": { title: "Jembatan Gantung Garut Selatan", loc: "Jawa Barat", desc: "Akses vital bagi perekonomian warga yang terhambat kondisi sungai." },
              "KJ-2025-0021": { title: "Jembatan Anak Air", loc: "Sumatera Barat", desc: "Rencana pembangunan jembatan gantung pertama untuk pemukiman terpelosok." },
              "KJ-2025-0022": { title: "Listrik Masuk Desa Ngadas", loc: "Jawa Timur", desc: "Proses pemasangan jalur listrik di kawasan pegunungan terisolir." },
              "KJ-2025-0023": { title: "Penerangan Distrik Sentani", loc: "Papua", desc: "Sistem pencahayaan desa menggunakan panel surya komunal." },
              "KJ-2025-0024": { title: "Jembatan Gantung Meulaboh", loc: "Aceh", desc: "Perencanaan pengadaan jembatan bambu menjadi jembatan baja." },
              "KJ-2025-0025": { title: "Listrik Masuk Desa Mahakam", loc: "Kalimantan Timur", desc: "Pengembangan infrastruktur listrik agar anak sekolah dapat belajar di malam hari." },
              "KJ-2025-0026": { title: "Jembatan Minahasa", loc: "Sulawesi Utara", desc: "Menyatukan dua desa yang terpisah aliran sungai deras." },
              "KJ-2025-0027": { title: "Listrik Masuk Desa Kintamani", loc: "Bali", desc: "Tahap awal pemasangan tiang listrik dan gardu induk desa." }
            }
          },
          dampak_laporan: {
              title: "Dampak & Laporan",
              desc: "Transparansi adalah amanah. Kami berkomitmen untuk menyajikan laporan keuangan dan perkembangan proyek secara terbuka dan akuntabel.",
              select_period: "Pilih Periode",
              periods: {
                all: "Semua Waktu",
                last3: "3 Bulan Terakhir",
                last6: "6 Bulan Terakhir",
                last12: "1 Tahun Terakhir"
              },
              data_until: "Data hingga {{date}}",
              download_report: "Unduh Laporan",
              view_projects: "Lihat Proyek",
              stats: {
                beneficiaries: "Penerima Manfaat",
                beneficiaries_sub: "di berbagai wilayah Indonesia",
                completed: "Proyek Selesai",
                completed_sub: "Jembatan & Listrik",
                villages: "Desa Terdampak",
                villages_sub: "di 6 Provinsi",
                electricity: "Desa Berlistrik",
                electricity_sub: "Akses listrik andal",
                total_donation: "Total Donasi Terkumpul",
                donors_sub: "dari para donatur",
                from_previous: "dari periode sebelumnya"
              },
              transparency: {
                title: "Transparansi Keuangan",
                period_label: "Periode: {{period}}",
                total_funds: "Total Dana",
                categories: {
                  program: "Program & Proyek",
                  operational: "Operasional",
                  fundraising: "Penggalangan Dana",
                  reserve: "Cadangan"
                },
                trust_badge: "100% dana donasi digunakan untuk pelaksanaan program dan proyek.",
                trust_desc: "Biaya operasional dijaga seminimal mungkin untuk memastikan dampak maksimal.",
                usage_details: "Rincian Penggunaan Dana",
                total: "Total"
              },
              periodic_reports: {
                title: "Laporan Berkala",
                subtitle: "Unduh laporan keuangan, program, dan dampak kami secara berkala.",
                view_all: "Lihat Semua Laporan",
                items: {
                  monthly: "Laporan {{month}} {{year}}",
                  annual: "Laporan Tahunan {{year}}",
                  period_monthly: "Periode {{month}} {{year}}",
                  period_annual: "Periode Jan - Des {{year}}"
                }
              },
              months: {
                january: "Januari",
                february: "Februari",
                march: "Maret",
                april: "April",
                may: "Mei",
                june: "Juni",
                july: "Juli",
                august: "Agustus",
                september: "September",
                october: "Oktober",
                november: "November",
                december: "Desember"
              },
              project_progress: {
                title: "Ringkasan Perkembangan Proyek",
                subtitle: "Status kemajuan proyek utama yang sedang berjalan.",
                view_all: "Lihat Semua Proyek",
                cols: {
                  project: "Proyek",
                  location: "Lokasi",
                  type: "Jenis",
                  progress: "Progres",
                  status: "Status"
                }
              },
              commitments: {
                title: "Komitmen Transparansi Kami",
                items: [
                  { title: "Laporan diperbarui secara berkala", desc: "Kami rutin memperbarui laporan keuangan dan perkembangan proyek setiap bulan." },
                  { title: "Setiap proyek dapat dipantau", desc: "Donatur dapat melihat progres proyek secara real-time melalui halaman proyek." },
                  { title: "Dana digunakan sesuai tujuan", desc: "Seluruh dana disalurkan untuk program dan proyek yang memberi dampak nyata." },
                  { title: "Terbuka bagi donatur", desc: "Kami terbuka terhadap masukan dan pertanyaan dari para donatur." }
                ]
              },
              cta: {
                title: "Bersama, Kita Ciptakan Dampak yang Berkelanjutan",
                desc: "Setiap donasi Anda adalah amanah yang membawa perubahan nyata bagi masyarakat di pelosok Indonesia."
              }
          },
          tentang_kami: {
            hero: {
              title: "Menghubungkan Kebaikan dari Uni Emirat Arab untuk Indonesia",
              subtitle: "Yayasan Bulan Sabit Biru menjembatani dukungan para donatur dari Uni Emirat Arab untuk menghadirkan perubahan nyata bagi masyarakat di pelosok Indonesia."
            },
            stats: {
              since: "Sejak",
              founded: "Tahun Berdiri",
              completed: "Proyek Selesai",
              beneficiaries: "Penerima Manfaat",
              provinces: "Provinsi"
            },
            connection: {
              id_title: "Banyak daerah di pelosok Indonesia masih menghadapi tantangan:",
              id_list: [
                "Infrastruktur terbatas",
                "Akses listrik minim",
                "Akses pendidikan dan kesehatan sulit",
                "Peluang ekonomi terbatas"
              ],
              center_title: "Kami menghubungkan keduanya menjadi dampak nyata.",
              center_desc: "Kebaikan dari para donatur di Uni Emirat Arab kami salurkan secara amanah, transparan, dan tepat sasaran untuk membangun masa depan yang lebih baik bagi masyarakat Indonesia.",
              sa_title: "Para donatur dari Uni Emirat Arab memiliki kekuatan luar biasa:",
              sa_list: [
                "Semangat berbagi yang tinggi",
                "Donasi berkelanjutan",
                "Kepedulian terhadap sesama umat manusia",
                "Nilai-nilai Islam yang mendorong kebaikan"
              ]
            },
            values: {
              title: "Nilai-Nilai Kami",
              list: {
                transparency: "Transparansi",
                transparency_desc: "Kami kelola setiap donasi dengan jujur dan terbuka.",
                sustainability: "Keberlanjutan",
                sustainability_desc: "Kami bangun solusi jangka panjang dan berdampak.",
                collaboration: "Kolaborasi",
                collaboration_desc: "Kami bekerja bersama masyarakat, donatur, dan mitra.",
                impact: "Dampak Nyata",
                impact_desc: "Setiap program kami fokus pada perubahan yang terukur.",
                integrity: "Integritas",
                integrity_desc: "Kami menjunjung tinggi etika, amanah, dan tanggung jawab."
              }
            },
            journey: {
              title: "Perjalanan Kami",
              timeline: [
                { year: "2016", title: "Awal Berdiri", desc: "Yayasan BULAN SABIT BIRU didirikan dengan visi membawa perubahan nyata bagi masyarakat pelosok." },
                { year: "2017 – 2019", title: "Langkah Awal", desc: "Fokus pada pembangunan infrastruktur dasar dan bantuan kemanusiaan di berbagai wilayah terpencil." },
                { year: "2020 – 2022", title: "Berkembang & Meluas", desc: "Program diperluas ke lebih banyak provinsi dan melibatkan lebih banyak mitra lokal." },
                { year: "2023 – Sekarang", title: "Dampak Berkelanjutan", desc: "Terus berinovasi dan berkomitmen mewujudkan dampak jangka panjang bagi masyarakat Indonesia." }
              ]
            },
            cta: {
              title: "Mari Jadi Bagian dari Perubahan",
              desc: "Setiap dukungan Anda adalah harapan baru bagi mereka yang membutuhkan.",
              view_projects: "Lihat Proyek",
              donate_now: "Donasi Sekarang"
            },
            partnership: {
              title: "Kemitraan Strategis",
              desc: "Yayasan Bulan Sabit Biru bangga berkolaborasi dengan Bulan Sabit Merah dalam berbagai misi kemanusiaan dan pembangunan di seluruh wilayah Indonesia.",
              label: "Kolaborasi Kemanusiaan",
              mission_title: "Misi Bersama Kami",
              mission_desc: "Menyatukan sumber daya dan keahlian untuk memberikan dampak yang lebih luas bagi keselamatan dan kesejahteraan masyarakat yang membutuhkan.",
              items: ["Mitigasi Bencana", "Penyaluran Logistik Terpadu", "Program Kesehatan Masyarakat"]
            }
          },
          login: {
            welcome: "Selamat Datang di",
            subtitle: "Masuk untuk melanjutkan perjalanan kebaikan bersama Yayasan Bulan Sabit Biru.",
            features: {
              secure: {
                title: "Aman & Terpercaya",
                desc: "Data Anda kami lindungi dengan sistem keamanan berlapis."
              },
              impact: {
                title: "Berdampak Nyata",
                desc: "Setiap donasi Anda membawa perubahan nyata bagi masyarakat."
              },
              transparent: {
                title: "Transparan & Akuntabel",
                desc: "Kami melaporkan setiap penggunaan dana secara terbuka."
              },
              sustainable: {
                title: "Terukur & Berkelanjutan",
                desc: "Program kami dirancang untuk dampak jangka panjang yang berkelanjutan."
              }
            },
            form_title: "Masuk ke Akun Anda",
            form_subtitle: "Silakan masuk untuk mengakses dashboard donatur dan melihat dampak donasi Anda.",
            email_label: "Email atau Nomor Telepon",
            email_placeholder: "Masukkan email atau nomor telepon",
            password_label: "Kata Sandi",
            password_placeholder: "Masukkan kata sandi",
            forgot_password: "Lupa kata sandi?",
            remember_me: "Ingat saya",
            submit: "Masuk",
            or_with: "atau masuk dengan",
            google: "Lanjutkan dengan Google",
            apple: "Lanjutkan dengan Apple",
            no_account: "Belum punya akun?",
            register: "Daftar sekarang",
            stats: {
              secure_title: "100% Aman",
              secure_desc: "Sistem keamanan berstandar tinggi",
              donors_title: "10.000+",
              donors_desc: "Donatur Terpercaya",
              beneficiaries_title: "1.850+",
              beneficiaries_desc: "Penerima Manfaat",
              transparent_title: "Transparan",
              transparent_desc: "Laporan dampak terbuka untuk publik"
            }
          },
          account: {
            profile: "Profil",
            edit_profile: "Edit Profil",
            logout: "Keluar",
            loyal_donor: "Donatur Loyal",
            total_donation: "Total Donasi (AED)",
            donation_impact: "Dampak Donasi Berdasarkan Kategori",
            stats_desc: "Distribusi kontribusi Anda pada berbagai program pembangunan.",
            recent_history: "Riwayat Donasi Terbaru",
            view_all: "Lihat Semua",
            certificate: "Sertifikat",
            need_help: "Butuh Bantuan?",
            support_desc: "Tim dukungan kami siap membantu Anda 24/7 untuk urusan donasi.",
            contact_support: "Hubungi Support",
            no_auth: "Anda harus masuk untuk melihat halaman ini.",
            back_to_login: "Ke Halaman Login",
            label_total: "Total",
            thousand: "RB",
            routine_donor: "Donatur Rutin 6 Bln",
            category: {
              infrastructure: "Infrastruktur",
              community: "Komunitas",
              education: "Edukasi",
              health: "Kesehatan",
              energy: "Energi"
            }
          }
        },
      },
      en: {
        translation: {
          nav: {
            beranda: "Home",
            proyek: "Projects",
            dampak_laporan: "Impact & Reports",
            tentang_kami: "About Us",
            donasi_sekarang: "Donate Now",
          },
          brand: {
            first: "BLUE",
            second: "CRESCENT",
            full: "Blue Crescent Foundation"
          },
          countries: {
            indonesia: "Indonesia",
            uae: "United Arab Emirates"
          },
          hero: {
            badge: "Supported by donors from the United Arab Emirates",
            title: "Realizing Real Impact for People in Need",
            subtitle: "Together with donors, we provide access to infrastructure, energy, and opportunities for people in remote areas of Indonesia.",
            cta_primary: "Donate Now",
            cta_secondary: "Learn More",
          },
          home_stats: {
            title: "Our Impact",
            update_label: "(Update April 2025)",
            beneficiaries: "Beneficiaries",
            beneficiaries_sub: "In various regions of Indonesia",
            projects_completed: "Projects Completed",
            projects_sub: "Bridges & Electricity",
            villages_impacted: "Villages Impacted",
            villages_sub: "In 6 Provinces",
            collected: "AED 6.2M+",
            collected_label: "Donations Collected",
            from_donors: "From our donors"
          },
          what_we_do: {
            title: "What We Do",
            infrastructure: {
              title: "Building Basic Infrastructure",
              desc: "Building bridges, electricity access, and public facilities to open access and opportunities for the community."
            },
            community: {
              title: "Developing Community",
              desc: "Empowering communities through education, training, and sustainable economic programs."
            },
            kindness: {
              title: "Spreading Kindness",
              desc: "Distributing aid from donors with integrity to provide the greatest possible benefit."
            }
          },
          programs: {
            title: "Our Programs",
            subtitle: "We focus on building basic infrastructure that opens access and improves people's quality of life.",
            view_all: "View all programs",
            jembatan: {
              title: "Suspension Bridges",
              desc: "Connecting communities with access to education, healthcare, and economic activities.",
              label1: "Bridges Built",
              label2: "Ongoing Projects",
              label3: "Beneficiaries"
            },
            listrik: {
              title: "Electricity",
              desc: "Providing reliable electricity access for remote villages.",
              label1: "Electrified Villages",
              label2: "Ongoing Projects",
              label3: "Impacted Households"
            }
          },
          stats: {
            collected: "Donations Collected",
            from_donors: "From our donors",
            latest_progress: "Latest Progress",
            progress_desc: "See how your support is making a real difference on the ground.",
            view_all_projects: "View all projects"
          },
          about_section: {
            title: "About Blue Crescent Foundation",
            desc: "Blue Crescent Foundation is a non-profit organization committed to improving the quality of life of communities in remote areas through infrastructure development and community development programs.",
            learn_more: "Learn More",
            trust_title: "100% Transparency",
            trust_desc: "Every donation is used according to the program objectives and is accountable.",
            reach_title: "Community Based",
            reach_desc: "We work together with local communities to create sustainable impact.",
            impact_title: "Sustainable Impact",
            impact_desc: "We provide long-term solutions for the benefit of future generations."
          },
          footer: {
            brand_line1: "Share Today,",
            brand_line2: "Give Hope Tomorrow",
            about_title: "About Us",
            about_desc: "Blue Crescent Foundation is committed to building infrastructure and empowering communities in remote Indonesia.",
            learn_more: "Read More",
            quick_links: "Quick Links",
            info: "Information",
            support: "Support",
            copyright: "© 2025 Blue Crescent Foundation. All Rights Reserved.",
            terms: "Terms & Conditions",
            privacy: "Privacy Policy",
            saudi_box: {
              title: "Support our programs from the United Arab Emirates",
              subtitle: "Local donation information for donors in the United Arab Emirates",
              thanks: "شكراً لدعمكم المستمر"
            }
          },
          proyek: {
            hero_title: "Our Projects",
            hero_subtitle: "Explore various projects we are working on across Indonesia. Every donation of yours brings real change.",
            filter_title: "Filter Projects",
            search_placeholder: "Search project name or location...",
            label_search: "Search Projects",
            label_program: "Program",
            label_status: "Status",
            label_province: "Province",
            reset_filter: "Reset Filter",
            status_perencanaan: "Planning",
            status_berjalan: "Ongoing",
            status_selesai: "Completed",
            all_programs: "All Programs",
            all_statuses: "All Statuses",
            all_provinces: "All Provinces",
            view_grid: "Grid View",
            view_map: "Map View",
            projects_found: "{{count}} projects found",
            load_more: "Load More",
            quick_filter: "Quick Filter",
            legend: "Legend",
            labels: {
              progress: "Progress",
              collected: "Funds Collected",
              target: "Total Needs",
              details: "View Details"
            },
            detail: {
              back_to_projects: "Back to Projects",
              category: "Category",
              start_date: "Project Start",
              end_date: "Target Completion",
              project_id: "Project ID",
              view_all_photos: "View All Photos",
              about_title: "About the Project",
              progress_title: "Project Progress",
              overall_progress: "Overall Progress",
              updates_title: "Project Updates",
              updates_subtitle: "Documentation of project progress over time.",
              view_all_updates: "View All Updates",
              expected_impact: "Expected Impact",
              impact_subtitle: "Once this project is completed, the benefits will be felt by the community.",
              funding_summary: "Funding Summary",
              funds_needed: "Funds Needed",
              funds_collected: "Funds Collected",
              remaining_funds: "Remaining Needs",
              funds_usage: "Details of Fund Usage",
              trust_badge: "100% of donations are used according to project objectives.",
              support_title: "Support This Project",
              support_desc: "Your help will speed up the completion of the project and benefit more people.",
              share_project: "Share Project",
              donors_support: "Supported by Donors",
              donors_thanks: "Thanks to donors from the United Arab Emirates and everyone who has contributed.",
              view_all_donors: "View All Donors",
              other_donors: "+ {{count}} Other Donors",
              status_waiting: "Waiting",
              impact_items: {
                beneficiaries: { title: "Citizens Helped", desc: "Safe access every day" },
                students: { title: "School Children", desc: "Can go to school safely" },
                time: { title: "Travel Time", desc: "Faster to schools and health facilities" },
                economy: { title: "Economic Improvement", desc: "Eases distribution of crops and economic activities" }
              },
              funds_usage_items: {
                construction: "Construction & Materials",
                logistics: "Transportation & Logistics",
                labor: "Local Labor",
                admin: "Administration"
              },
              quote_text: '"And whatever you spend in expenses, He will replace it... And He is the best of providers."',
              quote_ref: "(QS. Saba: 39)",
              investment_text: "Every donation is an investment for the hereafter and a new hope for them."
            },
            program_detail: {
              label: "PROGRAM",
              about_title: "About Program",
              main_benefits: "Main Benefits",
              program_impact: "Program Impact",
              family_connected: "Families Connected",
              villages_impacted: "Villages Impacted",
              projects_in_program: "Projects in {{title}} Program",
              projects_subtitle: "List of {{title}} projects we are working on in various regions of Indonesia.",
              view_label: "View",
              view_grid: "Grid",
              view_map: "Map",
              load_more_projects: "View More Projects",
              support_banner_title: "Support the {{title}} Program",
              support_banner_desc: "Every donation of yours helps us build more infrastructure and connect more hopes.",
              how_to_donate: "How to Donate",
              hero_desc: "We build infrastructure solutions in remote villages to overcome isolation and open access to a better life.",
              about_p1: "Many villages in Indonesia are still separated by rivers, valleys, or ravines that do not have safe bridge access. This condition makes it difficult for children to go to school, residents to get health services, and farmers to market their crops.",
              about_p2: "The Suspension Bridge Program is here to provide sustainable solutions by building strong, safe bridges that can be utilized by the community in the long term.",
              benefit1: "Easier access to education for children",
              benefit2: "Faster and safer access to healthcare services",
              benefit3: "Increased economic activity and trade",
              benefit4: "Strengthening connectivity between villages",
              benefit5: "Encouraging comprehensive regional development",
              planning_step: "Planning",
              funding_step: "Fundraising",
              construction_step: "Construction",
              finishing_step: "Finishing",
              completed_step: "Completed"
            },
            projects: {
              "KJ-2025-0012": { title: "Lembah Harapan Village Bridge", loc: "Central Sulawesi", desc: "Construction of a suspension bridge to connect the village with access to schools and health services." },
              "KJ-2025-0013": { title: "Electricity for Suka Maju Village", loc: "West Nusa Tenggara", desc: "Solar power provision program for 120 houses in a village not yet reached by PLN electricity." },
              "KJ-2025-0014": { title: "Watu Mori Village Bridge", loc: "East Nusa Tenggara", desc: "Construction of a 120-meter suspension bridge for primary community access." },
              "KJ-2025-0015": { title: "Electricity for Bintang Timur Village", loc: "South Sulawesi", desc: "Solar home system provision plan for 150 houses in a remote area." },
              "KJ-2025-0016": { title: "Mekar Jaya Village Bridge", loc: "West Kalimantan", desc: "Construction of a suspension bridge to connect the village with economic and educational centers." },
              "KJ-2025-0017": { title: "Electricity for Sinar Harapan Village", loc: "Maluku", desc: "Electrical installation planning for 80 houses in island territories." },
              "KJ-2025-0018": { title: "Deli River Bridge", loc: "North Sumatra", desc: "Renovation of the main bridge for the smooth transportation of residents between villages." },
              "KJ-2025-0019": { title: "Electricity for Siak Village", loc: "Riau", desc: "High-capacity solar installation for village lighting at night." },
              "KJ-2025-0020": { title: "South Garut Suspension Bridge", loc: "West Java", desc: "Vital access for residents' economy hindered by river conditions." },
              "KJ-2025-0021": { title: "Anak Air Bridge", loc: "West Sumatra", desc: "Plan for the first suspension bridge for an isolated settlement." },
              "KJ-2025-0022": { title: "Electricity for Ngadas Village", loc: "East Java", desc: "Installation process of electricity lines in a remote mountainous area." },
              "KJ-2025-0023": { title: "Sentani District Lighting", loc: "Papua", desc: "Village lighting system using communal solar panels." },
              "KJ-2025-0024": { title: "Meulaboh Suspension Bridge", loc: "Aceh", desc: "Planning to upgrade a bamboo bridge into a steel bridge." },
              "KJ-2025-0025": { title: "Electricity for Mahakam Village", loc: "East Kalimantan", desc: "Development of electrical infrastructure for schoolchildren to study at night." },
              "KJ-2025-0026": { title: "Minahasa Bridge", loc: "North Sulawesi", desc: "Uniting two villages separated by a strong river current." },
              "KJ-2025-0027": { title: "Electricity for Kintamani Village", loc: "Bali", desc: "Early stage of installing utility poles and village power substation." }
            }
          },
          dampak_laporan: {
              title: "Impact & Reports",
              desc: "Transparency is a trust. We are committed to presenting financial reports and project developments openly and accountably.",
              select_period: "Select Period",
              periods: {
                all: "All Time",
                last3: "Last 3 Months",
                last6: "Last 6 Months",
                last12: "Last 1 Year"
              },
              data_until: "Data until {{date}}",
              download_report: "Download Report",
              view_projects: "View Projects",
              stats: {
                beneficiaries: "Beneficiaries",
                beneficiaries_sub: "in various regions of Indonesia",
                completed: "Projects Completed",
                completed_sub: "Bridges & Electricity",
                villages: "Villages Impacted",
                villages_sub: "in 6 Provinces",
                electricity: "Villages Electrified",
                electricity_sub: "Reliable electricity access",
                total_donation: "Total Donations Collected",
                donors_sub: "from donors",
                from_previous: "from previous period"
              },
              transparency: {
                title: "Financial Transparency",
                period_label: "Period: {{period}}",
                total_funds: "Total Funds",
                categories: {
                  program: "Programs & Projects",
                  operational: "Operational",
                  fundraising: "Fundraising",
                  reserve: "Reserve"
                },
                trust_badge: "100% of donation funds are used for program and project implementation.",
                trust_desc: "Operational costs are kept to a minimum to ensure maximum impact.",
                usage_details: "Fund Usage Details",
                total: "Total"
              },
              periodic_reports: {
                title: "Periodic Reports",
                subtitle: "Download our financial, program, and impact reports periodically.",
                view_all: "View All Reports",
                items: {
                  monthly: "{{month}} {{year}} Report",
                  annual: "{{year}} Annual Report",
                  period_monthly: "Period {{month}} {{year}}",
                  period_annual: "Period Jan - Dec {{year}}"
                }
              },
              months: {
                january: "January",
                february: "February",
                march: "March",
                april: "April",
                may: "May",
                june: "June",
                july: "July",
                august: "August",
                september: "September",
                october: "October",
                november: "November",
                december: "December"
              },
              project_progress: {
                title: "Project Development Summary",
                subtitle: "Status of progress for main ongoing projects.",
                view_all: "View All Projects",
                cols: {
                  project: "Project",
                  location: "Location",
                  type: "Type",
                  progress: "Progress",
                  status: "Status"
                }
              },
              commitments: {
                title: "Our Transparency Commitment",
                items: [
                  { title: "Reports updated periodically", desc: "We routinely update financial and project development reports every month." },
                  { title: "Every project can be monitored", desc: "Donors can see project progress in real-time through the project page." },
                  { title: "Funds used as intended", desc: "All funds are distributed for programs and projects that provide real impact." },
                  { title: "Open to donors", desc: "We are open to input and questions from donors." }
                ]
              },
              cta: {
                title: "Together, We Create Sustainable Impact",
                desc: "Every donation of yours is a trust that brings real change to people in remote parts of Indonesia."
              }
          },
          tentang_kami: {
            hero: {
              title: "Connecting Kindness from United Arab Emirates for Indonesia",
              subtitle: "Blue Crescent Foundation bridges the support of donors from the United Arab Emirates to bring real change to communities in remote Indonesia."
            },
            stats: {
              since: "Since",
              founded: "Year Founded",
              completed: "Projects Completed",
              beneficiaries: "Beneficiaries",
              provinces: "Provinces"
            },
            connection: {
              id_title: "Many regions in remote Indonesia still face challenges:",
              id_list: [
                "Limited infrastructure",
                "Minimum electricity access",
                "Difficult access to education and health",
                "Limited economic opportunities"
              ],
              center_title: "We connect both into a real impact.",
              center_desc: "The kindness of donors in the United Arab Emirates we distribute with integrity, transparency, and targeted to build a better future for the Indonesian people.",
              sa_title: "Donors from the United Arab Emirates have extraordinary power:",
              sa_list: [
                "High spirit of sharing",
                "Sustainable donations",
                "Caring for fellow human beings",
                "Islamic values that drive kindness"
              ]
            },
            values: {
              title: "Our Values",
              list: {
                transparency: "Transparency",
                transparency_desc: "We manage every donation honestly and openly.",
                sustainability: "Sustainability",
                sustainability_desc: "We build long-term and impactful solutions.",
                collaboration: "Collaboration",
                collaboration_desc: "We work together with communities, donors, and partners.",
                impact: "Real Impact",
                impact_desc: "Each of our programs focuses on measurable change.",
                integrity: "Integrity",
                integrity_desc: "We uphold ethics, mandates, and responsibilities."
              }
            },
            journey: {
              title: "Our Journey",
              timeline: [
                { year: "2016", title: "Founding", desc: "Blue Crescent Foundation was established with a vision to bring real change to remote communities." },
                { year: "2017 – 2019", title: "First Steps", desc: "Focus on basic infrastructure development and humanitarian aid in various remote areas." },
                { year: "2020 – 2022", title: "Expanding", desc: "Programs expanded to more provinces and involved more local partners." },
                { year: "2023 – Present", title: "Sustainable Impact", desc: "Continuing to innovate and commit to realizing long-term impact for the Indonesian people." }
              ]
            },
            cta: {
              title: "Let's Be Part of the Change",
              desc: "Every support from you is a new hope for those in need.",
              view_projects: "View Projects",
              donate_now: "Donate Now"
            },
            partnership: {
              title: "Strategic Partnership",
              desc: "Blue Crescent Foundation is proud to collaborate with the Red Crescent in various humanitarian and development missions across Indonesia.",
              label: "Humanitarian Collaboration",
              mission_title: "Our Shared Mission",
              mission_desc: "Uniting resources and expertise to provide a broader impact on the safety and well-being of communities in need.",
              items: ["Disaster Mitigation", "Integrated Logistics Distribution", "Community Health Programs"]
            }
          },
          login: {
            welcome: "Welcome to",
            subtitle: "Log in to continue your journey of kindness together with Blue Crescent Foundation.",
            features: {
              secure: {
                title: "Safe & Trusted",
                desc: "We protect your data with multi-layered security systems."
              },
              impact: {
                title: "Real Impact",
                desc: "Every donation from you brings real change to the community."
              },
              transparent: {
                title: "Transparent & Accountable",
                desc: "We report every use of funds openly."
              },
              sustainable: {
                title: "Measured & Sustainable",
                desc: "Our programs are designed for long-term sustainable impact."
              }
            },
            form_title: "Log In to Your Account",
            form_subtitle: "Please log in to access the donor dashboard and see the impact of your donations.",
            email_label: "Email or Phone Number",
            email_placeholder: "Enter email or phone number",
            password_label: "Password",
            password_placeholder: "Enter password",
            forgot_password: "Forgot password?",
            remember_me: "Remember me",
            submit: "Login",
            or_with: "or login with",
            google: "Continue with Google",
            apple: "Continue with Apple",
            no_account: "Don't have an account?",
            register: "Register now",
            stats: {
              secure_title: "100% Secure",
              secure_desc: "High standard security system",
              donors_title: "10,000+",
              donors_desc: "Trusted Donors",
              beneficiaries_title: "1,850+",
              beneficiaries_desc: "Beneficiaries",
              transparent_title: "Transparent",
              transparent_desc: "Impact reports open to the public"
            }
          },
          account: {
            profile: "Profile",
            edit_profile: "Edit Profile",
            logout: "Logout",
            loyal_donor: "Loyal Donor",
            total_donation: "Total Donation (AED)",
            donation_impact: "Donation Impact by Category",
            stats_desc: "Distribution of your contributions across various development programs.",
            recent_history: "Recent Donation History",
            view_all: "View All",
            certificate: "Certificate",
            need_help: "Need Help?",
            support_desc: "Our support team is ready to help you 24/7 for donation matters.",
            contact_support: "Contact Support",
            no_auth: "You must log in to view this page.",
            back_to_login: "Back to Login",
            label_total: "Total",
            thousand: "K",
            routine_donor: "Routine Donor 6 Months",
            category: {
              infrastructure: "Infrastructure",
              community: "Community",
              education: "Education",
              health: "Healthcare",
              energy: "Energy"
            }
          }
        },
      },
      ar: {
        translation: {
          nav: {
            beranda: "الرئيسية",
            proyek: "المشاريع",
            dampak_laporan: "التأثير والتقارير",
            tentang_kami: "من نحن",
            donasi_sekarang: "تبرع الآن",
          },
          brand: {
            first: "الهلال",
            second: "الأزرق",
            full: "مؤسسة الهلال الأزرق"
          },
          countries: {
            indonesia: "إندونيسيا",
            uae: "الإمارات العربية المتحدة"
          },
          hero: {
            badge: "بدعم من المتبرعين من الإمارات العربية المتحدة",
            title: "تحقيق تأثير حقيقي للأشخاص المحتاجين",
            subtitle: "مع المتبرعين، نوفر الوصول إلى البنية التحتية والطاقة والفرص للأشخاص في المناطق النائية في إندونيسيا.",
            cta_primary: "تبرع الآن",
            cta_secondary: "تعلم المزيد",
          },
          home_stats: {
            title: "أثرنا",
            update_label: "(تحديث أبريل 2025)",
            beneficiaries: "المستفيدون",
            beneficiaries_sub: "في مختلف مناطق إندونيسيا",
            projects_completed: "مشاريع مكتملة",
            projects_sub: "الجسور والكهرباء",
            villages_impacted: "القرى المتأثرة",
            villages_sub: "في 6 محافظات",
            collected: "+6.2 مليون د.إ",
            collected_label: "التبرعات المجموعة",
            from_donors: "من متبرعينا"
          },
          what_we_do: {
            title: "ماذا نفعل",
            infrastructure: {
              title: "بناء البنية التحتية الأساسية",
              desc: "بناء الجسور، والوصول إلى الكهرباء، والمرافق العامة لفتح سبل الوصول والفرص للمجتمع."
            },
            community: {
              title: "تطوير المجتمع",
              desc: "تمكين المجتمعات من خلال التعليم والتدريب والبرامج الاقتصادية المستدامة."
            },
            kindness: {
              title: "نشر الخير",
              desc: "توزيع المساعدات من المتبرعين بأمانة لتحقيق أكبر قدر ممكن من الفائدة."
            }
          },
          programs: {
            title: "برامجنا",
            subtitle: "نحن نركز على بناء البنية التحتية الأساسية التي تفتح سبل الوصول وتحسن جودة حياة الناس.",
            view_all: "عرض جميع البرامج",
            jembatan: {
              title: "الجسور المعلقة",
              desc: "ربط المجتمعات بالتعليم والرعاية الصحية والأنشطة الاقتصادية.",
              label1: "جسور بنيت",
              label2: "مشاريع جارية",
              label3: "المستفيدون"
            },
            listrik: {
              title: "الكهرباء",
              desc: "توفير وصول موثوق للكهرباء للقرى البعيدة.",
              label1: "قرى مكهربة",
              label2: "مشاريع جارية",
              label3: "الأسر المتأثرة"
            }
          },
          stats: {
            collected: "التبرعات المجموعة",
            from_donors: "من متبرعينا",
            latest_progress: "أحدث التطورات",
            progress_desc: "تعرف على كيف يحقق دعمك فرقاً حقيقياً على أرض الواقع.",
            view_all_projects: "عرض جميع المشاريع"
          },
          about_section: {
            title: "حول مؤسسة الهلال الأزرق",
            desc: "مؤسسة الهلال الأزرق هي منظمة غير ربحية ملتزمة بتحسين جودة حياة المجتمعات في المناطق النائية من خلال تطوير البنية التحتية وبرامج تطوير المجتمع.",
            learn_more: "تعلم المزيد",
            trust_title: "شفافية 100%",
            trust_desc: "يتم استخدام كل تبرع وفقاً لأهداف البرنامج وهو خاضع للمساءلة.",
            reach_title: "قائم على المجتمع",
            reach_desc: "نحن نعمل جنباً إلى جنب مع المجتمعات المحلية لخلق تأثير مستدام.",
            impact_title: "تأثير مستدام",
            impact_desc: "نحن نقدم حلولاً طويلة الأمد لصالح الأجيال القادمة."
          },
          footer: {
            brand_line1: "شارك اليوم،",
            brand_line2: "امنح الأمل غداً",
            about_title: "من نحن",
            about_desc: "تلتزم مؤسسة الهلال الأزرق ببناء البنية التحتية وتمكين المجتمعات في المناطق النائية في إندونيسيا.",
            learn_more: "اقرأ المزيد",
            quick_links: "روابط سريعة",
            info: "معلومات",
            support: "الدعم",
            copyright: "© 2025 مؤسسة الهلال الأزرق. جميع الحقوق محفوظة.",
            terms: "الشروط والأحكام",
            privacy: "سياسة الخصوصية",
            saudi_box: {
              title: "ادعم برامجنا من الإمارات العربية المتحدة",
              subtitle: "معلومات التبرع المحلي للمتبرعين في الإمارات العربية المتحدة",
              thanks: "شكراً لدعمكم المستمر"
            }
          },
          proyek: {
            hero_title: "مشاريعنا",
            hero_subtitle: "استكشف المشاريع المختلفة التي نعمل عليها في جميع أنحاء إندونيسيا. كل تبرع منك يحدث تغييراً حقيقياً.",
            filter_title: "تصفية المشاريع",
            search_placeholder: "البحث عن اسم المشروع أو الموقع...",
            label_search: "البحث عن المشاريع",
            label_program: "البرنامج",
            label_status: "الحالة",
            label_province: "المحافظة",
            reset_filter: "إعادة ضبط التصفية",
            status_perencanaan: "تخطيط",
            status_berjalan: "جاري",
            status_selesai: "مكتمل",
            all_programs: "جميع البرامج",
            all_statuses: "جميع الحالات",
            all_provinces: "جميع المحافظات",
            view_grid: "عرض الشبكة",
            view_map: "عرض الخريطة",
            projects_found: "تم العثور على {{count}} مشاريع",
            load_more: "تحميل المزيد",
            quick_filter: "تصفية سريعة",
            legend: "أسطورة",
            labels: {
              progress: "تقدم",
              collected: "الأموال المجموعة",
              target: "إجمالي الاحتياجات",
              details: "عرض التفاصيل"
            },
            detail: {
              back_to_projects: "العودة إلى المشاريع",
              category: "الفئة",
              start_date: "بداية المشروع",
              end_date: "تاريخ الانتهاء المستهدف",
              project_id: "معرف المشروع",
              view_all_photos: "عرض جميع الصور",
              about_title: "عن المشروع",
              progress_title: "تقدم المشروع",
              overall_progress: "التقدم العام",
              updates_title: "تحديثات المشروع",
              updates_subtitle: "توثيق تقدم المشروع عبر الزمن.",
              view_all_updates: "عرض جميع التحديثات",
              expected_impact: "التأثير المتوقع",
              impact_subtitle: "بمجرد اكتمال هذا المشروع، سيشعر المجتمع بالفوائد.",
              funding_summary: "ملخص التمويل",
              funds_needed: "الأموال المطلوبة",
              funds_collected: "الأموال المجموعة",
              remaining_funds: "الاحتياجات المتبقية",
              funds_usage: "تفاصيل استخدام الأموال",
              trust_badge: "يتم استخدام 100٪ من التبرعات وفقاً لأهداف المشروع.",
              support_title: "ادعم هذا المشروع",
              support_desc: "ستسرع مساعدتك في استكمال المشروع وتفيد المزيد من الناس.",
              share_project: "مشاركة المشروع",
              donors_support: "بدعم من المتبرعين",
              donors_thanks: "شكراً للمتبرعين من الإمارات العربية المتحدة وكل من ساهم.",
              view_all_donors: "عرض جميع المتبرعين",
              other_donors: "+ {{count}} متبرعين آخرين",
              status_waiting: "قيد الانتظار",
              impact_items: {
                beneficiaries: { title: "مواطنون مستفيدون", desc: "وصول آمن يومياً" },
                students: { title: "طلاب المدارس", desc: "يمكنهم الذهاب للمدرسة بأمان" },
                time: { title: "وقت السفر", desc: "أسرع للمدارس والمرافق الصحية" },
                economy: { title: "التحسين الاقتصادي", desc: "يسهل توزيع المحاصيل والأنشطة الاقتصادية" }
              },
              funds_usage_items: {
                construction: "البناء والمواد",
                logistics: "النقل والخدمات اللوجستية",
                labor: "العمالة المحلية",
                admin: "الإدارة"
              },
              quote_text: '"وَمَا أَنفَقْتُم مِّن شَيْءٍ فَهُوَ يُخْلِفُهُ ۖ وَهُوَ خَيْرُ الرَّازِقِينَ"',
              quote_ref: "(سورة سبأ: ٣٩)",
              investment_text: "كل تبرع هو استثمار للآخرة وأمل جديد لهم."
            },
            program_detail: {
              label: "برنامج",
              about_title: "عن البرنامج",
              main_benefits: "الفوائد الرئيسية",
              program_impact: "تأثير البرنامج",
              family_connected: "عائلات متصلة",
              villages_impacted: "قرى متأثرة",
              projects_in_program: "المشاريع في برنامج {{title}}",
              projects_subtitle: "قائمة بمشاريع {{title}} التي نعمل عليها في مناطق مختلفة من إندونيسيا.",
              view_label: "عرض",
              view_grid: "شبكة",
              view_map: "خريطة",
              load_more_projects: "عرض المزيد من المشاريع",
              support_banner_title: "ادعم برنامج {{title}}",
              support_banner_desc: "كل تبرع منك يساعدنا في بناء المزيد من البنية التحتية وربط المزيد من الآمال.",
              how_to_donate: "كيفية التبرع",
              hero_desc: "نحن نبني حلول البنية التحتية في القرى النائية للتغلب على العزلة وفتح سبل الوصول لحياة أفضل.",
              about_p1: "لا تزال العديد من القرى في إندونيسيا منفصلة عن طريق الأنهار أو الوديان أو الأخاديد التي لا تتوفر فيها سبل وصول آمنة عبر الجسور. تجعل هذه الحالة من الصعب على الأطفال الذهاب إلى المدرسة، وحصول السكان على الخدمات الصحية، وتسويق المزارعين لمحاصيلهم.",
              about_p2: "برنامج الجسور المعلقة موجود لتقديم حلول مستدامة من خلال بناء جسور قوية وآمنة يمكن للمجتمع الاستفادة منها على المدى الطويل.",
              benefit1: "وصول أسهل للتعليم للأطفال",
              benefit2: "وصول أسرع وأكثر أماناً لخدمات الرعاية الصحية",
              benefit3: "زيادة النشاط الاقتصادي والتجارة",
              benefit4: "تعزيز الربط بين القرى",
              benefit5: "تشجيع التنمية الإقليمية الشاملة",
              planning_step: "تخطيط",
              funding_step: "جمع التبرعات",
              construction_step: "بناء",
              finishing_step: "تشطيب",
              completed_step: "مكتمل"
            },
            projects: {
              "KJ-2025-0012": { title: "جسر قرية ليمباه هرابان", loc: "سولاويزي الوسطى", desc: "بناء جسر معلق لربط القرية بسبل الوصول إلى المدارس والخدمات الصحية." },
              "KJ-2025-0013": { title: "الكهرباء لقرية سوكا ماجو", loc: "نوسا تينجارا الغربية", desc: "برنامج توفير الطاقة الشمسية لـ 120 منزلاً في قرية لم تصلها كهرباء PLN بعد." },
              "KJ-2025-0014": { title: "جسر قرية واتو موري", loc: "نوسا تينجارا الشرقية", desc: "بناء جسر معلق بطول 120 متراً ليكون منفذ الوصول الرئيسي للمجتمع." },
              "KJ-2025-0015": { title: "الكهرباء لقرية بينتانج تيمور", loc: "سولاويزي الجنوبية", desc: "خطة لتوفير نظام منزلي شمسي لـ 150 منزلاً في منطقة نائية." },
              "KJ-2025-0016": { title: "جسر قرية ميكار جايا", loc: "كاليمانتان الغربية", desc: "بناء جسر معلق لربط القرية بالمراكز الاقتصادية والتعليمية." },
              "KJ-2025-0017": { title: "الكهرباء لقرية سينار هرابان", loc: "مالوكو", desc: "تخطيط تركيب الكهرباء لـ 80 منزلاً في المناطق الجزرية." },
              "KJ-2025-0018": { title: "جسر نهر ديلي", loc: "سومطرة الشمالية", desc: "تجديد الجسر الرئيسي لتسهيل تنقل السكان بين القرى." },
              "KJ-2025-0019": { title: "الكهرباء لقرية سياك", loc: "رياو", desc: "تركيب نظام شمسي عالي السعة لإنارة القرية ليلاً." },
              "KJ-2025-0020": { title: "جسر غاروت الجنوبي المعلق", loc: "جاوة الغربية", desc: "منفذ وصول حيوي لاقتصاد السكان الذي تعوقه ظروف النهر." },
              "KJ-2025-0021": { title: "جسر عيناك أير", loc: "سومطرة الغربية", desc: "خطة لأول جسر معلق لتجمع سكني معزول." },
              "KJ-2025-0022": { title: "الكهرباء لقرية نجاداس", loc: "جاوة الشرقية", desc: "عملية تركيب خطوط الكهرباء في منطقة جبلية نائية." },
              "KJ-2025-0023": { title: "إنارة منطقة سينتاني", loc: "بابوا", desc: "نظام إنارة القرية باستخدام ألواح شمسية جماعية." },
              "KJ-2025-0024": { title: "جسر مولابوه المعلق", loc: "آتشيه", desc: "التخطيط لترقية جسر من الخيزران إلى جسر فولاذي." },
              "KJ-2025-0025": { title: "الكهرباء لقرية ماهاكام", loc: "كاليمانتان الشرقية", desc: "تطوير البنية التحتية الكهربائية ليتمكن أطفال المدارس من الدراسة ليلاً." },
              "KJ-2025-0026": { title: "جسر ميناهاسا", loc: "سولاويزي الشمالية", desc: "توحيد قريتين يفصلهما تيار نهري قوي." },
              "KJ-2025-0027": { title: "الكهرباء لقرية كينتاماني", loc: "بالي", desc: "المرحلة المبكرة من تركيب أعمدة الإنارة ومحطة فرعية للكهرباء في القرية." }
            }
          },
          dampak_laporan: {
              title: "الأثر والتقارير",
              desc: "الشفافية أمانة. نحن ملتزمون بتقديم التقارير المالية وتطورات المشاريع بشكل مفتوح وخاضع للمساءلة.",
              select_period: "اختر الفترة",
              periods: {
                all: "كل الأوقات",
                last3: "آخر 3 أشهر",
                last6: "آخر 6 أشهر",
                last12: "آخر سنة واحدة"
              },
              data_until: "البيانات حتى {{date}}",
              download_report: "تحميل التقرير",
              view_projects: "عرض المشاريع",
              stats: {
                beneficiaries: "المستفيدون",
                beneficiaries_sub: "في مختلف مناطق إندونيسيا",
                completed: "مشاريع مكتملة",
                completed_sub: "الجسور والكهرباء",
                villages: "القرى المتأثرة",
                villages_sub: "في 6 مقاطعات",
                electricity: "قرى مكهربة",
                electricity_sub: "وصول موثوق للكهرباء",
                total_donation: "إجمالي التبرعات المجموعة",
                donors_sub: "من المتبرعين",
                from_previous: "من الفترة السابقة"
              },
              transparency: {
                title: "الشفافية المالية",
                period_label: "الفترة: {{period}}",
                total_funds: "إجمالي الأموال",
                categories: {
                  program: "البرامج والمشاريع",
                  operational: "تشغيلي",
                  fundraising: "جمع التبرعات",
                  reserve: "احتياطي"
                },
                trust_badge: "تستخدم 100% من أموال التبرعات لتنفيذ البرامج والمشاريع.",
                trust_desc: "يتم الحفاظ على التكاليف التشغيلية عند الحد الأدنى لضمان أقصى قدر من التأثير.",
                usage_details: "تفاصيل استخدام الأموال",
                total: "الإجمالي"
              },
              periodic_reports: {
                title: "تقارير دورية",
                subtitle: "قم بتحميل تقاريرنا المالية والبرامج والأثر بشكل دوري.",
                view_all: "عرض جميع التقارير",
                items: {
                  monthly: "تقرير {{month}} {{year}}",
                  annual: "التقرير السنوي {{year}}",
                  period_monthly: "فترة {{month}} {{year}}",
                  period_annual: "الفترة من يناير إلى ديسمبر {{year}}"
                }
              },
              months: {
                january: "يناير",
                february: "فبراير",
                march: "مارس",
                april: "أبريل",
                may: "مايو",
                june: "يونيو",
                july: "يوليو",
                august: "أغسطس",
                september: "سبتمبر",
                october: "أكتوبر",
                november: "نوفمبر",
                december: "ديسمبر"
              },
              project_progress: {
                title: "ملخص تطور المشروع",
                subtitle: "حالة التقدم للمشاريع الرئيسية الجارية.",
                view_all: "عرض جميع المشاريع",
                cols: {
                  project: "المشروع",
                  location: "الموقع",
                  type: "النوع",
                  progress: "التقدم",
                  status: "الحالة"
                }
              },
              commitments: {
                title: "التزامنا بالشفافية",
                items: [
                  { title: "تحديث التقارير دورياً", desc: "نقوم بتحديث التقارير المالية وتطورات المشروع بشكل روتيني كل شهر." },
                  { title: "يمكن مراقبة كل مشروع", desc: "يمكن للمتبرعين رؤية تقدم المشروع في الوقت الفعلي من خلال صفحة المشروع." },
                  { title: "استخدام الأموال كما هو مقصود", desc: "يتم توزيع جميع الأموال للبرامج والمشاريع التي توفر تأثيراً حقيقياً." },
                  { title: "منفتحون على المتبرعين", desc: "نحن منفتحون على المدخلات والأسئلة من المتبرعين." }
                ]
              },
              cta: {
                title: "معاً، نصنع أثراً مستداماً",
                desc: "كل تبرع منك هو أمانة تجلب تغييراً حقيقياً للناس في المناطق النائية في إندونيسيا."
              }
          },
          tentang_kami: {
            hero: {
              title: "ربط الخير من الإمارات العربية المتحدة لإندونيسيا",
              subtitle: "تعتبر مؤسسة الهلال الأزرق جسراً لدعم المتبرعين من الإمارات العربية المتحدة لإحداث تغيير حقيقي للمجتمعات في المناطق النائية في إندونيسيا."
            },
            stats: {
              since: "منذ",
              founded: "سنة التأسيس",
              completed: "مشاريع مكتملة",
              beneficiaries: "المستفيدون",
              provinces: "المحافظات"
            },
            connection: {
              id_title: "لا تزال العديد من المناطق في المناطق النائية في إندونيسيا تواجه تحديات:",
              id_list: [
                "بنية تحتية محدودة",
                "الحد الأدنى من الوصول للكهرباء",
                "صعوبة الوصول للتعليم والصحة",
                "فرص اقتصادية محدودة"
              ],
              center_title: "نحن نربط الاثنين لنحدث تأثيراً حقيقياً.",
              center_desc: "نوزع خير المتبرعين في الإمارات العربية المتحدة بأمانة وشفافية واستهداف لبناء مستقبل أفضل للشعب الإندونيسي.",
              sa_title: "المتبرعون من الإمارات العربية المتحدة يمتلكون قوة استثنائية:",
              sa_list: [
                "روح العطاء العالية",
                "تبرعات مستدامة",
                "الاهتمام بزملاء البشر",
                "القيم الإسلامية التي تدفع للخير"
              ]
            },
            values: {
              title: "قيمنا",
              list: {
                transparency: "الشفافية",
                transparency_desc: "ندير كل تبرع بصدق وانفتاح.",
                sustainability: "الاستدامة",
                sustainability_desc: "نحن نبني حلولاً طويلة المدى وذات تأثير.",
                collaboration: "التعاون",
                collaboration_desc: "نعمل بجد مع المجتمعات والمتبرعين والشركاء.",
                impact: "تأثير حقيقي",
                impact_desc: "يركز كل برنامج من برامجنا على التغيير القابل للقياس.",
                integrity: "النزاهة",
                integrity_desc: "نحن نتمسك بالأخلاق والعهود والمسؤوليات."
              }
            },
            journey: {
              title: "رحلتنا",
              timeline: [
                { year: "2016", title: "التأسيس", desc: "تأسست مؤسسة الهلال الأزرق برؤية لإحداث تغيير حقيقي للمجتمعات النائية." },
                { year: "2017 – 2019", title: "الخطوات الأولى", desc: "التركيز على تطوير البنية التحتية الأساسية والمساعدات الإنسانية في مختلف المناطق النائية." },
                { year: "2020 – 2022", title: "التوسع", desc: "توسعت البرامج لتشمل المزيد من المحافظات وإشراك المزيد من الشركاء المحليين." },
                { year: "2023 – الآن", title: "تأثير مستدام", desc: "الاستمرار في الابتكار والالتزام بتحقيق تأثير طويل المدى للشعب الإندونيسي." }
              ]
            },
            cta: {
              title: "لنكن جزءاً من التغيير",
              desc: "كل دعم منكم هو أمل جديد لمن هم في أمس الحاجة إليه.",
              view_projects: "عرض المشاريع",
              donate_now: "تبرع الآن"
            },
            partnership: {
              title: "شراكة استراتيجية",
              desc: "تفخر مؤسسة الهلال الأزرق بالتعاون مع الهلال الأحمر في مختلف المهمات الإنسانية والتنموية في جميع أنحاء إندونيسيا.",
              label: "تعاون إنساني",
              mission_title: "مهمتنا المشتركة",
              mission_desc: "تويد الموارد والخبرات لتوفير تأثير أوسع على سلامة ورفاهية المجتمعات المحتاجة.",
              items: ["تخفيف الكوارث", "توزيع الخدمات اللوجستية المتكامله", "برامج الصحة المجتمعية"]
            }
          },
          login: {
            welcome: "مرحباً بك في",
            subtitle: "سجل الدخول لمواصلة رحلتك في فعل الخير مع مؤسسة الهلال الأزرق.",
            features: {
              secure: {
                title: "آمن وموثوق",
                desc: "نحن نحمي بياناتك بأنظمة أمان متعددة الطبقات."
              },
              impact: {
                title: "تأثير حقيقي",
                desc: "كل تبرع منك يحدث تغييراً حقيقياً للمجتمعات."
              },
              transparent: {
                title: "شفاف وخاضع للمساءلة",
                desc: "نبلغ عن كل استخدام للأموال بشفافية."
              },
              sustainable: {
                title: "قابل للقياس ومستدام",
                desc: "تم تصميم برامجنا لتأثير طويل المدى ومستدام."
              }
            },
            form_title: "تسجيل الدخول إلى حسابك",
            form_subtitle: "يرجى تسجيل الدخول للوصول إلى لوحة تحكم المتبرع ورؤية تأثير تبرعاتك.",
            email_label: "البريد الإلكتروني أو رقم الهاتف",
            email_placeholder: "أدخل البريد الإلكتروني أو رقم الهاتف",
            password_label: "كلمة المرور",
            password_placeholder: "أدخل كلمة المرور",
            forgot_password: "هل نسيت كلمة المرور؟",
            remember_me: "تذكرني",
            submit: "تسجيل الدخول",
            or_with: "أو سجل الدخول بواسطة",
            google: "المتابعة مع جوجل",
            apple: "المتابعة مع آبل",
            no_account: "ليس لديك حساب؟",
            register: "سجل الآن",
            stats: {
              secure_title: "آمن بنسبة 100%",
              secure_desc: "نظام أمان عالي المستوى",
              donors_title: "10,000+",
              donors_desc: "متبرعون موثوقون",
              beneficiaries_title: "1,850+",
              beneficiaries_desc: "المستفيدون",
              transparent_title: "شفاف",
              transparent_desc: "تقارير التأثير مفتوحة للجمهور"
            }
          },
          account: {
            profile: "الملف الشخصي",
            edit_profile: "تعديل الملف الشخصي",
            logout: "تسجيل الخروج",
            loyal_donor: "متبرع مخلص",
            total_donation: "إجمالي التبرعات (د.إ)",
            donation_impact: "تأثير التبرعات حسب الفئة",
            stats_desc: "توزيع مساهماتك عبر برامج التنمية المختلفة.",
            recent_history: "تاريخ التبرعات الأخير",
            view_all: "عرض الكل",
            certificate: "شهادة",
            need_help: "هل تحتاج إلى مساعدة؟",
            support_desc: "فريق الدعم لدينا مستعد لمساعدتك على مدار الساعة طوال أيام الأسبوع في أمور التبرع.",
            contact_support: "الاتصال بالدعم",
            no_auth: "يجب عليك تسجيل الدخول لعرض هذه الصفحة.",
            back_to_login: "العودة إلى تسجيل الدخول",
            label_total: "المجموع",
            thousand: "ألف",
            routine_donor: "متبرع منتظم لمدة 6 أشهر",
            category: {
              infrastructure: "البنية التحتية",
              community: "المسؤولية المجتمعية",
              education: "التعليم",
              health: "الرعاية الصحية",
              energy: "الطاقة"
            }
          }
        },
      },
    },
  });

export default i18n;
