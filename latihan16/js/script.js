var tanya = true;
while(tanya) {
    // Menangkap pilihan player
    var p = prompt('Pilih : Gajah, Semut, Orang');

    // Menangkap pilihan computer
    // Membangkitkan bilangan random
    var comp = Math.random();

    // Jika compt nilainya lebih kecil dari 0.34, jika true
    if (comp < 0.34) {
        // Maka cetak gajah
        comp = 'Gajah';
    /* Jika compnya lebih besar dari sama dengan 0.34
    dan comp nya lebih kecil dari 0.67, jika true */
    } else if(comp >= 0.34 && comp < 0.67) {
        // Maka cetak orang
        comp = 'Orang';
    // Sisanya
    } else {
        // Maka cetak semut
        comp = 'Semut';
    }
    console.log(comp);

    // Menentukan rules
    // Variable hasil yang dapat diisi dengan string
    var hasil = '';

    // Jika player sama dengan yang dipilih oleh komputer
    if(p == comp) {
        // Maka cetak seri
        hasil = 'SERI!';
    // Jika player memilih gajah
    } else if (p == 'Gajah') {
        // Jika komputer memilih orang
        // if(comp == 'Orang') {
            // Maka cetak menang
        //     hasil = 'MENANG!';
        // Selain itu
        // } else {
            // Maka cetak kalah
        //     hasil = 'KALAH!';
        // }

        // Menggunakan operator ternary
        /* Jika komputer memilih orang, maka jika true
         hasilnya menang, jika false hasilnya kalah */
        hasil = (comp == 'Orang') ? 'MENANG!' : 'KALAH!';
    // Jika player memilih orang
    } else if (p == 'Orang') {
        // Menggunakan operator ternary
        /* Jika komputer memilih gajah, maka jika true
        hasilnya kalah, jika memilih semut maka menang */
        hasil = (comp == 'Gajah') ? 'KALAH!' : 'MENANG!';

        // Jika komputer memilih gajah
        // if (comp == 'Gajah') {
            // Maka cetak kalah
        //     hasil = 'KALAH!';
        // Selain itu, jika komputer memilih semut
        // } else {
            // Cetak cetak menang
        //     hasil = 'MENANG'; 
        // }
    } else if(p == 'Semut') {
        /* Jika komputer memilih semut, maka hasilnya jika komputer
        memilih orang maka hasilnya kalah, jika komputer memilih gajah
        maka hasilnya menang */
        hasil = (comp == 'Orang') ? 'KALAH!' : 'MENANG!';
    // Selain itu
    } else {
        // Maka cetak
        hasil = 'Memasukkan pilihan yang salah!';
    }

    // Menampilkan hasilnya
    alert('Kamu memilih : ' + p + ' dan komputer memilih : ' + comp + '\nMaka hasilnya : Kamu ' + hasil);

    // Jika game over maka bisa klik tombol ok untuk mulai lagi
    tanya = confirm('Mulai lagi ?');
}
// Jika tombol cancel diklik maka cetak terimakasih
alert('Terimakasih sudah bermain!');