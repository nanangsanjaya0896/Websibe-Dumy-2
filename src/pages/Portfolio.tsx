import { useMemo, useState } from "react";
import { ArrowDown, ArrowUp, Building2, CalendarDays, CirclePlay, Play, Quote, Target, TrendingDown, Wrench, X } from "lucide-react";
import PageHero from "../components/PageHero";
import { CTABanner, TestimonialCard } from "../components/sections";
import { Reveal, SectionTitle } from "../components/ui";
import { GALLERY, GALLERY_FILTERS, IMG, TESTIMONIALS, VIDEO_TESTIMONIALS } from "../data/site";
import { useMeta } from "../hooks";

/* ------------------------------ Gallery ------------------------------- */
function Gallery() {
  const [filter, setFilter] = useState<(typeof GALLERY_FILTERS)[number]>("Semua");
  const items = useMemo(() => (filter === "Semua" ? GALLERY : GALLERY.filter((g) => g.category === filter)), [filter]);

  return (
    <section className="relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
        <SectionTitle kicker="Portofolio" title="Proyek Terbaru Kami" desc="Dari apartemen keluarga hingga rooftop pabrik — setiap proyek dikerjakan dengan standar yang sama: sempurna." />

        {/* Filter tabs */}
        <Reveal delay={150}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2.5" role="tablist" aria-label="Filter kategori proyek">
            {GALLERY_FILTERS.map((f) => {
              const activeBtn = filter === f;
              return (
                <button
                  key={f}
                  role="tab"
                  aria-selected={activeBtn}
                  onClick={() => setFilter(f)}
                  className={`btn px-5 py-2.5 rounded-full font-display text-sm font-semibold border-2 transition-all duration-300 ${
                    activeBtn
                      ? "bg-navy text-white border-navy shadow-lg shadow-navy/25"
                      : "bg-white text-navy/60 border-slate-200 hover:border-brand hover:text-brand-dark"
                  }`}
                >
                  {f}
                  {f === "Semua" && <span className="ml-2 text-xs bg-brand/15 text-brand-dark px-2 py-0.5 rounded-full">{GALLERY.length}</span>}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Masonry-ish grid */}
        <div key={filter} className="mt-12 columns-1 sm:columns-2 lg:columns-3 gap-6 page-enter">
          {items.map((g, i) => (
            <div key={g.title} className="gallery-item group relative mb-6 break-inside-avoid rounded-3xl overflow-hidden shadow-lg shadow-navy/10 hover-lift">
              <img
                src={g.img}
                alt={`${g.title} — proyek ${g.category} CoolMaster`}
                className={`w-full object-cover ${g.tall ? "h-[24rem]" : "h-[17rem]"}`}
                loading="lazy"
              />
              <div className="gallery-overlay pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-deep/95 via-navy-deep/40 to-transparent" />
              <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-white bg-brand-gradient px-3 py-1.5 rounded-full shadow-lg">
                <Building2 size={11} />
                {g.category}
              </span>
              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3 className="font-display font-bold text-white text-lg leading-snug drop-shadow">{g.title}</h3>
                <p className="gallery-desc mt-1.5 text-white/80 text-sm leading-relaxed">{g.desc}</p>
              </div>
              <span className="absolute bottom-4 right-4 text-white/25 font-display font-bold text-3xl select-none" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------- Case studies ---------------------------- */
const CASES = [
  {
    img: IMG.officeGlass,
    client: "PT. Sinar Abadi",
    type: "Gedung Perkantoran Sudirman",
    challenge: "Tagihan listrik membengkak dan keluhan karyawan soal suhu tidak merata di 8 lantai.",
    solution: "Audit energi menyeluruh, deep cleaning 120 unit, kalibrasi thermostat, dan jadwal preventive maintenance bulanan.",
    results: ["Hemat listrik 35%", "Suhu turun rata-rata 8°C", "120 unit tertangani"],
    timeline: "3 hari pengerjaan + kontrak tahunan",
  },
  {
    img: IMG.livingRoom2,
    client: "Pengelola Cluster Griya Asri",
    type: "45 Rumah Residensial — BSD",
    challenge: "Penghuni komplain AC cepat kotor & sering bocor di musim hujan, teknisi langganan sebelumnya tidak konsisten.",
    solution: "Kontrak Annual Maintenance untuk 45 rumah: jadwal rotasi per blok, pelaporan digital, dan hotline khusus penghuni.",
    results: ["0 komplain bocor 12 bulan", "45 rumah terjadwal otomatis", "Hemat biaya 28% per rumah"],
    timeline: "Kontrak 1 tahun berjalan",
  },
  {
    img: IMG.roofWaterfront,
    client: "PT. Maju Jaya Logistik",
    type: "Distribution Center — Bekasi",
    challenge: "Area gudang 2.400m² pengap dan panas, sistem exhaust lama tidak mampu menjaga sirkulasi udara.",
    solution: "Desain ulang ventilasi: 8 rooftop package unit + sistem exhaust baru dengan perhitungan air-change per jam presisi.",
    results: ["Suhu kerja turun ke 26°C", "Sirkulasi udara 12x/jam", "Garansi instalasi 1 tahun"],
    timeline: "Selesai dalam 10 hari kerja",
  },
];

function CaseStudies() {
  return (
    <section className="relative bg-mist dot-grid-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
        <SectionTitle kicker="Bukti Nyata" title="Studi Kasus: Proyek Pilihan" desc="Angka tidak berbohong — begini cara kami mengubah masalah menjadi hasil terukur." />
        <div className="mt-14 grid lg:grid-cols-3 gap-6">
          {CASES.map((c, i) => (
            <Reveal key={c.client} delay={i * 130} className="h-full">
              <article className="h-full flex flex-col rounded-3xl bg-white border border-slate-100 shadow-xl shadow-navy/8 overflow-hidden hover-lift">
                <div className="relative h-48 overflow-hidden">
                  <img src={c.img} alt={`Proyek ${c.type} oleh ${c.client}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" loading="lazy" />
                  <span className="absolute bottom-3 left-4 inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-white bg-navy-deep/70 backdrop-blur px-3 py-1.5 rounded-full">
                    <CalendarDays size={11} /> {c.timeline}
                  </span>
                </div>
                <div className="flex flex-col gap-4 p-6 grow">
                  <div>
                    <h3 className="font-display font-bold text-navy text-lg leading-snug">{c.client}</h3>
                    <p className="text-brand-dark text-sm font-semibold">{c.type}</p>
                  </div>
                  <div className="flex gap-2.5 text-sm">
                    <Target size={17} className="text-coral-dark shrink-0 mt-0.5" />
                    <p className="text-slate-600 leading-relaxed"><span className="font-semibold text-navy">Tantangan: </span>{c.challenge}</p>
                  </div>
                  <div className="flex gap-2.5 text-sm">
                    <Wrench size={17} className="text-brand shrink-0 mt-0.5" />
                    <p className="text-slate-600 leading-relaxed"><span className="font-semibold text-navy">Solusi: </span>{c.solution}</p>
                  </div>
                  <div className="mt-auto pt-4 border-t border-dashed border-slate-200">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2.5 flex items-center gap-1.5">
                      <TrendingDown size={13} className="text-emerald-500" /> Hasil Akhir
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {c.results.map((r) => (
                        <span key={r} className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-full">{r}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------- Full testimonials -------------------------- */
function Testimonials() {
  const [showAll, setShowAll] = useState(false);
  const shown = showAll ? TESTIMONIALS : TESTIMONIALS.slice(0, 6);

  return (
    <section className="relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
        <SectionTitle
          kicker="2.500+ Ulasan Bintang 5"
          title="Apa Kata Mereka Yang Sudah Merasakan Udara Sejuk Kami?"
          desc="Ulasan asli dari pelanggan residensial, perkantoran, dan industrial di seluruh Jabodetabek."
        />
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {shown.map((t, i) => (
            <TestimonialCard key={t.name} t={t} delay={(i % 3) * 110} />
          ))}
        </div>
        <Reveal delay={150}>
          <div className="mt-12 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="btn inline-flex items-center gap-2 rounded-full border-2 border-navy/15 px-8 py-3.5 font-display font-semibold text-navy hover:border-brand hover:text-brand-dark hover:bg-brand/5"
            >
              {showAll ? (
                <>
                  Tampilkan Lebih Sedikit <ArrowUp size={18} />
                </>
              ) : (
                <>
                  Muat {TESTIMONIALS.length - 6} Ulasan Lainnya <ArrowDown size={18} />
                </>
              )}
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* --------------------------- Video testimonials ------------------------ */
function VideoTestimonials() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="relative bg-navy-gradient overflow-hidden">
      <div className="absolute inset-0 dot-grid" aria-hidden="true" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
        <SectionTitle dark kicker="Lihat Langsung" title="Video Testimoni Pelanggan" desc="Rekaman nyata di lokasi proyek — karena kepuasan pelanggan tidak bisa direkayasa." />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {VIDEO_TESTIMONIALS.map((v, i) => (
            <Reveal key={v.title} delay={i * 120}>
              <button
                onClick={() => setActive(i)}
                className="group relative w-full text-left rounded-3xl overflow-hidden border border-white/15 shadow-2xl shadow-navy-deep/50 focus:outline-none focus:ring-2 focus:ring-brand"
                aria-label={`Putar video testimoni ${v.title}`}
              >
                <img src={v.poster} alt={`Thumbnail video testimoni ${v.title}`} className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-navy-deep/25 to-transparent" />
                <span className="absolute inset-0 grid place-items-center">
                  <span className="grid place-items-center w-16 h-16 rounded-full bg-coral-gradient text-white shadow-glow-coral transition-transform duration-300 group-hover:scale-125 animate-pulse-ring-coral">
                    <Play size={26} fill="currentColor" className="ml-1" />
                  </span>
                </span>
                <span className="absolute bottom-4 left-5 right-5">
                  <span className="block font-display font-bold text-white leading-snug">{v.title}</span>
                  <span className="mt-1 flex gap-1.5 text-white/70 text-sm">
                    <Quote size={13} className="text-gold shrink-0 mt-1" />
                    <span className="leading-snug">{v.quote}</span>
                  </span>
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Video modal */}
      {active !== null && (
        <div className="fixed inset-0 z-[80] grid place-items-center p-4 bg-navy-deep/85 backdrop-blur-md" onClick={() => setActive(null)} role="dialog" aria-modal="true" aria-label="Pemutar video testimoni">
          <div className="relative w-full max-w-3xl rounded-2xl overflow-hidden bg-black shadow-2xl page-enter" onClick={(e) => e.stopPropagation()}>
            <video src={VIDEO_TESTIMONIALS[active].src} poster={VIDEO_TESTIMONIALS[active].poster} controls autoPlay className="w-full max-h-[75vh] bg-black" />
            <div className="px-5 py-4 bg-navy flex items-center justify-between gap-3">
              <div>
                <p className="font-display font-bold text-white text-sm">{VIDEO_TESTIMONIALS[active].title}</p>
                <p className="text-white/55 text-xs mt-0.5">{VIDEO_TESTIMONIALS[active].quote}</p>
              </div>
              <CirclePlay size={20} className="text-brand-light shrink-0" />
            </div>
            <button onClick={() => setActive(null)} aria-label="Tutup video" className="absolute top-3 right-3 grid place-items-center w-10 h-10 rounded-full bg-white/15 backdrop-blur text-white hover:bg-coral transition-colors">
              <X size={18} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

/* -------------------------------- Page -------------------------------- */
export default function Portfolio() {
  useMeta(
    "Portofolio & Testimoni — CoolMaster™ | Bukti Nyata Kualitas Layanan",
    "Lihat galeri proyek, studi kasus terukur, dan ulasan bintang 5 dari 2.500+ pelanggan CoolMaster™ di seluruh Jabodetabek."
  );
  return (
    <>
      <PageHero
        title="Portofolio & Testimoni Pelanggan"
        subtitle="Bukti nyata kualitas layanan kami dari ribuan pelanggan puas"
        crumb="Portofolio"
      />
      <Gallery />
      <CaseStudies />
      <Testimonials />
      <VideoTestimonials />
      <CTABanner
        title="Ingin Jadi Pelanggan Puas Berikutnya?"
        subtitle="Bergabunglah dengan 15.000+ pelanggan yang sudah merasakan standar layanan CoolMaster™."
        primaryLabel="Pesan Sekarang"
        primaryTo="/contact"
        secondaryLabel="Lihat Promo"
        secondaryTo="/promo"
      />
    </>
  );
}
