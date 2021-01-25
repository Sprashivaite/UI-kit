$(document).ready(() => {
  $('.js-dropdown-facilities .js-minus').click(function () {
    const $input = $(this).parent().find('input');
    let count = parseInt($input.val()) - 1;
    count = count < 0 ? 0 : count;
    $input.val(count);
    $input.change();
    return false;
  });
  $('.js-dropdown-facilities .js-plus').click(function () {
    const $input = $(this).parent().find('input');
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
  });
  $('.js-dropdown-facilities .js-dropdown-content__box-button')
    .find('button')
    .click(function () {
      const target = $(this).closest('.js-dropdown-facilities');
      const bedrooms = target.find('.bedrooms').val();
      const bed = target.find('.bed').val();
      const bathrooms = target.find('.bathrooms').val();
      const sum = parseInt(bedrooms) + parseInt(bed) + parseInt(bathrooms);
      if (sum === 0) {
        target.find('.dropbtn__text').text('Удобства');
      } else {
        let text1 = '';
        let text2 = '';
        let text3 = '';
        if (bedrooms > 0) text1 = `${bedrooms} спальни `;
        if (bed > 0) text2 = `${+bed} кровати `;
        if (bathrooms > 0) text3 = `${+bathrooms} ванные комнаты`;
        target.find('.dropbtn__text').text(text1 + text2 + text3);
      }
    });
  $('.js-dropdown-facilities .js-dropdown__dropbtn').click(function () {
    if ($(this).next('.js-dropdown-content').hasClass('dropdown-content__show')) {
      $(this).find('i').css('transform', 'rotate(0deg)');
      $(this).next('.js-dropdown-content').removeClass('dropdown-content__show');
    } else {
      $(this).next('.js-dropdown-content').addClass('dropdown-content__show');
      $(this).find('i').css('transform', 'rotate(180deg)');
    }
  });
});
