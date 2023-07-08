$(document).ready(function () {
  $("#generateInvoiceForm").validate();
  addValidationRules();
});

function addValidationRules() {
  $(".bookName, .bookQuantity, .bookPublishedPrice, .bookSellPrice").each(
    (i, e) => {
      $(e).rules("add", { required: true });
    }
  );
}


