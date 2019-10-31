$(document).ready(function(){
  var premise = $('.premise');
  var rent = $('#rent');
  var close = $('#close');

  premise.on('click', function(){
    rent.addClass('rent_active');
    var target = $(this).attr('data-target');
    $('.rent-wrap').load(target+".html");
    // $('.rent-slider').slick('refresh');
      $('.rent-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 2000,
        prevArrow: $('.rent__arrows__left'),
        nextArrow: $('.rent__arrows__right'),
      });
  });
  
  close.on('click', function(){
    rent.removeClass('rent_active');
  });
});