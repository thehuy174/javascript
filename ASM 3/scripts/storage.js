'use strict';

// save user

function saveToStorage() {
  // convert json to stringify 
  let arrString = JSON.stringify(userArray);
  localStorage.setItem("userArray", arrString);
}

// Show user

function getFromStorage() {
  if (localStorage.getItem("userArray")) {
    let data_list = localStorage.getItem("userArray");
    // convert stringify => Json
    userArray = JSON.parse(data_list);
    
  }return [];
}
// show todo list
function todogetFromStorage() {
  if (localStorage.getItem("todoArr")) {
    let data_list = localStorage.getItem("todoArr");
    // convert stringify => Json
    todoArr = JSON.parse(data_list);
    
  }return [];
}





  


