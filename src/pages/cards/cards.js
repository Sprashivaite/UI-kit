import RateButton from '../../components/rate-button/rate-button';
import RoomCard from '../../components/room-card/room-card';
import initDataDouble from '../../components/date-range/date-range';
import initDateField from '../../components/date-field/date-field';
import initCalendar from '../../components/calendar/calendar';
import Dropdown from '../../components/dropdown/dropdown';

if (document.querySelector('.js-cards')) {
  const rateButtons = document.querySelectorAll('.js-rate-button');
  rateButtons.forEach((button) => {
    new RateButton().findElements(button).addHandler();
  });
  const cards = document.querySelectorAll('.js-room-card');
  cards.forEach((element) => {
    new RoomCard().findElements(element).addHandler();
  });
  const guestsDropdowns = document.querySelectorAll('.js-dropdown');
  guestsDropdowns.forEach((element) => {
    new Dropdown(element, [['гостей', 'гость', 'гостя']]).findElements().addHandler();
  });
  initDataDouble($('.js-cards__search-rooms'));
  initDataDouble($('.js-cards__reservation'));
  initDateField($('.js-date-field'));
  initCalendar($('.js-cards__calendar'));
}
