// console.log("hello world");


// Palindroma
// Chiedere all’utente di inserire una parola.
// Creare una funzione per capire se la parola inserita è palindroma.

function palindromo(name){
  return name.split("").reverse().join("");
}

var parolaUtente = prompt("inserire parola");

var reverse = palindromo(parolaUtente);
// console.log(reverse);
if (!isNaN(parolaUtente)) {
  alert("questa non è una parola")
} else if (parolaUtente == reverse) {
  alert("la parola può essere letta in entrambi i sensi")
} else {
  alert("questa parola non è un palindromo")
}
