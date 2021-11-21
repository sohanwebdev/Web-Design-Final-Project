$(function() {
    'use strict';
    $(".slider_item_container").slick({
      prevArrow:'<i class="slider_arrow slider_arrow_left fas fa-chevron-left"></i>',
      nextArrow:'<i class="slider_arrow slider_arrow_right fas fa-chevron-right"></i>',
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: 'linear'
    });
    $('.client_slick').slick({
        infinite: true,
        speed: 400,
        slidesToShow: 5,
        slidesToScroll: 2,
        arrows: false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    });
    $(".testimonial_item_container").slick({
      arrows: false,
      dots: true,
      dotsClass: "slider_dots",
      autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 568,
                settings: {
                  slidesToShow: 1,
                }
            },
        ]
    });
  $('.venoBox').venobox();

  $('.counter').counterUp({
    delay: 10,
    time: 10000
  });

  $(window).on('load',function(){
    $('.preloder').fadeOut(1000)
  });

  $('.navbar-toggler').on('click',function(){
    $('.mobile_menu_container').toggleClass('active_bt')
  });
  
  $(window).on('scroll',function(){
    if($(window).scrollTop() > 250){
      $('#backToTop').fadeIn('slow')
    }else{
      $('#backToTop').fadeOut('slow')
    }
  });

  $('#backToTop').on('click',function(){
    $('html,body').animate({
      scrollTop: 0
    },1000)
  });

  $('.search_btn').on('click',function(){
    $('.search_overly').addClass('search_active')
  });
  $('.close_icon').on('click',function(){
      $('.search_overly').removeClass('search_active')
  });
  
})