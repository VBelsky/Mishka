/*Подгрузка svg спрайта*/

var link = document.querySelector('link[rel=import]');
var content = link.import.querySelector('.svg-catalog');
document.body.appendChild(content.cloneNode(true));


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
