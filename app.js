const Htmlbar = document.querySelector(".htmlbar");
const Cssbar = document.querySelector(".cssbar");
const Jsbar = document.querySelector(".jsbar");


setTimeout(() => {
  Htmlbar.style.width = Htmlbar.getAttribute("data-done") + "%";
  Htmlbar.style.opacity = 1;

  Cssbar.style.width = Cssbar.getAttribute("data-done") + "%";
  Cssbar.style.opacity = 1;

  Jsbar.style.width = Jsbar.getAttribute("data-done") + "%";
  Jsbar.style.opacity = 1;


}, 3000);