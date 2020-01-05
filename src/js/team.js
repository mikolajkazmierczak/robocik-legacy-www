"use strict";

/* Arrows */

// find an element's offset from top of the screen
function currentOffsetTop(el) {
  let currentTop = 0;
  if (el.offsetParent) {
    do {
      currentTop += el.offsetTop;
    } while (el = el.offsetParent);
    return currentTop;
  }
  return undefined;
}

function ShowArrows() {
  sectionTeamArrowPrevious.classList.add(arrow_visible_class);
  sectionTeamArrowNext.classList.add(arrow_visible_class);
}

function HideArrows() {
  sectionTeamArrowPrevious.classList.remove(arrow_visible_class);
  sectionTeamArrowNext.classList.remove(arrow_visible_class);
}

// check how far the user scrolled and show or hide arrows
function CheckTeamArrows() {
  let teamOffsetTop = currentOffsetTop(sectionTeam);
  let teamHeight    = sectionTeam.offsetHeight;

  let windowOffsetTop = window.pageYOffset;
  let windowHeight    = window.innerHeight;
  let windowWidth     = window.innerWidth;

  // firstHook: when scrolled into view (+ additional fraction of height)
  let firstHook;
  // secondHook: when scrolled out of the view (- additional fraction of height)
  let secondHook;

  if(windowWidth < 780) {
    // mobile
    firstHook  = teamOffsetTop - windowHeight + (teamHeight/4)*3; // top 3/4 of section must be visible
    secondHook = teamOffsetTop                + (teamHeight/4);   // top 1/4 must be hidden
  } else {
    // pc (additional windowHeight due to the banner getting fixed in place)
    firstHook  = teamOffsetTop                + (teamHeight/4)*3; // top 3/4 of section must be visible
    secondHook = teamOffsetTop + windowHeight;                    // top must at least start hiding
  }

  // when view is between both hooks
  if( (windowOffsetTop > firstHook) && (windowOffsetTop < secondHook) ) {
    ShowArrows();
  } else {
    HideArrows();
  }
}

document.addEventListener('scroll', function() {
  CheckTeamArrows();
});
document.addEventListener('resize', function() {
  CheckTeamArrows();
});




/* Load People JSON */

let data; // full data from the sever
let data_team_len; // amount of team members

function LoadPeopleJSON() {
  return new Promise((resolve, reject) => {

    // AJAX call for JSON data from the server

    let xhr = new XMLHttpRequest();
    xhr.responseType = 'json'
    xhr.addEventListener('load', function() {

      if (xhr.status === 200) {
        data = xhr.response;
        data_team_len = data.team.length;
        resolve();
      }

    });

    xhr.open('POST', rootUrl + 'src/team.json', true);
    xhr.send();

  });
}


function PreloadTeamPhotos() {
  // preload photos to browser memory for faster loading when switching between people
  for(let i = 0; i < data_team_len; i++) {
    new Image().src = rootUrl + data.team[i].photo;
  }
}


/* Toggle Person */

let person_i = 0; // first person in the JSON array

// pseudo setter for HTML text elements
function PersonInsertText(el, string) {
  if(string == '') {

    el.innerHTML = '<span style="opacity:0; cursor:default">Co ty tu robisz potężny czarodzieju</span>';

  } else if(el == sectionTeamText) {

    if(string.length > 130) {
      el.innerHTML = 'ERROR: THE TEXT WAS TOO LONG';
    } else {
      el.innerHTML = '"' + string + '"';
    }

  } else {

    el.innerHTML = string;

  }
}

function LoadPerson() {
  let person = data.team[person_i];
  PersonInsertText(sectionTeamName,    person.name);
  PersonInsertText(sectionTeamRole,    person.role);
  PersonInsertText(sectionTeamContact, person.contact);
  PersonInsertText(sectionTeamText,    person.text);
  sectionTeamPhoto.src = person.photo;
}

function LoadPreviousPerson() {
  if((person_i - 1) < 0) {
    // if out of range then take the last person
    person_i = data_team_len - 1;
  } else {
    person_i -= 1;
  }
  LoadPerson();
}

function LoadNextPerson() {
  if( (person_i + 1) == data_team_len ) {
    // if out of range then take the first person
    person_i = 0;
  } else {
    person_i += 1;
  }
  LoadPerson();
}

sectionTeamArrowPrevious.addEventListener('click', function() {
  LoadPreviousPerson();
});
sectionTeamArrowNext.addEventListener('click', function() {
  LoadNextPerson();
});


// When site loads, load first person
window.addEventListener('load', function() {
  LoadPeopleJSON().then(res => {
    PreloadTeamPhotos();
    LoadPerson(); // first from JSON array will be loaded
  });

  pb_run(LoadNextPerson); // run the progressbar from progressbar.js
});


/* ProgressBar */

sectionTeamArrowPrevious.addEventListener('mouseover', function() {
  pb_pause();
});
sectionTeamArrowNext.addEventListener('mouseover', function() {
  pb_pause();
});
sectionTeamArrowPrevious.addEventListener('mouseout', function() {
  pb_run(LoadNextPerson);
});
sectionTeamArrowNext.addEventListener('mouseout', function() {
  pb_run(LoadNextPerson);
});
