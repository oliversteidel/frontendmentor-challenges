var timer = new Timer();

let days, hours, minutes, seconds;

const container = document.querySelector('.container');
const cardTopSecond = document.querySelector('.card-flip-front-second');
const cardBackSecond = document.querySelector('.card-flip-back-second');
const cardTopMinute = document.querySelector('.card-flip-front-minute');
const cardBackMinute = document.querySelector('.card-flip-back-minute');
const cardTopHour = document.querySelector('.card-flip-front-hour');
const cardBackHour = document.querySelector('.card-flip-back-hour');
const cardTopDay = document.querySelector('.card-flip-front-day');
const cardBackDay = document.querySelector('.card-flip-back-day');

const numbersUpdateSecond = [...document.getElementsByClassName('number-second-update')];
const numbersDelaySecond = [...document.getElementsByClassName('number-second-delay')];
const numbersUpdateMinute = [...document.getElementsByClassName('number-minute-update')];
const numbersDelayMinute = [...document.getElementsByClassName('number-minute-delay')];
const numbersUpdateHour = [...document.getElementsByClassName('number-hour-update')];
const numbersDelayHour = [...document.getElementsByClassName('number-hour-delay')];
const numbersUpdateDay = [...document.getElementsByClassName('number-day-update')];
const numbersDelayDay = [...document.getElementsByClassName('number-day-delay')];

let tl = gsap.timeline();

const flip = (front, back, callback) => {
    tl.to(front, { duration: 0.2, rotationX: -180 })
        .to(back, { duration: 0.2, rotationX: 0 });

    tl.set(front, { opacity: 0 })
        .set(back, { opacity: 0 });

    tl.set(front, { rotationX: 0 })
        .set(back, { rotationX: 180 });

    tl.set(front, { opacity: 1 })
        .set(back, { opacity: 1, onComplete: callback });
}

const updateNumbers = (target, value) => {
    target.forEach(num => {
        num.innerHTML = value;
    });
}

const targetDate = new Date('March 28, 2021 14:56:00');
let now = new Date(Date.now());
let diffTime = Math.round((targetDate - now) / 1000);

timer.start({ countdown: true, startValues: { seconds: diffTime } });

seconds = timer.getTimeValues().toString(['seconds']);
updateNumbers(numbersUpdateSecond, seconds);
updateNumbers(numbersDelaySecond, seconds);

minutes = timer.getTimeValues().toString(['minutes']);
updateNumbers(numbersUpdateMinute, minutes);
updateNumbers(numbersDelayMinute, minutes);

hours = timer.getTimeValues().toString(['hours']);
updateNumbers(numbersUpdateHour, hours);
updateNumbers(numbersDelayHour, hours);

days = timer.getTimeValues().toString(['days']);
updateNumbers(numbersUpdateDay, days);
updateNumbers(numbersDelayDay, days);

timer.addEventListener('secondsUpdated', function () {
    seconds = timer.getTimeValues().toString(['seconds']);

    updateNumbers(numbersUpdateSecond, seconds);
    flip(cardTopSecond, cardBackSecond, function () {
        numbersDelaySecond.forEach(num => {
            num.innerHTML = seconds;
        });
    });
})

timer.addEventListener('minutesUpdated', function () {
    minutes = timer.getTimeValues().toString(['minutes']);

    updateNumbers(numbersUpdateMinute, minutes);
    flip(cardTopMinute, cardBackMinute, function () {
        numbersDelayMinute.forEach(num => {
            num.innerHTML = minutes;
        });
    });
})

timer.addEventListener('hoursUpdated', function () {
    hours = timer.getTimeValues().toString(['hours']);

    updateNumbers(numbersUpdateHour, hours);
    flip(cardTopHour, cardBackHour, function () {
        numbersDelayHour.forEach(num => {
            num.innerHTML = hours;
        });
    });
})

timer.addEventListener('daysUpdated', function () {
    days = timer.getTimeValues().toString(['days']);

    updateNumbers(numbersUpdateDay, days);
    flip(cardTopDay, cardBackDay, function () {
        numbersDelayDay.forEach(num => {
            num.innerHTML = days;
        });
    });
})






