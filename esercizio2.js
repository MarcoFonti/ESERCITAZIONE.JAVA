//Crea la funzione nicknameMap. 
//Usare il per il loop,che prende in una serie di persone e restituisce un nicknames.
//Il soprannome deve essere composto come segue: <name>-<age>.

function nicknameMap(persons) {
  const nicknames = persons.map(person => person.name +'-'+ person.age );
    return nicknames;
  }
  
  const persons = [
    { name: 'Paolo', age: 16 },
    { name: 'George', age: 17 },
    { name: 'Lucas', age: 21 },
    { name: 'Marco', age: 32 },
    { name: 'Peter', age: 18 },
    { name: 'Carl', age: 13 },
    { name: 'Simon', age: 24 },
    { name: 'Mark', age: 15 },
    { name: 'Sandra', age: 34 },
    { name: 'Alice', age: 28 }

  ];
  
  const nicknames = nicknameMap(persons);
  
  console.log(persons);
  console.log(nicknames);