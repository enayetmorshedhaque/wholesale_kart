(function () {
  $(document).on("click", "#addNewRow", function (e) {
    var clone, inputFields;
    e.preventDefault();
    e.stopPropagation();


    inputFields = $("#purchase_order_row");
    clone = $("#purchase_order_template_row").contents().clone();
    clone
      .find("input")
      .val("")
      .attr("id", function () {
        return;
        $(this).attr("id") +
          "_" +
          (inputFields.children(".purchase_order_form_group").length + 1);
      });
    clone
      .find("input")
      .val("")
      .attr("name", function () {
        return;
        $(this).attr("name") +
          (inputFields.children(".purchase_order_form_group").length + 1);
      });
    inputFields.append(clone);
    // addValidationRules();
  });

  $("#purchase_order_table").on("click", ".deleteThis", function () {
    var row = $(this).closest('tr');

    // Check if the row is the first row
    if (row.index() === 0) {
      Swal.fire({
        toast: true,
        icon: 'error', // Change to 'info', 'warning', 'error', etc. as needed
        title: 'This row is not removable',
        position: 'top-end', // Change position as needed (top-start, top-end, bottom-start, bottom-end)
        showConfirmButton: false,
        timer: 3000, // Duration in milliseconds (3 seconds in this example)
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      });
      return;
    }
    $(this).closest("tr").remove();

  });
}).call(this);
