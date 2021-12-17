var ready = (callback) => {
    if (document.readyState != "loading") callback();
    else document.addEventListener("DOMContentLoaded", callback);
}
ready(() => {

    var coll0 = document.getElementById("coll0");
    var cont0 = document.getElementById("content0");
    coll0.onclick = function(){
        if (cont0.style.display === "inline") {
            cont0.style.display = "none";
            coll0.classList.remove('expanded');
            coll0.classList.add('inactive');
        } else {
            cont0.style.display = "inline";
            coll0.classList.remove('inactive');
            coll0.classList.add('expanded');
        }
    };
    var coll1 = document.getElementById("coll1");
    var cont1 = document.getElementById("content1");
    coll1.onclick = function(){
        if (cont1.style.display === "inline") {
            cont1.style.display = "none";
            coll1.classList.remove('expanded');
            coll1.classList.add('inactive');
        } else {
            cont1.style.display = "inline";
            coll1.classList.remove('inactive');
            coll1.classList.add('expanded');       
        }
    };
    var coll2 = document.getElementById("coll2");
    var cont2 = document.getElementById("content2");
    coll2.onclick = function(){
        if (cont2.style.display === "inline") {
            cont2.style.display = "none";
            coll2.classList.remove('expanded');
            coll2.classList.add('inactive');
        } else {
            cont2.style.display = "inline";
            coll2.classList.remove('inactive');
            coll2.classList.add('expanded');  
        }
    };


})