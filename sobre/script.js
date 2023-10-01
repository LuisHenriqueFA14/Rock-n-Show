const urlParams = new URLSearchParams(window.location.search);
const bandCode = urlParams.get('b');

function renderBandInfo(data) {
    let div = document.createElement('div')

    div.appendChild(document.createElement('h1')).innerText = data.name
    div.appendChild(document.createElement('p')).innerText = `Data: ${data.date}`
    div.appendChild(document.createElement('p')).innerText = `Local: ${data.place}`
    div.appendChild(document.createElement('p')).innerText = `Endereço: ${data.address}`
    div.appendChild(document.createElement('p')).innerText = `Abertura dos portões: ${data.time}`
    div.appendChild(document.createElement('p')).innerText = `Classificação indicativa: ${data.age} anos`

    div.appendChild(document.createElement('h1')).innerText = `Sobre a banda:`
    div.appendChild(document.createElement('p')).innerText = data.about

    document.querySelector('#band').appendChild(div)
}

function renderError() {
    window.alert('Banda não encontrada!')
    window.location.href = '/catalogo'
}

fetch('../database.json')
    .then((response) => response.json())
    .then((data) => {
        let found = false

        data.forEach((band) => {
            if (band.code == bandCode) {
                found = true
                return renderBandInfo(band)
            }
        })

        if (!found) {
            renderError()
        }
    })
