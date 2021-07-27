import LikeButton from '../../components/like-button/like-button';
import RateButton from '../../components/rate-button/rate-button';
import RangeSlider from '../../components/range-slider/range-slider';
import Pagination from '../../components/pagination/pagination';
import Dropdown from '../../components/dropdown/dropdown';
import DateRange from '../../components/date-range/date-range';
import DateFilter from '../../components/date-filter/date-filter';
import TextFieldMask from '../../components/text-field/text-field';
import ExpandableCheckboxList from '../../components/expandable-checkbox-list/expandable-checkbox-list';

if (document.querySelector('.js-form-elements')) {
  const likeButtons = document.querySelectorAll('.js-like-button');
  const rateButtons = document.querySelectorAll('.js-rate-button');
  const guestsDropdowns = document.querySelectorAll('.js-form-elements__dropdown-guests');
  const facilitiesDropdowns = document.querySelectorAll('.js-form-elements__dropdown-facilities');
  const expandableCheckboxList = document.querySelector('.js-form-elements__expandable-checkbox-list');
  const expandableCheckboxList2 = document.querySelector('.js-form-elements__expandable-checkbox-list-2');
  likeButtons.forEach((button) => new LikeButton(button));
  rateButtons.forEach((button) => new RateButton(button));
  guestsDropdowns.forEach((element) => new Dropdown({ container: element, names: [['гостей', 'гость', 'гостя'], null, ['младенцев', 'младенец', 'младенца']] }));
  facilitiesDropdowns.forEach((element) => new Dropdown({ container: element, names: [['спальнен', 'спальня', 'спальни'], ['кроватей', 'кровать', 'кровати'], ['ванных комнат', 'ванная комната', 'ванные комнаты']] }));
  new ExpandableCheckboxList(expandableCheckboxList);
  new ExpandableCheckboxList(expandableCheckboxList2);
  new RangeSlider({ $container: $('.js-form-elements__slider') });
  new Pagination($('.js-form-elements__pagination'));
  new DateRange($('.js-form-elements__date-dropdown'));
  new DateFilter($('.js-form-elements__filter-dropdown'));
  new TextFieldMask($('.js-text-field__input_masked'));
}
