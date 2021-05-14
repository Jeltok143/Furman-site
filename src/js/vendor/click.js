let buttonClick = document.querySelector('.black__button');
let redirectActive = document.getElementById('redirect');
let loadMoreButton = document.querySelector('.load-more__button');
let choiceOne = document.getElementById('choiceOne');
let choiceTwo = document.getElementById('choiceTwo');
let choiceThree = document.getElementById('choiceThree');
let choiceFour = document.getElementById('choiceFour');
let choiceFive = document.getElementById('choiceFive');

if(!buttonClick) {

} else {
  buttonClick.addEventListener('click', function() {
    buttonClick.classList.toggle('black__button--active');
  });
}

if(!redirectActive) {
  
} else {
  redirectActive.addEventListener('click', function() {
    redirectActive.classList.toggle('redirect__link--active');
  });
}

if(!loadMoreButton) {

} else {
  loadMoreButton.addEventListener('click', function () {
    loadMoreButton.classList.toggle('load-more__button--active');
  });
}

if(!choiceOne) {

} else {
  choiceOne.addEventListener('click', function() {
    choiceOne.classList.toggle('authors__choice--active');
  });
}

if(!choiceTwo) {

} else {
  choiceTwo.addEventListener('click', function() {
    choiceTwo.classList.toggle('authors__choice--active');
  });
}

if(!choiceThree) {

} else {
  choiceThree.addEventListener('click', function() {
    choiceThree.classList.toggle('authors__choice--active');
  });
}

if(!choiceFour) {

} else {
  choiceFour.addEventListener('click', function() {
    choiceFour.classList.toggle('authors__choice--active');
  });
}

if(!choiceFive) {

} else {
  choiceFive.addEventListener('click', function() {
    choiceFive.classList.toggle('authors__choice--active');
  });
}

