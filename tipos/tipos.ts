let nome = 'jõao'
console.log(nome)

let funcionario: { 
    supervisores: string[]
    baterPonto: (hora: number) => string 
} = {
    supervisores: ['Bruno', 'Jhow'],
    baterPonto: (horario: number): string => {
        if(horario <= 8) {
            return 'Ponto Normal' }
            else {
               return 'Fora do Horario'
            }
        }
    }
console.log(funcionario.supervisores)
console.log(funcionario.baterPonto(8))