//Funçao comum

function somar(n1: number, n2: number) {
    return n1 + n2
}
console.log(somar(2,2))

//Arrow Function
const subtrair = (n1:number, n2: number) => n1 - n2
console.log(subtrair(4,3))


// Parametros Padrão

function contagemRegressiva(inicio: number = 5, 
    fim: number = inicio -5) : void {
        console.log(inicio);
        while(inicio > fim)
        inicio--
        console.log(inicio)
    }
    console.log('Fim')

    contagemRegressiva()
    contagemRegressiva(3)