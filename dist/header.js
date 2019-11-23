"use strict";

var logo = document.querySelector('.logo');
var header = document.querySelector('header');

document.onresize = function () {
  checkLogo();
};

document.onscroll = function () {
  checkLogo();
};

function checkOffset() {
  var windowOffset = window.pageYOffset;
  var windowHeight = window.innerHeight;
  var offsetTop = windowHeight - windowOffset; // console.log('height ' +windowHeight)
  // console.log('offset ' +windowOffset)
  // console.log(offsetTop - header.offsetHeight)

  return offsetTop - header.offsetHeight;
}

function checkLogo() {
  if (checkOffset() < 0) {
    logo.classList.add('logo--visible');
  } else {
    logo.classList.remove('logo--visible');
  }
}
//# sourceMappingURL=header.js.map