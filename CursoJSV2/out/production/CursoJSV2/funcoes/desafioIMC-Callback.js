function calcularIMC(peso, altura, cb){
    if (peso === undefined || altura === undefined) throw Error("Informe o peso e a altura!")
    let imc = peso / (altura **2)
    return (typeof cb ==="function" && cb(imc)) || imc.toFixed(2)
}

const classificaIMC = function(imc){
    if(imc <= 16.9){
        return "Muito abaixo do peso"
    } else if(imc <= 18.4){
        return "Abaixo do peso"
    } else if (imc <= 24.9){
        return "Peso normal"
    } else if (imc <= 29.9){
        return "Acima do peso"
    } else if (imc <= 34.9){
        return "Obesidade Grau I"
    } else if (imc <= 40){
        return "Obesidade Grau II"
    } else{
        return "Obesidade Grau III"
    }
}

console.log(calcularIMC(60, 1.69))
console.log(calcularIMC(60, 1.69, classificaIMC))

