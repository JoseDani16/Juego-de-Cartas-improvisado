class Carta {
    constructor(nombre, atributo, ataque, defensa) {
        this.nombre = nombre
        this.atributo = atributo
        this.ataque = ataque
        this.defensa = defensa
    }
}


const carta1 = new Carta('Squirtle', 'agua', 10, 11)
const carta2 = new Carta('Charmander', 'fuego', 16, 5)
const carta3 = new Carta('Bulbasaur', 'planta', 9, 13)


const elemental = (x, y) => {
    if (x.atributo == 'agua') {
        switch (y.atributo) {
            case 'planta':
                return y
                break;
            case 'fuego':
                return x
                break;
            default:
                return 'empate'
                break;
        }
    }
    if (x.atributo == 'fuego') {
        switch (y.atributo) {
            case 'agua':
                return y
                break;
            case 'planta':
                return x
                break;
            default:
                return 'empate'
                break;
        }
    }
    if (x.atributo == 'planta') {
        switch (y.atributo) {
            case 'fuego':
                return y
                break;
            case 'agua':
                return x
                break;
            default:
                return 'empate'
                break;
        }
    }
}
const atqVsAtq = (x, y) => {
    switch (x.ataque > y.ataque) {
        case true:
            return x.ataque - y.ataque
            break;
        case false:
            if (x.ataque < y.ataque) {
                return y.ataque - x.ataque

            } else {
                return 0
            }
            break;
    }

}
const atqVsAtq2 = (x, y) => {
    switch (x.ataque > y.ataque) {
        case true:
            return x
            break;
        case false:
            if (x.ataque < y.ataque) {
                return y
            } else {
                return 0
            }
            break;
    }
}
const dfsVsDfs = (x, y) => {
    switch (x.defensa > y.defensa) {
        case true:
            return x.defensa - y.defensa
            break;
        case false:
            if (x.defensa < y.defensa) {
                return y.defensa - x.defensa

            } else {
                return 0
            }
            break;
    }

}
const dfsVsDfs2 = (x, y) => {
    switch (x.defensa > y.defensa) {
        case true:
            return x
            break;
        case false:
            if (x.defensa < y.defensa) {
                return y
            } else {
                return 0
            }
            break;
    }
}


const puntos1 = []
const puntos2 = []
const fraseo = []

const aporahora = (x, y) => {
    switch (atqVsAtq2(x, y)) {
        case x:
            for (let i = 0; i < atqVsAtq(x, y); i++) {
                puntos1.push(atqVsAtq2(x, y).nombre)
            }
            fraseo.push(x.nombre + ' tiene mas ataque!!')
            break;

        case y:
            for (let i = 0; i < atqVsAtq(x, y); i++) {
                puntos2.push(y.nombre)
            }
            fraseo.push(y.nombre + ' tiene mas ataque!!')
            break;
        case 0:
            fraseo.push(x.nombre + ' y ' + y.nombre + ' tienen el mismo ataque!')
            break
    }
    switch (dfsVsDfs2(x, y)) {
        case x:
            for (let i = 0; i < dfsVsDfs(x, y); i++) {
                puntos1.push(dfsVsDfs2(x, y).nombre)
            }
            fraseo.push(x.nombre + ' tiene mas defensa!!')
            break;
        case y:
            for (let i = 0; i < dfsVsDfs(x, y); i++) {
                puntos2.push(y.nombre)
            }
            fraseo.push(y.nombre + ' tiene mas defensa!!')
            break;
        case 0:
            fraseo.push(x.nombre + ' y ' + y.nombre + ' tienen la misma defensa!')
            break
    }
    switch (elemental(x, y) == x) {
        case true:
            for (let i = 0; i < 3; i++) {
                puntos1.push(elemental(x, y).nombre)
            }
            break;

        case false:
            if (elemental(x, y) == y) {
                for (let i = 0; i < 3; i++) {
                    puntos2.push(y.nombre)
                }
            } else {
            }
            break;
    }
}
let arreglito = []
const definitiva = (x, y) => {
    aporahora(x, y)
    switch (puntos1.length > puntos2.length) {
        case true:
            fraseo.push('Ha ganado  ' + x.nombre+'! '+puntos1.length+' puntos a '+puntos2.length)
            break;

        case false:
            if (puntos1.length < puntos2.length) {
                fraseo.push('Ha ganado ' + y.nombre+'! '+puntos2.length+' puntos a '+puntos1.length)

            } else {
                fraseo.push(x.nombre + ' y ' + y.nombre + ' han empatado! '+puntos1.length+' puntos a '+puntos2.length)
            }
            break;
    }
}
const form = document.getElementById('form')
const elementos = document.querySelectorAll('#form input')

const boton1 = document.getElementById('boton1')
const boton2 = document.getElementById('boton2')
const boton3 = document.getElementById('boton3')

boton1.addEventListener('click', () => {
    if (arreglito.length < 2) {
        arreglito.push(carta1)
    }
    textoConsola.innerHTML = '<li>'+arreglito[0].nombre+' vs '+arreglito[1].nombre+'</li>'
})
boton2.addEventListener('click', () => {
    if (arreglito.length < 2) {
        arreglito.push(carta2)
    }
    textoConsola.innerHTML = '<li>'+arreglito[0].nombre+' vs '+arreglito[1].nombre+'</li>'
})
boton3.addEventListener('click', () => {
    if (arreglito.length < 2) {
        arreglito.push(carta3)
    }
    textoConsola.innerHTML = '<li>'+arreglito[0].nombre+' vs '+arreglito[1].nombre+'</li>'
})

let textoConsola = document.getElementById('text')

form.onsubmit = (a) => {
    puntos1.splice(0, puntos1.length)
    puntos2.splice(0, puntos2.length)
    fraseo.splice(0, fraseo.length)
    a.preventDefault()
    if (arreglito.length == 2) {
        definitiva(arreglito[0], arreglito[1])
    } else {
        fraseo.push('faltan oponentes!')
    }
    
    const textTemplate = fraseo.map((x) => {
        return '<li>' + x + '</li>';
    })
    textoConsola.innerHTML = '<li>'+arreglito[0].nombre+' vs '+arreglito[1].nombre+'</li>'+'/n'+textTemplate.join('')
    arreglito.splice(0, 2)
}