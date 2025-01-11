// GENERAL
var bgColor = 'rgb(27,32,45)';
var body = document.getElementById('body');
body.style.backgroundColor = bgColor;

var topDivList = document.getElementsByClassName('top-div');
for (let i = 0; i < topDivList.length; i++) {
    topDivList[i].style.marginTop = 10 + "px";
}

// HEADER
var headerHeight = 5;
var headerColor = 'rgb(129, 200, 255)';
var header = document.getElementById('headerelement');
header.style.height = headerHeight + "em";
header.style.backgroundColor = headerColor;

var profilePictureList = document.getElementsByClassName('profile-picture');
for (let i = 0; i < profilePictureList.length; i++) {
    profilePictureList[i].style.height = headerHeight + "px";
}

var headerLinks = document.getElementById('header-links-container');
headerLinks.style.height = headerHeight + "px";


// FOOTER

var footer = document.getElementById('footer');
var footerHeight = 1.75*headerHeight
footer.style.height= footerHeight + "em";
footer.style.backgroundColor = headerColor
var sparrowIconBox = document.getElementById('sparrowIconBox')
sparrowIconBox.style.width = footerHeight + "em";

var linkedinIconImg = document.getElementById('linkedinIconImg')
linkedinIconImg.style.width = 2.5 + "em";
var githubIconImg = document.getElementById('githubIconImg')
githubIconImg.style.width = 2.5 + "em";

// HOME
var introPicWidth = 66; // Width as % of vw, browser width
var introPicAspectRatio = 4/3;
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
