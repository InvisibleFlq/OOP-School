/* 
* CAS #1
*/


// // let a = {};
// // console.log(typeof a);

// let osoba = {
//   ime: 'Nikola',
//   prezime: 'Tesla',
//   godiste: 1857,
//   interesi: ['matematika', 'elektronika', 'fizika'],
//   pozdrav: function () {
//     console.log(`Zdravo, ja sam ${this.ime} ${this.prezime}. Imam ${2022 - this.godiste} godina.`);
//   },
// };

// // osoba.godiste = 1990;
// // osoba.pozdrav = function () {
// //   console.log('Zdravo!');
// // };

// // console.log(osoba.godiste);
// // osoba.pozdrav();

// // let string = new String();
// // console.log('tip stringa je ' + typeof string);

// osoba.visina = 205;
// console.log(Object.entries(osoba));
// //console.log(osoba);

/* 
* CAS #2
*/

class Osoba {
  ime;
  prezime;
  godiste;

  constructor(ime, prezime, godiste) {
    this.ime = ime;
    this.prezime = prezime;
    this.godiste = godiste;
  };

  pozdrad() {
    console.log(`Pozdrav, ja sam ${this.ime}. Imam ${2022 - this.godiste} godina.`);
  };
};

let ja = new Osoba("Luka", "Vranes", 2004);
ja.pozdrad();

// class Nastavnik {
//   ime;
//   prezime;
//   godiste;
//   predmet;
//   skola;

//   constructor(ime, prezime, godiste, predmet, skola) {
//     this.ime = ime;
//     this.prezime = prezime;
//     this.godiste = godiste;
//     this.predmet = predmet;
//     this.skola = skola;
//   };
 
//   pozdrad() {
//     console.log(`Pozdrav, ja sam ${this.ime}. Imam ${2022 - this.godiste} godina. Predajem ${this.predmet} u skoli ${this.skola}`);
//   };

//   ocenjivanje() {
//     console.log(`Na neznanje pokazano danas, dajem ti ocenu ${Math.floor(Math.random() * 5 + 1)}`);
//   };

// };
 
class Nastavnik extends Osoba {
  constructor(ime, prezime, godiste, predmet, skola) {
    super(ime, prezime, godiste);
    this.predmet = predmet;
    this.skola = skola;
  };

  ocenjivanje() {
    console.log(`Na neznanje pokazano danas, dajem ti ocenu ${Math.floor(Math.random() * 5 + 1)}`);
  };
  
};

let nastavnik = new Nastavnik("Vesna", "Rajsic", 1976, "matematika", "ETS Nikola Tesla");

nastavnik.pozdrad(); 
nastavnik.ocenjivanje();