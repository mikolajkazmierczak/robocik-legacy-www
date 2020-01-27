'use strict';

/* Load Team Data from src/team.json */

let teamData; // full data from the sever
let teamData_len; // amount of team members

function LoadDataJSON() {
  return new Promise((resolve, reject) => {

    // AJAX call for JSON data from the server
    let xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      if (xhr.status === 200) {
        teamData = xhr.response;
        teamData_len = teamData.team.length;
        resolve();
      }
    });

    xhr.open('POST', rootUrl + 'src/team.json', true);
    xhr.send();

  });
}

function PreloadTeamPhotos() {
  // preload photos to browser memory for faster loading when switching between people
  for(let i = 0; i < teamData_len; i++) {
    new Image().src = rootUrl + teamData.team[i].photo;
  }
}



// member from the array being shown in the slider
// start at -1 (no member shown)
let slider_current_member = -1;

function sliderChooseMember(member) {
  let member_i = slider_current_member;

  if (member === 'previous') {
    if ((slider_current_member - 1) < 0) {
      // if out of range then take the last person
      member_i = teamData_len - 1;
    } else {
      member_i -= 1;
    }

  } else if (member === 'next') {
    if( (slider_current_member + 1) === teamData_len ) {
      // if out of range then take the first person
      member_i = 0;
    } else {
      member_i += 1;
    }

  } else {
    member_i = member;
  }

  slider_current_member = member_i;
  return member_i;
}



function sliderCheckInfo(data, el) {
  if(data === '') { // no data

    if(el === sliderImg) {
      sliderImg.style.display = 'none';
    }

  } else {

    if(el === sliderImg) {
      sliderImg.style.display = 'block';
    }

    if (el === sliderText) {
      if (data.length > 130) {
        data = 'ERROR: THE TEXT WAS TOO LONG';
      } else {
        data = '"' + data + '"';
      }
    }

  }
  return data;
}


function sliderDisplayInfo(time, member_i) {
  let member = teamData.team[member_i];

  [sliderName, sliderRole, sliderContact, sliderText].forEach(el => {
    let data = '';
    if(el === sliderName)    { data = sliderCheckInfo(member.name,    el); }
    if(el === sliderRole)    { data = sliderCheckInfo(member.role,    el); }
    if(el === sliderContact) { data = sliderCheckInfo(member.contact, el); }
    if(el === sliderText)    { data = sliderCheckInfo(member.text,    el); }

    let dataLen = data.length;
    let timer = time / dataLen;
    for(let i = 1; i <= dataLen; i++) {
      setTimeout(()=>{
        el.innerHTML = data.slice(0, i);
      }, timer*i)
    }
  });

  sliderImg.src = sliderCheckInfo(member.photo, sliderImg);
}

function sliderClearInfo(time) {
  [sliderName, sliderRole, sliderContact, sliderText].forEach(el => {
    let elLen = el.innerHTML.length;
    let timer = time / elLen;
    for(let i = 1; i <= elLen; i++) {
      setTimeout(()=>{
        el.innerHTML = el.innerHTML.slice(0, elLen-i);
      }, timer*i)
    }
  });
}

function sliderFadeIn(time, direction) {
  // showing photo after additional one transition time (giving it time to load)
  setTimeout(()=>{
    sliderImg.classList.remove('slider__el--transparent');
  }, time);

  // showing info letter by letter
  sliderDisplayInfo(time, sliderChooseMember(direction));
}

function sliderFadeOut(time) {
  // make photo transparent
  sliderImg.classList.add('slider__el--transparent');

  // remove info letter by letter
  sliderClearInfo(time);
}

function sliderSlide(direction) {
  let sliderEl = document.querySelector('.slider__el');
  // time for how long it takes to hide or show the photo (one transition)
  let time = parseFloat(getComputedStyle(sliderEl)['transitionDuration'])*1000;

  sliderFadeOut(time);

  // after one transition length show the info
  // after two lengths show the img (giving it time to load)
  setTimeout(()=>{
    sliderFadeIn(time, direction);
  }, time);
}



sliderArrowPrevious.addEventListener('click', ()=>{
  sliderSlide('previous');
});
sliderArrowNext.addEventListener('click', ()=>{
  sliderSlide('next');
});


// when site loads - preload photos and load the first person
window.addEventListener('load', ()=>{
  LoadDataJSON().then(res => {
    PreloadTeamPhotos();
    sliderSlide('next');
  });

  progressbar.start(); // run the progressbar from progressbar.js
});


/* ProgressBar */
let progressbar = new Progressbar(
  document.querySelector('.slider__progress-bar'),
  3
);

sliderArrowPrevious.addEventListener('mouseover', ()=>{
  progressbar.stop();
});
sliderArrowNext.addEventListener('mouseover', ()=>{
  progressbar.stop();
});
sliderArrowPrevious.addEventListener('mouseout', ()=>{
  progressbar.start();
});
sliderArrowNext.addEventListener('mouseout', ()=>{
  progressbar.start();
});
