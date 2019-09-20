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
/*
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
*/

    $(window).scroll(function () {
        $('.section-2 .year-1 .car').isInViewport().addClass('animation-car-desctop');
        $('.section-2 .year-4 .left').isInViewport({ tolerance: -200 }).addClass('animation');

        var scroll = $(window).scrollTop();
        var objectSelect1 = $(".section-3 .left-side .block-2");
        var objectPosition1 = objectSelect1.offset().top;
        console.log(scroll);
        console.log(objectPosition1);
        if (scroll > objectPosition1) {
            $(".section-3 .right-side .scroll-block").removeClass("status-1");
            $(".section-3 .right-side .scroll-block").removeClass("status-3");
            $(".section-3 .right-side .scroll-block").addClass("status-2");
        } else {
            $(".section-3 .right-side .scroll-block").removeClass("status-2");
            $(".section-3 .right-side .scroll-block").removeClass("status-3");
            $(".section-3 .right-side .scroll-block").addClass("status-1");
        }

        var objectSelect2 = $(".section-3 .left-side .block-3");
        var objectPosition2 = objectSelect2.offset().top;
        if (scroll > objectPosition2) {
            $(".section-3 .right-side .scroll-block").removeClass("status-1");
            $(".section-3 .right-side .scroll-block").removeClass("status-2");
            $(".section-3 .right-side .scroll-block").addClass("status-3");
        } else if (scroll > objectPosition1) {
            $(".section-3 .right-side .scroll-block").removeClass("status-2");
            $(".section-3 .right-side .scroll-block").removeClass("status-1");
            $(".section-3 .right-side .scroll-block").addClass("status-2");
        }
    });
    $('.section-2 .year-4 .left').isInViewport({ tolerance: -200 }).addClass('animation');
    $('.section-2 .year-1 .car').isInViewport().addClass('animation-car-desctop');

    $('.section-2 .year-4 .bottom').scroolly([
        {
            from: 'el-top = vp-bottom',
            to: 'el-bottom = vp-top',
            cssFrom: { left: '220px' },
            cssTo: { left: '500px' }
        }
    ]);

    $('.section-2 .year-6 .bottom .front').scroolly([
        {
            from: 'el-top = vp-bottom',
            to: 'el-bottom = vp-top',
            cssFrom: { right: '10px' },
            cssTo: { right: '300px' }
        }
    ]);
});
