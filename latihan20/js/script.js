// Global scope atau window scope
// Jika ingin membuat variable local, maka harus memasukkan keyword var didalam function
// Ketika ingin membuat sebuah argument didalam function, maka akan menjadi local variable meski tidak diberi keyword var

var a = 1;

"use strict";

function test(a) {
    // Function scope
        // var a = 2;
        // console.log(window.a);

        // Mencari deklaris variable a
        // a = 2;

        console.log(a);
}
test(a);
// Name conflict
console.log(a);
