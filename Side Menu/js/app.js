let sideMenuStatus = false;
const sideMenuEl = document.getElementById('side_menu');
const sideMenuMiniEl = document.getElementById('side_menu_mini');
function sideMenu () {
    sideMenuStatus = !sideMenuStatus;
    if(sideMenuStatus) {
        sideMenuMiniEl.style.visibility = 'hidden';
        sideMenuEl.style.visibility = 'visible';
    } else {
        sideMenuEl.style.visibility = 'hidden';
        sideMenuMiniEl.style.visibility = 'visible';
    }
}