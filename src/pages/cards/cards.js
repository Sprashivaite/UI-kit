import ChangeRate from '../../components/rate-button/rate-button';
import ChangePicture from '../../components/room-card/room-card';

const rateButtons = document.querySelectorAll('.js-rate-button');
rateButtons.forEach((button) => {
  new ChangeRate().findElements(button).addHandler();
});
const cards = document.querySelectorAll('.js-room-card');
cards.forEach((element) => {
  new ChangePicture().findElements(element).addHandler();
});