(function($) {
    var loadIntCount = function () {
        $('.counter-block').each(function (ind, ele) {
            $(ele).find('.count').html($(this).data("min-value"));
        });
    },
    generateFansCount = function() {
        $('.counter-block').each(function(ind, ele) {
            console.log("test");
            var counterElem = $(ele).find('.fans-counter .count'),
                //counterPlus = $(ele).find('.fans-counter .plus-icon'),
                minValue = $(this).data("min-value"),
                maxValue = $(this).data("max-value"),
                count = parseInt($(counterElem).text());
            if ($(ele).is(":appeared", true) && maxValue != count && count == minValue) {
                var ContPi = {
                        val: minValue
                    },
                    NewValPi = maxValue;
                var counterTLPi = gsap.timeline();
                counterTLPi.to(ContPi, 2, {
                    delay: 0.5,
                    val: NewValPi,
                    roundProps: 'val',
                    ease: 'expo.out',
                    onUpdate: function() {
                        counterElem.html(ContPi.val);
                    }
                })
                // .to(counterPlus, 0.5, {
                //     autoAlpha: 1
                // });
            }
        });
    };
    loadIntCount();
    generateFansCount();
    $(window).on('scroll',function() {
        generateFansCount();
    })
    jQuery(document).ready(function($) {
        "use strict";
        $('#customers-testimonials').owlCarousel( {
                loop: true,
                center: true,
                items: 3,
                margin: 30,
                autoplay: true,
                dots:true,
            nav:true,
                autoplayTimeout: 8500,
                smartSpeed: 450,
              navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
                responsive: {
                    0: {
                        items: 1
                    },
                    768: {
                        items: 2
                    },
                    1170: {
                        items: 3
                    }
                }
            });
    });
    $('.owl-carousel').owlCarousel({
        loop:false,
        margin:10,
        autoplay:true,
        rewind:true,
        autoplayHoverPause:true,
        responsiveClass:true,

        responsive:{
            0:{
                items:1,
                nav:true
            },
            768:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:true,
                loop:false
            }
        }
    })
})(jQuery);
