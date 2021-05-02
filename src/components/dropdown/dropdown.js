/* eslint-disable default-case */
/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
/* eslint-disable class-methods-use-this */
class Dropdown {
  constructor(container, names = []) {
    this.container = container;
    this.names = names;
    this._initDropdown();
  }

  _initDropdown() {
    this._findElements();
    this._addHandler();
  }

  _findElements() {
    this.dropdown = this.container || this.container.querySelector('.js-dropdown');
    this.menu = this.container.querySelector('.js-dropdown__menu');
    this.lines = this.container.querySelectorAll('.js-dropdown__menu-line');
    this.field = this.container.querySelector('.js-dropdown__field');
    this.title = this.container.querySelector('.js-dropdown__title');
    this.values = this.container.querySelectorAll('.js-dropdown__menu-value');
    this.minuses = this.container.querySelectorAll('.js-dropdown__menu-minus');
    this.clear = this.container.querySelector('.js-dropdown__clear');
    this.applyButton = this.container.querySelector('.js-dropdown__apply');
    this.defaultTitle = this.title.innerHTML;
  }

  _decrease(target) {
    const inputValue = target;
    inputValue.value = Math.max(Number(target.value) - 1, 0);
  }

  _increase(target) {
    const inputValue = target;
    inputValue.value = Number(target.value) + 1;
  }

  _clearValues() {
    this.title.innerHTML = this.defaultTitle;
    Array.from(this.values, (element) => element.value = 0);
    Array.from(this.minuses, (element) => element.className = 'dropdown__menu-minus');
    if (this.clear) this._hideClear();
  }

  _toggleMenu() {
    this.menu.classList.toggle('dropdown__menu_show');
  }

  _showClear() {
    this.clear.classList.add('dropdown__clear_show');
  }

  _hideClear() {
    this.clear.classList.remove('dropdown__clear_show');
  }

  _makeDeclination(number, names) {
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

  _changeSingleTitle() {
    const values = [...this.values];
    const sum = values.reduce((prevElement, current) => prevElement + Number(current.value), 0);
    if (sum === 0) this._clearValues();
    if (sum > 0) this._showClear();
    const textTitle = `${sum} ${this._makeDeclination(sum, this.names[0])}`;
    this.title.innerHTML = textTitle;
  }

  _changeMultipleTitle() {
    let result = '';
    this.lines.forEach((element, index) => {
      const num = Number(element.querySelector('.js-dropdown__menu-value').value);
      const text = this._makeDeclination(num, this.names[index]);
      if (num > 0) {
        if (result) result += ', ';
        result += `${num} ${text}`;
      }
    });
    if (!result) this._clearValues();
    else this.title.innerHTML = result;
  }

  _makeClickHandler(event) {
    const { target } = event;
    const menu = target === this.menu || this.menu.contains(target);
    const field = target === this.field;
    const menuIsActive = this.menu.classList.contains('dropdown__menu_show');
    const isOutOfField = !menu && !field && menuIsActive;
    if (isOutOfField) this._toggleMenu();
  }

  _addHandler() {
    this.dropdown.onmousedown = () => false;
    this.dropdown.onclick = () => false;
    this.lines.forEach((element) => {
      const plus = element.querySelector('.js-dropdown__menu-plus');
      const minus = element.querySelector('.js-dropdown__menu-minus');
      const value = element.querySelector('.js-dropdown__menu-value');
      const handlerPlus = () => {
        this._increase(value);
        if (this.names.length === 1) this._changeSingleTitle();
        else this._changeMultipleTitle();
        minus.className = 'dropdown__menu-minus_border';
      };
      const handlerMinus = () => {
        this._decrease(value);
        if (this.names.length === 1) this._changeSingleTitle();
        else this._changeMultipleTitle();
        if (Number(value.value) === 0) minus.className = 'dropdown__menu-minus';
      };
      plus.addEventListener('click', handlerPlus);
      minus.addEventListener('click', handlerMinus);
    });
    const handlerClear = () => this._clearValues();
    if (this.clear) this.clear.addEventListener('click', handlerClear);
    const handlerApply = (event) => {
      event.stopPropagation();
      this._toggleMenu();
    };
    if (this.applyButton) this.applyButton.addEventListener('click', handlerApply);
    const _documentHandlerClick = (event) => this._makeClickHandler(event);
    document.addEventListener('click', _documentHandlerClick);
    this.field.addEventListener('click', handlerApply);
  }
}
export default Dropdown;
