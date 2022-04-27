// Cara membuat object pada javascript
// 1. Object Literal
let mahasiswa1 = {
    nama: 'Anggi Setiawan',
    energi: 10,
    makan: function (porsi) {
        this.energi = this.energi + porsi;
        console.log(`Hallo ${this.nama} Selamat makan !`);
    }
}

let mahasiswa2 = {
    nama: 'Ade Waliya',
    energi: 10,
    makan: function (porsi) {
        this.energi = this.energi + porsi;
        console.log(`Hallo ${this.nama} Selamat makan !`);
    }
}