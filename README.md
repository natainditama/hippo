## Note

- `const`: Mendefinisikan variabel dengan nilai tetap yang tidak bisa diubah setelah dideklarasikan. Contohnya:
```js
const PI = 3.14;
// Nilai PI tidak dapat diubah setelah deklarasi
PI = 10; // ERROR
```

- `let`: Mendefinisikan variabel dengan nilai yang bisa diubah setelah dideklarasikan. Contohnya:
```js
let counter = 0;
// Nilai counter dapat diubah setelah deklarasi
counter = 1; // tidak ERORR
```

- `prompt-sync`: Mengambil input dari pengguna secara langsung di console. Contohnya:
```js
const prompt = require("prompt-sync")();
// Mengambil input dari pengguna dalam console
const name = prompt("Nama Lengkap: ");
```

- `fs`: Melakukkan operasi file, seperti membaca atau menulis, dll. Contohnya
```js
const fs = require("fs");
// Menulis teks ke dalam file "file.txt"
fs.writeFileSync("file.txt", "Hello, world!");
```

- `function`: Blok kode yang dapat dipanggil untuk melakukan tugas tertentu. Contohnya:
```js
function tambah(a, b) {
  return a + b;
}
// Memanggil fungsi 'tambah' untuk menambahkan 3 dan 5
const hasil = tambah(3, 5); // 8
```

- Operator `not` (`!`): Membalik nilai kebenaran dari suatu ekspresi. Contohnya:
```js
const isTrue = true;
// Mengubah nilai boolean true menjadi false
const isFalse = !isTrue; // false
```

- `array.push`: Menambahkan elemen baru ke dalam array. Contohnya:
```js
const numbers = [1, 2, 3];
// Menambahkan angka 4 ke dalam array numbers
numbers.push(4); // [1,2,3,4]
```

- `array.find`: Mencari elemen dalam array yang memenuhi kondisi tertentu. Contohnya:
```js
const fruits = ["apple", "banana", "orange"];
// Mencari buah 'banana' dalam array fruits
const foundFruit = fruits.find((fruit) => fruit === "banana"); // banana
```

- `array.length`: Mendapatkan jumlah elemen dalam array. Contohnya:
```js
const array = [10, 20, 30, 40];
// Mendapatkan jumlah elemen dalam array
const length = array.length; // 4
```

- `array.forEach`: Melakukan iterasi pada setiap elemen dalam array. Contohnya:
```js
const numbers = [1, 2, 3];
// Melakukan iterasi pada setiap elemen dalam array numbers
numbers.forEach((number) => {
  console.log(number); // 1...3
});
```

- `array.splice`: Mengubah isi array dengan menghapus elemen. Contohnya:
```js
const colors = ["red", "green", "blue"];
// Menghapus satu elemen dari indeks 1 dan menambahkan 'yellow'
colors.splice(1, 1); //  ['green']
console.log(colors); // ['red', 'blue']
```

- `string.includes`: Memeriksa apakah sebuah string mengandung teks tertentu. Contohnya:
```js
const message = "Hello, world!";
// Memeriksa apakah string 'message' mengandung kata 'world'
const isIncludes = message.includes("world"); // true
```

- `string.toLowerCase`: Mengubah semua karakter dalam string menjadi huruf kecil. Contohnya:
```js
const text = "HELLO";
// Mengubah semua karakter menjadi huruf kecil
const lowercaseText = text.toLowerCase(); // hello
```

- `Number(string)`: Mengonversi string menjadi tipe data number. Contohnya:
```js
const numberString = "123";
// Mengonversi string '123' menjadi number 123
const number = Number(numberString); // 123
```

- `isNaN(number)`: Mengecek apakah nilai bukan angka (NaN). Contohnya
```js
const value = 10;
// Memeriksa apakah nilai value bukan merupakan angka
const notNumber = isNaN(value); // false
```

- `fs.writeFileSync`: Menulis data ke dalam file secara langsung. Contohnya

```js
const fs = require("fs");
// Menulis teks ke dalam file "file.txt"
fs.writeFileSync("file.txt", "Hello, world!");
```

- `JSON.stringify`: Mengonversi objek JavaScript menjadi string JSON. Contohnya

```js
const data = { name: "John", age: 30 };
// Mengonversi objek 'data' menjadi string JSON
const jsonData = JSON.stringify(data);
```

- `while`: Membuat perulangan selama kondisi tertentu terpenuhi. Contonya

```js
let count = 0;
// Melakukan loop selama 'count' kurang dari 5
while (count < 5) {
  console.log(count); // 0...4
  count++;
}
```

- `for`: Membuat perulangan dengan iterasi yang terdefinisi. Contohnya:

```js
// Melakukan loop dari 1 hingga 10 dengan setiap iterasi
for (let i = 1; i <= 10; i++) {
  console.log(i); // 1...10
}
```

- `if`: Melakukan pengecekan kondisi sebelum menjalankan blok kode. Contohnya

```js
const num = 10;
// Melakukan pengecekan kondisi sebelum menjalankan blok kode
if (num > 5) {
  console.log("Lebih besar dari 5");
} else {
  console.log("Kurang dari atau sama dengan 5");
}
// Menampilkan 'Lebih besar dari 5'
```

- `switch` dan `case`:
  - `switch`: Melakukkan untuk percabangan berdasarkan nilai tertentu
  - `case`: Menangani kasus nilai tertentu dari nilai switch

```js
const color = "blue";
// Menentukan aksi berdasarkan nilai variabel 'color'
switch (color) {
  case "red":
    console.log("Warna merah");
    break;
  case "blue":
    console.log("Warna biru");
    break;
  default:
    console.log("Warna lain");
    break;
}
// Menampilkan 'Warna biru'
```

- `break`: Menghentikan eksekusi dari loop atau percabangan. Contohnnya

```js
// Menghentikan loop saat nilai i sama dengan 3
for (let i = 0; i < 5; i++) {
  if (i === 3) {
    break;
  }
  console.log(i); // 0...3
}
```

- `return`: Mengembalikan nilai dari sebuah fungsi dan menghentikan eksekusi fungsi tersebut. Contohnya

```js
function tambah(a, b) {
  return a + b;
}
// Mengembalikan hasil penjumlahan 3 dan 5 dari fungsi 'tambah'
const hasil = tambah(3, 5);
```
