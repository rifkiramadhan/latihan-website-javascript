// Contoh Looping Hitung Mundur
// for(var i = 10; i >= 1; i--) {
//     console.log(i);
// }

// Contoh Looping Rekursif Tidak Terhenti
// function tampilAngka(n) {
//     console.log(n);
//     return tampilAngka(n-1);
// }
// tampilAngka(10);

// Contoh Looping Rekursif Terhenti
// function tampilAngka(n) {
//     // Base case
//     if(n === 0) {
//         return;
//     }
//     console.log(n);
//     return tampilAngka(n-1);
// }

// tampilAngka(10);

// Contoh Faktorial
// function faktorial(n) {
//     if (n === 0) return 1;
//     return n * faktorial(n-1);
// }

// Contoh Faktorial Looping
function faktorial(n) {
    var hasil = 1;
    for(var i = n; i > 0; i--) {
        hasil *= i;
    }
    return hasil;
}

