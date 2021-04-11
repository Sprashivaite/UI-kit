import LikeButton from '../../components/like-button/like-button';
import Dropdown from '../../components/dropdown/dropdown';
import DateRange from '../../components/date-range/date-range';

if (document.querySelector('.js-room-details')) {
  const likeButtons = document.querySelectorAll('.js-like-button');
  likeButtons.forEach((button) => new LikeButton(button));
  const guestsDropdown = document.querySelector('.js-dropdown');
  new Dropdown(guestsDropdown, [['гостей', 'гость', 'гостя']]);
  new DateRange($('.js-room-details__reservation')); 
}
