function changePicture(card) {
  let buttonPictures = card.querySelector(".room-card__buttons").childNodes;
  let contForPicture = card.querySelector(".room-card__pictures").childNodes;

  function circleToggle(elem, parent) {
    for (const item of parent) {
      item.style.backgroundColor = "";
    }
    elem.style.backgroundColor = "white";        
    for (const item of contForPicture) {
            item.style.display = "none";
          }
    if (card.querySelector(".room-card__picture_" + elem.num)) {

        card.querySelector(".room-card__picture_" + elem.num).style.display = "block";
    }
    else{card.querySelector(".room-card__picture_1").style.display = "block";}
    // card.querySelector(".room-card__picture_" + elem.num).style.display = "block";
  }
  let numbers = 0;
  for (const item of buttonPictures) {
    item.num = ++numbers;
    item.addEventListener("click", () => {
      circleToggle(item, buttonPictures);
    });
  }
}

let cards = document.querySelectorAll(".room-card");
for (const item of cards) {
  changePicture(item);
}
