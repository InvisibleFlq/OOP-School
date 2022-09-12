// let a = {};
// console.log(typeof a);

let osoba = {
  ime: 'Nikola',
  prezime: 'Tesla',
  godiste: 1854,
  interesi: ['matematika', 'elektronika', 'fizika'],
  pozdrav: function () {
    console.log(`Zdravo, ja sam ${this.ime} ${this.prezime}. Imam ${2022 - this.godiste} godina.`);
  },
};

// osoba.godiste = 1990;
// osoba.pozdrav = function () {
//   console.log('Zdravo!');
// };

// console.log(osoba.godiste);
// osoba.pozdrav();

// let string = new String();
// console.log('tip stringa je ' + typeof string);

osoba.visina = 205;
console.log(Object.entries(osoba));
//console.log(osoba);