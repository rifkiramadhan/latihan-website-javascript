// Membuat object
// 1. Object Literal

// var mhs = {
//     nama : "Rifki Ramadhan",
//     umur : 22,
//     ips : [3.00, 2.50, 3.20],
//     alamat : {
//         jalan : "Jl. Abc No. 123",
//         kota : "Jakarta",
//         provinsi : "Jakarta Selatan"
//     }
// };

var mhs1 = {
        nama : "Rifki Ramadhan",
        nrp :  '043040023',
        email : 'riifkiramadhan2@gmail.com',
        jurusan : 'Teknik Informatika'
}

var mhs2 = {
    nama : "Rayani Putri",
    nrp :  '043040024',
    email : 'rayaniputri@gmail.com',
    jurusan : 'Teknik Informatika'
}


// 2. Function Declaration
function buatObjectMahasiswa(nama, nrp, email, jurusan) {
    var mhs = {};
    mhs.nama = nama;
    mhs.nrp = nrp;
    mhs.email = email;
    mhs.jurusan = jurusan;

    return mhs;
}

var mhs3 = buatObjectMahasiswa('Nanda', '043040025', 'nandadoe@gmail.com', 'Teknik Informatika')


// 3. Constructor (Keyword new)
function Mahasiswa(nama, nrp, email, jurusan) {
    // var this = {};
    this.nama = nama;
    this.nrp = nrp;
    this.email = email;
    this.jurusan = jurusan;
    // return this;
}

var mhs4 = new Mahasiswa('Carlos', '043040026', 'Carlos@gmail.com', 'Teknik Informatika')