$(function () {
  if ($('#datepicker').length) {
    $("#datepicker").datepicker({
      dateFormat: 'dd/mm/yy',
      onSelect: function (date) {
        $("#datepicker").click()
      }
    });
  }
  if ($('.datepicker').length) {
    $(".datepicker").datepicker({
      dateFormat: 'dd/mm/yy',
      onSelect: function (date) {
        $(this).click();
      }
    });
  }

  $(".monthpicker").datepicker({
    dateFormat: 'mm/yy',
    onSelect: function (date) {
      $(".monthpicker").click()
    }
  });
})