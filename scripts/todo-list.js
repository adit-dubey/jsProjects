const todoList = [];

renderToDOList();

function renderToDOList(){
    let todoListHTML = '';
    todoList.forEach((todoObject, index) => {
        const { name, dueDate } = todoObject;
        const  html = `
        <div>${name}</div>
        <div>${dueDate}</div>
        <button class = "delete-todo-button
        js-delete-todo-button">Delete</button>
        `;
        todoListHTML += html;

    });

    document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;

    document.querySelectorAll('.js-delete-todo-button')
        .forEach((deleteButton, index) => {
            deleteButton.addEventListener('click', () => {
                todoList.splice(index, 1);
                renderToDOList();
            });
        });
}

document.querySelector('.js-add-todo-button').addEventListener('click', () => {
    addToDo();
});


function addToDo(){
    const inputElement = document.querySelector('.js-name-input');
    const name =  inputElement.value;

    const dateInputElement = document.querySelector('.js-due-date-input');

    const dueDate = dateInputElement.value;

    todoList.push({
        name,
        dueDate
    });

    inputElement.value = '';

    renderToDOList();
}

