var api_key = "f6f0ae796cca1a731af364386893d5fe";
var session_id = "8ff7e54557465e67de3e3a0816a75e7023fb8ecb";
var image_server = "https://image.tmdb.org/t/p/w185_and_h278_bestv2";
var url = "https://api.themoviedb.org/3/movie/top_rated?api_key=" + api_key;
var test = document.getElementById("test");
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
        var obj = JSON.parse(xmlhttp.responseText);
        for (var i = 0; i < obj.results.length; i++) {
            console.log(obj.results[i].poster_path);
            var item = '<div class="movie-card" title="'+obj.results[i].title +'">';
            item += '<div class="img-movie">';
            item += '<img class="img-fluid" src="https://image.tmdb.org/t/p/w185_and_h278_bestv2/'+ obj.results[i].poster_path+'" alt="">';
            item += '</div>';
            item += '<div class="info">';
            item += '<a href="#"> <h3 class="pd-l title-movie" > '+obj.results[i].title +'</h3></a>';
            item += '<p class="pd-l time">'+ obj.results[i].release_date+'</p>';
            item += ' <p class="info-content pd-l d-hidden-l time"> '+obj.results[i].overview+'</p>';
            item += '<div class="more-info">';
            item += '<a class="pd-l" href="#">More info</a>';
            item += '</div>';
            item += '</div>';
            item += '</div>';
            test.innerHTML += item;
        }

    }

};
xmlhttp.open('get', url, 'true');
xmlhttp.send();
