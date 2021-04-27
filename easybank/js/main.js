const navBtn = document.getElementById('burger');
const navList = document.getElementById('nav-list');
const navListBg = document.getElementById('nav-toggle-bg');
const burgerImg = document.getElementById('burger-img');
let navOpen = false;

navBtn.addEventListener('click', function () {
    if (!navOpen) {
        burgerImg.setAttribute('src', './images/icon-close.svg')
        gsap.to(navListBg, { duration: 0.4, height: 600 });
        gsap.to(navList, { duration: 0.5, height: 260 });
        navOpen = true;
    }else{
        gsap.to(navListBg, { duration: 0.6, height: 0 });
        gsap.to(navList, { duration: 0.5, height: 0 });
        burgerImg.setAttribute('src', './images/icon-hamburger.svg')
        navOpen = false;
    };
});