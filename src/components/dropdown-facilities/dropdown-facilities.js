$(document).ready(function () {
    $('.dropdown-facilities .minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 0 ? 0 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.dropdown-facilities .plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });  
 
        $('.dropdown-facilities .dropdown-content__box-button').find('button').click(function () {
            let target = $(this).closest('.dropdown-facilities')
            let bedrooms = target.find('.bedrooms').val();
            let bed = target.find('.bed').val();
            let bathrooms = target.find('.bathrooms').val();
            let summ = parseInt(bedrooms) + parseInt(bed) + parseInt(bathrooms);
            if(summ === 0){
                target.find('.dropbtn__text').text('Удобства');
            } else {
                let text_1 = '',
                    text_2 = '', 
                    text_3 = ''
                bedrooms > 0 ? text_1 = bedrooms + ' спальни ': '';
                bed > 0 ? text_2 =  + bed + ' кровати ': '';
                bathrooms > 0 ? text_3 =  +  bathrooms + ' ванные комнаты': '';
                target.find('.dropbtn__text').text(text_1 + text_2 + text_3);
            }
        });
    $('.dropdown-facilities .dropdown__dropbtn').click(function () {
        if($(this).next('.dropdown-content').hasClass('dropdown-content__show')){
            $(this).find('i').css('transform', 'rotate(0deg)')
            $(this).next('.dropdown-content').removeClass('dropdown-content__show');
        } else {$(this).next('.dropdown-content').addClass('dropdown-content__show');
        $(this).find('i').css('transform', 'rotate(180deg)')
    }
    }); 
  });