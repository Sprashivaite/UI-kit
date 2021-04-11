import 'ion-rangeslider';
import '../../vendors/ion.rangeSlider/ion.rangeSlider.css';

class Slider {
  constructor($container) {
    this.$container = $container;
    this.initSlider();
  }

  findElements() {
    this.$range = this.$container.find('.js-range-slider__input');
    this.$value = this.$container.find('.js-range-slider__values');
  }

  calcFromToValue() {
    const fromValue = this.$container.find('.irs-from').text();
    const toValue = this.$container.find('.irs-to').text();
    this.$value.text(`${fromValue} - ${toValue}`);
  }

  initSlider() {
    this.findElements();
    const calcFromToValue = this.calcFromToValue.bind(this);
    this.$range.ionRangeSlider({
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
        calcFromToValue();
      },
      onChange() {
        calcFromToValue();
      },
    });
    calcFromToValue();
  }
}
export default Slider;
