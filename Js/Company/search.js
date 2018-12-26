document.addEventListener('DOMContentLoaded', function () {
    var url = new URL(window.location.href);
    var key_word = url.searchParams.get("key_word");
    if (key_word == null || key_word.length == 0) {
        return;
    }
    searchs(key_word);
    search();

});


function searchs(key_word) {
    var url = "https://api.themoviedb.org/3/search/company?api_key=" + localStorage.getItem("api_key") + "&language=en-US&query=" + key_word;
    var xmlHttpRequest = new XMLHttpRequest();
    xmlHttpRequest.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var search_arr = JSON.parse(xmlHttpRequest.responseText);
            console.log(search_arr.results);
            for (var i = 0; i < search_arr.results.length; i++) {
                var content = document.getElementById("content-search");
                var content_item = '<li class="item-search">'+search_arr.results[i].name+'</li>';
                content.innerHTML += content_item;
            }
        }
    };
    xmlHttpRequest.open("Get", url, 'true');
    xmlHttpRequest.send();
}

function search() {
    btn_search.onclick = function () {
        var api_key = "f6f0ae796cca1a731af364386893d5fe";
        var key_word = document.getElementById("txt_search");
        var url = "https://api.themoviedb.org/3/search/company?api_key=" + api_key + "&language=en-US&query=" + key_word.value;
        var xmlHttpRequest = new XMLHttpRequest();
        xmlHttpRequest.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var search_arr = JSON.parse(xmlHttpRequest.responseText);
                // console.log(search_arr.results);
                for (var i = 0; i < search_arr.results.length; i++) {
                    var content = document.getElementById("content-search");
                    var content_item = '<li class="item-search">'+search_arr.results[i].name+'</li>';
                    content.innerHTML += content_item;
                }
            }
        };
        xmlHttpRequest.open("Get", url, 'true');
        xmlHttpRequest.send();
    };
}
