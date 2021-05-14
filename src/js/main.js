let navButton = document.querySelector(".menu__btn");
let body = document.body;
let navClose = document.querySelector('.menu__close');
let container = document.querySelector('.container');
let navMenu = document.querySelector(".menu");
let modalFinish = document.querySelector('.modal__finish');
let modalContainer = document.querySelector('.modal__container');

navButton.addEventListener("click", function () {

  navClose.addEventListener('click', function () {
    navMenu.classList.remove("menu__active");
    container.classList.remove("container--active");
    body.classList.remove("no-scroll");
  });

  navMenu.classList.toggle("menu__active");
  body.classList.toggle("no-scroll");
  container.classList.toggle("container--active");

  navMenu.addEventListener("click", function () {
    event.stopPropagation();
  });
});

let callWidget = document.querySelector('.call__widget');

callWidget.addEventListener('click', function () {
  let modalPanel = document.querySelector('.modal__panel');
  let modalClose = document.querySelector('.modal__close-img');

  modalPanel.classList.toggle('modal__panel--opened');
  body.classList.add("no-scroll");

  modalContainer.addEventListener('click', () => {
    event.stopPropagation();
  });

  modalPanel.addEventListener('click', function () {
    modalPanel.classList.remove('modal__panel--opened');
    modalContainer.classList.remove('modal__container--opened');
    body.classList.remove("no-scroll");
    modalFinish.classList.remove('modal__finish--active');
    modalContainer.classList.remove('modal__container--no-scroll');
  });

  modalContainer.classList.toggle('modal__container--opened');

  modalClose.addEventListener('click', function () {
    modalPanel.classList.remove('modal__panel--opened');
    modalContainer.classList.remove('modal__container--opened');
    body.classList.remove("no-scroll");
    modalFinish.classList.remove('modal__finish--active');
    modalContainer.classList.remove('modal__container--no-scroll');
  });
});

let modalMail = document.querySelector('.white__button');
let modalMailMobile = document.querySelector('.white__button--footer');

if (!modalMail) {

} else {
  modalMail.addEventListener('click', function () {
    let modalMail = document.querySelector('.modal__mail');
    let modalMailContainer = document.querySelector('.modal__mail-container');
    let modalMailClose = document.querySelector('.modal__mail-btn');

    modalMail.classList.toggle('modal__mail--opened');
    modalMailContainer.classList.toggle('modal__mail-container--opened');
    body.classList.add('no-scroll');

    modalMailContainer.addEventListener('click', () => {
      event.stopPropagation();
    });

    modalMail.addEventListener('click', function () {
      modalMail.classList.remove('modal__mail--opened');
      modalMailContainer.classList.remove('modal__mail-container--opened');
      body.classList.remove('no-scroll');
    });

    modalMailClose.addEventListener('click', function () {
      modalMail.classList.remove('modal__mail--opened');
      modalMailContainer.classList.remove('modal__mail-container--opened');
      body.classList.remove('no-scroll');
    });
  });
}

if (!modalMailMobile) {

} else {
  modalMailMobile.addEventListener('click', function () {
    let modalMail = document.querySelector('.modal__mail');
    let modalMailContainer = document.querySelector('.modal__mail-container');
    let modalMailClose = document.querySelector('.modal__mail-btn');

    modalMail.classList.toggle('modal__mail--opened');
    modalMailContainer.classList.toggle('modal__mail-container--opened');
    body.classList.add('no-scroll');

    modalMailContainer.addEventListener('click', () => {
      event.stopPropagation();
    });

    modalMail.addEventListener('click', function () {
      modalMail.classList.remove('modal__mail--opened');
      modalMailContainer.classList.remove('modal__mail-container--opened');
      body.classList.remove('no-scroll');
    });

    modalMailClose.addEventListener('click', function () {
      modalMail.classList.remove('modal__mail--opened');
      modalMailContainer.classList.remove('modal__mail-container--opened');
      body.classList.remove('no-scroll');
    });
  });
}

let modalReviewClose = document.querySelector('.modal__review-exit');
let modalReview = document.querySelector('.modal__review');
let modalReviewContainer = document.querySelector('.modal__review-container');
let modalReviewSend = document.querySelector('.modal__review--send');

if (!modalReviewClose) {

} else {
  modalReviewClose.addEventListener('click', function () {

    body.classList.remove('no-scroll');
    modalReview.classList.add('modal__review--closed');
    modalReviewSend.classList.remove('modal__review--send-active');
  });

  modalReviewContainer.addEventListener('click', () => {
    event.stopPropagation();
  });

  modalReview.addEventListener('click', function () {
    body.classList.remove('no-scroll');
    modalReview.classList.add('modal__review--closed');
    modalReviewSend.classList.remove('modal__review--send-active');
  });
}

// SMOOTH SCROOL TO TOP FROM BOTTOM

const scrollToTop = document.querySelectorAll('up__button');

for (let scrollUp of scrollToTop) {
  scrollUp.addEventListener('click', function (event) {
    event.preventDefault();
    const blockId = scrollUp.getAttribute
  });
}

// Search modal
let searchHidden = document.querySelector('.header__buttons-item--hidden');
let searchMobile = document.querySelector('.header__buttons-item');
let searchModal = document.querySelector('.search');
let searchClose = document.querySelector('.search__close-btn');
let searchInner = document.querySelector('.search__inner');
let searchNav = document.querySelector('.menu__input');
let searchInput = document.querySelector('.search__input');

searchInput.addEventListener('input', function () {
  let searchResult = document.querySelector('.search__result');

  searchResult.classList.toggle('search__result--hidden');
});

searchHidden.addEventListener('click', function () {
  body.classList.add('no-scroll');
  searchModal.classList.add('search--active');
});

searchNav.addEventListener('click', function () {
  body.classList.add('no-scroll');
  searchModal.classList.add('search--active');
});

searchMobile.addEventListener('click', function () {
  body.classList.add('no-scroll');
  searchModal.classList.add('search--active');
});

searchClose.addEventListener('click', function () {
  body.classList.remove('no-scroll');
  searchModal.classList.remove('search--active');
  navMenu.classList.remove("menu__active");
  container.classList.remove("container--active");
});

searchInner.addEventListener('click', () => {
  event.stopPropagation();
});

searchModal.addEventListener('click', function () {
  body.classList.remove('no-scroll');
  searchModal.classList.remove('search--active');
  navMenu.classList.remove("menu__active");
  container.classList.remove("container--active");
});

let inputs = document.querySelectorAll('input[inputmode="tel"]');
let im = new Inputmask('+7 (999) 999-99-99');
im.mask(inputs);

// validate

function validateForms(selector, rules) {
  new window.JustValidate(selector, {
    rules: rules,
    submitHandler: function (form, values, ajax) {
      modalFinish.classList.add('modal__finish--active');
      body.classList.add('no-scroll');
      modalContainer.classList.add('modal__container--no-scroll');
      modalReviewSend.classList.add('modal__review--send-active');
    }
  });
}

if (!document.querySelector('.form-call-catalog')) {

} else {
  validateForms('.form-call-catalog', { fio: { required: true }, tel: { required: true }, question: { required: true } });
}

if (!document.querySelector('.form-call-panel')) {

} else {
  validateForms('.form-call-panel', { fio: { required: true }, tel: { required: true }, question: { required: true } });
}

if (!document.querySelector('.form-mail')) {

} else {
  validateForms('.form-mail', { email: { required: true } });
}

if (!document.querySelector('.form-modal-review')) {

} else {
  validateForms('.form-modal-review', { fio: { required: true }, tel: { required: true } });
}

if (!document.querySelector('.form-review')) {

} else {
  validateForms('.form-review', { fio: { required: true }, question: { required: true } });
}

if (!document.querySelector('.form-call-product')) {

} else {
  validateForms('.form-call-product', { fio: { required: true }, tel: { required: true } });
}

if (!document.querySelector('.catalog__choice-select1')) {

} else {
  const siteSelect = () => {
    const element = document.querySelector('.catalog__choice-select1');
    const choices = new Choices(element, {
      searchEnabled: false,
      itemSelectText: '',
      placeholder: false,
    });
  };

  siteSelect();
}

if (!document.querySelector('.catalog__choice-select2')) {

} else {
  const siteSelect = () => {
    const element = document.querySelector('.catalog__choice-select2');
    const choices = new Choices(element, {
      searchEnabled: false,
      itemSelectText: '',
      placeholder: false,
    });
  };

  siteSelect();
}

if (!document.querySelector('.catalog__choice-select3')) {

} else {
  const siteSelect = () => {
    const element = document.querySelector('.catalog__choice-select3');
    const choices = new Choices(element, {
      searchEnabled: false,
      itemSelectText: '',
      placeholder: false,
    });
  };

  siteSelect();
}

if (!document.querySelector('.catalog__choice-select4')) {

} else {
  const siteSelect = () => {
    const element = document.querySelector('.catalog__choice-select4');
    const choices = new Choices(element, {
      searchEnabled: false,
      itemSelectText: '',
      placeholder: false,
    });
  };

  siteSelect();
}
