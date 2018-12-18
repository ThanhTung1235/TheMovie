document.addEventListener('DOMContentLoaded', function () {
    var url = new URL(window.location.href);
    var id = url.searchParams.get("id");
    if (id == null || id.length == 0) {
        return;
    }
    Person(id);
    Movie_credit(id);
});

function Person(id) {

    var url = "https://api.themoviedb.org/3/person/" + id + "?api_key=" + localStorage.getItem("api_key");
    var person = document.getElementById("person");
    var personal_info = document.getElementById("personal_info");

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            var Person = JSON.parse(xmlhttp.responseText);
            console.log(Person.name);

            var gender = Person.gender;
            gender = {
                1: "Female",
                2: "Male",
                0: "-"
            };
            console.log(gender[Person.gender]);
            // personal info
            var item = '';
            item += '<h2 class="detail-item">Personal Info</h2>';
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
            item += '</ul>';
            personal_info.innerHTML += item;
            //
            // Detail
            var image = "https://image.tmdb.org/t/p/w185_and_h278_bestv2/" + Person.profile_path;
            if (Person.profile_path == null || Person.profile_path.length == 0) {
                image = "../../Assets/Noavatar.jpg";
            }
            var biography = Person.biography;
            if (Person.biography == null || Person.biography.length == 0) {
                biography = "We don't have a biography for Jimmy Tatro.";
            }
            var personItem = '';
            personItem += '<div class="detail-thumbnail">';
            personItem += '<div class="person-avatar">';
            personItem += '<img class="img-fluid" src="' + image + '" alt="">';
            personItem += '</div>';
            personItem += '</div>';
            personItem += '<div class="detail">';
            personItem += '<div class="detail-info">';
            personItem += '<h2 class="detail-title"> ' + Person.name + '</h2>';
            personItem += '<p class="annotation">Biography</p>';
            personItem += '<div class="biography">' + biography + '</div>';
            personItem += '<p class="btn-more d-hidden"><i class="fas fa-chevron-down"></i></p>';
            personItem += '</div>';
            personItem += '</div>';
            personItem += '</div>';
            person.innerHTML += personItem;


        }
    };
    xmlhttp.open('GET', url, true);
    xmlhttp.send();

}

function Movie_credit(id) {
    var url = "https://api.themoviedb.org/3/person/" + id + "/movie_credits?api_key=" + localStorage.getItem("api_key") + "&language=en-US";
    var list_credit = document.getElementById("list_credit");
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            var credit = JSON.parse(xmlhttp.responseText);
            for (var i = 0; i < 6; i++) {
                var credit_item = '<div class="credit_card">';
                credit_item += '<a href="../../Blade/Movies/Detail.html?id='+credit.cast[i].id +'"><div class="image_credit">';
                credit_item += '<img src="https://image.tmdb.org/t/p/w150_and_h225_bestv2' + credit.cast[i].poster_path + '" alt="">';
                credit_item += '</div></a>';
                credit_item += '<a class="name_credit" href="../../Blade/Movies/Detail.html?id='+credit.cast[i].id +'"><p>'+credit.cast[i].original_title+'</p></a>';
                credit_item += '</div>';
                list_credit.innerHTML += credit_item;

            }
        }
    };
    xmlhttp.open('GET', url, true);
    xmlhttp.send();
}

