jQuery(document).ready(function () {
    $('#generateInvoice').click(function () {
        // Get data from various inputs
        let customerName = $('#customerName').val();
        let customerAddress = $('#customerAddress').val();
        let customerContact = $('#customerContact').val();

        let courierCharge = $('#selectCourier').find(":selected").val();
        let courierName = $('#selectCourier').find(":selected").text();
        let paymentOption = $('#selectPaymentOption').find(":selected").text();

        // Get Book Details data
        // var bookDetails = [];
        // $('.bookDetail').each(function () {
        //     bookDetails[this.id] = this.value;
        // })

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
        localStorage.setItem('customerName', customerName);
        localStorage.setItem('customerAddress', customerAddress);
        localStorage.setItem('customerContact', customerContact);

        localStorage.setItem('courierCharge', courierCharge);
        localStorage.setItem('courierName', courierName);
        localStorage.setItem('paymentOption', paymentOption);

        window.location.replace("invoice.html");

        // let wspFrame = document.getElementById('frame').contentWindow;
        // new jsPDF('p', 'mm', [297, 210]);
        // wspFrame.focus();
        // wspFrame.print();
    })
})