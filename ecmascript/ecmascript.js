"use strict";
//Funçao comum
function somar(n1, n2) {
    return n1 + n2;
}
console.log(somar(2, 2));
//Arrow Function
var subtrair = function (n1, n2) { return n1 - n2; };
console.log(subtrair(4, 3));
// Parametros Padrão
function contagemRegressiva(inicio, fim) {
    if (inicio === void 0) { inicio = 5; }
    if (fim === void 0) { fim = inicio - 5; }
    console.log(inicio);
    while (inicio > fim)
        inicio--;
    console.log(inicio);
}
console.log('Fim');
contagemRegressiva();
contagemRegressiva(3);
// Rest & Spread
var numbers = [1, 2, 3, 99, 5];
console.log(Math.max.apply(Math, numbers));
var turmaA = ['Bruno', 'Aline', 'Jessica'];
var turmaB = ['Maria', 'João', 'Lopes'].concat(turmaA);
console.log(turmaB);
function retornarArray() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args;
}
var numeros = retornarArray(1, 2, 3, 4, 5, 6);
console.log(numeros);
console.log(retornarArray.apply(void 0, numbers));
// Destructuring (Array)
var caracteristicas = ['motor Ztec 1.8', 2020];
//const motor = caracteristicas[0]
//const ano = caracteristicas[1]
var motor = caracteristicas[0], ano = caracteristicas[1];
console.log(motor);
console.log(ano);
// Destructuring (objeto)
var item = {
    nome: 'SD',
    preco: 200,
    caracteristicas: {
        w: 'importado'
    }
};
//const nomeItem = item.nome
//const precoItem = item.preco
var n = item.nome, p = item.preco, w = item.caracteristicas.w;
console.log(n);
console.log(p);
console.log(w);
//Template String
var usuarioID = 'suporteCoder';
var notificacoes = '9';
// const boasVindas = 'Boas Vindas' + usuarioID +  'notificações' + notificacoes
var boasVindas = "\n    Boas vindas " + usuarioID + " , Notifica\u00E7\u00F5es: " + (parseInt(notificacoes) > 9 ? '+9' : notificacoes) + "\n    ";
console.log(boasVindas);
console.log("" + (1 + 1) * 30);
console.log("Motor " + caracteristicas);
//# sourceMappingURL=ecmascript.js.map