var introPicWidth = 66; // Width as % of vw, browser width
var introPicAspectRatio = 4 / 3;
var introPicHeight = introPicWidth / introPicAspectRatio;
var introPic = document.getElementById('intropic');
var introPicMaxHeight = 7 * headerHeight // Max height in em
if (introPicHeight > introPicMaxHeight) {
    introPic.style.height = introPicMaxHeight + "em";
    introPic.style.width = introPicAspectRatio * introPicMaxHeight + "em";
} else {
    introPic.style.width = introPicWidth + "vw";
    introPic.style.height = introPicHeight + "vw";
}
var picChoice = Math.floor(Math.random() * 2);
switch (picChoice) {
    case 0:
        introPic.style.backgroundImage = "url(/photos/homePhotoLandscape.JPG)";
        break;
    case 1:
        introPic.style.backgroundImage = "url(/photos/homeBear.JPG)";
        break;
    default:
        introPic.style.backgroundImage = "url(/photos/homePhotoLandscape.JPG)";
        break;
}
