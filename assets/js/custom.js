(function ($) {
    'use strict';
    // Preloader
    jQuery(window).on('load', function () {
        jQuery("#preloader").delay(250).fadeOut(250);
    });
    // Owl Carousel
    $('.blog-wrapper').owlCarousel({
        loop: true,
        autoplay: true,
        margin: 20,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
    $('.review-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        margin: 20,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 2
            }
        }
    });
    // AOS
    AOS.init({
        delay: 300,
        duration: 600,
        easing: 'ease',

    });
    // Scrollup
    $(function () {
        $.scrollUp({
            scrollName: 'scrollUp',
            scrollText: 'Up',
            activeOverlay: false
        });
    });
    // Restrict Inspect
    document.onkeydown = function (e) {
        if (e.ctrlKey &&
            (e.keyCode === 67 ||
                e.keyCode === 86 ||
                e.keyCode === 85 ||
                e.keyCode === 117)) {
            return false;
        } else {
            return true;
        }
    };
    $(document).keypress("u", function (e) {
        if (e.ctrlKey) {
            return false;
        } else {
            return true;
        }
    });
})(jQuery);