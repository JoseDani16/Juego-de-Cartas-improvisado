class Carta {
    constructor(nombre, atributo, ataque, defensa) {
        this.nombre = nombre
        this.atributo = atributo
        this.ataque = ataque
        this.defensa = defensa
        this.salud = 100
    }
}
let arreglito = []

const noke1 = new Carta('Veyvur', 'agua', 11, 11)
const noke2 = new Carta('Roxaen', 'agua', 16, 6)
const noke3 = new Carta('Fauhye', 'agua', 11, 13)
const noke4 = new Carta('Sigian', 'fuego', 6, 18)
const noke5 = new Carta('Reypeo', 'fuego', 12, 12)
const noke6 = new Carta('Mouvay', 'fuego', 18, 4)
const noke7 = new Carta('Buzayn', 'planta', 8, 15)
const noke8 = new Carta('Sienpi', 'planta', 11, 12)
const noke9 = new Carta('Elcogi', 'planta', 5, 20)
const noke10 = new Carta('Zusaso', 'roca', 13, 13)
const noke11 = new Carta('Inorza', 'roca', 8, 20)
const noke12 = new Carta('Butelu', 'roca', 7, 18)
const noke13 = new Carta('Isvuos', 'hielo', 15, 11)
const noke14 = new Carta('Nocyon', 'hielo', 10, 15)
const noke15 = new Carta('Soisar', 'hielo', 12, 12)
const noke16 = new Carta('Woceyr', 'normal', 13, 11)
const noke17 = new Carta('Esleir', 'normal', 12, 12)
const noke18 = new Carta('Sarife', 'normal', 11, 11)
const noke19 = new Carta('Saomua', 'tierra', 17, 7)
const noke20 = new Carta('Favaol', 'tierra', 12, 13)
const noke21 = new Carta('Woecuo', 'tierra', 8, 20)
const noke22 = new Carta('Ceriti', 'volador', 17, 8)
const noke23 = new Carta('Tedoma', 'volador', 10, 12)
const noke24 = new Carta('Heifai', 'volador', 10, 10)
const noke25 = new Carta('Mebemo', 'lucha', 10, 10)
const noke26 = new Carta('Lipoen', 'lucha', 11, 11)
const noke27 = new Carta('Fiuplo', 'lucha', 9, 9)

const ganadoresArray = []

const LocalStorageFn = () => {
    if (localStorage.length>0) {
        for (let i = 0; i < localStorage.length; i++) {
            ganadoresArray.push(localStorage.getItem(`campeon${i}`))
        }
    }
}
LocalStorageFn()

const elementalSync = (x, y, a, b, c, d) => {
    if (x.atributo == a) {
        if (y.atributo == b) {
            return x
        }
        if (y.atributo == c) {
            return x
        }
        if (x.atributo == d) {
            return x
        }
    }
    if (y.atributo == a) {
        if (x.atributo == b) {
            return y
        }
        if (x.atributo == c) {
            return y
        }
        if (x.atributo == d) {
            return y
        }
    }
}

const elemental = (x, y) => {
    let resultado = null
    if (elementalSync(x, y, 'agua', 'fuego', 'tierra')) {
        resultado = elementalSync(x, y, 'agua', 'fuego', 'tierra')
    }
    if (elementalSync(x, y, 'planta', 'agua', 'tierra')) {
        resultado = elementalSync(x, y, 'planta', 'agua', 'tierra')
    }
    if (elementalSync(x, y, 'fuego', 'planta', 'hielo')) {
        resultado = elementalSync(x, y, 'fuego', 'planta', 'hielo')
    }
    if (elementalSync(x, y, 'lucha', 'normal', 'roca')) {
        resultado = elementalSync(x, y, 'lucha', 'normal', 'roca')
    }
    if (elementalSync(x, y, 'roca', 'fuego', 'volador')) {
        resultado = elementalSync(x, y, 'roca', 'fuego', 'volador')
    }
    if (elementalSync(x, y, 'volador', 'planta', 'lucha')) {
        resultado = elementalSync(x, y, 'volador', 'planta', 'lucha')
    }
    if (elementalSync(x, y, 'hielo', 'planta', 'volador')) {
        resultado = elementalSync(x, y, 'hielo', 'planta', 'volador')
    }
    if (elementalSync(x, y, 'tierra', 'roca', 'fuego')) {
        resultado = elementalSync(x, y, 'tierra', 'roca', 'fuego')
    }
    return resultado
}
let puntosElemA = 0
let puntosElemB = 0
const elementalTransf = () => {
    if (elemental(arreglito[0], arreglito[1]) == arreglito[0]) {
        puntosElemA = (5)
    }
    if (elemental(arreglito[0], arreglito[1]) == arreglito[1]) {
        puntosElemB = (5)
    }
}

const fraseo = []


const form = document.getElementById('form')
const elementos = document.getElementsByTagName('#form input')


const boton1 = document.getElementById('boton1')
const boton2 = document.getElementById('boton2')
const boton3 = document.getElementById('boton3')
const boton4 = document.getElementById('boton4')
const boton5 = document.getElementById('boton5')
const boton6 = document.getElementById('boton6')
const boton7 = document.getElementById('boton7')
const boton8 = document.getElementById('boton8')
const boton9 = document.getElementById('boton9')
const boton10 = document.getElementById('boton10')
const boton11 = document.getElementById('boton11')
const boton12 = document.getElementById('boton12')
const boton13 = document.getElementById('boton13')
const boton14 = document.getElementById('boton14')
const boton15 = document.getElementById('boton15')
const boton16 = document.getElementById('boton16')
const boton17 = document.getElementById('boton17')
const boton18 = document.getElementById('boton18')
const boton19 = document.getElementById('boton19')
const boton20 = document.getElementById('boton20')
const boton21 = document.getElementById('boton21')
const boton22 = document.getElementById('boton22')
const boton23 = document.getElementById('boton23')
const boton24 = document.getElementById('boton24')
const boton25 = document.getElementById('boton25')
const boton26 = document.getElementById('boton26')
const boton27 = document.getElementById('boton27')
const carta1 = document.getElementById('carta1')
const carta2 = document.getElementById('carta2')
const carta3 = document.getElementById('carta3')
const carta4 = document.getElementById('carta4')
const carta5 = document.getElementById('carta5')
const carta6 = document.getElementById('carta6')
const carta7 = document.getElementById('carta7')
const carta8 = document.getElementById('carta8')
const carta9 = document.getElementById('carta9')
const carta10 = document.getElementById('carta10')
const carta11 = document.getElementById('carta11')
const carta12 = document.getElementById('carta12')
const carta13 = document.getElementById('carta13')
const carta14 = document.getElementById('carta14')
const carta15 = document.getElementById('carta15')
const carta16 = document.getElementById('carta16')
const carta17 = document.getElementById('carta17')
const carta18 = document.getElementById('carta18')
const carta19 = document.getElementById('carta19')
const carta20 = document.getElementById('carta20')
const carta21 = document.getElementById('carta21')
const carta22 = document.getElementById('carta22')
const carta23 = document.getElementById('carta23')
const carta24 = document.getElementById('carta24')
const carta25 = document.getElementById('carta25')
const carta26 = document.getElementById('carta26')
const carta27 = document.getElementById('carta27')



cambioColorStorage = []

function cambioColor(elemento) {
    if (cambioColorStorage.length < 2) {
        cambioColorStorage.push(elemento)
    }
}

let controlesA = document.getElementById('controles-a')
let controlesB = document.getElementById('controles-b')
controlesA.style.display = 'none'
controlesB.style.display = 'none'

function cambioColor2(elemento) {
    cambioColor(elemento)
    if (cambioColorStorage.length == 1) {
        cambioColorStorage[0].style.backgroundColor = "rgba(233, 211, 14, 0.3)"
    }
    if (cambioColorStorage.length == 2) {
        cambioColorStorage[1].style.backgroundColor = "rgba(233, 211, 14, 0.3)"
    }
    if (arreglito.length < 2) {
        controlesA.style.display = 'flex'
        textoConsola.innerHTML = '<li>'+ arreglito[0].nombre + '</li>'
    }
    if (arreglito.length == 2) {
        controlesB.style.display = 'flex'
        textoConsola.innerHTML = '<li>'+ arreglito[0].nombre +' vs '+ arreglito[1].nombre +'</li>'
    }

}

boton1.addEventListener('click', () => {
    if (arreglito.length < 2) {
        arreglito.push(noke1)
    }
})
boton2.addEventListener('click', () => {
    if (arreglito.length < 2) {
        arreglito.push(noke2)

    }
})
boton3.addEventListener('click', () => {
    if (arreglito.length < 2) {
        arreglito.push(noke3)
    }
})
boton4.addEventListener('click', () => {
    if (arreglito.length < 2) {
        arreglito.push(noke4)
    }
})
boton5.addEventListener('click', () => {
    if (arreglito.length < 2) {
        arreglito.push(noke5)
    }
})
boton6.addEventListener('click', () => {
    if (arreglito.length < 2) {
        arreglito.push(noke6)
    }
})
boton7.addEventListener('click', () => {
    if (arreglito.length < 2) {
        arreglito.push(noke7)
    }
})
boton8.addEventListener('click', () => {
    if (arreglito.length < 2) {
        arreglito.push(noke8)
    }
})
boton9.addEventListener('click', () => {
    if (arreglito.length < 2) {
        arreglito.push(noke9)
    }
})
boton10.addEventListener('click', () => {
    if (arreglito.length < 2) {
        arreglito.push(noke10)
    }
})
boton11.addEventListener('click', () => {
    if (arreglito.length < 2) {
        arreglito.push(noke11)
    }
})
boton12.addEventListener('click', () => {
    if (arreglito.length < 2) {
        arreglito.push(noke12)
    }
})
boton13.addEventListener('click', () => {
    if (arreglito.length < 2) {
        arreglito.push(noke13)
    }
})
boton14.addEventListener('click', () => {
    if (arreglito.length < 2) {
        arreglito.push(noke14)
    }
})
boton15.addEventListener('click', () => {
    if (arreglito.length < 2) {
        arreglito.push(noke15)
    }
})
boton16.addEventListener('click', () => {
    if (arreglito.length < 2) {
        arreglito.push(noke16)
    }
})
boton17.addEventListener('click', () => {
    if (arreglito.length < 2) {
        arreglito.push(noke17)
    }
})
boton18.addEventListener('click', () => {
    if (arreglito.length < 2) {
        arreglito.push(noke18)
    }
})
boton19.addEventListener('click', () => {
    if (arreglito.length < 2) {
        arreglito.push(noke19)
    }
})
boton20.addEventListener('click', () => {
    if (arreglito.length < 2) {
        arreglito.push(noke20)
    }
})
boton21.addEventListener('click', () => {
    if (arreglito.length < 2) {
        arreglito.push(noke21)
    }
})
boton22.addEventListener('click', () => {
    if (arreglito.length < 2) {
        arreglito.push(noke22)
    }
})
boton23.addEventListener('click', () => {
    if (arreglito.length < 2) {
        arreglito.push(noke23)
    }
})
boton24.addEventListener('click', () => {
    if (arreglito.length < 2) {
        arreglito.push(noke24)
    }
})
boton25.addEventListener('click', () => {
    if (arreglito.length < 2) {
        arreglito.push(noke25)
    }
})
boton26.addEventListener('click', () => {
    if (arreglito.length < 2) {
        arreglito.push(noke26)
    }
})
boton27.addEventListener('click', () => {
    if (arreglito.length < 2) {
        arreglito.push(noke27)
    }
})



let barraDeVidaA = document.getElementById('barra-de-vida-a')
barraDeVidaA.innerHTML = `100`
barraDeVidaA.style.width = '100px'
barraDeVidaA.style.backgroundColor = 'red'
let barraDeVidaB = document.getElementById('barra-de-vida-b')
barraDeVidaB.innerHTML = `100`
barraDeVidaB.style.width = '100px'
barraDeVidaB.style.backgroundColor = 'red'
/*+++++++++++++++++++++++++++++++ */

let proteccionVarA = 0
let proteccionVarB = 0
const protBotonA = document.getElementById('protegerse-a')
const protBotonB = document.getElementById('protegerse-b')

protBotonA.addEventListener('click', () => {
    if (movEnEspera.length < 1) {
        movEnEspera.push(2)
        proteccionVarA = arreglito[0].defensa / 26.7
    }
})
protBotonB.addEventListener('click', () => {
    if (movEnEspera.length == 1) {
        movEnEspera.push(2)
        proteccionVarB = arreglito[1].defensa / 26.7
    }
})


let textoConsola = document.getElementById('text')

const deselecionarJs = () => {
    controlesA.style.display = 'none'
    controlesB.style.display = 'none'
    arreglito[0].salud = 100
    arreglito[1].salud = 100
    barraDeVidaA.innerHTML = `100`
    barraDeVidaB.innerHTML = `100`
    barraDeVidaA.style.width = `${arreglito[0].salud}px`
    barraDeVidaB.style.width = `${arreglito[1].salud}px`
    arreglito.splice(0, 2)
    cambioColorStorage[0].style.backgroundColor = "transparent"
    cambioColorStorage[1].style.backgroundColor = "transparent"
    cambioColorStorage.splice(0, 2)
}
const deselecionar = () => {
    deselecionarJs()
    textoConsola.innerHTML = ''
}
const ganadora = () => {
    if (arreglito[0].salud <= 0 || arreglito[1].salud <= 0) {
        if (arreglito[0].salud <= 0 && arreglito[1].salud <= 0) {
            textoConsola.innerHTML = '<li>Ha ganado ' + arreglito[0].nombre + '!</li>'
        } else {
            if (arreglito[0].salud <= 0) {
                textoConsola.innerHTML = '<li>Ha ganado ' + arreglito[1].nombre + '!</li>'
                localStorage.setItem(`campeon${ganadoresArray.length}`, `${arreglito[1].nombre}`)
            }
            if (arreglito[1].salud <= 0) {
                textoConsola.innerHTML = '<li>Ha ganado ' + arreglito[0].nombre + '!</li>'
                localStorage.setItem(`campeon${ganadoresArray.length}`, `${arreglito[0].nombre}`)
            }
        }
        deselecionarJs()

    }
}


    let ganadoresFinal = ganadoresArray.map(item =>{
        return '<li>'+ item +'</li>'
    })

const campeonesList = document.getElementById('campeones-list')
const loadCampeones = () => {
    campeonesList.innerHTML = ganadoresFinal.join('')
}
loadCampeones()


function saludGestionA(damage) {
    if (damage == 10) {
        if (Math.random() > (0.1 + proteccionVarA)) {
            barraDeVidaA.style.width = `${arreglito[0].salud-damage}px`
            arreglito[0].salud -= damage + (arreglito[1].ataque / 2)
            barraDeVidaA.innerHTML = `${arreglito[0].salud}`
        } else {
            textoConsola.innerHTML += '<li>' + arreglito[1].nombre + ' Ha fallado el ataque!!</li>'
        }

    }
    if (damage > 10) {
        if (Math.random() > (0.25 + proteccionVarA)) {
            barraDeVidaA.style.width = `${arreglito[0].salud-damage}px`
            arreglito[0].salud -= damage + (arreglito[1].ataque / 2)
            barraDeVidaA.innerHTML = `${arreglito[0].salud}`
        } else {
            textoConsola.innerHTML += '<li>' + arreglito[1].nombre + ' Ha fallado el ataque!!</li>'
        }

    }
    proteccionVarB = 0
}

function saludGestionB(damage) {
    if (damage == 10) {
        if (Math.random() > (0.1 + proteccionVarB)) {
            barraDeVidaB.style.width = `${arreglito[1].salud-damage}px`
            arreglito[1].salud -= damage + (arreglito[0].ataque / 2)
            barraDeVidaB.innerHTML = `${arreglito[1].salud}`
        } else {
            textoConsola.innerHTML += '<li>' + arreglito[0].nombre + ' Ha fallado el ataque!!</li>'
        }
    }
    if (damage > 10) {
        if (Math.random() > (0.25 + proteccionVarB)) {
            barraDeVidaB.style.width = `${arreglito[1].salud-damage}px`
            arreglito[1].salud -= damage + (arreglito[0].ataque / 2)
            barraDeVidaB.innerHTML = `${arreglito[1].salud}`
        } else {
            textoConsola.innerHTML += '<li>' + arreglito[0].nombre + ' Ha fallado el ataque!!</li>'
        }
    }
    proteccionVarA = 0
}
let movEnEspera = []
let movRecibido = []

const atqBotonA = document.getElementById('ataque-normal-a')
const atqEspBotonA = document.getElementById('ataque-esp-a')
const atqBotonB = document.getElementById('ataque-normal-b')
const atqEspBotonB = document.getElementById('ataque-esp-b')



atqBotonA.addEventListener('click', () => {
    if (movEnEspera.length < 1) {
        movEnEspera.push(0)
    }
})

atqEspBotonA.addEventListener('click', () => {
    if (movEnEspera.length < 1) {
        movEnEspera.push(1)
    }
})
atqBotonB.addEventListener('click', () => {
    if (movEnEspera.length == 1) {
        movEnEspera.push(0)
    }
})

atqEspBotonB.addEventListener('click', () => {
    if (movEnEspera.length == 1) {
        movEnEspera.push(1)
    }
})
form.onsubmit = (a) => {
    a.preventDefault()
    textoConsola.innerHTML = ''
    movRecibido = movEnEspera
    movEnEspera = []
    elementalTransf()
    if (movRecibido.length == 2 && arreglito.length == 2) {
        console.log(proteccionVarB)
        console.log(proteccionVarA)
        switch (movRecibido[0]) {
            case 0:
                saludGestionB(10)
                break;
            case 1:
                saludGestionB(15 + puntosElemA)
                break;
            case 2:
                saludGestionB(0)
                break;
        }
        switch (movRecibido[1]) {
            case 0:
                saludGestionA(10)
                break;
            case 1:
                saludGestionA(15 + puntosElemB)
                break;
            case 2:
                saludGestionA(0)
                break;
        }
    }
    ganadora()
    puntosElemB = 0
    puntosElemA = 0
}