window.addEventListener("DOMContentLoaded", function () {
    var url = new URL(window.location.href);
    var id = url.searchParams.get("id");
    movie_detail(id);
});

function movie_detail(id) {
    var api_key = "f6f0ae796cca1a731af364386893d5fe";
    var url = "https://api.themoviedb.org/3/movie/" + id + "?api_key=" + api_key;
    var detail = document.getElementById("detail-movie");
    var xmlhttp = new XMLHttpRequest();
    var thumbnail = document.getElementsByClassName("thumbnail-movies")[0];
    xmlhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            var obj = JSON.parse(xmlhttp.responseText);
            console.log(obj.original_title);
            var released = obj.release_date;

            var detail_item = '<div class="col-4 col-sm">';
            detail_item += '<img class="img-fluid" src="https://image.tmdb.org/t/p/w185_and_h278_bestv2'+obj.poster_path +'" alt="">';
            detail_item += '</div>';
            detail_item += '<div class="col-8 col-sm info-detail-movie">';
            detail_item += '<h1>'+obj.original_title+'&nbsp;<span class="released">'+released.split("-",1)+'</span></h1>';
            detail_item += '<ul class="d-flex d-hidden">';
            detail_item += '<li class="action"><i class="fas fa-list"></i></li>';
            detail_item += '<li class="action"><i class="fas fa-heart"></i></li>';
            detail_item += '<li class="action"><i class="fas fa-bookmark"></i></li>';
            detail_item += '</ul>';
            detail_item += '<h3 class="title-feature">Overview</h3>';
            detail_item += '<p class="overview">' + obj.overview + '</p>';
            detail_item += '<h3 class="title-feature">Featured Crew</h3>';
            detail_item += '<p style="margin-top: 50px" class="title-feature">sadas</p>';
            detail_item += '<p>Screenplay, Writer</p>';
            detail_item += '<p class="title-feature">Anthony Russo</p>';
            detail_item += '<p>Director</p>';
            detail_item += '</div>';
            detail.innerHTML += detail_item;
            thumbnail.style.backgroundImage = 'url("https://image.tmdb.org/t/p/w1400_and_h450_face'+obj.backdrop_path+'")'

        }
    };
    xmlhttp.open("get", url, true);
    xmlhttp.send();
}

