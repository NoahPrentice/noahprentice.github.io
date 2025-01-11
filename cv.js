// GENERAL
var bgColor = 'rgb(27,32,45)';
var body = document.getElementById('body');
body.style.backgroundColor = bgColor;

// HEADER
var headerHeight = 5;
var headerColor = 'rgb(129, 200, 255)';
var header = document.getElementById('headerelement');
header.style.height = headerHeight + "em";
header.style.backgroundColor = headerColor;

var headerLinks = document.getElementById('header-links-container');
headerLinks.style.height = headerHeight + "em";


// FOOTER

var footer = document.getElementById('footer');
var footerHeight = 1.75 * headerHeight;
footer.style.height = footerHeight + "em";
footer.style.backgroundColor = headerColor;
var sparrowIconBox = document.getElementById('sparrowIconBox');
sparrowIconBox.style.width = footerHeight + "em";

var linkedinIconImg = document.getElementById('linkedinIconImg');
linkedinIconImg.style.width = 2.5 + "em";
var githubIconImg = document.getElementById('githubIconImg');
githubIconImg.style.width = 2.5 + "em";

// CV
var corvallisPic = document.getElementById('corvallisPic');
// corvallisPic.style.backgroundImage = "url(/photos/corvallisField.jpeg)";
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