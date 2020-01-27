'use strict';

class Progressbar {
  constructor(el, time) {
    this.delta_value = 0.4; // precision (how many % each step)
    this.delta_time = this.time(time); // time needed for each step

    this.value = 0;
    this.progressbar = el;
  }

  time(time) {
    time = time*1000; // convert seconds to miliseconds
    let step_time = time / 100; // how much time needed for each step
    step_time = step_time * this.delta_value; // step_time adapted to precision
    return Math.floor(step_time);
  }

  start() {
    this.step();
    console.log('ProgressBar: Running.');
  }

  step() {
    this.interval = setInterval(() => {

      // add width
      this.value += this.delta_value;

      // if out of min-range then set to max-range
      if(0 > this.value) {
        this.value = 100;
      }
      // if out of max-range then set to min-range + and run a function
      if(100 < this.value) {
        this.value = 0;
        sliderSlide('next');
      }

      // add width to the progressbar
      this.progressbar.style.width = this.value + '%';

    }, this.delta_time);
  }

  stop() {
    clearInterval(this.interval);
    console.log('ProgressBar: Paused.');
  }
}
