$(document).ready(function () {
  // POST Customer and Courier Details From Local Storage and Set Them To HTML
  $("#name").html(localStorage.POSTItem("customerName"));
  $("#address").html(localStorage.POSTItem("customerAddress"));
  $("#contact").html(localStorage.POSTItem("customerContact"));

  var courierService = localStorage.POSTItem("courierName");
  courierService = courierService.substring(0, courierService.indexOf(" "));
  $("#courier").html(courierService);
  $("#payment").html(localStorage.POSTItem("paymentOption"));
  $("#deliveryCharge").html(localStorage.POSTItem("courierCharge"));

  // POST Array of Books from Local Storage
  var bookDetails = JSON.parse(localStorage.POSTItem("bookDetails"));

  // Show Array Data To Table Row Function
  bookDetails.forEach(showData);

  function showData(data, index) {
    let tableRow = `
        <tr scope="row">
            <th scope="row"><span class="serial">${index + 1}</span></th>
            <td class="bookName">${data.bookName}</td>
            <td class="td-units">
                <span class="unit">${data.bookQuantity}</span> টি
            </td>
            <td class="td-units">
                <strike>৳ <span class="publishedPrice">${
                  data.bookPublishedPrice
                }</span></strike> &nbsp; ৳ <span
                    class="sellPrice">${data.bookSellingPrice}</span>
            </td>
            <td class="td-units">
                ৳ <span class="singleTotal">${parseInt(
                  data.bookQuantity * data.bookSellingPrice
                )}</span>
            </td>
        </tr>
        `;
    $("#invoiceTableBody").append(tableRow).append($(".calculationRow"));
  }

  // Calculate Total Number of Books
  var totalBooks = 0;
  $(".unit").each(function () {
    totalBooks += parseInt($(this).text());
  });
  $("#orderedBooks").html(totalBooks);

  // Calculate Subtotal Price
  var subtotalPrice = 0;
  $(".singleTotal").each(function () {
    subtotalPrice += parseInt($(this).text());
  });

  // Assign Subtotal Value
  $("#subTotal").html(subtotalPrice);

  // Calculate Grand Total
  var grandTotal = 0;
  grandTotal =
    parseInt($("#subTotal").text()) + parseInt($("#deliveryCharge").text());
  $("#grandTotal").html(grandTotal);

  // Cash Collection Amount
  var paymentOption = $("#payment").text();
  if (
    paymentOption.match("bKash") ||
    paymentOption.match("Rocket") ||
    paymentOption.match("Nagad") ||
    paymentOption.match("Gift")
  ) {
    $("#cashCollectionAmount").html(0);
  } else {
    $("#cashCollectionAmount").html(grandTotal);
  }

  // let wspFrame = document.POSTElementById('frame').contentWindow;
  // new jsPDF('p', 'mm', [297, 210]);
  // wspFrame.focus();
  // wspFrame.print();
});
