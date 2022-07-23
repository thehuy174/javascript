'use strict';

function render_pets() {

    // get pet from localstorage
    let listpets = localStorage.getItem('DSPET') ? 
    JSON.parse(localStorage.getItem('DSPET')) : [];

    let petDisplay = document.querySelector('#tbody');
    // render pet
    let list_pets = listpets.map((pet, index) => {
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
                <td><button onClick="show_edit(${index})" id="edit-form" style="background-color: #FFC108; color: black; border: none" type="button" class="btn btn-danger">Edit</button>
                </td>
            </tr>
        `
    })
    petDisplay.innerHTML = list_pets.join('');

};
render_pets()


// Click event edit

function show_edit(index) {

    // get data from localStorage
    let listpets = localStorage.getItem('DSPET') ? 
    JSON.parse(localStorage.getItem('DSPET')) : [];
    
    // show edit form

    document.querySelector('#container-form').classList.remove('hide');

    document.getElementById('input-id').value = listpets[index].id;
    document.getElementById('input-name').value = listpets[index].name;
    document.getElementById('input-age').value = listpets[index].age;
    document.getElementById('input-type').value = listpets[index].type;
    document.getElementById('input-weight').value = listpets[index].weight;
    document.getElementById('input-length').value = listpets[index].length;
    document.getElementById('input-color-1').value = listpets[index].color;
    document.getElementById('input-breed').value = listpets[index].breed;
    document.getElementById('input-vaccinated').checked = listpets[index].vaccinated;
    document.getElementById('input-dewormed').checked = listpets[index].dewormed;
    document.getElementById('input-sterilized').checked = listpets[index].sterilized;
    document.getElementById('index').value = index;
}

// edit pet

let edit_pet = document.querySelector('#submit-btn');
// click event edit pet
edit_pet.addEventListener('click', function() {
    // get data from localStorage
    let listpets = localStorage.getItem('DSPET') ? 
    JSON.parse(localStorage.getItem('DSPET')) : [];
    let index = document.getElementById('index').value;
    
    listpets[index] = {
        id : document.getElementById('input-id').value,
        name : document.getElementById('input-name').value,
        age : document.getElementById('input-age').value,
        type : document.getElementById('input-type').value,
        weight : document.getElementById('input-weight').value,
        length : document.getElementById('input-length').value,
        color : document.getElementById('input-color-1').value,
        breed : document.getElementById('input-breed').value,
        vaccinated : document.getElementById('input-vaccinated').checked,
        dewormed : document.getElementById('input-dewormed').checked,
        sterilized : document.getElementById('input-sterilized').checked
    };

    // Validate data

    if (listpets[index].name == '') {
        alert('Please enter Pet name :');
        return false;
    }

    if (!listpets[index].age) {
        alert('Please enter Pet age :');
        return false;
    } else if (listpets[index].age < 1 || listpets[index].age > 15) {
        alert('Age must be between 1 and 15!');
        return false;
    }

    if (listpets[index].type == 'Select Type') {
        alert('Please select Type!');
        return false;
    }

    if (!listpets[index].weight) {
        alert('Please enter weight :');
        return false;
    } else if (listpets[index].weight < 1 || listpets[index].weight > 15) {
        alert('Weight must be between 1 and 15!');
        return false;
    }

    if (!listpets[index].length) {
        alert('Please enter length :');
        return false;
    } else if (listpets[index].length < 1 || listpets[index].length > 100) {
        alert('Length must be between 1 and 100!');
        return false;
    }

    if (listpets[index].breed == 'Select Breed') {
        alert('Please select Breed!');
        return false;
    }
    // save localStorage
    localStorage.setItem('DSPET', JSON.stringify(listpets));
    // show pet
    render_pets();
})

// show breed by type

function type_breed() {
    // get data from localStorage
    let breeds = localStorage.getItem('DSBREED') ? 
    JSON.parse(localStorage.getItem('DSBREED')) : [];
    let breedInput = document.querySelector("#input-breed");
    let typeInput = document.querySelector('#input-type').value;
    breeds.forEach(function (all){
        const option = document.createElement('option')
        option.innerHTML = `<option>${all.breed}</option>`
        breedInput.appendChild(option)
    })
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
type_breed();


// Add Animation to Sidebar

const sidebar = document.querySelector('#sidebar');
sidebar.addEventListener('click', function(){
    sidebar.classList.toggle('active');
})
