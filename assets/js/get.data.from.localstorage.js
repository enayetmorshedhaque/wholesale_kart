$(document).ready(function () {
  // Get Customer and Courier Details From Local Storage and Set Them To HTML
  $("#name").html(localStorage.getItem("customerName"));
  $("#address").html(localStorage.getItem("customerAddress"));
  $("#contact").html(localStorage.getItem("customerContact"));

  //Getting Courier Name and Slicing the necessary part
  var courierService = localStorage.getItem("courierName");
  courierService = courierService.substring(0, courierService.indexOf(" "));
  
  $("#courier").html(courierService);
  $("#payment").html(localStorage.getItem("paymentOption"));
  $("#deliveryCharge").html(localStorage.getItem("courierCharge"));

  // Get Array of Books from Local Storage
  var bookDetails = JSON.parse(localStorage.getItem("bookDetails"));

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

  // let wspFrame = document.getElementById('frame').contentWindow;
  // new jsPDF('p', 'mm', [297, 210]);
  // wspFrame.focus();
  // wspFrame.print();
});
