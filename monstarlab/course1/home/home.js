
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
}