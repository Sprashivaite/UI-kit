import 'air-datepicker';
import 'air-datepicker/dist/css/datepicker.min.css';

class DateRange {
  constructor($container) {
    this.$container = $container;
    this._initDateRange();
  }

  _findInputs() {
    this.firstData = this.$container.find('.js-date-range-1');
    this.secondData = this.$container.find('.js-date-range-2');
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
