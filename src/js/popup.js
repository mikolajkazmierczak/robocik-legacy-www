'use strict';

class Popup {
  constructor(el) {
    this.el = el;
    this.content = el.querySelector('.popup__content');
    this.visible = false;

    this.links = document.querySelectorAll('[data-popup]');
    this.links.forEach(link => {
      link.addEventListener('click', (e)=>{
        e.preventDefault();
        this.load(link.getAttribute('href'));
        this.open(link);
      });
    });

    this.popupButton = document.querySelector('.popup__close');
    this.popupButton.addEventListener('click', ()=>{
      this.close();
    });
    this.popupBackground = document.querySelector('.popup__bg');
    this.popupBackground.addEventListener('click', ()=>{
      this.close();
    });
  }

  load(url) {
    let container = this.content;

    let xhr = new XMLHttpRequest();
    xhr.responseType = 'document';

    xhr.addEventListener('load', function () {
      if (xhr.status === 200) {
        container.innerHTML = new XMLSerializer().serializeToString(xhr.response);
        lang.reload();
      } else {
        container.innerHTML = `ERROR: Couldn\'t resolve the ajax call to "${url}"`;
      }
    });

    xhr.open('POST', url, true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send("rootUrl="+rootUrl);
  }

  open(link) {
    if(!this.visible) {
      this.visible = true;
      this.el.style = "transform: translateY(0)";
      this.el.classList.add('popup--visible');
      if(link.getAttribute('data-popup') === 'flexible') {
        this.el.classList.add('popup--flexible');
      }
      menu.close();
      header.hide();
    } else {
      if(link.getAttribute('data-popup') === 'flexible') {
        this.el.classList.add('popup--flexible');
      } else {
        this.el.classList.remove('popup--flexible');
      }
    }
  }

  close() {
    this.el.classList.remove('popup--visible');
    header.auto();

    let time = parseFloat(getComputedStyle(this.el)['transitionDuration'])*1000;
    setTimeout(()=>{

      this.el.style = "transform: translateY(-100%)";
      this.visible = false;
      this.el.classList.remove('popup--flexible'); // clear possible setting

    }, time);
  }

}
let popup = new Popup(document.querySelector('.popup'));

window.addEventListener('resize', () => {
  if(window.innerWidth > 780) {
    popup.close();
  }
});
