"use strict";
/* Arrows */

function currentOffsetTop(el) {
  var currentTop = 0;

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

function CheckTeamArrows() {
  var teamOffsetTop = currentOffsetTop(sectionTeam);
  var teamHeight = sectionTeam.offsetHeight;
  var windowOffsetTop = window.pageYOffset;
  var windowHeight = window.innerHeight;
  var windowWidth = window.innerWidth;
  var headerHeight = header.offsetHeight; // firstHook: when scrolled into view (+ additional fraction of height)

  var firstHook; // secondHook: when scrolled out of the view (- additional fraction of height)

  var secondHook;

  if (windowWidth < 780) {
    // mobile
    firstHook = teamOffsetTop - windowHeight + teamHeight / 4 * 3; // top 3/4 of section must be visible

    secondHook = teamOffsetTop + teamHeight / 4; // top 1/4 must be hidden
  } else {
    // pc (additional windowHeight due to the banner getting fixed in place)
    firstHook = teamOffsetTop + teamHeight / 4 * 3; // top 3/4 of section must be visible

    secondHook = teamOffsetTop + windowHeight; // top must at least start hiding
  } // when view is between both hooks


  if (windowOffsetTop > firstHook && windowOffsetTop < secondHook) {
    ShowArrows();
  } else {
    HideArrows();
  }
}

document.addEventListener('scroll', function () {
  CheckTeamArrows();
});
document.addEventListener('resize', function () {
  CheckTeamArrows();
});
/* Load People JSON */

var data;
var data_team_len;

function LoadPeopleJSON() {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.addEventListener('load', function () {
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
  for (var i = 0; i < data_team_len; i++) {
    new Image().src = rootUrl + data.team[i].photo;
  }
}
/* Toggle Person */


var person_i = 0; // First person in the JSON array

function PersonInsertText(el, string) {
  if (string == '') {
    el.innerHTML = '';
  } else if (el == sectionTeamText) {
    el.innerHTML = '"' + string + '"';
  } else {
    el.innerHTML = string;
  }
}

function LoadPerson() {
  var person = data.team[person_i];
  PersonInsertText(sectionTeamName, person.name);
  PersonInsertText(sectionTeamRole, person.role);
  PersonInsertText(sectionTeamContact, person.contact);
  PersonInsertText(sectionTeamText, person.text);
  sectionTeamPhoto.src = person.photo;
}

function LoadPreviousPerson() {
  if (person_i - 1 < 0) {
    person_i = data_team_len - 1;
  } else {
    person_i -= 1;
  }

  LoadPerson();
}

function LoadNextPerson() {
  if (person_i + 1 == data_team_len) {
    person_i = 0;
  } else {
    person_i += 1;
  }

  LoadPerson();
}

sectionTeamArrowPrevious.addEventListener('click', function () {
  LoadPreviousPerson();
});
sectionTeamArrowNext.addEventListener('click', function () {
  LoadNextPerson();
}); // When site loads, load first person

window.addEventListener('load', function () {
  LoadPeopleJSON().then(function (res) {
    PreloadTeamPhotos();
    LoadPerson(); // First from JSON array will be loaded
  });
});
//# sourceMappingURL=team.js.map