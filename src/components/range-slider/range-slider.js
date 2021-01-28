$(function() {
    let $range = $(".js-range-slider-input");
    let $value = $(".js-range-slider__values");
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
        onStart: function() { 
            $value.text($(".irs-from").text() + " - " + $(".irs-to").text());
        },
        onChange: function() {
            $value.text($(".irs-from").text() + " - " + $(".irs-to").text());
        }
    }); 
    $value.text($(".irs-from").text() + " - " + $(".irs-to").text());
    $value.text($(".irs-from").text() + " - " + $(".irs-to").text());
});