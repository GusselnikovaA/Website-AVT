$(document).ready(function(){
  var premise = $('.premise');
  var rent = $('#rent');
  var close = $('#close');

  premise.on('click', function(){
    $('#up').hide('slow');
    rent.addClass('rent_active');
    var target = $(this).attr('data-target');
    $.ajax({  
      url: target+".html",  
      // cache: false,  
      success: function(html){  
          $(".rent-wrap").html(html);  
          $('.rent-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 2000,
            prevArrow: $('.rent__arrows__left'),
            nextArrow: $('.rent__arrows__right'),
          });
      }
  });  
    // var target = $(this).attr('data-target');
    // $('.rent-wrap').load(target+".html");
    // location.reload();    //JavaScript функция перегрузки страницы
    // $(".rent-slider").slick('reinit');
    // $('.rent-slider').slick('refresh');

  });
  
  close.on('click', function(){
    rent.removeClass('rent_active');
    $('#up').show('slow');
  });
});