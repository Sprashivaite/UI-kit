/* eslint-disable class-methods-use-this */
class Dropdown {
  constructor(container, names = []) {
    this.container = container;
    this.names = names;
  }

  findElements() {
    this.dropdown = this.container.querySelector('.dropdown');
    this.menu = this.container.querySelector('.dropdown-content');
    this.lines = this.container.querySelectorAll('.js-dropdown-content__line');
    this.field = this.container.querySelector('.js-text-field');
    this.title = this.container.querySelector('.js-dropdown__title');
    this.values = this.container.querySelectorAll('.js-value');
    this.clear = this.container.querySelector('.js-clear');
    this.applyButton = this.container.querySelector('.js-apply');
    this.defaultTitle = this.title.innerHTML;
    return this;
  }

  makeMinus(target) {
    const inputValue = target;
    inputValue.value = Math.max(Number(target.value) - 1, 0);
  }

  makePlus(target) {
    const inputValue = target;
    inputValue.value = Number(target.value) + 1;
  }

  clearValues() {
    this.title.innerHTML = this.defaultTitle;
    Array.from(this.values).map((element) => element.value = 0);
    if (this.clear) this.hideClear();
  }

  toggleMenu() {
    this.menu.classList.toggle('dropdown-content__show');
  }

  showClear() {
    this.clear.classList.add('clear__show');
  }

  hideClear() {
    this.clear.classList.remove('clear__show');
  }

  declension(number, names) {
    const [plural, nominative, genitive] = names;
    const lastNum = Number(Array.from(`${number}`).slice(-1));
    const lastTwoNumbs = Number(Array.from(`${number}`).slice(-2).join(''));
    let name;
    switch (lastNum) {
      case 1:
        name = nominative;
        break;
      case 2:
      case 3:
      case 4:
        name = genitive;
        break;
      default:
        name = plural;
    }
    // eslint-disable-next-line default-case
    switch (lastTwoNumbs) {
      case 11:
      case 12:
      case 13:
      case 14:
        name = plural;
        break;
    }
    return name;
  }

  changeSingleTitle() {
    const values = Array.from(this.values);
    const sum = values.reduce((prevElement, current) => prevElement + Number(current.value), 0);
    if (sum === 0) this.clearValues();
    if (sum > 0) this.showClear();
    const textTitle = `${sum} ${this.declension(sum, this.names[0])}`;
    this.title.innerHTML = textTitle;
  }

  changeMultipleTitle() {
    let result = '';
    this.lines.forEach((element, index) => {
      const num = Number(element.querySelector('.js-value').value);
      const text = this.declension(num, this.names[index]);
      if (num > 0) {
        if (result) result += ', ';
        result += `${num} ${text}`;
      }
    });
    if (!result) this.clearValues();
    else this.title.innerHTML = result;
  }

  addHandler() {
    this.lines.forEach((element) => {
      const plus = element.querySelector('.js-plus');
      const minus = element.querySelector('.js-minus');
      const value = element.querySelector('.js-value');
      const handlerPlus = () => {
        this.makePlus(value);
        if (this.names.length === 1) this.changeSingleTitle();
        else this.changeMultipleTitle();
      };
      const handlerMinus = () => {
        this.makeMinus(value);
        if (this.names.length === 1) this.changeSingleTitle();
        else this.changeMultipleTitle();
      };
      plus.addEventListener('click', handlerPlus);
      minus.addEventListener('click', handlerMinus);
    });
    const handlerClear = () => this.clearValues();
    if (this.clear) this.clear.addEventListener('click', handlerClear);
    const handlerApply = () => this.toggleMenu();
    if (this.applyButton) this.applyButton.addEventListener('click', handlerApply);
    this.field.addEventListener('click', handlerApply);
  }
}
export default Dropdown;
