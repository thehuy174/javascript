'use strict';

// get data from localStorage
let getnews = localStorage.getItem('getnews') ? 
JSON.parse(localStorage.getItem('getnews')) : [];
let userArrays = localStorage.getItem('userArray') ? 
JSON.parse(localStorage.getItem('userArray')) : [];

let new_container = document.querySelector('#news-container');
let num = 1;
// fetch news
const news = async function (q, page) {
  try {
    let response = await fetch(`https://gnews.io/api/v4/search?q=${q}&page=${page}&token=48ec7f9f3e8341b7376c6dade05a9b50`)
    let data = await response.json();
    console.log(data);
    localStorage.setItem("searchnews", JSON.stringify(data));
    for (let i = 0; i < data.articles.length; i++) {
      new_container.innerHTML += 
      `<div style="border: 1px solid; margin: 20px; height: auto; width: auto; display: flex">
        <img style="float: left; width: 500px; height: auto; " src="${data.articles[i].image}">
        <div style="padding: 20px">
          <h4>${data.articles[i].title}</h4><br>
          <p>${data.articles[i].description}</p><br>
          <button style="background-color: #2F89FD; border-radius: 5px"><a style=" color: white" href="${data.articles[i].url}">View</a></button>
        </div>
      </div>
      `
    }
  }catch (err) {
    console.error(err);
  }
}
news(`${userArrays[0].q}`, `${num}`);
// get btn
let prev = document.querySelector('#prev');
let next = document.querySelector('#next');
let previous_btn = document.querySelector('#btn-prev');
let next_btn = document.querySelector('#btn-next');
let page_num = document.querySelector('#page-num');

page_num.textContent = `${num}`
    
let search_btn = document.querySelector('#btn-submit');
// click event search
search_btn.addEventListener('click', function () {
    let search_input = document.querySelector('#input-query').value;
    console.log(search_input);
    if (search_input == ''){
        alert('Please enter a search !');
    }
    userArrays[0].q = search_input;
    new_container.innerHTML =''
    news(`${userArrays[0].q}`, `${num}`);
    localStorage.setItem('userArray', JSON.stringify(userArrays));
})
// hidden button prev
if (page_num.textContent == 1){
  prev.classList.add('hidden');
}
previous_btn.addEventListener('click', function () {
  num--;
  if (page_num.textContent == 1){
    prev.classList.add('hidden');
  }else {
    next.classList.remove('hidden');
    prev.classList.remove('hidden');
    page_num.textContent = `${num}`
    new_container.innerHTML ='' 
    news(`${userArrays[0].q}`, `${num}`);
  }
})
// hidden button next
next_btn.addEventListener('click', function () {
  prev.classList.remove('hidden');
  num++;
  page_num.textContent = `${num}`
  new_container.innerHTML ='' 
  let searchnews = localStorage.getItem('searchnews') ? 
  JSON.parse(localStorage.getItem('searchnews')) : [];
  news(`${userArrays[0].q}`, `${num}`);

  console.log(searchnews.totalResults);
  let totalPage = Math.ceil(searchnews.totalResults / searchnews.articles.length);
  console.log(totalPage);
  if (page_num.textContent == totalPage) {
    next.classList.add('hidden');
  }
  
})

