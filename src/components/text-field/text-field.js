import 'jquery.maskedinput/src/jquery.maskedinput';

class MaskInput {
  constructor($container) {
    this.$target = $container.find('.js-text-field__input_masked');
    this.initMaskInput();
  }

  initMaskInput() {
    const mask = this.$target.data('mask');
    const text = this.$target.data('format');
    this.$target.mask(mask, { placeholder: text });
  }
}
export default MaskInput;