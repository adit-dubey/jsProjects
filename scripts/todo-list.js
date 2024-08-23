const todoList = [];

renderToDOList();

function renderToDOList(){
    let todoListHTML = '';

    for (let i = 0; i<todoList.length; i++){
        const todoObject = todoList[i];
        // const name = todoObject.name;
        // const dueDate = todoObject.dueDate;
        const { name, dueDate } = todoObject;
        const  html = `
        <div>${name}</div>
        <div>${dueDate}</div>
        <button onclick="
            todoList.splice(${i}, 1);
            renderToDoList(); 
        " class = "delete-todo-button">Delete</button>
        `;
        todoListHTML += html;
    }
    document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;


}



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

