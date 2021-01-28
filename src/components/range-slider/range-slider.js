$(function() {
    let $range = $(".js-range-slider-input");
    var $input = $(".js-range-slider__values");
    $range.ionRangeSlider({
        type: "double",
        skin: "big",
        min: 0,
        max: 15000,
        from: 5000,
        to: 10000,
        postfix: '₽',
        prettify_enabled: true, 
        hide_min_max: true,
        force_edges: true,
        onStart: function(data) {
            $input.html(data.from + "₽ — " + data.to + "₽");
        },
        onChange: function(data) {
            $input.html(data.from + "₽ — " + data.to + "₽");
        }
    }); 
    
    
    // var instance;
    // instance = $range.data("ionRangeSlider");
    
    // $input.on("input", function() {
    //     var val = $(this).prop("value");
    
    //     // validate
    //     if (val < min) {
    //         val = min;
    //     } else if (val > max) {
    //         val = max;
    //     }
    
    //     instance.update({
    //         from: val
    //     });
    // });
});