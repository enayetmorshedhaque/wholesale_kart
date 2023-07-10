$(document).ready(function () {
  $("#generateInvoice").click(function () {
    $("#generateInvoiceForm").validate();
    addValidationRules();

    if(!$("#customerContact").val()){
      $("#customerContactError")
        .html("This field is required.")
        .addClass("error");
    }

    $("#customerContact").on("keyup", function () {
      if (!$("#customerContact").val()) {
        $("#customerContactError")
          .html("This field is required.")
          .addClass("error");
      } else {
        $("#customerContactError")
          .html("")
          .removeClass("error")
          .css("display", "none");
      }
    });
  });
});

function addValidationRules() {
  $(".bookName, .bookQuantity, .bookPublishedPrice, .bookSellPrice").each(
    (i, e) => {
      $(e).rules("add", { required: true });
    }
  );
}