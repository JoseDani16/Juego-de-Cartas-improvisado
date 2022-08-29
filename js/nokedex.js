const nokemonContainer = document.getElementById('nokemons-container')
const arregloAux = []
const nokemonsFetch = (i) => {
    fetch('../json/nokemons.json')
    .then ((res) => res.json())
    .then ((data) => {
            for (let i = 0; i < 27; i++) {
                arregloAux.push(data[i])
            }
            const urlDeImagen = arregloAux.map((item) => {
                return '<div class="itemNokedex"><p class="textoNokedex">'+item.atributo+'</p><p class="textoNokedex">'+item.nombre+'</p><img src="'+item.sprite+'" width="120px" height="160px"></img></div>'
            })
            const urlListo = urlDeImagen.join('')
            nokemonContainer.innerHTML = urlListo
})

}

nokemonsFetch()





