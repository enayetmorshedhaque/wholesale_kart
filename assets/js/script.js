jQuery(document).ready(function () {
    $('#generateInvoice').click(function () {
        // Get invoice and order related data
        let invoiceNo = $("#invoiceNumber").val();
        
        // Invoice Issue Date Format (Example: January 1, 2023)
        let getInvoiceDate = new Date($("#invoiceDate").val());
        let invoiceDate = getInvoiceDate.getDate();
        let invoiceMonth = getInvoiceDate.toLocaleString("en-US", {
          month: "long",
        });
        let invoiceYear = getInvoiceDate.getFullYear();
        let invoiceIssueDate = invoiceMonth + ' ' + invoiceDate + ', ' + invoiceYear;

        let orderNumber = $("#orderNumber").val();
        
        // Order Issue Date Format (Example: January 2, 2023)
        let getOrderDate = new Date($("#orderDate").val());
        let orderDate = getOrderDate.getDate();
        let orderMonth = getOrderDate.toLocaleString("en-US", {
          month: "long",
        });
        let orderYear = getOrderDate.getFullYear();
        let orderIssueDate = orderMonth + " " + orderDate + ", " + orderYear;

        // Get customer related data
        let customerName = $('#customerName').val();
        let customerAddress = $('#customerAddress').val();
        let customerContact = $('#customerContact').val();

        // Get courier related data
        let courierBaseCharge = parseInt($('#selectCourier').find(":selected").val());
        let courierName = $('#selectCourier').find(":selected").text();
        let paymentOption = $('#selectPaymentOption').find(":selected").text();

        // Update courier charge based on weight
        let totalWeight = Math.ceil($("#totalWeight").val());
        console.log("Courier Base Charge: " + courierBaseCharge);
        console.log("Total Weight is: " + totalWeight);
        let extraCharge = 20;
        if(totalWeight <= 1 ){
            courierCharge = courierBaseCharge;
        }else{
            let extraCourierCharge = parseInt((totalWeight - 1) * extraCharge);
            courierCharge = courierBaseCharge + extraCourierCharge; 
            
        }
        
        // Get Book Details
        var bookName = $(".bookName").val();
        var bookQuantity = $(".bookQuantity").val();
        var bookPublishedPrice = $(".bookPublishedPrice").val();
        var bookSellPrice = $(".bookSellPrice").val();

        if (localStorage.getItem('bookDetails') == null) {
            localStorage.setItem('bookDetails', '[]');
        }

        var old_data = JSON.parse(localStorage.getItem('bookDetails'));
        for (var i = 0; i < $('#invoiceTable >tbody >tr').length; i++) {
            old_data.push({ bookSerial: i, bookName: bookName, bookQuantity: bookQuantity, bookPublishedPrice: bookPublishedPrice, bookSellPrice: bookSellPrice });
        }

        localStorage.setItem('bookDetails', JSON.stringify(old_data));

        // Store input data to local storage
        localStorage.setItem("invoiceNumber", invoiceNo);
        localStorage.setItem("invoiceDate", invoiceIssueDate);
        localStorage.setItem("orderNumber", orderNumber);
        localStorage.setItem("orderDate", orderIssueDate);
        localStorage.setItem('customerName', customerName);
        localStorage.setItem('customerAddress', customerAddress);
        localStorage.setItem('customerContact', customerContact);

        localStorage.setItem('courierCharge', courierCharge);
        localStorage.setItem('courierName', courierName);
        localStorage.setItem('paymentOption', paymentOption);

       
        window.location.replace("invoice-update.html");

        // let wspFrame = document.getElementById('frame').contentWindow;
        // new jsPDF('p', 'mm', [297, 210]);
        // wspFrame.focus();
        // wspFrame.print();
    })
})