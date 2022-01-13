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
//# sourceMappingURL=ecmascript.js.map