// toggle nav list on click on burgermenu on mobile devices

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


// on desktop devices show marker below nav link (bottom of navbar) on hover
// marker grows in width on mouseover navlink
// marker follows mouse on hovering to neigbour navlinks

const marker = document.querySelector('.nav__hover-marker');
const navLinks = document.querySelectorAll('.nav__link');
let linksContainerPos = navList.offsetLeft;
let linkPosX;
let markerWidth = 62;

// marker follows nav link on which the cursor is
navLinks.forEach(el => {
    el.addEventListener('mouseover', function(e) {
        linkPosX = e.target.offsetLeft + linksContainerPos + markerWidth;
        gsap.to(marker, {x: linkPosX});
    });
});

