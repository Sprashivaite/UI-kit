import LikeButton from '../../components/like-button/like-button';
import Dropdown from '../../components/dropdown/dropdown';
import initDataDouble from '../../components/date-range/date-range';

if (document.querySelector('.js-room-details-page')) {
  const likeButtons = document.querySelectorAll('.js-like-button');
  likeButtons.forEach((button) => {
    new LikeButton().findElements(button).addHandler();
  });
  const guestsDropdown = document.querySelector('.js-dropdown');
  new Dropdown(guestsDropdown, [['гостей', 'гость', 'гостя']]).findElements().addHandler();
  initDataDouble($('.js-room-details-page__reservation')); 
}
