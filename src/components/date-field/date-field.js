import 'air-datepicker';
import 'air-datepicker/dist/css/datepicker.min.css';

class DateField {
  constructor($container) {
    this.$container = $container;
    this._initDateField();
  }

  _findInput() {
    this.$dateField = this.$container.find('.js-date-field__input');
  }

  _findButton() {
    this.$button = $('[data-action="today"]');
  }

  _initDateField() {
    this._findInput();
    this.myDatepicker = this.$dateField.datepicker().data('datepicker');
    const { myDatepicker } = this;
    this.$dateField.datepicker({
      maxDate: new Date(),
      clearButton: true,
      todayButton: true,
      inline: true,
      navTitles: {
        days: 'MM <i>yyyy</i>',
      },
      onShow(dp, animationCompleted) {
        const addHandlerHide = () => {
          if (animationCompleted) myDatepicker.hide();
        };
        myDatepicker.$el.on('click.dd', addHandlerHide);
      },
      onHide(dp, animationCompleted) {
        if (animationCompleted) myDatepicker.$el.off('.dd');
      },
    });
    this._findButton();
    this._addHandlers();
  }

  _addHandlers() {
    const hideHandler = () => this.myDatepicker.hide();
    this.$button.on('click', hideHandler);
  }
}
export default DateField;
