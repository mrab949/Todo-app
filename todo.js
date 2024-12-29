let todoList = [];

function generatingTodo() {
    let inputToDo = document.querySelector('.todo1');
    let inputTime = document.querySelector('.time1');
    let inputDate = document.querySelector('.date1');
    let errorDisplay = document.getElementById('error');
    
    let inputToDOValue = inputToDo.value.trim();
    let inputTimeValue = inputTime.value.trim();
    let inputDateValue = inputDate.value.trim();
    console.log('hello');
   
    if (!inputToDOValue || !inputTimeValue || !inputDateValue) {
        errorDisplay.innerText = 'All fields are required';
        return;
    }

    // Add new task
    todoList.push({ item: inputToDOValue, dueDate: inputDateValue, dueTime: inputTimeValue });

    // Clear input fields
    inputToDo.value = '';
    inputTime.value = '';
    inputDate.value = '';
    if (errorDisplay) errorDisplay.innerText = '';

    
    displayToDo();
}

function displayToDo() {
    let display = document.querySelector('.todoContainer');
    let divHtml = '';

    if (todoList.length === 0) {
        divHtml = `<h2 class="msg">Enjoy your day! No task available</h2>`;
    } else {
        for (let i = 0; i < todoList.length; i++) {
            let { item, dueDate, dueTime } = todoList[i];
            divHtml += `
            <div class= 'todo-items'>
                <span>${item}</span> 
                <span>${dueDate}</span> 
                <span>${dueTime}</span> 
                <button onclick="deleteTask(${i})" class="delete">Delete</button>
            </div>`;
        }
    }

    display.innerHTML = divHtml;
}

function deleteTask(index) {
    todoList.splice(index, 1); 
    displayToDo(); 
}


displayToDo();