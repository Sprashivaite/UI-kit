class InitDropdown {
  constructor(container, isGuests = false) {
    this.container = container;
    this.isGuests = isGuests;
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
    this.defaultTitle = this.title.value;
    return this;
  }

  static makeMinus(target) {
    const inputValue = target;
    inputValue.value = Math.max(Number(target.value) - 1, 0);
  }

  static makePlus(target) {
    const inputValue = target;
    inputValue.value = Number(target.value) + 1;
  }

  clearValues() {
    this.title.value = this.defaultTitle;
    this.values.forEach((element) => {
      const inputValue = element;
      inputValue.value = 0;
    });
    this.hideClear();
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

  changeTitleGuests() {
    const values = Array.from(this.values);
    const sum = values.reduce((prevElement, current) => {
      return prevElement + Number(current.value);
    }, 0);
    const lastNum = Number(Array.from(`${sum}`).slice(-1));
    const lastTwoNums = Number(Array.from(`${sum}`).slice(-2).join(''));
    let guests;
    switch (lastNum) {
      case 1:
        guests = 'гость';
        break;
      case 2:
        guests = 'гостя';
        break;
      default:
        guests = 'гостей';
    }
    if (lastTwoNums === 11 || lastTwoNums === 12) guests = 'гостей';
    this.title.value = `${sum} ${guests}`;
    if (sum === 0) this.clearValues();
    if (sum > 0) this.showClear();
  }

  changeTitle() {
    let result = '';
    this.lines.forEach((element) => {
      const num = Number(element.querySelector('.js-value').value);
      const text = element.querySelector('.js-item').innerHTML;
      if (num > 0) {
        if(result) result += ', '
        result += `${num} ${text}`; 
      }
    });
    if (!result) this.clearValues();
    else this.title.value = result;
    if (sum > 0) this.showClear();
  }

  addHandler() {
    if (this.isGuests) this.changeTitle = this.changeTitleGuests;
    this.lines.forEach((element) => {
      const plus = element.querySelector('.js-plus');
      const minus = element.querySelector('.js-minus');
      const value = element.querySelector('.js-value');
      const handlerPlus = () => {
        InitDropdown.makePlus(value);
        this.changeTitle();
      };
      const handlerMinus = () => {
        InitDropdown.makeMinus(value);
        this.changeTitle();
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
export default InitDropdown;
