const todoList = document.querySelector('#todo-list');
const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-input');

todoForm.addEventListener('submit', formHandler);

function formHandler(e) {
    e.preventDefault();
    const taskText = todoInput.value;

    const newTask = document.createElement('li');
    newTask.innerText = taskText;

    todoList.append(newTask)
    todoInput.value = '';
    todoInput.focus();

    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('role', 'button');
    deleteBtn.innerText = 'delete';
    newTask.append(deleteBtn);

    deleteBtn.addEventListener('click', function () {
        console.log(this);
        this.closest('li').remove();
    
    });
    deleteBtn.style['margin-left'] = '15px';

}

function deleteTask() {
    
}




