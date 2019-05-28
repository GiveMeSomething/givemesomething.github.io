function scrollTo(partName) {
    var part = document.getElementById(partName);
    var rect = part.getBoundingClientRect();
    scrollBy(0, rect.top);
}
function scrollToIntro() {
    var part = document.getElementById('profile-banner');
    var rect = part.getBoundingClientRect();
    scrollBy(0, rect.bottom);
}

document.getElementById("toIntro").onclick = function () {
    scrollToIntro();
};
document.getElementById("toActivity").onclick = function () {
    scrollTo('activity');
};
document.getElementById("toProject").onclick = function () {
    scrollTo('project');
};
document.getElementById("toAchievement").onclick = function () {
    scrollTo('achievement');
};
document.getElementById("toContact").onclick = function () {
    scrollTo('contact');
};


