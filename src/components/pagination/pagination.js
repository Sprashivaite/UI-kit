import '../../vendors/simplePagination/jquery.simplePagination';
import '../../vendors/simplePagination/simplePagination.css';

class Pagination {
  constructor($container) {
    this.$container = $container;
    this._initDataParameters();
  }

  _findElement() {
    this.$paginationElement = this.$container.find('.js-pagination__buttons');
  }

  _initDataParameters() {
    this._findElement();

    const dataCurrent = this.$paginationElement.data('current');
    const dataItems = this.$paginationElement.data('items');
    const dataTotal = this.$paginationElement.data('total');

    let currentPage;
    let itemsOnPage;
    let items;

    if (dataCurrent) currentPage = dataCurrent;
    if (dataItems) itemsOnPage = dataItems;
    if (dataTotal) items = dataTotal;

    this._initPagination(currentPage, itemsOnPage, items);
  }

  _initPagination(currentPage = 1, itemsOnPage = 1, items = 1) {
    this.$paginationElement.pagination({
      currentPage,
      items,
      itemsOnPage,
      displayedPages: 3,
      edges: 1,
      prevText: false,
      cssStyle: 'light-theme',
      nextText: 'arrow_forward',
    });
  }
}
export default Pagination;
