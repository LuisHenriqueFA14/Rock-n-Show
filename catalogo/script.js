let bands = {}

function divByData(data) {
    let div = document.createElement('div')
    div.classList.add('band')

    let image = document.createElement('img')
    image.src = `../assets/bands/${data.code}/capa.jpg`
    image.alt = data.name
    image.classList.add('band-image')

    let bandName = document.createElement('h1')
    bandName.innerText = data.name

    let bandDate = document.createElement('h2')
    bandDate.innerText = data.date

    let bandLink = document.createElement('a')
    bandLink.href = `/about/${data.code}`
    bandLink.innerText = 'Saiba mais!'

    div.appendChild(image)
    div.appendChild(bandName)
    div.appendChild(bandDate)
    div.appendChild(bandLink)

    return div
}

function renderCatalog() {
    bands.forEach((band) => {
        document.querySelector('#bands').appendChild(divByData(band))
    })
}

document.getElementById('search').addEventListener('input', () => {
    const value = document.querySelector('#search').value

    document.querySelector('#bands').innerHTML = ''

    bands.forEach((band) => {
        if (band.name.toLowerCase().includes(value.toLowerCase())) {
            document.querySelector('#bands').appendChild(divByData(band))
        }
    })
})

fetch('../database.json')
    .then((response) => response.json())
    .then((data) => {
        bands = data
        renderCatalog()
    })
