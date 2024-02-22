const arr = [1, 5, 10, "ola", true]

let soNumeros = arr.some( function(el){
    return typeof el === "number" && el > 20
})

arr.filter(function(el, i, _arr){

    return false
})

let arr1 = arr.filter(function(el, i, _arr){

    return typeof el === "number"
})

arr.forEach(function(el, i, arr){
    console.log(el, i)
})

arr1 = arr1.map(function(el, i, _arr){
    return el * el
})

console.log(arr1)