// console.log("hello world");


// Palindroma
// Chiedere all’utente di inserire una parola.
// Creare una funzione per capire se la parola inserita è palindroma.

function palindromo(contenuto){
  return contenuto.split("").reverse().join("");

  // // variante array
  // var array = [];
  // for (var i = 0; i < contenuto.length; i++) {
  //   array.push(contenuto[i]);
  // };
  // var reverseArray = array.reverse();
  // var risultatoParola = "";
  // for (var i = 0; i < reverseArray.length; i++) {
  //   risultatoParola +=  reverseArray[i] ;
  // }
  // return risultatoParola;

}

var parolaUtente = prompt("inserire parola");

var reverse = palindromo(parolaUtente);

console.log(reverse);
// console.log(reverse);
if (!isNaN(parolaUtente)) {
  alert("questa non è una parola")
} else if (parolaUtente == reverse) {
  alert("la parola può essere letta in entrambi i sensi")
} else {
  alert("questa parola non è un palindromo")
}
