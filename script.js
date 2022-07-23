'use strict'

// khởi tạo thông tin thú cưng

const petArr = [
    {id: 'P001',name: 'Tom', age: 3, type: 'Cat', weight: 5,
        length: 50, breed: 'Tabby', color: '#FF0000', today: '01/03/2022',
        vaccinated: 'true', dewormed: 'true', sterilized: 'true', calbmi: '?'},
    {id: 'P002',name: 'Tyke', age: 5, type: 'Dog', weight: 3,
        length: 40, breed: 'Mixed Breed', color: '#008000', today: '02/03/2022',
        vaccinated: 'false', dewormed: 'false', sterilized: 'false', calbmi: '?'},
];

// add thú cưng mới

function NewPet() {

    // Bắt sự kiện Click vào nút "Submit"

    let submitBtn = document.querySelector('#submit-btn');
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
        let vaccinatedInputValue = 'false';
        let dewormedInputValue = 'false';
        let sterilizedInputValue = 'false';
        let date = new Date();
        let petDate = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;
    
        (vaccinatedInput.checked) && (vaccinatedInputValue = 'true');
        (dewormedInput.checked) && (dewormedInputValue = 'true');
        (sterilizedInput.checked) && (sterilizedInputValue = 'true');
        let bmi = document.querySelector('#bmi');

        // Lấy được dữ liệu từ các Input Form

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
            calbmi: bmi
        }
        PetCheck(petArr, data,);
    })
}
NewPet()

// Validate dữ liệu hợp lệ

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
}

// Hiển thị danh sách thú cưng

function renderTableData(petArr) {
    let petDisplay = document.querySelector('#tbody');
    let petValue = petArr.map((pet, index) => {
        let pet_id = index;
        index++;
        let petVaccinated = (pet.vaccinated === 'true') ?
            'bi bi-check-circle-fill' : 'bi bi-x-circle-fill';
        let petDewormed = (pet.dewormed === 'true') ?
            'bi bi-check-circle-fill' : 'bi bi-x-circle-fill';
        let petSterilized = (pet.sterilized === 'true') ?
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
                <td id="bmi"><i>?</i></td>
                <td>${pet.today}</td>
                <td><button onclick="delete_pet(${pet_id})" type="button" class="btn btn-danger ${pet.id}">Delete</button>
                </td>
            </tr>
        `
    })
    petDisplay.innerHTML = petValue.join('')
    bmi(petArr);
}
renderTableData(petArr)

// Xóa các dữ liệu vừa nhập trên Form

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

// Hiển thị các thú cưng khỏe mạnh

function delete_pethealthy (id) {
    let choice = confirm('Are you sure you want to delete ?');
    if (choice) {
        
        let petHealthy = petArr.filter((pet) => {

            return (pet.vaccinated === 'true' && pet.dewormed === 'true'
                && pet.sterilized === 'true');
        })
        petHealthy.splice(id, 1);
        console.log(petHealthy);
        let petDisplay = document.querySelector('#tbody');
        let petHealthyValue = petHealthy.map((pet, index) => {
            let pet_healthy_id = index=0;
            index++;
            let petVaccinated = (pet.vaccinated === 'true') ?
                'bi bi-check-circle-fill' : 'bi bi-x-circle-fill';
            let petDewormed= (pet.dewormed === 'true') ?
                'bi bi-check-circle-fill' : 'bi bi-x-circle-fill';
            let petSterilized = (pet.sterilized === 'true') ?
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
                    <td id="bmi"><i>?</i></td>
                    <td>${pet.today}</td>
                    <td><button onclick="delete_pethealthy(${pet_healthy_id})" type="button" class="btn btn-danger ${pet.id}">Delete</button>
                    </td>
                </tr>
            `
        })
        petDisplay.innerHTML = petHealthyValue.join('');
    }
    
}

function showHealthyPet(petArr) {
    
    let petHealthyButton = document.querySelector('#healthy-btn');
    let petAllButton = document.querySelector('#all-btn');
    petHealthyButton.addEventListener('click', () => {
        petHealthyButton.classList.toggle('hidden');
        petAllButton.classList.toggle('hidden');
        let petHealthy = petArr.filter((pet) => {

            return (pet.vaccinated === 'true' && pet.dewormed === 'true'
                && pet.sterilized === 'true');
        })
        let petDisplay = document.querySelector('#tbody');
        let petHealthyValue = petHealthy.map((pet, index) => {
            let pet_healthy_id = index;
            index++;
            let petVaccinated = (pet.vaccinated === 'true') ?
                'bi bi-check-circle-fill' : 'bi bi-x-circle-fill';
            let petDewormed= (pet.dewormed === 'true') ?
                'bi bi-check-circle-fill' : 'bi bi-x-circle-fill';
            let petSterilized = (pet.sterilized === 'true') ?
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
                    <td id="bmi"><i>?</i></td>
                    <td>${pet.today}</td>
                    <td><button onclick="delete_pethealthy(${pet_healthy_id})" type="button" class="btn btn-danger ${pet.id}">Delete</button>
                    </td>
                </tr>
            `
        })
        bmi(petArr);
        petDisplay.innerHTML = petHealthyValue.join('');
    })
}
showHealthyPet(petArr);

// Hiển thị tất cả thú cưng 

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

// Xóa một thú cưng

function delete_pet (id) {
    let choice =confirm('Are you sure you want to delete ?');
    if (choice) {
        petArr.splice(id, 1);
        console.log(petArr);
        renderTableData(petArr);
    }
}

//Tính toán chỉ số BMI

function bmi (petArr) {
    let calBMI = document.getElementById('bmi-btn');
    calBMI.addEventListener('click', function() {

        let petDisplay = document.querySelector('#tbody');
        let pet_BMI = petArr.map((bmi, index) => {
            let pet_bmi_id = index;
            index++;
            let BMI_pets = (bmi.type === 'Dog') ? 
                (bmi.weight*703)/(bmi.length*bmi.length) : 
                (bmi.weight*886)/(bmi.length*bmi.length);
            let petVaccinated = (bmi.vaccinated === 'true') ?
                'bi bi-check-circle-fill' : 'bi bi-x-circle-fill';
            let petDewormed = (bmi.dewormed === 'true') ?
                'bi bi-check-circle-fill' : 'bi bi-x-circle-fill';
            let petSterilized = (bmi.sterilized === 'true') ?
                'bi bi-check-circle-fill' : 'bi bi-x-circle-fill';
            return `
                <tr id="${bmi.id}">
                    <th scope="row">${bmi.id}</th>
                    <td>${bmi.name}</td>
                    <td>${bmi.age}</td>
                    <td>${bmi.type}</td>
                    <td>${bmi.weight} kg</td>
                    <td>${bmi.length} cm</td>
                    <td>${bmi.breed}</td>
                    <td>
                        <i class="bi bi-square-fill" style="color: ${bmi.color}"></i>
                    </td>
                    <td><i class="${petVaccinated}"></i></td>
                    <td><i class="${petDewormed}"></i></td>
                    <td><i class="${petSterilized}"></i></td>
                    <td id="bmi"><i>${BMI_pets.toFixed(2)}</i></td>
                    <td>${bmi.today}</td>
                    <td><button onclick="delete_pet(${pet_bmi_id})" type="button" class="btn btn-danger ${bmi.id}">Delete</button>
                    </td>
                </tr>
            `
        })
        petDisplay.innerHTML = pet_BMI.join('')
    })
}
