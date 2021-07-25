class Dropdown {
  constructor({ container, names = [] } = {}) {
    this.container = container;
    this.names = names;
    this._initDropdown();
  }

  static decrease(target) {
    const inputValue = target;
    inputValue.value = Math.max(Number(target.value) - 1, 0);
  }

  static increase(target) {
    const inputValue = target;
    inputValue.value = Number(target.value) + 1;
  }

  static makeDeclination(number, names) {
    const [plural, nominative, genitive] = names;
    const lastNum = Number([...`${number}`].slice(-1));
    const lastTwoNumbs = Number([...`${number}`].slice(-2).join(''));
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
      default:
        break;
    }
    return name;
  }

  _initDropdown() {
    this._findElements();
    this._addHandlers();
    this._assignValues();
  }

  _findElements() {
    this.dropdown = this.container || this.container.querySelector('.js-dropdown');
    this.menu = this.container.querySelector('.js-dropdown__menu');
    this.lines = this.container.querySelectorAll('.js-dropdown__menu-line');
    this.field = this.container.querySelector('.js-dropdown__field');
    this.title = this.container.querySelector('.js-dropdown__title');
    this.menuValues = this.container.querySelectorAll('.js-dropdown__menu-value');
    this.minuses = this.container.querySelectorAll('.js-dropdown__menu-minus');
    this.clear = this.container.querySelector('.js-dropdown__clear');
    this.applyButton = this.container.querySelector('.js-dropdown__apply');
    this.defaultTitle = this.title.innerHTML;
  }

  _assignValues() {
    const menuValues = [...this.menuValues];
    const values = menuValues.map((el) => el.value);
    menuValues.forEach((element, index) => {
      const menuValue = element;
      menuValue.value = values[index] ? values[index] : 0;
    });
    const aboveZero = menuValues.reduce(
      (prevElement, current) => prevElement + Number(current.value), 0,
    );
    if (this.names.length === 1 && aboveZero > 0) this._changeSingleTitle();
    if (this.names.length > 1 && aboveZero > 0) this._changeMultipleTitle();
  }

  _clearValues() {
    this.title.textContent = this.defaultTitle;
    const menuValues = [...this.menuValues];
    const minuses = [...this.minuses];
    menuValues.forEach((element) => {
      const elementValue = element;
      elementValue.value = 0;
    });
    minuses.forEach((element) => {
      const minus = element;
      minus.className = 'dropdown__menu-minus';
    });
    if (this.clear) this._hideClear();
  }

  _toggleMenu(event) {
    event.stopPropagation();
    this.menu.classList.toggle('dropdown__menu_show');
  }

  _showClear() {
    this.clear.classList.add('js-dropdown__clear_show');
  }

  _hideClear() {
    this.clear.classList.remove('js-dropdown__clear_show');
  }

  _changeSingleTitle() {
    const values = [...this.menuValues];
    const sum = values.reduce((prevElement, current) => prevElement + Number(current.value), 0);
    if (sum === 0) this._clearValues();
    if (sum > 0) this._showClear();
    const textTitle = `${sum} ${Dropdown.makeDeclination(sum, this.names[0])}`;
    this.title.textContent = textTitle;
  }

  _changeMultipleTitle() {
    let result = '';
    this.lines.forEach((element, index) => {
      const num = Number(element.querySelector('.js-dropdown__menu-value').value);
      const text = Dropdown.makeDeclination(num, this.names[index]);
      if (num > 0) {
        if (result) result += ', ';
        result += `${num} ${text}`;
      }
    });
    if (!result) this._clearValues();
    else this.title.textContent = result;
  }

  _handleDocumentClick(event) {
    const { target } = event;
    const menu = target === this.menu || this.menu.contains(target);
    const field = target === this.field;
    const menuIsActive = this.menu.classList.contains('dropdown__menu_show');
    const isOutOfField = !menu && !field && menuIsActive;
    if (isOutOfField) this._toggleMenu(event);
  }

  _addHandlers() {
    this.lines.forEach((element) => {
      const plus = element.querySelector('.js-dropdown__menu-plus');
      const minus = element.querySelector('.js-dropdown__menu-minus');
      const value = element.querySelector('.js-dropdown__menu-value');
      const handleMenuPlusClick = () => {
        Dropdown.increase(value);
        if (this.names.length === 1) this._changeSingleTitle();
        else this._changeMultipleTitle();
        minus.className = 'dropdown__menu-minus_border';
      };
      const handleMenuMinusClick = () => {
        Dropdown.decrease(value);
        if (this.names.length === 1) this._changeSingleTitle();
        else this._changeMultipleTitle();
        if (Number(value.value) === 0) minus.className = 'dropdown__menu-minus';
      };
      plus.addEventListener('click', handleMenuPlusClick);
      minus.addEventListener('click', handleMenuMinusClick);
    });

    if (this.clear) this.clear.addEventListener('click', this._clearValues.bind(this));
    if (this.applyButton) this.applyButton.addEventListener('click', this._toggleMenu.bind(this));
    document.addEventListener('click', this._handleDocumentClick.bind(this));
    this.field.addEventListener('click', this._toggleMenu.bind(this));
  }
}
export default Dropdown;
