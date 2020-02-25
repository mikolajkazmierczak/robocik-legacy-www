'use strict';

function animateWave(
  el,
  translateY = 50,
  duration = 2500,
  easing = 'easeInOutCubic'
) {

  anime({
    targets: el,
    translateY: -translateY,
    duration: duration,
    loop: true,
    direction: 'alternate',
    easing: easing
  });

}

animateWave('.section-banner-main__wavesbg img:nth-child(0)',  40, 2500);
animateWave('.section-banner-main__wavesbg img:nth-child(1)',  45, 1500);
animateWave('.section-banner-main__wavesbg img:nth-child(2)',  50, 2000);
animateWave('.section-banner-main__wavesbg img:nth-child(3)',  30, 2500);
animateWave('.section-banner-main__wavesbg img:nth-child(4)',  35, 3500);
animateWave('.section-banner-main__wavesbg img:nth-child(5)',  50, 1500);
animateWave('.section-banner-main__wavesbg img:nth-child(6)',  50, 2500);
animateWave('.section-banner-main__wavesbg img:nth-child(7)',  30, 2000);
animateWave('.section-banner-main__wavesbg img:nth-child(8)',  25, 1500);
animateWave('.section-banner-main__wavesbg img:nth-child(9)',  40, 2500);
animateWave('.section-banner-main__wavesbg img:nth-child(10)', 35, 1500);
animateWave('.section-banner-main__wavesbg img:nth-child(11)', 30, 2000);
animateWave('.section-banner-main__wavesbg img:nth-child(12)', 45, 1500);
animateWave('.section-banner-main__wavesbg img:nth-child(13)', 50, 3500);
