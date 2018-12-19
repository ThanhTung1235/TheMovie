document.addEventListener('DOMContentLoaded', function () {
    var url = new URL(window.location.href);
    var key_word = url.searchParams.get("key_word");
    if (key_word == null || key_word.length == 0) {
        return;
    }
    nav_active();
    change_link(key_word);
    change_btn();
});

function nav_active() {
    var search_nav = document.getElementById("search_nav");
    var search_item = search_nav.getElementsByClassName("search-item");
    for (var i = 0; i < search_item.length; i++) {
        search_item[i].addEventListener("click", function () {
            var current = document.getElementsByClassName("search_active");
            current[0].className = current[0].className.replace(" search_active","");
            this.className += " search_active";
        })
    }
}

function change_link(key_word) {
    var movie = document.getElementById("movie");
    movie.innerHTML ='<a class="search-link" href="../Movies/Search.html?key_word='+key_word+'">Movies</a>';
    var tv = movie.nextElementSibling;
    tv.innerHTML = '<a class="search-link" href="../Tv/tv_search.html?key_word='+key_word+'">TV Shows</a>';
    var people = tv.nextElementSibling;
    people.innerHTML = '<a class="search-link" href="../People/people_search.html?key_word='+key_word+'">People</a>';
    var company = people.nextElementSibling;
    company.innerHTML = '<a class="search-link" href="../Company/company_search.html?key_word='+key_word+'">Companies</a>';
    var keyword = company.nextElementSibling;
    keyword.innerHTML = '<a class="search-link" href="../Keyword/keyword_search.html?key_word='+key_word+'">Keywords</a>';
    var collection = keyword.nextElementSibling;
    collection.innerHTML = '<a class="search-link" href="../Collection/collection_search.html?key_word='+key_word+'">Collection</a>';
}
function change_btn() {
    var btn_search = document.getElementById("btn-search");
    var txt_search = document.getElementById("txt_search");
    btn_search.onclick = function(){
        window.location.href= "../Movies/Search.html?key_word="+txt_search.value;
    };
    txt_search.addEventListener("keyup",function (ev) {
        if (ev.which == 13) {
            window.location.href= "../Movies/Search.html?key_word="+txt_search.value;
        }
    });
}