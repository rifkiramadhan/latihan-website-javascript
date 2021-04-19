// Pengkodisian / Percabangan If
/*
    Contoh:
        - if(kondisi) {
            aksi
        }

        - var angka = 1;
          if(angka === 1) {
              alert('Anda memasukkan angka 1');
          }
*/

// Contoh if
// var angka = 1;
// if(angka === 1) {
//     alert('Anda memasukkan angka 1');
// }

// var angka = 1;
// if(angka < 5) {
//     alert(angka + ' ' + 'Lebih kecil dari 5');
// }

// var angka = 2;
// if (angka % 2 == 0) {
//     alert(angka + ' ' + 'Adalah bilangan Genap');
// }

// var angka = 3;
// if (angka % 2 == 0) {
//     alert(angka + ' ' + 'Adalah bilangan Genap');
// }

// if (angka % 2 == 1) {
//     alert(angka + ' ' + 'Adalah bilangan GANJIL');
// }

// var angka = 3;
// // Apakah angka 3 itu sisa baginya sama dengan nol ?
// if (angka % 2 == 0) {
//     // Jika true, maka cetak bilangan genap
//     alert(angka + ' ' + 'Adalah bilangan Genap');
// } else {
//     // Jika false, maka cetak bilangan ganjil
//     alert(angka + ' ' + 'Adalah bilangan Ganjil');
// }

var angka = prompt('Masukkan angka anda:');
// Apakah angka 3 itu sisa baginya sama dengan nol ?
if (angka % 2 == 0) {
    // Jika true, maka cetak bilangan genap
    alert(angka + ' ' + 'Adalah bilangan Genap');
} else {
    // Jika false, maka cetak bilangan ganjil
    alert(angka + ' ' + 'Adalah bilangan Ganjil');
}
