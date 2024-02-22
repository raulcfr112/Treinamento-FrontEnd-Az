(function () {
  function calcularMedia() {
    if (arguments.length == 0) return 0;
    let soma = 0;
    for (let i = 0; i < arguments.length; i++) {
      if (arguments[i] != "number") throw new Error("So aceitamos números!");
      soma += arguments[i];
    }
    return soma / arguments.length;
  }
  
  try {
      let media = calcularMedia()
      console.log(media)
  } catch (e) {
    console.log(e.message);
  }
})();

