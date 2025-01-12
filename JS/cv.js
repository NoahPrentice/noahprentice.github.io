var corvallisPic = document.getElementById('corvallisPic');
var picChoice = Math.floor(Math.random() * 4);
switch (picChoice) {
    case 0:
        corvallisPic.style.backgroundImage = "url(/photos/corvallisSkyHigh.jpeg)";
        break;
    case 1:
        corvallisPic.style.backgroundImage = "url(/photos/corvallisField.jpeg)";
        break;
    case 2:
        corvallisPic.style.backgroundImage = "url(/photos/corvallisQuad.jpeg)";
        break;
    case 3:
        corvallisPic.style.backgroundImage = "url(/photos/corvallisHike.jpeg)";
        break;
    default:
        corvallisPic.style.backgroundImage = "url(/photos/corvallisSkyHigh.jpeg)";
        break;
}