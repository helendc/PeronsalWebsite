var ready = (callback) => {
    if (document.readyState != "loading") callback();
    else document.addEventListener("DOMContentLoaded", callback);
}
ready(() => {

var coll = document.getElementsByClassName("collapsible");
for (var i = 0; i < coll.length; i++) {
    var content = document.getElementById("content"+i);
    coll[i].onclick = function() {
        if (content.style.display === "inline") {
        content.style.display = "none";
        } else {
        content.style.display = "inline";
        }
    };
}
})