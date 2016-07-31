// Globals
var navicon = document.querySelector('#nav-icon-menu');
var menu = document.querySelector('.nav-list');
navicon.onclick = function() {
    var menuDisplay = window.getComputedStyle(menu).display;

    if(menuDisplay === 'none') {
        menu.style.display = 'block';
        navicon.className = 'icon-remove';
    }
    else {
        menu.style.display = 'none';
        navicon.className = 'icon-menu';
    }
}