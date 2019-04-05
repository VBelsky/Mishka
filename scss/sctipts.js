var link = document.querySelector('.main-product__button');
var modal = document.querySelector('.modal');
var overlay = document.querySelector('.modal__overlay');

link.addEventListener('click', function (evt) {
  evt.preventDefault();
  modal.classList.add('modal--show');
  overlay.classList.add('modal__overlay--show');
});

overlay.addEventListener('click', function (evt) {
  evt.preventDefault();
  modal.classList.remove('modal--show');
  overlay.classList.remove('modal__overlay--show');
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();

    if (modal.classList.contains('modal--show')) {
      modal.classList.remove('modal--show');
      overlay.classList.remove('modal__overlay--show');
    }
  }
});
