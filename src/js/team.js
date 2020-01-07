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



let sliderElPrevious;
let sliderElMain;
let sliderElNext;
function sliderGetCurrentElements() {
  sliderElPrevious = document.querySelectorAll('.slider__el--previous');
  sliderElMain     = document.querySelectorAll('.slider__el--main');
  sliderElNext     = document.querySelectorAll('.slider__el--next');
}

function sliderRepositionShifted(el) {
  sliderGetCurrentElements();
  el.forEach(function(el) {
    // turn off transitions
    el.classList.add('slider__el--no-transition');

    // change reposition to left or right
    if(el.classList.contains('slider__el--previous')) {
      el.style.transform = el.style.transform = 'translateX(100%)';
    } else if (el.classList.contains('slider__el--next')) {
      el.style.transform = el.style.transform = 'translateX(-100%)';
    }

    // turn on transitions
    el.offsetHeight; // force a reflow
    el.classList.remove('slider__el--no-transition');
  });
}

function sliderSlide(direction) {
  // before moving               [-100%] | [  0  ] | [ 100% ]
  // direction previous                  | [  0  ] | [ 100% ] [ 200% ]
  // direction next      [-200%] [-100%] | [  0  ] |

  sliderEl.forEach(function(el) {

    let translateX = el.style.translate;

    if (direction === 'previous') {
      el.style.transform = 'translateX('+translateX+100+'%)';
    } else if (direction === 'next') {
      el.style.transform = 'translateX('+translateX+100+'%)';
    }

  });
}

// pseudo setter for HTML text elements
function sliderMemberInsertData(data, el) {
  if(data === '') { // if no data
    el.innerHTML = '<span style="opacity:0; cursor:default">Co ty tu robisz potężny czarodzieju</span>';
  } else {

    if(el === sliderText) {

      if(string.length > 130) {
        el.innerHTML = 'ERROR: THE TEXT WAS TOO LONG';
      } else {
        el.innerHTML = '"' + data + '"';
      }

    } else if(el === sliderImg) {

      el.src = data;

    } else {

      el.innerHTML = data;

    }

  }
}

function sliderLoadMember(el_type) {
  let member = teamData.team[member_i];
  if(el_type === 'previous') {

  }
  sliderMemberInsertData(member.name,    sliderName);
  sliderMemberInsertData(member.role,    sliderRole);
  sliderMemberInsertData(member.contact, sliderContact);
  sliderMemberInsertData(member.text,    sliderText);
  sliderMemberInsertData(member.photo,   sliderImg);
}
// TODO: its fucked up because you have to choose elements with
//  both classes: ex. slider__name and slider__el--previous

let member_i = 0; // first person in the JSON array
function sliderChooseMember(direction) {
  if (direction === 'previous') {

    if ((member_i - 1) < 0) {
      // if out of range then take the last person
      member_i = teamData_len - 1;
    } else {
      member_i -= 1;
    }

  } else {

    if( (member_i + 1) === teamData_len ) {
      // if out of range then take the first person
      member_i = 0;
    } else {
      member_i += 1;
    }

  }
}

function sliderPrevious() {
  sliderSlide('previous');
  sliderRepositionShifted(sliderElNext);
  sliderChooseMember('previous');
  sliderReloadShiftedMember();
  // change position of shifted el
  // load person into shifted el
  // change positional classes
}

function sliderNext() {
  sliderSlide('next');
  sliderRepositionShifted(sliderElPrevious);
  sliderRepositionShifted(sliderElNext);
  sliderReloadShiftedMember();
}





sliderArrowPrevious.addEventListener('click', function() {
  sliderPrevious();
});
sliderArrowNext.addEventListener('click', function() {
  sliderNext();
});


// When site loads, load first person
window.addEventListener('load', function() {
  LoadDataJSON().then(res => {
    PreloadTeamPhotos();
    sliderNext(); // first from JSON array will be loaded
  });

  pb_run(sliderNext); // run the progressbar from progressbar.js
});


/* ProgressBar */

sliderArrowPrevious.addEventListener('mouseover', function() {
  pb_pause();
});
sliderArrowNext.addEventListener('mouseover', function() {
  pb_pause();
});
sliderArrowPrevious.addEventListener('mouseout', function() {
  pb_run(sliderNext);
});
sliderArrowNext.addEventListener('mouseout', function() {
  pb_run(sliderNext);
});
