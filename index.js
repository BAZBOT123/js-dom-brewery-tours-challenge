const state = {
    breweries: []
}

const container = document.querySelector('#breweries-list')

// function renderBrewList() {
//     for (const choice of breweries) {

//         const xBrewery = document.createElement('li')

//         const breweryName = document.createElement('h2')
//         breweryName.innerText = choice.name

//         const mirco = document.createElement('div')
//         mirco.innerText = "micro"
//         mirco.setAttribute('class', 'type')
//     }
// }

const ulEl = document.querySelector('#breweries-list')
const formEl = document.querySelector('#select-state-form')
const inputEl = document.querySelector('#select-state')


function render() {
    for (const choice of breweries) {
        const xBrewery = document.createElement('li')
        xBrewery.innerHTML = list
        const list =
            `<h2>${choice.name}</h2>
    <div class="type">${choice.brewery_type}</div>
    <section class="address">
      <h3>Address:</h3>
      <p>${choice.street}</p>
      <p><strong>${choice.city}, ${choice.postal_code}</p>
    </section>
    <section class="phone">
      <h3>Phone:</h3>
      <p>${choice.phone}</p>
    </section>
    <section class="link">
      <a href=${choice.website_url}> target="_blank">Visit Website</a>
    </section>
  </li>
      `
      ulEl.append(xBrewery)
    }
}

 function formList() {
     formEl.addEventListener('submit', function (event) {
           event.preventDefault()
         fetch('https://api.openbrewerydb.org/breweries?by_state=' + inputEl.value)
            .then(function (response) {
                    return response.json()
                })
                .then(function (breweries) {
                    console.log(breweries)
                    state.breweries = breweries     
                })
        })
    }
    formList() 



