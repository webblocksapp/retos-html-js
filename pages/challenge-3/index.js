const todosDiv = document.getElementById('todos');
const todos = [
  { description: 'Hacer el desayuno', done: false },
  { description: 'Hacer las compras', done: false },
  { description: 'Lavar el carro', done: false },
  { description: 'Limpiar la casa', done: false },
  { description: 'Pasear a la mascota', done: false },
];

const checkTodo = (index) => {
  todos[index] = { ...todos[index], done: !todos[index].done };
  listTodos();
};

const listTodos = () => {
  todosDiv.innerHTML = '';
  todos.forEach((todo, index) => {
    todosDiv.innerHTML += /*html*/ `
      <li>
        <input
          ${todo.done ? 'checked' : ''}
          type="checkbox" id="todo-${index}"
          onclick="checkTodo(${index})"
        >
        <label
          style="${todo.done ? 'text-decoration:line-through;' : ''}"
          for="todo-${index}"
        >
          ${todo.description}
        </label>
      </li>
    `;
  });
};

listTodos();
