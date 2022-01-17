"use strict";
function logarClasse(construtor) {
    console.log(construtor);
}
function decoratorVazio(_) { }
function logarClasseSe(valor) {
    return valor ? logarClasse : decoratorVazio;
}
function decorator(obj) {
    return function (_) {
        console.log(obj.a + '' + obj.b);
    };
}
function logarObjeto(construtor) {
    console.log('Carregando...');
    return class extends construtor {
        constructor(...args) {
            console.log('Antes...');
            super(...args);
            console.log('Depois...');
        }
    };
}
//@logarClasse
//@logarClasseSe
//@decorator({ a: 'Teste', b: 123})
//@logarObjeto
class Eletrodomestico {
    constructor() {
        console.log('novo...');
    }
}
function imprimivel(construtor) {
    construtor.prototype.imprimir = function () {
        console.log(this);
    };
}
//(<any>new Eletrodomestico()).imprimir()
const eletro = new Eletrodomestico();
eletro.imprimir && eletro.imprimir();
//# sourceMappingURL=decorators.js.map