const initPagination = () => {
  $('.js-pagination').pagination({
    items: 15,
    itemsOnPage: 1,
    displayedPages: 3,
    edges: 1,
    prevText: false,
    cssStyle: 'light-theme',
    nextText: 'arrow_forward',
  });
}
export default initPagination;
