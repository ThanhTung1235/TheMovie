document.addEventListener('DOMContentLoaded',function () {
    var url = new URL(window.location.href);
    var id = url.searchParams.get("id");
    if (id ==null || id.length == 0){
        return;
    }
    Person(id);
});
function Person(id) {
    var api_key = "f6f0ae796cca1a731af364386893d5fe";
    var url = "https://api.themoviedb.org/3/person/"+id+"?api_key="+ api_key;
    var xmlHttpRequest = new XMLHttpRequest();
    xmlHttpRequest.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
        var Person =  JSON.parse(xmlHttpRequest.responseText);
        console.log(Person.name);
        }
    };
    xmlHttpRequest.open('GET', url, true);
    xmlHttpRequest.send();

}