'use strict';

function animateWave(
  el,
  translateY = 50,
  duration = 2500,
  easing = 'easeInOutQuad'
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

function animateWaves() {
  let waves = document.querySelectorAll('.section-banner-main__wavesbg img');
  for(let i = 0; i <= waves.length; i++) {
    console.log(20+(i*5));
    animateWave(`.section-banner-main__wavesbg img:nth-child(${i})`, 5+(i*5), i*500);
  }
}
animateWaves();\
