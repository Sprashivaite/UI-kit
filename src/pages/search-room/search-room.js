import RateButton from '../../components/rate-button/rate-button';
import RoomCard from '../../components/room-card/room-card';
import RangeSlider from '../../components/range-slider/range-slider';
import Pagination from '../../components/pagination/pagination';
import Dropdown from '../../components/dropdown/dropdown';
import DateFilter from '../../components/date-filter/date-filter';

if (document.querySelector('.js-search-room')) {
  const rateButtons = document.querySelectorAll('.js-rate-button');
  const cards = document.querySelectorAll('.js-room-card');
  const searchRoomDropdown = document.querySelector('.js-search-room__options-dropdown-guests');
  const facilitiesDropdown = document.querySelector('.js-search-room__options-dropdown-facilities');
  rateButtons.forEach((button) => new RateButton(button));
  cards.forEach((card) => new RoomCard(card));
  new RangeSlider({ $container: $('.js-search-room__options-range-slider') });
  new Pagination($('.js-search-room__pagination'));
  new DateFilter($('.js-search-room__options-date-filter'));
  new Dropdown({ container: searchRoomDropdown, names: [['гостей', 'гость', 'гостя'], ['детей', 'ребенок', 'ребенка'], ['младенцев', 'младенец', 'младенца']] });
  new Dropdown({ container: facilitiesDropdown, names: [['спальнен', 'спальня', 'спальни'], ['кроватей', 'кровать', 'кровати'], ['ванных комнат', 'ванная комната', 'ванные комнаты']], values: [2, 2, 0] });
}
