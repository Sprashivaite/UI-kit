import 'air-datepicker';
import 'air-datepicker/dist/css/datepicker.min.css';

class DateFilter {
  constructor($container) {
    this.$container = $container;
    this._initDateFilter();
  }

  _findInput() {
    this.$dateFilter = this.$container.find('.js-date-filter__input');
  }

  _findButton() {
    this.$button = $('[data-action="today"]');
  }

  _initDateFilter() {
    this._findInput();
    this.myDatepicker = this.$dateFilter.datepicker().data('datepicker');
    const { myDatepicker } = this;
    this.$dateFilter.datepicker({
      range: true,
      multipleDatesSeparator: ' - ',
      minDate: new Date(),
      clearButton: true,
      todayButton: true,
      dateFormat: 'd M',
      navTitles: {
        days: 'MM <i>yyyy</i>',
      },
      onShow(dp, animationCompleted) {
        const hideDatepicker = () => {
          if (animationCompleted) myDatepicker.hide();
        };
        myDatepicker.$el.on('click.dd', hideDatepicker);
      },
      onHide(dp, animationCompleted) {
        if (animationCompleted) {
          myDatepicker.$el.off('.dd');
        }
      },
    });
    this._addHandlers();
    this._setDate();
  }

  _setDate() {
    const { myDatepicker } = this;
    const weekLater = new Date(new Date().setDate(new Date().getDate() + 7));
    const startDate = this.$dateFilter.data('start');
    const endDate = this.$dateFilter.data('end');
    if (startDate && endDate) {
      myDatepicker.selectDate([new Date(startDate), new Date(endDate)]);
    } else {
      myDatepicker.selectDate([new Date(), weekLater]);
    }
  }

  _addHandlers() {
    this._findButton();
    const hideDatepicker = () => this.myDatepicker.hide();
    this.$button.on('click', hideDatepicker);
  }
}
export default DateFilter;
