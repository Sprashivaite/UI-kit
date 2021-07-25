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
    this._setDate();
  }

  _setDate() {
    this.myDatepicker = this.$calendar.datepicker().data('datepicker');
    const { myDatepicker, $calendar } = this;
    const startDate = $calendar.data('start');
    const endDate = $calendar.data('end');
    let firstValue; let
      secondValue;
    if (startDate) { firstValue = new Date(startDate); }
    if (endDate) { secondValue = new Date(endDate); }
    myDatepicker.selectDate([firstValue, secondValue]);
  }
}
export default Calendar;
