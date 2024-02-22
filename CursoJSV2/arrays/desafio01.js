function sum(){
    let numeros = Array.from(arguments)
    return numeros.reduce( (ac, el) => ac + el)
}

function avarege(){
    return (sum(...arguments) / arguments.length).toFixed(2)
}

console.log(sum(...[5, 5, 5]))
console.log(avarege(...[10, 5, 5]))