var jmlAngkot = 10;
var angkotBeroperasi = 6;

// Ketika nomor angkot sama dengan satu, apakah satu lebih kecil dari jumlah angkot, jika true
for(var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
    // Maka masuk ke pengulangan
    // Jika satu lebih kecil dari enam, dan dia bukan lima jika true
    if(noAngkot <= 6 && noAngkot !== 5) {
        // Maka cetak angkot beroperasi dengan baik
        console.log('Angkot No.' + ' ' + noAngkot + ' ' + 'beroperasi dengan baik.');
    // Jika delapan sama dengan delapan, jika true cetak else if
    // Atau jika lima lebih kecil dari sepuluh, jika true cetak else if
    // Atau jika lima tidak sama dengan sepuluh, jika true cetak else if
    // Jika tujuh sama dengan delapan, jika false cetak else
    } else if(noAngkot === 8 || noAngkot === 10 || noAngkot === 5) {
        // Maka cetak angkot sedang lembur
        console.log('Angkot No.' + ' ' + noAngkot + ' ' + 'sedang lembur');
    } else {
        // Selain itu maka cetak angkot sedang tidak beroperasi
        console.log('Angkot No.' + ' ' + noAngkot + ' ' + 'sedang tidak beropeasi.');
    } 
}   