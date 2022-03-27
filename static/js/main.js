// Menu Close Button
const menuBtn = document.querySelector('.menu__button');
const nav = document.querySelector('.header nav');
const navItems = document.querySelectorAll('.header nav ul li');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        // Nav Close Event
        nav.classList.add('active');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        // Nav Close Event
        nav.classList.remove('active');
        menuOpen = false;
    }
});

navItems.forEach(item => {
    item.addEventListener('click', () => {
        if (!menuOpen) {
            menuBtn.classList.add('open');
            // Nav Close Event
            nav.classList.add('active');
            menuOpen = true;
        } else {
            menuBtn.classList.remove('open');
            // Nav Close Event
            nav.classList.remove('active');
            menuOpen = false;
        }
    })
})

// SHOW PHONE

const contact = document.querySelector("#contact");
const contactSection = document.querySelector(".contact__section");
const closePhone = document.querySelector('#close_phone');
contact.addEventListener("click", () => {
    contactSection.classList.toggle('show');
})
closePhone.addEventListener("click", () => {
    contactSection.classList.toggle('show');
})



$(function () {
    $(window).scroll(function(){
        var scroll = $(this).scrollTop();
        console.log(scroll);
        if(scroll>600){
            $('#top').fadeIn();
        }else{
            $('#top').fadeOut();
        }
    })
    $('#top').click(function(e){
       $('html, body').animate({
           scrollTop: 0
       }, 0)
    })
});