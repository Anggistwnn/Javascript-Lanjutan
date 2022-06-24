// for (let i = 1; i < 5; i++) {
//     if (i === 3) continue;
//     console.log(i);
// }


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
// selamatPagi('Roudoh');

// membuat function yang mengetahui berapa kali iya diklik
// let add = (function  add() {
//     let counter = 0;
//     return function () {
//          return ++counter;
//     };  
// })();



// counter = 100;
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
// const mhs1 = {
//     nama: 'Anggi',
//     umur: 23,
//     sayHello: () => {
// console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun. ` );
// console.log(this);
//     }
// }

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

// const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

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
// const videos = Array.from(document.querySelectorAll('[data-duration]'));
// pilih hanya yang javascript lanjutan

// let jsLanjut = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN'))

// ambil durasi masing-masing video
// .map(item => item.dataset.duration)


// ubah durasi menjadi int, ubah menit menjadi detik
// .map(waktu => {
// 10: 30[10, 30] split
//     const parts = waktu.split(':').map(part => parseFloat(part));
//     return (parts[0] * 60 + parts[1]);
// })

// jumlahkan semua detik
// .reduce((total, detik) => total + detik);


// ubah format jadi jam menit detik
// const jam = Math.floor(jsLanjut / 3600);
// jsLanjut = jsLanjut - jam * 3600;
// const menit = Math.floor(jsLanjut / 60);
// const detik = jsLanjut - menit * 60;


// simpan di DOM
// const pDurasi = document.querySelector('.total-durasi');
// pDurasi.textContent = `${jam} Jam, ${menit} Menit, ${detik} Detik.`

// Jumlah Video
// const jmlVideo = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN')).length;
// const pJmlVideo = document.querySelector('.jumlah-video');
// pJmlVideo.textContent = `${jmlVideo} Video.`
// console.log(jmlVideo);

// TEMPLATE LITERAL
// Menggunakan backtick ``
// const nama = 'Anggi setiawan';
// let umur = 33;
// console.log(`halo, perkenalkan nama saya ${nama}, saya ${umur} tahun.`);

// Multiline string
// console.log(`string 1
// string 2`);

// embedded expression
// console.log(`${1 + 4}`);
// console.log(`${alert('Halo')}`);
// const z = 21;
// console.log(`${(z % 2 == 0) ? 'genap' : 'ganjil'}`);

// HTML Fragment
// const Mahasiswa = {
//     nama: 'Anggi Setiawan',
//     umur: 23,
//     nrp: '181011400567',
//     email: 'roudoh@gmail.com'
// };

// let el = `<div class="mhs"></div>
// <h2> ${Mahasiswa.nama}</h2>
// <span class="nrp">${Mahasiswa.nrp}</span>
// </div>`
// console.log(el);

// Expression interpolation
// let a = 10;
// let b = 15;
// console.log(('jika a = 10 dan b = 15, maka hasil dari penjumlahannya adalah : ' + (a + b) + ', bukan ' + (2 * a + b)));

// menggunakan interpolation
// console.log((`jika a = 10 dan b = 15, maka hasil dari penjumlahannya adalah : ${a+b}, bukan ${2 * a + b}`));
// Tagged template
// -----------------------------------------------
// LATIHAN TEMPLATE LITERALS

// 1. HTML FRAGMENT
// const Mahasiswa = {
//     nama: 'Anggi Setiawan',
//     umur: 23,
//     nim: '181011400567',
//     email: 'roudoh@gmail.com'
// };

// const el = `<div class="mhs">
//     <h2> ${Mahasiswa.nama}</h2>
//     <span class="nim">${Mahasiswa.nim}</span>
//     </div>`
//     console.log(el);

// const mhsTahunIniPastiLulus = [{
//         nama: 'Anggi Setiawan',
//         email: 'anggistwnn@gmail.com'
//     },
//     {
//         nama: 'Afwan',
//         email: 'afwan@gmail.com'
//     },
//     {
//         nama: 'Ten haag',
//         email: 'tenhaag@gmail.com'
//     }
// ];

// lakukan looping element menggunakan html fragment untuk menampilkan nyaaaa
// const el =
//     `<div class="mhsLulus">
//     ${mhsTahunIniPastiLulus.map(m => `<ul>
//     <li>${m.nama}</li>
//     <li>${m.email}</li>
// </ul>`).join('') }
//     </div>`;





// 3.conditional
// ternary
// const lagu = {
//     judul: 'Perempuan yang sedang dalam pelukan',
//     penyanyi: 'Payung Teduh',
//     feat: 'Pamungkas'
// }

// const el = `<div class="lagu">
//     <ul>
//     <li>${lagu.judul}</li>
//     <li>${lagu.penyanyi} ${lagu.feat ?  `(feat. ${lagu.feat})` : ''}</li>
//     </ul>
//     </div>`
// 4. Nested
// HTML Fragment bersarang

// const mhs = {
//     nama: 'Anggi Setiawan',
//     semester: 5,
//     mataKuliah: [
//         'Pemograman Web',
//         'Komunikasi Data',
//         'Algoritma Pemograman',
//         'Logika Informatika',
//         'Struktur Data',
//     ]
// };
// function cetakMataKuliah(mataKuliah) {
//     return `
//     <ol>
//     ${mataKuliah.map(mk => `<li> ${mk} </li>`).join ('')}
//     </ol>
//     `
// }
// const el = `<div class="mhs">
//  <h2>${mhs.nama}</h2>
//  <span class="semester"> Semester : ${mhs.semester}</span>
//  <h4> Mata Kuliah : </h4>
//  ${cetakMataKuliah(mhs.mataKuliah)}

// </div>`


// console.log(el);
// document.body.innerHTML = el;

// Tagged Templates
// const nama = 'Ade Waliya';
// const umur = 23;

// function coba(strings, ...values) {
// let result = '';
// strings.forEach((str, i) => {
//     result += `${str}${values[i] || ''}`
// });
// return result;
//     return strings.reduce((result, str, i) => `${result}${str}${values[i] || ''}`, '');
// }

// const str = coba `Halo, nama istri saya ${nama}, Ia berusia ${umur} tahun!`;

// console.log(str);


// highlight
// const nama = 'Ade Waliya';
// const umur = 23;
// const tanggal = '10 Januari 2025'

// function highlight(strings, ...values) {
//     return strings.reduce((result, str, i) => `${result}${str}<span class="hl">${values[i] || ''}</span>`, '');

// }
// const str = highlight `Halo, nama istri saya ${nama}, Ia berusia ${umur} tahun, Dan tanggal pernikahan kita adalah ${tanggal}`;

// document.body.innerHTML = str;
// -------------------------------------------------------------------------------------------------------------------
// Destructuring Assignment
// array
// const coba = ['satu', 'dua', 'tiga'];
// const [a, b, c] = coba;
// console.log(a);
// console.log(b);
// console.log(c);

// object
// const mhs = {
//     nama: 'Anggi Setiawan',
//     umur: 33,
//     email: 'anggistwnn'
// };
// const {
//     nama,
//     umur,
//     email
// } = mhs;
// console.log(nama);
// console.log(umur);
// console.log(email);

// Assignment tanpa deklarasi object
// ({nama, umur} = {nama: 'Anggi', umur: 33 });
// console.log(umur);

// assignment kevariable baru 
// const mhs = {
//     nama: 'Anggi',
//     umur: 23
// };
// const {nama : n, umur: u} = mhs;
// console.log(u);

// memberikan Default values
// const mhs = {
//     nama: 'Anggi',
//     umur: 23,
// };
// const {
//     nama,
//     umur,
//     email = 'anggistwnn@gmail.com'
// } = mhs;
// console.log(email);

// memberi default values + assign ke variable baru

// const mhs = {
//     nama: 'Anggi',
//     umur: 23,
// };
// const {
//     nama: n,
//     umur: u,
//     email: e = 'anggistwnn@gmail.com'
// } = mhs;
// console.log(e);

// const perkenalan = ['Halo', 'nama', 'saya', 'Anggi Setiawan'];
// // skipping items
// const [salam, , , nama] = perkenalan;
// console.log();

// swap items
// let a = 1;
// let b = 2;
// console.log(a);
// console.log(b);


// [a, b] = [b, a]
// console.log(a);
// console.log(b);

// return value pada funct
// function coba() {
//     return [1, 2];
// }
// const [a, b] = coba();
// console.log(b);

// rest parameter
// const [a, ...values] = [1, 2, 3, 4, 5];

// console.log(a)
// console.log(values);

// const mhs = {
//     nama: 'Anggi',
//     umur: 23,
//     email: 'anggistwnn'
// };
// const { nama, ...values } = mhs;
// console.log(values);
// mengambil field pada obj, setelah dikirim sebagai parametert untuk funct

// const mhs = {
//     id: 123,
//     nama: 'Anggi',
//     umur: 23,
//     email: 'anggistwnn@gmail.com'
// };
// function getIdMhs({
//     id,
// }) {
//     return id;
// }
// console.log(getIdMhs(mhs));

// destructuring 

// function kalkulasi(a, b) {
//     return [a + b, a - b, a * b, a / b];
// }
// const jumlah = penjumlahanPerkalian(2, 3)[1];
// const kali = penjumlahanPerkalian(2, 3)[1];
// const [tambah, kurang, kali, bagi = 'tidak ada'] = kalkulasi(2, 3);
// console.log(tambah);
// console.log(kurang);
// console.log(kali);
// console.log(bagi);

// menggunkna obj jika ingin tidak berurutan dalam pengambilan hasil
// jika menggunakan array seperti contoh diatas itu pemanggilan hasil harus beruurutan
// function kalkulasi(a, b) {
//     return {
//         tambah: a + b,
//         kurang: a - b,
//         kali: a * b,
//         bagi: a / b
//     }
// }
// const {
//     bagi,
//     tambah,
//     kali,
//     kurang
// } = kalkulasi(2, 3);
// console.log(bagi);

// destructuring function arguments
// const mhsLulusTahunIni = {
//     nama: 'Anggi Setiawan',
//     umur: 23,
//     email: 'anggistwnn@gmail.com',
//     nilai: {
//         tugas: 70,
//         uts: 80,
//         uas: 90
//     }
// }
// function cetakMhs(nama, umur) {
//     return `Halo, nama saya ${nama} saya akan lulus tahun Ini, dan saya berumur ${umur} tahun!`;
// }
// function cetakMhs({
//     nama,
//     umur,
//     nilai: {
//         tugas,
//         uts,
//         uas
//     }
// }) {
//     return `Halo, nama saya ${nama} saya akan lulus tahun Ini, dan saya berumur ${umur} tahun!, Dan nilai UAS saya adalah ${uts}`;
// }
// console.log(cetakMhs(mhsLulusTahunIni));

// for..of
// 1. array
// const mhs = ['Anggi', 'Ade Waliya', 'Raihani'];
// for (let i = 0; i < mhs.length; i++);
// console.log(mhs);

// mhs.forEach(m => console.log(m));

// for ( const a of mhs ){
//     console.log(a);
// }

// 2. String
// const nama = 'Anggi Setiawan'

// for (const a of nama) {
//     console.log(a);
// }

// mhs.forEach((m, i) => {
//     console.log(`${m} adalah mahasiswa ke ${i + 1}`)
// });

// menggunakan for ... of
// for (const [i, m] of mhs.entries()) {
//     console.log(`${m} adalah mahasiswa ke ${i + 1}`)
// }

//NodeList
// const linama = document.querySelectorAll('.nama');
// console.log(linama);
// linama.forEach(n => console.log(n.innerHTML));
// for (n of linama) {
//     console.log(n.textContent);
// }

// Arguments
// function jumlahkanAngka() {
// return arguments.reduce((a, i) => a + i);
// [1, 2, 3].forEach(a => jumlah += a)
//     let jumlah = 0;
//     for (a of arguments) {
//         jumlah += a;
//     }
//     return jumlah;
// };
// console.log(jumlahkanAngka(1, 2, 3, 4, 5));

// for .. in
// const mhs = {
//     nama: 'Anggi Setiawan',
//     umur: 23,
//     email: 'anggistwnn@gmail.com'
// }
// for (m in mhs) {
//     console.log(mhs[m]);
//     console.log(m);
// }
// kesimpulan jika ingin mengulang isi array dan iterable obj lain gunakan for .. of
// dan jika ingin looping properti dari obj gunakan for .. in
// ---------------------------------------------------------------------
// Spread Operator 

// console.log(...mhs[1]);
// untuk menggabungkan 2 Arr

// const mhs = ['Ade Waliyaa', 'Roudoh', 'Raihani'];
// const dosen = ['Waluyo', 'Bagus', 'Adjis'];
// const orang = [...mhs, ...dosen];
// console.log(orang);
// dan Rest parameter

// Melakukan duplikat pada array
// const mhs = ['Ade Waliyaa', 'Rosiana', 'Raihani'];
// const mhs1 = mhs;
// const mhs1 = [...mhs];
// mhs1[0] = 'Lewandowski';
// console.log(mhs);

// const liMhs = document.querySelectorAll('li');

// const mhs = [];
// for (i = 0; i < liMhs.length; i++) {
//     mhs.push(liMhs[i].textContent);
// }
// console.log(mhs);

// menggunakan higher order function
// const mhs = [...liMhs].map(m => m.textContent);
// console.log(mhs);

// Implementasi dari spread 
// const nama = document.querySelector('.nama');
// const huruf = [...nama.textContent].map(h => `<span>${h}</span>`).join('');
// nama.innerHTML = huruf;

// function Myfunc() {
// return `a = ${a}, b = ${b}, Myargs = ${Myargs}`; 
// return Myargs;
// return Array.from(arguments);
// return [...arguments]
// }

// console.log(Myfunc(1, 2, 3, 4, 5));


// function jumlahkan(...angka) {
//     let total = 0;
//     for(const a of angka){
//         total += a;
//     }

//     return total;
// }

//     return angka.reduce((a, b) => a + b);
// }
// console.log(jumlahkan(1, 2, 3, 4, 5));

// array distructuring
// const kelompok1 = ['Anggi', 'Ade Waliya', 'Raihani', 'Dany', 'Bambang'];
// const [ketua, wakil, ...anggota] = kelompok1;
// console.log();

// obj distructuring
// const team = {
//     pm: 'Anggi Setiawan',
//     frontEnd1: 'Bambang',
//     frontEnd2: 'Diaz',
//     backEnd: 'Moch Dany',
//     uiux: 'Krisna',
//     devOps: 'Moch Rizky'
// }
// const {pm, ...myTeam} = team;
// console.log(pm);

// Filtering
// function filterBy(type, ...values) {
//     return values.filter(v => typeof v === type);
// }

// console.log(filterBy('number', 1, 2, 'Anggi Setiawan', false, 10, true, 'Doddy'));

// how to asycronous running
// function kalikan(a, b) {
//     return a * b;
// }

// function hitungluas(sisi) {
//     return kalikan(sisi, sisi);
// }

// function cetakluaskotak(sisi) {
//     const luas = hitungluas(sisi);
//     console.log(luas);
// }

// cetakluaskotak(5);

// Callback
// Synchronous callback
// function halo(nama) {
//     alert(`Halo, ${nama}`);
// }
// function tampilkanPesan(callback) {
//     const nama = prompt(`Masukan Nama : `)
//     callback(nama);
// }
// tampilkanPesan(nama => alert(`Halo, ${nama}`));

// const mhs = [{
//         "nama": 'Anggi Setiawan',
//         "nim": "181011400567",
//         "email": "anggistwnn@unpam.ac.id",
//         "jurusan": "Teknik Informatika",
//         "idDosenWali": 1
//     },
//     {
//         "nama": 'Ade Waliya',
//         "nim": "181011403433",
//         "email": "adewaliya@unpam.ac.id",
//         "jurusan": "Akutansi",
//         "idDosenWali": 2
//     },
//     {
//         "nama": 'Raihany Naimiyah',
//         "nim": "181011401234",
//         "email": "raihani@unpam.ac.id",
//         "jurusan": "Ilmu Qur'an",
//         "idDosenWali": 3
//     },
// ];

// console.log('mulai');
// mhs.forEach(m => {
//     for (let i = 0; i < 10000000; i++) {
//         let date = new Date();
//     };
//     console.log(m.nama)
// });
// console.log('selesai');

// Asynchronous Callback

// function getDataMahasiswa(url, success, error) {
//     let xhr = new XMLHttpRequest();

//     xhr.onreadystatechange = function () {
//         if (xhr.readyState === 4) {
//             if (xhr.status === 200) {
//                 success(xhr.response);
//             } else if (xhr.status === 404) {
//                 error();
//             }
//         }
//     }
//     xhr.open('get', url);
//     xhr.send();
// }

// getDataMahasiswa('data/mahasiswa.json', results => {
//     console.log(results);
// }, () => {

// })

// JQuery
// console.log('awal');
// $.ajax({
//     url: 'mahasiswa.json',
//     success: (mhs) => {
//         mhs.forEach(m => console.log(m.nama));
//     },
//     error: (e) => {
//         console.log(e.responseText);
//     }
// });
// console.log('akhir');

// $.ajax({
//     url: 'mahasiswa.json',
//     success: movies => console.log(movies)
// });

// menggunakan JQuery
// $.ajax({
//     url: 'http://www.omdbapi.com/?apikey=21cf67eb&s=avatar',
//     success: movies => console.log(movies)
// })

// menggunakan vanilla javascript
// const xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function () {
//     if (xhr.status === 200) {
//         if (xhr.readyState === 4) {
//             console.log(JSON.parse(xhr.response));
//         }
//     } else {
//         console.log(xhr.responseText);
//     }
// }
// xhr.open('get', 'http://www.omdbapi.com/?apikey=21cf67eb&s=avatar')
// xhr.send();  

// fetch('http://www.omdbapi.com/?apikey=21cf67eb&s=avatar')
//     .then(response => response.json())
//     .then(response => console.log(response));

// Promies
// Obj yang merepresentasikan keberhasilan atau kegagalan sebuah event yang asynchronous dimasa yang akan datang
// janji (terpenuhi/ingkar)
// state (fulfilled/rejected/pending)
// callback (resolve/reject/finally)
// aksi (then/catch)

// Contoh 1
// let menepati = true;
// const janji1 = new Promise((resolve, reject) => {
//     if (menepati) {
//         resolve('Janji Telah Ditepati');
//     } else {
//         reject('Ingkar Janji ...');
//     }
// });

// janji1
//     .then(response => console.log('OK! : ' + response))
//     .catch(response => console.log('NOT OK! : ' + response));

// Contoh 2
// let ditepati = true;
// const janji2 = new Promise((resolve, reject) => {
//     if (ditepati) {
//         setTimeout(() => {
//             resolve('Ditepati setelah beberapa waktu!')
//         }, 2000);
//     } else {
//         setTimeout(() => {
//             resolve('Tidak ditepati setelah beberapa waktu!')
//         }, 2000);
//     }
// });

// console.log('mulai');
// janji2
//     .finally(() => console.log('selesai menunggu'))
//     .then(response => console.log('OK! : ' + response))
//     .catch(response => console.log('NOT OK! : ' + response));
// console.log(janji2
//     .then(() => {
//         console.log(janji2);
//     }));
// console.log('selesai');

// Contoh 3

// const film = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve([{
//             judul: 'Adikmu Adalah Istriku',
//             sutradara: 'Manoj Pundjabi',
//             pemeran: 'Reza Sahadian, Cinta Lautan'
//         }]);
//     }, 1000);
// });

// const cuaca = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve([{
//             kota: 'Tangerang Selatan',
//             temp: 21,
//             kondisi: 'Gerimis Kecil '
//         }]);
//     }, 2000);
// });

// film.then(response => console.log(response));
// cuaca.then(response => console.log(response));

// menggunakan promise.all
// Promise.all([film, cuaca])
//     // .then(response => console.log(response));
//     .then(response => {
//         const [film, cuaca] = response;
//         console.log(film);
//         console.log(cuaca);
//     })

// const cobain = new Promise(resolve => {
//     setTimeout(() => {
//         resolve('selesai')
//     }, 2000);
// });
// // console.log(cobain);
// cobain
//     .then(() => console.log(cobain));

// function cobaPromise() {
//     return new Promise((resolve, reject) => {
//         const waktu = 1000;
//         if (waktu < 5000) {
//             setTimeout(() => {
//                 resolve('selesai')
//             }, waktu);
//         } else {
//             reject('Kelamaan masnyaa!!')
//         };
//     });
// };
// const coba = cobaPromise();
// coba
//     .then(() => console.log(coba))
//     .catch(() => console.log(coba));

// async function cobaAsync() {
//     try {
//         const coba = await cobaPromise();
//         console.log(coba);
//     } catch (log) {
//         console.log(log);
//     };
// };

// cobaAsync();

// function panggilKembali() {
//     console.log("Halo, Roudoh:*");
// }

// function buttonClick() {
//     setTimeout(panggiKembali, 2000);
//     console.log("Button Clicky");
// }

function getProductUrl(keyword) {
    return `https://www.blibli.com/backend/search/products?searchTerm=${keyword}`
}

function getProducts(keyword) {
    const ajax = new XMLHttpRequest();
    ajax.onload = function () {

        if(ajax.status === 200){
            const data = JSON.parse(ajax.responseText);
            clearProducts();
            displayProducts(data);
        } else {
            getProductsError();
        }
    }
    const url = getProductUrl(keyword);
    ajax.open("GET", url );
    ajax.send();
    // tidak bisa dilakukan secara sync harus async
    const response = JSON.parse(ajax.responseText);
    console.log(response);
} 

function getProductsError() {
    console.log("Error get Products!");
    alert("Error get Products!");
}

function clearProducts() {
    const productUl = document.getElementById('products');
    productUl.textContent = "";
}

function displayProducts(data) {
    data.data.products.forEach(product => displayProduct(product));
}

function displayProduct(product) {
    const productLi = document.createElement("li");
    productLi.textContent = product.name;

    const productUl = document.getElementById("products");
    productUl.appendChild(productLi);
}

function buttonClick(){
    getProducts(document.getElementById("keyword").value);
}

