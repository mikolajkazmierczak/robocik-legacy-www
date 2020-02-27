'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Menu =
/*#__PURE__*/
function () {
  function Menu(el) {
    _classCallCheck(this, Menu);

    this.el = el;
    this.menuImgOpen = document.querySelector('.menu-button__icon--open');
    this.menuImgClose = document.querySelector('.menu-button__icon--close');
  }

  _createClass(Menu, [{
    key: "open",
    value: function open() {
      this.el.classList.add('menu--opened');
      this.menuImgOpen.classList.remove('menu-button__icon--active');
      this.menuImgClose.classList.add('menu-button__icon--active');
      header.show();
    }
  }, {
    key: "close",
    value: function close() {
      this.el.classList.remove('menu--opened');
      this.menuImgOpen.classList.add('menu-button__icon--active');
      this.menuImgClose.classList.remove('menu-button__icon--active');
      header.auto();
    }
  }]);

  return Menu;
}();

var menu = new Menu(document.querySelector('menu'));
menuButton.el.addEventListener('click', function () {
  if (!menu.el.classList.contains('menu--opened')) {
    menu.open();
  } else {
    menu.close();
  }
});
window.addEventListener('resize', function () {
  if (window.innerWidth > 780) {
    menu.close();
  }
});
//# sourceMappingURL=menu.js.map