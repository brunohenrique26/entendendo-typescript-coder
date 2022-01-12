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