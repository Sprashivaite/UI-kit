import 'jquery.maskedinput/src/jquery.maskedinput';

class MaskInput {
  constructor($target){
    this.initMaskInput($target)
  }

  initMaskInput($target) {
    this.$target = $target;
    const mask = this.$target.data('mask');
    const text = this.$target.data('format');
    this.$target.mask(mask, { placeholder: text });
  }
}
export default MaskInput;
