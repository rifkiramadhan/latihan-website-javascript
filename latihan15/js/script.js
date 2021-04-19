// Pengulangan & Pengkondisian Bersarang
// Untuk menulis bintang pada konsile tidak seperti ini
// console.log('*****');

// Segitiga siku2
var s = '';
// Selama i sama dengan nol, apakah nol lebih kecil dari lima, jika true
for(var i = 0; i < 10; i++) {
    // Selama j sama dengan nol, apakah nol lebih kecil sama dengan nol
    // jika true jalankan s +='*';
    for(var j = 0; j <= i; j++) {
        // Mencetak bintang setelah itu ditambah 1
        s += '*';
    }
    s += '\n';

    // s += '******';
    // s = s + '*';
}
console.log(s);

console.log('-----');

// Segitiga siku2 kebawah
var b = '';
// Selama i sama dengan 10, apakah 10 lebih besar dari nol, jika true
for(var i = 10; i > 0; i--) {
    // Selama j sama dengan nol, apakah nol lebih kecil dari sepuluh
    // jika true jalankan b += '*';
    for(var j = 0; j < i; j++) {
    // Mencetak bintang setelah itu ditambah 1
        b += '*';
    }
    b += '\n';
    
    // b += '******';
    // b = b + '*';
}
console.log(b);