import '../../vendors/simplePagination/jquery.simplePagination';
import '../../vendors/simplePagination/simplePagination.css';

class Pagination {
  constructor({ $container, items = 15, displayedPages = 3 }) {
    this.$container = $container;
    this._initPagination(items, displayedPages);
  }

  _findElement() {
    this.$paginationElement = this.$container.find('.js-pagination__buttons');
  }

  _initPagination(items, displayedPages) {
    this._findElement();
    this.$paginationElement.pagination({
      items,
      itemsOnPage: 1,
      displayedPages,
      edges: 1,
      prevText: false,
      cssStyle: 'light-theme',
      nextText: 'arrow_forward',
    });
  }
}
export default Pagination;
