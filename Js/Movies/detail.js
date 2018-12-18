window.addEventListener("DOMContentLoaded", function () {
    var url = new URL(window.location.href);
    var id = url.searchParams.get("id");
    movie_detail(id);
    trailer_movie(id);
    keyword(id);
    recommendations(id);
});

function movie_detail(id) {
    var api_key = "f6f0ae796cca1a731af364386893d5fe";
    var url = "https://api.themoviedb.org/3/movie/" + id + "?api_key=" + api_key + "&append_to_response=credits";
    var detail = document.getElementById("detail-movie");
    var xmlhttp = new XMLHttpRequest();
    var thumbnail = document.getElementsByClassName("thumbnail-movies")[0];
    var about_movie = document.getElementById("movie_about");
    var cast_card = document.getElementById('cast_card');
    var thumbnail_collection = document.getElementsByClassName("thumbnail-collection")[0];
    var collection = document.getElementById("collection");
    xmlhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            var obj = JSON.parse(xmlhttp.responseText);
            // console.log(obj.original_title);
            var released = obj.release_date;
            var detail_item = '<div  class="row detail-movie">';
            detail_item += '<div class="col-4">';
            detail_item += '<img class="img-fluid" src="https://image.tmdb.org/t/p/w185_and_h278_bestv2' + obj.poster_path + '" alt="">';
            detail_item += '</div>';
            detail_item += '<div class="col-8 info-detail-movie">';
            detail_item += '<h1>' + obj.original_title + '&nbsp;<span class="released">(' + released.split("-", 1) + ')</span></h1>';
            detail_item += '<ul class="d-flex">';
            detail_item += '<li class="action"><i class="fas fa-list"></i></li>';
            detail_item += '<li class="action"><i class="fas fa-heart"></i></li>';
            detail_item += '<li class="action"><i class="fas fa-bookmark"></i></li>';
            detail_item += '</ul>';
            detail_item += '<div class="d-hidden">';
            detail_item += '<h3 class="title-feature">Overview</h3>';
            detail_item += '<p class="overview">' + obj.overview + '</p>';
            detail_item += '<h3 class="title-feature">Featured Crew</h3>';
            detail_item += '<p style="margin-top: 50px" class="title-feature">sadas</p>';
            detail_item += '<p>Screenplay, Writer</p>';
            detail_item += '<p class="title-feature">Anthony Russo</p>';
            detail_item += '<p>Director</p>';
            detail_item += '</div>';
            detail_item += '</div>';
            detail_item += '</div>';
            detail_item += '<div class="overview-mobile">';
            detail_item += '<h3 class="title-feature">Overview</h3>';
            detail_item += '<p class="overview">' + obj.overview + '</p>';
            detail_item += '<h3 class="title-feature">Featured Crew</h3>';
            detail_item += '<div class="d-flex mr-t3">';
            detail_item += '<div class="mr-2 mr-b">';
            detail_item += '<p class="title-feature ">Stephen McFeely</p>';
            detail_item += '<p>Screenplay, Writer</p>';
            detail_item += '</div>';
            detail_item += '<div class="mr-2 mr-b">';
            detail_item += '<p class="title-feature">Anthony Russo</p>';
            detail_item += '<p>Director</p>';
            detail_item += '</div>';
            detail_item += '</div>';
            detail.innerHTML += detail_item;
            thumbnail.style.backgroundImage = 'url("https://image.tmdb.org/t/p/w1400_and_h450_face' + obj.backdrop_path + '")'

            var str_format = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
                minimumFractionDigits: 2,
            });
            var about_item = '<p class="title-feature">Facts</p>';
            about_item += '<p class="title-feature">Status</p>';
            about_item += '<p>' + obj.status + '</p>';
            about_item += '<p class="title-feature">Released Infomation</p>';
            about_item += '<p>' + obj.release_date + '</p>';
            about_item += '<p class="title-feature">Original Language</p>';
            for (var i = 0; i < obj.spoken_languages.length; i++) {
                about_item += '<p>' + obj.spoken_languages[i].name + '</p>';
            }
            about_item += '<p class="title-feature">Runtime</p>';
            about_item += '<p>' + obj.runtime + ' minutes</p>';
            about_item += '<p class="title-feature">Budget</p>';
            about_item += '<p>' + str_format.format(obj.budget) + '</p>';
            about_item += '<p class="title-feature">Revenue</p>';
            about_item += '<p>' + str_format.format(obj.revenue) + '</p>';
            about_item += '<p class="title-feature">Genres</p>';
            for (var i = 0; i < obj.genres.length; i++) {
                about_item += '<a href="#" class="genres-item">' + obj.genres[i].name + '</a>';
            }
            about_item += '<p class="title-feature">Keywords</p>';
            about_movie.innerHTML += about_item;


            for (var i = 0; i < 5; i++) {
                var image = "https://image.tmdb.org/t/p/w138_and_h175_face" + obj.credits.cast[i].profile_path;
                // console.log(image);
                var card_item = '<div  class="actor_card">';
                card_item += '<div class="actor_avatar">';
                card_item += '<img src="' + image + '" alt="">';
                card_item += '</div>';
                card_item += '<div class="info_actor">';
                card_item += '<p><a href="../People/details.html?id=' + obj.credits.cast[i].id + '">' + obj.credits.cast[i].name + '</a></p>';
                card_item += '<p>' + obj.credits.cast[i].character + '</p>';
                card_item += '</div>';
                card_item += '</div>';
                cast_card.innerHTML += card_item;
            }
            var bg_image = "https://image.tmdb.org/t/p/w1440_and_h320_bestv2" + obj.belongs_to_collection.backdrop_path;
            var collection_item = '<div class="thumbnail-collection" style="background-image:url(' + bg_image + ') "></div>';
            collection_item += '<div class="panel">';
            collection_item += '<div class="container">';
            collection_item += '<h2 class="title-collection">' + obj.belongs_to_collection.name + '</h2>';
            collection_item += '<p class="info-collection">Includes Mission: Impossible, Mission: Impossible II, Mission: Impossible III</p>';
            collection_item += '<a href="#" class="btn-collection">view the collection</a>';
            collection_item += '</div>';
            collection_item += '</div>';
            collection_item += '</div>';
            collection.innerHTML += collection_item;


        }
    };
    xmlhttp.open("get", url, true);
    xmlhttp.send();
}

function trailer_movie(id) {
    var api_key = "f6f0ae796cca1a731af364386893d5fe";
    var youtube_link = "https://www.youtube.com/watch?v";
    var url = "https://api.themoviedb.org/3/movie/" + id + "/videos?api_key=" + api_key + "&language=en-US";
    var trailers = document.getElementById("trailers");
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            var trailer = JSON.parse(xmlhttp.responseText);

            for (var i = 0; i < trailer.results.length; i++) {
                // console.log(trailer.results[i].key);
                var traier_item = '<div class="trailer_item">';
                traier_item += '<iframe width="560" height="320" src="https://www.youtube.com/embed/' + trailer.results[i].key + '"\n' +
                    '                                    frameborder="0"\n' +
                    '                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"\n' +
                    '                                    allowfullscreen></iframe>';
                traier_item += '</div>';
                trailers.innerHTML += traier_item;
            }

        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

function keyword(id) {
    var api_key = "f6f0ae796cca1a731af364386893d5fe";
    var youtube_link = "https://www.youtube.com/watch?v";
    var url = "https://api.themoviedb.org/3/movie/" + id + "/keywords?api_key=" + api_key;
    var keyword_feature = document.getElementById("keyword");
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            var keyword_respon = JSON.parse(xmlhttp.responseText);

            for (var i = 0; i < keyword_respon.keywords.length; i++) {
                // console.log();
                var keyword_item = '<a href="#" class="genres-item keyword-item">' + keyword_respon.keywords[i].name + '</a>';
                keyword_feature.innerHTML += keyword_item;
            }
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

function recommendations(id) {
    var api_key = "f6f0ae796cca1a731af364386893d5fe";
    var youtube_link = "https://www.youtube.com/watch?v";
    var url = "https://api.themoviedb.org/3/movie/" + id + "/recommendations?api_key=" + api_key + "&language=en-US";
    var recommned_list = document.getElementById("recommned_list");
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            var recommendations_respon = JSON.parse(xmlhttp.responseText);

            for (var i = 0; i < recommendations_respon.results.length; i++) {
                var image = "https://image.tmdb.org/t/p/w250_and_h141_face" + recommendations_respon.results[i].backdrop_path;
                if (recommendations_respon.results[i].backdrop_path == null) {
                    image = "../../Assets/null.png";
                }
                var recommend_item = '<div class="recommend_card">';
                recommend_item += '<div class="image-recommend">';
                recommend_item += '<a class="movie-link" href="../../Blade/Movies/Detail.html?id='+recommendations_respon.results[i].id+'"><img src="' + image + '" alt=""></a>';
                recommend_item += '<div class="sub">';
                recommend_item += '<p><i class="fas fa-calendar-alt"></i> ' + recommendations_respon.results[i].release_date + '</p>';
                recommend_item += '</div>';
                recommend_item += '</div>';
                recommend_item += '<div class="d-flex movie-name">';
                recommend_item += '<p><a class="movie-link" href="../../Blade/Movies/Detail.html?id='+recommendations_respon.results[i].id+'">' + recommendations_respon.results[i].title + '</a></p>';
                recommend_item += '<p style="margin-left: auto">' + recommendations_respon.results[i].vote_average + '<i class="fas fa-star"></i></p>';
                recommend_item += '</div>';
                recommend_item += '</div>';
                recommend_item += '</div>';
                recommned_list.innerHTML += recommend_item;
            }
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}



