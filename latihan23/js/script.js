// Manipulasi Array

// 1. Menambah isi Array
// var arr = ['A', 1, true];
// console.log(arr);
// console.log(arr[1]);

/* Bisa mengisi elementnya setelahnya, tetapi harus menghafal dan mengurutkan 
   indexnya sehingga tidak ada data yang tertimpa */
// var arr = [];
// arr[0] = 'Rifki Ramadhan';
// arr[1] = 'Syifa Fauzaih';
// arr[2] = 'Rayani Putri';
// console.log(arr);

// 2. Menghapus isi Array
// var arr = ['Rifki','Syifa','Rayani'];
// arr[1] = undefined;
// console.log(arr);

// 3. Menampilkan isi Array dengan method length
// var arr = ['Rifki','Syifa','Rayani','Andri'];
// // Selama i sama dengan nol, nol lebih kecil dari jumlah isi array, maka isi array akan bertambah
// for(var i = 0; i < arr.length; i++) {
//     // Ketika ingin menambahkan mhs dari nol menjadi plus satu, maka tambahkan (i+1)
//     console.log('Mahasiswa ke-' + (i+1) + ' : ' + arr[i]);
// }


// Method pada Array
// 1. Join
// var arr = ['Rifki','Syifa','Andri'];
// Memanggil array dan menggunakan separator/pemisah array untuk memisahkan tanda koma
// console.log(arr.join(' - '));

// 2. Push & Pop
// arr.push('Rayani','Putri');
// Ketika menggunakan method pop dua kali maka dua buah isi array terhitung dari belakang akan terhapus
// arr.pop();
// arr.pop();
// console.log(arr.join(' - '));

// 3. Unshift & Shift
// arr.unshift('Rayani');
// arr.shift();
// console.log(arr.join(' - '));

// 4. Splice
// var arr = ['Rifki','Syifa','Andri'];
// splice(indexAwal, mauDihapusBerapa, elemenBaru1, elemenBaru2, ...)
// arr.splice(2, 0, 'Ramadhan', 'Fitri');
// arr.splice(1, 2, 'Ramadhan', 'Fitri');
// console.log(arr.join('-'));

// 5. Slice
// slice(awal, akhir);
// var arr = ['Rifki','Syifa','Andri', 'Fitri', 'Ramadhan'];
// var arr2 = arr.slice(1, 4);
// console.log(arr.join(' - '));
// console.log(arr2.join(' - '));


// 6. ForEach
// Menggunakan for
// var angka = [1, 2, 3, 4, 5, 6, 7, 8];
// var nama = ['Rifki','Syifa','Andri', 'Fitri', 'Ramadhan'];
// for (var i = 0; i < angka.length; i++) {
//    console.log(angka[i]);
// }

// Menggunakan function expression
// var cetak = function(e) {
//    console.log(e);
// }
// angka.forEach(cetak);

// angka.forEach(function(e) {
//    console.log(e);
// });

// nama.forEach(function(e, i) {
//    // Jika ingin menambahkan nilai array plus satu maka berikan tanda (i+1)
//    console.log('Mahasiswa ke-' + ' ' + (i+1) + ' ' + 'adalah' + ' : ' + e);
// })

// 7. Map
// var angka = [1, 2, 5, 3, 6, 8, 4];
// var angka2 = angka.map(function(e) {
//    return e * 2;
// })
// console.log(angka2.join(' - '));

// 8. Sort
// var angka = [1, 2, 5, 3, 6, 8, 4];
// var angka = [1, 2, 10, 5, 20, 3, 6, 8, 4];
// // Array awal sebelum diurutkan
// console.log(angka.join(' - '));
// angka.sort(function(a, b) {
//    return a-b;
// });
// // Array akhir setelah diurutkan
// console.log(angka.join(' - '));

// 9. Filter & find
var angka = [1, 2, 10, 5, 20, 3, 6, 8, 4];
// var angka2 = angka.filter(function(x) {
//    // return x == 7;
//    return x > 5;
// });
// console.log(angka2.join(' - '));

var angka2 = angka.find(function(x) {
   // return x == 7;
   return x > 5;
});
console.log(angka2);

