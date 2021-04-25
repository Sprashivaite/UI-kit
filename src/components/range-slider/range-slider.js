import 'ion-rangeslider';
import '../../vendors/ion.rangeSlider/ion.rangeSlider.css';

class Slider {
  constructor({$container , min = 0, max = 15000, values = [5000, 10000] }) {
    this.$container = $container;
    this.initSlider(min, max, values);
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

  initSlider(min, max, values) {
    this.findElements();
    const calcFromToValue = this.calcFromToValue.bind(this);
    this.$range.ionRangeSlider({
      type: 'double',
      skin: 'big',
      min: min,
      max: max,
      from: values[0],
      to: values[1],
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
