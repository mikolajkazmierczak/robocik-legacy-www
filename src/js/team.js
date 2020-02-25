'use strict';

let teamData; // full data from from src/team.json
let teamData_len; // amount of team members


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



// modify the data depending on the slider category
function sliderCheckInfo(data, el) {
  if(data === '') { // no data

    if (el === sliderContact || el === sliderRole) {
      data = 'Co ty tu robisz czarodzieju?';
      el.classList.add('slider__el--invisible');
    }

  } else {

    if (el === sliderName) {
      data = data.replace(' ', '<br>');
    }

    if (el === sliderRole || el === sliderContact) {
      el.classList.remove('slider__el--invisible');
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

function sliderChangeInfo(member_i) {
  let member = teamData.team[member_i];

  [sliderName, sliderRole, sliderContact, sliderText].forEach(el => {
    let data = '';

    if(el === sliderName)    { data = sliderCheckInfo(member.name,    el); }
    if(el === sliderRole)    { data = sliderCheckInfo(member.role,    el); }
    if(el === sliderContact) { data = sliderCheckInfo(member.contact, el); }
    if(el === sliderText)    { data = sliderCheckInfo(member.text,    el); }

    el.innerHTML = data;
  });
}



function sliderFadeIn(direction) {
  // show person's info
  sliderChangeInfo(sliderChooseMember(direction));

  // show photo
  sliderImgs[slider_current_member].classList.remove('slider__img--hidden');
}

function sliderFadeOut() {
  // make photo transparent
  sliderImgs[slider_current_member].classList.add('slider__img--hidden');
}

function sliderSlide(direction) {
  // fade out the previous photo
  // (-1 means no member was shown yet, hence there is no photo to fade out)
  if(slider_current_member !== -1) {
    sliderFadeOut();
  }

  // show next info and photo
  sliderFadeIn(direction);
}



// preload photos to browser memory for faster loading when switching between people
function PreloadTeamPhotos() {
  for(let i = 0; i < teamData_len; i++) {
    // new Image().src = rootUrl + teamData.team[i].photo;

    let img = document.createElement('img');
    img.classList.add('slider__el');
    img.classList.add('slider__img--hidden');
    img.classList.add('slider__img');
    img.setAttribute('src', rootUrl + teamData.team[i].photo);

    sliderPhoto.appendChild(img);

    sliderImgs = document.querySelectorAll(
      '.slider__img');
  }
}

// when site loads: load team data. preload photos, load the first person, activate the progressbar
window.addEventListener('load', ()=>{
  LoadDataJSON(`${rootUrl}src/team.json`).then(data => {
    teamData = data;
    teamData_len = data.team.length;
    PreloadTeamPhotos();
    sliderSlide('next');
    progressbar.start(); // run the progressbar from progressbar.js
  });
});



/* ProgressBar */
let progressbar = new Progressbar(
  document.querySelector('.slider__progress-bar'),
  5
);



sliderArrowPrevious.addEventListener('click', ()=>{
  sliderSlide('previous');
});
sliderArrowNext.addEventListener('click', ()=>{
  sliderSlide('next');
});

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
