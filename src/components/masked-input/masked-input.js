import 'jquery.maskedinput/src/jquery.maskedinput';

const initMaskInput = (target) => {
  const mask = target.data('mask');
  const text = target.data('format');
  target.mask(mask, { placeholder: text });
};
export default initMaskInput;
