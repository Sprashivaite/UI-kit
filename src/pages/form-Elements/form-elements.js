import LikeButton from '../../components/like-button/like-button';
import RateButton from '../../components/rate-button/rate-button';
import initSlider from '../../components/range-slider/range-slider';
import initPagination from '../../components/pagination/pagination';
import Dropdown from '../../components/dropdown/dropdown';
import initDataDouble from '../../components/date-range/date-range';
import initDateFilter from '../../components/date-filter/date-filter';
import initMaskInput from '../../components/masked-input/masked-input';

if (document.querySelector('.js-form-elements')) {
  const likeButtons = document.querySelectorAll('.js-like-button');
  likeButtons.forEach((button) => {
    new LikeButton().findElements(button).addHandler();
  });

  const rateButtons = document.querySelectorAll('.js-rate-button');
  rateButtons.forEach((button) => {
    new RateButton().findElements(button).addHandler();
  });

  const guestsDropdowns = document.querySelectorAll('.js-form-elements .dropdown-guests');
  guestsDropdowns.forEach((element) => {
    new Dropdown(element, [['гостей', 'гость', 'гостя']]).findElements().addHandler();
  });

  const facilitiesDropdowns = document.querySelectorAll('.js-form-elements .dropdown-facilities');
  facilitiesDropdowns.forEach((element) => {
    new Dropdown(element, [['спальнен', 'спальня', 'спальни'], ['кроватей', 'кровать', 'кровати'],  ['ванных комнат', 'ванная комната', 'ванные комнаты']]).findElements().addHandler();
  });

  initSlider($('.js-form-elements__slider'));
  initPagination($('.js-form-elements__pagination'));
  initDataDouble($('.js-form-elements__date-dropdown'));
  initDateFilter($('.js-form-elements__filter-dropdown'));
  initMaskInput($('.js-masked-input'));
}
