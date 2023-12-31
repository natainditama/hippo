// Memanggil package prompt-sync untuk input dari pengguna
const prompt = require("prompt-sync")();
// Memanggil package fs untuk operasi file
const fs = require("fs");

// Membuat variabel categories & shoppingList untuk menyimpan data aplikasi dalam bentuk array
let categories = [];
let shoppingList = [];

// Function untuk menambahkan kategori dengan dua parameter (namaKategori & kataKunci)
function tambahKategori(namaKategori, kataKunci) {
  // Menambahkan kategori sesuai dengan parameter ke dalam array categories
  categories.push({ nama: namaKategori, kataKunci: kataKunci });
  console.log("Kategori berhasil ditambahkan!");
}

// Function untuk mencari kategori berdasarkan nama kategori
function cariKategori(namaKategori) {
  // Memeriksa apakah daftar kategori kosong
  if (!categories.length) {
    console.log("Daftar kategori tidak tersedia!");
    return;
  }
  // Mencari kategori yang sesuai dengan namaKategori yang dimasukkan
  const foundCategory = categories.find((category) => category.kataKunci.toLowerCase() === namaKategori.toLowerCase());
  // Memeriksa apakah daftar kategori tidak ada
  if (!foundCategory) {
    console.log("Kategori tidak ditemukan!");
    return;
  }
  console.log("Kategori ditemukan!");
  console.log(`Nama Kategori: ${foundCategory.nama}`);
}

// Function untuk menghapus kategori
function hapusKategori() {
  // Memeriksa apakah daftar kategori kosong
  if (!categories.length) {
    console.log("Daftar kategori tidak tersedia!");
    return;
  }
  // Menampilkan semua daftar kategori yang tersedia
  console.log("Daftar Kategori Tersedia:");
  categories.forEach((category, index) => {
    console.log(`${index + 1}. ${category.nama}`);
  });
  // Meminta pengguna untuk memilih kategori yang akan dihapus
  const index = prompt(`Pilih Kategori yang akan dihapus [1-${categories.length}]: `) - 1;
  // Memerika apakah index dari categories ada dari array categories
  if (index >= 0 && index < categories.length) {
    // Menghapus kategori yang dipilih dari array categories
    categories.splice(index, 1);
    console.log("Kategori berhasil dihapus!");
    return;
  }
  console.log("Pilihan kategori tidak valid!");
}

// Function untuk menambahkan belanjaan ke dalam shoppingList
function tambahBelanjaan() {
  // Memeriksa apakah daftar kategori kosong
  if (!categories.length) {
    console.log("Daftar kategori tidak tersedia. Tambahkan kategori terlebih dahulu!");
    return;
  }
  // Menampilkan daftar kategori yang tersedia untuk memilih kategori belanjaan
  console.log("Daftar Kategori Tersedia:");
  categories.forEach((category, index) => {
    console.log(`${index + 1}. ${category.nama}`);
  });
  console.log("Tambahkan rencana daftar belanja. Tekan underscore untuk menghentikan penambahan");

  // Perulangan untuk menambahkan belanjaan hingga maksimal 10 barang
  for (let indexBarang = 1; indexBarang <= 10; indexBarang++) {
    // Mendapatkan kategori dari input user
    const kategori = prompt(`Kategori Barang ke - ${indexBarang} [1-${categories.length}]: `);
    // Jika kategori berisi underscore (_) maka perulangan selesai
    if (kategori.includes("_")) break;
    // Mengubah nilai dari kategori menjadi number
    const indexKategori = Number(kategori);
    // Memerika apakah index dari categories ada dari array categories
    if (indexKategori >= 1 && indexKategori <= categories.length) {
      // Mendapatkan namaBarang dari input user
      const namaBarang = prompt(`Nama Barang ke - ${indexBarang}: `);
      // Mendapatkan jumlahBarang dari input user
      let jumlahBarang = prompt(`Masukkan jumlah barang ke - ${indexBarang}: `);
      // Mengubah nilai dari jumlahBarang menjadi number
      jumlahBarang = Number(jumlahBarang);
      // Memeriksa apakah nilai dari jumlahBarang bukan angka (Nan - Not a Number)
      if (isNaN(jumlahBarang)) {
        console.log(`Jumlah barang ke - ${indexBarang} tidak valid!`);
        return;
      }
      // Menambahkan barang ke dalam shoppingList
      shoppingList.push({
        kategori: categories[indexKategori - 1].nama,
        nama: namaBarang,
        jumlah: jumlahBarang,
      });
    } else {
      // Menampikan output jika index dari categories tidak ada
      console.log("Pilihan kategori tidak valid!");
      return;
    }
  }
  console.log("Daftar belanja berhasil ditambahkan!");
}

// Function untuk mencari belanjaan berdasarkan nama barang
function cariBelanjaan(namaBarang) {
  // Memeriksa apakah daftar belanjaan kosong
  if (!shoppingList.length) {
    console.log("Daftar belanjaan tidak tersedia!");
    return;
  }
  // Mencari barang yang sesuai dengan namaBarang yang dimasukkan
  const foundItem = shoppingList.find((item) => item.nama.toLowerCase() === namaBarang.toLowerCase());
  // Memeriksa apakah daftar belanjaan tidak ada
  if (!foundItem) {
    console.log("Belanjaan tidak ditemukan!");
    return;
  }
  console.log(`Belanjaan ditemukan!`);
  console.log(`Nama Barang: ${foundItem.nama}`);
  console.log(`Jumlah Barang: ${foundItem.jumlah}`);
  console.log(`Kategori Barang: ${foundItem.kategori}`);
}

// Function untuk menghapus belanjaan dari shoppingList
function hapusBelanjaan() {
  // Memeriksa apakah daftar belanjaan kosong
  if (!shoppingList.length) {
    console.log("Daftar belanjaan tidak tersedia!");
    return;
  }
  // Menampilkan daftar belanjaan yang tersedia untuk dipilih barang yang akan dihapus
  console.log("Daftar Belanjaan:");
  shoppingList.forEach((item, index) => {
    console.log(`${index + 1}. ${item.nama}`);
  });
  // Meminta pengguna untuk memilih nama barang yang akan dihapus
  const index = prompt(`Pilih Barang yang akan dihapus [1-${shoppingList.length}]: `) - 1;
  // Memerika apakah index dari shoppingList ada dari array shoppingList
  if (index >= 0 && index < shoppingList.length) {
    // Menghapus barang dari shoppingList berdasarkan index yang dipilih
    shoppingList.splice(index, 1);
    console.log("Barang berhasil dihapus!");
  } else {
    // Menampilkan output jika index dari shoppingList tidak ada
    console.log("Pilihan barang tidak valid!");
  }
}

// Function untuk menghitung total harga belanjaan
function hitungTotalBelanjaan() {
  // Membuat variabel untuk menyimpan total harga semua barang
  let totalHarga = 0;
  console.log("Berikut adalah daftar belanjaan:");
  // Perulangan untuk menampilkan daftar belanjaan dan menghitung total harga belanjaan
  for (let index = 0; index < shoppingList.length; index++) {
    // Mendapatkan detail dari array shoppingList sesuai dengan index
    const item = shoppingList[index];
    // Menampilkan data (nama, jumlah dan kategori) barang
    console.log(`${index + 1}. ${item.nama} - ${item.jumlah} ${item.kategori.toLowerCase()}`);
    // Mendapatkan harga dari input user & Mengubah nilainya menjadi number
    const harga = Number(prompt(`Masukkan harga beli: `));
    // Memeriksa apakah nilai dari harga bukan angka (Nan - Not a Number)
    if (isNaN(harga)) {
      console.log("Harga beli tidak valid!");
      return;
    }
    // Menjumlahkan harga barang dikalikan jumlah barang
    const subTotal = harga * item.jumlah;
    // Menjumlahkan totalHarga brang sebelumnya ditambahkan totalHarga barang saat ini
    totalHarga = totalHarga + subTotal;
    console.log(`Sub total harga belanjaan adalah Rp ${subTotal}`);
  }
  console.log(`Total harga belanjaan adalah Rp ${totalHarga}`);
}

// Function untuk menyimpan data belanjaan ke dalam file JSON
function simpanDataBelanjaan() {
  // Mendapatkan semua data aplikasi
  const data = {
    categories,
    shoppingList,
  };
  // Menyimpan data aplikasi ke dalam file data.json
  fs.writeFileSync("data.json", JSON.stringify(data));
  console.log("Data berhasil disimpan ke dalam file json!");
}

// Perulangan utama untuk menampilkan menu dan meminta input pengguna hingga pengguna memilih untuk keluar (pilihan 8)
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

  // Mendapatkan pilihan menu dari input user
  pilihan = prompt("Pilih Menu [1-8]: ");
  // Percabangan pilihan menu sesuai dengan input user
  switch (pilihan) {
    case "1":
      // Mendapatkan nama kategori sesuai dengan input user
      const namaKategori = prompt("Nama Kategori: ");
      // Mendapatkan nama kunci sesuai dengan input user
      const kataKunci = prompt("Satuan Kata Kunci: ");
      // Memangil & Memasukkan data input diatas ke dalam function
      tambahKategori(namaKategori, kataKunci);
      break;
    case "2":
      // Mendapatkan nama kategori sesuai dengan input user
      const namaCariKategori = prompt("Masukan nama kategori: ");
      // Memangil & Memasukkan data input diatas ke dalam function
      cariKategori(namaCariKategori);
      break;
    case "3":
      // Memangil function hapusKategori
      hapusKategori();
      break;
    case "4":
      // Memangil function tambahBelanjaan
      tambahBelanjaan();
      break;
    case "5":
      // Mendapatkan nama belanjaan sesuai dengan input user
      const namaBelanjaan = prompt("Masukan nama barang: ");
      // Memangil & Memasukkan data input diatas ke dalam function
      cariBelanjaan(namaBelanjaan);
      break;
    case "6":
      // Memangil function hapusBelanjaan
      hapusBelanjaan();
      break;
    case "7":
      // Memangil function hitungTotalBelanjaan
      hitungTotalBelanjaan();
      break;
    // Jika pilihan menu tidak sesuai dengan diatas
    default:
      // Jika pilihan menu tidak sama dengan delapan
      // Maka akan muncul pilihan menu tidak valid dan mengulangi Program Daftar Belanja
      if (pilihan !== "8") {
        console.log("Pilihan menu tidak valid! Silakan pilih menu yang sesuai");
      }
      break;
  }
}
// Menyimpan data belanjaan ke dalam file JSON saat pengguna memilih keluar dari program
simpanDataBelanjaan();
console.log("Terima kasih telah menggunakan program Daftar Belanja!");
