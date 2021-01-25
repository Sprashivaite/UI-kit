$(document).ready(() => {
  $('.dropdown .minus').click(function () {
    const $input = $(this).parent().find('input');
    const count = parseInt($input.val()) - 1;
    count = count < 0 ? 0 : count;
    $input.val(count);
    $input.change();
    return false;
  });
  $('.dropdown .plus').click(function () {
    const $input = $(this).parent().find('input');
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
  });

  function declOfNum(number, titles) {
    cases = [2, 0, 1, 1, 1, 2];
    return titles[
      number % 100 > 4 && number % 100 < 20
        ? 2
        : cases[number % 10 < 5 ? number % 10 : 5]
    ];
  }
  $('.dropdown .dropdown-content__box-button')
    .find('button')
    .click(function () {
      const target = $(this).closest('.dropdown');
      const child = target.find('.child').val();
      const adult = target.find('.adult').val();
      const baby = target.find('.baby').val();
      const summ = parseInt(child) + parseInt(adult) + parseInt(baby);

      if (summ === 0) {
        target.find('.dropbtn__text').text('Сколько гостей');
      } else {
        target
          .find('.dropbtn__text')
          .text(`${summ} ${declOfNum(summ, ['гость', 'гостя', 'гостей'])}`);
        target.find('.clear').css('opacity', '1');
      }

      target.find('.clear').click(() => {
        target.find('.clear').css('opacity', '0');
        target.find('.dropbtn__text').text('Сколько гостей');
        target.find('.child').val(0);
        target.find('.adult').val(0);
        target.find('.baby').val(0);
      });
      target.find('.submit').click(() => {
        target.find('.dropdown-content').removeClass('dropdown-content__show');
      });
    });

  $('.dropdown .dropdown__dropbtn').click(function () {
    if ($(this).next('.dropdown-content').hasClass('dropdown-content__show')) {
      $(this).next('.dropdown-content').removeClass('dropdown-content__show');
      $(this).find('i').css('transform', 'rotate(0deg)');
    } else {
      $(this).next('.dropdown-content').addClass('dropdown-content__show');
      $(this).find('i').css('transform', 'rotate(180deg)');
    }
  });
});
