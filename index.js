const prompt = require("prompt-sync")();
const fs = require("fs");

let categories = [];
let shoppingList = [];

function tambahKategori(namaKategori, kataKunci) {
  categories.push({ nama: namaKategori, kataKunci: kataKunci });
  console.log("Kategori berhasil ditambahkan!");
}

function cariKategori(namaKategori) {
  if (!categories.length) {
    console.log("Daftar kategori tidak tersedia!");
    return;
  }
  const foundCategory = categories.find((category) => category.kataKunci.toLowerCase() === namaKategori.toLowerCase());
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
  const index = prompt(`Pilih Kategori yang akan dihapus [1-${categories.length}]: `) - 1;
  if (index >= 0 && index < categories.length) {
    categories.splice(index, 1);
    console.log("Kategori berhasil dihapus!");
    return;
  }
  console.log("Pilihan kategori tidak valid!");
}

function tambahBelanjaan() {
  if (!categories.length) {
    console.log("Daftar kategori tidak tersedia. Tambahkan kategori terlebih dahulu!");
    return;
  }
  console.log("Daftar Kategori Tersedia:");
  categories.forEach((category, index) => {
    console.log(`${index + 1}. ${category.nama}`);
  });
  console.log("Tambahkan rencana daftar belanja. Tekan underscore untuk menghentikan penambahan");

  for (let indexBarang = 1; indexBarang <= 10; indexBarang++) {
    const kategori = prompt(`Kategori Barang ke - ${indexBarang} [1-${categories.length}]: `);
    if (kategori.includes("_")) break;
    const indexKategori = Number(kategori);
    if (indexKategori >= 1 && indexKategori <= categories.length) {
      const namaBarang = prompt(`Nama Barang ke - ${indexBarang}: `);
      let jumlahBarang = prompt(`Masukkan jumlah barang ke - ${indexBarang}: `);
      jumlahBarang = Number(jumlahBarang);
      if (isNaN(jumlahBarang)) {
        console.log(`Jumlah barang ke - ${indexBarang} tidak valid!`);
        return;
      }
      shoppingList.push({
        kategori: categories[indexKategori - 1].nama,
        nama: namaBarang,
        jumlah: jumlahBarang,
      });
    } else {
      console.log("Pilihan kategori tidak valid!");
      return;
    }
  }
  console.log("Daftar belanja berhasil ditambahkan!");
}

function cariBelanjaan(namaBarang) {
  if (!shoppingList.length) {
    console.log("Daftar belanjaan tidak tersedia!");
    return;
  }
  const foundItem = shoppingList.find((item) => item.nama.toLowerCase() === namaBarang.toLowerCase());
  if (!foundItem) {
    console.log("Belanjaan tidak ditemukan!");
    return;
  }
  console.log(`Belanjaan ditemukan!`);
  console.log(`Nama Barang: ${foundItem.nama}`);
  console.log(`Jumlah Barang: ${foundItem.jumlah}`);
  console.log(`Kategori Barang: ${foundItem.kategori}`);
}

function hapusBelanjaan() {
  if (!shoppingList.length) {
    console.log("Daftar belanjaan tidak tersedia!");
    return;
  }
  console.log("Daftar Belanjaan:");
  shoppingList.forEach((item, index) => {
    console.log(`${index + 1}. ${item.nama}`);
  });
  const index = Number(prompt(`Pilih Barang yang akan dihapus [1-${shoppingList.length}]: `)) - 1;
  if (index >= 0 && index < shoppingList.length) {
    shoppingList.splice(index, 1);
    console.log("Barang berhasil dihapus!");
  } else {
    console.log("Pilihan barang tidak valid!");
  }
}

function hitungTotalBelanjaan() {
  let totalHarga = 0;
  console.log("Berikut adalah daftar belanjaan:");
  for (let index = 0; index < shoppingList.length; index++) {
    const item = shoppingList[index];
    console.log(`${index + 1}. ${item.nama} - ${item.jumlah} ${item.kategori.toLowerCase()}`);
    const harga = Number(prompt(`Masukkan harga beli: `));
    if (isNaN(harga)) {
      console.log("Harga beli tidak valid!");
      return;
    }
    const subTotal = harga * item.jumlah;
    totalHarga = totalHarga + subTotal;
    console.log(`Sub total harga belanjaan adalah Rp ${subTotal}`);
  }
  console.log(`Total harga belanjaan adalah Rp ${totalHarga}`);
}

function simpanDataBelanjaan() {
  const data = {
    categories,
    shoppingList,
  };

  fs.writeFileSync("data.json", JSON.stringify(data, null, 2));
  console.log("Data berhasil disimpan ke dalam file json!");
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
    case "4":
      tambahBelanjaan();
      break;
    case "5":
      const namaBelanjaan = prompt("Masukan nama barang: ");
      cariBelanjaan(namaBelanjaan);
      break;
    case "6":
      hapusBelanjaan();
      break;
    case "7":
      hitungTotalBelanjaan();
      break;
    default:
      if (pilihan !== "8") {
        console.log("Pilihan menu tidak valid! Silakan pilih menu yang sesuai");
      }
      break;
  }
}
simpanDataBelanjaan();
console.log("Terima kasih telah menggunakan program Daftar Belanja!");
