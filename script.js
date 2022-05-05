// Cara membuat object pada javascript
// 1. Object Literal (tidak efektiv untuk object yang baanyak)
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

const methodMahasiswa = {
    makan: function (porsi) {
        this.energi = this.energi + porsi;
        console.log(`Halo ${this.nama},   Selamat Makan ! `);
    },
    main: function (jam) {
        this.energi -= jam;
        console.log(`Halo ${this.nama}, Selamat Bermain`);
    },

    tidur: function (jam) {
        this.energi += jam * 2;
        console.log(`Halo ${this.nama}, selaamt tidur!`);
    }
}

function Mahasiswa(nama, energi) {
    let mahasiswa = Object.create(methodMahasiswa);
    mahasiswa.nama = nama;
    mahasiswa.energi = energi;

    return mahasiswa;    
}

let Anggi = Mahasiswa ('Setiawan', 10); 

 console.log(Anggi.tidur(5));
 Anggi
 console.log(Anggi.main(2));
 Anggi

// 3. construction function
// keyword new

// function Mahasiswa(nama, energi) {

//     this.nama = nama;
//     this.energi = energi;

//     this.makan = function (porsi) {
//         this.energi = this.energi + porsi;
//         console.log(`Halo ${this.nama},   Selamat Makan ! `);
//     }
//     this.main = function (jam) {
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, Selamat Bermain`);
//     }
// }

// let anggi = new Mahasiswa ('anggi', 30);
