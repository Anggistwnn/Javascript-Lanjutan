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

// membuat object menggunakan prototype inheriten
// function Mahasiswa(nama, energi) {
//     //let mahasiswa = Object.create(methodMahasiswa);


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


// closure
// function  init () {
//     let nama  = 'Anggi';
//     // let umur  = 22;
//     return function tampilNama(nama) {
//         console.log(nama);
//         // console.log(umur);
//     }

// }
// let panggilNama = init();
// panggilNama('Anggi');

// faktori function membuat function sesuai dgn function yang lain
//  function ucapkanSalam(waktu) {
//      return function (nama) {
//          console.log(`Halo
//           ${nama}, Selamat ${waktu},
//           semoga hari ini lebih baik dari hari kemarin!!`);
//      }
//  }

// let selamatPagi  = ucapkanSalam('Pagi')
// let selamatSiang  = ucapkanSalam('Siang')
// let selamatMalam  = ucapkanSalam('Malam')

// selamatPagi('Roudoh'); Astagfirullah ini gapap kok tadi ngelaggg wwlw


// membuat function yang mengetahui berapa kali iya diklik
// let add = (function  add() {
//     let counter = 0;
//     return function () {
//          return ++counter;
//     };  
// })();



// counter = 100;
// console.log(add()) ;
// console.log(add()) ;
// console.log(add()) ;
// console.log(add()) ;
// console.log(add()) ;
// console.log(add()) ;
// console.log(add()) ;

// Perbedaan antar var, let, const

// let i = 10;
// console.log(i)

// function Test() {

//     for( var i = 0; i < 10; i++){

//         console.log(i);

//     }
// }

// Test();
// console.log(i);

// self invoking annonimous function
// berguna agar tidak terjadi bentrokan karna ada nama function yang samaa
// ini merupakan function scope
// (function () { 
//  for (let i = 0; i < 10; i++){;
//     console.log(i); 
//  }
// }());
// console.log(i);

// ini merupakan block scope
//     for (let i = 0; i < 10; i++){
//        console.log(i); 
//     };

//    console.log(i);


// const berguna saat kita tidak lagi inngin mengganti isi didalamnya dan gunakan let jik ingin melakukan pengulangan 
// const meminimalisir perubahan state
// const i = 10;
//  i = 15;
// console.log(i);


// tidak dapat mengisi array baru

// const i = [1,2,3]
// i = [1,2,3,4];
// console.log(i);

// lakukan hal berikut ini 
// const i = [1,2,3,4]
// i.push(5);
// console.log(i );


// mencoba membuat object
// const mhs =  {
//     nama: "Anggi Setiawan",
//     umur: 23
// } 

// mhs = {
//     jurusan: "Teknik Informatika" 
// }
// console.log(mhs);

// ARROW FUNCTIONN PADA JS

// ArrowFunction.  yaitu bentuk lain dari yang lebih ringkas dari function expression
// berikut terjemahan dari express funct ke arrow funct
// let tampilkanPesan = (nama) => {
//     alert ('Halo ' + nama)
// }
// tampilkanPesan('Adee');


// dibawah ini merupakan function declaration menampilkan annonimous function yang akan ditampilkan dalam bentuk expresion
// function tampilkanPesan(nama) {
//     prompt('Halo ' + nama)
// }
// tampilkanPesan('');


// dibawah ini merupakan function expression menampilkan annonimous function yang akan ditampilkan dalam bentuk expresion
//  let tampilkanPesan = function (nama) {
//      alert ('Halo ' + nama);
//  }
//  tampilkanPesan ('');

// dibawah ini merupakan contoh lain dari function expression
// const tampilNama = function (nama) {
//     return`Halo, ${nama} `; 
// }

// console.log(tampilNama('Anggi'));

// dibawah ini merupakan contoh lain dari arrow funct

// const tampilNama = (nama) => {
//     return `Halo, ${nama}`;
// }
// console.log('Anggi');

// const tampilNama = (nama, waktu) =>{
//     return `Halo. Selamat ${waktu}, ${nama}`;
// }
// console.log(tampilNama('Anggi', 'Pagi'));

// // impisit return
// const tampilNama = nama => `Halo Selamat ${nama}`;
// console.log('Anggi');

//  tanpa parameter
// const tampilNama = () => `Helo World`;
// console.log(tampilNama());

// MEMBUAT FUNCTION MAP PADA JS, UNTUK MEMATAKAN SEBUAT FUNCT KE DALAM ARRAY
// function array biasa
// let mahasiswa = ['Anggi', 'Roudohh', 'AdeWaliyaa'];

// let jumlahHuruf = mahasiswa.map(function (nama) {
//     return nama.length;
// });
// console.log(jumlahHuruf);

// code atas diubah menjadi arrow function
// let jumlahHuruf = mahasiswa.map (nama => ({nama, jumlahHuruf: nama.length}));

// console.table(jumlahHuruf);
// -------------------------------------------------------
// Konsep This Pada Arrow Function

// Constructor Function
// const Mahasiswa = function () {
//     this.nama = 'Anggi Setiawan';
//     this.umur = 23;
//     this.sayHello = function () {
//         console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`
//         );
//     }
// }  
// const anggistwnn = new Mahasiswa();

// Arrow Function
// tdk dapat sembarangan mengubah constructor funct menjadi arrow funct
// const Mahasiswa = function ()  {
//     this.nama = 'Anggi Setiawan';
//     this.umur = 23;
// jika methodnya dapat diganti mjdi arrow function
// karna tdk menyimpan konteks this, jd iya akan mencari keluar dari methodnya
//     this.sayHello =  () =>  {
//         console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`
//         );
//     }
// }  
// const anggistwnn = new Mahasiswa();

// Object Literal
const mhs1 = {
    nama: 'Anggi',
    umur: 23,
    sayHello: () => {
        // console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun. ` );
        console.log(this);
    }
}

// const Mahasiswa = function () {
//     this.nama = 'Anggistwnn';
//     this.umur = 23;
//     this.sayHello = function () {
//         console.log(`Assalamualaikum, ${this.nama}, dan saya ${this.umur} tahun.`);
//     }

//     setInterval(() => {
//         console.log(this.umur++);
//     }, 500);

// }
//     const Anggistwnn = new Mahasiswa();

// const box = document.querySelector('.box');
// box.addEventListener('click', function () {
//     let satu = 'size';
//     let dua = 'caption';

//     if(this.classList.contains(satu)){
//          [satu, dua] = [dua, satu];
//     }

//     this.classList.toggle(satu);
//     setTimeout( () => {
//     this.classList.toggle(dua);
//     }, 600);
// });


// HIGH ORDER FUCNTION
// CONTOH 1
// function kerjakanTugas(matakuliah, selesai) {
//     console.log(`mulai mengerjakan tugas ${matakuliah}`);
//     selesai();
// }

// function selesai() {
//     alert('Selesai mengerjakan tugas!')

// }
// kerjakanTugas('Pemograman Web', selesai);

// CONTOH 2
// setTimeout(function () {

//     console.log('hello world!');

// }, 1000);

// const tombol = document.querySelector('.box');

// tombol.addEventListener('click', function () {
//     console.log('tombol ditekan!');
// })

const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

//  mencari angka >= 3
// // for
// const newAngka = [];
// for (let i = 0; i < angka.length; i++) {
//     if (angka[i] >= 3) {
//         newAngka.push(angka[i]);
//     }
// }
// console.log(newAngka);

// menggunakan FILTER
// const newAngka = angka.filter((a) => {
//     return a >= 3;
// })
// console.log(newAngka);

// MAP
// kalikan semua angka dengan 2
// const newAngka = angka.map(a => a + 2);
// console.log(newAngka);

// REDUCE
//  jumlahkan seluruh elemen pada Array
// elemen array yang sedang dilooping currentvalue dan secara default ia memiliki nilai 0 (currentvalue, 0)
// yang terjadi gini "-1 + 8 + 9 + 1 + 4 + -5 + -4 + 3 + 2 + 9"
// const newAngka = angka.reduce((accumulator, currentvalue) => accumulator + currentvalue, 5);
// console.log(newAngka);

// METHOD CHAINING
// mencari angka 5
// dikalikan 3
// menjumlahkan semua hasilnya

// const hasil = angka.filter(a => a > 5)
//     .map(a => a * 3)
//     .reduce((acc, cur) => acc + cur);
// console.log(hasil);
// ---------------------------------------------------------------
// ambil semua elemen video
const videos = document.querySelectorAll('[data-duration]');
console.log(videos);
// pilih hanya yang javascript lanjutan
const video = document.querySelectorAll('TextContent[ JAVASCRIPT LANJUTAN ]');
console.log(video);
// ambil durasi masing-masing video

// ubah durasi menjadi int, ubah menit menjadi detik

// jumlahkan semua detik

// ubah format jadi jam menit detik

// simpan di DOM