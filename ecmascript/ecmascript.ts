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

    function retornarArray(...args: number[]): number[]{
        return args
    }

    const numeros = retornarArray(1,2,3,4,5,6)
    console.log(numeros)
    console.log(retornarArray(...numbers))

    // Destructuring (Array)

    const caracteristicas = ['motor Ztec 1.8', 2020]
    //const motor = caracteristicas[0]
    //const ano = caracteristicas[1]

    const [motor, ano] = caracteristicas
    console.log(motor)
    console.log(ano)

    // Destructuring (objeto)

    const item = {
        nome: 'SD',
        preco:200,
        caracteristicas: {
          w: 'importado'
        } 
    }

    //const nomeItem = item.nome
    //const precoItem = item.preco

    const { nome: n, preco: p, caracteristicas: { w } } = item
    console.log(n)
    console.log(p)
    console.log(w)

    //Template String

    const usuarioID: string = 'suporteCoder'
    const notificacoes: string = '9'
    // const boasVindas = 'Boas Vindas' + usuarioID +  'notificações' + notificacoes
    const boasVindas = `
    Boas vindas ${usuarioID} , Notificações: ${parseInt(notificacoes) > 9 ? '+9' : notificacoes}
    `
    console.log(boasVindas)
    console.log(`${(1 + 1) * 30 }`)
    console.log(`Motor ${caracteristicas}`)

    // callback (funcçoes assicronas)

  //  function esperar3s(callback: (dado: string) => void) {
    //    setTimeout(()=> {
      //      callback('3s depois ...')
        //}, 3000)
    //}
//esperar3s(function(resultado: string){
  //  console.log(resultado)
//})
   // Promise resolve
  //  function esperar3sPromise () {
    //    return new Promise((resolve: any)=> {
      //      setTimeout(() => {
        //        resolve('3s depois ...')
          //  },3000)
       // })
    //}

    //esperar3sPromise()
    //.then(dado => console.log(dado))

    //fetch('https://swapi.dev/api/people/1')
    //.then(res => res.json())
    //.then(personagem => personagem.films())
    //.then(films => fetch(films[0]))
    //.then(resFilm => resFilm.json())
    //.then(film => console.log(film.title))
    //.catch(err => console.log('Cacth!!!' + err))