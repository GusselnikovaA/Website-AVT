// Скрипт слайдера
$(document).ready(function () {
  // СЛАЙДЕР В БЛОКЕ PREMISES
  $('.premises-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        speed: 2000,
        arrows: true,
        // prevArrow: $('.hero-arrows__left'),
        // nextArrow: $('.hero-arrows__right'),
        // responsive: [{
        //     breakpoint: 890,
        //     settings: {
        //       arrows: false,
        //     }
        //   },
        //   {
        //     breakpoint: 414,
        //     settings: "unslick"
        //   }
        // ]
      });
})