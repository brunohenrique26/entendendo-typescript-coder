interface Humano {
    nome: string
    idade?: number
    [prop: string]: any
    saudar?(sobrenome: string): void
}

function saudarComOla(pessoa: Humano) {
    console.log('Olá,' + pessoa.nome)
}

function mudarNome (pessoa: Humano) {
    pessoa.nome = 'Joana'

}

const pessoa: Humano = {
    nome: 'Jõao',
    idade: 27,
    saudar(sobrenome: string) {
        console.log('Olá, meu nome é '
        + this.nome + ' ' + sobrenome)
    }
}

saudarComOla(pessoa)
mudarNome(pessoa)
// saudarComOla({nome: 'Jonas', idade:27, altura: 175})
pessoa.saudar('Bruno')

// Usando classes ..
class Cliente implements Humano {
    nome: string = ''
    ultimaCompra: Date = new Date
    saudar(sobrenome: string) {
        console.log('Olá, meu nome é '
        + this.nome + ' ' + sobrenome)
    }
}

const meuCliente = new Cliente()
meuCliente.nome = 'Han'
saudarComOla(meuCliente)
meuCliente.saudar('Solo')
console.log(meuCliente.ultimaCompra)

// Interface Função


interface FuncaoCalculo {
    (a: number, b: number): number
}

let potencia: FuncaoCalculo

potencia= function (base: number, exp: number): number {
    return Array(exp).fill(base).reduce((t,a) => t * a)
}

console.log(potencia(3,10))
console.log(Math.pow(3,10))
console.log(3**10)

// Herança

interface A {
    a(): void
}

interface B {
    b(): void
}

interface ABC extends A,B {
    c(): void
}

class RealAB implements A, B {
    a(): void {}
    b(): void {}
}

class RealABC implements ABC {
    a(): void {}
    b(): void {}
    c(): void {}
}

abstract class AbstrataABD implements A,B {
    a(): void {}
    b(): void {}
    abstract d(): void
}