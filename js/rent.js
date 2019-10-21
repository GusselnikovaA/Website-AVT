$(document).ready(function(){
  let premise = $('.premise');
  let rent = $('#rent');
  let close = $('#close');
  let rentLink = $('.rent__link');

  premise.on('click', function(){
    rent.addClass('rent_active');
  });

  premise.on('click', function(){
    rent.addClass('rent_active');
    let target = $(this).attr('data-target');
    $('.rent-wrap').load(target+".html");
  });
  // price.on('click', function(){
  //   modal.addClass('modal_active');
  // });
  
  close.on('click', function(){
    rent.removeClass('rent_active');
  });


});