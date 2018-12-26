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
    var url = "https://api.themoviedb.org/3/search/person?api_key=" + localStorage.getItem("api_key") + "&language=en-US&query=" + key_word;
    var xmlHttpRequest = new XMLHttpRequest();
    xmlHttpRequest.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var search_arr = JSON.parse(xmlHttpRequest.responseText);
            console.log(search_arr.results);
            for (var i = 0; i < search_arr.results.length; i++) {
                var image = "https://image.tmdb.org/t/p/w90_and_h90_face" + search_arr.results[i].profile_path;
                console.log(image);
                if (search_arr.results[i].profile_path == null) {
                    image = "../../Assets/Noavatar.jpg";
                }
                var content = document.getElementById("content-search");
                var content_item = '<div class="people-card">';
                content_item += '<div class="image-people">';
                content_item += '<img class="img-fluid" src="'+image+'" alt="">';
                content_item += '</div>';
                content_item += '<div class="people-info">';
                content_item += '<h2 class="people-name"><a href="../../Blade/People/Details.html?id='+search_arr.results[i].id+'">'+search_arr.results[i].name+'</a></h2>';
                content_item += '<p>Acting - Mama June:From Ha Dong with love</p>';
                content_item += '</div>';
                content_item += '</div>';
                content_item += '</div>';
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
        var url = "https://api.themoviedb.org/3/search/person?api_key=" + api_key + "&language=en-US&query=" + key_word.value;
        var xmlHttpRequest = new XMLHttpRequest();
        xmlHttpRequest.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var search_arr = JSON.parse(xmlHttpRequest.responseText);
                // console.log(search_arr.results);
                for (var i = 0; i < search_arr.results.length; i++) {
                    var image = "https://image.tmdb.org/t/p/w185_and_h278_bestv2" + search_arr.results[i].poster_path;
                    if (search_arr.results[i].poster_path == null || search_arr.results[i].poster_path.length == 0) {
                        image = "../../Assets/Noavatar.jpg";
                    }
                    console.log(image);
                    var content = document.getElementById("content-search");
                    var content_item = '<div class="people-card">';
                    content_item += '<div class="image-people">';
                    content_item += '<img class="img-fluid" src="../../Assets/Noavatar.jpg" alt="">';
                    content_item += '</div>';
                    content_item += '<div class="people-info">';
                    content_item += '<h2>Amber</h2>';
                    content_item += '<p>Acting - Mama June:From Hà Đông with love</p>';
                    content_item += '</div>';
                    content_item += '</div>';
                    content_item += '</div>';
                    content.innerHTML += content_item;
                }
            }
        };
        xmlHttpRequest.open("Get", url, 'true');
        xmlHttpRequest.send();
    };
}
