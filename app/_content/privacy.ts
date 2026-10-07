export const CONTACT_EMAIL = "kontak@jejak.app";

export const PRIVACY = {
  id: {
    metaTitle: "Kebijakan Privasi — Jejak",
    back: "Beranda",
    title: "Kebijakan Privasi",
    updated: "Berlaku sejak 7 Oktober 2026",
    tldrTitle: "Versi singkatnya",
    tldr: "Jejak tidak mengumpulkan, mengirim, atau menjual data pribadimu. Lokasi dan sesi hanya tersimpan di perangkatmu.",
    sections: [
      { h: "1. Tentang kebijakan ini", p: ["Kebijakan ini menjelaskan bagaimana aplikasi Jejak (“Jejak”, “kami”) menangani informasi saat kamu memakai aplikasi di perangkat Android. Dengan memakai Jejak, kamu menyetujui kebijakan ini."] },
      { h: "2. Data yang diproses", p: ["Lokasi perangkat (GPS): dipakai untuk menggambar rute dan menghitung jarak serta pace, hanya saat sesi sedang direkam.", "Data sesi: tipe aktivitas (lari/jalan), waktu mulai dan selesai, durasi, jarak, pace, dan titik-titik rute.", "Pengaturan: satuan jarak dan bahasa yang kamu pilih."] },
      { h: "3. Di mana data disimpan", p: ["Semua data di atas disimpan secara lokal di perangkatmu. Jejak tidak memiliki server, tidak membuat akun, dan tidak mengirim datamu ke kami atau pihak ketiga mana pun."] },
      { h: "4. Izin yang diminta", p: ["Lokasi: dibutuhkan untuk merekam rute dan jarak. Kamu bisa menolak atau mencabutnya kapan saja lewat Pengaturan perangkat; tanpa izin ini, sesi tidak bisa direkam.", "Notifikasi dan layanan latar depan: dipakai agar perekaman tetap berjalan saat layar mati dan menampilkan status sesi di notifikasi."] },
      { h: "5. Pihak ketiga", p: ["Peta ditampilkan menggunakan layanan peta pihak ketiga, yang dapat mengunduh potongan peta untuk area yang kamu lihat. Jejak tidak memakai iklan, pelacak analitik, atau SDK pemasaran."] },
      { h: "6. Menghapus data", p: ["Kamu bisa menghapus sesi satu per satu dari dalam aplikasi. Menghapus aplikasi atau menghapus data aplikasi lewat Pengaturan akan menghapus semua sesi secara permanen. Karena data tidak pernah dikirim ke kami, kami tidak dapat memulihkannya."] },
      { h: "7. Anak-anak", p: ["Jejak tidak ditujukan untuk anak di bawah 13 tahun dan tidak dengan sengaja mengumpulkan data dari mereka."] },
      { h: "8. Perubahan kebijakan", p: ["Jika kebijakan ini berubah, versi terbaru akan dipublikasikan di halaman ini dengan tanggal berlaku yang diperbarui."] },
    ],
    contactH: "9. Hubungi kami",
    contactP: "Ada pertanyaan soal privasi? Kirim email ke:",
  },
  en: {
    metaTitle: "Privacy Policy — Jejak",
    back: "Home",
    title: "Privacy Policy",
    updated: "Effective October 7, 2026",
    tldrTitle: "The short version",
    tldr: "Jejak does not collect, transmit, or sell your personal data. Location and sessions are stored only on your device.",
    sections: [
      { h: "1. About this policy", p: ["This policy explains how the Jejak app (“Jejak”, “we”) handles information when you use it on an Android device. By using Jejak, you agree to this policy."] },
      { h: "2. Data processed", p: ["Device location (GPS): used to draw your route and calculate distance and pace, only while a session is being recorded.", "Session data: activity type (run/walk), start and end time, duration, distance, pace, and route points.", "Settings: your chosen distance unit and language."] },
      { h: "3. Where data is stored", p: ["All of the above is stored locally on your device. Jejak has no server, creates no account, and does not send your data to us or any third party."] },
      { h: "4. Permissions requested", p: ["Location: required to record route and distance. You can deny or revoke it anytime in device Settings; without it, sessions cannot be recorded.", "Notifications and foreground service: used to keep recording while the screen is off and to show session status in a notification."] },
      { h: "5. Third parties", p: ["Maps are displayed using a third-party map service, which may download map tiles for the area you view. Jejak uses no ads, analytics trackers, or marketing SDKs."] },
      { h: "6. Deleting data", p: ["You can delete sessions individually in the app. Uninstalling the app or clearing its data in Settings permanently deletes all sessions. Because data is never sent to us, we cannot recover it."] },
      { h: "7. Children", p: ["Jejak is not directed at children under 13 and does not knowingly collect data from them."] },
      { h: "8. Changes", p: ["If this policy changes, the latest version will be published on this page with an updated effective date."] },
    ],
    contactH: "9. Contact us",
    contactP: "Questions about privacy? Email us at:",
  },
} as const;
