$(function() {
  $(".dropdown-menu .form-check-label").on("click", function() {
    return false;
  });

  if ($(".js-serchSelect").length) {
    $(".js-serchSelect").select2();
  }

  if ($(".js-datepicker").length) {
    $(".js-datepicker input").datepicker({
      weekStart: 1,
      autoclose: true
    });
  }

  /* ------ Data Table --------- */
  if ($(".js-dataTable").length) {
    $(".js-dataTable").DataTable({
      paging: true,
      ordering: true,
      searching: false,
      lengthChange: false,
      pageLength: 25,
      scrollY: "200px",
      scrollCollapse: true,
      columnDefs: [{ targets: "no-sort", orderable: false }],
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

  if ($(".js-pageFilter").length) {
    $(".js-pageFilter, .js-closeFilter").on("click", function() {
      var parentDiv = $(this).parents(".c-searchBody");
      parentDiv.toggleClass("js-filterOpen");
    });
  }

  $('[data-toggle="tooltip"]').tooltip();
});
