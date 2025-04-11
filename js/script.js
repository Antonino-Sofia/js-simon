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

// Contatore intervallo

countdownElement.innerText = time;

const countDownId = setInterval(function () {
  countdownElement.innerText = --time;

  if (time === 0) {
    clearInterval(countDownId);

    //Numeri Nascosti
    numbersListElement.classlist.add("d-none");

    answerFormElement.classlist.remove("d-none");

    //Countdown Nascosto
    countdownElement.classList.add("d-none");

    // Cambiare Text Messaggio
    instructionsElement.innerText = "inserisci i numeri";
  }
}, 1000);

// Inserimento Numeri

answerFormElement.addEventListener("submit", confirm);

function confirm(event) {
  event.preventDefault();
  console.log("invio del form");

  const userGuesses = [];

  for (let i = 0; i < inputFieldsElement.length; i++) {
    const currentElement = inputFieldsElement[i];

    const currentValue = parseInt(currentElement.value);
    if (
      currentValue >= min &&
      currentValue <= max &&
      !isNaN(currentValue) &&
      !userGuesses.includes(currentValue)
    ) {
      userGuesses.push(currentValue);
    }
  }
  // Esito Validazione
  if (userGuesses.length !== totNumbers) {
    console.log("non puoi giocare");

    messageElement.classList.remove("text-success");
    messageElement.classList.add("text-danger");

    messageElement.innerText = "Hai inserito risposte non valide";
    return;
  }
}
// Controllo elementi corretti

const correctAnswers = [];

for (let i = 0; i < userGuesses.length; i++) {
  const currentGuess = userGuesses[i];

  if (numbers.includes(currentGuess)) correctAnswers.push(currentGuess);
}

//Gestione della stampa del messaggio
if (correctAnswers.length > 0) {
  messageElement.classList.remove("text-danger");
  messageElement.classList.add("text-success");

  messageElement.innerText = `Hai indovinato ${correctAnswers.length} numeri; ${correctAnswers}`;
} else {
  messageElement.classList.remove("text-success");
  messageElement.classList.add("text-danger");
  messageElement.innerText = `Non hai indovinato`;
}

//Restituisce un array contenente tot numeri
function generateRandomNumbers(min, max, tot) {
  const result = [];

  //5 numeri random unici
  while (result.length < tot) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    if (!result.includes(randomNumber)) {
      result.push(randomNumber);
    }
  }

  return result;
}
