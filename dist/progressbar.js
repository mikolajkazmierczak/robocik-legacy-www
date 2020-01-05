"use strict";

var pb_delta_time = 10; // ms

var pb_delta_width = 0.25; // %

var pb_min_range = 0; // %

var pb_max_range = 100; // %

var pb_width = pb_min_range; // %

var pb_interval; // container for running the setInterval process

function pb_progress(e_after_cycle) {
  // add width
  pb_width += pb_delta_width; // if out of min-range then set to max-range

  if (pb_min_range > pb_width) {
    pb_width = pb_max_range;
  } // if out of max-range then set to min-range + and run a function


  if (pb_max_range < pb_width) {
    pb_width = pb_min_range;
    e_after_cycle();
  } // add width to the progressbar


  var progressBar = document.querySelector('.slider__progress-bar');
  progressBar.style.width = pb_width + '%';
}

function pb_run(e_after_cycle) {
  pb_interval = setInterval(function () {
    pb_progress(e_after_cycle);
  }, pb_delta_time);
  console.log('ProgressBar: Running.');
}

function pb_pause() {
  clearInterval(pb_interval);
  console.log('ProgressBar: Paused.');
}
//# sourceMappingURL=progressbar.js.map