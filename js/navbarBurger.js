/*
: ************************************************************************************************************
                                    % La barre de navigation.
: ************************************************************************************************************
*/

/*
. --------------------------------------------------------------------------------
                                £ Définitions des variables.
. --------------------------------------------------------------------------------
*/

//. --------------------Le bouton du menu hamburger.--------------------
var boutonMenuHamburger = document.getElementById('ham');

//. --------------------Le bouton du menu hamburger.--------------------
var boutonX = document.getElementById('menuX');

//. --------------------Les éléments cachés.--------------------
var cacherElementMenuVertical = document.getElementById('cacherElementMenuVertical');

//. --------------------Les liens du menus verticals.--------------------
var menuLink = document.getElementsByClassName('menuLink');

/*
. --------------------------------------------------------------------------------
                £ Le click sur l'icône du menu burger ouvre le menu vertical.
. --------------------------------------------------------------------------------
*/

boutonMenuHamburger.addEventListener('click', function showMenuVertical() {
    cacherElementMenuVertical.classList.replace('hideMenuVertical', 'showMenuVertical');
});

/*
. --------------------------------------------------------------------------------
                £ Le click sur l'icône X ferme le menu vertical.
. --------------------------------------------------------------------------------
*/

boutonX.addEventListener('click', function hideMenuVertical(){
    cacherElementMenuVertical.classList.replace('showMenuVertical', 'hideMenuVertical');
});

/*
. --------------------------------------------------------------------------------
                £ Le click sur l'un des liens du menu vertical le ferme.
. --------------------------------------------------------------------------------
*/

for (var i=0; i < menuLink.length; i++) {
    menuLink[i].addEventListener('click', function hideMenuVertical() {
        cacherElementMenuVertical.classList.replace('showMenuVertical', 'hideMenuVertical');
    })
};