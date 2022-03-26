let menuHamb = document.querySelector('.cs_bar');

let menu = document.querySelector('.hamburger-menu');

let menuClose = document.querySelector('.close');

let menuLink = document.querySelectorAll('.cs_menu_item')
console.log(menuHamb, menu, menuClose, menuLink);

menuHamb.addEventListener('click', function(){
    menu.classList.add('cs_active');
    console.log(menu);
    menu.classList.add('hamburger-show');
});

menuLink.forEach(item => {
    item.addEventListener('click', event => {
        menu.classList.remove('cs_active');
    })
})

menuClose.addEventListener('click', function(){
    menu.classList.remove('cs_active');
    console.log(menu);
    menu.classList.remove('hamburger-show');
});