const banner1 = document.getElementById("banner-1");

window.onLoad = function () {
    if (screen.width < 1300) {
        banner1.style.backgroundPosition = "left";
    } else {
        banner1.style.backgroundPosition = "center";
    }
};