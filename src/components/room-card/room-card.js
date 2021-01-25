function changePicture(card) {
  const buttonPictures = Array.from(card.querySelector('.js-room-card__buttons').childNodes);
  const contForPicture = Array.from(card.querySelector('.js-room-card__pictures').childNodes);

  const leftArrow = card.querySelector('.js-room-card__button-left');
  const rightArrow = card.querySelector('.js-room-card__button-right');
  const roomPicture = card.querySelector('.js-room-card__pictures');

  const showRightArrow = () => { rightArrow.style.display = 'block'; };
  const showLeftArrow = () => { leftArrow.style.display = 'block'; };
  const hideRightArrow = () => { rightArrow.style.display = ''; };
  const hideLeftArrow = () => { leftArrow.style.display = ''; };

  roomPicture.addEventListener('mouseenter', showRightArrow);
  roomPicture.addEventListener('mouseenter', showLeftArrow);
  roomPicture.addEventListener('mouseleave', hideRightArrow);
  roomPicture.addEventListener('mouseleave', hideLeftArrow);

  rightArrow.addEventListener('mouseenter', showRightArrow);
  rightArrow.addEventListener('mouseleave', hideRightArrow);
  leftArrow.addEventListener('mouseenter', showLeftArrow);
  leftArrow.addEventListener('mouseleave', hideLeftArrow);

  function circleToggle(circle, parent) {
    parent.forEach((el) => {
      el.style.backgroundColor = '';
      el.dataset.target = false;
    });
    circle.style.backgroundColor = 'white';
    circle.dataset.target = true;
    contForPicture.forEach((picture) => {
      picture.style.display = 'none';
    });
    if (card.querySelector(`.js-room-card__picture_${circle.num}`)) {
      card.querySelector(`.js-room-card__picture_${circle.num}`).style.display = 'block';
    } else {
      card.querySelector('.js-room-card__picture_1').style.display = 'block';
    }
  }
  let numbers = 0;
  buttonPictures.forEach((element) => {
    element.num = numbers;
    numbers += 1;
    const handler = () => circleToggle(element, buttonPictures)
    element.addEventListener('click', handler);
  });
  const click = new Event('click');
  const right = function right() {
    let nextTarget;
    buttonPictures.forEach((element) => {
      if (element.dataset.target === 'true') {
        nextTarget = element.nextElementSibling;
      }
    });
    if (nextTarget) { nextTarget.dispatchEvent(click); }
  };
  const left = function left() {
    let previousTarget;
    buttonPictures.forEach((element) => {
      if (element.dataset.target === 'true') {
        previousTarget = element.previousElementSibling;
      }
    });
    if (previousTarget) { previousTarget.dispatchEvent(click); }
  };

  rightArrow.addEventListener('click', right);
  leftArrow.addEventListener('click', left);
}

const cards = document.querySelectorAll('.js-room-card');
cards.forEach((card) => {
  changePicture(card);
});
