

function logarClasse(construtor: Function) {
    console.log(construtor)
}

function decoratorVazio(_: Function) {}

function logarClasseSe(valor: boolean) {
    return valor ? logarClasse : decoratorVazio
}

function decorator(obj: { a: string, b: number}) {
    return function(_: Function ): void {
        console.log(obj.a + '' + obj.b)
    }
}


type Construtor = { new(...args: any[]): {} }

function logarObjeto(construtor: Construtor) {
    console.log('Carregando...')
    return class extends construtor {
        constructor(...args: any[]) {
            console.log('Antes...')
            super(...args)
            console.log('Depois...')
        }
    }
}

// new Eletrodomestico()
// new Eletrodomestico()


//Add método com decorator de classe
interface Eletrodomestico {
    imprimir?(): void
}

//@logarClasse
//@logarClasseSe
//@decorator({ a: 'Teste', b: 123})
//@logarObjeto
class Eletrodomestico {
    constructor() {
        console.log('novo...')
    }
}

function imprimivel(construtor: Function) {
    construtor.prototype.imprimir = function() {
        console.log(this)
    }
}

//(<any>new Eletrodomestico()).imprimir()
const eletro = new Eletrodomestico()
eletro.imprimir && eletro.imprimir()