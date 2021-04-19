// Menjumlahkan volume 2 kubus
/*
Algoritma:
    1. Ketahui sisi masing2 kubus
        - Sisi A: 8
        - Sisi B: 3
    2. Hitung volume masing2 kubus
        - 8 pangkat 3 = 512
        - 3 pangkat 3 = 27
    3. Jumlahkan hasilnya
        - 512 + 27
    4. Kembalikan nilai jawabannya
        - 539
*/

// var a = 8;
// var b = 3;
// var volumeA;
// var volumeB;
// var total;

// volumeA = a * a * a;
// volumeB = b * b * b;

// total = volumeA + volumeB;

// console.log(total);

// Fungsi jumlah volume dua kubus a dan b
function jumlahVolumeDuaKubus(a, b) {
    // Variable untuk menghitung volume a dan b serta total
    var volumeA;
    var volumeB;
    var total;

    // Perkalian volume a dan b
    volumeA = a * a * a;
    volumeB = b * b * b;

    // Penjumlahan volume a dan b
    total = volumeA + volumeB;

    // Mengembalikan nilai total
    return total;
}
// Menjalankan dan menampilkan output menggunakan alert
alert(jumlahVolumeDuaKubus(8, 3));