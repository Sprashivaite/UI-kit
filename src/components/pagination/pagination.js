import '../../vendors/simplePagination/jquery.simplePagination';
import '../../vendors/simplePagination/simplePagination.css';

class Pagination {
  constructor({$container, items = 15, displayedPages = 3}) {
    this.$container = $container;
    this.initPagination(items, displayedPages);
  }

  findElement() {
    this.$paginationElement = this.$container.find('.js-pagination__buttons');
  }

  initPagination(items, displayedPages) {
    this.findElement();
    this.$paginationElement.pagination({
      items: items,
      itemsOnPage: 1,
      displayedPages: displayedPages,
      edges: 1,
      prevText: false,
      cssStyle: 'light-theme',
      nextText: 'arrow_forward',
    });
  }
}
export default Pagination;
