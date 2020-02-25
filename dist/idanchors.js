"use strict";

function IsIE() {
  var ua = window.navigator.userAgent;
  var isIE = /MSIE|Trident/.test(ua);
  return isIE;
}

var a = document.querySelectorAll('a'); // check if the link is the anchor to an id element on the page

function checkIdAnchors(el) {
  if (el.getAttribute("href").startsWith("#")) {
    // close the menu when clicked on an IdAnchor
    el.onclick = function (e) {
      menu.close();
    };
  }
}

if (!IsIE()) {
  a.forEach(checkIdAnchors);
}
//# sourceMappingURL=idanchors.js.map