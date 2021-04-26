import 'air-datepicker';
import 'air-datepicker/dist/css/datepicker.min.css';

class Calendar {
  constructor($container) {
    this.$container = $container;
    this._initCalendar();
  }

  _findElements() {
    this.$calendar = this.$container.find('.js-calendar');
  }

  _initCalendar() {
    this._findElements();
    this.$calendar.datepicker({
      range: true,
      multipleDatesSeparator: ' - ',
      clearButton: true,
      todayButton: true,
      navTitles: {
        days: 'MM <i>yyyy</i>',
      },
    });
  }
}
export default Calendar;
