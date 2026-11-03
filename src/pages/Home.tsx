import { ArrowRight, CheckCircle2, Clock, Droplets, ShieldCheck, Sparkles, ThermometerSnowflake, UserX, Zap } from "lucide-react";
import { CTABanner, PartnerMarquee, TestimonialCard, TrustBadges } from "../components/sections";
import { ArrowLink, BtnOutline, BtnPrimary, Pill, Reveal, SectionTitle, Stars, Swoosh } from "../components/ui";
import { HERO_AVATARS, IMG, TESTIMONIALS, WA_DEFAULT } from "../data/site";
import { useMeta } from "../hooks";

/* ================================ HERO ================================ */
function Hero() {
  return (
    <section className="relative hero-mesh overflow-hidden min-h-[100svh] flex flex-col">
      <div className="absolute inset-0 dot-grid" aria-hidden="true" />
      {/* glow orbs */}
      <div className="absolute top-[8%] right-[4%] w-[26rem] h-[26rem] rounded-full bg-brand/25 blur-[120px]" aria-hidden="true" />
      <div className="absolute bottom-[12%] -left-24 w-[30rem] h-[30rem] rounded-full bg-brand-dark/35 blur-[140px]" aria-hidden="true" />
      {/* airflow */}
      <svg className="absolute inset-x-0 top-[18%] w-full h-72 opacity-30" viewBox="0 0 1440 300" fill="none" preserveAspectRatio="none" aria-hidden="true">
        <path className="flow-path" d="M-20 90 C 280 20, 560 170, 860 90 S 1300 30, 1460 110" stroke="#00A8E8" strokeWidth="2.5" />
        <path className="flow-path" d="M-20 170 C 300 110, 620 250, 920 160 S 1310 110, 1460 190" stroke="#7DD8FF" strokeWidth="2" style={{ animationDelay: "-1.3s" }} />
        <path className="flow-path" d="M-20 240 C 260 190, 580 300, 880 230 S 1290 180, 1460 250" stroke="#FF3B30" strokeWidth="2" opacity="0.5" style={{ animationDelay: "-2.1s" }} />
      </svg>

      <div className="relative grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-32 lg:pt-40 pb-14 grid lg:grid-cols-[1.05fr_0.95fr] gap-14 lg:gap-8 items-center">
        {/* Copy */}
        <div className="text-center lg:text-left">
          <Reveal>
            <Pill tone="white">
              <Sparkles size={13} className="text-gold" />
              #1 Layanan HVAC &amp; Servis AC Terpercaya
            </Pill>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="mt-6 font-display font-bold text-white leading-[1.12] text-[2.4rem] sm:text-5xl lg:text-[3.4rem]">
              Nikmati Udara Sejuk, <span className="text-gradient-bright">Dingin Maksimal</span>, &amp; Bebas Masalah Sepanjang Tahun
            </h1>
          </Reveal>

          <Reveal delay={180}>
            <p className="mt-6 text-white/70 text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              Solusi cepat perbaikan, perawatan, dan instalasi AC profesional dengan{" "}
              <span className="text-white font-semibold">garansi dingin 100%</span>, hemat listrik hingga{" "}
              <span className="text-white font-semibold">40%</span>, dan teknisi bersertifikat tiba dalam{" "}
              <span className="text-white font-semibold">45 menit</span>.
            </p>
          </Reveal>

          <Reveal delay={260}>
            <div className="mt-9 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <BtnPrimary href={WA_DEFAULT} big className="w-full sm:w-auto">
                Pesan Teknisi Sekarang — Gratis Konsultasi
                <ArrowRight size={20} />
              </BtnPrimary>
              <BtnOutline to="/services" light className="w-full sm:w-auto">
                Lihat Layanan Kami
                <ArrowRight size={18} />
              </BtnOutline>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <p className="mt-5 inline-flex items-center gap-2 text-sm text-white/60">
              <Zap size={15} className="text-gold" fill="currentColor" />
              Tanpa Biaya Tersembunyi <span className="text-white/30">•</span> Garansi 30 Hari
            </p>
          </Reveal>

          {/* Social proof */}
          <Reveal delay={400}>
            <div className="mt-9 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5">
              <div className="flex -space-x-3">
                {HERO_AVATARS.map((a, i) => (
                  <img key={i} src={a} alt="Foto pelanggan CoolMaster" className="w-11 h-11 rounded-full object-cover ring-[2.5px] ring-navy" loading="lazy" />
                ))}
                <span className="grid place-items-center w-11 h-11 rounded-full bg-brand-gradient text-white text-[10px] font-bold ring-[2.5px] ring-navy">15K+</span>
              </div>
              <div className="text-center sm:text-left">
                <Stars size={17} />
                <p className="mt-1 text-sm text-white/70">
                  <span className="text-white font-bold">4.9 / 5.0</span> dari 2.500+ Ulasan Pelanggan
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Visual */}
        <Reveal variant="right" delay={200} className="relative hidden md:block">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            {/* orbit rings — lingkaran sempurna, dipusatkan via wrapper agar transform rotasi tidak konflik */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" aria-hidden="true">
              <div className="relative w-[560px] h-[560px] lg:w-[640px] lg:h-[640px] rounded-full border border-dashed border-white/20 animate-spin-slower">
                <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-brand shadow-glow-brand" />
              </div>
            </div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none hidden lg:block" aria-hidden="true">
              <div className="relative w-[760px] h-[760px] rounded-full border border-white/10 animate-spin-reverse">
                <span className="absolute top-1/2 -left-1 -translate-y-1/2 w-2 h-2 rounded-full bg-brand-light/80" />
                <span className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 rounded-full bg-coral/80" />
              </div>
            </div>
            <div className="relative rounded-[2rem] overflow-hidden border border-white/15 shadow-2xl shadow-navy-deep/60">
              <img src={IMG.techWall} alt="Teknisi CoolMaster sedang memperbaiki unit AC indoor dengan peralatan profesional" className="w-full h-[460px] lg:h-[540px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/85 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                <div>
                  <p className="text-white font-display font-bold text-lg leading-tight">Teknisi Bersertifikat Resmi</p>
                  <p className="text-white/60 text-sm">Terverifikasi &amp; berpengalaman 20+ tahun</p>
                </div>
                <span className="grid place-items-center w-12 h-12 rounded-2xl bg-brand-gradient text-white shadow-glow-brand">
                  <ShieldCheck size={22} />
                </span>
              </div>
            </div>

            {/* floating chips */}
            <div className="absolute -left-6 lg:-left-14 top-10 animate-float" style={{ animationDelay: "-1.6s" }}>
              <div className="flex items-center gap-3 rounded-2xl bg-white/95 backdrop-blur px-4 py-3 shadow-2xl shadow-navy-deep/40">
                <span className="grid place-items-center w-10 h-10 rounded-xl bg-coral-gradient text-white">
                  <Clock size={19} />
                </span>
                <div className="text-left">
                  <p className="font-display font-bold text-navy text-sm leading-none">45 Menit</p>
                  <p className="text-[11px] text-slate-500 mt-1">Teknisi tiba di lokasi</p>
                </div>
              </div>
            </div>
            <div className="absolute -right-4 lg:-right-10 bottom-24 animate-float-slow">
              <div className="flex items-center gap-3 rounded-2xl bg-white/95 backdrop-blur px-4 py-3 shadow-2xl shadow-navy-deep/40">
                <span className="grid place-items-center w-10 h-10 rounded-xl bg-brand-gradient text-white">
                  <ThermometerSnowflake size={19} />
                </span>
                <div className="text-left">
                  <p className="font-display font-bold text-navy text-sm leading-none">Dingin 100%</p>
                  <p className="text-[11px] text-slate-500 mt-1">Atau garansi uang kembali</p>
                </div>
              </div>
            </div>
            {/* small second image */}
            <div className="absolute -bottom-8 -left-4 lg:-left-12 w-40 h-28 rounded-2xl overflow-hidden border-4 border-white/90 shadow-2xl rotate-[-4deg] animate-float" style={{ animationDelay: "-3s" }}>
              <img src={IMG.acCloseup} alt="Unit AC split modern terpasang rapi di dinding" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </div>
        </Reveal>
      </div>

      {/* Partner strip */}
      <div className="relative border-t border-white/10 bg-navy-deep/40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <p className="text-center text-[11px] tracking-[0.25em] uppercase text-white/40 mb-3 font-semibold">Authorized Service Partner</p>
          <PartnerMarquee dark />
        </div>
      </div>
    </section>
  );
}

/* ============================== PROBLEM ============================== */
const PROBLEMS = [
  {
    icon: ThermometerSnowflake,
    title: "AC Tidak Dingin / Cuma Angin",
    desc: "Bikin gerah, tidur malam terganggu, dan produktivitas menurun drastis.",
  },
  {
    icon: Droplets,
    title: "Bocor Air & Bau Tak Sedap",
    desc: "Merusak dinding & plafon, serta menebarkan bakteri dan jamur ke seluruh ruangan.",
  },
  {
    icon: Zap,
    title: "Tagihan Listrik Membengkak",
    desc: "Kompresor bekerja ekstra keras karena unit kotor — tagihan bisa naik hingga 40%.",
  },
  {
    icon: UserX,
    title: "Teknisi Tak Datang / Harga Dipermainkan",
    desc: "Janji molor berjam-jam, kerja asal-asalan, biaya membengkak, tanpa garansi.",
  },
];

function ProblemSection() {
  return (
    <section className="relative bg-mist dot-grid-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <SectionTitle
          kicker="Kami Mengerti Frustrasi Anda"
          title={
            <>
              Apakah Anda Mengalami <span className="text-coral-dark">Masalah AC</span> Ini?
            </>
          }
          desc="Jika salah satu dari masalah di bawah ini terdengar familiar, Anda tidak sendirian — dan kami punya solusinya."
        />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROBLEMS.map((p, i) => (
            <Reveal key={p.title} delay={i * 110} className="h-full">
              <div className="group relative h-full rounded-3xl bg-white border border-red-100 p-7 shadow-lg shadow-red-900/5 hover-lift overflow-hidden">
                <span className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-coral/10 group-hover:scale-150 transition-transform duration-500" aria-hidden="true" />
                <span className="relative grid place-items-center w-14 h-14 rounded-2xl bg-coral/10 text-coral-dark group-hover:bg-coral-gradient group-hover:text-white transition-all duration-300">
                  <p.icon size={26} />
                </span>
                <h3 className="relative mt-5 font-display font-bold text-navy text-lg leading-snug">{p.title}</h3>
                <p className="relative mt-2.5 text-sm text-slate-500 leading-relaxed">{p.desc}</p>
                <span className="relative mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-coral-dark/70 uppercase tracking-wider">
                  <span className="w-5 h-[2px] bg-coral/60 rounded-full" /> Masalah Umum #{i + 1}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={300}>
          <div className="mt-10 text-center">
            <ArrowLink to="/services" className="text-lg">
              Tenang — Kami punya solusinya
            </ArrowLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ================================ OFFER =============================== */
const OFFER_POINTS = [
  "Inspeksi 21 Titik AC Lengkap (Freon, Kompresor, Kelistrikan, Filter)",
  "Cuci Steam Tekanan Tinggi Bebas Kuman & Bakteri",
  "Pengisian Freon Murni Standard Pabrikan",
  "Garansi Dingin Kembali + Bebas Bocor Ulang 30 Hari",
];

function OfferSection() {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[50rem] rounded-full bg-brand/5 blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <Reveal variant="zoom">
          <div className="glow-border rounded-[2rem] overflow-hidden shadow-2xl shadow-brand/20">
            <div className="grid lg:grid-cols-[1.15fr_0.85fr] bg-navy-gradient">
              <div className="relative p-8 md:p-12 lg:p-14">
                <div className="absolute inset-0 dot-grid opacity-40" aria-hidden="true" />
                <div className="relative">
                  <Pill tone="coral">Paket Solusi Total</Pill>
                  <h2 className="mt-5 font-display font-bold text-white text-3xl md:text-4xl leading-tight">
                    Memperkenalkan: <span className="text-gradient-bright">Paket Solusi Total HVAC</span> CoolMaster™
                  </h2>
                  <p className="mt-4 text-white/65 leading-relaxed">
                    Satu paket lengkap yang menyelesaikan semua masalah AC Anda sekaligus — dikerjakan teknisi bersertifikat dengan
                    prosedur standard pabrikan.
                  </p>
                  <ul className="mt-8 flex flex-col gap-4">
                    {OFFER_POINTS.map((o, i) => (
                      <Reveal key={o} delay={120 + i * 90}>
                        <li className="flex items-start gap-3.5">
                          <span className="grid place-items-center w-7 h-7 rounded-full bg-brand/20 text-brand-light shrink-0 mt-0.5">
                            <CheckCircle2 size={17} />
                          </span>
                          <span className="text-white/85 leading-relaxed">{o}</span>
                        </li>
                      </Reveal>
                    ))}
                  </ul>
                  <div className="mt-9 flex flex-col sm:flex-row items-start gap-4">
                    <BtnPrimary to="/promo">
                      Lihat Detail Paket &amp; Harga
                      <ArrowRight size={18} />
                    </BtnPrimary>
                    <p className="text-white/45 text-sm self-center">Mulai Rp 85.000 / unit • Garansi 30 hari</p>
                  </div>
                </div>
              </div>
              <div className="relative min-h-[300px] lg:min-h-full">
                <img src={IMG.techGauge} alt="Teknisi memeriksa tekanan freon AC dengan manifold gauge" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/30 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 lg:left-auto lg:right-6 lg:w-56 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-4">
                  <div className="flex items-center gap-2 text-gold">
                    <Sparkles size={16} />
                    <span className="text-xs font-bold uppercase tracking-wider">Bonus Bulan Ini</span>
                  </div>
                  <p className="mt-1.5 text-white text-sm font-semibold leading-snug">Gratis fogging desinfektan untuk pemesanan hari ini</p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* =========================== SERVICES PREVIEW ========================== */
const SERVICE_CARDS = [
  {
    img: IMG.techWall,
    title: "AC Repair & Troubleshooting",
    desc: "Diagnosa akurat & perbaikan cepat semua kerusakan AC.",
  },
  {
    img: IMG.roofWaterfront,
    title: "Heating & Ventilation System",
    desc: "Sistem pemanas & sirkulasi udara segar untuk gedung.",
  },
  {
    img: IMG.techCloseup,
    title: "Testing & Air Quality Inspection",
    desc: "Uji kualitas udara & performa unit dengan alat presisi.",
  },
  {
    img: IMG.techInspect,
    title: "Annual Maintenance Plan",
    desc: "Perawatan berkala terjadwal, AC selalu prima.",
  },
];

function ServicesPreview() {
  return (
    <section className="relative bg-mist overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <SectionTitle
          kicker="Layanan Kami"
          title="Layanan HVAC Lengkap Untuk Setiap Kebutuhan"
          desc="Dari perbaikan darurat hingga kontrak perawatan tahunan — semua dikerjakan dengan standard tertinggi."
        />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICE_CARDS.map((s, i) => (
            <Reveal key={s.title} delay={i * 110} className="h-full">
              <div className="group relative h-full rounded-3xl overflow-hidden shadow-lg shadow-navy/10 hover-lift bg-navy">
                <img src={s.img} alt={s.title} className="h-72 sm:h-80 w-full object-cover opacity-95 transition-all duration-700 group-hover:scale-110 group-hover:opacity-70" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/40 to-transparent" />
                <Swoosh className="absolute top-4 left-5 w-24 opacity-90" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-brand-light">Layanan 0{i + 1}</span>
                  <h3 className="mt-1.5 font-display font-bold text-white text-lg leading-snug">{s.title}</h3>
                  <p className="mt-1.5 text-white/65 text-sm leading-relaxed">{s.desc}</p>
                  <ArrowLink to="/services" className="mt-3 text-brand-light text-sm group-hover:text-gold">
                    Pelajari Selengkapnya
                  </ArrowLink>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ========================= TESTIMONIAL PREVIEW ========================= */
function TestimonialPreview() {
  return (
    <section className="relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <SectionTitle
          kicker="Testimoni"
          title="Apa Kata Pelanggan Kami?"
          desc="Ribuan keluarga & bisnis telah merasakan udara sejuk tanpa khawatir bersama CoolMaster™."
        />
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.slice(0, 3).map((t, i) => (
            <TestimonialCard key={t.name} t={t} delay={i * 120} />
          ))}
        </div>
        <Reveal delay={250}>
          <div className="mt-10 text-center">
            <ArrowLink to="/portfolio" className="text-lg">
              Lihat Semua Ulasan
            </ArrowLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* =============================== PAGE ================================ */
export default function Home() {
  useMeta(
    "Jasa Servis AC & HVAC Profesional #1 Jabodetabek — CoolMaster™",
    "Perbaikan, cuci, instalasi & perawatan AC profesional. Garansi dingin 100%, hemat listrik 40%, teknisi bersertifikat tiba dalam 45 menit. Pesan teknisi sekarang!"
  );
  return (
    <>
      <Hero />
      <ProblemSection />
      <OfferSection />
      <ServicesPreview />
      <TestimonialPreview />
      <CTABanner />
      <TrustBadges />
    </>
  );
}
