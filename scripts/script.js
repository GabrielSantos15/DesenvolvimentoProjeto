
function menu() {
  const menuMobile = document.querySelector("#menuMobile");

  menuMobile.classList.contains("hide")
    ? menuMobile.classList.remove("hide")
    : menuMobile.classList.add("hide");
}

