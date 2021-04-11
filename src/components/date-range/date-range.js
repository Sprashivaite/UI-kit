import 'air-datepicker';
import 'air-datepicker/dist/css/datepicker.min.css';

class DateRange {
  constructor($container) {
    this.$container = $container;
    this.initDateRange();
  }

  findInputs() {
    this.firstData = this.$container.find('.js-date-range-1');
    this.secondData = this.$container.find('.js-date-range-2');
  }

  findButton() {
    this.$button = $('[data-action="today"]');
  }

  initDateRange() {
    this.findInputs();
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
        const addHandlerHide = () => {
          if (animationCompleted) myDatepicker.hide();
        };
        myDatepicker.$el.on('click.dd', addHandlerHide);
        secondData.on('click.dd', addHandlerHide);
      },
      onHide(dp, animationCompleted) {
        if (animationCompleted) {
          myDatepicker.$el.off('.dd');
          secondData.off('.dd');
        }
      },
    });
    this.addHandlers();
  }

  addHandlers() {
    this.findButton();
    const hideHandler = () => this.myDatepicker.hide();
    const showHandler = () => this.myDatepicker.show();
    this.$button.on('click', hideHandler);
    this.secondData.on('click', showHandler);
  }
}
export default DateRange;
