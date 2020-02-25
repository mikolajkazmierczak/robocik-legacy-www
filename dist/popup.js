'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Popup =
/*#__PURE__*/
function () {
  function Popup(el) {
    var _this = this;

    _classCallCheck(this, Popup);

    this.el = el;
    this.content = el.querySelector('.popup__content');
    this.visible = false;
    this.links = document.querySelectorAll('[data-popup]');
    this.links.forEach(function (link) {
      console.log(link);
      link.addEventListener('click', function (e) {
        e.preventDefault();

        _this.load(link.getAttribute('href'));

        _this.open(link);
      });
    });
    this.popupButton = document.querySelector('.popup__close');
    this.popupButton.addEventListener('click', function () {
      _this.close();
    });
  }

  _createClass(Popup, [{
    key: "load",
    value: function load(url) {
      var container = this.content;
      var xhr = new XMLHttpRequest();
      xhr.responseType = 'document';
      xhr.addEventListener('load', function () {
        if (xhr.status === 200) {
          container.innerHTML = new XMLSerializer().serializeToString(xhr.response);
          lang.reload();
        } else {
          container.innerHTML = "ERROR: Couldn't resolve the ajax call to \"".concat(url, "\"");
        }
      });
      xhr.open('POST', url, true);
      xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      xhr.send("rootUrl=" + rootUrl);
    }
  }, {
    key: "open",
    value: function open(link) {
      if (!this.visible) {
        this.visible = true;
        this.el.style = "transform: translateY(0)";
        this.el.classList.add('popup--visible');

        if (link.getAttribute('data-popup') === 'flexible') {
          this.el.classList.add('popup--flexible');
        }

        menu.close();
        header.hide();
      } else {
        if (link.getAttribute('data-popup') === 'flexible') {
          this.el.classList.add('popup--flexible');
        } else {
          this.el.classList.remove('popup--flexible');
        }
      }
    }
  }, {
    key: "close",
    value: function close() {
      var _this2 = this;

      this.el.classList.remove('popup--visible');
      header.auto();
      var time = parseFloat(getComputedStyle(this.el)['transitionDuration']) * 1000;
      setTimeout(function () {
        _this2.el.style = "transform: translateY(-100%)";
        _this2.visible = false;

        _this2.el.classList.remove('popup--flexible'); // clear possible setting

      }, time);
    }
  }]);

  return Popup;
}();

var popup = new Popup(document.querySelector('.popup'));
window.addEventListener('resize', function () {
  popup.close();
});
//# sourceMappingURL=popup.js.map