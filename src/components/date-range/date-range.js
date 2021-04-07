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
    todayButton: true,
    clearButton: true,
  });
  const button = $('[data-action="today"]');
  const hideHandler = () => myDatepicker.hide();
  button.on('click', hideHandler);
};
export default initDataDouble;
