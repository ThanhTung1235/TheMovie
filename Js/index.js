var btn_bars = document.getElementById("btn-bars");
var menu_respon = document.getElementById("menu-respon");
var lst = document.getElementsByClassName("nav-mobile")[0];
var people = document.getElementsByClassName("people")[0];
var discover = document.getElementsByClassName("discover")[0];
var tvShow = document.getElementsByClassName("tv")[0];
var movie = document.getElementsByClassName("movie")[0];
var btn_search = document.getElementById("btn-search");
var txt_search = document.getElementById("txt_search");

document.addEventListener('DOMContentLoaded', function () {
    var api_key = "f6f0ae796cca1a731af364386893d5fe";
    localStorage.setItem("api_key",api_key);

});
txt_search.addEventListener("keyup",function (ev) {
    if (ev.which == 13) {
        window.location.href= "Movies/Search.html?key_word="+txt_search.value;
    }
});

btn_search.onclick = function(){
    window.location.href= "Movies/Search.html?key_word="+txt_search.value;
};



btn_bars.onclick = function () {
    if (menu_respon.classList.contains("active") == false) {
        menu_respon.classList.add("active");
        lst.classList.remove("d-none");
    } else {
        menu_respon.classList.remove("active");
        lst.classList.add("d-none");
    }
};

function Discover() {
    if (discover.classList.contains("d-none")) {
        discover.classList.remove("d-none");
    } else {
        discover.classList.add("d-none");
    }
}

function Movies() {
    if (movie.classList.contains("d-none")) {
        movie.classList.remove("d-none");
    } else {
        movie.classList.add("d-none");
    }
}

function TvShow() {
    if (tvShow.classList.contains("d-none")) {
        tvShow.classList.remove("d-none");
    } else {
        tvShow.classList.add("d-none");
    }
}

function People() {
    if (people.classList.contains("d-none")) people.classList.remove("d-none");
    else people.classList.add("d-none");
}




