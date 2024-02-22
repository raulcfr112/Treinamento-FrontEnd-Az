(function(){
    const nomeUsuario = "Raul"
    
    if(nomeUsuario){
        const topBarElement = document.createElement("div")
        topBarElement.className = "top-bar"
        topBarElement.innerHTML = `<p> Olá, <b> ${nomeUsuario} </b></p>`

        const pai = document.querySelector(".hero")

        pai.insertBefore(topBarElement, pai.firstElementChild)

    }

})()