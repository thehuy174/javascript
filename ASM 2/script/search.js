'use strict';

// Add Animation to Sidebar

const sidebar = document.querySelector('#sidebar');
sidebar.addEventListener('click', function(){
    sidebar.classList.toggle('active');
})

// show all breed

function all_breed() {
    // get breed from localStorage
    let breeds = localStorage.getItem('DSBREED') ? 
    JSON.parse(localStorage.getItem('DSBREED')) : [];
    let breedInput = document.querySelector("#input-breed");
    breeds.forEach(function (all){
        const option = document.createElement('option')
        option.innerHTML = `<option>${all.breed}</option>`
        breedInput.appendChild(option)
      })
}
all_breed();

// click event find pet

let find_pet = document.querySelector('#find-btn');

find_pet.addEventListener('click',function() {

    find_pet_id()
    find_pet_name()
    find_pet_type()
    find_pet_breed()
    find_pet_vaccinated()
    find_pet_dewormed()
    find_pet_sterilized()
})

// find with id

function find_pet_id() {
        
    let find_petID = document.querySelector('#input-id').value;
    // get data from localStorage
    let listpets = localStorage.getItem('DSPET') ? 
    JSON.parse(localStorage.getItem('DSPET')) : []; 

    let list_id = [];  

    if (find_petID){
        for (let i = 0; i < listpets.length; i++) {
            let str_id = listpets[i].id;
            // compare id 
            if (str_id.includes(find_petID)) {
                let find_id = {
                    id: listpets[i].id, 
                    name: listpets[i].name, 
                    age: parseInt(listpets[i].age),
                    type: listpets[i].type, 
                    weight: parseInt(listpets[i].weight),
                    length: parseInt(listpets[i].length), 
                    color: listpets[i].color, 
                    breed: listpets[i].breed,
                    today: listpets[i].today,
                    vaccinated: listpets[i].vaccinated, 
                    dewormed: listpets[i].dewormed,
                    sterilized: listpets[i].sterilized,
                }
                list_id.push(find_id); 

                let petDisplay = document.querySelector('#tbody');

                let list_pets = list_id.map((pet) => {
                    let date = new Date();
                    let petVaccinated = (pet.vaccinated === true) ?
                        'bi bi-check-circle-fill' : 'bi bi-x-circle-fill';
                    let petDewormed = (pet.dewormed === true) ?
                        'bi bi-check-circle-fill' : 'bi bi-x-circle-fill';
                    let petSterilized = (pet.sterilized === true) ?
                        'bi bi-check-circle-fill' : 'bi bi-x-circle-fill';
                    return  `
                        <tr id="${pet.id}">
                            <th scope="row">${pet.id}</th>
                            <td>${pet.name}</td>
                            <td>${pet.age}</td>
                            <td>${pet.type}</td>
                            <td>${pet.weight} kg</td>
                            <td>${pet.length} cm</td>
                            <td>${pet.breed}</td>
                            <td>
                                <i class="bi bi-square-fill" style="color: ${pet.color}"></i>
                            </td>
                            <td><i class="${petVaccinated}"></i></td>
                            <td><i class="${petDewormed}"></i></td>
                            <td><i class="${petSterilized}"></i></td>
                            <td>${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}</td>
                        </tr>
                    `
                })
                petDisplay.innerHTML = list_pets.join('');
            }
        }  
    }
}


// find with name

function find_pet_name() {
        
    let find_petNAME = document.querySelector('#input-name').value;
    // get data from localStorage
    let listpets = localStorage.getItem('DSPET') ? 
    JSON.parse(localStorage.getItem('DSPET')) : []; 

    let list_name = [];  

    if (find_petNAME){
        for (let i = 0; i < listpets.length; i++) {
            let str_name = listpets[i].name;
            // compare name
            if (str_name.includes(find_petNAME)) {
                let find_name = {
                    id: listpets[i].id, 
                    name: listpets[i].name, 
                    age: parseInt(listpets[i].age),
                    type: listpets[i].type, 
                    weight: parseInt(listpets[i].weight),
                    length: parseInt(listpets[i].length), 
                    color: listpets[i].color, 
                    breed: listpets[i].breed,
                    today: listpets[i].today,
                    vaccinated: listpets[i].vaccinated, 
                    dewormed: listpets[i].dewormed,
                    sterilized: listpets[i].sterilized,
                }
                list_name.push(find_name); 

                let petDisplay = document.querySelector('#tbody');

                let list_pets = list_name.map((pet) => {
                    let date = new Date();
                    let petVaccinated = (pet.vaccinated === true) ?
                        'bi bi-check-circle-fill' : 'bi bi-x-circle-fill';
                    let petDewormed = (pet.dewormed === true) ?
                        'bi bi-check-circle-fill' : 'bi bi-x-circle-fill';
                    let petSterilized = (pet.sterilized === true) ?
                        'bi bi-check-circle-fill' : 'bi bi-x-circle-fill';
                    return  `
                        <tr id="${pet.id}">
                            <th scope="row">${pet.id}</th>
                            <td>${pet.name}</td>
                            <td>${pet.age}</td>
                            <td>${pet.type}</td>
                            <td>${pet.weight} kg</td>
                            <td>${pet.length} cm</td>
                            <td>${pet.breed}</td>
                            <td>
                                <i class="bi bi-square-fill" style="color: ${pet.color}"></i>
                            </td>
                            <td><i class="${petVaccinated}"></i></td>
                            <td><i class="${petDewormed}"></i></td>
                            <td><i class="${petSterilized}"></i></td>
                            <td>${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}</td>
                        </tr>
                    `
                })
                petDisplay.innerHTML = list_pets.join('');
            }
        }  
    }
}

// find with type 

function find_pet_type() {
        
    let find_petTYPE = document.querySelector('#input-type').value;
    // get data from localStorage
    let listpets = localStorage.getItem('DSPET') ? 
    JSON.parse(localStorage.getItem('DSPET')) : [];   
    // filter pet by condition
    if (find_petTYPE === 'Dog'){
        let find_type = listpets.filter(e => {
            return e.type === 'Dog';
        }) 

        let petDisplay = document.querySelector('#tbody');

        let list_pets = find_type.map((pet) => {
            let date = new Date();
            let petVaccinated = (pet.vaccinated === true) ?
                'bi bi-check-circle-fill' : 'bi bi-x-circle-fill';
            let petDewormed = (pet.dewormed === true) ?
                'bi bi-check-circle-fill' : 'bi bi-x-circle-fill';
            let petSterilized = (pet.sterilized === true) ?
                'bi bi-check-circle-fill' : 'bi bi-x-circle-fill';
            return  `
                <tr id="${pet.id}">
                    <th scope="row">${pet.id}</th>
                    <td>${pet.name}</td>
                    <td>${pet.age}</td>
                    <td>${pet.type}</td>
                    <td>${pet.weight} kg</td>
                    <td>${pet.length} cm</td>
                    <td>${pet.breed}</td>
                    <td>
                        <i class="bi bi-square-fill" style="color: ${pet.color}"></i>
                    </td>
                    <td><i class="${petVaccinated}"></i></td>
                    <td><i class="${petDewormed}"></i></td>
                    <td><i class="${petSterilized}"></i></td>
                    <td>${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}</td>
                </tr>
            `
        })
        petDisplay.innerHTML = list_pets.join('');
        // filter pet by condition
    }else if (find_petTYPE === 'Cat'){
        let find_type = listpets.filter(e => {
            return e.type === 'Cat';
        }) 

        let petDisplay = document.querySelector('#tbody');

        let list_pets = find_type.map((pet) => {
            let date = new Date();
            let petVaccinated = (pet.vaccinated === true) ?
                'bi bi-check-circle-fill' : 'bi bi-x-circle-fill';
            let petDewormed = (pet.dewormed === true) ?
                'bi bi-check-circle-fill' : 'bi bi-x-circle-fill';
            let petSterilized = (pet.sterilized === true) ?
                'bi bi-check-circle-fill' : 'bi bi-x-circle-fill';
            return  `
                <tr id="${pet.id}">
                    <th scope="row">${pet.id}</th>
                    <td>${pet.name}</td>
                    <td>${pet.age}</td>
                    <td>${pet.type}</td>
                    <td>${pet.weight} kg</td>
                    <td>${pet.length} cm</td>
                    <td>${pet.breed}</td>
                    <td>
                        <i class="bi bi-square-fill" style="color: ${pet.color}"></i>
                    </td>
                    <td><i class="${petVaccinated}"></i></td>
                    <td><i class="${petDewormed}"></i></td>
                    <td><i class="${petSterilized}"></i></td>
                    <td>${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}</td>
                </tr>
            `
        })
        petDisplay.innerHTML = list_pets.join(''); 
    }            
}

// find with breed 

function find_pet_breed() {
        
    let find_petBREED = document.querySelector('#input-breed').value;
    // get data from localStorage
    let listpets = localStorage.getItem('DSPET') ? 
    JSON.parse(localStorage.getItem('DSPET')) : []; 

    let list_breed = [];  

    if (find_petBREED){
        for (let i = 0; i < listpets.length; i++) {
            let str_breed = listpets[i].breed;
            // compare breed
            if (str_breed.includes(find_petBREED)) {
                let find_breed = {
                    id: listpets[i].id, 
                    name: listpets[i].name, 
                    age: parseInt(listpets[i].age),
                    type: listpets[i].type, 
                    weight: parseInt(listpets[i].weight),
                    length: parseInt(listpets[i].length), 
                    color: listpets[i].color, 
                    breed: listpets[i].breed,
                    today: listpets[i].today,
                    vaccinated: listpets[i].vaccinated, 
                    dewormed: listpets[i].dewormed,
                    sterilized: listpets[i].sterilized,
                }
                list_breed.push(find_breed); 

                let petDisplay = document.querySelector('#tbody');

                let list_pets = list_breed.map((pet) => {
                    let date = new Date();
                    let petVaccinated = (pet.vaccinated === true) ?
                        'bi bi-check-circle-fill' : 'bi bi-x-circle-fill';
                    let petDewormed = (pet.dewormed === true) ?
                        'bi bi-check-circle-fill' : 'bi bi-x-circle-fill';
                    let petSterilized = (pet.sterilized === true) ?
                        'bi bi-check-circle-fill' : 'bi bi-x-circle-fill';
                    return  `
                        <tr id="${pet.id}">
                            <th scope="row">${pet.id}</th>
                            <td>${pet.name}</td>
                            <td>${pet.age}</td>
                            <td>${pet.type}</td>
                            <td>${pet.weight} kg</td>
                            <td>${pet.length} cm</td>
                            <td>${pet.breed}</td>
                            <td>
                                <i class="bi bi-square-fill" style="color: ${pet.color}"></i>
                            </td>
                            <td><i class="${petVaccinated}"></i></td>
                            <td><i class="${petDewormed}"></i></td>
                            <td><i class="${petSterilized}"></i></td>
                            <td>${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}</td>
                        </tr>
                    `
                })
                petDisplay.innerHTML = list_pets.join('');
            }
        }
                
        
    }
}


// find with vaccinated

function find_pet_vaccinated() {
        
    let find_petVACC = document.querySelector('#input-vaccinated').checked;
    // get data from localStorage
    let listpets = localStorage.getItem('DSPET') ? 
    JSON.parse(localStorage.getItem('DSPET')) : [];   
    // filter pet by condition
    if (find_petVACC){
        let find_vaccinated = listpets.filter(e => {
            return e.vaccinated === true;
        }) 

        let petDisplay = document.querySelector('#tbody');

        let list_pets = find_vaccinated.map((pet) => {
            let date = new Date();
            let petVaccinated = (pet.vaccinated === true) ?
                'bi bi-check-circle-fill' : 'bi bi-x-circle-fill';
            let petDewormed = (pet.dewormed === true) ?
                'bi bi-check-circle-fill' : 'bi bi-x-circle-fill';
            let petSterilized = (pet.sterilized === true) ?
                'bi bi-check-circle-fill' : 'bi bi-x-circle-fill';
            return  `
                <tr id="${pet.id}">
                    <th scope="row">${pet.id}</th>
                    <td>${pet.name}</td>
                    <td>${pet.age}</td>
                    <td>${pet.type}</td>
                    <td>${pet.weight} kg</td>
                    <td>${pet.length} cm</td>
                    <td>${pet.breed}</td>
                    <td>
                        <i class="bi bi-square-fill" style="color: ${pet.color}"></i>
                    </td>
                    <td><i class="${petVaccinated}"></i></td>
                    <td><i class="${petDewormed}"></i></td>
                    <td><i class="${petSterilized}"></i></td>
                    <td>${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}</td>
                </tr>
            `
        })
        petDisplay.innerHTML = list_pets.join('');
    }
}

// find with dewormed

function find_pet_dewormed() {
        
    let find_petDEWORMED = document.querySelector('#input-dewormed').checked;
    // get data from localStorage
    let listpets = localStorage.getItem('DSPET') ? 
    JSON.parse(localStorage.getItem('DSPET')) : [];   
    // filter pet by condition
    if (find_petDEWORMED){
        let find_dewormed = listpets.filter(e => {
            return e.dewormed === true;
        }) 

        let petDisplay = document.querySelector('#tbody');

        let list_pets = find_dewormed.map((pet) => {
            let date = new Date();
            let petVaccinated = (pet.vaccinated === true) ?
                'bi bi-check-circle-fill' : 'bi bi-x-circle-fill';
            let petDewormed = (pet.dewormed === true) ?
                'bi bi-check-circle-fill' : 'bi bi-x-circle-fill';
            let petSterilized = (pet.sterilized === true) ?
                'bi bi-check-circle-fill' : 'bi bi-x-circle-fill';
            return  `
                <tr id="${pet.id}">
                    <th scope="row">${pet.id}</th>
                    <td>${pet.name}</td>
                    <td>${pet.age}</td>
                    <td>${pet.type}</td>
                    <td>${pet.weight} kg</td>
                    <td>${pet.length} cm</td>
                    <td>${pet.breed}</td>
                    <td>
                        <i class="bi bi-square-fill" style="color: ${pet.color}"></i>
                    </td>
                    <td><i class="${petVaccinated}"></i></td>
                    <td><i class="${petDewormed}"></i></td>
                    <td><i class="${petSterilized}"></i></td>
                    <td>${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}</td>
                </tr>
            `
        })
        petDisplay.innerHTML = list_pets.join('');
    }
}

// find with sterilized

function find_pet_sterilized() {
        
    let find_petSTER = document.querySelector('#input-sterilized').checked;
    // get data from localStorage
    let listpets = localStorage.getItem('DSPET') ? 
    JSON.parse(localStorage.getItem('DSPET')) : [];   
    // filter pet by condition
    if (find_petSTER){
        let find_sterilized = listpets.filter(e => {
            return e.sterilized === true;
        }) 

        let petDisplay = document.querySelector('#tbody');

        let list_pets = find_sterilized.map((pet) => {
            let date = new Date();
            let petVaccinated = (pet.vaccinated === true) ?
                'bi bi-check-circle-fill' : 'bi bi-x-circle-fill';
            let petDewormed = (pet.dewormed === true) ?
                'bi bi-check-circle-fill' : 'bi bi-x-circle-fill';
            let petSterilized = (pet.sterilized === true) ?
                'bi bi-check-circle-fill' : 'bi bi-x-circle-fill';
            return  `
                <tr id="${pet.id}">
                    <th scope="row">${pet.id}</th>
                    <td>${pet.name}</td>
                    <td>${pet.age}</td>
                    <td>${pet.type}</td>
                    <td>${pet.weight} kg</td>
                    <td>${pet.length} cm</td>
                    <td>${pet.breed}</td>
                    <td>
                        <i class="bi bi-square-fill" style="color: ${pet.color}"></i>
                    </td>
                    <td><i class="${petVaccinated}"></i></td>
                    <td><i class="${petDewormed}"></i></td>
                    <td><i class="${petSterilized}"></i></td>
                    <td>${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}</td>
                </tr>
            `
        })
        petDisplay.innerHTML = list_pets.join('');
    }
}


