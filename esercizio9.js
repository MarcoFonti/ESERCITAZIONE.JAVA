//Crea una persona oggetto. 
//Stampa la sua coppia chiave/valore nella console. 
//Prova ad utilizzare il metodo Object.keys:


let persona = {
  firstName: "Mario",
  lastName: "Rossi",
  age: 25,
}

let keys = Object.keys(persona);

for (let key of keys) {
  console.log(key + ": " + persona[key]);
}