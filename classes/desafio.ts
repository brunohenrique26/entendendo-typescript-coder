// Exerc団io 1 - Classe
class Moto { 
    public velocidade: number = 0 
    constructor(public nome: string){

    }
   
 
    buzinar() {
        console.log('Toooooooooot!')
    }
 
    acelerar(delta: number) {
        this.velocidade = this.velocidade + delta
    }
}
 
const moto = new Moto('Ducati')
moto.buzinar()
console.log(moto.velocidade)
moto.acelerar(30)
console.log(moto.velocidade)
 
// Exerc団io 2 - Heran溝
abstract class Objeto2D {

    constructor(public base: number = 0, public altura: number =0) {

    }

    abstract area(): number

}

class Retangulo extends Objeto2D {
    area(): number {
        return this.base * this.altura
    }
}

const retangulo = new Retangulo(5,7)
retangulo.base = 10 
console.log(retangulo.area())


// var objeto2D = {
//     base: 0,
//     altura: 0
// }
 
// var retangulo = Object.create(objeto2D)
// retangulo.base = 5
// retangulo.altura = 7
// retangulo.area = function() {
//     return this.base * this.altura
// }
// console.log(retangulo.area())
 
// Exerc団io 3 - Getters & Setters correto
// class Estagiario {
//     private_primeiroNome: string = ''

//     get primeiroNome(): string {
//         return this.private_primeiroNome
//     }

//     set primeiroNome(valor) {
//         if (valor.length >= 3) {
//             this.private_primeiroNome = valor
//         } else {
//             this.primeiroNome = ''
//         }
//       }
//     }

// const estagiario = new Estagiario
// console.log(estagiario.primeiroNome)
// estagiario.primeiroNome = 'Le'
// console.log(estagiario.primeiroNome)
// estagiario.primeiroNome = 'Leonardo'
// console.log(estagiario.primeiroNome)


// Resposta errada

// var estagiario = {
//     _primeiroNome: ''
// }
 
// Object.defineProperty(estagiario, 'primeiroNome', {
//     get: function () {
//         return this._primeiroNome
//     },
//     set: function (valor) {
//         if (valor.length >= 3) {
//             this._primeiroNome = valor
//         } else {
//             this._primeiroNome = ''
//         }
//     },
//     enumerable: true,
//     configurable: true
// })
 
// console.log(estagiario.primeiroNome)
// estagiario.primeiroNome = 'Le'
// console.log(estagiario.primeiroNome)
// estagiario.primeiroNome = 'Leonardo'
// console.log(estagiario.primeiroNome)
