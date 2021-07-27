import DateRange from '../../components/date-range/date-range';
import Dropdown from '../../components/dropdown/dropdown';

if (document.querySelector('.js-landing-page')) {
  const guestsDropdown = document.querySelector('.js-dropdown');
  new Dropdown({ container: guestsDropdown, names: [['гостей', 'гость', 'гостя'], null, ['младенцев', 'младенец', 'младенца']] })
  new DateRange($('.js-landing-page__log-in'));
}
