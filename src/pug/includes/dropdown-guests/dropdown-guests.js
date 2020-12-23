$(document).ready(function () {
  $('.minus').click(function () {
      var $input = $(this).parent().find('input');
      var count = parseInt($input.val()) - 1;
      count = count < 0 ? 0 : count;
      $input.val(count);
      $input.change();
      return false;
  });
  $('.plus').click(function () {
      var $input = $(this).parent().find('input');
      $input.val(parseInt($input.val()) + 1);
      $input.change();
      return false;
  });

  function declOfNum(number, titles) {
      cases = [2, 0, 1, 1, 1, 2];
      return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
  }  
      $('.dropdown-content__box-button').find('button').click(function () {
          let target = $(this).closest('.dropdown')
          let child = target.find('.child').val();
          let adult = target.find('.adult').val();
          let baby = target.find('.baby').val();
          let summ = parseInt(child) + parseInt(adult) + parseInt(baby);

          if(summ === 0){
              target.find('.dropbtn__text').text('Сколько гостей');
             
          } else {target.find('.dropbtn__text').text(summ + ' ' + declOfNum(summ, ['гость', 'гостя', 'гостей']));target.find('.clear').css('opacity', '1');}
            
      });
 
  function resizeInput() {
      $(this).attr('size', $(this).val().length);
  }
  $('input[type="text"]') 
      .keyup(resizeInput) 
      .each(resizeInput); 
  $('.dropdown__dropbtn').click(function () {
      if($(this).next('.dropdown-content').hasClass('dropdown-content__show')){
          $(this).next('.dropdown-content').removeClass('dropdown-content__show');
      } else $(this).next('.dropdown-content').addClass('dropdown-content__show');

  }); 
  $('.dropdown__buttons-container .clear').click(function () {
    $('.dropdown__buttons-container .clear').css('opacity', '0');
      $('.dropbtn__text').text('Сколько гостей');
      $('.child').val(0);
      $('.adult').val(0);
      $('.baby').val(0);
  
  });
  $('.dropdown__buttons-container .submit').click(function () {
      $('.dropdown-content').removeClass('dropdown-content__show');
   });
});