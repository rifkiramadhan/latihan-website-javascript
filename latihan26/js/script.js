// Membuat Object menggunakan this

// Cara 1 - function declaration
// This mengembalikan object Global
// function halo() {
//     console.log(this);
//     console.log('Halo');
// }
// this.halo();

// Cara 2 - object literal
// This mengembalikan object yang bersangkutan
// var obj = {a : 10, nama : 'Rifki Ramadhan'};
// obj.halo = function() {
//     console.log(this);
//     console.log('Halo');
// }
// obj.halo();

// Cara 3 - constructor (keyword new)
// This mengembalikan object yang baru dibuat
function halo() {
    console.log(this);
    console.log('Halo');  
}
var obj1 = new halo();
var obj2 = new halo();


// This
// console.log(window === this);

// var a = 10;
// console.log(window.a);