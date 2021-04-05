import initDataDouble from '../../components/date-range/date-range';
import Dropdown from '../../components/dropdown/dropdown';

if (document.querySelector('.js-landing-page')) {
  const guestsDropdown = document.querySelector('.js-dropdown');
  new Dropdown(guestsDropdown, [['гостей', 'гость', 'гостя']]).findElements().addHandler();

  initDataDouble($('.js-landing-page__log-in'));
}
