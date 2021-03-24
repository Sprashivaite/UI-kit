const initDataDouble = function initDataDouble(container) {
  const firstData = container.find('.js-data-double-1');
  const secondData = container.find('.js-data-double-2');
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
    autoClose: true,
  });
};
export default initDataDouble;
