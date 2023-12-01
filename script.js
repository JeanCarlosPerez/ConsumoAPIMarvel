const marvel = {
    render: () =>{
        const urlAPI = 'https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=8627c90880f783778bcd16f992c05629&hash=a37e60d33a74ff5b2245d925c8d2eb06'
        const container = document.querySelector(".container")
        console.log(container)
        let contenido = ""

        fetch(urlAPI)
        .then(respuesta => respuesta.json())
        .then(json => {
            console.log(json, "RESPUESTA.JSON")
            for (const hero of json.data.results){
                let urlHero = hero.urls[0].url
                contenido += `           
            <div class="cold-md-4">
                <a href="${urlHero}">
                    <img class="imagen" src="${hero.thumbnail.path}.${hero.thumbnail.extension}" alt="${hero.name}">
                </a>
                <h2 class="nombre">${hero.name}</h2>
                <p class="descripcion">${hero.description}</p>
            </div>`
            }
            container.innerHTML = contenido
        })
    }
}
marvel.render()

