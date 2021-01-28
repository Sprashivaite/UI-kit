$(function () {
  const $range = $('.js-range-slider-input');
  const $value = $('.js-range-slider__values');
  $range.ionRangeSlider({
    type: 'double',
    skin: 'big',
    min: 0,
    max: 15000,
    from: 5000,
    to: 10000,
    postfix: '₽',
    prettify_enabled: true,
    hide_min_max: true,
    force_edges: true,
    onStart() {
      $value.text(`${$('.irs-from').text()} - ${$('.irs-to').text()}`);
    },
    onChange() {
      $value.text(`${$('.irs-from').text()} - ${$('.irs-to').text()}`);
    },
  });
  $value.text(`${$('.irs-from').text()} - ${$('.irs-to').text()}`);
  $value.text(`${$('.irs-from').text()} - ${$('.irs-to').text()}`);
});
