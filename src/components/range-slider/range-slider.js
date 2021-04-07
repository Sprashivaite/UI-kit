import 'ion-rangeslider';
import '../../vendors/ion.rangeSlider/ion.rangeSlider.css';

const initSlider = (container) => {
  const $range = container.find('.js-range-slider__input');
  const $value = container.find('.js-range-slider__values');
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
      $value.text(`${container.find('.irs-from').text()} - ${container.find('.irs-to').text()}`);
    },
    onChange() {
      $value.text(`${container.find('.irs-from').text()} - ${container.find('.irs-to').text()}`);
    },
  });
  $value.text(`${container.find('.irs-from').text()} - ${container.find('.irs-to').text()}`);
  $value.text(`${container.find('.irs-from').text()} - ${container.find('.irs-to').text()}`);
};
export default initSlider;
