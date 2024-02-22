(function () {
  const contadorContainer = document.querySelector("#contador");
  const textArea = document.querySelector("#txtDescricao");
  const resta = contadorContainer.getElementsByTagName("span")[0];
  const maxima = textArea.maxLength;
  const checkBox = document.querySelector("#chkAceito");
  const txtTitulo = document.querySelector("#txtTitulo");
  const feedbackMessage = document.querySelector("#feedbackMessage");
  const closeBtn = document.querySelector("#closeBtn");
  const formCadastro = document.querySelector(".formCadastro");
  const btnAdd = document.querySelector("#btn");

  function mostrarNumero(n) {
    resta.textContent = n;
  }

  formCadastro.addEventListener("submit", (e) => {
    if (!txtTitulo.value) {
      showErrorMessage("Preencha todos os campos", function () {
        txtTitulo.focus();
      });
      e.preventDefault;
    }
  });

  function showErrorMessage(msg, cb) {
    // feedbackMessage.setAttribute("class", "show")
    feedbackMessage.classList.add("show");
    feedbackMessage.getElementsByTagName("p")[0].textContent = msg;
    closeBtn.focus();
    
    function hideErrorMessage() {
      feedbackMessage.classList.remove("show");
      closeBtn.removeEventListener("click", hideErrorMessage);
      closeBtn.removeEventListener("keyup", pressedKeyboardOnBtn);
      
      if (typeof cb === "function") {
        cb();
      }
    }

    function pressedKeyboardOnBtn(e){
      if(e.keyCode === 27){
        hideErrorMessage()
      }
    }

    closeBtn.addEventListener("click", hideErrorMessage);
    closeBtn.addEventListener("keyup", pressedKeyboardOnBtn);
  }

  // contadorContainer.removeAttribute("style");
  contadorContainer.style.display = "block";

  mostrarNumero(maxima);
  textArea.addEventListener("input", checkLength);

  function checkLength() {
    let numeroLetrasDigitadas = this.value.length;
    let caractersRestantes = parseInt(maxima) - parseInt(numeroLetrasDigitadas);
    mostrarNumero(caractersRestantes);
  }

  btnAdd.disabled = true;

  checkBox.addEventListener("change", () => {
    btnAdd.disabled = !btnAdd.disabled;
  });
})();
