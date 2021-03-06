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
    } else {
        gsap.to(navListBg, { duration: 0.6, height: 0 });
        gsap.to(navList, { duration: 0.5, height: 0 });
        burgerImg.setAttribute('src', './images/icon-hamburger.svg')
        navOpen = false;
    };
});

// on desktop devices show marker below nav link (bottom of navbar) on hover
// marker grows in width on mouseover navlink
// marker follows mouse on hovering to neigbour navlinks
// marker with shrinks to 0 on mouseleave

const marker = document.querySelector('.nav__hover-marker');
const navLinks = document.querySelectorAll('.nav__link');
let linkPosX = navLinks[0].offsetLeft + navList.offsetLeft + 52;

// set initial marker position
gsap.set(marker, { x: linkPosX });

// set marker after resizing the window
window.addEventListener('resize', function () {
    linkPosX = navLinks[0].offsetLeft + navList.offsetLeft;
    gsap.set(marker, { x: 0 });
    gsap.set(marker, { x: linkPosX });
});

// marker grows in width on mouseenter navlink
navLinks.forEach(el => {
    el.addEventListener('mouseenter', function (e) {
        linkPosX = e.target.offsetLeft + navList.offsetLeft;
        gsap.to(marker, { duration: 0.3, width: 52 });
    });
});

// marker follows nav link on which the cursor is
navLinks.forEach(el => {
    el.addEventListener('mouseover', function (e) {
        linkPosX = e.target.offsetLeft + navList.offsetLeft;
        gsap.to(marker, { duration: 0.3, x: linkPosX });
    });
});

// marker disappears (set with to 0) on mouseleave nav-list(ul) 
navList.addEventListener('mouseleave', function () {
    gsap.to(marker, { duration: 0.3, width: 0 });
});

