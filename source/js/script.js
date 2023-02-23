let navMain = document.querySelector('.nav');
let navToggle = document.querySelector('.nav__toggle');

navMain.classList.remove('nav--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('nav--closed')) {
    navMain.classList.remove('nav--closed');
    navMain.classList.add('nav--opened');
  } else {
    navMain.classList.add('nav--closed');
    navMain.classList.remove('nav--opened');
  }
});

var quotesSwiper = new Swiper ('.swiper', {
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 3000,
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (_, className) {
      return `<div class='${className}'>
        <span class="line"></span>
        </div>`;
    }
  },

  navigation: {
    nextEl: '.promo__button-swiper--next',
    prevEl: '.promo__button-swiper--prev',
  },

});

quotesSwiper.init();

const DEFAULT_COORDS = {
  lat: 59.968386,
  lng: 30.317404
};

const DEFAULT_ZOOM = 17;

const mapPinIcon = L.icon({
  iconUrl: './img/icons/stack.svg#map-pin',
  iconSize: [38, 50],
  iconAnchor: [16, 32],
});

var map = L.map('map-canvas').setView(DEFAULT_COORDS, DEFAULT_ZOOM);

var marker = L.marker(
  DEFAULT_COORDS,
  {
    draggable: false,
    icon: mapPinIcon,
  }
).addTo(map);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
