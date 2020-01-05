"use strict";

let form = document.querySelector('form');
let checkbox = document.querySelector('.form__consent__checkbox');

checkbox.addEventListener('click', function() {
  if(checkbox.querySelector('input').checked == true) {
    form.classList.add('form--consent');
  } else {
    form.classList.remove('form--consent');
  }
});
