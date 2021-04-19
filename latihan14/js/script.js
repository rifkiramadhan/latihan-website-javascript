// Pengkondisian Switch
/*
Contoh:
    - siwtch(ekspresi) {
        case "nilai 1";
            aksi 1
        [break;]

        case "nilai 2";
            aksi 2
        [break;]

        case "nilai n";
            aksi 3
        [break;]

        default:
            aksidefault
        [break;]
    }
*/

// Jika menggunakan == adala operator perbandingan
// Jika menggunakan === adalah operator identitas

// Apapun yang di inputkan oleh user akan diproses oleh fungsi parseInt, dan akan menjadi integer
// var angka = parseInt(prompt('Masukkan angka Anda:'));

// if(angka === 1) {
//     alert('Anda memasukkan angka 1');
// } else if(angka === 2) {
//     alert('Anda memasukkan angka 2');
// } else if(angka === 3) {
//     alert('Anda memasukkan angka 3');
// } else {
//     alert('Angka yang Anda masukkan salah!');
// }

// var angka = prompt('Masukkan angka Anda:');
// switch(angka) {
//     case '1' :
//         alert('Anda memasukkan angka 1');
//         break;
    
//     case '2' :
//         alert('Anda memasukkan angka 2');
//         break;
    
//     case '3' :
//         alert('Anda memasukkan angka 3');
//         break;

//     default :
//         alert('Angka yang anda masukkan salah!');
//         break;
// }

// Perhatikan tipe datanya ketika menggunakan prompt
var item = prompt('Masukkan nama makanan / minuman : \n (cth: nasi, daging, susu, hamburger, softdrink');

// Jika switch dari variabel item adalah yang tersedia dibawah ini
// switch(item) {
//     Jika true / tersedia maka akan mencetak alert pada setiap case nya
//     case 'nasi' :
//         alert('Makanan / Minuman Sehat!');
//         break;
    
//     case 'daging' :
//         alert('Makanan / Minuman Sehat!');
//         break;
    
//     case 'susu' :
//         alert('Makanan / Minuman Sehat!');
//         break;

//     case 'hamburger' :
//         alert('Makanan / Minuman Tidak Sehat!');
//         break;
    
//     case 'softdrink' :
//         alert('Makanan / Minuman Tidak Sehat!');
//         break;

//     Jika false / tidak tersedia maka akan mencetak makanan / minuman yang salah
//     default :
//         alert('Anda memasukkan nama Makanan / Minuman yang salah!');
//         break;
// }

// Switch case simple
// Jika switch dari variabel item adalah yang tersedia dibawah ini
switch(item) {
    // Jika true / tersedia maka akan mencetak alert pada setiap case nya
    case 'nasi' :
    case 'daging' :
    case 'susu' :
        alert('Makanan / Minuman Sehat!');
        break;

    case 'hamburger' :
    case 'softdrink' :
        alert('Makanan / Minuman Tidak Sehat!');
        break;

    // Jika false / tidak tersedia maka akan mencetak makanan / minuman yang salah
    default :
        alert('Anda memasukkan nama Makanan / Minuman yang salah!');
        break;
}