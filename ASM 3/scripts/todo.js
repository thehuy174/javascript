'use strict'
// get data from localStorage
let user_arr = JSON.parse(localStorage.getItem('userArray_login'))
let todoArr = [];
todogetFromStorage()
// create a new class task
class Task {
    constructor(task, owner, isDone){
        this.task = task,
        this.owner = owner,
        this.isDone = isDone
    }
}
// click event add task
let addTask_btn = document.querySelector('#btn-add');
function addTask(){
    addTask_btn.addEventListener('click', function(e){
        e.preventDefault();
        let task_input = document.querySelector('#input-task').value;
        let data = new Task(task_input, user_arr, false);
        todoArr.push(data);
        console.log(todoArr);
        rendertodotask(todoArr);
        localStorage.setItem("todoArr", JSON.stringify(todoArr));
    })   
}
addTask()
// render todo list
function rendertodotask(todoArr){  
    console.log(todoArr);
    // filter
    let todo_display = todoArr.filter(e => {
        return e.owner.username === user_arr.username
    })
    let todo_list = document.querySelector('#todo-list');
    // map
    let todo_value = todo_display.map((e, index) => {
        let todo_task = index;
        index++;
        return `<li>${e.task}<span class="close" onclick="deletetodo(${todo_task})">×</span></li>` 
    })
    localStorage.setItem("todoArr", JSON.stringify(todoArr));
    todo_list.innerHTML = todo_value.join('');
}
rendertodotask(todoArr)
// Add a "checked" symbol when clicking on a list item
let todo_list = document.querySelector('#todo-list');
todo_list.addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked'); 
    }
});

// delete todo
function deletetodo(task){
    let todoArrs = JSON.parse(localStorage.getItem("todoArr"));
    todoArr.splice(task, 1);
    localStorage.setItem('todoArr', JSON.stringify(todoArrs));
    rendertodotask(todoArr);
}



