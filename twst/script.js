function mostrarMenu() {
  var menu = document.getElementById("nav-header");
  var icone = document.getElementById("icone");

  if (getComputedStyle(menu).display == 'none') {
      menu.style.display = "flex";
      icone.classList.remove("fa-bars");
      icone.classList.add("fa-times");
  }

  else {
      menu.style.display = "none";
      icone.classList.remove("fa-times");
      icone.classList.add("fa-bars")
  }
}