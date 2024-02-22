(function(){
    const nomeUsuario = null
    if(nomeUsuario){
        document.querySelector(".top-bar p").innerHTML += "<b '>" + nomeUsuario + "</b>"
    }else{
        document.querySelector(".top-bar p").parentElement.style.display = "none"
    }
})()