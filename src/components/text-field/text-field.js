import 'inputmask/dist/jquery.inputmask';

class TextFieldMask {
  constructor($container) {
    this.$target = $container;
    this._initMaskInput();
  }

  _initMaskInput() {
    const mask = this.$target.data('mask');
    const placeholder = this.$target.attr('placeholder');
    const date = this.$target.data('date');

    const today = new Date();
    const dd = today.getDate() < 10 ? `0${today.getDate()}` : today.getDate();
    const mm = today.getMonth() < 9 ? `0${today.getMonth() + 1}` : today.getMonth() + 1;
    const yyyy = today.getFullYear();
    const maxDate = `${dd}-${mm}-${yyyy}`;

    if (date) {
      this.$target.inputmask({
        alias: 'datetime',
        min: '01/01/1970',
        max: maxDate,
        inputFormat: 'dd.mm.yyyy',
        placeholder,
        showMaskOnHover: false,
        showMaskOnFocus: false,
      });
    } else {
      this.$target.inputmask({
        mask,
        placeholder,
        showMaskOnHover: false,
        showMaskOnFocus: false,
      });
    }
  }
}
export default TextFieldMask;
