const changeValueLike = function changeValueLike(buttons) {
  buttons.forEach((button) => {
    button.onmousedown = () => false;
    const input = button.querySelector('.js-like-button__input');
    const value = button.querySelector('.js-like-button__value');
    const add = function add() {
      if (input.checked) {
        value.innerHTML = Number(value.innerHTML) + 1;
      }
    };
    const deleteLike = function deleteLike() {
      if (!input.checked) {
        value.innerHTML = Number(value.innerHTML) - 1;
      }
    };
    input.addEventListener('click', add);
    input.addEventListener('click', deleteLike);
  });
};
const likeButtons = document.querySelectorAll('.js-like-button');
changeValueLike(likeButtons);
