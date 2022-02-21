const state = {
  breweries: [],
  type: []
}

const container = document.querySelector('#breweries-list')
const ulEl = document.querySelector('#breweries-list')
const formEl = document.querySelector('#select-state-form')
const inputEl = document.querySelector('#select-state')
const filterEl = document.querySelector('#filter-by-type')
const stateEl = document.querySelector('#select-state')

//IGNORE
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

function renderBrewList() {
  for (const choice of state.breweries) {
    const xBrewery = document.createElement('li')
    xBrewery.innerHTML =
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
      <a href=${choice.website_url}>Visit Website</a>
    </section>
      `
    ulEl.append(xBrewery)
  }
}

function render() {
  clear()
  renderBrewList()
}

function clear() {
  inputEl.innerHTML = ''
  inputEl.value = ''
}

function formList(){
  formEl.addEventListener('submit', function (event) {
    event.preventDefault()
    fetch('https://api.openbrewerydb.org/breweries?by_state=' + inputEl.value)
      .then(function (response) {
        return response.json()
      })
      .then(function (breweries) {
        console.log(breweries)
        state.breweries = breweries
        render()
      })
  })
}

function filter(){
  formEl.addEventListener('change', function () {
    const FILTER = filterEl.value
    fetch(`https://api.openbrewerydb.org/breweries?by_state=${stateEl.value}&by_type=${FILTER}`)
    .then(function (response) {
      return response.json()
    })
    .then(function(type){
      console.log(type)
      state.breweries = type
      render()
      console.log(FILTER)
    })
  })
}
formList()
filter()




