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
