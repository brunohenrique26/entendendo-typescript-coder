let nome = 'jõao'
console.log(nome)

type funcionario = {supervisores: string[]
    baterPonto: (hora: number) => string }

let funcionario: funcionario = {
    supervisores: ['Bruno', 'Jhow'],
    baterPonto: (horario: number): string => {
        if(horario <= 8) {
            return 'Ponto Normal' }
            else {
               return 'Fora do Horario'
            }
        }
    }

    let funcionario2: funcionario = {
        supervisores: ['Carlos', 'Felipe'],
        baterPonto: (horario: number): string=> {
            if(horario <= 8) {
                return 'Ponto Normal' }
                else {
                   return 'Fora do Horario'
                }
            }
        }
console.log(funcionario.supervisores)
console.log(funcionario.baterPonto(8))

// Union Types

let nota: number | string = 10
console.log(`Minha nota é ${nota}`)
nota = '10'
console.log(`Minha nota é ${nota}`)

// Never

function falha(msg: string): never {
    throw new Error(msg)
}

const produto = {
    nome: 'Sabão',
    preco: 4,
    validarProduto() {
        if(!this.nome || this.nome.trim().length == 0 ) {
            falha('Precisa ter um nome')
        }if(this.preco <= 0) {
            falha('Preco inválido!')
        }

    }
}

produto.validarProduto()

type contato = {
    nome: string,
    tel1: string,
    tel2: string | null
}

let contato: contato = {
    nome: 'Bruno',
    tel1: '87286138',
    tel2: null
}

console.log(contato.nome)
console.log(contato.tel1)
console.log(contato.tel2)

type contaBancaria = {
    saldo: number,
    depositar: (valor: number) => void 
}

let contaBancaria: contaBancaria = {
    saldo: 3456,
    depositar(valor: number) {
        this.saldo += valor
    }
}

type correntista = {
    nome: string,
    contaBancaria: contaBancaria,
    contatos: string[]
}

let correntista: correntista = {
    nome: 'Bruno',
    contaBancaria: contaBancaria,
    contatos: ['34813105', '33792256']
} 

correntista.contaBancaria.depositar(3000);
console.log(correntista)