// document.addEventListener('touchstart', onTouchStart, {passive: true});

$(document).ready(function () {
    $(window).scroll(function () {
      if ($(window).scrollTop() >= 100) {
        $(".header").addClass("fixed");
        $("body").addClass("fixed-header");
      } else {
        $(".header").removeClass("fixed");
        $("body").removeClass("fixed-header");
      }
    });
    $(".header .menu-btn").on("click", function (e) {
      $(".header").toggleClass("menu-open");
      $("body").toggleClass("overflow");
      e.preventDefault();
    });
  
    $(".header .menu > .has-sub-menu").on("click", function () {
      $(this).siblings(".has-sub-menu").removeClass("active");
      $(this).toggleClass("active");
    });
});

