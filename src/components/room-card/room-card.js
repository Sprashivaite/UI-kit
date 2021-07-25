class RoomCard {
  constructor(card) {
    this.card = card;
    this._initRoomCard();
  }

  _initRoomCard() {
    this._findElements();
    this._addHandler();
    this.pictures[0].classList.add('room-card__picture_show');
  }

  _findElements() {
    this.buttonPictures = Array.from(
      this.card.querySelector('.js-room-card__buttons').childNodes,
    );
    this.pictures = Array.from(
      this.card.querySelector('.js-room-card__pictures').childNodes,
    );
    this.leftArrow = this.card.querySelector('.js-room-card__button-left');
    this.rightArrow = this.card.querySelector('.js-room-card__button-right');
  }

  _turnLeft() {
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

  _turnRight() {
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

  _switchPicture(button) {
    this.buttonPictures.forEach((element, index) => {
      const circle = element;
      circle.num = index + 1;
      circle.dataset.target = false;
    });
    const circle = button;
    circle.dataset.target = true;
    this.pictures.forEach((element) => element.classList.remove('room-card__picture_show'));
    if (this.card.querySelector(`.js-room-card__picture_${circle.num}`)) {
      this.card.querySelector(
        `.js-room-card__picture_${circle.num}`,
      ).classList.add('room-card__picture_show');
    } else {
      this.card.querySelector('.js-room-card__picture_1').classList.add('room-card__picture_show');
    }
  }

  _addHandler() {
    this.buttonPictures.forEach((element) => {
      element.addEventListener('click', this._switchPicture.bind(this, element));
    });
    this.leftArrow.addEventListener('click', this._turnLeft.bind(this));
    this.rightArrow.addEventListener('click', this._turnRight.bind(this));
  }
}
export default RoomCard;
