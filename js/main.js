
document.addEventListener('touchstart', onTouchStart, {passive: true});

$(document).ready(function(){

    // Sticky Header
    $(window).scroll(function(){
        if ($(window).scrollTop() >= 100) {
                $('.header').addClass('fixed');
                $('body').addClass('fixed-header');
            }
            else {
                $('.header').removeClass('fixed');
                $('body').removeClass('fixed-header');
            }
        }
    );
    // Mobile Menu
    $('.header .menu-btn').on('click', function(e){
        $('.header').toggleClass('menu-open');
        $('body').toggleClass('overflow')
        e.preventDefault();
    })
    $('.header .menu > .has-sub-menu').on('click', function(){
        $(this).siblings('.has-sub-menu').removeClass('active');
        $(this).toggleClass('active')
    })
        

    // Testimonials Owl Carousel
    $('.section-testimonials .owl-carousel').owlCarousel({
        loop:true,
        nav:true,
        dots: false,
        slideBy : 3,
        responsive:{
            0:{
                items:1,
                margin: 10
            },
            1024:{
                items:2,
                margin:50
            },
            1200:{
                items:3,
                margin:60
            },
            1440:{
                margin:117
            }
        }
    })
})