(function () {
  window.addEventListener("scroll", positionImg);

  const dataParalaxContainer = [...document.querySelectorAll("[data-paralax]")];

  function isGettingOut(container) {
    return container.getBoundingClientRect().top <= 0;
  }

  function getNewPositionY (c){
    const v = parseFloat(c.getAttribute("data-p-velocity")) || .5
    return c.getBoundingClientRect().top * v * -1
  }

  function positionImg() {
    dataParalaxContainer.forEach((c) => {
      let originalPositionX = getComputedStyle(c).backgroundPositionX;

      if (isGettingOut(c)) {
        c.style.backgroundPosition = `${originalPositionX} ${getNewPositionY(c)}px`
      }else{
        c.style.backgroundPosition = `${originalPositionX} 0px`
      }
    });
  }

  positionImg()
})();
