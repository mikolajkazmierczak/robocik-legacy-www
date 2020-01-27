'use strict';

// find an element's offset from top of the screen
function currentOffsetTop(el) {
  let viewportOffset = el.getBoundingClientRect();
  return viewportOffset.top;
}

function ShowArrows() {
  sliderArrowPrevious.classList.add(arrow_visible_class);
  sliderArrowNext.classList.add(arrow_visible_class);
}

function HideArrows() {
  sliderArrowPrevious.classList.remove(arrow_visible_class);
  sliderArrowNext.classList.remove(arrow_visible_class);
}

// check how far the user scrolled and show or hide arrows
function CheckTeamArrows() {
  let sliderOffsetTop = currentOffsetTop(slider);
  let sliderHeight    = slider.offsetHeight;

  // firstHook: when (1/2 of top of section) scrolled into view
  let firstHook  = sliderOffsetTop < (sliderHeight/2);
  // secondHook: when (1/3 of top of section) scrolled out of the view
  let secondHook = sliderOffsetTop > -(sliderHeight/3);

  // when view is between both hooks
  if(firstHook && secondHook) {
    ShowArrows();
  } else {
    HideArrows();
  }
}

document.addEventListener('scroll', function() {
  CheckTeamArrows();
});
document.addEventListener('resize', function() {
  CheckTeamArrows();
});
