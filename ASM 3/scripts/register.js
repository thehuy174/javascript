'use strict'

// create class user
class User {
    constructor(firstname, lastname, username, password, password_confirm, category, pagesize, q) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.username = username;
        this.password = password;
        this.password_confirm = password_confirm;
        this.category = category;
        this.pagesize = pagesize;
        this.q = q;
    }
}

let userArray = [];

// click event register

let register_btn = document.querySelector('#btn-submit');

register_btn.addEventListener('click', function(e) {

    // Get data from Input Forms

    let firstname_input = document.querySelector('#input-firstname').value;
    let lastname_input = document.querySelector('#input-lastname').value;
    let username_input = document.querySelector('#input-username').value;
    let password_input = document.querySelector('#input-password').value;
    let confirm_password_input = document.querySelector('#input-password-confirm').value;

    // create array user management

    let data = new User(firstname_input, lastname_input, 
        username_input, password_input, confirm_password_input, 'technology','5', 'sport')
    userCheck(userArray, data);
})

// Validate data

function userCheck(userArray, data) {
    
     
    if (data.firstname == '') {
        alert('Please enter Firstname :');
        return false;
    }

    if (data.lastname == '') {
        alert('Please enter Lastname :');
        return false;
    }

    for (let i = 0; i < userArray.length; i++) {
        if (data.username === userArray[i].username) {
            alert('Username must unique!');
            return false;
        }
    }

    if (data.username == '') {
        alert('Please enter Username :');
        return false;
    } 

    if (data.password == '') {
        alert('Please enter Password :');
        return false;
    }

    if (data.password_confirm == '') {
        alert('Please enter Password_confirm :');
        return false;
    }

    if(data.password != data.password_confirm) {
		alert('Password does not match, please try again!!!')
		return false;
	}

    
    userArray.push(data);
    console.log(userArray);
    saveToStorage();
    Redirect();
}

// tranfer page

function Redirect(){
    window.location.href ="./login.html";
}
