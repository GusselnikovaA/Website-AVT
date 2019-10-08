// СЛАЙДЕР В БЛОКЕ PREMISES
$(document).ready(function () {
  $('.premises-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: $('.premises__arrows__left'),
    nextArrow: $('.premises__arrows__right'),
  });
});