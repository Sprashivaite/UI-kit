class RateButton {
  constructor(container) {
    this.container = container;
    this.initRateButton();
  }

  initRateButton() {
    this.findElements();
    this.addHandler();
    this.addRate();
  }

  findElements() {
    this.stars = [...this.container.children];
  }

  addRate() {
    const value = this.container.dataset.rate;
    for (let i = 0; i < value; i += 1) {
      this.stars[i].classList.add('rate-button__item_checked');;
    }
  }

  changeRate(element) {
    this.stars.forEach((el) => el.classList.remove('rate-button__item_checked'));
    const star = element;
    star.classList.add('rate-button__item_checked');
    let prevStar = star.previousElementSibling;
    while (prevStar) {
      prevStar.classList.add('rate-button__item_checked');
      prevStar = prevStar.previousElementSibling;
    }
  }

  addHandler() {
    this.stars.onmousedown = () => false;
    this.stars.forEach((star) => {
      const handler = () => this.changeRate(star);
      star.addEventListener('click', handler);
    });
  }
}
export default RateButton;
