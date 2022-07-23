'use strict'
// get data from localStorage
let getnews = localStorage.getItem('getnews') ? 
JSON.parse(localStorage.getItem('getnews')) : [];
let userArrays = localStorage.getItem('userArray') ? 
JSON.parse(localStorage.getItem('userArray')) : [];

let new_container = document.querySelector('#news-container');
let num = 1;
// fetch data
const news = async function (country, category, pageSize, page) {
  try {
    let response = await fetch(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&pageSize=${pageSize}&page=${page}&apiKey=81cee23a4f294ac2ac345850b4d9a518`)
    let data = await response.json();
    console.log(data);
    localStorage.setItem("getnews", JSON.stringify(data));
    //render news
    for (let i = 0; i < data.articles.length; i++) {
      new_container.innerHTML += 
      `<div style="border: 1px solid; margin: 20px; height: auto; width: auto; display: flex">
        <img style="float: left; width: 500px; height: auto; " src="${data.articles[i].urlToImage}">
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
news('us', userArrays[0].category, userArrays[0].pagesize, `${num}`);
// get btn
let prev = document.querySelector('#prev');
let next = document.querySelector('#next');
let previous_btn = document.querySelector('#btn-prev');
let next_btn = document.querySelector('#btn-next');
let page_num = document.querySelector('#page-num');

page_num.textContent = `${num}`
    
// hidden button prev when in page 1
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
    news('us', userArrays[0].category, userArrays[0].pagesize, `${num}`);
  }
})
// hidden button next
next_btn.addEventListener('click', function () {
  prev.classList.remove('hidden');
  num++;
  page_num.textContent = `${num}`
  new_container.innerHTML ='' 
  let getnews = localStorage.getItem('getnews') ? 
  JSON.parse(localStorage.getItem('getnews')) : [];
  news('us', userArrays[0].category, userArrays[0].pagesize, `${num}`);

  console.log(getnews.totalResults);
  let totalPage = Math.ceil(getnews.totalResults / getnews.articles.length);
  console.log(totalPage);
  if (page_num.textContent == totalPage) {
    next.classList.add('hidden');
  }
  
})


