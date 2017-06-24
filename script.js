function openMenu() {
    "use strict";
    var nav = document.getElementById("nav"), nav_content = document.getElementById("nav_content"), menu = document.getElementById("menu");
    if (window.getComputedStyle(nav_content).display === "none") {
        nav.classList.add("nav-full");
        nav_content.classList.add("flex");
        menu.classList.remove("ic-menu");
        menu.classList.add("ic-close");
    } else {
        nav.classList.remove("nav-full");
        nav_content.classList.remove("flex");
        menu.classList.remove("ic-close");
        menu.classList.add("ic-menu");
    }
}
function main() {
    "use strict";
    document.getElementById("menu").addEventListener("click", openMenu);
}
main();