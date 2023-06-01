$(document).ready(function () {
  localStorage.clear();

  $("#generateInvoice").on("click", function () {
    // POST Order Number & Invoice Number
    let orderNumber = $("#orderNumber").val();
    let invoiceNo = $("#invoiceNumber").val();

    // Get and format Order Date
    let getOrderDate = new Date($("#orderDate").val());
    let orderDate = getOrderDate.getDate();
    let orderMonth = getOrderDate.toLocaleString("en-US", {
      month: "long",
    });
    let orderYear = getOrderDate.getFullYear();
    let orderIssueDate = orderMonth + " " + orderDate + ", " + orderYear;

    // Get and format Invoice Date
    let getInvoiceDate = new Date($("#invoiceDate").val());
    let invoiceDate = getInvoiceDate.getDate();
    let invoiceMonth = getInvoiceDate.toLocaleString("en-US", {
      month: "long",
    });
    let invoiceYear = getInvoiceDate.getFullYear();
    let invoiceIssueDate =
      invoiceMonth + " " + invoiceDate + ", " + invoiceYear;

    // POST customer related data from inputs
    let customerName = $("#customerName").val();
    let customerAddress = $("#customerAddress").val();
    let customerContact = $("#customerContact").val();

    // POST courier related data from inputs
    let courierName;
    let paymentOption = $("#selectPaymentOption").find(":selected").text();

    // POST courier charge data and update charge based on weight
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

    // Check free shipping option and update courier charge
    if ($("#freeShipping").prop("checked")) {
      courierCharge = 0;
    } else {
      courierCharge = courierCharge;
    }

    // Check if Customize Courier selected
    let customCourierName = 0,
      customCourierBill = 0;
    if (parseInt($("#selectCourier").find(":selected").val()) == 0) {
      if (
        $("#customCourierName").val().length > 0 &&
        $("#customCourierBill").val().length > 0
      ) {
        customCourierName = $("#customCourierName").val();
        customCourierBill = $("#customCourierBill").val();
      } else {
        customCourierName = customCourierName;
        customCourierBill = customCourierBill;
      }
    } else {
      courierName = $("#selectCourier").find(":selected").text();
    }
    // Set Custom Grand Total to Localstorage
    localStorage.setItem("customCourierName", customCourierName);
    localStorage.setItem("customCourierBill", customCourierBill);

    // Save order data to local storage
    localStorage.setItem("orderNumber", orderNumber);
    localStorage.setItem("orderIssueDate", orderIssueDate);

    // Save invoice data to local storage
    localStorage.setItem("invoiceNo", invoiceNo);
    localStorage.setItem("invoiceIssueDate", invoiceIssueDate);

    // Save customer data to local storage
    localStorage.setItem("customerName", customerName);
    localStorage.setItem("customerAddress", customerAddress);
    localStorage.setItem("customerContact", customerContact);

    localStorage.setItem("courierCharge", courierCharge);
    localStorage.setItem("courierName", courierName);
    localStorage.setItem("paymentOption", paymentOption);

    // Declare array for book details
    var booksDetails = [];

    // POST table data and store to local storage
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
    window.location.replace("invoice-update.html");
  });
});
