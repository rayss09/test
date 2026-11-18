(() => {
  const $ = (id) => document.getElementById(id);
  const jam = new Date().getHours();
  let waktu = "malam";
  if (jam >= 4 && jam < 11) waktu = "pagi";
  else if (jam >= 11 && jam < 15) waktu = "siang";
  else if (jam >= 15 && jam < 18) waktu = "sore";
  $("sapaan").textContent = `Selamat ${waktu}, selamat belajar!`;
  $("tanggalHariIni").textContent = new Intl.DateTimeFormat("id-ID",{weekday:"long",day:"numeric",month:"long",year:"numeric"}).format(new Date());

  const motivasi = [
    "Sedikit demi sedikit, lama-lama menjadi paham.",
    "Tidak harus langsung bisa, yang penting terus mencoba.",
    "Kesalahan adalah bagian dari proses belajar.",
    "Rasa ingin tahu adalah awal dari pengetahuan.",
    "Fokus pada proses, hasil akan mengikuti."
  ];
  $("gantiMotivasi").addEventListener("click", () => {
    const lama = $("kalimatMotivasi").textContent;
    let baru = lama;
    while (baru === lama) baru = motivasi[Math.floor(Math.random()*motivasi.length)];
    $("kalimatMotivasi").textContent = baru;
  });

  function bacaSelesai(key) {
    try {
      const data = JSON.parse(localStorage.getItem(key) || "[]");
      return Array.isArray(data) ? data.length : 0;
    } catch { return 0; }
  }
  function tampilkanProgress() {
    const fisika = bacaSelesai("materi-fisika-xi-v2");
    const kimia = bacaSelesai("materi-kimia-xi-v1");
    $("jumlahFisika").textContent = fisika;
    $("jumlahKimia").textContent = kimia;
    $("barFisika").style.width = `${Math.min(100,fisika/7*100)}%`;
    $("barKimia").style.width = `${Math.min(100,kimia/7*100)}%`;
  }
  tampilkanProgress();
  window.addEventListener("storage", tampilkanProgress);
})();