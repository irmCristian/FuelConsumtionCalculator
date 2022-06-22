const litre = document.querySelector('#litre')
const km = document.querySelector('#km')
const checked = document.querySelector('#checked')
const priceFuel = document.querySelector('#priceFuel')
const totalGas = document.querySelector('#totalCost')
const priceTrip = document.querySelector('#priceTrip')
const btnn = document.querySelector('#btnn')


btnn.addEventListener('click', function () {
    let results = (km.value * litre.value) / 100
    let price = (priceFuel.value * litre.value)

    totalGas.innerHTML = results.toFixed(2)
    priceTrip.innerHTML = price.toFixed(2)

    if (km.value < 100) {
        price = price / 2
        priceTrip.innerHTML = price.toFixed(2)
    } else {
        price = results * priceFuel.value
        priceTrip.innerHTML = price.toFixed(2)
    }

    if (checked.checked) {
        results = results * 2
        price = price * 2
        totalGas.innerHTML = results.toFixed(2)
        priceTrip.innerHTML = price.toFixed(2)
    }

})

