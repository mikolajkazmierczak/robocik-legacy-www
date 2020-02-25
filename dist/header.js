'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Logo =
/*#__PURE__*/
function () {
  function Logo(el) {
    _classCallCheck(this, Logo);

    this.el = el;
  }

  _createClass(Logo, [{
    key: "hide",
    value: function hide() {
      this.el.classList.remove('logo--visible');
    }
  }, {
    key: "show",
    value: function show() {
      this.el.classList.add('logo--visible');
    }
  }]);

  return Logo;
}();

var logo = new Logo(document.querySelector('.logo'));

var MenuButton =
/*#__PURE__*/
function () {
  function MenuButton(el) {
    _classCallCheck(this, MenuButton);

    this.el = el;
  }

  _createClass(MenuButton, [{
    key: "hide",
    value: function hide() {
      this.el.classList.add('menu-button--hidden');
    }
  }, {
    key: "show",
    value: function show() {
      this.el.classList.remove('menu-button--hidden');
    }
  }]);

  return MenuButton;
}();

var menuButton = new MenuButton(document.querySelector('.menu-button'));

var Header =
/*#__PURE__*/
function () {
  function Header(el) {
    _classCallCheck(this, Header);

    this.el = el;
    this.locked = false;
  }

  _createClass(Header, [{
    key: "state",
    value: function state(_state, lock) {
      if (lock === false) {
        this.locked = lock;
      }

      if (!this.locked) {
        if (_state === 0) {
          // auto (show or hide logo when needed)
          var title = document.querySelector('.section-banner-main__text > h1');
          var titleOffsetTop = title.getBoundingClientRect().top;

          if (titleOffsetTop < 0) {
            this.state(2);
          } else {
            this.state(1);
          }
        }

        if (_state === 1) {
          // show only the menu button
          menuButton.show();
          logo.hide();
          this.el.classList.remove('header--hidden');
        }

        if (_state === 2) {
          // show both (menu button + logo)
          menuButton.show();
          logo.show();
          this.el.classList.remove('header--hidden');
        }

        if (_state === 3) {
          // hide both (menu button + logo) if on phone
          if (window.innerWidth < 780) {
            this.el.classList.add('header--hidden');
          }
        }

        this.locked = lock;
      }
    }
  }, {
    key: "show",
    value: function show() {
      this.state(2, true);
    }
  }, {
    key: "hide",
    value: function hide() {
      this.state(3, true);
    }
  }, {
    key: "auto",
    value: function auto() {
      this.state(0, false);
    }
  }]);

  return Header;
}();

var header = new Header(document.querySelector('header'));
document.addEventListener('scroll', function () {
  header.state(0);
});
document.addEventListener('load', function () {
  header.state(0);
});
window.addEventListener('resize', function () {
  header.state(0);
});
//# sourceMappingURL=header.js.map