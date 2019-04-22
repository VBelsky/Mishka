/*Подгрузка svg спрайта*/

var link = document.querySelector('link[rel=import]');
var content = link.import.querySelector('.svg-catalog');
document.body.appendChild(content.cloneNode(true));

/* Мобильное меню */

var menu_toggle = document.querySelector('.main-navigation__toggle');
var modal_menu = document.querySelector('.site-list');

menu_toggle.addEventListener('click', function (evt) {
  evt.preventDefault();
  if (modal_menu.classList.contains('site-list__show')) {
    modal_menu.classList.remove('site-list__show');
    menu_toggle.classList.remove('main-navigation__toggle--open');
  } else {
    modal_menu.classList.add('site-list__show');
    menu_toggle.classList.add('main-navigation__toggle--open');
  }
});


/*Модальное окно на главной странице*/

var link = document.querySelector('.js-main-product__button');
var modal = document.querySelector('.js-modal');
var overlay = document.querySelector('.js-modal__overlay');

link.addEventListener('click', function (evt) {
  evt.preventDefault();
  modal.classList.add('js-modal--show');
  overlay.classList.add('js-modal__overlay--show');
});

overlay.addEventListener('click', function (evt) {
  evt.preventDefault();
  modal.classList.remove('js-modal--show');
  overlay.classList.remove('js-modal__overlay--show');
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();

    if (modal.classList.contains('js-modal--show')) {
      modal.classList.remove('js-modal--show');
      overlay.classList.remove('js-modal__overlay--show');
    }
  }
});

/* Карта */

function initMap() {
var coordinates = {lat: 47.212325, lng: 38.933663},
    markerImage = "img/map-pin.svg",
    zoom = 15,

    map = new google.maps.Map(document.querySelector('.map__interactive'), {
        center: coordinates,
        zoom: zoom,
        disableDefaultUI: true
    }),

    marker = new google.maps.Marker({
        position: coordinates,
        map: map,
        icon: markerImage
    });
}
