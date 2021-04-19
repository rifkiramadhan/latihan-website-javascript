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
        } else {
            aksi 3
        }
*/

var jmlAngkot = 10;
var angkotBeroperasi = 6;

// Ketika nomor angkot sama dengan satu, apakah satu lebih kecil dari jumlah angkot, jika true
for(var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
    // Maka masuk ke pengulangan
    // Jika satu lebih kecil dari enam, jika true
    if(noAngkot <= 6) {
        // Maka cetak angkot beroperasi dengan baik
        console.log('Angkot No.' + ' ' + noAngkot + ' ' + 'beroperasi dengan baik.');
    // Jika delapan sama dengan delapan, jika true cetak else if
    // Jika tujuh sama dengan delapan, jika false cetak else
    } else if(noAngkot === 8) {
        // Maka cetak angkot sedang lembur
        console.log('Angkot No.' + ' ' + noAngkot + ' ' + 'sedang lembur');
    } else {
        // Selain itu maka cetak angkot sedang tidak beroperasi
        console.log('Angkot No.' + ' ' + noAngkot + ' ' + 'sedang tidak beropeasi.');
    } 
}   