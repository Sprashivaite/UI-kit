import 'air-datepicker';
import 'air-datepicker/dist/css/datepicker.min.css';

class DateFilter {
  constructor($container) {
    this.$container = $container;
    this.initDateFilter();
  }

  _findInput() {
    this.$dateFilter = this.$container.find('.js-date-filter__input');
  }

  findButton() {
    this.$button = $('[data-action="today"]');
  }

  initDateFilter() {
    this._findInput();
    this.myDatepicker = this.$dateFilter.datepicker().data('datepicker');
    const { myDatepicker } = this;
    const weekLater = new Date(new Date().setDate(new Date().getDate() + 7));
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
    myDatepicker.selectDate([new Date(), weekLater]);
    this.addHandlers();
  }

  addHandlers() {
    this.findButton();
    const hideDatepicker = () => this.myDatepicker.hide();
    this.$button.on('click', hideDatepicker);
  }
}
export default DateFilter;
