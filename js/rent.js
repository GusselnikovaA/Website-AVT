$(document).ready(function(){
  let premise = $('#premise');
  let rent = $('#rent');
  let close = $('#close');
  // let price = $('.card__link');

  premise.on('click', function(){
    rent.addClass('modal_active');
  });
  // price.on('click', function(){
  //   modal.addClass('modal_active');
  // });
  
  close.on('click', function(){
    rent.removeClass('modal_active');
  });


});