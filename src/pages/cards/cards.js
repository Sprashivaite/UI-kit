import RateButton from '../../components/rate-button/rate-button';
import RoomCard from '../../components/room-card/room-card';
import DateRange from '../../components/date-range/date-range';
import DateField from '../../components/date-field/date-field';
import Calendar from '../../components/calendar/calendar';
import Dropdown from '../../components/dropdown/dropdown';
import TextFieldMask from '../../components/text-field/text-field';

if (document.querySelector('.js-cards')) {
  const rateButtons = document.querySelectorAll('.js-rate-button');
  const cards = document.querySelectorAll('.js-room-card');
  const guestsDropdowns = document.querySelectorAll('.js-dropdown');
  rateButtons.forEach((button) => new RateButton(button));
  cards.forEach((card) => new RoomCard(card));
  guestsDropdowns.forEach((element) => new Dropdown({ container: element, names: [['гостей', 'гость', 'гостя']] }));
  new TextFieldMask($('.js-text-field__input_masked'));
  new DateRange($('.js-cards__search-rooms'));
  new DateRange($('.js-cards__reservation'));
  new DateField($('.js-date-field'));
  new Calendar($('.js-cards__calendar'));
}
