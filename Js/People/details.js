document.addEventListener('DOMContentLoaded', function () {
    var url = new URL(window.location.href);
    var id = url.searchParams.get("id");
    if (id == null || id.length == 0) {
        return;
    }
    Person(id);
});

function Person(id) {
    var api_key = "f6f0ae796cca1a731af364386893d5fe";
    var url = "https://api.themoviedb.org/3/person/" + id + "?api_key=" + api_key;
    var thumbnail = document.getElementById("thumbnail_person");
    var content = document.getElementById("content_detail");
    var xmlHttpRequest = new XMLHttpRequest();
    xmlHttpRequest.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var Person = JSON.parse(xmlHttpRequest.responseText);
            console.log(Person.name);

            var gender = Person.gender;
            gender = {
                1: "Female",
                2: "Male",
                0: "-"
            };
            console.log(gender[Person.gender]);
            var item = '<img class="img-fluid" src="https://image.tmdb.org/t/p/w185_and_h278_bestv2/' + Person.profile_path + '" alt="">';
            item += '<h2 class="detail-item">' + Person.name + '</h2>';
            item += '<ul class="detail-item">';
            item += '<li class="item-d"><b>Known For</b></li>';
            item += '<li class="item-d">' + Person.known_for_department + '</li>';
            item += '</ul>';
            item += '<ul class="detail-item">';
            item += '<li class="item-d"><b>Gender</b></li>';
            item += '<li class="item-d">' + gender[Person.gender] + '</li>';
            item += '</ul>';
            item += '<ul class="detail-item">';
            item += '<li class="item-d"><b>Known Credits</b></li>';
            item += '<li class="item-d"> - </li>';
            item += ' </ul>';
            item += '<ul class="detail-item">';
            item += '<li class="item-d"><b>Birthday</b></li>';
            item += '<li class="item-d">' + Person.birthday + '</li>';
            item += '</ul>';
            item += '<ul class="detail-item">';
            item += '<li class="item-d"><b>Place of Birth</b></li>';
            item += '<li class="item-d">' + Person.place_of_birth + '</li>';
            item += '</ul>';
            item += '<ul class="detail-item">';
            item += '<li class="item-d"><b>Official Site</b></li>';
            item += '<li class="item-d"> ' + Person.homepage + ' </li>';
            item += '</ul>';
            item += '<ul class="detail-item">';
            item += '<li class="item-d"><b>Also Known As</b></li>';
            for (var i = 0; i < Person.also_known_as.length; i++) {
                item += '<li class="item-d">' + Person.also_known_as[i] + '</li>';
            }
            thumbnail.innerHTML += item;
            content_detail.innerHTML = '<h2 class="detail-title">'+Person.name+'</h2>\n' +
                '                <div class="detail-info">\n' +
                '                    <p>Biography</p>\n' +
                '                    <p class="biography">'+Person.biography+'</p>\n' +
                '                    <p class="btn-more"><i class="fas fa-chevron-down"></i></p>\n' +
                '                </div>';
        }
    };
    xmlHttpRequest.open('GET', url, true);
    xmlHttpRequest.send();

}

