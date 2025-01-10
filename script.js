// GENERAL
var bgColor = 'rgb(27,32,45)';
var body = document.getElementById('body');
body.style.backgroundColor = bgColor;

var topDivList = document.getElementsByClassName('top-div');
for (let i = 0; i < topDivList.length; i++) {
    topDivList[i].style.marginTop = 10 + "px";
}

// HEADER
var headerWidth = 5;
var headerColor = 'rgb(129, 200, 255)';
var header = document.getElementById('headerelement');
header.style.height = headerWidth + "em";
header.style.backgroundColor = headerColor;

var profilePictureList = document.getElementsByClassName('profile-picture');
for (let i = 0; i < profilePictureList.length; i++) {
    profilePictureList[i].style.height = headerWidth + "px";
}

var headerLinks = document.getElementById('header-links-container');
headerLinks.style.height = headerWidth + "px";


// FOOTER

var footer = document.getElementById('footer');
footer.style.height= 1.75*headerWidth + "em";
footer.style.backgroundColor = headerColor

// HOME
var introHeight = 5 * headerWidth;
var intro = document.getElementById('intro');
intro.style.height = introHeight + "em";
var introPic = document.getElementById('intropic');
introPic.style.width = introHeight + "em";