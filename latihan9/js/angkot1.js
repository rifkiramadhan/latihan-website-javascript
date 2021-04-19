// Pengulangan While 10x secara manual
// Semakin banyak akan semakin merepotkan
// console.log('Hello JavaScript! 1');
// console.log('Hello JavaScript! 2');
// console.log('Hello JavaScript! 3');
// console.log('Hello JavaScript! 4');
// console.log('Hello JavaScript! 5');
// console.log('Hello JavaScript! 6');
// console.log('Hello JavaScript! 7');
// console.log('Hello JavaScript! 8');
// console.log('Hello JavaScript! 9');
// console.log('Hello JavaScript! 10');

// While
/*
Selama kondisi bernilai true, maka lakukan aksi dalam blok {}
while(kondisi) {
    aksi
}

Contoh:
    Looping forever (invinity loop)
    - while(true) {
        console.log('Hello JavaScript');
      }

    Tidak pernah dijalankan
    - while(false) {
        console.log('Hello JavaScript');
      }
    
    Perulangan yang bisa ditentukan manual
    - nilai awal
      while(kondisi terminasi) {
          
        aksi

        increment / decrement
      }
*/

// Contoh While (Perulangan)
// Selama nilainya true maka
// var ulang = true;
// while(ulang) {
//     // Akan mencetak Hello JavaScript ke layar console
//     console.log('Hello JavaScript!');
//     // Lalu nilainya akan di setup kembali menggunakan confirm
//     ulang = confirm('Ulang lagi ?');
// }
// // Ketika tombol cancel ditekan
// alert('Terimakasih');

// Perulangan sebanyak 5 kali
// Selama nilainya lebih kecil dari 5
// var nilaiAwal = 1;
// while(nilaiAwal <= 5) {
//     // Maka apapun yang ada didalamnya akan dikerjakan
//     console.log('Hello JavaScript');
//     // Nilai awal ditambah 1
//     nilaiAwal++;
// }

// // Selama nilainya lebih kecil dari 100
// var nilaiAwal = 1;
// while(nilaiAwal <= 100) {
//     // Maka apapun yang ada didalamnya akan dikerjakan kemudian diambah nilai awal
//     console.log('Hello JavaScript ' + nilaiAwal + 'x');
//     // Nilai awal ditambah 1
//     nilaiAwal++;
// }

// // Selama nilainya lebih kecil dari 100
// var nilaiAwal = 1;
// while(nilaiAwal <= 10) {
//     // Maka apapun yang ada didalamnya akan dikerjakan kemudian diambah nilai awal
//     console.log('Angkot No.' + ' ' + nilaiAwal + ' ' + 'beroperasi dengan baik.');
//     // Nilai awal ditambah 1
// nilaiAwal++;
// }

// Perbaikan perulangan while angkot
// Selama nilainya lebih kecil dari 100
var jmlAngkot = 10;
var noAngkot = 1;

while(noAngkot <= jmlAngkot) {
    // Maka apapun yang ada didalamnya akan dikerjakan kemudian diambah nilai awal
    console.log('Angkot No.' + ' ' + noAngkot + ' ' + 'beroperasi dengan baik.');
    
    // Nilai awal ditambah 1
noAngkot++;
}

// Tabel Penelusuran Angkot
// Trace table / dry-run test, ada di file gambar bernama depan tabel.