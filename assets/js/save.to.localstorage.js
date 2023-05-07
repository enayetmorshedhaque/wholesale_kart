$(document).ready(function () {
  $("#generateInvoice").on("click", function () {
    // Get Order Number & Invoice Number
    let orderNumber = $("#orderNumber").val();
    let invoiceNo = $("#invoiceNo").val();

    // Get and format Order Date & Invoice Date
    let invoiceDate = new Date($("#invoiceDate").val());
    let invoiceEntryDate = invoiceDate.getDate();
    let invoiceMonth = invoiceDate.getMonth();
    invoiceMonth.toLocaleString("en-US", {
      month: "long",
    });

    let invoiceYear = invoiceDate.getFullYear();

    let invoiceIssueDate =
      invoiceMonth +
      " " +
      invoiceEntryDate +
      ", " +
      invoiceYear;
    console.log(invoiceIssueDate);

    let orderDate = $("#orderDate").val();

    // Get customer related data from inputs
    let customerName = $("#customerName").val();
    let customerAddress = $("#customerAddress").val();
    let customerContact = $("#customerContact").val();

    // Get courier related data from inputs
    let courierName = $("#selectCourier").find(":selected").text();
    let paymentOption = $("#selectPaymentOption").find(":selected").text();

    // Get courier charge data and update charge based on weight
    let courierBaseCharge = parseInt(
      $("#selectCourier").find(":selected").val()
    );
    let courierWeight = parseInt(Math.ceil($("#totalWeight").val()));
    let courierCharge = 0;
    let courierExtraCharge = 20;
    if (courierWeight <= 1) {
      courierCharge = courierBaseCharge;
    } else {
      courierCharge =
        courierBaseCharge + (courierWeight - 1) * courierExtraCharge;
    }

    // Save input data to local storage
    localStorage.setItem("customerName", customerName);
    localStorage.setItem("customerAddress", customerAddress);
    localStorage.setItem("customerContact", customerContact);

    localStorage.setItem("courierCharge", courierCharge);
    localStorage.setItem("courierName", courierName);
    localStorage.setItem("paymentOption", paymentOption);

    // Declare array for book details
    var booksDetails = [];

    // Get table data and store to local storage
    $("#invoiceTable tbody tr").each(function () {
      var currentRow = $(this);
      var bookName = currentRow.find(".bookName").val();
      var bookQuantity = currentRow.find(".bookQuantity").val();
      var bookPublishedPrice = currentRow.find(".bookPublishedPrice").val();
      var bookSellingPrice = currentRow.find(".bookSellPrice").val();

      var data = {};
      data.bookName = bookName;
      data.bookQuantity = bookQuantity;
      data.bookPublishedPrice = bookPublishedPrice;
      data.bookSellingPrice = bookSellingPrice;

      booksDetails.push(data);
      localStorage.setItem("bookDetails", JSON.stringify(booksDetails));
    });

    // Redirect to invoice page
    // window.location.replace("invoice-update.html");
  });
});
