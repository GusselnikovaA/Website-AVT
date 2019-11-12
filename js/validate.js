$(document).ready(function () {
  // Валидация формы
  $('#call-form').validate({
    errorElement: "div",
    rules: {
      username: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      useremail: {
        required: true,
        email: true
      },
      userphone: {
        required: true
      }
    },
    messages: {
      username: {
        required: "Заполните поле",
        minlength: jQuery.validator.format ("Минимум 2 символа"),
        maxlength: jQuery.validator.format ("Максимум 15 символов")
      },
      useremail: {
        required: "Заполните поле", 
        email: "Введите корректный email."
      },
      userphone: "Заполните поле"
    },
    submitHandler: function (form) {
      $.ajax({
        url: 'mail.php',
        type: 'POST',
        data: $('#call-form').serialize(),
        success: function(data) {
          $("input").val("");
          $('#success').addClass('success_active');
          $('#success-close').on('click', function(){
            $('#success').removeClass('success_active');
          });
        }
    });
  }
  });

  // Маска для телфона
  $('.phone').mask('+7 (999) 999-99-99');
});