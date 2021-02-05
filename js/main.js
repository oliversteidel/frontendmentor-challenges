const roomHp = document.getElementById('room-hp');
const pricingComp = document.getElementById('pricing-comp');
const rpsGame = document.getElementById('rps-game');

const logo = document.getElementById('logo');

logo.addEventListener('click', function() {
    roomHp.classList.remove('active');
    pricingComp.classList.remove('middle');
    rpsGame.classList.remove('left');

    pricingComp.classList.add('active');
    rpsGame.classList.add('middle');
    roomHp.classList.add('left');
});
