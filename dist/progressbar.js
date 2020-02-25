'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Progressbar =
/*#__PURE__*/
function () {
  function Progressbar(el, time) {
    _classCallCheck(this, Progressbar);

    this.delta_value = 0.4; // precision (how many % each step)

    this.delta_time = this.time(time); // time needed for each step

    this.value = 0;
    this.progressbar = el;
  }

  _createClass(Progressbar, [{
    key: "time",
    value: function time(_time) {
      _time = _time * 1000; // convert seconds to miliseconds

      var step_time = _time / 100; // how much time needed for each step

      step_time = step_time * this.delta_value; // step_time adapted to precision

      return Math.floor(step_time);
    }
  }, {
    key: "start",
    value: function start() {
      this.step();
      console.log('ProgressBar: Running...');
    }
  }, {
    key: "step",
    value: function step() {
      var _this = this;

      this.interval = setInterval(function () {
        // add width
        _this.value += _this.delta_value; // if out of min-range then set to max-range

        if (0 > _this.value) {
          _this.value = 100;
        } // if out of max-range then set to min-range + and run a function


        if (100 < _this.value) {
          _this.value = 0;
          sliderSlide('next');
        } // add width to the progressbar


        _this.progressbar.style.width = _this.value + '%';
      }, this.delta_time);
    }
  }, {
    key: "stop",
    value: function stop() {
      clearInterval(this.interval);
      console.log('ProgressBar: Paused');
    }
  }]);

  return Progressbar;
}();
//# sourceMappingURL=progressbar.js.map