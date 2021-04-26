class RateButton {
  constructor(container) {
    this.container = container;
    this._initRateButton();
  }

  _initRateButton() {
    this._findElements();
    this._addHandler();
    this._addRate();
  }

  _findElements() {
    this.stars = [...this.container.children];
  }

  _addRate() {
    const value = this.container.dataset.rate;
    for (let i = 0; i < value; i += 1) {
      this.stars[i].classList.add('rate-button__item_checked');
    }
  }

  _changeRate(element) {
    this.stars.forEach((el) => el.classList.remove('rate-button__item_checked'));
    const star = element;
    star.classList.add('rate-button__item_checked');
    let prevStar = star.previousElementSibling;
    while (prevStar) {
      prevStar.classList.add('rate-button__item_checked');
      prevStar = prevStar.previousElementSibling;
    }
  }

  _addHandler() {
    this.stars.onmousedown = () => false;
    this.stars.forEach((star) => {
      const handler = () => this._changeRate(star);
      star.addEventListener('click', handler);
    });
  }
}
export default RateButton;
