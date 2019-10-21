// СЛАЙДЕР В БЛОКЕ RENT
$(document).ready(function () {
  $('.rent-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 2000,
    prevArrow: $('.rent__arrows__left'),
    nextArrow: $('.rent__arrows__right'),
  });
});