

function logarClasse(construtor: Function) {
    console.log(construtor)
}

function decoratorVazio(_: Function) { }

function logarClasseSe(valor: boolean) {
    return valor ? logarClasse : decoratorVazio
}

function decorator(obj: { a: string, b: number }) {
    return function (_: Function): void {
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
    construtor.prototype.imprimir = function () {
        console.log(this)
    }
}

//(<any>new Eletrodomestico()).imprimir()
const eletro = new Eletrodomestico()
eletro.imprimir && eletro.imprimir()

// Decorator em metodos
class ContaCorrente {
    private saldo: number
    constructor(saldo: number) {
        this.saldo = saldo
    }

    @congelar
    sacar(valor: number) {
        if (valor <= this.saldo) {
            this.saldo -= valor
            return true
        } else {
            return false
        }
    }

    @congelar
    getSaldo() {
        return this.saldo
    }
}

const cc = new ContaCorrente(10248.57)
cc.sacar(500)
console.log(cc.getSaldo())

// cc.getSaldo = function(){
//     return this['saldo'] + 700
// }
console.log(cc.getSaldo())

//Object,freeze()
function congelar(alvo: any, nomeMetodo: string, descritor: PropertyDescriptor) {
    console.log(alvo)
    console.log(nomeMetodo)
    descritor.writable = false
}

function naoNegativo(alvo: any, nomePropriedade: string) {
    delete alvo[nomePropriedade]
    Object.defineProperty(alvo, nomePropriedade, {
        get: function (): any {
            return alvo["_" + nomePropriedade]
        },
        set: function (valor: any): void {
            if (valor <= 0) {
                throw new Error('Saldo Inválido')
            } else {
                alvo["_" + nomePropriedade] = valor
            }
        }

    })
}