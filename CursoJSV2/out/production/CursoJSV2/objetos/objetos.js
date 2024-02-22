const obj1 = {
    nome: "Raul"
}

const obj2 = new Object()
obj2.nome = "Maria"
obj2["idade"] = 28

console.log(obj1)
console.log(obj2)

const str = "minha string"
console.log(str.length)

const str2 = new String("minha string 2")
console.log(str2)
console.log(str2.length)
console.log("------------------")

let telefone = "91234-2345"
let telefone2 = "9134-2345"

function mascararTelefone(numero){
    let hifenPosicao = numero.indexOf("-")
    let numeroInicio = numero.slice(0, hifenPosicao)
    let numeroFinal = numero.slice(hifenPosicao + 1)
    let doisUltimosNumeros = numeroFinal.slice(-2)
    return `${numeroInicio[0].padEnd(numeroInicio.length, "*")}-${doisUltimosNumeros.padStart(numeroFinal.length, "*")}`
}

console.log(mascararTelefone(telefone))