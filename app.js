var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

document.addEventListener("scroll", () => {
  console.log('scroll')
  if(window.scrollY >= 40) {
    $('#header').classList.add('header-scroll');
  }
  else {
    $('#header').classList.remove('header-scroll');
  }
});