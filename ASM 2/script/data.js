'use strict';

// Add Animation to Sidebar

const sidebar = document.querySelector('#sidebar');
sidebar.addEventListener('click', function(){
    sidebar.classList.toggle('active');
})

// export pet file

let export_data = document.querySelector('#export-btn');
// get data from localStorage
let petArrs = localStorage.getItem('DSPET') ? 
JSON.parse(localStorage.getItem('DSPET')) : [];

let str_data = JSON.stringify(petArrs);
  
// click event export pet

export_data.addEventListener('click', function(){

    let blob_data = new Blob([str_data], {type: "text/plain;charset=utf-8"});
    saveAs(blob_data, 'pets.json');
})

// export breed file

let export_breed = document.querySelector('#export-btn_breed');
// get data from localStorage
let breeds = localStorage.getItem('DSBREED') ? 
JSON.parse(localStorage.getItem('DSBREED')) : [];

let str_breed = JSON.stringify(breeds);
  
// click event export breed

export_breed.addEventListener('click', function(){

    let blob_breed = new Blob([str_breed], {type: "text/plain;charset=utf-8"});
    saveAs(blob_breed, 'pets.json');
})

// import file 

let import_data = document.querySelector('#import-btn');

import_data.addEventListener('click', function(){
    
    let choise = document.querySelector('#input-file').files[0];
    
    let fileReader = new FileReader();

    fileReader.addEventListener('load', function(e){
        let file = e.target.result;
        //convert json to object
        let file_list = JSON.parse(file);
        // save to localstore
        localStorage.setItem("DSPET", JSON.stringify(file_list));
       
    })
    fileReader.readAsText(choise);
    
    
})



