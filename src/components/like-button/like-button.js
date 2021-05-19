class LikeButton {
  constructor(button) {
    this._initLikeButton(button);
  }

  _initLikeButton(button) {
    this._findElements(button);
    this._addHandler();
  }

  _findElements(button) {
    this.button = button;
    this.input = this.button.querySelector('.js-like-button__input');
    this.value = this.button.querySelector('.js-like-button__value');
  }

  _add() {
    this.value.textContent = Number(this.value.innerHTML) + 1;
  }

  _delete() {
    this.value.textContent = Number(this.value.innerHTML) - 1;
  }

  _addHandler() {
    this.button.onmousemove = () => false;
    const handleLikeButtonClick = () => {
      if (this.input.checked) this._add();
      if (!this.input.checked) this._delete();
    };
    this.input.addEventListener('click', handleLikeButtonClick);
  }
}
export default LikeButton;
