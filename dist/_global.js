'use strict';
/* Header */

var logo = document.querySelector('.logo');
var header = document.querySelector('header');
/* Menu */

var menu = document.querySelector('menu');
var menuButton = document.querySelector('.menu-button');
var menuImgOpen = menuButton.querySelector('.menu-button__icon--open');
var menuImgClose = menuButton.querySelector('.menu-button__icon--close');
var menu_opened_class = 'menu--opened';
var menu_button_active_class = 'menu-button__icon--active';
var is_menu_opened = menu.classList.contains(menu_opened_class);
/* Team Section */

var sectionTeam = document.querySelector('.section-team > .section-team__slider');
var sectionTeamName = document.querySelector('.section-team__slider > .section-team__text > h1');
var sectionTeamRole = document.querySelector('.section-team__slider > .section-team__text > h3');
var sectionTeamContact = document.querySelector('.section-team__slider > .section-team__text > h4');
var sectionTeamText = document.querySelector('.section-team__slider > .section-team__text > p');
var sectionTeamPhoto = document.querySelector('.section-team__slider > .section-team__img > img');
var sectionTeamArrowPrevious = document.querySelector('.section-team__slider > .section-team__arrow--previous');
var sectionTeamArrowNext = document.querySelector('.section-team__slider > .section-team__arrow--next');
var arrow_visible_class = 'arrow--visible';
//# sourceMappingURL=_global.js.map