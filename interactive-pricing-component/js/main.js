const slider = document.getElementById('pricing-box__slider');
const viewsDisplay = document.getElementById('views');
const priceDisplay = document.getElementById('price');
const checkBox = document.getElementById('billing-interval');
const percentage = document.getElementById('percent');



let prices = [8, 12, 16, 24, 36];
let viewTexts = ["10k pageviews", "50k pageviews", "100k pageviews", "500k pageviews", "1m pageviews"];

let isChecked = checkBox.checked;

checkBox.addEventListener('change', function () {
    isChecked = checkBox.checked;
    setPageViews(getPageViews(slider.valueAsNumber));
    setPrice(getPrice(slider.valueAsNumber));
});

slider.addEventListener('change', function () {
    setPageViews(getPageViews(slider.valueAsNumber));
    setPrice(getPrice(slider.valueAsNumber));
});

window.addEventListener('resize', function () {
    if (window.innerWidth > 576) {
        percentage.innerHTML = "25%";
    } else {
        percentage.innerHTML = "-25%";
    }
});

const getPageViews = (inputVal) => {
    return viewTexts[inputVal];
}

const getPrice = (inputVal) => {
    let price;
    if (isChecked) {
        price = prices[inputVal] - (prices[inputVal] / 4);
    } else {
        price = prices[inputVal];
    }
    return `\$${price} <span class="month">/month</span>`;
}

const setPageViews = (str) => {
    viewsDisplay.innerHTML = str;
}

const setPrice = (str) => {
    priceDisplay.innerHTML = str;
}