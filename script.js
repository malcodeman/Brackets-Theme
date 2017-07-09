function openMenu() {
    "use strict";
    var nav, nav_content, menu, header_wrapper, main_content, nav_social;
    nav = document.getElementById("nav");
    nav_content = document.getElementById("nav_content");
    menu = document.getElementById("menu");
    header_wrapper = document.getElementById("header_wrapper");
    main_content = document.getElementById("main_content");
    nav_social = document.getElementById("nav_social");
    if (window.getComputedStyle(nav_content).display === "none") {
        nav.classList.add("nav-full");
        nav_content.classList.add("flex");
        nav_social.classList.add("flex");
        menu.classList.remove("ic-menu");
        menu.classList.add("ic-close");
        main_content.classList.add("none");
    } else {
        nav.classList.remove("nav-full");
        nav_content.classList.remove("flex");
        nav_social.classList.remove("flex");
        menu.classList.remove("ic-close");
        menu.classList.add("ic-menu");
        main_content.classList.remove("none");
    }
}
function main() {
    "use strict";
    document.getElementById("menu").addEventListener("click", openMenu);
}
main();