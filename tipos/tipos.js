"use strict";
var nome = 'jõao';
console.log(nome);
var funcionario = {
    supervisores: ['Bruno', 'Jhow'],
    baterPonto: function (horario) {
        if (horario <= 8) {
            return 'Ponto Normal';
        }
        else {
            return 'Fora do Horario';
        }
    }
};
var funcionario2 = {
    supervisores: ['Carlos', 'Felipe'],
    baterPonto: function (horario) {
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
var nota = 10;
console.log("Minha nota \u00E9 " + nota);
nota = '10';
console.log("Minha nota \u00E9 " + nota);
// Never
function falha(msg) {
    throw new Error(msg);
}
var produto = {
    nome: 'Sabão',
    preco: 4,
    validarProduto: function () {
        if (!this.nome || this.nome.trim().length == 0) {
            falha('Precisa ter um nome');
        }
        if (this.preco <= 0) {
            falha('Preco inválido!');
        }
    }
};
produto.validarProduto();
var contato = {
    nome: 'Bruno',
    tel1: '87286138',
    tel2: null
};
console.log(contato.nome);
console.log(contato.tel1);
console.log(contato.tel2);
var contaBancaria = {
    saldo: 3456,
    depositar: function (valor) {
        this.saldo += valor;
    }
};
var correntista = {
    nome: 'Bruno',
    contaBancaria: contaBancaria,
    contatos: ['34813105', '33792256']
};
correntista.contaBancaria.depositar(3000);
console.log(correntista);
//# sourceMappingURL=tipos.js.map