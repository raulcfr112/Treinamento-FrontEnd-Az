function getRandomNumber(inicio = 0, fim = 5, integer = true){
    let numeroRandom = Math.random() * (fim - inicio + 1) + inicio
    if (!integer) return numeroRandom
    return Math.floor(numeroRandom)
}

for (let i = 0; i < 10; i++) {
    console.log(getRandomNumber(5, 10))
}