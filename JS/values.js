var valuesPic = document.getElementById('valuesPic');
var picChoice = Math.floor(Math.random() * 4);
switch (picChoice) {
    case 0:
        valuesPic.style.backgroundImage = "url(/photos/seaside.jpeg)";
        break;
    case 1:
        valuesPic.style.backgroundImage = "url(/photos/llama.jpeg)";
        break;
    case 2:
        valuesPic.style.backgroundImage = "url(/photos/handsoff.jpg)";
        break;
    case 3:
        valuesPic.style.backgroundImage = "url(/photos/duckriver.jpeg)";
        break;
    default:
        valuesPic.style.backgroundImage = "url(/photos/llama.jpeg)";
        break;
}