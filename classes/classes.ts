class Data {
    dia: number
    mes: number
    ano: number

    constructor(dia :number = 26, mes: number = 2, ano: number = 1991) {
        this.dia = dia
        this.mes= mes   
        this.ano = ano
    }
            
}

const aniversario = new Data(26,2,1991)
console.log(aniversario)

// ok
class Data1 {

    constructor(public dia :number = 26, public mes: number = 2, public ano: number = 1991) {

    }
            
}

const aniversario1 = new Data1(26,2,1991)
console.log(aniversario1)

class Produto {
    constructor(public nome: string , public preco: number , public desconto: number = 0 ){
        
    }

    public precoComDesconto(): number {
        return (this.preco * this.desconto)

    }
    
    public resumo(): string {
        return `${this.nome} custa R$ ${this.precoComDesconto()} (${this.desconto * 10})}`

        }
        
    }


const celular = new Produto('iphone', 100)
const celular2 = new Produto('Samsung', 10, 0)
celular2.desconto = 0.06
console.log(celular2.resumo())

class Carro {
    private  velocidadeAtual: number = 0
    constructor(public marca: string, public modelo: string,
        private velocidadeMaxima: number = 200) {
            
        }

        protected alterarVelocidade(delta: number): number {
            const novaVelocidade = this.velocidadeAtual + delta
            const velocidadeValida = novaVelocidade >= 0 
            && novaVelocidade <= this.velocidadeMaxima

            if(velocidadeValida) {
                this.velocidadeAtual = novaVelocidade
            }else {
                this.velocidadeAtual = delta >0 ? this.velocidadeMaxima: 0
            }
            return this.velocidadeAtual
        }

        public acelerar(): number {
            return this.alterarVelocidade(5)
        }

        public frear(): number {
            return this.alterarVelocidade(-5)
        }

}

const carro1 = new Carro('For', 'Ka', 185)
// console.log(carro1.acelerar())
// console.log(carro1.acelerar())
// console.log(carro1.acelerar())

// Henrança
class Ferrari extends Carro {

constructor(modelo: string, velocidadeMaxima: number){
    super('Ferrari', modelo, velocidadeMaxima)
}

    public acelerar(): number {
        return this.alterarVelocidade(20)
    }

    public frear(): number {
        return this.alterarVelocidade(-15)
    }

}

const f40 = new Ferrari( 'f40', 324)
console.log(`${f40.marca} ${f40.modelo}`)
console.log(f40.acelerar())
console.log(f40.frear())

//Getters & Setters
class Pessoa {
    private _idade: number = 0

    get idade(): number {
        return this._idade
    }

    set idade(valor: number) {
        if(valor >= 0 && valor <= 120) {
            this._idade = valor
        }
    }
}

const pessoa1 = new Pessoa
pessoa1.idade = 10
console.log(pessoa1)

// Atributos e Metódos Staticos

class Matematica {
    static PI: number = 3.1416

    static areaCirc(raio:number): number {
        return this.PI * raio * raio
    }
}

// const m1 = new Matematica
// m1.PI = 4.2
// console.log(m1.areaCirc(4))

// console.log(new Matematica().areaCirc(4))
console.log(Matematica.areaCirc(4))

//Classe abstrata

abstract class Calculo {
    protected resultado: number =0

    abstract executar(...numeros: number[]): void

    getResultado(): number {
        return this.resultado
    }
}

class Soma extends Calculo {
    executar(...numeros: number[]): void {
        this.resultado = numeros.reduce((t, a) => t + a)
    }
}

class Multiplicacao extends Calculo {
    executar(...numeros: number[]): void {
        this.resultado = numeros.reduce((t, a) => t + a)
    }
}

let c1 = new Soma()
c1.executar(2,3,4,5)
console.log(c1.getResultado())