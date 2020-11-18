// console.log("hello world");

// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
var pariDispari = prompt("scegli se pari o dispari")
var numeroUnoCinque = parseInt(prompt("inserisci un numero da 1 a 5"))
console.log(pariDispari);
console.log(numeroUnoCinque);
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
function numeroRandom(numero){
  return Math.floor(Math.random() * 5) + 1;
}
var numeroPC = numeroRandom(numeroPC);
console.log(numeroPC);
// Sommiamo i due numeri.
var somma = numeroPC +  numeroUnoCinque;
console.log(somma);
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione).
function risultato(risulta) {
  return risulta % 2 == 0;
}
// Dichiariamo chi ha vinto.
var verdetto = risultato(somma)
if (verdetto) {
  var pari = "pari";
  if (pari == pariDispari) {
    alert("il numero è pari hai vinto");
  }else {
    alert("il numero è pari hai perso");
  }
} else if (verdetto == false) {
  var dispari = "dispari";
  if (dispari == pariDispari) {
    alert("il numero è dispari hai vinto");
  } else {
    alert("il numero è dispari hai perso");
  }
} else {
  alert("inserimetno dati incorretto")
}
