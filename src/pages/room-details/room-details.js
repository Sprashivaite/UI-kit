import ChangeLikeValue from '../../components/like-button/like-button';
import InitDropdown from '../../components/dropdown/dropdown';
import initDataDouble from '../../components/data-dropdown/data-dropdown';

if (document.querySelector('.js-room-details-page')) {
  const likeButtons = document.querySelectorAll('.js-like-button');
  likeButtons.forEach((button) => {
    new ChangeLikeValue().findElements(button).addHandler();
  });
  const guestsDropdown = document.querySelector('.js-room-details-page__reservation .dropdown-guests');
  new InitDropdown(guestsDropdown, [['гостей', 'гость', 'гостя']]).findElements().addHandler();
  initDataDouble($('.js-room-details-page__reservation')); 
}
