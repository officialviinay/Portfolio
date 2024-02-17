
let menuIcon = document.querySelector('#menu-icon');
let navBar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navBar.classList.toggle('active');
}




// scroll sections
window.onscroll = () => {
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
}


//sticky header
let header = document.querySelector('header');

header.classList.toggle('sticky', window.scrollY > 100);
// remove toggle icon and navbar when click navbar Links (scroll)

menuIcon.classList.remove('bx-x');
navBar.classList.remove('active');
