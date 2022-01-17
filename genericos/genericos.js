"use strict";
function echo(objeto) {
    return objeto;
}
console.log(echo('João').length);
console.log(echo(27));
console.log(echo({ nome: 'João', idade: 27 }));
// Usando Generics
function echo2(objeto) {
    return objeto;
}
console.log(echo2('João').length);
console.log(echo2(27));
console.log(echo({ nome: 'João', idade: 27 }));
// Generics disponiveis na API
const avaliacoes = [10, 9.3, 7.7];
avaliacoes.push(8.4);
// avaliacoes.push('5.0)
console.log(avaliacoes);
//Array
function imprimir(args) {
    args.forEach(elemento => console.log(elemento));
}
imprimir([1, 2, 3]);
imprimir([1, 2, 3]);
imprimir(['Ana', 'Bruno', 'Carlos']);
imprimir([
    { nome: ' Fulano', idade: 22 },
    { nome: 'Cicrano', idade: 23 },
    { nome: 'Beltrano', idade: 24 }
]);
imprimir([
    { nome: ' Fulano', idade: 22 },
    { nome: 'Cicrano', idade: 23 },
    { nome: 'Beltrano', idade: 24 }
]);
const chamarEcho = echo2;
console.log(chamarEcho('Algumas Coisa'));
//Class com generics
class OperacaoBinaria {
    constructor(operando1, operando2) {
        this.operando1 = operando1;
        this.operando2 = operando2;
    }
}
// console.log(new OperacaoBinaria('Bom', 'dia').executar())
// console.log(new OperacaoBinaria(3,7).executar())
// console.log(new OperacaoBinaria('Bom', 'dia').executar())
// console.log(new OperacaoBinaria({}, {}).executar())
class SomaBinaria extends OperacaoBinaria {
    executar() {
        return this.operando1 + this.operando2;
    }
}
console.log(new SomaBinaria(3, 4).executar());
class DiferencaEntreDatas extends OperacaoBinaria {
    getTime(data) {
        let { dia, mes, ano } = data;
        return new Date(`${mes}/${dia}/${ano}`).getTime();
    }
    executar() {
        const t1 = this.getTime(this.operando1);
        const t2 = this.getTime(this.operando2);
        const diferenca = Math.abs(t1 - t2);
        const dia = 100 * 60 * 60 * 24;
        return `${Math.ceil(diferenca / dia)} dias(s)`;
    }
}
const d1 = new Data(1, 2, 2020);
const d2 = new Data(5, 5, 2020);
console.log(new DiferencaEntreDatas(d1, d2).executar);
//# sourceMappingURL=genericos.js.map