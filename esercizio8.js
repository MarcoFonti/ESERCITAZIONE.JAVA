//Creare una funzione chiamata multiplyByTwo
//Dentro il multiplyByTwoFunzione, creare una funzione chiamata inner
//Questa funzione si occuperà di moltiplicare il parametro passato come input e moltiplicarlo per la variabile denominata number
//Stampare nella console l'uscita della funzione: Risultato 8

function multiplyByTwo (number) {
  return function () {
    let numberToMultiply = 2;
    let result = number * numberToMultiply;
    console.log(result);
  };
}

let multiplyByTwoResult = multiplyByTwo(4);
multiplyByTwoResult(); // Stampo 8 