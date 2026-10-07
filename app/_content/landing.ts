export type Lang = "id" | "en";

export const LANDING = {
  id: {
    metaTitle: "Jejak — Rekam Lari & Jalan Kakimu",
    navFeatures: "Fitur",
    navPrivacy: "Privasi",
    download: "Unduh",
    badge: "Tanpa akun · Tanpa server",
    heroTitle: "Setiap Langkah Tercatat",
    heroBody:
      "Rekam lari dan jalan kakimu — jarak, durasi, pace, dan rute. Semua tersimpan di HP-mu sendiri.",
    getItOn: "Dapatkan di",
    free: "Gratis",
    featTitle: "Simpel, Fokus, Ringan",
    featBody:
      "Jejak dibuat untuk satu hal: merekam sesimu dengan jelas, tanpa feed, tanpa iklan, tanpa ribet.",
    features: [
      { title: "Lari & Jalan", body: "Pilih tipe aktivitas, ketuk Mulai, dan Jejak langsung merekam." },
      { title: "Rute di Peta", body: "Lihat rute live saat bergerak, lalu ringkasan dengan warna pace di akhir sesi." },
      { title: "Metrik yang Jelas", body: "Jarak, durasi, pace kini, dan pace rata-rata — angka besar, mudah dibaca sambil bergerak." },
      { title: "Jalan Tanpa Internet", body: "Merekam pakai GPS saja. Tidak perlu sinyal data untuk mencatat sesimu." },
    ],
    statLabel: "Contoh sesi lari",
    duration: "Durasi",
    pace: "Pace /km",
    statBody:
      "Jeda kapan saja, kunci layar supaya tidak tersentuh di saku, dan tahan tombol untuk selesai.",
    dist: "5,24",
    privTitle: "Datamu Tetap di HP-mu",
    privBody:
      "Jejak tidak punya server dan tidak meminta akun. Kami tidak bisa melihat sesimu — karena memang tidak pernah dikirim ke mana-mana.",
    readPolicy: "Baca Kebijakan Privasi",
    privItems: [
      { title: "Tanpa akun", body: "Tidak ada pendaftaran, email, atau nomor HP." },
      { title: "Tersimpan lokal", body: "Semua sesi disimpan di perangkatmu saja." },
      { title: "Lokasi hanya saat dipakai", body: "Lokasi dipakai untuk rute dan jarak, hanya saat sesi berjalan." },
      { title: "Kamu yang pegang kendali", body: "Hapus sesi kapan saja. Menghapus app menghapus semua data." },
    ],
    ctaTitle: "Mulai Jejak Pertamamu, Yuk",
    ctaBody: "Unduh gratis dan rekam sesi pertamamu hari ini.",
    policy: "Kebijakan Privasi",
    otherLang: "English",
    madeBy: "Dibuat oleh",
    scr: {
      run: "Lari",
      walk: "Jalan",
      startRun: "Mulai Lari",
      startWalk: "Mulai Jalan",
      date: "Sabtu, 3 Oktober",
      lastSession: "Sesi Terakhir",
      lastDate: "Kemarin · 06.12",
      d1: "5,24",
      d2: "3,18",
      distance: "Jarak",
      duration: "Durasi",
      curPace: "Pace Kini",
      avgPace: "Pace Rata-rata",
      lock: "Kunci",
      pause: "Jeda",
      finish: "Selesai",
      slow: "Lambat",
      fast: "Cepat",
    },
  },
  en: {
    metaTitle: "Jejak — Record Your Runs & Walks",
    navFeatures: "Features",
    navPrivacy: "Privacy",
    download: "Download",
    badge: "No account · No server",
    heroTitle: "Every Step, Recorded",
    heroBody:
      "Record your runs and walks — distance, time, pace and route. Everything stays on your own phone.",
    getItOn: "Get it on",
    free: "Free",
    featTitle: "Simple, Focused, Light",
    featBody: "Jejak does one thing: record your session clearly. No feed, no ads, no fuss.",
    features: [
      { title: "Run & Walk", body: "Pick an activity, tap Start, and Jejak begins recording." },
      { title: "Route on a Map", body: "See your live route while moving, then a pace-coloured summary at the end." },
      { title: "Clear Metrics", body: "Distance, time, current and average pace — big numbers, easy to read on the move." },
      { title: "Works Offline", body: "Records with GPS only. No data connection needed to log your session." },
    ],
    statLabel: "Sample run",
    duration: "Time",
    pace: "Pace /km",
    statBody: "Pause anytime, lock the screen so pocket taps do nothing, and hold to finish.",
    dist: "5.24",
    privTitle: "Your Data Stays on Your Phone",
    privBody:
      "Jejak has no server and asks for no account. We can't see your sessions — they're never sent anywhere.",
    readPolicy: "Read Privacy Policy",
    privItems: [
      { title: "No account", body: "No sign-up, email or phone number." },
      { title: "Stored locally", body: "Every session is stored on your device only." },
      { title: "Location only while in use", body: "Location is used for route and distance, only during a session." },
      { title: "You're in control", body: "Delete sessions anytime. Uninstalling the app deletes all data." },
    ],
    ctaTitle: "Start Your First Jejak",
    ctaBody: "Download for free and record your first session today.",
    policy: "Privacy Policy",
    otherLang: "Bahasa Indonesia",
    madeBy: "Made by",
    scr: {
      run: "Run",
      walk: "Walk",
      startRun: "Start Run",
      startWalk: "Start Walk",
      date: "Saturday, October 3",
      lastSession: "Last Session",
      lastDate: "Yesterday · 6:12 AM",
      d1: "5.24",
      d2: "3.18",
      distance: "Distance",
      duration: "Time",
      curPace: "Current Pace",
      avgPace: "Avg Pace",
      lock: "Lock",
      pause: "Pause",
      finish: "Finish",
      slow: "Slow",
      fast: "Fast",
    },
  },
} as const;

export const AUTHOR = "Muhammad Azri Fatihah Susanto";

export type ScreenCopy = (typeof LANDING)[Lang]["scr"];

export const playUrl = (lang: Lang) =>
  `https://play.google.com/store/apps/details?id=com.muhazri.jejak&hl=${lang}`;

/** Indonesian lives at the root, English under /en. */
export const homeHref = (lang: Lang) => (lang === "en" ? "/en" : "/");
export const privacyHref = (lang: Lang) => (lang === "en" ? "/en/privacy" : "/privacy");
