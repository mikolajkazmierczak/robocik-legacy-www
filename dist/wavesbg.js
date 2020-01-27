'use strict';

function animateWave(el) {
  var translateY = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 50;
  var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2500;
  var easing = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'easeInOutCubic';
  anime({
    targets: el,
    translateY: -translateY,
    duration: duration,
    loop: true,
    direction: 'alternate',
    easing: easing
  });
}

animateWave('.section-banner-main__wavesbg img:nth-child(0)', 20, 2500);
animateWave('.section-banner-main__wavesbg img:nth-child(1)', 25, 1500);
animateWave('.section-banner-main__wavesbg img:nth-child(2)', 30, 2000);
animateWave('.section-banner-main__wavesbg img:nth-child(3)', 10, 2500);
animateWave('.section-banner-main__wavesbg img:nth-child(4)', 15, 3500);
animateWave('.section-banner-main__wavesbg img:nth-child(5)', 20, 1500);
animateWave('.section-banner-main__wavesbg img:nth-child(6)', 30, 2500);
animateWave('.section-banner-main__wavesbg img:nth-child(7)', 10, 2000);
animateWave('.section-banner-main__wavesbg img:nth-child(8)', 5, 1500);
animateWave('.section-banner-main__wavesbg img:nth-child(9)', 20, 2500);
animateWave('.section-banner-main__wavesbg img:nth-child(10)', 15, 1500);
animateWave('.section-banner-main__wavesbg img:nth-child(11)', 10, 2000);
animateWave('.section-banner-main__wavesbg img:nth-child(12)', 25, 1500);
animateWave('.section-banner-main__wavesbg img:nth-child(13)', 30, 3500);
//# sourceMappingURL=wavesbg.js.map