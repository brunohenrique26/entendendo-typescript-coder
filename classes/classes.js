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
class Carro {
    constructor(marca, modelo, velocidadeMaxima = 200) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadeMaxima = velocidadeMaxima;
        this.velocidadeAtual = 0;
    }
    alterarVelocidade(delta) {
        const novaVelocidade = this.velocidadeAtual + delta;
        const velocidadeValida = novaVelocidade >= 0
            && novaVelocidade <= this.velocidadeMaxima;
        if (velocidadeValida) {
            this.velocidadeAtual = novaVelocidade;
        }
        else {
            this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0;
        }
        return this.velocidadeAtual;
    }
    acelerar() {
        return this.alterarVelocidade(5);
    }
    frear() {
        return this.alterarVelocidade(-5);
    }
}
const carro1 = new Carro('For', 'Ka', 185);
// console.log(carro1.acelerar())
// console.log(carro1.acelerar())
// console.log(carro1.acelerar())
// Henrança
class Ferrari extends Carro {
}
const f40 = new Ferrari('ferrari', 'f40', 324);
console.log(`${f40.marca} ${f40.modelo}`);
console.log(f40.acelerar());
console.log(f40.frear());
//# sourceMappingURL=classes.js.map