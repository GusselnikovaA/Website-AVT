// СЛАЙДЕР В БЛОКЕ PREMISES
$(document).ready(function () {
  $('.premises-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    prevArrow: $('.premises__arrows_left'),
    nextArrow: $('.premises__arrows_right'),
    responsive: [
      {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 586,
      settings: {
        slidesToShow: 1,
      },
    }
    ]
  });
});