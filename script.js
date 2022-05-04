// Cara membuat object pada javascript
// 1. Object Literal
// let mahasiswa1 = {
//     nama: 'Anggi Setiawan',
//     energi: 10,
//     makan: function (porsi) {
//         this.energi = this.energi + porsi;
//         console.log(`Hallo ${this.nama} Selamat makan !`);
//     }
// }

// let mahasiswa2 = {
//     nama: 'Ade Waliya',
//     energi: 10,
//     makan: function (porsi) {
//         this.energi = this.energi + porsi;
//         console.log(`Hallo ${this.nama} Selamat makan !`);
//     }
// }

// 2. function declaration
// function Mahasiswa(nama, energi) {
//     let mahasiswa = {};
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;

//     mahasiswa.makan = function (porsi) {
//         this.energi = this.energi + porsi;
//         console.log(`Halo ${this.nama},   Selamat Makan ! `);
//     }
//     mahasiswa.main = function (jam) {
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, Selamat Bermain`);
//     }

//     return mahasiswa;    
// }

// let Anggi = Mahasiswa ('Anggi', 10); 
// let AdeWaliya = Mahasiswa ('Ade Waliya', 10);

// 3. construction function
// keyword new

function Mahasiswa(nama, energi) {

    this.nama = nama;
    this.energi = energi;

    this.makan = function (porsi) {
        this.energi = this.energi + porsi;
        console.log(`Halo ${this.nama},   Selamat Makan ! `);
    }
    this.main = function (jam) {
        this.energi -= jam;
        console.log(`Halo ${this.nama}, Selamat Bermain`);
    }
}

let anggi = new Mahasiswa ('anggi', 30);