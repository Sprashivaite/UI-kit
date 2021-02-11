import ChangeRate from '../../components/rate-button/rate-button';
import ChangePicture from '../../components/room-card/room-card';
import initSlider from '../../components/range-slider/range-slider';
import initPagination from '../../components/pagination/pagination';

const rateButtons = document.querySelectorAll('.js-rate-button');
rateButtons.forEach((button) => {
  new ChangeRate().findElements(button).addHandler();
});
const cards = document.querySelectorAll('.js-room-card');
cards.forEach((card) => {
  new ChangePicture().findElements(card).addHandler();
}); 
initSlider();
initPagination();