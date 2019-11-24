'use strict';

function CheckOffset() {
  var windowOffset = window.pageYOffset; // how many pixels were scrolled

  var windowHeight = window.innerHeight; // height in pixels

  var offsetTop = windowHeight - windowOffset;
  return offsetTop - header.offsetHeight;
}

function ShowLogo() {
  logo.classList.add('logo--visible');
}

function HideLogo() {
  logo.classList.remove('logo--visible');
}

function CheckLogo() {
  if (is_menu_opened) {
    ShowLogo();
  } else {
    if (CheckOffset() < 0) {
      ShowLogo();
    } else {
      HideLogo();
    }
  }
}

document.addEventListener('scroll', function () {
  CheckLogo();
});
document.addEventListener('resize', function () {
  CheckLogo();
});
document.addEventListener('load', function () {
  CheckLogo();
});
menuButton.addEventListener('click', function () {
  CheckLogo();
});
//# sourceMappingURL=header.js.map