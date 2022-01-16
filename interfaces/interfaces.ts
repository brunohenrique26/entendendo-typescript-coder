interface Humano {
    nome: string
    idade?: number
    [prop: string]: any
}

function saudarComOla(pessoa: Humano) {
    console.log('Olá,' + pessoa.nome)
}

function mudarNome (pessoa: Humano) {
    pessoa.nome = 'Joana'

}

const pessoa = {
    nome: 'Jõao',
    idade: 27
}

saudarComOla(pessoa)
mudarNome(pessoa)
saudarComOla({nome: 'Jonas', idade:27, altura: 175})