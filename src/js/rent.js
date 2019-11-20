$(document).ready(function(){
  var premise = $('.premise');
  var rent = $('#rent');
  var close = $('#close');

  $(document).on('click', '.premise', function(){
    $('#up').hide('slow');
    rent.addClass('rent_active');
    // $(".rent-slider").slick('reinit');
    var target = $(this).attr('data-target');
    $.ajax({  
      url: "rent/"+target+".html",  
      cache: true,  
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
    // rentSlider.slick('reinit');
    // $('.rent-slider').slick('refresh');
    if ($(".rent-slider").hasClass('slick-initialized'))
      $(".rent-slider").slick('setPosition');
    else
      initSlider(".rent-slider");
  });
  
  close.on('click', function(){
    rent.removeClass('rent_active');
    $('#up').show('slow');
  });
});