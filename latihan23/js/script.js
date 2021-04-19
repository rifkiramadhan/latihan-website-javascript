// Manipulasi Array

// 1. Menambah isi Array
// var arr = ["A", 1, true];
// console.log(arr);
// console.log(arr[1]);

/* Bisa mengisi elementnya setelahnya, tetapi harus menghafal dan mengurutkan 
   indexnya sehingga tidak ada data yang tertimpa */
// var arr = [];
// arr[0] = "Rifki Ramadhan";
// arr[1] = "Syifa Fauzaih";
// arr[2] = "Rayani Putri";
// console.log(arr);

// 2. Menghapus isi Array
// var arr = ["Rifki","Syifa","Rayani"];
// arr[1] = undefined;
// console.log(arr);

// 3. Menampilkan isi Array dengan method length
// var arr = ["Rifki","Syifa","Rayani","Andri"];
// // Selama i sama dengan nol, nol lebih kecil dari jumlah isi array, maka isi array akan bertambah
// for(var i = 0; i < arr.length; i++) {
//     // Ketika ingin menambahkan mhs dari nol menjadi plus satu, maka tambahkan (i+1)
//     console.log('Mahasiswa ke-' + (i+1) + ' : ' + arr[i]);
// }


// Method pada Array
// 1. Join
var arr = ["Rifki","Syifa","Andri"];
// Memanggil array dan menggunakan separator/pemisah array untuk memisahkan tanda koma
// console.log(arr.join(' - '));

// Push & Pop
// arr.push('Rayani','Putri');
// Ketika menggunakan method pop dua kali maka dua buah isi array terhitung dari belakang akan terhapus
// arr.pop();
// arr.pop();
// console.log(arr.join(' - '));

// Unshift & Shift
// arr.unshift('Rayani');
arr.shift();
console.log(arr.join(' - '));
