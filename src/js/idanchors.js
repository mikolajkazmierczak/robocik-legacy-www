function IsIE() {
  let ua = window.navigator.userAgent;
  let isIE = /MSIE|Trident/.test(ua);
  return isIE;
}


let a = document.querySelectorAll('a');

// check if the link is the anchor to an id element on the page
function checkIdAnchors(el) {
  if( el.getAttribute("href").startsWith("#") ) {

    // close the menu when clicked on an IdAnchor
    el.onclick = (e) => {
      menu.close();
    }

  }
}

if(!IsIE()) {
  a.forEach(checkIdAnchors);
}
