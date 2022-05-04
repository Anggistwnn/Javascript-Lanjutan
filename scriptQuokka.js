// penjumlahan sederhana
const angka1 = 10;
const angka2 = 1;
hasil = angka1 + angka2;
console.log(hasil);
// membuat object data sederhana
const obj = {
    Nama : 'anggi',
    Alamat : 'Pamulang',
    Umur : 22
}
console.log(obj);
console.log(obj.Nama);  
console.log(obj.Alamat);
console.log(obj.Umur);
// membuat arrya menggunakan quoka
 
 const angka = ['1','2','3','4'];
 angka
 console.log(angka[3]);

//  membuat pengkondisian
const biodata = {
    Nama : 'anggi',
    Alamat : 'Pamulang',
    Umur : 1
}

if (biodata.Umur < 20) {
    console.log('Remaja');
} else if (biodata.Umur > 20){
    console.log('Dewasa');
}

// membuat function

function perhitungan(a,b) {
    return a+b;
}

const result = perhitungan(40,20);
result