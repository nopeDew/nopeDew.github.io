var object3 = document.getElementById("object3")[0];
var object4 = document.getElementById("object4")[0];
function overlap (element1, element2) {
    var eva = element1.getBoundingClientRect();
    var evangelion = element2.getBoudingClientRect();
    var overlap = !(eva.right < evangelion.left || eva.left > evangelion.right || eva.bottom < evangelion.top || eva.top > evangelion.bottom);
    if overlap == false {
        var html = document.getElementById("html");
        html.style.backgroundImage = "url('https://giffiles.alphacoders.com/113/113020.gif')";
    }
setTimeout(overlap, 1500, object3, object4);

