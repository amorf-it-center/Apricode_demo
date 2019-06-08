jQuery(document).ready(function ($) {

    'use strict';

    $(window).on("scroll", function () {
        if ($(window).scrollTop() > 680) {
            $(".nav_width").addClass("active fixed");
            $(".languagepicker").addClass("fixed_Lang");

        } else {
            //remove the background property so it comes transparent again (defined in your css)
            $(".nav_width").removeClass("active fixed");
            $(".languagepicker").removeClass("fixed_Lang");

        }
    });

    /************** Mixitup (Filter Projects) *********************/
    $('.projects-holder').mixitup({
        effects: ['fade', 'grayscale'],
        easing: 'snap',
        transitionSpeed: 400
    });

});
