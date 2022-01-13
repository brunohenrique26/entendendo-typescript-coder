"use strict";
class Data {
    constructor(dia = 26, mes = 2, ano = 1991) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const aniversario = new Data(26, 2, 1991);
console.log(aniversario);
// ok
class Data1 {
    constructor(dia = 26, mes = 2, ano = 1991) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const aniversario1 = new Data1(26, 2, 1991);
console.log(aniversario1);
class Produto {
    constructor(nome, preco, desconto = 0) {
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
    }
    precoComDesconto() {
        return (this.preco * this.desconto);
    }
    resumo() {
        return `${this.nome} custa R$ ${this.precoComDesconto()} (${this.desconto * 10})}`;
    }
}
const celular = new Produto('iphone', 100);
const celular2 = new Produto('Samsung', 10, 0);
celular2.desconto = 0.06;
console.log(celular2.resumo());
//# sourceMappingURL=classes.js.map