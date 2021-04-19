// Refactoring Sederhana, Menghitung Jumlah Volume Dua Kubus

// Contoh code yang belum efisien
// function jumlahVolumeDuaKubus(a, b) {
//     var volumeA;
//     var volumeB;
//     var total;

//     volumeA = a * a * a;
//     volumeB = b * b * b;

//     total = volumeA + volumeB;

//     return total;
// }
// alert(jumlahVolumeDuaKubus(8, 3));

// Contoh code yang sudah efisien
function jumlahVolumeDuaKubus(a, b) {
    return a * a * a + b * b * b;
}
alert(jumlahVolumeDuaKubus(8, 3));