document.addEventListener('DOMContentLoaded', () => {
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    todoForm.addEventListener('submit', addTodo);
    todoList.addEventListener('click', manageTodo);

    function addTodo (event) {
        event.preventDefault();
        const todoText = todoInput.value.trim();

        if (todoText !== '') {
            const li = document.createElement('li');
            li.innerHTML = `${todoText} <button>Remove</button>`;
            todoList.appendChild(li);
            todoInput.value = '';
        }
    }

    function manageTodo (event) {
        if (event.target.tagName === 'BUTTON') {
            event.target.parentElement.remove();
        } else if (event.target.tagName === 'LI') {
            event.target.classList.toggle('completed');
        }
    }
});
