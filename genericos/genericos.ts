function echo(objeto: any) {
    return objeto
}

console.log(echo('João').length)
console.log(echo(27))
console.log(echo({ nome: 'João', idade: 27}))


// Usando Generics
function echo2<T>(objeto: T): T {
    return objeto
}

console.log(echo2('João').length)
console.log(echo2<number>(27))
console.log(echo({ nome: 'João', idade: 27}))

// Generics disponiveis na API

const avaliacoes: Array<number> = [10,9.3,7.7]
avaliacoes.push(8.4)
// avaliacoes.push('5.0)
console.log(avaliacoes)

//Array
function imprimir<T>(args: T[]) {
    args.forEach(elemento => console.log(elemento))
}

imprimir([1,2,3])
imprimir<number>([1,2,3])
imprimir<string>(['Ana', 'Bruno','Carlos'])
imprimir<{nome: string, idade: number}>([
    { nome: ' Fulano', idade: 22},
    { nome: 'Cicrano', idade: 23},
    { nome: 'Beltrano', idade: 24}
])

type Aluno = { nome: string, idade: number}
imprimir<Aluno>([
    { nome: ' Fulano', idade: 22},
    { nome: 'Cicrano', idade: 23},
    { nome: 'Beltrano', idade: 24}
])

// Tipo Generico
type Echo = <T>(data: T) => T
const chamarEcho: Echo = echo2
console.log(chamarEcho<string>('Algumas Coisa'))