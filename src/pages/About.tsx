import { useEffect, useRef, useState } from "react";
import { Award, BadgeCheck, Building2, Eye, Gem, HandHeart, Medal, PenLine, ShieldCheck, Target, Wrench } from "lucide-react";
import PageHero from "../components/PageHero";
import { BtnOutline, BtnPrimary, Pill, Reveal, SectionTitle } from "../components/ui";
import { LinkedInIcon } from "../components/SocialIcons";
import { Mail } from "lucide-react";
import { IMG, STATS } from "../data/site";
import { formatID, useCounter, useMeta } from "../hooks";

/* ---------------------------- Counter stats --------------------------- */
function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setActive(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-5">
      {STATS.map((s, i) => (
        <Stat key={s.label} value={s.value} suffix={s.suffix} label={s.label} active={active} delay={i * 100} />
      ))}
    </div>
  );
}

function Stat({ value, suffix, label, active, delay }: { value: number; suffix: string; label: string; active: boolean; delay: number }) {
  const n = useCounter(value, active);
  return (
    <Reveal delay={delay}>
      <div className="relative rounded-3xl bg-white border border-slate-100 shadow-lg shadow-navy/5 p-6 md:p-8 text-center hover-lift overflow-hidden">
        <span className="absolute inset-x-0 top-0 h-1.5 bg-brand-gradient" aria-hidden="true" />
        <p className="font-display font-bold text-3xl md:text-[2.6rem] text-navy tabular">
          {formatID(n)}
          <span className="text-brand">{suffix}</span>
        </p>
        <p className="mt-1.5 text-sm text-slate-500 font-medium">{label}</p>
      </div>
    </Reveal>
  );
}

/* --------------------------- Company story ---------------------------- */
function Story() {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Reveal variant="left">
            <div>
              <Pill>Sejak 2005</Pill>
              <h2 className="mt-5 font-display font-bold text-navy text-3xl md:text-4xl leading-tight">
                Cerita Kami: Dari 1 Teknisi Menjadi <span className="text-gradient">Mitra HVAC Terpercaya</span>
              </h2>
              <div className="mt-6 flex flex-col gap-4 text-slate-600 leading-relaxed">
                <p>
                  CoolMaster™ berdiri pada tahun 2005 di Jakarta, bermula dari satu teknisi dan satu sepeda motor dengan satu
                  keyakinan sederhana: <span className="font-semibold text-navy">kejujuran adalah fondasi layanan terbaik.</span>
                </p>
                <p>
                  Dua puluh tahun kemudian, kami tumbuh menjadi tim dengan{" "}
                  <span className="font-semibold text-navy">50+ teknisi bersertifikat</span> yang telah melayani{" "}
                  <span className="font-semibold text-navy">15.000+ pelanggan residensial &amp; komersial</span> di seluruh
                  Jabodetabek — dari rumah keluarga, apartemen, hingga gedung perkantoran dan pabrik.
                </p>
                <p>
                  Visi kami tetap sama sejak hari pertama: menjadi mitra HVAC #1 paling dipercaya di Indonesia — yang selalu
                  datang tepat waktu, bekerja transparan, dan tidak pernah pulang sebelum ruangan Anda kembali sejuk.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3">
                {[
                  "Harga transparan di awal",
                  "SOP standard pabrikan",
                  "Laporan pengerjaan tertulis",
                ].map((t) => (
                  <span key={t} className="inline-flex items-center gap-2 text-sm font-semibold text-navy">
                    <ShieldCheck size={16} className="text-brand" /> {t}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal variant="right">
            <div className="relative">
              <div className="absolute -inset-5 rounded-[2.5rem] bg-brand-gradient opacity-10 blur-xl" aria-hidden="true" />
              <div className="relative grid grid-cols-[1.35fr_1fr] gap-4">
                <img src={IMG.techWorkshop} alt="Workshop CoolMaster tempat teknisi mempersiapkan peralatan servis AC" className="rounded-3xl object-cover h-full min-h-[320px] shadow-2xl shadow-navy/20" loading="lazy" />
                <div className="flex flex-col gap-4">
                  <img src={IMG.techOutdoor} alt="Teknisi CoolMaster memperbaiki unit outdoor AC di dinding gedung" className="rounded-3xl object-cover h-1/2 min-h-[150px] shadow-xl shadow-navy/15" loading="lazy" />
                  <div className="rounded-3xl bg-navy-gradient text-white p-5 flex-1 flex flex-col justify-center shadow-xl shadow-navy/20">
                    <p className="font-display font-bold text-2xl">
                      20<span className="text-brand-light">+</span> Tahun
                    </p>
                    <p className="text-white/65 text-sm mt-1">Melayani keluarga &amp; bisnis Indonesia</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-16">
          <StatsSection />
        </div>
      </div>
    </section>
  );
}

/* ---------------------------- Founder note ---------------------------- */
function FounderNote() {
  return (
    <section className="relative bg-mist dot-grid-dark overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
        <Reveal variant="zoom">
          <div className="rounded-[2rem] bg-white shadow-2xl shadow-navy/10 overflow-hidden grid md:grid-cols-[0.9fr_1.1fr]">
            <div className="relative min-h-[340px]">
              <img src={IMG.founder} alt="Budi Santoso — Founder & Chief Engineer CoolMaster" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5">
                <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white bg-coral-gradient px-3.5 py-1.5 rounded-full shadow-glow-coral">
                  <PenLine size={13} /> Founder&apos;s Note
                </span>
              </div>
            </div>
            <div className="p-8 md:p-12 relative">
              <span className="absolute top-6 right-8 font-display text-8xl leading-none text-brand/10 select-none" aria-hidden="true">”</span>
              <h2 className="font-display font-bold text-navy text-2xl md:text-3xl leading-snug">Komitmen Kami Untuk Kenyamanan Keluarga Anda</h2>
              <div className="mt-6 flex flex-col gap-4 text-slate-600 leading-relaxed">
                <p>
                  “Saya mendirikan CoolMaster karena prihatin melihat banyaknya konsumen yang tertipu biaya servis AC yang
                  melambung tanpa kejelasan. Bagi kami, <span className="font-semibold text-navy">dinginnya ruangan Anda adalah reputasi kami.</span>
                </p>
                <p>
                  Kami berjanji memberikan layanan terbaik, jujur, dan bergaransi — setiap hari, di setiap kunjungan.”
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-4">
                <div>
                  <p className="font-display font-bold text-xl text-navy italic" style={{ fontFamily: "Poppins, cursive" }}>
                    Budi Santoso
                  </p>
                  <p className="text-sm text-slate-400">Founder &amp; Chief Engineer</p>
                </div>
                <span className="ml-auto grid place-items-center w-12 h-12 rounded-2xl bg-brand/10 text-brand-dark">
                  <Medal size={22} />
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* --------------------------- Visi misi nilai --------------------------- */
const VALUES = [
  { icon: Gem, title: "Integritas", desc: "Jujur soal harga, kondisi unit, dan estimasi waktu — selalu." },
  { icon: Target, title: "Profesionalisme", desc: "SOP jelas, seragam rapi, hasil kerja terukur dan terdokumentasi." },
  { icon: HandHeart, title: "Kepedulian", desc: "Kami memperlakukan rumah Anda seperti rumah kami sendiri." },
  { icon: Wrench, title: "Inovasi", desc: "Teknologi terbaru: steam cleaning, smart diagnostic, laporan digital." },
];

function VisiMisi() {
  return (
    <section className="relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
        <SectionTitle kicker="Fondasi Kami" title="Visi, Misi &amp; Nilai Inti" desc="Prinsip yang memandu setiap teknisi kami di setiap kunjungan." />

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          <Reveal delay={0} className="h-full">
            <div className="h-full rounded-3xl bg-navy-gradient text-white p-8 relative overflow-hidden hover-lift">
              <div className="absolute inset-0 dot-grid opacity-30" aria-hidden="true" />
              <span className="relative grid place-items-center w-14 h-14 rounded-2xl bg-white/10 border border-white/15 text-brand-light">
                <Eye size={26} />
              </span>
              <h3 className="relative mt-5 font-display font-bold text-xl">Visi</h3>
              <p className="relative mt-3 text-white/70 leading-relaxed">Menjadi perusahaan HVAC paling dipercaya di Indonesia.</p>
            </div>
          </Reveal>
          <Reveal delay={110} className="h-full">
            <div className="h-full rounded-3xl bg-white border-2 border-brand/25 shadow-xl shadow-brand/10 p-8 hover-lift">
              <span className="grid place-items-center w-14 h-14 rounded-2xl bg-brand-gradient text-white shadow-glow-brand">
                <Target size={26} />
              </span>
              <h3 className="mt-5 font-display font-bold text-xl text-navy">Misi</h3>
              <ul className="mt-3 flex flex-col gap-2.5 text-slate-600 leading-relaxed text-[15px]">
                <li className="flex gap-2.5"><BadgeCheck size={18} className="text-brand shrink-0 mt-0.5" />Menyediakan layanan servis AC berkualitas tinggi dengan harga transparan.</li>
                <li className="flex gap-2.5"><BadgeCheck size={18} className="text-brand shrink-0 mt-0.5" />Memastikan setiap teknisi terlatih dan bersertifikat resmi.</li>
                <li className="flex gap-2.5"><BadgeCheck size={18} className="text-brand shrink-0 mt-0.5" />Mengutamakan kepuasan dan kenyamanan pelanggan di setiap kunjungan.</li>
              </ul>
            </div>
          </Reveal>
          <Reveal delay={220} className="h-full">
            <div className="h-full rounded-3xl bg-coral-gradient text-white p-8 relative overflow-hidden hover-lift">
              <div className="absolute inset-0 diagonal-lines" aria-hidden="true" />
              <span className="relative grid place-items-center w-14 h-14 rounded-2xl bg-white/15 border border-white/20 text-white">
                <Building2 size={26} />
              </span>
              <h3 className="relative mt-5 font-display font-bold text-xl">Budaya Kerja</h3>
              <p className="relative mt-3 text-white/80 leading-relaxed">
                Empat nilai inti yang hidup di setiap teknisi, staf, dan pimpinan CoolMaster™ — dari dulu hingga hari ini.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {VALUES.map((v, i) => (
            <Reveal key={v.title} delay={i * 100} className="h-full">
              <div className="group h-full rounded-2xl border border-slate-100 bg-white p-6 shadow-lg shadow-navy/5 hover-lift text-center">
                <span className="mx-auto grid place-items-center w-14 h-14 rounded-full bg-brand/10 text-brand-dark group-hover:bg-coral-gradient group-hover:text-white transition-all duration-300">
                  <v.icon size={24} />
                </span>
                <h4 className="mt-4 font-display font-bold text-navy">{v.title}</h4>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed">{v.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- Team -------------------------------- */
const TEAM = [
  { img: IMG.teamBudi, name: "Budi Santoso", role: "Founder & Chief Engineer", desc: "20+ tahun memimpin standar kualitas teknis CoolMaster™." },
  { img: IMG.teamSari, name: "Sari Dewi", role: "Operations Manager", desc: "Memastikan setiap jadwal kunjungan berjalan tepat waktu." },
  { img: IMG.teamAhmad, name: "Ahmad Fauzi", role: "Head of Technical Team", desc: "Ahli VRF/VRF & troubleshooting kelas berat semua merek." },
  { img: IMG.teamRina, name: "Rina Kusuma", role: "Customer Relations Manager", desc: "Suara ramah pertama yang menyambut setiap panggilan Anda." },
];

function Team() {
  return (
    <section className="relative bg-mist">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
        <SectionTitle kicker="Tim Kami" title="Tim Profesional di Balik Layanan Kami" desc="Orang-orang yang bekerja keras setiap hari agar ruangan Anda tetap sejuk." />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM.map((m, i) => (
            <Reveal key={m.name} delay={i * 110} className="h-full">
              <div className="group h-full rounded-3xl bg-white border border-slate-100 shadow-lg shadow-navy/5 overflow-hidden hover-lift">
                <div className="relative overflow-hidden">
                  <img src={m.img} alt={`Foto ${m.name} — ${m.role}`} className="w-full h-64 object-cover object-top transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-4 left-4 flex gap-2 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    <a href="#" aria-label={`LinkedIn ${m.name}`} className="grid place-items-center w-9 h-9 rounded-full bg-white/90 text-navy hover:bg-brand hover:text-white transition-colors">
                      <LinkedInIcon size={15} />
                    </a>
                    <a href={`mailto:info@coolmaster.co.id`} aria-label={`Email ${m.name}`} className="grid place-items-center w-9 h-9 rounded-full bg-white/90 text-navy hover:bg-coral hover:text-white transition-colors">
                      <Mail size={15} />
                    </a>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-display font-bold text-navy text-lg">{m.name}</h3>
                  <p className="text-brand-dark text-sm font-semibold">{m.role}</p>
                  <p className="mt-2 text-sm text-slate-500 leading-relaxed">{m.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------- Certifications --------------------------- */
const CERTS = [
  { icon: BadgeCheck, title: "Sertifikasi Teknisi Resmi", desc: "Seluruh teknisi tersertifikasi kompetensi nasional bidang pendingin." },
  { icon: Award, title: "ISO 9001:2015", desc: "Quality Management System untuk standar layanan yang konsisten." },
  { icon: ShieldCheck, title: "Authorized Service Partner", desc: "Partner resmi Daikin, Panasonic & LG untuk area Jabodetabek." },
  { icon: Medal, title: "Best HVAC Service Provider 2024", desc: "Penghargaan penyedia layanan HVAC terbaik tingkat nasional." },
];

function Certifications() {
  return (
    <section className="relative bg-navy-gradient overflow-hidden">
      <div className="absolute inset-0 dot-grid" aria-hidden="true" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
        <SectionTitle dark kicker="Bukti Kredibilitas" title="Sertifikasi &amp; Penghargaan" desc="Pengakuan resmi atas kualitas dan konsistensi layanan kami selama dua dekade." />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CERTS.map((c, i) => (
            <Reveal key={c.title} delay={i * 110} className="h-full">
              <div className="h-full rounded-3xl bg-white/[0.06] backdrop-blur border border-white/12 p-7 text-center hover:bg-white/10 hover:-translate-y-2 transition-all duration-400">
                <span className="mx-auto grid place-items-center w-16 h-16 rounded-full bg-brand-gradient text-white shadow-glow-brand">
                  <c.icon size={28} />
                </span>
                <h3 className="mt-5 font-display font-bold text-white leading-snug">{c.title}</h3>
                <p className="mt-2.5 text-sm text-white/60 leading-relaxed">{c.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- CTA --------------------------------- */
function AboutCTA() {
  return (
    <section className="bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <Reveal>
          <h2 className="font-display font-bold text-navy text-3xl md:text-4xl">Ingin Mengenal Kami Lebih Dekat?</h2>
          <p className="mt-4 text-slate-500 max-w-xl mx-auto">Tim kami senang berbincang — mulai dari kebutuhan AC rumah hingga proyek gedung skala besar.</p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <BtnPrimary to="/contact">Hubungi Kami</BtnPrimary>
            <BtnOutline to="/services">Lihat Layanan</BtnOutline>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------- Page -------------------------------- */
export default function About() {
  useMeta(
    "Tentang Kami — CoolMaster™ | 20+ Tahun Melayani HVAC Indonesia",
    "Kenali CoolMaster™: perusahaan HVAC & servis AC terpercaya sejak 2005 dengan 50+ teknisi bersertifikat, 15.000+ pelanggan puas, dan sertifikasi ISO 9001:2015."
  );
  return (
    <>
      <PageHero title="Tentang CoolMaster™" subtitle="Mitra terpercaya kenyamanan udara keluarga Indonesia sejak 2005" crumb="Tentang Kami" />
      <Story />
      <FounderNote />
      <VisiMisi />
      <Team />
      <Certifications />
      <AboutCTA />
    </>
  );
}
