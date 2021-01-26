$(function() {

    console.log('toto') // savoir si ça marche

    const menu = $('#main-menu');
     $(window).scroll(function() {
        if ($(window).scrollTop() >= 40) {
            console.log('toto')
            menu.removeClass('menu-scroll');

        } else {
            menu.addClass('menu-scroll')
        }
    });
 });
