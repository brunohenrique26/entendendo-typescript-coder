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
console.log(funcionario.supervisores);
console.log(funcionario.baterPonto(8));
