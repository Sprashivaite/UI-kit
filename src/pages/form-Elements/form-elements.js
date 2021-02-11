import ChangeLikeValue from '../../components/like-button/like-button';
import ChangeRate from '../../components/rate-button/rate-button';
import initSlider from '../../components/range-slider/range-slider';
import initPagination from '../../components/pagination/pagination';
import InitDropdown from '../../components/dropdown/dropdown';
import initDataDouble from '../../components/data-dropdown/data-dropdown';


const likeButtons = document.querySelectorAll('.js-like-button');
likeButtons.forEach((button) => {
  new ChangeLikeValue().findElements(button).addHandler();
});
const rateButtons = document.querySelectorAll('.js-rate-button');
rateButtons.forEach((button) => {
  new ChangeRate().findElements(button).addHandler();
});
const guestsDropdowns = document.querySelectorAll('.dropdown-guests');
guestsDropdowns.forEach((element) => {
  new InitDropdown(element, true).findElements().addHandler();
});
const facilitiesDropdowns = document.querySelectorAll('.dropdown-facilities');
facilitiesDropdowns.forEach((element) => {
  new InitDropdown(element).findElements().addHandler();
});


initSlider();
initPagination();
initDataDouble($('.js-data-double'));


