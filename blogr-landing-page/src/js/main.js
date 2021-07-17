const navToggleBtn = document.querySelector('.nav__toggle-btn');
const nav = document.querySelector('.nav__links');
let isNavOpen = false;

navToggleBtn.addEventListener('click', function() {
    if(!isNavOpen) {
        this.classList.add('icon--close');
        nav.classList.add('nav--open')
        isNavOpen = true;
    }else{
        this.classList.remove('icon--close');
        nav.classList.remove('nav--open')
        isNavOpen = false;
    }    
});


const connectDropdownToggle = document.querySelector('.nav__links--connect');
const connectDropdown = document.querySelector('.connect-dropdown');
let isConnectDropdownOpen = false;

connectDropdownToggle.addEventListener('click', function() {
    if(!isConnectDropdownOpen) {
        connectDropdown.classList.add('connect-dropdown--open');
        connectDropdownToggle.firstElementChild.classList.add('arrow-icon--open');
        isConnectDropdownOpen = true;
    }else{
        connectDropdown.classList.remove('connect-dropdown--open');
        connectDropdownToggle.firstElementChild.classList.remove('arrow-icon--open');
        isConnectDropdownOpen = false;
    }
})

