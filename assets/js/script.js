function toggleMenu() {
  const headerWrapper = document.getElementById("headerWrapper");
  const nav = document.getElementById("nav");
  const icMenu = document.getElementById("icMenu");
  const navMax = document.getElementById("navMax");
  const navSocial = document.getElementById("navSocial");
  const content = document.getElementById("content");

  headerWrapper.classList.toggle("header-wrapper-full");
  nav.classList.toggle("nav-full");
  icMenu.classList.toggle("ic-close");
  navMax.classList.toggle("nav-max-visible");
  navSocial.classList.toggle("nav-social-visible");
  content.classList.toggle("content-hidden");
}

function main() {
  document.getElementById("icMenu").addEventListener("click", toggleMenu);
}

main();
