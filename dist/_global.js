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

var sectionTeam = document.querySelector('.section-team__slider');
var sectionTeamName = document.querySelector('.slider__name');
var sectionTeamRole = document.querySelector('.slider__role');
var sectionTeamContact = document.querySelector('.slider__contact');
var sectionTeamText = document.querySelector('.slider__text');
var sectionTeamPhoto = document.querySelector('.slider__photo > img');
var sectionTeamArrowPrevious = document.querySelector('.slider__arrow--previous');
var sectionTeamArrowNext = document.querySelector('.slider__arrow--next');
var arrow_visible_class = 'slider__arrow--visible';
//# sourceMappingURL=_global.js.map