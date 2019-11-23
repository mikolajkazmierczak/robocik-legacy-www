'use strict';

var menu = document.querySelector('menu');
var menuButton = document.querySelector('.menu-button');
var menuImgOpen = menuButton.querySelector('.menu-button__icon--open');
var menuImgClose = menuButton.querySelector('.menu-button__icon--close');
var menu_opened_class = 'menu--opened';
var menu_button_active_class = 'menu-button__icon--active';

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

menuButton.onclick = function () {
  var is_menu_opened = menu.classList.contains(menu_opened_class);

  if (is_menu_opened) {
    CloseMenu();
  } else {
    OpenMenu();
  }
};
//# sourceMappingURL=menu.js.map