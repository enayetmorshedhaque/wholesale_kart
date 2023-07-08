// $(document).ready(function () {

// });

(function () {
  $(document).on("click", "#addNewRow", function (e) {
    var clone, inputFields;
    e.preventDefault();
    e.stopPropagation();

    inputFields = $("#bookDetailsRow");
    clone = $("#template-row").contents().clone();
    clone
      .find("input")
      .val("")
      .attr("id", function () {
        return (
          $(this).attr("id") +
          "_" +
          (inputFields.children(".bookDetails-form-group").length + 1)
        );
      });
    clone
      .find("input")
      .val("")
      .attr("name", function () {
        return (
          $(this).attr("name") +
          (inputFields.children(".bookDetails-form-group").length + 1)
        );
      });
    inputFields.append(clone);
    addValidationRules();
  });

  $("#invoiceTable").on("click", ".deleteThis", function () {
    $(this).closest("tr").remove();
  });
}).call(this);




