
var timer = new Timer();

let days, hours, minutes, seconds;


const container = document.querySelector('.container');
const cardTop = document.querySelector('.card-flip-front-second');
const cardBack = document.querySelector('.card-flip-back-second');

const dayCards = [...document.getElementsByClassName('number-day')];
const hourCards = [...document.getElementsByClassName('number-hour')];
const minuteCards = [...document.getElementsByClassName('number-minute')];
const secondCards = [...document.getElementsByClassName('number-second')];

const flipNumbersSecond = [...document.getElementsByClassName('flip-number-second')];

console.log(secondCards);

container.addEventListener('click', function () {
    cardTop.classList.add('flip-front');
    cardBack.classList.add('flip-back');
});



const targetDate = new Date('March 28, 2021 14:56:00');
let now = new Date(Date.now());
let diffTime = Math.round((targetDate - now) / 1000);
console.log(now);
console.log(diffTime);

timer.start({ countdown: true, startValues: { seconds: diffTime } });

timer.addEventListener('secondsUpdated', function () {
    flip(cardTop, cardBack);
    seconds = timer.getTimeValues().toString(['seconds']);

    secondCards.forEach(card => {
        card.innerHTML = seconds;
    });

    flipNumbersSecond.forEach(num => {
        num.innerHTML = seconds;
    });
})

timer.addEventListener('minutesUpdated', function () {
    console.log(timer.getTimeValues().toString(['minutes']));

    minutes = timer.getTimeValues().toString(['minutes']);

    minuteCards.forEach(card => {
        card.innerHTML = minutes;
    });
})

timer.addEventListener('hoursUpdated', function () {
    console.log(timer.getTimeValues().toString(['minutes']));

    hours = timer.getTimeValues().toString(['hours']);

    hourCards.forEach(card => {
        card.innerHTML = hours;
    });
})

timer.addEventListener('daysUpdated', function () {
    console.log(timer.getTimeValues().toString(['minutes']));

    days = timer.getTimeValues().toString(['days']);

    dayCards.forEach(card => {
        card.innerHTML = days;
    });
})
//gsap needed!!!!
const flip = (front, back) => {
    front.classList.add('transition');
    back.classList.add('transition');
    front.classList.add('flip-front');
    back.classList.add('flip-back');

    setTimeout(function () {
        front.classList.remove('transition');
        back.classList.remove('transition');
        front.classList.add('hidden');
        back.classList.add('hidden');
        front.classList.remove('flip-front');
        back.classList.remove('flip-back');
        front.classList.remove('hidden');
        back.classList.remove('hidden');
    }, 500);
}




