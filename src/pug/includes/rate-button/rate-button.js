function starMaker(parent) {
  let stars = parent.querySelector(".rate-button__star").children;

  for (const star of stars) {
    star.addEventListener("click", () => {
      for (const star of stars) {
        star.innerHTML = "star_border";
      }
      star.innerHTML = "star";
      let prevStar = star;
      while (prevStar.previousElementSibling) {
        prevStar.innerHTML = "star";
        prevStar.previousElementSibling.innerHTML = "star";
        prevStar = prevStar.previousElementSibling;
      }
    });
  }
}
let rateButtons = document.querySelectorAll(".rate-button");
for (const item of rateButtons) {
  starMaker(item);
}
