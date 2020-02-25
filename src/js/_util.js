function LoadDataJSON(url) {
  return new Promise((resolve, reject) => {

    // AJAX call for JSON data from the server
    let xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      if (xhr.status === 200) {
        resolve(xhr.response);
      } else {
        console.log(`ERROR: Couldn\'t resolve the ajax call to "${url}"`);
      }
    });

    xhr.open('POST', url, true);
    xhr.send();

  });
}
