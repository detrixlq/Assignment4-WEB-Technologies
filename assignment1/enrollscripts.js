window.onload = function() {
    alert('On this page you can enroll to our club!'); 
}


function toggleDropdown() {
    const dropdownContent = document.getElementById('dropdownContent');

    if (dropdownContent.style.display === 'block') {
        dropdownContent.style.display = 'none';
    } else {
        dropdownContent.style.display = 'block';
    }
}

window.onclick = function(event) {
    const dropdownButton = document.getElementById('dropdownButton');
    const dropdownContent = document.getElementById('dropdownContent');
    if (event.target !== dropdownButton && !dropdownContent.contains(event.target)) {
        dropdownContent.style.display = 'none';
    }
}

let bell = new Audio('bell.mp3')
document.addEventListener('DOMContentLoaded', function() {
    
    const form = document.getElementById('myForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 


        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;

        if (!name || !email) {
            alert('Please fill in all fields before submitting the form.');
        } else {
            const userData = {
                userName: name,
                userEmail: email,
            };

            console.log(userData);
            bell.play();
            alert('Form submitted successfully, ' + name + '!')
                    form.reset(); 
        }
    });
});




let taskList = [];

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        taskList.push({ text: taskText, completed: false });
        taskInput.value = '';
        displayTasks();
    }
}

function deleteTask(index) {
    taskList.splice(index, 1);
    displayTasks();
}

function toggleComplete(index) {
    taskList[index].completed = !taskList[index].completed;
    displayTasks();
}

function displayTasks() {
    const taskListContainer = document.getElementById('taskList');
    taskListContainer.innerHTML = '';

    for (let i = 0; i < taskList.length; i++) {
        const task = taskList[i];
        const listItem = document.createElement('li');
        listItem.innerHTML = `<span class="${task.completed ? 'complete' : ''}">${task.text}</span>
        <input type="checkbox" onchange="toggleComplete(${i})" ${task.completed ? 'checked' : ''}>
        <button onclick="deleteTask(${i})">Delete</button>`;
        taskListContainer.appendChild(listItem);
    }
}

displayTasks();


