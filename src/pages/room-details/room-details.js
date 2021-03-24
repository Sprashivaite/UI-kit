import Like from '../../components/like-button/like-button';
import Dropdown from '../../components/dropdown/dropdown';
import initDataDouble from '../../components/data-dropdown/data-dropdown';

if (document.querySelector('.js-room-details-page')) {
  const likeButtons = document.querySelectorAll('.js-like-button');
  likeButtons.forEach((button) => {
    new Like().findElements(button).addHandler();
  });
  const guestsDropdown = document.querySelector('.js-room-details-page__reservation .dropdown-guests');
  new Dropdown(guestsDropdown, [['гостей', 'гость', 'гостя']]).findElements().addHandler();
  initDataDouble($('.js-room-details-page__reservation')); 
}
