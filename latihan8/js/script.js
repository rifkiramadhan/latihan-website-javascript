// Control Flow
/*
1. Pengulangan (Loop / iteration)
   Adalah sebuah konsep untuk mengerjakan atau mengeksekusi sebuah
   statement yang sama lebih dari satu kali atau berulang.
   Jenis:
        - for
        - while
        - do while
2. Pegkondisian (Percabangan)
   Adalah sebuah keadaan dimana program kita bisa memilih untuk
   mengeksekusi statment yang berbeda berdasarkan kondisi yang diberikan.
   Jenis:
        - if
        - if.. else
        - if.. else if.. else
        - switch
*/
// Normal Flow
/*
Apabila program kita memiliki lebih dari satu statement, maka statement
tersebut akan dieksekusi dari atas ke bawah atau dari kiri ke kanan.
Contoh:
    - var angka = prompt('Masukkan angka :');
          alert('Angka yang anda masukkan adalah:' + ' ' + angka);
*/

// Contoh Perulangan
// var angka = prompt('Masukkan angka :');
//     alert('Angka yang anda masukkan adalah:' + ' ' + angka);

// alert('Mulai');
// // Menggunakan perulangan for agar dapat dieksekusi berulangkali
// for(var i = 0; i < 5; i++) {
//     alert('Hello JavaScript');
// }
// alert('Selesai');

// Contoh Pengkondisian
// Untuk menentukan bilangan Genap / Ganjil, default angka 2
var angka = prompt('Masukkan angka:' + ' ');
// Jika angka yang dimasukkan bisa dibagi 2 dan sisa baginya adalah nol
if(angka % 2 === 0) {
    // Maka cetak bilangan genap
    alert(angka + ' ' + 'Adalah bilangan Genap');
} else {
    // Jika tidak sama dengan nol, maka cetak bilangan ganjil
    alert(angka + ' ' + 'Adalah bilangan Ganjil');
}