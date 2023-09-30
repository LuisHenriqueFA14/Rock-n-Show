function renderCatalog(data) {
    data.forEach((band) => {
        let div = document.createElement('div');
        div.classList.add('band');

        let image = document.createElement('img');
        image.src = `../assets/bands/${band.code}/capa.jpg`;
        image.alt = band.name;
        image.classList.add('band-image');

        let bandName = document.createElement('h1');
        bandName.innerText = band.name;

        let bandDate = document.createElement('h2');
        bandDate.innerText = band.date; 

        let bandLink = document.createElement('a');
        bandLink.href = `/about/${band.code}`;
        bandLink.innerText = 'Saiba mais!';

        div.appendChild(image);
        div.appendChild(bandName);
        div.appendChild(bandDate);
        div.appendChild(bandLink);

        document.querySelector('#bands').appendChild(div);
    })
}

fetch('../database.json')
    .then((response) => response.json())
    .then((data) => renderCatalog(data));
