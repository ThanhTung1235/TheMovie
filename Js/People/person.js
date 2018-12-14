document.addEventListener('DOMContentLoaded',function () {
    Person_list();
});
function Person_list() {
    var list_person = document.getElementById("list_person");
    var token = "f6f0ae796cca1a731af364386893d5fe";
    var url = "https://api.themoviedb.org/3/person/popular?api_key=" + token;

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            var obj = JSON.parse(xmlhttp.responseText);
            for (var i = 0; i < obj.results.length; i++) {
                var thumbnail = "https://image.tmdb.org/t/p/w185_and_h278_bestv2/" + obj.results[i].profile_path;
                if (obj.results[i].profile_path == null) {
                    thumbnail = "../../Assets/Noavatar.jpg";
                }
                var item = '<div class="person-card"><a href="../../Blade/People/Details.html?id='+obj.results[i].id +'">';
                item += ' <div class="person-thumbnail" style="background-image: url(' + thumbnail + ')" title="' + obj.results[i].name + '">';
                item += '</div>';
                item += '<div class="person-info">';
                item += '<p>' + obj.results[i].name +'</p>';
                item += '<p>' + obj.results[i].known_for[0].title + ' </p>';
                item += '</div>';
                item += '</a></div>';
                list_person.innerHTML += item;
            }
        }
    };
    xmlhttp.open("get", url, 'true');
    xmlhttp.send();
}
