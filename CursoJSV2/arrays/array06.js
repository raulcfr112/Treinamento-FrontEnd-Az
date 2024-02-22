let arr = [1, 2, 3, 4]

console.log(arr.reverse())
console.log(arr)

let soma = arr.reduce(function(acumulador, atual, i, _arr){
    return acumulador + atual
})

console.log(soma)
console.log(arr)

const nomes = ["Daniel", "Maria", "Joana", "Joao"]
let nomesPorOrdem = nomes.reduce( function(nomes, nomeAtual){
    let primeiraLetra = nomeAtual[0]
    if(nomes[primeiraLetra]){
        nomes[primeiraLetra]++
    }else{
        nomes[primeiraLetra] = 1
    }
    return nomes
}, {})

console.log(nomesPorOrdem)

const numeros = [1, 3, 5, 6, 9, 10, 23, 3, 5, 6]

// let numerosUnicos = numeros.reduce( function(ac, element){
//     if(!ac.includes(element)){
//         ac.push(element)
//     }
//     return ac
// }, [])

let numerosUnicos = numeros.reduce((ac, element) => {
    if(!ac.includes(element)){
        ac.push(element)
    }
    return ac
},[] )

console.log(numerosUnicos)