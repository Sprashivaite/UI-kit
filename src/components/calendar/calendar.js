import 'air-datepicker';
import 'air-datepicker/dist/css/datepicker.min.css';

const initCalendar = function initCalendar(container) {
  const calendar = container.find('.js-calendar');
  calendar.datepicker({
    range: true,
    multipleDatesSeparator: ' - ',
    clearButton: true,
    todayButton: true,
    navTitles: {
        days: 'MM <i>yyyy</i>',
    },
  });
};
export default initCalendar;
