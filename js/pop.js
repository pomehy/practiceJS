let modalWindow = document.querySelector('.modal');
let modalButton = document.querySelector('.modal__button');
let modalClose = document.querySelector('.modal__close');
let modalBg = document.querySelector('.modal__bg');

modalButton.onclick = function() {
    modalWindow.classList.add('modal--open');
    modalBg.classList.add('modal__bg--show');    
};

modalClose.onclick = function() {
    modalWindow.classList.remove('modal--open');
    modalBg.classList.remove('modal__bg--show');     
};

modalBg.onclick = function () {
    if (modalBg.classList.contains('modal__bg--show')) {
        modalBg.classList.remove('modal__bg--show');
        modalWindow.classList.remove('modal--open');
    }
    
};


window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
        if (modalWindow.classList.contains('modal--open')) {
            evt.preventDefault();
            modalWindow.classList.remove('modal--open');
            modalBg.classList.remove('modal__bg--show');
        }          
    }
});



// window.addEventListener("keydown", function (evt) {
//     if (evt.keyCode === 27) {
//     if (popup.classList.contains("modal-show")) {
//     evt.preventDefault();
//     popup.classList.remove("modal-show");
//     }
//     }
//     });



