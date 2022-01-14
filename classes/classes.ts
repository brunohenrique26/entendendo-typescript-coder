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

}

const f40 = new Ferrari('ferrari', 'f40', 324)
console.log(`${f40.marca} ${f40.modelo}`)
console.log(f40.acelerar())
console.log(f40.frear())