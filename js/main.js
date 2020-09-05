'use strict';
(function ($) {

    /*------------------
       Slider
    --------------------*/
    $('#team-carousel').owlCarousel({
        loop: false,
        margin: 10,
        nav: true,
        dots: false,
        navText: ["<img src='img/arrow-left.svg'>", "<img src='img/arrow-right.svg'>"],
        responsive: {
            0: {
                items: 1
            },
            400: {
                items: 2
            },
            768: {
                items: 3
            },
            1000: {
                items: 4
            },
            1200: {
                items: 5
            }
        }
    });
    $('#review').owlCarousel({
        loop: true,
        center: true,
        nav: false,
        autoplay: true,
        autoplayTimeout: 9999,
        autoplayHoverPause: true,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            991: {
                items: 3
            }
        }

    });
    /*------------------
       Burger
    --------------------*/

    $('.burger').on('click', function () {
        $('.mobile-menu').toggleClass('open');
        $('.burger').toggleClass('open');
        $(this).find('span').removeClass('no-animation');
        $('body').toggleClass('modal-open');
        $('.fade-body').toggleClass('show');
    });
    let burger = $('.burger');
    let mobMenu = $('.mobile-menu');

    $(document).mouseup(function (e) {
        if (!burger.is(e.target) && burger.has(e.target).length === 0 &&
            !mobMenu.is(e.target) && mobMenu.has(e.target).length === 0
        ) {
            mobMenu.removeClass('open');
            burger.removeClass('open');
            $('body').removeClass('modal-open');
            $('.fade-body').removeClass('show');
        }
    });

    /*------------------
      Scroll
   --------------------*/

    $(document).ready(function () {
        $('body').scrollspy({ target: '.move', offset: 99 });
        $('.move a').on('click', function (event) {
            if (this.hash !== "") {
                event.preventDefault();
                var hash = this.hash;
                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 800, function () {
                    window.location.hash = hash;
                });
            }
        });
    });

    /*------------------
    Fix boostraps modal
    --------------------*/

    $(document).ready(function () {
        $('.modal').on('show.bs.modal', function () {
            if ($(document).height() > $(window).height()) {
                // no-scroll
                $('body').addClass("modal-open-noscroll");
            }
            else {
                $('body').removeClass("modal-open-noscroll");
            }
        });
        $('.modal').on('hide.bs.modal', function () {
            $('body').removeClass("modal-open-noscroll");
        });
    });

    /*------------------
    For link
    --------------------*/

    $('.navbar-nav li a').filter(function () {
        return this.href === location.href;
    }).addClass('active');
    // for (let i = 0; i < document.links.length; i++) {
    //     if (document.links[i].href == document.URL) {
    //         document.links[i].className += ' active';
    //     }
    // };

    /*------------------
    Filter
    --------------------*/

    let filters = $('[data-filter]');
    let categories = $('[data-category]');
    filters.on('click', function () {
        filters.removeClass('active');
        $(this).addClass('active');
        let filter = $(this).data('filter');

        if (filter == 'all') {
            categories.removeClass('hide');
            categories.removeClass('show-filter');
        } else {
            categories.each(function () {
                let category = $(this).data('category');
                if (category != filter) {
                    $(this).addClass('hide');
                } else {
                    $(this).removeClass('hide');
                    $(this).addClass('show-filter');
                }
            });

        }
    });

})(jQuery);

