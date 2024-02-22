(function () {
  const sections = [...document.querySelectorAll(".content-section .card")];
  const imgs = [...document.querySelectorAll(".no-js .card img")].forEach(
    (elem) => {
      setOpacity(elem, 0, 0);
    }
  );
  let imgShowNow = "";

  function isShow() {
    for (let i = 0; i < sections.length; i++) {
      if (sections[i].getBoundingClientRect().bottom < window.innerHeight) {
        imgShowNow = [...sections[i].querySelectorAll("img")];
        console.log(imgShowNow)
        if (imgShowNow[0].style.opacity === "1") continue;
        return true;
      }
    }
    return false;
  }

  function setOpacity(elemento, nivelOpacidade, tempoTransition) {
    elemento.style.opacity = nivelOpacidade;
    elemento.style.transition = `opacity ${tempoTransition}s`;
  }

  function renderImg(){
      if (isShow()) {
        imgShowNow.forEach((element) => {
          setOpacity(element, 1, 2);
        });
      }
  }

  window.addEventListener("scroll", renderImg)
  renderImg()
})();
