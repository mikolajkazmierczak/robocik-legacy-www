"use strict";

var form = document.querySelector('form');
var checkbox = document.querySelector('.form__consent__checkbox');
checkbox.addEventListener('click', function () {
  if (checkbox.querySelector('input').checked == true) {
    form.classList.add('form--consent');
  } else {
    form.classList.remove('form--consent');
  }
});
//# sourceMappingURL=newsletter.js.map