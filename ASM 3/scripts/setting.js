'use strict'

// get data from localStorage
let userArrays = localStorage.getItem('userArray') ? 
JSON.parse(localStorage.getItem('userArray')) : [];

function news(){
    
    let  save_setting = document.getElementById('btn-submit')
    save_setting.addEventListener('click', function(){
        let new_page = document.querySelector('#input-page-size').value;
        console.log(new_page);
        userArrays[0].pagesize = new_page;
        let new_category = document.getElementById('input-category').value;
        userArrays[0].category = new_category;
        localStorage.setItem('userArray', JSON.stringify(userArrays));
    })
}
news()