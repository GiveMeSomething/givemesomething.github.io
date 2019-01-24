function fixStyleBanner () {
    if (window.width < 1300) {
        document.getElementById("banner-1").style.backgroundPosition = "left";
    } else {
        document.getElementById("banner-1").style.backgroundPosition = "center";
    }
}