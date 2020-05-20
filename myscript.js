const todos = [];

let showTodoList = () => {
  const list = document.getElementById('todoList');
  list.innerHTML = '';
  for(let i = 0; i<todos.length; i++){
    list.innerHTML +=`<li>
      ${todos[i]}<button onclick="deleteTodo(${i})">DEL</button>
    </li>`
  }
};

let addTodo = () => {
  const newTodo = document.getElementById(`todoInput`).value=``;
};

let deleteTodo = (i) => {
  todos.splice(i,1);
  showTodoList();
};
