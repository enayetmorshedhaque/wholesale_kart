$(document).ready(function () {
  // POST Order related data from localstorage
  $("#orderNumber").html(localStorage.getItem("orderNumber"));
  $("#orderDate").html(localStorage.getItem("orderIssueDate"));

  // POST Invoice related data from localstorage
  $("#invoiceNo").html(localStorage.getItem("invoiceNo"));
  $("#invoiceDate").html(localStorage.getItem("invoiceIssueDate"));

  // POST Customer and Courier Details From Local Storage and Set Them To HTML
  $("#name").html(localStorage.getItem("customerName"));
  $("#address").html(localStorage.getItem("customerAddress"));
  $("#contact").html(localStorage.getItem("customerContact"));

  // Check if Custom Courier Name and Courier Charge is available
  let courierName, courierCharge;
  if(localStorage.getItem("customCourierName").length > 1 && localStorage.getItem("customCourierBill").length > 1){
    courierName = localStorage.getItem("customCourierName");
    courierCharge = localStorage.getItem("customCourierBill");
  }else{
    //POSTting Courier Name and Slicing the necessary part
    courierName = localStorage.getItem("courierName");
    courierName = courierName.substring(0, courierName.indexOf(" "));
    courierCharge = localStorage.getItem("courierCharge");
  }
  console.log(courierName + ": " + courierCharge);

  // Assigning Courier Information to
  $("#courier").html(courierName);
  $("#payment").html(localStorage.getItem("paymentOption"));
  $("#deliveryCharge").html(courierCharge);

  // POST Array of Books from Local Storage
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
  var grandTotal;
  grandTotal = parseInt($("#subTotal").text()) + parseInt(courierCharge);
  console.log(grandTotal);
  $("#grandTotal").html(grandTotal);

  // Assign grand total to cash collection amount
  $("#totalAmount").html(grandTotal);

  // Convert Grand Total in Words
  function numberToWords(grandTotal) {
    var digit = [
      "zero",
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
      "nine",
    ];
    var elevenSeries = [
      "ten",
      "eleven",
      "twelve",
      "thirteen",
      "fourteen",
      "fifteen",
      "sixteen",
      "seventeen",
      "eighteen",
      "nineteen",
    ];
    var countingByTens = [
      "twenty",
      "thirty",
      "forty",
      "fifty",
      "sixty",
      "seventy",
      "eighty",
      "ninety",
    ];
    var shortScale = ["", "thousand", "million", "billion", "trillion"];

    grandTotal = grandTotal.toString();
    grandTotal = grandTotal.replace(/[\, ]/g, "");
    if (grandTotal != parseFloat(grandTotal)) return "not a number";
    var x = grandTotal.indexOf(".");
    if (x == -1) x = grandTotal.length;
    if (x > 15) return "too big";
    var n = grandTotal.split("");
    var str = "";
    var sk = 0;
    for (var i = 0; i < x; i++) {
      if ((x - i) % 3 == 2) {
        if (n[i] == "1") {
          str += elevenSeries[Number(n[i + 1])] + " ";
          i++;
          sk = 1;
        } else if (n[i] != 0) {
          str += countingByTens[n[i] - 2] + " ";
          sk = 1;
        }
      } else if (n[i] != 0) {
        str += digit[n[i]] + " ";
        if ((x - i) % 3 == 0) str += "hundred ";
        sk = 1;
      }
      if ((x - i) % 3 == 1) {
        if (sk) str += shortScale[(x - i - 1) / 3] + " ";
        sk = 0;
      }
    }
    if (x != grandTotal.length) {
      var y = grandTotal.length;
      str += "point ";
      for (var i = x + 1; i < y; i++) str += digit[n[i]] + " ";
    }
    str = str.replace(/\grandTotal+/g, " ");
    return str.trim();
  }

  $("#totalAmountInWords").html(numberToWords(grandTotal));

  // Cash Collection Amount
  var paymentOption = $("#payment").text();
  if (
    paymentOption.match("bKash") ||
    paymentOption.match("Rocket") ||
    paymentOption.match("Nagad")
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
