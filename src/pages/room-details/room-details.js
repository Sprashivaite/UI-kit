import LikeButton from '../../components/like-button/like-button';
import Dropdown from '../../components/dropdown/dropdown';
import DateRange from '../../components/date-range/date-range';
import Diagram from '../../components/diagram/diagram';

const jsonData = require('./room-details-data.json');

if (document.querySelector('.js-room-details')) {
  const likeButtons = document.querySelectorAll('.js-like-button');
  const guestsDropdown = document.querySelector('.js-dropdown');
  const diagram = document.querySelector('.js-diagram');

  likeButtons.forEach((button) => new LikeButton(button));
  new Dropdown({ container: guestsDropdown, names: [['гостей', 'гость', 'гостя']] });
  new DateRange($('.js-room-details__reservation'));
  new Diagram({ element: diagram, data: jsonData.diagram.data });
}
