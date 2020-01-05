'use strict';

// check if scrolled more then one viewport height (effectively the first section)
function CheckOffset() {
  let windowOffset = window.pageYOffset; // how many pixels were scrolled
  let windowHeight = window.innerHeight; // height in pixels
  let offsetTop    = windowHeight - windowOffset;
  return offsetTop - header.offsetHeight;
}

function ShowLogo() {
  logo.classList.add('logo--visible');
}
function HideLogo() {
  logo.classList.remove('logo--visible');
}

function CheckLogo() {
  if(is_menu_opened) {
    ShowLogo();
  } else {
    if(CheckOffset() < 0) {
      ShowLogo();
    } else {
      HideLogo();
    }
  }
  // TODO: When changed to PC mode when Menu was opened in Mobile - the Logo is always shown.
  // TODO: Fix: Close the menu when entering PC mode from Mobile mode.
}


document.addEventListener('scroll', function() {
  CheckLogo();
});
document.addEventListener('resize', function() {
  CheckLogo();
});
document.addEventListener('load', function() {
  CheckLogo();
});
menuButton.addEventListener('click', function() {
  CheckLogo();
});
