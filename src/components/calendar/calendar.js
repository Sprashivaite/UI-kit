import 'air-datepicker';
import 'air-datepicker/dist/css/datepicker.min.css';

class Calendar {
  constructor($container) {
    this.$container = $container;
    this.initCalendar();
  }

  findElements() {
    this.$calendar = this.$container.find('.js-calendar');
  }

  initCalendar() {
    this.findElements();
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
