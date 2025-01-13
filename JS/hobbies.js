var hobbiesPic = document.getElementById('hobbiesPic');
var picChoice = Math.floor(Math.random() * 13);
switch (picChoice) {
    case 0:
        hobbiesPic.style.backgroundImage = "url(/photos/cabin.jpg)";
        break;
    case 1:
        hobbiesPic.style.backgroundImage = "url(/photos/coast.jpeg)";
        break;
    case 2:
        hobbiesPic.style.backgroundImage = "url(/photos/coastalRange.jpeg)";
        break;
    case 3:
        hobbiesPic.style.backgroundImage = "url(/photos/colorado.jpeg)";
        break;
    case 4:
        hobbiesPic.style.backgroundImage = "url(/photos/fog.jpeg)";
        break;
    case 5:
        hobbiesPic.style.backgroundImage = "url(/photos/glacier2.jpeg)";
        break;
    case 6:
        hobbiesPic.style.backgroundImage = "url(/photos/mirror.jpeg)";
        break;
    case 7:
        hobbiesPic.style.backgroundImage = "url(/photos/pitt.jpeg)";
        break;
    case 8:
        hobbiesPic.style.backgroundImage = "url(/photos/sparrow1.jpeg)";
        break;
    case 9:
        hobbiesPic.style.backgroundImage = "url(/photos/sunRays.jpeg)";
        break;
    case 10:
        hobbiesPic.style.backgroundImage = "url(/photos/tabAndErin.jpg)";
        break;
    case 11:
        hobbiesPic.style.backgroundImage = "url(/photos/tabAndGM.jpeg)";
        break;
    case 12:
        hobbiesPic.style.backgroundImage = "url(/photos/union.jpeg)";
        break;
    default:
        hobbiesPic.style.backgroundImage = "url(/photos/mirror.jpeg)";
        break;
}