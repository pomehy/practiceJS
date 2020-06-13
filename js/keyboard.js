let display = document.querySelector('.display');
let keyButtons = document.querySelectorAll('.key');
let clearButton = document.querySelector('.clear');


for (let keyButton of keyButtons) {
    keyButton.onclick = function () {        
        display.append(keyButton.textContent);       
    };     
};

clearButton.onclick = function() {
    display.textContent = '';
};