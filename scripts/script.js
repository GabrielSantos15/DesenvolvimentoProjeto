const menuMobile = document.querySelector("#menuMobile");

function menu() {
  menuMobile.classList.contains("hide")
    ? menuMobile.classList.remove("hide")
    : menuMobile.classList.add("hide");
}
