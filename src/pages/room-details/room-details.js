import LikeButton from '../../components/like-button/like-button';
import Dropdown from '../../components/dropdown/dropdown';
import DateRange from '../../components/date-range/date-range';

if (document.querySelector('.js-room-details')) {
  const likeButtons = document.querySelectorAll('.js-like-button');
  const guestsDropdown = document.querySelector('.js-dropdown');
  likeButtons.forEach((button) => new LikeButton(button));  
  new Dropdown({ container: guestsDropdown, names: [['гостей', 'гость', 'гостя']]});
  new DateRange($('.js-room-details__reservation')); 
}
