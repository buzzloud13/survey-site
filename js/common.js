$(document).ready(function () {

    // lazyload init
    var bLazy = new Blazy();

    // accordion
    $('.title').on('click', function () {
        $('.icon-arrows2').removeClass('transform');
        $('.content').slideUp();
        if ($(this).next().is(':hidden') == true) {
            $(this).next().slideDown();
            $(this).prev('.icon-arrows2').addClass('transform');
        }
    });
    $('.content').hide();

    //tabs
    $('.types__toggle').hide();
    $('.types__toggle:first').show();
    $('.types__buttons li:first').addClass('active');

    $('.types__buttons li').click(function (e) {
        e.preventDefault();
        $('.types__buttons li').removeClass('active');
        $(this).addClass('active');
        $('.types__toggle').hide();
        var selectTab = $(this).find('a').attr('href');
        $(selectTab).fadeIn();
    });

    //click event to scroll to top
    $('#scrollToTop').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1800);
        return false;
    });

    // hamburger button
    $(".b-hamburger").click(function (event) {
        event.preventDefault();
        $("span").toggleClass("active");
        $(".mobile-menu").toggleClass("toggle-menu");
    });

    // mobile-menu
    $('.mobile-menu').on('click', 'a', function () {
        $(".mobile-menu").removeClass("toggle-menu");
        $("span").removeClass("active");
    });

    // fancybox
    $("[data-fancybox]").fancybox({});

    // slider slick
    $('.js_slider_slick').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        prevArrow: '<i class="briefcases_prev"></i>',
        nextArrow: '<i class="briefcases_next"></i>',
    });

    // objectFitImages
    $(function () {
        objectFitImages()
    });
});

// sticky on scroll
$(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
        $('.header__header-mobile').addClass("sticky");
    } else {
        $('.header__header-mobile').removeClass("sticky");
    }
});

// up button
$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('#scrollToTop').fadeIn();
    } else {
        $('#scrollToTop').fadeOut();
    }
});

// preloader
$(window).on('load', function () {
    //    $("#preloader").delay(500).fadeOut("slow");
});