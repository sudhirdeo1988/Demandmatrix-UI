$(function() {
  $(".dropdown-menu .form-check-label").on("click", function() {
    return false;
  });

  /* ------ Data Table --------- */
  if ($(".js-dataTable").length) {
    $(".js-dataTable").DataTable({
      paging: true,
      ordering: true,
      searching: false,
      lengthChange: false,
      pageLength: 25,
      columnDefs: [
        { targets: 'no-sort', orderable: false }
      ],
      oLanguage: {
        oPaginate: {
          sNext: '<i class="icon dm-angle-right"></i>',
          sPrevious: '<i class="icon dm-angle-left"></i>',
          sFirst: '<i class="icon dm-angle-double-left"></i>',
          sLast: '<i class="icon dm-angle-double-right"></i>'
        }
      }
    });
  }
});