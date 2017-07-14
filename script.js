function openMenu() {
    "use strict";
    var header_wrapper, nav, nav_max, nav_social, ic_menu;
    header_wrapper = document.getElementById("header_wrapper");
    nav = document.getElementById("nav");
    nav_max = document.getElementById("nav_max");
    nav_social = document.getElementById("nav_social");
    ic_menu = document.getElementById("ic_menu");
    if (window.getComputedStyle(nav_max).display === "none") {
        document.body.classList.add("hidden");
        header_wrapper.classList.add("header-wrapper-full");
        nav.classList.add("nav-full");
        nav_max.classList.add("flex");
        nav_social.classList.add("flex");
        ic_menu.classList.remove("ic-menu");
        ic_menu.classList.add("ic-close");        
    } else {
        document.body.classList.remove("hidden");  
        header_wrapper.classList.remove("header-wrapper-full");  
        nav.classList.remove("nav-full");
        nav_max.classList.remove("flex");
        nav_social.classList.remove("flex");
        ic_menu.classList.remove("ic-close");
        ic_menu.classList.add("ic-menu");
    }
}
function main() {
    "use strict";
    document.getElementById("ic_menu").addEventListener("click", openMenu);
}
main();