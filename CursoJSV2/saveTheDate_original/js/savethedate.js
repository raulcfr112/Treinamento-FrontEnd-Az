(function () {
  const hero = document.querySelector(".hero-content");
  const dataEvento = hero
    .querySelector("h1 span")
    .textContent.trim()
    .split(" ");
  const paragrafo = document.createElement("p");
  let anoMesDia = dataEvento[0].split("/").reverse();
  anoMesDia[1]--; //diminui um mes para sincronizar com o calendario
  anoMesDia.push(...dataEvento[1].split("H"));

  setInterval(countData, 1000);
  hero.appendChild(paragrafo);

  function countData() {
    let diferenca = Date.UTC(...anoMesDia) - Date.now();
    let dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    let horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    let segundos = Math.floor((diferenca % (1000 * 60)) / 1000);
    paragrafo.innerHTML =
      "Contagem Regresiva: " +
      dias +
      " Dias | " +
      horas +
      " Horas | " +
      minutos +
      " Minutos | " +
      segundos +
      " Segundos";
  }
})();
