'use strict'; // find an element's offset from top of the screen

function currentOffsetTop(el) {
  var currentTop = 0;

  if (el.offsetParent) {
    do {
      currentTop += el.offsetTop;
    } while (el === el.offsetParent);

    return currentTop;
  }

  return undefined;
}

function ShowArrows() {
  sliderArrowPrevious.classList.add(arrow_visible_class);
  sliderArrowNext.classList.add(arrow_visible_class);
}

function HideArrows() {
  sliderArrowPrevious.classList.remove(arrow_visible_class);
  sliderArrowNext.classList.remove(arrow_visible_class);
} // check how far the user scrolled and show or hide arrows


function CheckTeamArrows() {
  var teamOffsetTop = currentOffsetTop(slider);
  var teamHeight = slider.offsetHeight;
  var windowOffsetTop = window.pageYOffset;
  var windowHeight = window.innerHeight;
  var windowWidth = window.innerWidth; // firstHook: when scrolled into view (+ additional fraction of height)

  var firstHook; // secondHook: when scrolled out of the view (- additional fraction of height)

  var secondHook;

  if (windowWidth < 780) {
    // mobile
    firstHook = teamOffsetTop - windowHeight + teamHeight / 4 * 3; // top 3/4 of section must be visible

    secondHook = teamOffsetTop + teamHeight / 4; // top 1/4 must be hidden
  } else {
    // pc (additional windowHeight due to the banner getting fixed in place)
    firstHook = teamOffsetTop + teamHeight / 4 * 3; // top 3/4 of section must be visible

    secondHook = teamOffsetTop + windowHeight; // top must at least start hiding
  } // when view is between both hooks


  if (windowOffsetTop > firstHook && windowOffsetTop < secondHook) {
    ShowArrows();
  } else {
    HideArrows();
  }
}

document.addEventListener('scroll', function () {
  CheckTeamArrows();
});
document.addEventListener('resize', function () {
  CheckTeamArrows();
});
//# sourceMappingURL=team_arrows.js.map