'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Lang =
/*#__PURE__*/
function () {
  function Lang() {
    _classCallCheck(this, Lang);

    // lang strings from JSON file
    this.langData = "";
  }

  _createClass(Lang, [{
    key: "load",
    value: function load(language) {
      var _this = this;

      LoadDataJSON("".concat(rootUrl, "src/lang.json")).then(function (data) {
        _this.langData = data; // elements on the website with data-lang attribute

        _this.dataLangElems = document.querySelectorAll('[data-lang]'); // assign each data-lang element its equivalent in the JSON lang data

        for (var i = 0; i < _this.dataLangElems.length; i++) {
          var el = _this.dataLangElems[i];

          var text = _this.langData[language][el.getAttribute('data-lang')];

          if (el.nodeName === 'INPUT') {
            // if element is an input
            var inputType = el.getAttribute('type');

            if (inputType === 'email') {
              el.setAttribute('placeholder', text);
            } else if (inputType === 'submit') {
              el.setAttribute('value', text);
            }
          } else {
            // typical text element like h1, p, a
            el.innerHTML = text;
          }
        }

        document.documentElement.setAttribute('lang', language);
        console.log("Lang: Loaded language: ".concat(language));
      });
    }
  }, {
    key: "reload",
    value: function reload() {
      this.load(document.documentElement.getAttribute('lang'));
    } // mark all data-lang elements

  }, {
    key: "show",
    value: function show() {
      this.dataLangElems.forEach(function (el) {
        el.style = 'border: deeppink 1px solid';
      });
    } // hide marking of all data-lang elements

  }, {
    key: "hide",
    value: function hide() {
      this.dataLangElems.forEach(function (el) {
        el.style = '';
      });
    }
  }]);

  return Lang;
}();

var lang = new Lang();
lang.load('pl');
document.querySelector('#pl').addEventListener('click', function () {
  lang.load('pl');
});
document.querySelector('#eng').addEventListener('click', function () {
  lang.load('eng');
});
//# sourceMappingURL=lang.js.map