const teste =  function(cb){
    console.log("Funcao teste")
    console.log(cb)
    cb(30)
}

const fn = function(param){
    console.log("funcao anonima")
    console.log(param)
}

// fn(30)
teste(fn)