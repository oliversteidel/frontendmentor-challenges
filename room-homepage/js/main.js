$(document).ready(function () {

    const discover = $('.discover');
    const availibility = $('.availibility');

    var counter = 0;
    var navOpen = false;




    $('.slider-btn--right').click(() => {
        if (counter === 0) {
            gsap.to(discover, {duration: 0.3, opacity: 0});
            gsap.to(discover, {duration: 1, xPercent: -100});
            
            counter++; 

        } else if (counter === 1) {
            gsap.to(availibility, {duration: 0.3, opacity: 0});
            gsap.to(availibility, {duration: 1, xPercent: -100});
            
            counter++;            
        }
    });

    $('.slider-btn--left').click(() => {
        if (counter === 2) {
            gsap.to(availibility, {delay: 0.3, duration: 0.7, opacity: 1});
            gsap.to(availibility, {duration: 1, xPercent: 0});
            
            counter--;

        } else if (counter === 1) {
            gsap.to(discover, {delay: 0.3, duration: 0.7, opacity: 1});
            gsap.to(discover, {duration: 1, xPercent: 0});
            
            counter--;
        }
    });

    $('.burger').click(() => {
        
        if(!navOpen) {
            $('.nav').css('visibility', 'visible');
            $('.burger').css('transform', 'translateY(-16px)');            
            $('.burger__img').attr('src', 'images/icon-close.svg');
            $('.nav').toggleClass('shadow');
            navOpen = true;
            
        }else{
            $('.nav').css('visibility', 'hidden');
            $('.burger').css('transform', 'translateY(0)'); 
            $('.burger__img').attr('src', 'images/icon-hamburger.svg');
            $('.nav').toggleClass('shadow');
            navOpen = false;
            

        };

    });
});