<?php
session_start();
require('connection.php');

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}else{
    if (isset($_REQUEST['generateInvoice'])){

        // Get Order Related Values
        $order_no = $_REQUEST["orderNumber"];
        $order_date = $_REQUEST["orderDate"];

        // Get Invoice Related Values
        $invoice_no = $_REQUEST["invoiceNumber"];
        $invoice_date = $_REQUEST["invoiceDate"];

        // Get Customer Related Values
        $customer_mobile = $_REQUEST["customerContact"];
        $customer_name = $_REQUEST["customerName"];
        $customer_address = $_REQUEST["customerAddress"];

    }
}
?>