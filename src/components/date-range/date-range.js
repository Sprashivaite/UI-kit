import 'air-datepicker';
import 'air-datepicker/dist/css/datepicker.min.css';

const initDataDouble = function initDataDouble(container) {
  const firstData = container.find('.js-date-range-1');
  const secondData = container.find('.js-date-range-2');
  
  const myDatepicker = firstData.datepicker().data('datepicker');
  const showHandler = () => myDatepicker.show();

  secondData.on('click', showHandler);
  firstData.datepicker({
    onSelect(fd) {
      firstData.val(fd.split('-')[0]);
      secondData.val(fd.split('-')[1]);
    },
    range: true,
    multipleDatesSeparator: ' - ',
    minDate: new Date(),
    clearButton: true,
  });
  $('.js-date-range-1 .datepicker--buttons').append('<span class ="datepicker--button-apply" data-action="apply">Применить</span>')
  const apply = $('.datepicker--button-apply')
  const hideHandler = () => console.log();
  console.log(apply)
  apply.on('click', hideHandler);
};
export default initDataDouble;
