/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
class RoomCard {
  findElements(card) {
    this.card = card;
    this.buttonPictures = Array.from(
      card.querySelector('.js-room-card__buttons').childNodes,
    );
    this.pictures = Array.from(
      card.querySelector('.js-room-card__pictures').childNodes,
    );
    this.leftArrow = card.querySelector('.js-room-card__button-left');
    this.rightArrow = card.querySelector('.js-room-card__button-right');
    return this;
  }

  turnLeft() {
    const click = new Event('click');
    let previousTarget;
    this.buttonPictures.forEach((element) => {
      if (element.dataset.target === 'true') {
        previousTarget = element.previousElementSibling;
      }
    });
    if (previousTarget) previousTarget.dispatchEvent(click);
    else this.buttonPictures[3].dispatchEvent(click);
  }

  turnRight() {
    const click = new Event('click');
    let nextTarget;
    this.buttonPictures.forEach((element) => {
      if (element.dataset.target === 'true') {
        nextTarget = element.nextElementSibling;
      }
    });
    if (nextTarget) nextTarget.dispatchEvent(click);
    else this.buttonPictures[0].dispatchEvent(click);
  }

  switchPicture(button) {
    this.buttonPictures.forEach((element, index) => {
      const circle = element;
      circle.num = index + 1;
      circle.dataset.target = false;
    });
    const circle = button;
    circle.dataset.target = true;
    this.pictures.map((element) => element.classList.remove('room-card__picture_show'));
    if (this.card.querySelector(`.js-room-card__picture_${circle.num}`)) {
      this.card.querySelector(
        `.js-room-card__picture_${circle.num}`,
      ).classList.add('room-card__picture_show');
    } else {
      this.card.querySelector('.js-room-card__picture_1').classList.add('room-card__picture_show');
    }
  }

  addHandler() {
    this.buttonPictures.forEach((element) => {
      const handlerCircle = () => this.switchPicture(element);
      element.addEventListener('click', handlerCircle);
    });
    const handlerLeftArrow = () => this.turnLeft();
    this.leftArrow.addEventListener('click', handlerLeftArrow);
    const handlerRightArrow = () => this.turnRight();
    this.rightArrow.addEventListener('click', handlerRightArrow);
  }
}
export default RoomCard;
