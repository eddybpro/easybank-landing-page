const menuBtn = document.querySelector('.menu'),
closeBtn = document.querySelector('.close'),
navLinksBox = document.querySelector('.nav-links'),
navLinks = document.querySelectorAll('.nav-link'),
bgMenu = document.querySelector('.bg-menu');

menuBtn.addEventListener('click',showNav);
closeBtn.addEventListener('click',showNav);
navLinks.forEach(link=>{
    link.addEventListener('click',showNav);
})

function showNav(){
    menuBtn.classList.toggle('none-mobile');
    closeBtn.classList.toggle('none-mobile');
    navLinksBox.classList.toggle('none-mobile');
    bgMenu.classList.toggle('none-mobile');
}