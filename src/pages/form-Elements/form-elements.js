import ChangeLikeValue from '../../components/like-button/like-button';
import ChangeRate from '../../components/rate-button/rate-button';
import initSlider from '../../components/range-slider/range-slider';
import initPagination from '../../components/pagination/pagination';
import InitDropdown from '../../components/dropdown/dropdown';
import initDataDouble from '../../components/data-dropdown/data-dropdown';

if (document.querySelector('.js-form-elements')) {
  const likeButtons = document.querySelectorAll('.js-like-button');
  likeButtons.forEach((button) => {
    new ChangeLikeValue().findElements(button).addHandler();
  });

  const rateButtons = document.querySelectorAll('.js-rate-button');
  rateButtons.forEach((button) => {
    new ChangeRate().findElements(button).addHandler();
  });

  const guestsDropdowns = document.querySelectorAll('.js-form-elements .dropdown-guests');
  guestsDropdowns.forEach((element) => {
    new InitDropdown(element, [['гостей', 'гость', 'гостя']]).findElements().addHandler();
  });

  const facilitiesDropdowns = document.querySelectorAll('.js-form-elements .dropdown-facilities');
  facilitiesDropdowns.forEach((element) => {
    new InitDropdown(element, [['спальнен', 'спальня', 'спальни'], ['кроватей', 'кровать', 'кровати'],  ['ванных комнат', 'ванная комната', 'ванные комнаты']]).findElements().addHandler();
  });

  initSlider($('.js-form-elements__slider'));
  initPagination($('.js-form-elements__pagination'));
  initDataDouble($('.js-form-elements__date-dropdown'));
}
