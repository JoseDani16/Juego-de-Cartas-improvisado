class Carta {
    constructor(nombre, atributo, ataque, defensa) {
        this.nombre = nombre
        this.atributo = atributo
        this.ataque = ataque
        this.defensa = defensa
    }
}
let arreglito = []

const carta1 = new Carta('Veyvur', 'agua', 11, 11)
const carta2 = new Carta('Roxaen', 'agua', 16, 6)
const carta3 = new Carta('Fauhye', 'agua', 11, 13)
const carta4 = new Carta('Sigian', 'fuego', 6, 18)
const carta5 = new Carta('Reypeo', 'fuego', 12, 12)
const carta6 = new Carta('Mouvay', 'fuego', 18, 4)
const carta7 = new Carta('Buzayn', 'planta', 8, 15)
const carta8 = new Carta('Sienpi', 'planta', 11, 12)
const carta9 = new Carta('Elcogi', 'planta', 5, 20)
const carta10 = new Carta('Zusaso', 'roca', 13, 13)
const carta11 = new Carta('Inorza', 'roca', 8, 20)
const carta12 = new Carta('Butelu', 'roca', 7, 18)
const carta13 = new Carta('Isvuos', 'hielo', 15, 11)
const carta14 = new Carta('Nocyon', 'hielo', 10, 15)
const carta15 = new Carta('Soisar', 'hielo', 12, 12)
const carta16 = new Carta('Woceyr', 'normal', 13, 11)
const carta17 = new Carta('Esleir', 'normal', 12, 12)
const carta18 = new Carta('Sarife', 'normal', 11, 11)
const carta19 = new Carta('Saomua', 'tierra', 17, 7)
const carta20 = new Carta('Favaol', 'tierra', 12, 13)
const carta21 = new Carta('Woecuo', 'tierra', 8, 20)
const carta22 = new Carta('Ceriti', 'volador', 17, 8)
const carta23 = new Carta('Tedoma', 'volador', 10, 12)
const carta24 = new Carta('Heifai', 'volador', 10, 10)
const carta25 = new Carta('Mebemo', 'lucha', 10, 10)
const carta26 = new Carta('Lipoen', 'lucha', 11, 11)
const carta27 = new Carta('Fiuplo', 'lucha', 9, 9)

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
            for (let i = 0; i < (dfsVsDfs(x, y) - 1); i++) {
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
            for (let i = 0; i < 5; i++) {
                puntos1.push(elemental(x, y).nombre)
            }
            break;

        case false:
            if (elemental(x, y) == y) {
                for (let i = 0; i < 5; i++) {
                    puntos2.push(y.nombre)
                }
            } else {}
            break;
    }
}
const definitiva = (x, y) => {
    aporahora(x, y)
    switch (puntos1.length > puntos2.length) {
        case true:
            fraseo.push('Ha ganado  ' + x.nombre + '! ' + puntos1.length + ' puntos a ' + puntos2.length)
            break;

        case false:
            if (puntos1.length < puntos2.length) {
                fraseo.push('Ha ganado ' + y.nombre + '! ' + puntos2.length + ' puntos a ' + puntos1.length)

            } else {
                fraseo.push(x.nombre + ' y ' + y.nombre + ' han empatado! ' + puntos1.length + ' puntos a ' + puntos2.length)
            }
            break;
    }
}
const form = document.getElementById('form')
const elementos = document.querySelectorAll('#form input')

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


boton1.addEventListener('click', () => {
    if (arreglito.length < 2) {
        arreglito.push(carta1)
    }

})
boton2.addEventListener('click', () => {
    if (arreglito.length < 2) {
        arreglito.push(carta2)
    }

})
boton3.addEventListener('click', () => {
    if (arreglito.length < 2) {
        arreglito.push(carta3)
    }

})
boton4.addEventListener('click', () => {
    if (arreglito.length < 2) {
        arreglito.push(carta4)
    }

})
boton5.addEventListener('click', () => {
    if (arreglito.length < 2) {
        arreglito.push(carta5)
    }

})
boton6.addEventListener('click', () => {
    if (arreglito.length < 2) {
        arreglito.push(carta6)
    }

})
boton7.addEventListener('click', () => {
    if (arreglito.length < 2) {
        arreglito.push(carta7)
    }

})
boton8.addEventListener('click', () => {
    if (arreglito.length < 2) {
        arreglito.push(carta8)
    }

})
boton9.addEventListener('click', () => {
    if (arreglito.length < 2) {
        arreglito.push(carta9)
    }

})
boton10.addEventListener('click', () => {
    if (arreglito.length < 2) {
        arreglito.push(carta10)
    }

})
boton11.addEventListener('click', () => {
    if (arreglito.length < 2) {
        arreglito.push(carta11)
    }

})
boton12.addEventListener('click', () => {
    if (arreglito.length < 2) {
        arreglito.push(carta12)
    }

})
boton13.addEventListener('click', () => {
    if (arreglito.length < 2) {
        arreglito.push(carta13)
    }

})
boton14.addEventListener('click', () => {
    if (arreglito.length < 2) {
        arreglito.push(carta14)
    }

})
boton15.addEventListener('click', () => {
    if (arreglito.length < 2) {
        arreglito.push(carta15)
    }

})
boton16.addEventListener('click', () => {
    if (arreglito.length < 2) {
        arreglito.push(carta16)
    }

})
boton17.addEventListener('click', () => {
    if (arreglito.length < 2) {
        arreglito.push(carta17)
    }

})
boton18.addEventListener('click', () => {
    if (arreglito.length < 2) {
        arreglito.push(carta18)
    }

})
boton19.addEventListener('click', () => {
    if (arreglito.length < 2) {
        arreglito.push(carta19)
    }

})
boton20.addEventListener('click', () => {
    if (arreglito.length < 2) {
        arreglito.push(carta20)
    }

})
boton21.addEventListener('click', () => {
    if (arreglito.length < 2) {
        arreglito.push(carta21)
    }

})
boton22.addEventListener('click', () => {
    if (arreglito.length < 2) {
        arreglito.push(carta22)
    }

})
boton23.addEventListener('click', () => {
    if (arreglito.length < 2) {
        arreglito.push(carta23)
    }

})
boton24.addEventListener('click', () => {
    if (arreglito.length < 2) {
        arreglito.push(carta24)
    }

})
boton25.addEventListener('click', () => {
    if (arreglito.length < 2) {
        arreglito.push(carta25)
    }

})
boton26.addEventListener('click', () => {
    if (arreglito.length < 2) {
        arreglito.push(carta26)
    }

})
boton27.addEventListener('click', () => {
    if (arreglito.length < 2) {
        arreglito.push(carta27)
    }
})

let textoConsola = document.getElementById('text')

form.onsubmit = (a) => {
    console.log(arreglito)
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
    textoConsola.innerHTML = '<li>' + arreglito[0].nombre + ' vs ' + arreglito[1].nombre + '</li>' + '/n' + textTemplate.join('')
    arreglito.splice(0, 2)
}