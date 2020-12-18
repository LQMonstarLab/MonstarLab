<<<<<<< HEAD
// select mkt or tech to display
let tech = document.getElementsByClassName("tech")[0];
let mkt = document.getElementsByClassName("mkt")[0];
tech.onclick = function() {
    tech.style.color = "#1c1d1f";
    tech.style.fontWeight = "bold";
    mkt.style.color = "#696c6d";
    mkt.style.fontWeight = "400";

}
mkt.onclick = function() {
    mkt.style.fontWeight = "bold";
    mkt.style.color = "#1c1d1f";
    tech.style.color = "#696c6d";
    tech.style.fontWeight = "400";
}


// load more content by Nodeclone
let items = document.getElementById("content");
let loadMore = document.getElementById("loadMore");
var newItems = items.cloneNode(true);
var box = document.getElementById("contentBox");
loadMore.onclick = function() {
    box.appendChild(newItems);
=======

// select mkt or tech to display
let tech = document.getElementsByClassName("tech")[0];
let mkt = document.getElementsByClassName("mkt")[0];
tech.onclick = function () {
    tech.style.color = "#1c1d1f"
    mkt.style.color = "#696c6d"
}
mkt.onclick = function () {
    mkt.style.color = "#1c1d1f"
    tech.style.color = "#696c6d"
}
// load more content by Nodeclone
document.getElementById("loadMore").onclick = function() {
    let items = document.getElementById("ic");
    let newItems = items.cloneNode(true);
    document.getElementById("itemsBox").appendChild(newItems);
>>>>>>> aed1c03b5a4cdd6b341f46c7f387694759397b3b
}