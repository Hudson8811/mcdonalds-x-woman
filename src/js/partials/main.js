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
    //end header




    //Как было анимация первого блока
    $('.section-2 .year-1 .soldiers').scroolly([
        {
            from: 'el-top = vp-bottom',
            to: 'el-bottom = vp-top',
            cssFrom: { width: '340px' },
            cssTo: { width: '110px' }
        },
        {
            from: 'el-top = vp-bottom',
            to: 'el-bottom = vp-top',
            cssFrom: { left: '0px' },
            cssTo: { left: '115px' }
        }
    ]);

    var carAnim=true;//анимация одноразовая. поэтому делаем проверку
    if(carAnim && $('.section-2 .year-1 .car').isInViewport({ tolerance: -100})){
        $('.section-2 .year-1 .car').addClass('animation-car-desctop');
        carAnim=false;

    }

    $(window).scroll(function () {
        if( carAnim && $('.section-2 .year-1 .car').isInViewport({ tolerance: -100})){
            $('.section-2 .year-1 .car').addClass('animation-car-desctop');
            carAnim=false;
        }
    });
});
