let logo = document.querySelector('.logo');
let header = document.querySelector('header');

document.onresize = () => {
  checkLogo()
}
document.onscroll = () => {
  checkLogo()
}



function checkOffset() {
  let windowOffset = window.pageYOffset;
  let windowHeight = window.innerHeight;
  let offsetTop = windowHeight - windowOffset;
  // console.log('height ' +windowHeight)
  // console.log('offset ' +windowOffset)
  // console.log(offsetTop - header.offsetHeight)
  return offsetTop - header.offsetHeight;
}

function checkLogo() {
  if(checkOffset() < 0) {
    logo.classList.add('logo--visible');
  } else {
    logo.classList.remove('logo--visible');
  }
}
