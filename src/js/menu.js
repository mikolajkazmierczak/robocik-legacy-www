'use strict';

class Menu {
  constructor(el) {
    this.el = el;
    this.menuImgOpen = document.querySelector('.menu-button__icon--open');
    this.menuImgClose = document.querySelector('.menu-button__icon--close');
  }

  open() {
    this.el.classList.add('menu--opened');
    this.menuImgOpen.classList.remove('menu-button__icon--active');
    this.menuImgClose.classList.add('menu-button__icon--active');
    header.show();
  }

  close() {
    this.el.classList.remove('menu--opened');
    this.menuImgOpen.classList.add('menu-button__icon--active');
    this.menuImgClose.classList.remove('menu-button__icon--active');
    header.auto();
  }
}
let menu = new Menu(document.querySelector('menu'));

menuButton.el.addEventListener('click', () => {
  if(!menu.el.classList.contains('menu--opened')) {
    menu.open();
  } else {
    menu.close();
  }
});

window.addEventListener('resize', () => {
  menu.close();
});

