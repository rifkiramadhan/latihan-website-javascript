// Hal umum jika menggunakan array
// Pseudo arguments pada javascript
function tambah() {

    var hasil = 0;
    // Selama i sama dengan nol dan i lebih kecil dari panjang arguments
    for(var i = 0; i < arguments.length; i++) {
        // Maka hasilnya akan ditambah dengan nilai arguments dari index ke i
        hasil += arguments[i];
    }
    // Mengembalikan hasil
    return hasil;
}
// Mengisi nilai arguments idex i
var coba = tambah(1, 2, 3, 4, 5);
// Menjalankan hasil ditambah nilai panjang arguments
console.log(coba);


function kali(a, b) {
    return a * b;
}

// Apapun yang di inputkan nilainya ditambah kemudian dikalikan dengan inputan kedua
// var hasil = kali(tambah(1,2), tambah(3,4));
// var hasil = tambah(3, 4, 5);

// function tambah(a, b) {
//     return a + b;
// }

// Apapun yang di inputkan nilainya ditambah kemudian dikalikan 2
// var a = parseInt(prompt('Masukkan nilai 1 : '));
// var b = parseInt(prompt('Masukkan nilai 2 : '));
// var hasil = tambah(a*2, b*2);
// console.log(hasil);