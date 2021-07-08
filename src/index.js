function fetchRegisteredDogs() {
    fetch ('http://localhost:3000/dogs')
    .then (resp => resp.json())
    .then (json => renderRegisteredDogs(json))
}

function renderRegisteredDogs(dogs) {
    dogs.forEach(dog => {
        let tbody = document.querySelector('#table-body')
        let newDog = document.createElement('tr')
        newDog.innerHTML = `
        <tr><td>${dog.name}</td> <td>${dog.breed}</td> <td>${dog.sex}</td> <td><button>Edit</button></td></tr>`
        tbody.append(newDog)
    
    newDog.addEventListener('click', value => {
        document.querySelectorAll('#dog-form input')[0].value = dog.name
        document.querySelectorAll('#dog-form input')[1].value = dog.breed
        document.querySelectorAll('#dog-form input')[2].value = dog.sex  
    })
})
}

document.addEventListener('DOMContentLoaded', () => {
    fetchRegisteredDogs()
})