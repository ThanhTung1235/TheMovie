var search_nav = document.getElementById("search_nav");
var search_item = search_nav.getElementsByClassName("search-item");
for (var i = 0; i < search_item.length; i++) {
    search_item[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("search_active");
        current[0].className = current[0].className.replace(" search_active","");
        this.className += " search_active";
    })
}