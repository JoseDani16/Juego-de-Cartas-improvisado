const nokemonContainer = document.getElementById('nokemons-container')
const arregloAux = []
const nokemonsFetch = (i) => {
    fetch('../json/nokemons.json')
    .then ((res) => res.json())
    .then ((data) => {
            console.log(data)
            for (let i = 0; i < 27; i++) {
                arregloAux.push(data.results[i])
            }
            console.log(arregloAux[7].sprite)
            const urlDeImagen = arregloAux.map((item) => {
                return '<div class="itemNokedex"><p class="textoNokedex">'+item.nombre+'</p><img src="'+item.sprite+'" width="120px" height="160px"></img></div>'
            })
            console.log(urlDeImagen)
            const urlListo = urlDeImagen.join('')
            nokemonContainer.innerHTML = urlListo
})

}

nokemonsFetch()





