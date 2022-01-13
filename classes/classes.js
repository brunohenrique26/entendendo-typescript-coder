"use strict";
var Data = /** @class */ (function () {
    function Data(dia, mes, ano) {
        if (dia === void 0) { dia = 26; }
        if (mes === void 0) { mes = 2; }
        if (ano === void 0) { ano = 1991; }
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
    return Data;
}());
var aniversario = new Data(26, 2, 1991);
console.log(aniversario);
// ok
var Data1 = /** @class */ (function () {
    function Data1(dia, mes, ano) {
        if (dia === void 0) { dia = 26; }
        if (mes === void 0) { mes = 2; }
        if (ano === void 0) { ano = 1991; }
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
    return Data1;
}());
var aniversario1 = new Data1(26, 2, 1991);
console.log(aniversario1);
//# sourceMappingURL=classes.js.map