let toggleMenu = document.querySelector("nav .toggle-menu");
let menu = document.querySelector("nav ul");
toggleMenu.addEventListener("click", () => {
  menu.classList.toggle("active");
});
