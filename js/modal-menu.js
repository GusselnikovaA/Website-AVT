  
$(document).ready(function(){
  var menuAlert = $('.menu-alert');
  var modalMenu = $('#modal-menu');
  var closeMenu = $('.menu-close');

  menuAlert.on('click', function(){
    modalMenu.addClass('modal-menu_active');
  });
  closeMenu.on('click', function(){
    modalMenu.removeClass('modal-menu_active');
  });
});