class RateButton {
  constructor(container) {
    this.container = container;
    this.initRateButton();
  }

  initRateButton() {
    this.findElements();
    this.addHandler();
  }

  findElements() {
    this.stars = [...this.container.children];
  }

  changeRate(element) {
    this.stars.forEach((el) => el.innerHTML = 'star_border');
    const star = element;
    star.innerHTML = 'star';
    let prevStar = star;
    while (prevStar.previousElementSibling) {
      prevStar.innerHTML = 'star';
      prevStar.previousElementSibling.innerHTML = 'star';
      prevStar = prevStar.previousElementSibling;
    }
  }

  addHandler() {
    this.stars.onmousedown = () => false;
    this.stars.forEach((star) => {
      this.star = star;
      const handler = () => this.changeRate(star);
      this.star.addEventListener('click', handler);
    });
  }
}
export default RateButton;
