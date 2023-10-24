//Scrivi un commento spiegando perché, modificando l'oggetto person2, anche l'oggetto person1 si modifica

const person1 = {
    firstName: "John",
    lastName: "Doe",
    age: 25,
  };
  
  const person2 = person1;
  // Si modificano entrambi perchè le variabili usano lo stesso oggetto
  
  person2.firstName = "Simon"
  
  console.log(person1);
  console.log(person2);

