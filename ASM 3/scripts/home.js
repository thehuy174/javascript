'use strict'

// get btn

let login = document.querySelector('#login-modal');

let logout = document.querySelector('#main-content')

// get data from local storage
let userArrays =  JSON.parse(localStorage.getItem('userArray_login'));

if (userArrays.length > 0) {
    // hidden register, login
    login.classList.add('hidden');
    logout.classList.remove('hidden');
    // createElement p
    let welcome = document.querySelector('#welcome-message')
    const logout_p = document.createElement('p')
    logout_p.innerHTML = `<p>Welcome ${userArrays[0].username}</p>`;
    welcome.appendChild(logout_p);
}else {
    // hidden logout
    logout.classList.add('hidden');
    login.classList.remove('hidden');
}
// logout user
logout.addEventListener('click', function(e) {
    userArrays.splice(e, 1);
    localStorage.setItem('userArray_login', JSON.stringify(userArrays));
    window.location.href ="../index.html";
})


