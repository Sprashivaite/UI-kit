import ChangeLikeValue from '../../components/like-button/like-button';

const likeButtons = document.querySelectorAll('.js-like-button');
likeButtons.forEach((button) => {
  new ChangeLikeValue().findElements(button).addHandler();
});
