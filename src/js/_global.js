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

let slider = document.querySelector(
  '.section-team__slider');

let sliderName    = document.querySelector(
  '.slider__name');
let sliderRole    = document.querySelector(
  '.slider__role');
let sliderContact = document.querySelector(
  '.slider__contact');
let sliderText    = document.querySelector(
  '.slider__text');

let sliderImg = document.querySelector(
  '.slider__img');

let sliderArrowPrevious = document.querySelector(
  '.slider__arrow--previous');
let sliderArrowNext     = document.querySelector(
  '.slider__arrow--next');

let arrow_visible_class = 'slider__arrow--visible';
