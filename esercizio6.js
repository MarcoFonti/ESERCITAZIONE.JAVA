//Scrivere una funzione chiamata printName
//Dichiara al suo interno una variabile chiamata helloName Il valore di questa variabile sarà: "Hello John"
//Dichiara una seconda funzione denominata inner e restituisci il helloName
//Stampa "Hello John"Nella console

function printName () {
    let helloName = "hello john";
    function inner () {
        console.log (helloName);
    }

    return inner;
}

let innerHello = printName (); innerHello();