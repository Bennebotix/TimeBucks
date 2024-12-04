let navToggle = document.querySelector('.nav-toggle');
let bars = document.querySelectorAll('.bar');
let menu = document.querySelector('header > div');

function toggleHamburger(e) {
  bars.forEach((bar) => bar.classList.toggle('x'));
  menu.classList.toggle('open');
}

navToggle.addEventListener('click', toggleHamburger);

setInterval(() => {
  // document.body.innerHTML = window.innerWidth;
});
