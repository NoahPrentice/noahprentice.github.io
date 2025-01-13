var headerHeight = 5;
var headerColor = 'rgb(129, 200, 255)';
var header = document.getElementById('headerelement');
header.style.height = headerHeight + "em";
header.style.backgroundColor = headerColor;

var headerLinks = document.getElementById('header-links-container');
headerLinks.style.height = headerHeight + "em";

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function dropdownOnClick() {
    document.getElementById("TOCDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

var dropdownDiv = document.getElementById("dropdownDiv")
dropdownDiv.style.top = 5.3 + "em";
