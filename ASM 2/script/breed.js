'use strict';


let breeds = [];
breedsgetFromStorage();

// add new breed

let submit_Btn = document.querySelector('#submit-btn');
function new_breed() {    
    submit_Btn.addEventListener('click', () => {

        // Get data from Input Forms 

        let breed_Input = document.querySelector('#input-breed').value;
        let type_Input = document.querySelector('#input-type').value;
    
        let breed_obj = {
            breed: breed_Input,
            type: type_Input,
        }

        // Validate data

        if (breed_obj.breed == '') {
            alert('Please enter Pet Breed :');
            return false;
        }
    
        if (breed_obj.type == 'Select Type') {
            alert('Please select Type!');
            return false;
        }
        breeds.push(breed_obj);
        renderBreedList(breeds);
        breedsSaveToStorage();
    })
}
new_breed();

// show list breed

function renderBreedList (breeds) {
    let breed_Display = document.querySelector('#tbody');
    let i=0;
    let breed_Value = breeds.map((e, index) => {
        let breed_id = index;
        index++;
        i++;
        return  `
            <tr>
                <th>${i}</th>
                <td>${e.breed}</td>
                <td>${e.type}</td>
                <td><button onclick="delete_breed(${breed_id})" type="button" class="btn btn-danger ${e.breed}">Delete</button></td>
            </tr>
        `   
    });
    breed_Display.innerHTML = breed_Value.join('')
}

// Add Animation to Sidebar

const sidebar = document.querySelector('#sidebar');
sidebar.addEventListener('click', function(){
    sidebar.classList.toggle('active');
})


