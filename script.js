let todoId = 1;

function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}

function openLink(url) {
    window.open(url, '_blank');
}

function addTodo() {
    const todoInput = document.getElementById('todo-input').value;
    const dateInput = document.getElementById('date-input').value;

    if (todoInput && dateInput) {
        const todoBody = document.getElementById('todo-body');

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${todoId++}</td>
            <td>${todoInput}</td>
            <td>${dateInput}</td>
            <td>
                <button onclick="editTodo(this)">Edit</button>
                <button onclick="deleteTodo(this)">Delete</button>
            </td>
        `;

        todoBody.appendChild(row);

        
        document.getElementById('todo-input').value = '';
        document.getElementById('date-input').value = '';
    } else {
        alert('Please enter both a todo and a date.');
    }
}

function editTodo(button) {
    const row = button.parentElement.parentElement;
    const todoCell = row.cells[1];
    const dateCell = row.cells[2];

    const newTodo = prompt("Edit Todo:", todoCell.textContent);
    const newDate = prompt("Edit Date:", dateCell.textContent);

    if (newTodo && newDate) {
        todoCell.textContent = newTodo;
        dateCell.textContent = newDate;
    }
}

function deleteTodo(button) {
    const row = button.parentElement.parentElement;
    row.remove();
}
