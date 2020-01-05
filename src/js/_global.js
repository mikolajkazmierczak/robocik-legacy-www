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

let sectionTeam = document.querySelector(
  '.section-team__slider');

let sectionTeamName    = document.querySelector(
  '.slider__name');
let sectionTeamRole    = document.querySelector(
  '.slider__role');
let sectionTeamContact = document.querySelector(
  '.slider__contact');
let sectionTeamText    = document.querySelector(
  '.slider__text');

let sectionTeamPhoto   = document.querySelector(
  '.slider__photo > img');

let sectionTeamArrowPrevious = document.querySelector(
  '.slider__arrow--previous');
let sectionTeamArrowNext     = document.querySelector(
  '.slider__arrow--next');

let arrow_visible_class = 'slider__arrow--visible';
