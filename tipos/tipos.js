"use strict";
let nome = 'jõao';
console.log(nome);
let funcionario = {
    supervisores: ['Bruno', 'Jhow'],
    baterPonto: (horario) => {
        if (horario <= 8) {
            return 'Ponto Normal';
        }
        else {
            return 'Fora do Horario';
        }
    }
};
let funcionario2 = {
    supervisores: ['Carlos', 'Felipe'],
    baterPonto: (horario) => {
        if (horario <= 8) {
            return 'Ponto Normal';
        }
        else {
            return 'Fora do Horario';
        }
    }
};
console.log(funcionario.supervisores);
console.log(funcionario.baterPonto(8));
// Union Types
let nota = 10;
console.log(`Minha nota é ${nota}`);
nota = '10';
console.log(`Minha nota é ${nota}`);
// Never
function falha(msg) {
    throw new Error(msg);
}
const produto = {
    nome: 'Sabão',
    preco: 4,
    validarProduto() {
        if (!this.nome || this.nome.trim().length == 0) {
            falha('Precisa ter um nome');
        }
        if (this.preco <= 0) {
            falha('Preco inválido!');
        }
    }
};
produto.validarProduto();
let contato = {
    nome: 'Bruno',
    tel1: '87286138',
    tel2: null
};
console.log(contato.nome);
console.log(contato.tel1);
console.log(contato.tel2);
let contaBancaria = {
    saldo: 3456,
    depositar(valor) {
        this.saldo += valor;
    }
};
let correntista = {
    nome: 'Bruno',
    contaBancaria: contaBancaria,
    contatos: ['34813105', '33792256']
};
correntista.contaBancaria.depositar(3000);
console.log(correntista);
//# sourceMappingURL=tipos.js.map