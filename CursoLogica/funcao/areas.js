function calcularAreaRetangulo(l, a){
    if(typeof l !== "number" || typeof a !== "number"){
        throw new Error("calcularAreaRetangulo aceita dois parâmetros do tipo number")
    }
    return l * a;
}

function calcularAreaTriangulo(b, a){
    if(typeof b !== "number" || typeof a !== "number"){
        throw new Error("calcularAreaTriangulo aceita dois parâmetros do tipo number")
    }
    return (b * a) / 2;
}

function calcularAreaCirculo(raio){
    if(typeof raio !== "number"){
        throw new Error("calcularAreaCirculo aceita dois parâmetros do tipo number")
    }
    return (raio ** 2) * Math.PI;
}