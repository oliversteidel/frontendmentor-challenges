const container = document.querySelector('.container');
const cardTop = document.querySelector('.card-flip-front');
const cardBack = document.querySelector('.card-flip-back');
 
container.addEventListener('click', function() {
    cardTop.classList.add('flip-front');
    cardBack.classList.add('flip-back');
});