function formatarNome(nome){
    nome = nome.trim()
    let primeiroEspaco = nome.indexOf(" ")    
    if (primeiroEspaco < 0 ) return nome
    let primeiroNome = nome.slice(0, primeiroEspaco)
    let sobrenome = nome.slice(primeiroEspaco + 1)
    return sobrenome + ", " + primeiroNome
}

console.log(formatarNome("Raul"))
console.log(formatarNome("Raul Camargo"))
console.log(formatarNome("Raul Camargo Floriano"))
console.log(formatarNome("Raul Camargo Floriano Ribeiro"))