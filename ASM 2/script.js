'use strict';

// init pet

let petArr = [];
getFromStorage();

// add new pet

let submitBtn = document.querySelector('#submit-btn');

function NewPet() {

    // Click event "Submit"

    submitBtn.addEventListener('click', (e) => {
        
        let idInput = document.querySelector('#input-id').value;
        let nameInput = document.querySelector('#input-name').value;
        let ageInput = document.querySelector('#input-age').value;
        let typeInput = document.querySelector('#input-type').value;
        let weightInput = document.querySelector('#input-weight').value;
        let lengthInput = document.querySelector('#input-length').value;
        let colorInput = document.querySelector('#input-color-1').value;
        let breedInput = document.querySelector('#input-breed').value;
        let vaccinatedInput = document.querySelector('#input-vaccinated');
        let dewormedInput = document.querySelector('#input-dewormed');
        let sterilizedInput = document.querySelector('#input-sterilized');
        let vaccinatedInputValue = false;
        let dewormedInputValue = false;
        let sterilizedInputValue = false;
        let date = new Date();
        let petDate = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;
    
        (vaccinatedInput.checked) && (vaccinatedInputValue = true);
        (dewormedInput.checked) && (dewormedInputValue = true);
        (sterilizedInput.checked) && (sterilizedInputValue = true);

        // Get data from Input Forms

        let data = {
            id: idInput, 
            name: nameInput, 
            age: parseInt(ageInput),
            type: typeInput, 
            weight: parseInt(weightInput),
            length: parseInt(lengthInput), 
            color: colorInput, 
            breed: breedInput,
            today: petDate,
            vaccinated: vaccinatedInputValue, 
            dewormed: dewormedInputValue,
            sterilized: sterilizedInputValue,
        }
        PetCheck(petArr, data,);
    })
}
NewPet()

// Validate data

function PetCheck(petArr, data,) {
    for (let i = 0; i < petArr.length; i++) {
        if (data.id === petArr[i].id) {
            alert('ID must unique!');
            return false;
        }
    }

    if (data.id == '') {
        alert('Please enter Pet ID :');
        return false;
    } 
     
    if (data.name == '') {
        alert('Please enter Pet name :');
        return false;
    }

    if (!data.age) {
        alert('Please enter Pet age :');
        return false;
    } else if (data.age < 1 || data.age > 15) {
        alert('Age must be between 1 and 15!');
        return false;
    }

    if (data.type == 'Select Type') {
        alert('Please select Type!');
        return false;
    }

    if (!data.weight) {
        alert('Please enter weight :');
        return false;
    } else if (data.weight < 1 || data.weight > 15) {
        alert('Weight must be between 1 and 15!');
        return false;
    }

    if (!data.length) {
        alert('Please enter length :');
        return false;
    } else if (data.length < 1 || data.length > 100) {
        alert('Length must be between 1 and 100!');
        return false;
    }

    if (data.breed == 'Select Breed') {
        alert('Please select Breed!');
        return false;
    }
    
    petArr.push(data);
    renderTableData(petArr);
    clear();
    saveToStorage();
    console.log(petArr);
}

// Show pet list

function renderTableData(petArr) {
    console.log(petArr);
    let petDisplay = document.querySelector('#tbody');
    let petValue = petArr.map((pet, index) => {
        let date = new Date();
        let pet_id = index;
        index++;
        let petVaccinated = (pet.vaccinated === true) ?
            'bi bi-check-circle-fill' : 'bi bi-x-circle-fill';
        let petDewormed = (pet.dewormed === true) ?
            'bi bi-check-circle-fill' : 'bi bi-x-circle-fill';
        let petSterilized = (pet.sterilized === true) ?
            'bi bi-check-circle-fill' : 'bi bi-x-circle-fill';
        return `
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
                <td><button onclick="delete_pet(${pet_id})" type="button" class="btn btn-danger">Delete</button>
                </td>
            </tr>
        `
    })
    localStorage.setItem('DSPET', JSON.stringify(petArr));
    petDisplay.innerHTML = petValue.join('')
}
renderTableData(petArr);

// Delete the data just entered on the Form

function clear() {
    
    let idInput = document.querySelector('#input-id');
    let nameInput = document.querySelector('#input-name');
    let ageInput = document.querySelector('#input-age');
    let typeInput = document.querySelector('#input-type');
    let weightInput = document.querySelector('#input-weight');
    let lengthInput = document.querySelector('#input-length');
    let colorInput = document.querySelector('#input-color-1');
    let breedInput = document.querySelector('#input-breed');
    let vaccinatedInput = document.querySelector('#input-vaccinated');
    let dewormedInput = document.querySelector('#input-dewormed');
    let sterilizedInput = document.querySelector('#input-sterilized');
    
    idInput.value = '';
    nameInput.value = '';
    ageInput.value = '';
    typeInput.value = 'Select Type';
    weightInput.value = '';
    lengthInput.value = '';
    colorInput.value = '#000000';
    breedInput.value = 'Select Breed';
    vaccinatedInput.checked = false;
    dewormedInput.checked = false;
    sterilizedInput.checked = false;
}
clear()

// Show healthy pets

function showHealthyPet(petArr) {
    
    let petHealthyButton = document.querySelector('#healthy-btn');
    let petAllButton = document.querySelector('#all-btn');
    petHealthyButton.addEventListener('click', () => {
        petHealthyButton.classList.toggle('hidden');
        petAllButton.classList.toggle('hidden');
        // filter pet healthy
        let petHealthy = petArr.filter((pet) => {
            return (pet.vaccinated === true && pet.dewormed === true
                && pet.sterilized === true);
        })
        let petDisplay = document.querySelector('#tbody');
        let petHealthyValue = petHealthy.map((pet) => {
            let petVaccinated = (pet.vaccinated === true) ?
                'bi bi-check-circle-fill' : 'bi bi-x-circle-fill';
            let petDewormed= (pet.dewormed === true) ?
                'bi bi-check-circle-fill' : 'bi bi-x-circle-fill';
            let petSterilized = (pet.sterilized === true) ?
                'bi bi-check-circle-fill' : 'bi bi-x-circle-fill';
            return `
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
                    <td>${pet.today}</td>
                    <td><button type="button" class="btn btn-danger ${pet.id}">Delete</button>
                    </td>
                </tr>
            `
        })
        petDisplay.innerHTML = petHealthyValue.join('');
        getFromStorage();
    })
}
showHealthyPet(petArr)

// Show all pets

function showAllPet(petArr) {
    
    let petHealthyButton = document.querySelector('#healthy-btn');
    let petAllButton = document.querySelector('#all-btn');
    petAllButton.addEventListener('click', (e) => {
        petHealthyButton.classList.toggle('hidden');
        petAllButton.classList.toggle('hidden');
        renderTableData(petArr);
    }) 
}
showAllPet(petArr);

// Add Animation to Sidebar

const sidebar = document.querySelector('#sidebar');
sidebar.addEventListener('click', function(){
    sidebar.classList.toggle('active');
})


