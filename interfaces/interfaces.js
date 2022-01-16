"use strict";
function saudarComOla(pessoa) {
    console.log('Olá,' + pessoa.nome);
}
function mudarNome(pessoa) {
    pessoa.nome = 'Joana';
}
const pessoa = {
    nome: 'Jõao',
    idade: 27
};
saudarComOla(pessoa);
mudarNome(pessoa);
saudarComOla({ nome: 'Jonas', idade: 27, altura: 175 });
//# sourceMappingURL=interfaces.js.map