import initDataDouble from '../../components/data-dropdown/data-dropdown';
import InitDropdown from '../../components/dropdown/dropdown';

if (document.querySelector('.js-landing-page')) {
  const guestsDropdown = document.querySelector('.js-landing-page .dropdown-guests');
  new InitDropdown(guestsDropdown, [['гостей', 'гость', 'гостя']]).findElements().addHandler();

  initDataDouble($('.js-landing-page__log-in'));
}
