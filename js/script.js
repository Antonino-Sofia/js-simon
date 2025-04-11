/*

Descrizione:
Visualizzare in pagina 5 numeri casuali.


Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
NOTA: non è importante l'ordine con cui l'utente inserisce i numeri, basta che ne indovini il più possibile.
*/

//Valore minimo
const min = 1;
//Valore massimo
const max = 50;
//numeri da generare
const totNumbers = 5;
//valore contatore iniziale
let time = 5;

//HTML
const numbersListElement = document.getElementById("numers-list");
console.log(numbersListElement);

const countdownElement = document.getElementById("answers-form");
console.log(countdownElement);

const instructionsElement = document.getElementById("instructions");
console.log(instructionsElement);

const inputFieldsElement = document.querySelectorAll(
  "#answers-form .form-control"
);
console.log(inputFieldsElement);

const messageElement = document.getElementById("message");

//NUMERI
const numbers = generateRandomNumbers(min, max, totNumbers);
console.log(numbers);

let items = "";

for (let i = 0; 1 < totNumbers; i++) {
  const currentNumber = numbers[i];

  items += `<li>${currentNumber}</li>`;
}

numbersListElement.innerHTML = items;
