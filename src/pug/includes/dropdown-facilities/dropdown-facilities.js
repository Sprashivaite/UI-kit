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

    // function declOfNum(number, titles) {
    //     cases = [2, 0, 1, 1, 1, 2];
    //     return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
    // }  
        $('.dropdown-content__box-button').find('button').click(function () {
            let target = $(this).closest('.dropdown')
            let bedrooms = target.find('.child').val();
            let bed = target.find('.adult').val();
            let bathrooms = target.find('.baby').val();
            let summ = parseInt(bedrooms) + parseInt(bed) + parseInt(bathrooms);

            if(summ === 0){
                target.find('.btnText').text('Удобства');
            } else {
                let text_1 = '',
                    text_2 = '', 
                    text_3 = ''
                bedrooms > 0 ? text_1 = bedrooms + ' спальни ': '';
                bed > 0 ? text_2 =  + bed + ' кровати ': '';
                bathrooms > 0 ? text_3 =  +  bathrooms + ' ванные комнаты': '';
                target.find('.btnText').text(text_1 + text_2 + text_3);
            }
              
        });
    //resize input

    function resizeInput() {
        $(this).attr('size', $(this).val().length);
    }
    $('input[type="text"]')
        // event handler
        .keyup(resizeInput)
        // resize on page load
        .each(resizeInput);
    
    //show-hide
    $('.dropdown__dropbtn').click(function () {
        
        if($(this).next('.dropdown-content').hasClass('dropdown-content__show')){
            $(this).css('border', '1px solid #e2e2e2')
            $(this).next('.dropdown-content').removeClass('dropdown-content__show');
        } else {
            $(this).css('border', '1px solid rgba(31,32,65,.5)')
            $(this).next('.dropdown-content').addClass('dropdown-content__show')
        };

    });
    //buttons
    $('.form-elements__btn-container .clear').click(function () {
        $('.dropdown__dropbtn p').text('Удобства');
        $('.child').val(0);
        $('.adult').val(0);
        $('.baby').val(0);
    
    });
    $('.form-elements__btn-container .submit').click(function () {
        $('.dropdown-content').removeClass('dropdown-content__show');
     });
});