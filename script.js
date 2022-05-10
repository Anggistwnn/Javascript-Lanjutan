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

// const methodMahasiswa = {
//     makan: function (porsi) {
//         this.energi = this.energi + porsi;
//         console.log(`Halo ${this.nama},   Selamat Makan ! `);
//     },
//     main: function (jam) {
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, Selamat Bermain`);
//     },

//     tidur: function (jam) {
//         this.energi += jam * 2;
//         console.log(`Halo ${this.nama}, selaamt tidur!`);
//     }
// }

// function Mahasiswa(nama, energi) {
//     let mahasiswa = Object.create(methodMahasiswa);
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;

//     return mahasiswa;    
// }

// let Anggi = Mahasiswa ('Setiawan', 10); 

//  console.log(Anggi.tidur(5));
//  Anggi
//  console.log(Anggi.main(2));
//  Anggi
// console.log(Anggi.main(10));
// Anggi
// console.log(Anggi.tidur(30));
// Anggi

//membuat object menggunakan prototype inheriten
// function Mahasiswa(nama, energi) {
//     //let mahasiswa = Object.create(methodMahasiswa);
//     

// versi class = {}
// class Mahasiswa {
//     constructor (nama, energi){
//         this.nama = nama;
//         this.energi = energi;
//     }

// makan(porsi) {
// this.energi += porsi;
// return `Halo ${this.nama}, Selamat Makan!`;  
// }
// main(main) {
// this.energi -= main;
// return `Halo ${this.nama}, Selamat Main!`;
// }
// tidur(jam) {
// this.energi += jam * 2;
// return `Halo ${this.nama}, Selamat tidur!`;
// }
// }
// let Anggi = new Mahasiswa ('Anggi', 20);

// console.log(Anggi);
// console.log(Anggi.main(10));
// console.log(Anggi);
// console.log(Anggi.tidur(4));
// console.log(Anggi);


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


// 2.1 execution context, hosting & scope 

// var nama = 'Anggi';
// console.log(nama);
// console.log();

// creation phase pada global context
// semua variable akan diisi dulu dengan undifine nama var = undefined
// function itu diisi dgn isi dari string functionnya   nama function = fn()
// hoisting sama dengna menarik bendera keatas  
// js mendefinisikan window = global object
// this = window

// execution phase mengeksekusi programnya baris per baris
// () kurung buka dan tutup bertanda untuk mengeksekusi code program


// var nama = 'Anggistwnn';
// var umur = 33;
// console.log(sayhello());

// function sayhello() {
//     return `Halo, nama ${nama}, saya ${umur} tahun.`
// }

// function membuat local execution context
// yang didalamnya terdapat creation dan execution phase
// kita dapat mengakses window
// dan kita juga dapat mengakses arguments yang bisa berisi parameter didalam functionn nya
// dan terdapat juga hoisting  

//  var nama  =  'Anggi Setiawan';
//  var username = '@anggistwnn';

//  function cetakURL() {
//      console.log(arguments[0]);
//      var instagramURL = 'http://instagram.com/'
//      return instagramURL + username;
//  }
//  console.log(cetakURL('@Adewaliya', '@Anggistwnn'));

// function a() {
//     console.log('ini a');
//     function b() {
//         console.log('ini b');
//         function c() {
//             console.log('ini c');
//         }
//         c();
//     }
//     b();
// }
// a();

//  Latihan

// function satu() {
//     var nama = 'sandika';
//     console.log(nama);
// }

// function dua() {
//     console.log(nama);
// }
// console.log(nama);
// var nama = 'erik';
// satu();
// dua('doddy');
// console.log(nama); 

function  init () {
    let nama  = 'Anggi';
    function tampilNama() {
        console.log(nama);
    }
    tampilNama();
}
init();














