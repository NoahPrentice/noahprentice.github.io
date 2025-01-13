// var introPicWidth = 66; // Width as % of vw, browser width
// var introPicAspectRatio = 4 / 3;
// var introPicHeight = introPicWidth / introPicAspectRatio;
// var introPic = document.getElementById('intropic');
// var introPicMaxHeight = 7 * headerHeight // Max height in em
// if (introPicHeight > introPicMaxHeight) {
//     introPic.style.height = introPicMaxHeight + "em";
//     introPic.style.width = introPicAspectRatio * introPicMaxHeight + "em";
// } else if (introPicWidth * window.innerWidth > 0) {

// } else {
//     introPic.style.width = introPicWidth + "%";
//     // introPic.style.height = introPicHeight + "%";
// }

var introPicImg = document.getElementById("intropicImg")
var picChoice = Math.floor(Math.random() * 2);
switch (picChoice) {
    case 0:
        introPicImg.src = "/photos/homePhotoLandscape.JPG";
        break;
    case 1:
        introPicImg.src = "/photos/homeBear.JPG";
        break;
    default:
        introPicImg.src = "/photos/homePhotoLandscape.JPG";
        break;
}
