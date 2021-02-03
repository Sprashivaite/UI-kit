function addDropdown(dropdown, text = false) {
  dropdown.find(".js-dropdown .js-minus").click(function () {
    const $input = $(this).parent().find("input");
    let count = parseInt($input.val()) - 1;
    count = count < 0 ? 0 : count;
    $input.val(count);
    $input.change();
    return false;
  });
  dropdown.find(".js-dropdown .js-plus").click(function () {
    const $input = $(this).parent().find("input");
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
  });
  const defoultText = dropdown.find(".js-dropdown .js-dropbtn__text").text();
  function declOfNum(number, titles) {
    cases = [2, 0, 1, 1, 1, 2];
    return titles[
      number % 100 > 4 && number % 100 < 20
        ? 2
        : cases[number % 10 < 5 ? number % 10 : 5]
    ];
  }
  dropdown
    .find(".js-dropdown .js-dropdown-content__box-button")
    .find("button")
    .click(function () {
      const target = $(this).closest(".js-dropdown");
      if (!text) {
        const items = target.find(".item");
        let sum = 0;
        for (const item of items) {
          sum += Number(item.value);
        }
        if (sum === 0) target.find(".js-dropbtn__text").text(defoultText);
        else {
          target
            .find(".js-dropbtn__text")
            .text(`${sum} ${declOfNum(sum, ["гость", "гостя", "гостей"])}`);
          target.find(".clear").css("opacity", "1");
        }
      } 
      if (text) {
        const items = target.find(".js-dropdown-content__line");
        let sum = 0;
        let result = "";
        items.each(function () {
          let num = Number($(this).find(".item").val())
          let text = $(this).find("p").text() 
          if (+num > 0) {
            result += `${num} ${text} `
          } 
          sum += num;
        }
        )
        if (sum === 0) target.find(".js-dropbtn__text").text(defoultText);
        else {
          target
            .find(".js-dropbtn__text")
            .text(result);
          target.find(".clear").css("opacity", "1");
        }
      }

      target.find(".js-clear").click(() => {
        target.find(".clear").css("opacity", "0");
        target.find(".js-dropbtn__text").text(defoultText);
        target.find(".item").val(0);
      });
      target.find(".js-submit").click(() => {
        target
          .find(".js-dropdown-content")
          .removeClass("dropdown-content__show");
      });
    });

  dropdown.find(".js-dropdown .js-dropdown__dropbtn").click(function () {
    if (
      $(this).next(".js-dropdown-content").hasClass("dropdown-content__show")
    ) {
      $(this)
        .next(".js-dropdown-content")
        .removeClass("dropdown-content__show");
      $(this).find("i").css("transform", "rotate(0deg)");
    } else {
      $(this).next(".js-dropdown-content").addClass("dropdown-content__show");
      $(this).find("i").css("transform", "rotate(180deg)");
    }
  });
}
$(".dropdown-guests").each(function () {
  addDropdown($(this));
});
$(".dropdown-facilities").each(function () {
  addDropdown($(this), true);
});
