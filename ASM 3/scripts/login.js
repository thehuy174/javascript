'use strict'

// click  event login

let userArrays = localStorage.getItem('userArray') ? 
JSON.parse(localStorage.getItem('userArray')) : [];

let login_btn = document.querySelector('#btn-submit');

login_btn.addEventListener('click', function(e) {
    let username_input = document.querySelector('#input-username').value;
    let password_input = document.querySelector('#input-password').value;
    
    let data_login = {
        username: username_input,
        password: password_input
    }
    userCheckLogin(data_login);
    
})

// Validate data

function userCheckLogin(data_login) {
    // get data from localstorage
    let userArrays = localStorage.getItem('userArray') ? 
    JSON.parse(localStorage.getItem('userArray')) : [];
    
    // error did not enter username
    if (data_login.username == '') {
        alert('Please enter Username :');
        return false;
    } 
    // error did not enter password
    if (data_login.password == '') {
        alert('Please enter Password :');
        return false;
    }
    // check input information
    
    userArrays.forEach(function(user) {
        let login_check = data_login.username == user.username && 
        data_login.password == user.password;
    
    if (login_check) {
        alert('Logged in successfully');
        localStorage.setItem('userArray_login', JSON.stringify(userArrays));
        window.location.href ="../index.html";
    }else {
        alert('Login failed !!! Please check your account information!!!')
        return false;
    }
    })
}