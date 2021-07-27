class ExpandableCheckboxList {
  constructor(container) {
    this._init(container);
  }

  _init(container) {
    this.container = container;
    this._findElements();
    this._bindListeners();
  }

  _findElements() {
    this.block = this.container.querySelector('.expandable-checkbox-list');
    this.title = this.container.querySelector('.expandable-checkbox-list__title');
    this.list = this.container.querySelector('.expandable-checkbox-list__checkboxes');
  }

  _bindListeners() {
    this.title.addEventListener('click', this._handleToggle.bind(this));
    document.addEventListener('click', this._handleDocumentClick.bind(this));
  }

  _handleToggle() {
    this.block.classList.toggle('expandable-checkbox-list_isOpened');
  }

  _handleDocumentClick(event) {
    const { target } = event;
    const block = target === this.block || this.block.contains(target);
    const title = target === this.title;
    const menuIsActive = this.block.classList.contains('expandable-checkbox-list_is-opened');
    const isOutOfField = !block && !title && menuIsActive;
    if (isOutOfField) this._handleToggle(event);
  }
}

export default ExpandableCheckboxList;
