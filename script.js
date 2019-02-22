// ----------DISPLAY - UNDISPLAY NAV BAR MOBILE SCREEN (MAX 767px)-----------------------
function openNav() {
    var nav = document.getElementById("containernav");
    if ($(nav).css('display') =='none') {
        nav.style.display = "block";
    } else {
        nav.style.display = "none";
    }
}
