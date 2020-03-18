'use strict';

function animateWave(el) {
  var translateY = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 50;
  var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2500;
  var easing = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'easeInOutQuad';
  anime({
    targets: el,
    translateY: -translateY,
    duration: duration,
    loop: true,
    direction: 'alternate',
    easing: easing
  });
}

function animateWaves() {
  var waves = document.querySelectorAll('.section-banner-main__wavesbg img');

  for (var i = 0; i <= waves.length; i++) {
    console.log(20 + i * 5);
    animateWave(".section-banner-main__wavesbg img:nth-child(".concat(i, ")"), 5 + i * 5, i * 500);
  }
}

animateWaves(); // animateWave('.section-banner-main__wavesbg img:nth-child(0)',  40, 2500);
// animateWave('.section-banner-main__wavesbg img:nth-child(1)',  45, 1500);
// animateWave('.section-banner-main__wavesbg img:nth-child(2)',  50, 2000);
// animateWave('.section-banner-main__wavesbg img:nth-child(3)',  30, 2500);
// animateWave('.section-banner-main__wavesbg img:nth-child(4)',  35, 3500);
// animateWave('.section-banner-main__wavesbg img:nth-child(5)',  50, 1500);
// animateWave('.section-banner-main__wavesbg img:nth-child(6)',  50, 2500);
// animateWave('.section-banner-main__wavesbg img:nth-child(7)',  30, 2000);
// animateWave('.section-banner-main__wavesbg img:nth-child(8)',  25, 1500);
// animateWave('.section-banner-main__wavesbg img:nth-child(9)',  40, 2500);
// animateWave('.section-banner-main__wavesbg img:nth-child(10)', 35, 1500);
// animateWave('.section-banner-main__wavesbg img:nth-child(11)', 30, 2000);
// animateWave('.section-banner-main__wavesbg img:nth-child(12)', 45, 1500);
// animateWave('.section-banner-main__wavesbg img:nth-child(13)', 50, 3500);
//# sourceMappingURL=wavesbg.js.map