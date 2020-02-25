'use strict';

class Logo {
  constructor(el) {
    this.el = el;
  }
  hide() {
    this.el.classList.remove('logo--visible');
  }
  show() {
    this.el.classList.add('logo--visible');
  }
}
let logo = new Logo(document.querySelector('.logo'));

class MenuButton {
  constructor(el) {
    this.el = el;
  }
  hide() {
    this.el.classList.add('menu-button--hidden');
  }
  show() {
    this.el.classList.remove('menu-button--hidden');
  }
}
let menuButton = new MenuButton(document.querySelector('.menu-button'));

class Header {
  constructor(el) {
    this.el = el;
    this.locked = false;
  }

  state(state, lock) {
    if(lock === false) {
      this.locked = lock;
    }

    if(!this.locked) {
      if (state === 0) { // auto (show or hide logo when needed)
        let title = document.querySelector('.section-banner-main__text > h1');
        let titleOffsetTop = title.getBoundingClientRect().top;
        if(titleOffsetTop < 0) {
          this.state(2);
        } else {
          this.state(1);
        }
      }
      if (state === 1) { // show only the menu button
        menuButton.show();
        logo.hide();
        this.el.classList.remove('header--hidden');
      }
      if (state === 2) { // show both (menu button + logo)
        menuButton.show();
        logo.show();
        this.el.classList.remove('header--hidden');
      }
      if (state === 3) { // hide both (menu button + logo) if on phone
        if(window.innerWidth < 780) {
          this.el.classList.add('header--hidden');
        }
      }

      this.locked = lock;
    }
  }

  show() {
    this.state(2, true)
  }
  hide() {
    this.state(3, true)
  }
  auto() {
    this.state(0, false)
  }
}
let header = new Header(document.querySelector('header'));


document.addEventListener('scroll', () => {
  header.state(0);
});
document.addEventListener('load', () => {
  header.state(0);
});
window.addEventListener('resize', () => {
  header.state(0);
});
