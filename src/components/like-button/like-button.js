class ChangeLikeValue {
  findElements(button) {
    this.button = button;
    this.input = this.button.querySelector('.js-like-button__input');
    this.value = this.button.querySelector('.js-like-button__value');
    return this;
  }

  add() {
    this.value.innerHTML = Number(this.value.innerHTML) + 1;
  }

  delete() {
    this.value.innerHTML = Number(this.value.innerHTML) - 1;
  }

  addHandler() {
    this.button.onmousedown = () => false;
    const handler = () => {
      if (this.input.checked) this.add();
      if (!this.input.checked) this.delete();
    };
    this.input.addEventListener('click', handler);
  }
}
export default ChangeLikeValue;
