import 'air-datepicker';
import 'air-datepicker/dist/css/datepicker.min.css';

const initDateFilter = function initDateFilter(container) {
  const dateFilter = container.find('.js-date-filter__input');
  const myDatepicker = dateFilter.datepicker().data('datepicker');
  const weekLater = new Date(new Date().setDate(new Date().getDate() + 7));
  
  dateFilter.datepicker({
    range: true,
    multipleDatesSeparator: ' - ',
    minDate: new Date(),
    clearButton: true,
    todayButton: true,
    navTitles: {
        days: 'MM <i>yyyy</i>',
    },
    onShow(dp, animationCompleted) {
        myDatepicker.$el.on('click.dd', () => {
          if (animationCompleted) {
            myDatepicker.hide();
          }
        });
      },
      onHide(dp, animationCompleted) {
        if (animationCompleted) {
          myDatepicker.$el.off('.dd');
        }
      },
  });
  myDatepicker.selectDate([new Date(), weekLater])
  const button = $('[data-action="today"]');
  const hideHandler = () => myDatepicker.hide();
  button.on('click', hideHandler);
};
export default initDateFilter;