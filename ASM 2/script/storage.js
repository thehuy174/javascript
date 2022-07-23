'use strict';

// save pet

function saveToStorage() {
  // convert json to stringify 
  let arrString = JSON.stringify(petArr);
  localStorage.setItem("DSPET", arrString);
}

// Show pet

function getFromStorage() {
  if (localStorage.getItem("DSPET")) {
    let data_list = localStorage.getItem("DSPET");
    // convert stringify => Json
    petArr = JSON.parse(data_list);
    
  }return [];
}

// delete pet

function delete_pet (id) {
  // get data from localStorage
  let petArrs = localStorage.getItem('DSPET') ? 
  JSON.parse(localStorage.getItem('DSPET')) : [];

  let choice = confirm('Are you sure you want to delete ?');
  if (choice) {
    petArr.splice(id, 1);
    console.log(petArr);
    localStorage.setItem('DSPET', JSON.stringify(petArrs));
    renderTableData(petArr);
  }
}

// save breed

function breedsSaveToStorage() {
  // convert json to stringify
  let arrString = JSON.stringify(breeds);
  localStorage.setItem("DSBREED", arrString);
}

// show breed

function breedsgetFromStorage() {
  if (localStorage.getItem("DSBREED")) {
    let data_list = localStorage.getItem("DSBREED");
    // convert stringify => Json
    breeds = JSON.parse(data_list);
    renderBreedList (breeds);
    
  }return [];
}

// delete breed 

function delete_breed (id) {
  // get data from localStorage
  let breeds = localStorage.getItem('DSBREED') ? 
  JSON.parse(localStorage.getItem('DSBREED')) : [];

  let choice =confirm('Are you sure you want to delete ?');
  if (choice) {
    breeds.splice(id, 1);
    console.log(breeds);
    localStorage.setItem('DSBREED', JSON.stringify(breeds));
    renderBreedList(breeds);
  }
}

// show breed by type dog or cat

function renderBreed() {
  // get data from localStorage
  let breeds = localStorage.getItem('DSBREED') ? 
  JSON.parse(localStorage.getItem('DSBREED')) : [];
  
  let typeInput = document.querySelector('#input-type').value;
  let breedInput = document.querySelector("#input-breed");
  // filter breed by type dog
  if (typeInput === 'Dog'){
    let type_breed = breeds.filter(dog => {
      return dog.type === 'Dog';
    });
    let list_type_pet = type_breed.map(dog =>{
      return `<option>${dog.breed}</option>`
    })
    breedInput.innerHTML = list_type_pet.join('');
    // filter breed by type cat
  }else if (typeInput === 'Cat'){
    let type_breed = breeds.filter(cat => {
      return cat.type === 'Cat';
    });
    let list_type_pet = type_breed.map(cat =>{
      return `<option>${cat.breed}</option>`
    })
    breedInput.innerHTML = list_type_pet.join('');
  }
}





  


