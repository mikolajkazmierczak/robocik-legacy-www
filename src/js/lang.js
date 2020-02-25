'use strict';

class Lang {
  constructor() {
    // lang strings from JSON file
    this.langData = "";
  }

  load(language) {
    LoadDataJSON(`${rootUrl}src/lang.json`).then(data => {

      this.langData = data;

      // elements on the website with data-lang attribute
      this.dataLangElems = document.querySelectorAll('[data-lang]');

      // assign each data-lang element its equivalent in the JSON lang data
      for(let i = 0; i < this.dataLangElems.length; i++) {

        let el = this.dataLangElems[i];
        let text = this.langData[language][el.getAttribute('data-lang')];

        if(el.nodeName === 'INPUT') { // if element is an input
          let inputType = el.getAttribute('type');
          if(inputType === 'email') {
            el.setAttribute('placeholder', text);
          } else if (inputType === 'submit') {
            el.setAttribute('value', text);
          }
        } else { // typical text element like h1, p, a
          el.innerHTML = text;
        }

      }

      document.documentElement.setAttribute('lang', language);
      console.log(`Lang: Loaded language: ${language}`);
    });
  }

  reload() {
    this.load(document.documentElement.getAttribute('lang'));
  }

  // mark all data-lang elements
  show() {
    this.dataLangElems.forEach(el => {
      el.style = 'border: deeppink 1px solid';
    });
  }

  // hide marking of all data-lang elements
  hide() {
    this.dataLangElems.forEach(el => {
      el.style = '';
    });
  }
}

let lang = new Lang();
lang.load('pl');

document.querySelector('#pl').addEventListener('click', function() {
  lang.load('pl');
});
document.querySelector('#eng').addEventListener('click', function() {
  lang.load('eng');
});
