import initDataDouble from '../../components/data-dropdown/data-dropdown';
import Dropdown from '../../components/dropdown/dropdown';

if (document.querySelector('.js-landing-page')) {
  const guestsDropdown = document.querySelector('.js-landing-page .dropdown-guests');
  new Dropdown(guestsDropdown, [['гостей', 'гость', 'гостя']]).findElements().addHandler();

  initDataDouble($('.js-landing-page__log-in'));
}
