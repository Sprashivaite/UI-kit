import TextFieldMask from '../../components/text-field/text-field';

if (document.querySelector('.js-registration-page')) {
  new TextFieldMask($('.js-text-field__input_masked'));
}
