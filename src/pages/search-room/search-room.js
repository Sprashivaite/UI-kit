import RateButton from '../../components/rate-button/rate-button';
import RoomCard from '../../components/room-card/room-card';
import initSlider from '../../components/range-slider/range-slider';
import initPagination from '../../components/pagination/pagination';
import Dropdown from '../../components/dropdown/dropdown';
import initDateFilter from '../../components/date-filter/date-filter';

if (document.querySelector('.js-search-rooms-page')) {
  const rateButtons = document.querySelectorAll('.js-rate-button');
  rateButtons.forEach((button) => {
    new RateButton().findElements(button).addHandler();
  });
  const cards = document.querySelectorAll('.js-room-card');
  cards.forEach((card) => {
    new RoomCard().findElements(card).addHandler();
  });
  initSlider($('.js-options__range-slider'));
  initPagination($('.js-search-rooms-pagination'));
  initDateFilter($('.js-options__date-filter'));

  const searchRoomsDropdown = document.querySelector('.js-options__dropdown-guests');
  new Dropdown(searchRoomsDropdown, [['гостей', 'гость', 'гостя']]).findElements().addHandler();

  const facilitiesDropdown = document.querySelector('.js-options__dropdown-facilities');
  new Dropdown(facilitiesDropdown, [['спальнен', 'спальня', 'спальни'], ['кроватей', 'кровать', 'кровати'], ['ванных комнат', 'ванная комната', 'ванные комнаты']]).findElements().addHandler();
}