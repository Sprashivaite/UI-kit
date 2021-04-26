class LikeButton {
  constructor(button) {
    this._initLikeButton(button)
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
    this.value.innerHTML = Number(this.value.innerHTML) + 1;
  }

  delete() {
    this.value.innerHTML = Number(this.value.innerHTML) - 1;
  }

  _addHandler() {
    this.button.onmousemove = () => false;
    const handler = () => {
      if (this.input.checked) this._add();
      if (!this.input.checked) this.delete();
    };
    this.input.addEventListener('click', handler);
  }
}
export default LikeButton;
