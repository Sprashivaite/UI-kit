class RateButton {
  findElements(parent) {
    this.stars = parent.querySelector('.js-rate-button__star').children;
    this.stars = Array.from(this.stars);
    return this;
  }

  changeRate(element) {
    this.stars.forEach((el) => {
      const star = el;
      star.innerHTML = 'star_border';
    });
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
      const handler = () => { 
        this.changeRate(star);
      };
      this.star.addEventListener('click', handler);
    });
  }
}
export default RateButton;
