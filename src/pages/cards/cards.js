import ChangeRate from '../../components/rate-button/rate-button';
import ChangePicture from '../../components/room-card/room-card';
import initDataDouble from '../../components/data-dropdown/data-dropdown';
import InitDropdown from '../../components/dropdown/dropdown';

if (document.querySelector('.js-cards')) {
  const rateButtons = document.querySelectorAll('.js-rate-button');
  rateButtons.forEach((button) => {
    new ChangeRate().findElements(button).addHandler();
  });
  const cards = document.querySelectorAll('.js-room-card');
  cards.forEach((element) => {
    new ChangePicture().findElements(element).addHandler();
  });
  const guestsDropdowns = document.querySelectorAll('.js-cards .dropdown-guests');
  guestsDropdowns.forEach((element) => {
    new InitDropdown(element, true).findElements().addHandler();
  });
  initDataDouble($('.js-cards__search-rooms'));
  initDataDouble($('.js-cards__reservation'));
}
