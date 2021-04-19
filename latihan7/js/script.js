// Popup Box / Dialog Box
/*
1. Alert
        Contoh:
            - alert('Hello JavaScript');
              Akan muncul box berisi text disertai tombol ok
2. Prompt
        Contoh:
            - prompt('Masukkan nama Anda:');
              Akan muncul box berisi text dan textbox disertai tombol ok
3. Confirm
        Contoh:
            - confirm('Kamu yakin ??');
              Akan muncul box berisi text pertanyaan disertai tombol ok
*/

// Bisa menampilkan banyak alert
// alert('Hello JavaScript');
// alert('Rifki Ramadhan');
// alert('Adalah Pengembang Website');
// alert('Silahkan klik ok')

// Bisa menggunakan variabel untuk menampung nama
// var nama = prompt('Masukkan nama Anda:');
// alert(nama);

// var test = confirm('Kamu yakin ??');
// alert(test);

// Bisa menggunakan if else
// Jika test sama dengan true maka
// if(test === true) {
//     alert('User menekan tombol ok');
// } else {
//     alert('User menekan tombol cancel');
// }

// Bisa menggunakan looping
alert('Selamat datang...');
var lagi = true;

// Selama lagi sama dengan true maka
while (lagi) {
    var nama = prompt('Masukkan nama');
    alert('Halo' + " " + nama);

    // Jika text pertanyaan sudah muncul dan ingin ditanya lagi
    lagi = confirm('Mau mencoba lagi ?');
}
// Jika tombol cancel ditekan (Keluar dari perulangan)
alert('Terimakasih...');