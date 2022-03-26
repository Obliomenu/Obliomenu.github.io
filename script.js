let menuHamb = document.querySelector('.cs_bar');

let menu = document.querySelector('.hamburger-menu');

let menuClose = document.querySelector('.close');
console.log(menuHamb, menu, menuClose);

menuHamb.addEventListener('click', function(){
    menu.classList.add('cs_active');
    console.log(menu);
    menu.classList.add('hamburger-show');
});

menuClose.addEventListener('click', function(){
    menu.classList.remove('cs_active');
    console.log(menu);
    menu.classList.remove('hamburger-show');
});