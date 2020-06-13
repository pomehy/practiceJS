// let calcInputs = document.querySelectorAll('.calc__input');
let calcButton = document.querySelector('.calc__button');
let calcInputOne = document.querySelector('.calc__input-1');
let calcInputTwo = document.querySelector('.calc__input-2');
let calcResult = document.querySelector('.calc__result');

calcButton.onclick = function() {
    // calcResult.textContent = 'Привет'
    calcResult.textContent = parseInt(calcInputOne.value) + parseInt(calcInputTwo.value);
    calcResult.style.borderColor = 'red';
};