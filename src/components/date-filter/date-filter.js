const initDateFilter = function initDateFilter(container) {
  const dateFilter = container.find('.js-date-filter');
  const myDatepicker = dateFilter.datepicker().data('datepicker');
  const weekLater = new Date(new Date().setDate(new Date().getDate() + 7));
  myDatepicker.selectDate([new Date(), weekLater])
  dateFilter.datepicker({
    range: true,
    multipleDatesSeparator: ' - ',
    minDate: new Date(),
  });
};
export default initDateFilter;