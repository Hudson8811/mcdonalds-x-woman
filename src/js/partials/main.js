$(document).ready(function () {
    $("input[name='phone']").mask(" +7 (999) 999-99-99");


    //header
    var burger = $('.burger');
    var hMenu = $('header .menu');

    burger.on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('active');
        hMenu.stop().slideToggle(200);
    });
    $(window).resize(function () {
        if (!burger.is(':visible')) {
            hMenu.attr('style', '');
        }
    });
});
