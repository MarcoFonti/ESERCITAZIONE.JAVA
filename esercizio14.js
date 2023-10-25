//Crea una funzione chiamata uncompletedNotes 
//Restituisce solo le cose da fare non completate.



function uncompletedNotes (notes) {
  let uncompleted = [];

  for (let note of notes) {
    let uncompletedTodos = note.todos.filter(todo => !todo.done);

    if (uncompletedTodos.length > 0) {
      uncompleted.push({
        id: note.id,
        description: note.description,
        todos: uncompletedTodos,
      });
    }
  }

  return uncompleted;
}

let notes = [

  {
    id: 1,
    description: "Studiare javascript",
    todos: [

      {
        id: 1,
        name: "Funzioni",
        done: false, 
      },
      {
        id: 2,
        name: "Array",
        done: true,
      },

    ],

  },

  {
    id: 2,
    description: "Studiare HTML",
    todos: [
      {
        id: 3,
        name: "Tag",
        done: true,
      },
      {
        id: 4,
        name: "Contanitore",
        done: false,
      },
      
    ],
  },
  
];

const uncompleted = uncompletedNotes(notes);
console.log(uncompleted);