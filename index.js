const prompt = require("prompt-sync")();

let categories = [];

function tambahKategori(namaKategori, kataKunci) {
  categories.push({ nama: namaKategori, kataKunci: kataKunci });
  console.log("Kategori berhasil ditambahkan!");
}

function cariKategori(namaKategori) {
  const foundCategory = categories.find(
    (category) => category.nama.toLowerCase() === namaKategori.toLowerCase(),
  );
  if (!foundCategory) {
    console.log("Kategori tidak ditemukan!");
    return;
  }
  console.log("Kategori ditemukan!");
  console.log(`Nama Kategori: ${foundCategory.nama}`);
}

function hapusKategori() {
  if (!categories.length) {
    console.log("Daftar kategori tidak tersedia!");
    return;
  }
  console.log("Daftar Kategori Tersedia:");
  categories.forEach((category, index) => {
    console.log(`${index + 1}. ${category.nama}`);
  });
  const index =
    prompt(`Pilih Kategori yang akan dihapus [1-${categories.length}]: `) - 1;
  if (index >= 0 && index < categories.length) {
    categories.splice(index, 1);
    console.log("Kategori berhasil dihapus!");
    return;
  }
  console.log("Pilihan kategori tidak valid!");
}

let pilihan = "";
while (pilihan !== "8") {
  console.log("\n======================");
  console.log("Program Daftar Belanja");
  console.log("======================");
  console.log("1. Tambah Kategori");
  console.log("2. Cari Kategori");
  console.log("3. Hapus Kategori");
  console.log("4. Tambah Belanjaan");
  console.log("5. Cari Belanjaan");
  console.log("6. Hapus Belanjaan");
  console.log("7. Hitung Total Belanjaan");
  console.log("8. Keluar");

  pilihan = prompt("Pilih Menu [1-8]: ");
  switch (pilihan) {
    case "1":
      const namaKategori = prompt("Nama Kategori: ");
      const kataKunci = prompt("Satuan Kata Kunci: ");
      tambahKategori(namaKategori, kataKunci);
      break;
    case "2":
      const namaCariKategori = prompt("Masukan nama kategori: ");
      cariKategori(namaCariKategori);
      break;
    case "3":
      hapusKategori();
      break;
    default:
      if (pilihan !== "8") {
        console.log("Pilihan tidak valid, silakan pilih menu yang sesuai.");
      }
      break;
  }
}
console.log("Terima kasih telah menggunakan program Daftar Belanja!");
