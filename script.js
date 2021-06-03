const hamburger = document.querySelector('.hamburger');
const links = document.querySelector('.links');
const links2 = document.querySelector('.links2');
const line = document.querySelectorAll('.line');
const closeBtn = document.querySelector('.close');
const popUp = document.querySelector('.popup');
const header = document.querySelector('.header');
const timeOut = document.querySelector('.time-out');
const orderBtn = document.querySelectorAll('.order-btn')[1];
const closeCon = document.querySelector('.close-con');


let hour = `${Math.trunc(Math.random() * 12 + 1)}`.padStart(2, '0');
let min = `${Math.trunc(Math.random() * 60 + 1)}`.padStart(2, '0');
let sec = `${Math.trunc(Math.random() * 60 + 1)}`.padStart(2, '0');
setInterval(() => {
  if (sec > 0) {
    sec -= 1;
    timeOut.innerText = `${hour}:${min}:${sec}`;
  } else {
    sec = 60;
    if (min > 0) {
      min -= 1;
      timeOut.innerText = `${hour}:${min}:${sec}`;
    } else {
      min = 60;
      if (hour > 0) {
        hour -= 1;
        timeOut.innerText = `${hour}:${min}:${sec}`;
      } else {
        popUp.classList.add('hidden');
        header.classList.remove('blur');
      }
    }
  }
}, 1000);

setTimeout(() => {
  header.classList.add('blur');
  popUp.classList.remove('hidden');
}, 5000);

closeBtn.addEventListener('click', (e) => {
  e.preventDefault();
  popUp.classList.add('hidden');
  header.classList.remove('blur');
});

const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  slidesPerView: 3,
  slidesPerGroup: 1,
  spaceBetween: 20,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    0: {
      slidesPerView: 2,
      slidesPerGroup: 2,

      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      slidesPerGroup: 2,
      spaceBetween: 20,
    },
  },
});

hamburger.addEventListener('click', () => {
  line.forEach((el, i) => {
    el.classList.toggle(`toggle${i + 1}`);
  });
  closeCon.classList.toggle('hidden');
  links2.classList.toggle('hidden');
});
