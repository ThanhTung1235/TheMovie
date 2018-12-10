var btn_bars = document.getElementById("btn-bars");
var menu_respon = document.getElementById("menu-respon");
var lst = document.getElementsByClassName("nav-mobile")[0];
btn_bars.onclick = function () {
    if (menu_respon.classList.contains("active") == false) {
        menu_respon.classList.add("active");
        lst.classList.remove("d-none");
    } else {
        menu_respon.classList.remove("active");
        lst.classList.add("d-none");
    }
};