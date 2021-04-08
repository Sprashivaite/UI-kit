import 'air-datepicker';
import 'air-datepicker/dist/css/datepicker.min.css';

const initDateField = function initDateField(container) {
  const dateField = container.find('.js-date-field__input');
  const myDatepicker = dateField.datepicker().data('datepicker');
  dateField.datepicker({
    maxDate: new Date(),
    clearButton: true,
    todayButton: true,
    inline: true,
    view: 'years',
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
  const button = $('[data-action="today"]');
  const hideHandler = () => myDatepicker.hide();
  button.on('click', hideHandler);
};
export default initDateField;
