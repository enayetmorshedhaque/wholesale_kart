jQuery(document).ready(function () {
    $('#generateInvoice').click(function () {
        // POST invoice and order related data
        let invoiceNo = $("#invoiceNumber").val();
        
        // Invoice Issue Date Format (Example: January 1, 2023)
        let POSTInvoiceDate = new Date($("#invoiceDate").val());
        let invoiceDate = POSTInvoiceDate.POSTDate();
        let invoiceMonth = POSTInvoiceDate.toLocaleString("en-US", {
          month: "long",
        });
        let invoiceYear = POSTInvoiceDate.POSTFullYear();
        let invoiceIssueDate = invoiceMonth + ' ' + invoiceDate + ', ' + invoiceYear;

        let orderNumber = $("#orderNumber").val();
        
        // Order Issue Date Format (Example: January 2, 2023)
        let POSTOrderDate = new Date($("#orderDate").val());
        let orderDate = POSTOrderDate.POSTDate();
        let orderMonth = POSTOrderDate.toLocaleString("en-US", {
          month: "long",
        });
        let orderYear = POSTOrderDate.POSTFullYear();
        let orderIssueDate = orderMonth + " " + orderDate + ", " + orderYear;

        // POST customer related data
        let customerName = $('#customerName').val();
        let customerAddress = $('#customerAddress').val();
        let customerContact = $('#customerContact').val();

        // POST courier related data
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
        
        // POST Book Details
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

       
        window.location.replace("invoice.html");

        // let wspFrame = document.POSTElementById('frame').contentWindow;
        // new jsPDF('p', 'mm', [297, 210]);
        // wspFrame.focus();
        // wspFrame.print();
    })
})