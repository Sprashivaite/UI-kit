const starMaker = function starMaker(parent) {
  let stars = parent.querySelector('.js-rate-button__star').children;
  stars = Array.from(stars);
  stars.forEach((star) => {
    const addRate = function addRate() {
      stars.forEach((star) => {
        star.innerHTML = 'star_border';
      });
      star.innerHTML = 'star';
      let prevStar = star;

      while (prevStar.previousElementSibling) {
        prevStar.innerHTML = 'star';
        prevStar.previousElementSibling.innerHTML = 'star';
        prevStar = prevStar.previousElementSibling;
      }
    };
    star.addEventListener('click', addRate);
  });
};
const rateButtons = document.querySelectorAll('.js-rate-button');
rateButtons.forEach((button) => {
  starMaker(button);
});
