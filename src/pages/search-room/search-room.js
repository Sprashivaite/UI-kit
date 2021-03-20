import ChangeRate from '../../components/rate-button/rate-button';
import ChangePicture from '../../components/room-card/room-card';
import initSlider from '../../components/range-slider/range-slider';
import initPagination from '../../components/pagination/pagination';
import Dropdown from '../../components/dropdown/dropdown';

if (document.querySelector('.js-search-rooms-page')) {
  const rateButtons = document.querySelectorAll('.js-rate-button');
  rateButtons.forEach((button) => {
    new ChangeRate().findElements(button).addHandler();
  });
  const cards = document.querySelectorAll('.js-room-card');
  cards.forEach((card) => {
    new ChangePicture().findElements(card).addHandler();
  });
  initSlider($('.js-options__range-slider'));
  initPagination($('.js-search-rooms-pagination'));

  const searchRoomsDropdown = document.querySelector('.js-options__dropdown-guests');
  new Dropdown(searchRoomsDropdown, [['гостей', 'гость', 'гостя']]).findElements().addHandler();

  const facilitiesDropdown = document.querySelector('.js-options__dropdown-facilities');
  new Dropdown(facilitiesDropdown, [['спальнен', 'спальня', 'спальни'], ['кроватей', 'кровать', 'кровати'],  ['ванных комнат', 'ванная комната', 'ванные комнаты']]).findElements().addHandler();
}
