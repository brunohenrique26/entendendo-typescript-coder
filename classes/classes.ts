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