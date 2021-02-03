$('#data-dropdown-1').datepicker({
  onSelect(fd) {
    $('#data-dropdown-1').val(fd.split('-')[0]);
    $('#data-dropdown-2').val(fd.split('-')[1]);
  },
});
$('#data-dropdown-2').datepicker({
  onSelect(fd) {
    $('#data-dropdown-1').val(fd.split('-')[0]);
    $('#data-dropdown-2').val(fd.split('-')[1]);
  },
});
$('#my-datepicker').datepicker({
  multipleDatesSeparator: '-',
});