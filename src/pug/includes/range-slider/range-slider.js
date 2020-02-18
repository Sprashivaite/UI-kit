$(function() {

    $(".js-range-slider").ionRangeSlider({
        type: "double",
        min: 0,
        max: 15000,
        from: 5000,
        to: 10000,
        postfix: '₽',
        // hide_min_max: false,
        // grid_margin: true,
        // from_fixed: true,
        prettify: true,
    });
});