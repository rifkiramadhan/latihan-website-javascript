// Pengkondisian if else dan if... else if... else
/*
Contoh:
    if else:
        - if(kondisi) {
            aksi 1
        } else {
            aksi 2
        }
    if... else if... else:
        - if (kondisi 1) {
            aksi 1
        } else if (kondisi 2) {
            aksi 2
        } else if(kondisi 3) {
            aksi 3
        } else if(kondisi n) {
            aksi n
        } else {
            aksi default
        }
*/

// Menggunakan pengkondisian for didalam pengulangan if else
// var jmlAngkot = 10;
// var angkotBeroperasi = 6;
// var noAngkot = 1;

// Selama nomor angkotnya lebih dari dengan dari jumlah angkot
// for ( var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
//     // Jika nomor angkot jumlahnya lebih dari dengan 6, jika hasilnya bernilai true
//     if(noAngkot <= 6) {
//         // Maka cetak angkot beroperasi dengan baik
//         console.log('Angkot No.' + ' ' + noAngkot + ' ' + 'beroperasi dengan baik.');
//     // Selain dari itu, jika hasilnya bernilai false
//     } else {
//         // Maka cetak angkot sedang tidak beroperasi
//         console.log('Angkot No.' + ' ' + noAngkot + ' ' + 'sedang tidak beroperasi');
//     }
// }

var angka = prompt('Masukkan angka:');

if (angka % 2 === 0) {
    alert(angka + 'Adalah bilangan Genap');
} else if (angka % 2 === 1) {
    alert(angka + 'Adalah bilangan Ganjil');
} else {
    alert('Yang anda masukkan bukan angka!');
}