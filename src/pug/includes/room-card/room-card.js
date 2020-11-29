function changePicture(card) {
  let buttonPictures = card.querySelector(".room-card__buttons").childNodes;
  let contForPicture = card.querySelector(".room-card__pictures").childNodes;

  let leftArrow = card.querySelector(".room-card__button-left");
  let rightArrow = card.querySelector(".room-card__button-right");
  let roomPicture = card.querySelector(".room-card__pictures");

  roomPicture.addEventListener("mouseenter", () => {
    rightArrow.style.display = "block";
    leftArrow.style.display = "block";
  });
  roomPicture.addEventListener("mouseleave", () => {
    rightArrow.style.display = "";
    leftArrow.style.display = "";
  });
  rightArrow.addEventListener("mouseenter", () => {
    rightArrow.style.display = "block";
  });
  rightArrow.addEventListener("mouseleave", () => {
    rightArrow.style.display = "";
  });
  leftArrow.addEventListener("mouseenter", () => {
    leftArrow.style.display = "block";
  });
  leftArrow.addEventListener("mouseleave", () => {
    leftArrow.style.display = "";
  });

  function circleToggle(circle, parent) {
    for (const circle of parent) {
      circle.style.backgroundColor = "";
      circle.dataset.target = false;
    }
    circle.style.backgroundColor = "white";
    circle.dataset.target = true;
    for (const Picture of contForPicture) {
      Picture.style.display = "none";
    }
    if (card.querySelector(".room-card__picture_" + circle.num)) {
      card.querySelector(".room-card__picture_" + circle.num).style.display =
        "block";
    } else {
      card.querySelector(".room-card__picture_1").style.display = "block";
    }
  }
  let numbers = 0;
  for (const circle of buttonPictures) {
    circle.num = ++numbers;
    circle.addEventListener("click", () => {
      circleToggle(circle, buttonPictures);
    });
  }
  const click = new Event("click");
  function right() {
    let nextTarget;
    for (let i of buttonPictures) {
      if (i.dataset.target === "true") {
        nextTarget = i.nextElementSibling;
      }
    }
    if(nextTarget){nextTarget.dispatchEvent(click);}
    
  }
  function left() {
    let previousTarget;
    for (let i of buttonPictures) {
      if (i.dataset.target === "true") {
        previousTarget = i.previousElementSibling;
      }
    }
    if(previousTarget){previousTarget.dispatchEvent(click);}
    
  }

  rightArrow.addEventListener("click", right);
  leftArrow.addEventListener("click", left);
}

let cards = document.querySelectorAll(".room-card");
for (const item of cards) {
  changePicture(item);
}
