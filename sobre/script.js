const urlParams = new URLSearchParams(window.location.search);
const bandCode = urlParams.get('b');

function renderBandInfo(data) {
    let info = document.createElement('div')

    info.id = 'info'

    info.appendChild(document.createElement('img')).src = `../assets/bands/${data.code}/capa.jpg`

    let div = document.createElement('div')

    div.appendChild(document.createElement('h1')).innerText = data.name
    div.appendChild(document.createElement('p')).innerText = `Data: ${data.date}`
    div.appendChild(document.createElement('p')).innerText = `Local: ${data.place}`
    div.appendChild(document.createElement('p')).innerText = `Endereço: ${data.address}`
    div.appendChild(document.createElement('p')).innerText = `Abertura dos portões: ${data.time}`
    div.appendChild(document.createElement('p')).innerText = `Classificação indicativa: ${data.age} anos`

    info.appendChild(div)

    document.querySelector('#band').appendChild(info)

    let about = document.createElement('div')

    about.id = 'about'

    div = document.createElement('div')

    div.appendChild(document.createElement('h1')).innerText = `Sobre`
    div.appendChild(document.createElement('p')).innerText = data.about

    about.appendChild(div)

    about.appendChild(document.createElement('img')).src = `../assets/bands/${data.code}/foto.jpg`

    document.querySelector('#band').appendChild(about)

    let show = document.createElement('div')

    show.id = 'show'

    show.appendChild(document.createElement('h1')).innerText = `Show`

    let iframe = document.createElement('iframe')
    iframe.src = data.youtube
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
    iframe.allowFullscreen = true

    show.appendChild(iframe)

    document.querySelector('#band').appendChild(show)
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
