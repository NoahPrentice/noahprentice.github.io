var schoolPic = document.getElementById('schoolPic');
var picChoice = Math.floor(Math.random() * 5);
switch (picChoice) {
    case 0:
        schoolPic.style.backgroundImage = "url(/photos/geese.jpeg)";
        break;
    case 1:
        schoolPic.style.backgroundImage = "url(/photos/oloo.jpeg)";
        break;
    case 2:
        schoolPic.style.backgroundImage = "url(/photos/kQuad1.jpeg)";
        break;
    case 3:
        schoolPic.style.backgroundImage = "url(/photos/kQuad2.jpeg)";
        break;
    case 4:
        schoolPic.style.backgroundImage = "url(/photos/books.jpeg)";
        break;
    default:
        schoolPic.style.backgroundImage = "url(/photos/kQuad1.jpeg)";
        break;
}