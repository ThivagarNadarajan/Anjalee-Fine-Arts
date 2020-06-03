function load() {
    var inner = document.getElementById("inner");
    for (var i = 2; i < 25; i++) {
        if (i == 3) continue;

        var div = document.createElement("div");
        div.className = "carousel-item";

        var img = document.createElement("img");
        img.src = "img/events/" + i + ".jpg";
        img.className = "img-responsive";

        div.appendChild(img);
        inner.appendChild(div);
    }
}