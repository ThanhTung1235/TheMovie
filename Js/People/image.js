document.addEventListener("DOMContentLoaded", function () {
    var url = new URL(window.location.href);
    var id = url.searchParams.get("id");
    var name = url.searchParams.get("name");
    var image = url.searchParams.get("image");
    if (id == null && name == null) {
        return;
    }
    get_image(id);
    change_info(name, image,id);
});

function get_image(id) {
    var list_cast = document.getElementById("list_cast");
    var url = "https://api.themoviedb.org/3/person/" + id + "/images?api_key=" + localStorage.getItem("api_key");
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            var list_image = JSON.parse(xmlhttp.responseText);
            for (var i = 0; i < list_image.profiles.length; i++) {
                var item_cast = '<div class="cast-card">';
                item_cast += '<div class="thumbnail-cast">';
                item_cast += '<a target="_blank" href="https://image.tmdb.org/t/p/original'+list_image.profiles[i].file_path+'"><img class="img-fluid" src="https://image.tmdb.org/t/p/w440_and_h660_bestv2' + list_image.profiles[i].file_path + '" alt=""></a>';
                item_cast += '</div>';
                item_cast += '<div class="info-cast">';
                item_cast += '<h3 class="title-info">Info</h3>';
                item_cast += '<div class="info-post">';
                item_cast += '<p>Added by</p>';
                item_cast += '<a href="#">ice man 146</a>';
                item_cast += '<p>Size</p>';
                item_cast += '<span>' + list_image.profiles[i].width + ' *' + list_image.profiles[i].height + '</span>';
                item_cast += '</div>';
                item_cast += '</div>';
                item_cast += '</div>';
                list_cast.innerHTML += item_cast;
            }

        }
    };
    xmlhttp.open('GET', url, true);
    xmlhttp.send();
}

function change_info(name, image,id) {
    var header_sm = document.getElementById("header_sm");
    var header_item = '<div class="avatar-cast">';
    header_item += '<img class="img-fluid" src="'+image+'" alt="">';
    header_item += '</div>';
    header_item += '<div class="name-cast">';
    header_item += '<h2>'+name+'</h2>';
    header_item += '<a class="back-link" href="../../Blade/People/Details.html?id='+id+'"><i class="fas fa-long-arrow-alt-left"></i>Back to main</a>';
    header_item += ' </div>';
    header_item += '</div>';
    header_sm.innerHTML += header_item;


}