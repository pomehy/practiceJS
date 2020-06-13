let calcDisplay = document.querySelector('.calc__display');
let calcKeys = document.querySelectorAll('.calc__key');
let calculate = document.querySelector('.calculate');
let clear = document.querySelector('.clear');
let calcResult = document.querySelector('.calc__result');

for (let calcKey of calcKeys) {    
    calcKey.onclick = function() {        
        calcDisplay.append(calcKey.textContent);        
    }     
};

calculate.onclick = function() {    
    let resultDisplay = calcDisplay.textContent;    
    calcDisplay.textContent = eval(resultDisplay);                    
}; 

clear.onclick = function() {
    calcDisplay.textContent = '';
};



