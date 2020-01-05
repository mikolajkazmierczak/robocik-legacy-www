"use strict";

let pb_delta_time = 10; // ms
let pb_delta_width = 0.25; // %
let pb_min_range = 0;   // %
let pb_max_range = 100; // %

let pb_width = pb_min_range; // %

let pb_interval; // container for running the setInterval process


function pb_progress(e_after_cycle) {
  // add width
  pb_width += pb_delta_width;

  // if out of min-range then set to max-range
  if(pb_min_range > pb_width) {
    pb_width = pb_max_range;
  }
  // if out of max-range then set to min-range + and run a function
  if(pb_max_range < pb_width) {
    pb_width = pb_min_range;
    e_after_cycle();
  }

  // add width to the progressbar
  let progressBar = document.querySelector('.slider__progress-bar');
  progressBar.style.width = pb_width + '%';
}


function pb_run(e_after_cycle) {
  pb_interval = setInterval(function() {
    pb_progress(e_after_cycle);
  }, pb_delta_time);
  console.log('ProgressBar: Running.');
}

function pb_pause() {
  clearInterval(pb_interval);
  console.log('ProgressBar: Paused.');
}
