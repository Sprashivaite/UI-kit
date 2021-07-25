class ExpandableCheckboxList {
  constructor(element) {
    this._init(element);
  }

  _findElements() {
    this.$block = this.$container.find('.expandable-checkbox-list');
    this.$title = this.$container.find('.expandable-checkbox-list__title');
    this.$list = this.$container.find('.expandable-checkbox-list__checkboxes');
  }

  _handleToggle() {
    this.$block.toggleClass('expandable-checkbox-list_isOpened');
  }

  _bindListeners() {
    this.$title.click(this._handleToggle.bind(this));
  }

  _init(element) {
    this.$container = $(element);
    this._findElements();
    this._bindListeners();
  }
}

export default ExpandableCheckboxList;
