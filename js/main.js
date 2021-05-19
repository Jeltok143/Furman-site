"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

window.onload = function () {
  document.documentElement.style.opacity = '1';
};

var navButton = document.querySelector(".menu__btn");
var body = document.body;
var navClose = document.querySelector('.menu__close');
var container = document.querySelector('.container');
var navMenu = document.querySelector(".menu");
var modalFinish = document.querySelector('.modal__finish');
var modalContainer = document.querySelector('.modal__container');
var modalMailSend = document.querySelector('.modal__mail-send');
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
var callWidget = document.querySelector('.call__widget');
callWidget.addEventListener('click', function () {
  var modalPanel = document.querySelector('.modal__panel');
  var modalClose = document.querySelector('.modal__close-img');
  modalPanel.classList.toggle('modal__panel--opened');
  body.classList.add("no-scroll");
  modalContainer.addEventListener('click', function () {
    event.stopPropagation();
  });
  modalPanel.addEventListener('click', function () {
    modalPanel.classList.remove('modal__panel--opened');
    modalContainer.classList.remove('modal__container--opened');
    body.classList.remove("no-scroll");
    modalFinish.classList.remove('modal__finish--active');
    modalContainer.classList.remove('modal__container--no-scroll');
    modalMailSend.classList.remove('modal__mail-send--active');
  });
  modalContainer.classList.toggle('modal__container--opened');
  modalClose.addEventListener('click', function () {
    modalPanel.classList.remove('modal__panel--opened');
    modalContainer.classList.remove('modal__container--opened');
    body.classList.remove("no-scroll");
    modalFinish.classList.remove('modal__finish--active');
    modalContainer.classList.remove('modal__container--no-scroll');
    modalMailSend.classList.remove('modal__mail-send--active');
  });
});
var modalMail = document.querySelector('.white__button');
var modalMailMobile = document.querySelector('.white__button--footer');

if (!modalMail) {} else {
  modalMail.addEventListener('click', function () {
    var modalMail = document.querySelector('.modal__mail');
    var modalMailContainer = document.querySelector('.modal__mail-container');
    var modalMailClose = document.querySelector('.modal__mail-btn');
    modalMail.classList.toggle('modal__mail--opened');
    modalMailContainer.classList.toggle('modal__mail-container--opened');
    body.classList.add('no-scroll');
    modalMailContainer.addEventListener('click', function () {
      event.stopPropagation();
    });
    modalMail.addEventListener('click', function () {
      modalMail.classList.remove('modal__mail--opened');
      modalMailContainer.classList.remove('modal__mail-container--opened');
      modalFinish.classList.remove('modal__finish--active');
      modalContainer.classList.remove('modal__container--no-scroll');
      modalMailSend.classList.remove('modal__mail-send--active');
      body.classList.remove('no-scroll');
    });
    modalMailClose.addEventListener('click', function () {
      modalMail.classList.remove('modal__mail--opened');
      modalMailContainer.classList.remove('modal__mail-container--opened');
      modalFinish.classList.remove('modal__finish--active');
      modalContainer.classList.remove('modal__container--no-scroll');
      modalMailSend.classList.remove('modal__mail-send--active');
      body.classList.remove('no-scroll');
    });
  });
}

if (!modalMailMobile) {} else {
  modalMailMobile.addEventListener('click', function () {
    var modalMail = document.querySelector('.modal__mail');
    var modalMailContainer = document.querySelector('.modal__mail-container');
    var modalMailClose = document.querySelector('.modal__mail-btn');
    modalMail.classList.toggle('modal__mail--opened');
    modalMailContainer.classList.toggle('modal__mail-container--opened');
    body.classList.add('no-scroll');
    modalMailContainer.addEventListener('click', function () {
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
      modalMailSend.classList.remove('modal__mail-send--active');
      modalFinish.classList.remove('modal__finish--active');
      body.classList.remove('no-scroll');
    });
  });
}

var modalReviewClose = document.querySelector('.modal__review-exit');
var modalReview = document.querySelector('.modal__review');
var modalReviewContainer = document.querySelector('.modal__review-container');
var modalReviewSend = document.querySelector('.modal__review--send');
var modalReviewSendClose = document.querySelector('.modal__send-exit');

if (!modalReviewClose) {} else {
  modalReviewClose.addEventListener('click', function () {
    body.classList.remove('no-scroll');
    modalReview.classList.add('modal__review--closed');
    modalReviewSend.classList.remove('modal__review--send-active');
  });
  modalReviewSendClose.addEventListener('click', function () {
    body.classList.remove('no-scroll');
    modalReview.classList.add('modal__review--closed');
    modalReviewSend.classList.remove('modal__review--send-active');
    modalFinish.classList.remove('modal__finish--active');
  });
  modalReviewContainer.addEventListener('click', function () {
    event.stopPropagation();
  });
  modalReview.addEventListener('click', function () {
    body.classList.remove('no-scroll');
    modalReview.classList.add('modal__review--closed');
    modalReviewSend.classList.remove('modal__review--send-active');
    modalFinish.classList.remove('modal__finish--active');
  });
} // SMOOTH SCROOL TO TOP FROM BOTTOM


var scrollToTop = document.querySelectorAll('up__button');

var _iterator = _createForOfIteratorHelper(scrollToTop),
    _step;

try {
  var _loop = function _loop() {
    var scrollUp = _step.value;
    scrollUp.addEventListener('click', function (event) {
      event.preventDefault();
      var blockId = scrollUp.getAttribute;
    });
  };

  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    _loop();
  } // Search modal

} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}

var searchHidden = document.querySelector('.header__buttons-item--hidden');
var searchMobile = document.querySelector('.header__buttons-item');
var searchModal = document.querySelector('.search');
var searchClose = document.querySelector('.search__close-btn');
var searchInner = document.querySelector('.search__inner');
var searchNav = document.querySelector('.menu__input');
var searchInput = document.querySelector('.search__input');
searchInput.addEventListener('input', function () {
  var searchResult = document.querySelector('.search__result');
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
searchInner.addEventListener('click', function () {
  event.stopPropagation();
});
searchModal.addEventListener('click', function () {
  body.classList.remove('no-scroll');
  searchModal.classList.remove('search--active');
  navMenu.classList.remove("menu__active");
  container.classList.remove("container--active");
});
var inputs = document.querySelectorAll('input[inputmode="tel"]');
var im = new Inputmask('+7 (999) 999-99-99');
im.mask(inputs); // validate

function validateForms(selector, rules) {
  new window.JustValidate(selector, {
    rules: rules,
    submitHandler: function submitHandler(form, values, ajax) {
      modalFinish.classList.add('modal__finish--active');
      body.classList.add('no-scroll');
      modalContainer.classList.add('modal__container--no-scroll');
      modalMailSend.classList.add('modal__mail-send--active');

      if (!modalReviewSend) {} else {
        modalReviewSend.classList.add('modal__review--send-active');
      }
    }
  });
}

if (!document.querySelector('.form-call-catalog')) {} else {
  validateForms('.form-call-catalog', {
    fio: {
      required: true
    },
    tel: {
      required: true
    },
    question: {
      required: true
    }
  });
}

if (!document.querySelector('.form-call-panel')) {} else {
  validateForms('.form-call-panel', {
    fio: {
      required: true
    },
    tel: {
      required: true
    },
    question: {
      required: true
    }
  });
}

if (!document.querySelector('.form-mail')) {} else {
  validateForms('.form-mail', {
    email: {
      required: true
    }
  });
}

if (!document.querySelector('.form-modal-review')) {} else {
  validateForms('.form-modal-review', {
    fio: {
      required: true
    },
    tel: {
      required: true
    }
  });
}

if (!document.querySelector('.form-review')) {} else {
  validateForms('.form-review', {
    fio: {
      required: true
    },
    question: {
      required: true
    }
  });
}

if (!document.querySelector('.form-call-product')) {} else {
  validateForms('.form-call-product', {
    fio: {
      required: true
    },
    tel: {
      required: true
    }
  });
}

if (!document.querySelector('.catalog__choice-select1')) {} else {
  var siteSelect = function siteSelect() {
    var element = document.querySelector('.catalog__choice-select1');
    var choices = new Choices(element, {
      searchEnabled: false,
      itemSelectText: '',
      placeholder: false
    });
  };

  siteSelect();
}

if (!document.querySelector('.catalog__choice-select2')) {} else {
  var _siteSelect = function _siteSelect() {
    var element = document.querySelector('.catalog__choice-select2');
    var choices = new Choices(element, {
      searchEnabled: false,
      itemSelectText: '',
      placeholder: false
    });
  };

  _siteSelect();
}

if (!document.querySelector('.catalog__choice-select3')) {} else {
  var _siteSelect2 = function _siteSelect2() {
    var element = document.querySelector('.catalog__choice-select3');
    var choices = new Choices(element, {
      searchEnabled: false,
      itemSelectText: '',
      placeholder: false
    });
  };

  _siteSelect2();
}

if (!document.querySelector('.catalog__choice-select4')) {} else {
  var _siteSelect3 = function _siteSelect3() {
    var element = document.querySelector('.catalog__choice-select4');
    var choices = new Choices(element, {
      searchEnabled: false,
      itemSelectText: '',
      placeholder: false
    });
  };

  _siteSelect3();
} // About brand block UP 


var footerHeight = document.querySelector('.footer');
var aboutNavPage = document.querySelector('.about__nav-page');

window.onscroll = function (e) {
  if (!aboutNavPage) {} else {
    if (window.scrollY >= 250) {
      aboutNavPage.classList.add('about__nav-page--topped');
    }

    if (window.scrollY >= 2800) {
      aboutNavPage.classList.remove('about__nav-page--topped');
    } else if (window.scrollY < 2500) {
      aboutNavPage.classList.add('about__nav-page--topped');
    }

    if (window.scrollY <= 100) {
      aboutNavPage.classList.remove('about__nav-page--topped');
    }
  }
}; //Favourites deleting items


var favouriteCards = document.querySelector('.favorites__cards');
var length = document.querySelectorAll('.favorites__card-item').length;
document.querySelector('.favourite__count').textContent = length;
favouriteCards.addEventListener('click', function (event) {
  var favouriteCardsItem = document.querySelector('.favorites__card-item');

  if (event.target.classList.contains('favorite__delete-btn')) {
    var _length = document.querySelectorAll('.favorites__card-item').length;
    _length = _length - 1;
    document.querySelector('.favourite__count').textContent = _length;
    favouriteCardsItem.remove(favouriteCardsItem);
  }
});
//# sourceMappingURL=main.js.map
