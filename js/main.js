$(document).ready(() => {

    //turn on arrow-to-top
    $('.arrow-to-top .las').click(()=>{
        $('html, body').animate({
            scrollTop: 0
        }, 600);
    })

    //Show main menu
    $('.info-bar .links_toggleBtn .open_btn,.navbar .toggle-nav-btn').click(() => {
        $('.main-menu').css({
            'top': '0%',
            'opacity': 1,
            'z-index': 999,
        });
        $('.main-menu').slideDown(2000);
    })

    //hide main menu  
    $('.main-menu .overlay span.close').click(() => {
        $('.main-menu').css({
            'top': '-100%',
            'opacity': 0,
            'z-index': -1,
        });
        $('.main-menu').slideUp(2000);
    })

    //slick slider setting
    $('.slider-detail').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        active: true,
        asNavFor: '.slider-img',
    });

    $('.slider-img').slick({
        vertical: true,
        verticalSwiping: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        focusOnSelect: true,
        asNavFor: '.slider-detail',
        nextArrow: '<i class="las la-angle-up d-none d-lg-block"></i>',
        prevArrow: '<i class="las la-angle-down d-none d-lg-block"></i>'
    });

    //change navbar and display it on scroll

    const changeUpperPart = () => {
        if (window.pageYOffset >= 200) {
            $('.upper-section').addClass('upper-fixed');
            $('.info-bar').css('display', 'none');
            $('.navbar').addClass('nav-fixed');
            $('.navbar .navbar-brand img').attr('src', 'images/logo-black.png');
        } else {
            $('.upper-section').removeClass('upper-fixed');
            $('.info-bar').css('display', 'black');
            $('.navbar').removeClass('nav-fixed');
            $('.navbar .navbar-brand img').attr('src', 'images/logo-white.png');
        }
    }

    changeUpperPart();

    window.onscroll = () => {
        changeUpperPart();

        //show&hide arrow-to-top
        if(window.pageYOffset >= 300){
            $('.arrow-to-top').css('display', 'block');
        }else{
            $('.arrow-to-top').css('display', 'none');
        }
    }

    //owl-carousel
    $('.team-mebmers .owl-carousel, .testimonials-carousel .owl-carousel').owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        navText: [
            "<i class='las la-angle-left'></i>",
            "<i class='las la-angle-right'></i>"
        ],
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 1
            },
            1200: {
                items: 2
            }
        }
    });

    //Cube portfolio
    var gridContainer = jQuery('#grid-container'),

        filtersContainer = $('#filters-container');

    // init cubeportfolio
    gridContainer.cubeportfolio({
        caption: 'zoom'
    });

    //activate filters for cubeportfolio
    filtersContainer.on('click', 'button', function (e) {

        // cache current button clicked
        var me = jQuery(this);

        // add class cbp-filter-item-active on the current button clicked and remove from other buttons
        me.addClass('cbp-filter-item-active').siblings().removeClass('cbp-filter-item-active');

        // call cubeportfolio filter function
        gridContainer.cubeportfolio('filter', me.data('filter'));

    });

    //Sponsors Carousel
    $('.sponsors-carousel .owl-carousel').owlCarousel({
        loop: true,
        margin: 30,
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            },
            1200: {
                items: 6
            }
        }
    })

    //Run WOW Script
    new WOW().init();
})