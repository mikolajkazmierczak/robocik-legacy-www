'use strict';

/* Header */

let logo   = document.querySelector('.logo');
let header = document.querySelector('header');


/* Menu */

let menu       = document.querySelector('menu');
let menuButton = document.querySelector('.menu-button');

let menuImgOpen  = menuButton.querySelector('.menu-button__icon--open');
let menuImgClose = menuButton.querySelector('.menu-button__icon--close');

let menu_opened_class        = 'menu--opened';
let menu_button_active_class = 'menu-button__icon--active';

let is_menu_opened = menu.classList.contains(menu_opened_class);


/* Team Section */

let sectionTeam = document.querySelector('.section-team');

let sectionTeamName    = document.querySelector('.section-team__text > h2');
let sectionTeamRole    = document.querySelector('.section-team__text > h3');
let sectionTeamContact = document.querySelector('.section-team__text > h4');
let sectionTeamText    = document.querySelector('.section-team__text > p');
let sectionTeamPhoto   = document.querySelector('.section-team__img > img');

let sectionTeamArrowPrevious = document.querySelector('.section-team__arrow--previous');
let sectionTeamArrowNext     = document.querySelector('.section-team__arrow--next');

let arrow_visible_class = 'arrow--visible';
