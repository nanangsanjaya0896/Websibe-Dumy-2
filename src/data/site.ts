/* ------------------------------------------------------------------ */
/* CoolMaster™ — Central content & media map                           */
/* ------------------------------------------------------------------ */

export const BRAND = "CoolMaster™";

export const PHONE_DISPLAY = "(021) 555-0123";
export const PHONE_MOBILE = "0812-3456-7890";
export const WA_NUMBER = "6281234567890";
export const EMAIL = "info@coolmaster.co.id";
export const ADDRESS = "Jl. Kebon Jeruk Raya No. 123, Jakarta Barat 11530";
export const HOURS = [
  { d: "Senin – Sabtu", t: "07.00 – 21.00" },
  { d: "Minggu", t: "08.00 – 18.00" },
];

export const waLink = (message: string) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;

export const WA_DEFAULT = waLink(
  "Halo CoolMaster, saya ingin konsultasi gratis & memesan teknisi servis AC."
);

export const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "Tentang Kami", path: "/about" },
  { label: "Layanan", path: "/services" },
  { label: "Portofolio", path: "/portfolio" },
  { label: "Promo", path: "/promo" },
  { label: "Kontak", path: "/contact" },
];

/* ----------------------------- IMAGES ----------------------------- */
const px = (id: string | number, w = 1200) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

export const IMG = {
  techWall: px(5463580),           // teknisi perbaiki AC indoor (portrait)
  techWorkshop: px(33671149),      // workshop servis AC
  techOutdoor: px(7347538),        // unit outdoor di dinding gedung
  techCloseup: px(5463582),        // close-up alat teknisi
  techInspect: px(32497161),       // inspeksi unit outdoor HVAC
  techGauge: px(5463575),          // manifold gauge freon
  techTraining: px(33958627),      // pusat pelatihan teknisi
  acCloseup: px(38788452),         // AC dinding modern close-up
  acHome: px(16592625),            // AC dinding di rumah (portrait)
  livingRoom: px(8082565),
  livingRoom2: px(7614608),
  bedroom: px(7195879),
  lounge: px(6782362),
  roofSky: px(8065903),
  roofWaterfront: px(13109834),
  roofDrone: px(10963036),
  roofHigh: px(19016904),
  ventBrick: px(39904901),
  officeOpen: px(36631701),
  officeGlass: px(13219418),
  officeWork: px(7653461),
  founder: px(7845290),
  teamBudi: px(7845287),
  teamSari: px(8101969),
  teamAhmad: px(8278883),
  teamRina: px(8101981),
};

export const FACES = {
  hendra: px(8278869, 300),
  sari: px(11563145, 300),
  majuJaya: px(7964544, 300),
  ratna: px(11719266, 300),
  andi: px(37159572, 300),
  maya: px(11738260, 300),
  rizal: px(6670120, 300),
  dewi: px(3314365, 300),
  joko: px(9602115, 300),
};

export const HERO_AVATARS = [FACES.sari, FACES.hendra, FACES.ratna, FACES.andi, FACES.maya];

export const VIDEO_TESTIMONIALS = [
  {
    src: "https://videos.pexels.com/video-files/28886877/12504681_1920_1080_30fps.mp4",
    poster:
      "https://images.pexels.com/videos/28886877/electrical-panel-28886877.jpeg?auto=compress&cs=tinysrgb&w=900",
    title: "Kantor PT. Maju Jaya — BSD",
    quote: "“15 unit AC selesai dalam 1 hari. Rapi & profesional.”",
  },
  {
    src: "https://videos.pexels.com/video-files/35206231/14915051_1440_2560_30fps.mp4",
    poster:
      "https://images.pexels.com/videos/35206231/factoru-factory-industry-job-35206231.jpeg?auto=compress&cs=tinysrgb&w=900",
    title: "Pabrik Manufaktur — Karawang",
    quote: "“Sistem ventilasi & HVAC kami kini jauh lebih stabil.”",
  },
  {
    src: "https://videos.pexels.com/video-files/4012948/4012948-hd_1080_1920_30fps.mp4",
    poster:
      "https://images.pexels.com/videos/4012948/air-conditioning-appliance-equipment-exhaust-air-4012948.jpeg?auto=compress&cs=tinysrgb&w=900",
    title: "Cluster Perumahan — Depok",
    quote: "“Unit lama yang kusam, sekarang dingin seperti baru.”",
  },
];

/* ----------------------------- PARTNERS ---------------------------- */
export const PARTNERS = ["Daikin", "Panasonic", "LG", "Sharp", "Gree", "Mitsubishi", "Samsung", "Haier"];

/* ----------------------------- STATS ------------------------------- */
export const STATS = [
  { value: 20, suffix: "+", label: "Tahun Pengalaman" },
  { value: 50, suffix: "+", label: "Teknisi Bersertifikat" },
  { value: 15000, suffix: "+", label: "Pelanggan Puas" },
  { value: 30000, suffix: "+", label: "Unit AC Terservis" },
];

/* --------------------------- TESTIMONIALS -------------------------- */
export type Testimonial = {
  name: string;
  location: string;
  service: string;
  quote: string;
  img: string;
  date: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Bpk. Hendra Wijaya",
    location: "Jakarta Selatan",
    service: "AC Repair & Troubleshooting",
    quote:
      "AC kantor bocor parah langsung beres dalam 1 jam. Teknisi ramah, kerja bersih pakai alas lantai, dan harganya sangat masuk akal!",
    img: FACES.hendra,
    date: "12 Januari 2026",
  },
  {
    name: "Ibu Sari Rahmawati",
    location: "Tangerang",
    service: "Annual Maintenance Plan",
    quote:
      "Sudah 3 tahun langganan paket maintenance. AC di rumah selalu dingin dan tagihan listrik jauh lebih hemat. Tidak pernah kecewa!",
    img: FACES.sari,
    date: "28 Desember 2025",
  },
  {
    name: "PT. Maju Jaya",
    location: "BSD, Tangerang Selatan",
    service: "Servis AC Komersial",
    quote:
      "15 unit AC kantor semua diservis dalam 1 hari. Kerja cepat, rapi, dan profesional. Laporan pengerjaan juga dikirim lengkap via email.",
    img: FACES.majuJaya,
    date: "17 Desember 2025",
  },
  {
    name: "Ibu Ratna Sari",
    location: "Depok",
    service: "Cuci AC Deep Cleaning",
    quote:
      "Bau tidak sedap dari AC kamar anak hilang total setelah deep cleaning. Sekarang tidur malam jauh lebih nyenyak. Terima kasih CoolMaster!",
    img: FACES.ratna,
    date: "5 Desember 2025",
  },
  {
    name: "Bpk. Andi Prasetyo",
    location: "Bekasi",
    service: "Instalasi AC Baru",
    quote:
      "Pasang 3 unit AC baru di rumah. Teknisi datang tepat waktu, instalasi pipa rapi sekali, dan dikasih panduan perawatan. Sangat recommended.",
    img: FACES.andi,
    date: "22 November 2025",
  },
  {
    name: "Ibu Maya Putri",
    location: "Jakarta Barat",
    service: "Isi Freon & Perawatan",
    quote:
      "Harga di quotation sama persis dengan yang dibayar, tidak ada biaya tambahan tiba-tiba. Ini yang bikin saya jadi pelanggan tetap.",
    img: FACES.maya,
    date: "9 November 2025",
  },
  {
    name: "Bpk. Rizal Maulana",
    location: "Bogor",
    service: "AC Repair & Troubleshooting",
    quote:
      "AC mati total jam 8 malam, teknisi masih bisa datang malam itu juga. Luar biasa responsnya. Besoknya AC sudah dingin normal lagi.",
    img: FACES.rizal,
    date: "30 Oktober 2025",
  },
  {
    name: "Ibu Dewi Anggraini",
    location: "Tangerang Selatan",
    service: "Annual Maintenance Plan",
    quote:
      "Setiap 3 bulan diingatkan jadwal servis via WhatsApp, teknisi selalu sopan dan pakai seragam. Rumah terasa segar terus sepanjang tahun.",
    img: FACES.dewi,
    date: "18 Oktober 2025",
  },
  {
    name: "Bpk. Joko Santoso",
    location: "Jakarta Timur",
    service: "Relokasi Unit AC",
    quote:
      "Pindah rumah dan semua AC dipindahkan dengan aman. Tidak ada yang bocor atau rusak. Garansinya juga benar-benar diproses cepat.",
    img: FACES.joko,
    date: "2 Oktober 2025",
  },
];

/* ----------------------------- GALLERY ----------------------------- */
export type GalleryItem = {
  img: string;
  title: string;
  category: "Residensial" | "Perkantoran" | "Komersial" | "Industrial";
  desc: string;
  tall?: boolean;
};

export const GALLERY: GalleryItem[] = [
  { img: IMG.acHome, title: "Instalasi 4 Unit AC Split", category: "Residensial", desc: "Apartemen Pondok Indah Residence — instalasi baru 4 unit inverter.", tall: true },
  { img: IMG.officeOpen, title: "Servis 10 Unit AC Split", category: "Perkantoran", desc: "Gedung Perkantoran Sudirman — perawatan menyeluruh 10 unit dalam 1 hari." },
  { img: IMG.roofWaterfront, title: "Sistem VRF Rooftop", category: "Industrial", desc: "Pergudangan Cikarang — instalasi 3 sistem VRF 60HP di atap gedung." },
  { img: IMG.livingRoom2, title: "Cuci AC 8 Unit Cluster", category: "Residensial", desc: "Cluster Griya Asri BSD — deep cleaning berkala penghuni satu blok." },
  { img: IMG.lounge, title: "AC Ducted Restoran", category: "Komersial", desc: "Restoran Senopati — instalasi ducted system area dining 200m²." },
  { img: IMG.officeGlass, title: "Kontrak Maintenance Gedung", category: "Perkantoran", desc: "Equity Tower SCBD — kontrak perawatan tahunan 120 unit." },
  { img: IMG.roofHigh, title: "Ventilasi Pabrik", category: "Industrial", desc: "Pabrik Manufaktur Karawang — sistem ventilasi & exhaust line produksi." },
  { img: IMG.bedroom, title: "AC Inverter Kamar Tidur", category: "Residensial", desc: "Rumah Kelapa Gading — upgrade unit hemat listrik 3 kamar tidur.", tall: true },
  { img: IMG.techTraining, title: "AC Ruang Kursus", category: "Komersial", desc: "Lembaga Pelatihan Tebet — instalasi & maintenance 12 unit kelas." },
  { img: IMG.roofDrone, title: "Audit HVAC Distribution Center", category: "Industrial", desc: "Distribution Center Bekasi — audit & optimasi 8 rooftop package unit." },
  { img: IMG.officeWork, title: "AC Cassette Open Office", category: "Perkantoran", desc: "Menara Kuningan — penggantian 6 unit cassette lama ke inverter." },
];

export const GALLERY_FILTERS = ["Semua", "Residensial", "Perkantoran", "Komersial", "Industrial"] as const;

/* ----------------------------- PRICING ----------------------------- */
export type PricingPlan = {
  id: string;
  name: string;
  tag: string;
  price: string;
  originalPrice?: string;
  unit: string;
  desc: string;
  features: string[];
  badge?: string;
  ribbon?: string;
  highlight?: boolean;
};

export const PLANS: PricingPlan[] = [
  {
    id: "basic",
    name: "Basic",
    tag: "Cuci AC Standard",
    price: "Rp 85.000",
    unit: "/ unit",
    desc: "Perawatan rutin ringan untuk menjaga AC tetap bersih & dingin.",
    features: ["Cuci filter & body unit", "Cek tekanan freon dasar", "Pembersihan cover & casing", "Cek arus listrik & remote", "Garansi pengerjaan 7 hari"],
  },
  {
    id: "premium",
    name: "Premium",
    tag: "Cuci AC Deep Clean",
    price: "Rp 175.000",
    originalPrice: "Rp 250.000",
    unit: "/ unit",
    desc: "Pembersihan menyeluruh dengan steam tekanan tinggi + inspeksi total.",
    features: [
      "Steam high pressure evaporator & blower",
      "Anti-bakteri & anti-jamur treatment",
      "Inspeksi 21 titik lengkap",
      "Cek freon, kompresor & kelistrikan",
      "Fogging desinfektan saluran udara",
      "Garansi dingin kembali 30 hari",
    ],
    badge: "PALING POPULER",
    ribbon: "HEMAT 30%",
    highlight: true,
  },
  {
    id: "total-care",
    name: "Total Care",
    tag: "Annual Maintenance",
    price: "Rp 450.000",
    unit: "/ unit / tahun",
    desc: "Ketenangan sepanjang tahun — AC Anda kami rawat seperti milik sendiri.",
    features: [
      "4x kunjungan perawatan / tahun",
      "Prioritas jadwal & antrian",
      "Diskon spare part & freon 20%",
      "Laporan kondisi AC via WhatsApp",
      "Garansi sepanjang masa kontrak",
    ],
    badge: "BEST VALUE",
  },
];

export const COMPARE_ROWS: { feature: string; basic: boolean | string; premium: boolean | string; total: boolean | string }[] = [
  { feature: "Cuci filter & body unit", basic: true, premium: true, total: true },
  { feature: "Steam high pressure", basic: false, premium: true, total: true },
  { feature: "Anti-bakteri & anti-jamur", basic: false, premium: true, total: true },
  { feature: "Inspeksi 21 titik", basic: false, premium: true, total: true },
  { feature: "Fogging desinfektan", basic: false, premium: true, total: true },
  { feature: "Kunjungan berkala / tahun", basic: "—", premium: "—", total: "4x" },
  { feature: "Prioritas jadwal", basic: false, premium: false, total: true },
  { feature: "Diskon spare part & freon", basic: false, premium: false, total: "20%" },
  { feature: "Laporan berkala WhatsApp", basic: false, premium: false, total: true },
  { feature: "Garansi", basic: "7 hari", premium: "30 hari", total: "Sepanjang kontrak" },
];

export const PROMO_TERMS = [
  "Promo berlaku untuk seluruh area Jabodetabek (Jakarta, Bogor, Depok, Tangerang, Bekasi).",
  "Minimal pemesanan 1 unit AC untuk setiap paket promo.",
  "Promo tidak dapat digabungkan dengan promo atau voucher lain.",
  "Harga paket belum termasuk spare part & pengisian freon tambahan (jika diperlukan).",
  "Garansi berlaku sesuai syarat & ketentuan masing-masing paket.",
  "Bonus spesial hanya berlaku untuk pemesanan yang dilakukan pada hari yang sama.",
];

/* ------------------------------- FAQ ------------------------------- */
export const FAQS = [
  {
    q: "Berapa lama garansi pengerjaan servis AC?",
    a: "Garansi standar kami adalah 30 hari untuk semua layanan perbaikan & cuci AC. Paket Total Care mendapatkan garansi sepanjang masa kontrak berjalan.",
  },
  {
    q: "Apakah ada biaya tambahan jika teknisi datang mengecek dulu?",
    a: "Untuk pengecekan awal / konsultasi di lokasi, kami mengenakan biaya kunjungan Rp 50.000 yang akan dipotong penuh dari total biaya jika Anda melanjutkan servis.",
  },
  {
    q: "Berapa lama waktu kedatangan teknisi setelah pemesanan?",
    a: "Rata-rata 45 menit hingga 2 jam tergantung lokasi dan ketersediaan teknisi. Untuk area Jabodetabek, kami menjamin kedatangan di hari yang sama.",
  },
  {
    q: "Bagaimana sistem pembayarannya?",
    a: "Kami menerima pembayaran tunai, transfer bank, dan QRIS. Pembayaran dilakukan setelah pengerjaan selesai dan Anda puas dengan hasilnya.",
  },
  {
    q: "Apakah melayani AC semua merek?",
    a: "Ya, teknisi kami terlatih untuk semua merek AC: Daikin, Panasonic, LG, Sharp, Samsung, Gree, Mitsubishi, Haier, dan lainnya.",
  },
  {
    q: "Bagaimana jika AC masih bermasalah setelah diservis?",
    a: "Hubungi kami kembali dan teknisi akan datang ulang tanpa biaya tambahan selama masih dalam masa garansi. Kepuasan Anda adalah prioritas kami.",
  },
  {
    q: "Apakah suku cadang yang digunakan original?",
    a: "Ya, 100% suku cadang original bergaransi resmi dari distributor resmi masing-masing merek. Bukti keaslian kami lampirkan di invoice.",
  },
  {
    q: "Melayani area mana saja?",
    a: "Saat ini kami melayani seluruh area Jabodetabek (Jakarta, Bogor, Depok, Tangerang, Bekasi) dan sekitarnya, baik residensial, perkantoran, ruko, maupun industrial.",
  },
];

/* --------------------------- SERVICE AREAS -------------------------- */
export const AREAS = [
  { city: "Jakarta", points: "Jakarta Pusat, Barat, Selatan, Timur, Utara" },
  { city: "Bogor", points: "Kota Bogor, Cibinong, Sentul, Dramaga" },
  { city: "Depok", points: "Margonda, Beji, Cimanggis, Sawangan" },
  { city: "Tangerang", points: "BSD, Bintaro, Alam Sutera, Gading Serpong" },
  { city: "Bekasi", points: "Summarecon, Harapan Indah, Cikarang, Tambun" },
];
