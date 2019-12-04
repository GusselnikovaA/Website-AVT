// $(document).ready(function(){
//   var premise = $('.premise');
//   var rent = $('#rent');
//   var close = $('#close');

//   premise.on('click', function(){
//     $('#up').hide('slow');
//     rent.addClass('rent_active');
//     var target = $(this).attr('data-target');
//     $.ajax({  
//       url: target+".html",  
//       cache: false,  
//       success: function(html){  
//           $(".rent-wrap").html(html);  
//           $('.rent-slider').slick({
//             slidesToShow: 1,
//             slidesToScroll: 1,
//             speed: 2000,
//             prevArrow: $('.rent__arrows__left'),
//             nextArrow: $('.rent__arrows__right'),
//           });
//       }
//     });  
    // var target = $(this).attr('data-target');
    // $('.rent-wrap').load(target+".html");
    // location.reload();    //JavaScript функция перегрузки страницы
    // rentSlider.slick('reinit');
    // $('.rent-slider').slick('refresh');
    // if ($(".rent-slider").hasClass('slick-initialized'))
    //   $(".rent-slider").slick('setPosition');
    // else
    //   initSlider(".rent-slider");
  // });

  $(document).ready(function(){
    var premise = $('.premise');
    var rent = $('#rent');
    var close = $('#close');
  
    premise.on('click', function(){
      $('#up').hide('slow'); 
      // rent.addClass('rent_active');
      var target = $(this).attr('data-target');
      $(".rent-wrap").load("rent/"+target+".html", function() {
        $('.rent-slider').slick({
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  speed: 2000,
                  accessibility: true,
                  prevArrow: $('.rent__arrows__left'),
                  nextArrow: $('.rent__arrows__right'),
                });
      }, rent.addClass('rent_active'));
      // Другой аналогичный вариант подгрузки
      // $.ajax({  
      //   url: "rent/"+target+".html",  
      //   cache: false,  
      //   success: function(html){  
      //       $(".rent-wrap").html(html); 
            // $('.rent-slider').slick('unslick'); 
            // $('.rent-slider').slick({
            //   slidesToShow: 1,
            //   slidesToScroll: 1,
            //   speed: 2000,
            //   accessibility: true,
            //   prevArrow: $('.rent__arrows__left'),
            //   nextArrow: $('.rent__arrows__right'),
            // });
            // $('.rent-slider').slick('reinit');
      //   }
      // });  
      
    });

  
  // Закрывает модальное окно
  close.on('click', function(){
    rent.removeClass('rent_active');
    $('.rent-content').remove();
    $('.rent-info').remove();
    $('#up').show('slow');
  });

  // Функция для закрытия модального окна при клике на свободное пространство
  $(document).ready(function(){
    rent.click(function(e){
      if( ! $(e.target).closest(".rent-container").length)
        rent.removeClass('rent_active');
    });
  });
});

