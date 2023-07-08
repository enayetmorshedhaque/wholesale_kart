jQuery(document).ready(function () {
    // Replace demo data with local storage data
    $("#name").html(localStorage.getItem('customerName'));
    $("#address").html(localStorage.getItem('customerAddress'));
    $("#contact").html(localStorage.getItem('customerContact'));

    var courierService = localStorage.getItem('courierName');
    courierService = courierService.substring(0, courierService.indexOf(' '));
    $("#courier").html(courierService);
    $("#payment").html(localStorage.getItem('paymentOption'));
    $("#deliveryCharge").html(localStorage.getItem('courierCharge'));


    // Retrieve Array of Books from local storage
    var bookDetails = JSON.parse(localStorage.getItem("bookDetails"));



    bookDetails.forEach(showData);

    function showData(data, index) {
        let tableRow =
            `
        <tr scope="row">
            <th scope="row"><span class="serial">${index + 1}</span></th>
            <td class="bookName">${data.bookName}</td>
            <td class="td-units">
                <span class="unit">${data.bookQuantity}</span> টি
            </td>
            <td class="td-units">
                <strike>৳ <span class="publishedPrice">${data.bookPublishedPrice}</span></strike> &nbsp; ৳ <span
                    class="sellPrice">${data.bookSellPrice}</span>
            </td>
            <td class="td-units">
                ৳ <span class="singleTotal">${''}</span>
            </td>
        </tr>
        `;
        $("#invoiceTableBody").append(tableRow);
    }
    var $element = this;
    var row = $($element).parents("tr:first");
    // console.log(row);
    // $("#invoiceTableBody").prepend($(".calculationRow").show().last());



    var totalUnit = 0;
    $(".unit").each(function () {
        totalUnit += parseInt($(this).text());
    });

    var singleTotal = 0;
    $("#invoiceTableBody tr").each(function () {
        var currentRow = $(this);
        var unit = currentRow.find("td:eq(1) .unit").html();
        // console.log("unit is: " + unit);

    })
    $(".singleTotal").each(function () {
        // var sellPrice = parseInt($(".sellPrice").text());
        // console.log("sellPrice is: " + sellPrice);
        // var singleTotal = unit * sellPrice;
        // $(".singleTotal").html(singleTotal)
    });


    var singleUnitTotal = 0;
    $(".singleTotal").each(function () {
        singleUnitTotal += parseInt($(this).text());
    });



    $("#subTotal").html(singleUnitTotal);
    $("#orderedBooks").html(totalUnit);

    var subTotal = parseInt($("#subTotal").text());
    var deliveryCharge = parseInt($("#deliveryCharge").text());
    var grandTotal = subTotal + deliveryCharge;
    $("#grandTotal").html(grandTotal);


    var paymentOption = $("#payment").text();
    if (paymentOption.match("bKash") || paymentOption.match("Rocket") || paymentOption.match("Nagad") || paymentOption.match("Gift")) {
        $("#cashCollectionAmount").html(0);
    } else {
        $("#cashCollectionAmount").html(grandTotal);
    }


    // window.location.replace("invoice.html");

    // let wspFrame = document.POSTElementById('frame').contentWindow;
    // new jsPDF('p', 'mm', [297, 210]);
    // wspFrame.focus();
    // wspFrame.print();
})