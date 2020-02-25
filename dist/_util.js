"use strict";

function LoadDataJSON(url) {
  return new Promise(function (resolve, reject) {
    // AJAX call for JSON data from the server
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.addEventListener('load', function () {
      if (xhr.status === 200) {
        resolve(xhr.response);
      } else {
        console.log("ERROR: Couldn't resolve the ajax call to \"".concat(url, "\""));
      }
    });
    xhr.open('POST', url, true);
    xhr.send();
  });
}
//# sourceMappingURL=_util.js.map