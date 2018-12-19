document.addEventListener('DOMContentLoaded', function () {
    var url = new URL(window.location.href);
    var key_word = url.searchParams.get("key_word");
    if (key_word == null || key_word.length == 0) {
        return;
    }
    searchs(key_word);
    search();
    change_btn();
});

function searchs(key_word) {
    var url = "https://api.themoviedb.org/3/search/tv?api_key=" + localStorage.getItem("api_key") + "&language=en-US&query=" + key_word;
    var xmlHttpRequest = new XMLHttpRequest();
    xmlHttpRequest.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var search_arr = JSON.parse(xmlHttpRequest.responseText);
            console.log(search_arr.results);
            for (var i = 0; i < search_arr.results.length; i++) {
                var image = "https://image.tmdb.org/t/p/w185_and_h278_bestv2" + search_arr.results[i].poster_path;
                if (search_arr.results[i].poster_path == null || search_arr.results[i].poster_path.length == 0) {
                    image = "../../Assets/Noavatar.jpg";
                }
                // console.log(image);
                var content = document.getElementById("content-search");
                var content_item = '<div class="movie-card">';
                content_item += '<div class="img-movie">';
                content_item += '<img class="img-fluid" src="' + image + '" alt="">';
                content_item += '</div>';
                content_item += '<div class="info">';
                content_item += '<h3 class="pd-l"><a href="../../Blade/Tv/tv_detail.html?id=' + search_arr.results[i].id + '"> ' + search_arr.results[i].original_name + '</a></h3>';
                content_item += '<p class="pd-l ">October 5,2018</p>';
                content_item += '<p class="info-content pd-l d-hidden-l">' + search_arr.results[i].overview + '</p>';
                content_item += '<div class="more-info d-hidden-l">';
                content_item += '<a class="pd-l" href="../../Blade/Tv/tv_detail.html?id=' + search_arr.results[i].id + '">More info</a>';
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
        var key_word = document.getElementById("txt_search");
        var url = "https://api.themoviedb.org/3/search/tv?api_key=" + localStorage.getItem("api_key") + "&language=en-US&query=" + key_word.value;
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
                    var content_item = '<div class="movie-card">';
                    content_item += '<div class="img-movie">';
                    content_item += '<img class="img-fluid" src="' + image + '" alt="">';
                    content_item += '</div>';
                    content_item += '<div class="info">';
                    content_item += '<h3 class="pd-l">' + search_arr.results[i].original_title + '</h3>';
                    content_item += '<p class="pd-l ">October 5,2018</p>';
                    content_item += '<p class="info-content pd-l d-hidden-l">' + search_arr.results[i].overview + '</p>';
                    content_item += '<div class="more-info d-hidden-l">';
                    content_item += '<a class="pd-l" href="#">More info</a>';
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
