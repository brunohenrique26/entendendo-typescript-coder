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

    // Rest & Spread

    const numbers = [1,2,3,99,5]
    console.log(Math.max(...numbers))

    const turmaA: string[] = ['Bruno', 'Aline', 'Jessica']
    const turmaB: string[] = [ 'Maria', 'João', 'Lopes', ...turmaA]

    console.log(turmaB)

    function retornarArray(...args: number[]): number{
        return args
    }

    const numeros = retornarArray(1,2,3,4,5,6)
    console.log(numeros)
    console.log(retornarArray(...numbers))