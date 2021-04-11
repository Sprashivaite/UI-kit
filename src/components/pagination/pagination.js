import '../../vendors/simplePagination/jquery.simplePagination';
import '../../vendors/simplePagination/simplePagination.css';

class Pagination {
  constructor($container) {
    this.$container = $container;
    this.initPagination();
  }

  findElement() {
    this.$paginationElement = this.$container.find('.js-pagination__buttons');
  }

  initPagination() {
    this.findElement();
    this.$paginationElement.pagination({
      items: 15,
      itemsOnPage: 1,
      displayedPages: 3,
      edges: 1,
      prevText: false,
      cssStyle: 'light-theme',
      nextText: 'arrow_forward',
    });
  }
}
export default Pagination;
