import LikeButton from '../../components/like-button/like-button';
import RateButton from '../../components/rate-button/rate-button';
import RangeSlider from '../../components/range-slider/range-slider';
import Pagination from '../../components/pagination/pagination';
import Dropdown from '../../components/dropdown/dropdown';
import DateRange from '../../components/date-range/date-range';
import DateFilter from '../../components/date-filter/date-filter';
import TextFieldMask from '../../components/text-field/text-field';

if (document.querySelector('.js-form-elements')) {
  const likeButtons = document.querySelectorAll('.js-like-button');
  const rateButtons = document.querySelectorAll('.js-rate-button');
  const guestsDropdowns = document.querySelectorAll('.js-form-elements__dropdown-guests');
  const facilitiesDropdowns = document.querySelectorAll('.js-form-elements__dropdown-facilities');
  likeButtons.forEach((button) => new LikeButton(button));
  rateButtons.forEach((button) => new RateButton(button));
  guestsDropdowns.forEach((element) => new Dropdown({ container: element, names: [['гостей', 'гость', 'гостя']] }));
  facilitiesDropdowns.forEach((element) => new Dropdown({ container: element, names: [['спальнен', 'спальня', 'спальни'], ['кроватей', 'кровать', 'кровати'], ['ванных комнат', 'ванная комната', 'ванные комнаты']], values: [2, 2, 0] }));
  new RangeSlider({ $container: $('.js-form-elements__slider') });
  new Pagination($('.js-form-elements__pagination'));
  new DateRange($('.js-form-elements__date-dropdown'));
  new DateFilter($('.js-form-elements__filter-dropdown'));
  new TextFieldMask($('.js-text-field__input_masked'));
}
