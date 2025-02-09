export const FetchTodos = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { id: 1, text: "Drink water", completed: false },
          { id: 2, text: "Read Book", completed: false },
        ]);
      }, 1500);
    });
  };
  
  export const AddTodo = (newTodo) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ id: Date.now(), text: newTodo, completed: false });
      }, 500);
    });
  };
  