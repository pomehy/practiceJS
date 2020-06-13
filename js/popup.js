let popupContent = document.querySelector('.popup__content');
let ButtonClose = document.querySelector('.button--close');
let popupButtons = document.querySelectorAll('.popup__button');
let popupText = document.querySelector('.popup__text');

for (let popupButton of popupButtons) {
    popupButton.onclick = function () {
        popupText.textContent = popupButton.dataset.popupText;
        popupContent.classList.add('opened')
    };
};

ButtonClose.onclick = function () {
    popupContent.classList.remove('opened');
};




