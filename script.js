const litre = document.querySelector('#litre')
const km = document.querySelector('#km')
const checked = document.querySelector('#checked')
const priceFuel = document.querySelector('#priceFuel')
const totalCost = document.querySelector('#totalCost')
const priceTrip = document.querySelector('#priceTrip')
const btnn = document.querySelector('#btnn')


btnn.addEventListener('click', function () {
    // let results = (100 * litre.value) / km.value
    let results = (km.value * litre.value) / 100
    let price = (priceFuel.value * litre.value) * 10

    totalCost.innerHTML = results.toFixed(1)
    priceTrip.innerHTML = price.toFixed(1)

    if (checked.checked) {
        results = results * 2
        price = price * 2
        totalCost.innerHTML = results.toFixed(1)
        priceTrip.innerHTML = price.toFixed(2)
    }

})

