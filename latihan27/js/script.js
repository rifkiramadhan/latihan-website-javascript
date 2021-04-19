// Membuat Object Angkot
// Function yang ada di dalam object disebut method

// Constructor Javascript
function Angkot(sopir, trayek, penumpang, kas) {
    // Membuat property sopir, trayek, penumpang, kas
    this.sopir = sopir;
    this.trayek = trayek;
    this.penumpang = penumpang;
    this.kas = kas;

    // Membuat method mengelola penumpang naik
    this.penumpangNaik = function(namaPenumpang) {
        // Memasukkan nama penumpang ke dalam array
        this.penumpang.push(namaPenumpang);

        // Mengembalikan array
        return this.penumpang;
    }

    // Membuat method mengelola penumpang turun
    this.penumpangTurun = function(namaPenumpang, bayar) {
        // Jika panjang dari array penumpang sama dengan nol
        if(this.penumpang.length === 0) {
            // Maka cetak alert angkot masih kosong!
            alert('Angkot masih kosong!');

            // Mengembalikan false agar keluar dari method
            return false;
        }

        // Selama i sama dengan nol, dan nol lebih kecil dari jumlah penumpang maka penumpang akan ditambah satu
        for(var i = 0; i < this.penumpang.length; i++) {
            // Jika penumpang yang duduk di kursi ke i sama dengan nama penumpang yang akan turun
            if(this.penumpang[i] == namaPenumpang) {
                // Maka penumpang yang duduk di kursi ke i maka akan di isi dengan undefined
                this.penumpang[i] = undefined;

                // Dan kas nya akan ditambah uang yang dibayar oleh penumpang
                this.kas += bayar;

                // Mengembalikan array penumpang
                return this.penumpang;
            }
        }
    }
}

// Menginisialisasi object baru
var angkot1 = new Angkot('Rifki Ramadhan', ['Cicaheum', 'Cibiru'], [], 0);
var angkot2 = new Angkot('Rayani Putri', ['Pasar Minggu', 'Kampung Melayu'], [], 0);