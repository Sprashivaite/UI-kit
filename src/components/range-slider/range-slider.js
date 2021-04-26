import 'ion-rangeslider';
import '../../vendors/ion.rangeSlider/ion.rangeSlider.css';

class RangeSlider {
  constructor({
    $container, min = 0, max = 15000, values = [5000, 10000],
  }) {
    this.$container = $container;
    this._initSlider(min, max, values);
  }

  _findElements() {
    this.$range = this.$container.find('.js-range-slider__input');
    this.$value = this.$container.find('.js-range-slider__values');
  }

  _calcFromToValue() {
    const fromValue = this.$container.find('.irs-from').text();
    const toValue = this.$container.find('.irs-to').text();
    this.$value.text(`${fromValue} - ${toValue}`);
  }

  _initSlider(min, max, values) {
    this._findElements();
    const _calcFromToValue = this._calcFromToValue.bind(this);
    this.$range.ionRangeSlider({
      type: 'double',
      skin: 'big',
      min,
      max,
      from: values[0],
      to: values[1],
      postfix: '₽',
      prettify_enabled: true,
      hide_min_max: true,
      force_edges: true,
      onStart() {
        _calcFromToValue();
      },
      onChange() {
        _calcFromToValue();
      },
    });
    _calcFromToValue();
  }
}
export default RangeSlider;
