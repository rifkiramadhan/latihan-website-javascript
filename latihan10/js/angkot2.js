// Perulangan For
/*
 Penggunaan for bagian2 nya tidak tercecer seperti while
 1. Penentuan nilai awal
 2. Penentuan kondisi terminasi
 3. Increment atau decrement
 
 Contoh:
    - for(var nilaiAwal = 1; nilaiAwal <= 10; nilaiAwal++) {
        console.log('Hello JavaScript');
    }
*/

// Contoh perulangan for
// for(var nilaiAwal = 1; nilaiAwal <= 10; nilaiAwal++) {
//         console.log('Hello JavaScript' + ' ' + nilaiAwal + 'x');
// }

// Contoh perulangan angkot menggunakan penggabungan for dan while
var jmlAngkot = 10;
var angkotBeroperasi = 8;
var noAngkot = 1;

// Selama nomor angkot lebih kecil dari angkot beroperasi
while(noAngkot <= angkotBeroperasi) {
    // Maka cetak angkot beroperasi dengan baik
    console.log('Angkot No.' + ' ' + noAngkot + ' ' + 'beroperasi dengan baik');

    // Angkot ditambah satu
noAngkot++;
}

// Selama nomor angkot yang beroperasi lebih kecil dari jumlah angkot
for(noAngkot = angkotBeroperasi + 1; noAngkot <= jmlAngkot; noAngkot++) {
    // Maka lakukan looping pada nomor angkot seetlahnya
    console.log('Angkot No.' + ' ' + noAngkot + ' ' + 'sedang tidak beroperasi');
}