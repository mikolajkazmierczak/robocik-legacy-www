'use strict'

let menu = document.querySelector('menu');
let menuButton = document.querySelector('.menu-button');

let menuImgOpen = menuButton.querySelector('.menu-button__icon--open');
let menuImgClose = menuButton.querySelector('.menu-button__icon--close');

let menu_opened_class = 'menu--opened';
let menu_button_active_class = 'menu-button__icon--active';

function OpenMenu() {
  menu.classList.add(menu_opened_class);
  menuImgOpen.classList.remove(menu_button_active_class);
  menuImgClose.classList.add(menu_button_active_class);
}

function CloseMenu() {
  menu.classList.remove(menu_opened_class);
  menuImgOpen.classList.add(menu_button_active_class);
  menuImgClose.classList.remove(menu_button_active_class);
}

menuButton.onclick = () => {
  let is_menu_opened = menu.classList.contains(menu_opened_class);
  if(is_menu_opened) {
    CloseMenu();
  } else {
    OpenMenu();
  }
}

