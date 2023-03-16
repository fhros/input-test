var url = prompt("link tai jotai");

var link = document.getElementById("link");

if(url.substr(0, 4) == "http") {
    link.innerHTML = "<a href='" + url + "'>" + url + "</a>";
} else {
    link.innerHTML = "http://" + url + ".com";
}