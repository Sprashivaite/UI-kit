import 'air-datepicker';
import 'air-datepicker/dist/css/datepicker.min.css';

class DateRange {
  constructor($container) {
    this.$container = $container;
    this._initDateRange();
  }

  _findInputs() {
    this.firstData = this.$container.find('.js-date-range__input_first');
    this.secondData = this.$container.find('.js-date-range__input_second');
  }

  _findButton() {
    this.$button = $('[data-action="today"]');
  }

  _initDateRange() {
    this._findInputs();
    this.myDatepicker = this.firstData.datepicker().data('datepicker');
    const { myDatepicker, firstData, secondData } = this;
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
      navTitles: {
        days: 'MM <i>yyyy</i>',
      },
      onShow(dp, animationCompleted) {
        const hideDatepicker = () => {
          if (animationCompleted) myDatepicker.hide();
        };
        myDatepicker.$el.on('click.dd', hideDatepicker);
        secondData.on('click.dd', hideDatepicker);
      },
      onHide(dp, animationCompleted) {
        if (animationCompleted) {
          myDatepicker.$el.off('.dd');
          secondData.off('.dd');
        }
      },
    });
    this._addHandlers();
    this._setDate();
  }

  _setDate() {
    const { myDatepicker, firstData } = this;
    const startDate = firstData.data('start');
    const endDate = firstData.data('end');
    let firstValue;
    let secondValue;
    if (startDate) firstValue = new Date(startDate);
    if (endDate) secondValue = new Date(endDate);
    myDatepicker.selectDate([firstValue, secondValue]);
  }

  _addHandlers() {
    this._findButton();
    const hideDatepicker = () => this.myDatepicker.hide();
    const showHandler = () => this.myDatepicker.show();
    this.$button.on('click', hideDatepicker);
    this.secondData.on('click', showHandler);
  }
}
export default DateRange;
