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

        // Get Vat Related Values
        $vat_percentage = $_REQUEST["vatAmount"];

        if (empty($vat_percentage)) {
            $vat_percentage = 0;
        }

        // Get Courier Related Values
        $courier_base_charge = $_REQUEST["selectCourier"];
        
        // Get Courier Services Based On Delivery Charge
        $courier_name = "";
        switch ($courier_base_charge) {
            case "50":
                $courier_name = "Sundarban(O/D) ";
                break;
            case "60":
                $courier_name = "Steadfast(28685) (Inside Dhaka)";
                break;
            case "100":
                $courier_name = "Steadfast(28685) (Suburb & Outside Dhaka)";
                break;
            case "0":
                $courier_name_custom = $_REQUEST["customCourierName"];
                $courier_charge_custom = $_REQUEST["customCourierBill"];

                $courier_name = $courier_name_custom;
                $courier_base_charge = $courier_charge_custom;
                break;
            default:
                $courier_name = "Unknown Option";
                break;
        }

        // Get Payment Option Related Values
        $payment_method_value = $_REQUEST["selectPaymentOption"];
        $payment_method = "";

        switch($payment_method_value){
            case "1":
                $payment_method = "COD";
                break;
            case "2":
                $payment_method = "bKash";
                break;
            case "3":
                $payment_method = "Rocket";
                break;
            case "4":
                $payment_method = "Nagad";
                break;
            default:
                $payment_method = "Unknown Option";
                break;
        }

        // Get Total Weight Related Values
        $total_weight = $_REQUEST["totalWeight"];
        
        if(empty($total_weight)){
            $total_weight = 0;
        }
        
        if($total_weight >= 0.5){
            $total_weight = ceil($total_weight);
        }else{
            $total_weight = 1;
        }

        // Get Free Shipping Related Values
        $free_shipping = $_REQUEST["freeShipping"];

        if(empty($free_shipping)){
            $free_shipping = 0;
        }

        echo 'Order Number: ' . $order_no. '<br/>' . 'Order Date: ' . $order_date . '<br />';
        echo '=========================================================================================================================' . '<br />';
        echo 'Invoice Number: ' . $invoice_no . '<br/>' . 'Invoice Date: ' . $invoice_date . '<br />';
        echo '=========================================================================================================================' . '<br />';
        echo 'Customer Name: ' . $customer_name . '<br />' . 'Customer Address: ' . $customer_address . '<br />' . 'Customer Contact: '. $customer_mobile . '<br />';
        echo '=========================================================================================================================' . '<br />';
        echo 'Selected Courier: ' . $courier_name . '<br/>' . 'Selected Courier Base Charge: ' . $courier_base_charge . '<br />';
        echo '=========================================================================================================================' . '<br />';
        echo 'Selected Payment Method: ' . $payment_method . '<br />';
        echo '=========================================================================================================================' . '<br />';
        echo 'Total Weight of Ordered Books: ' . $total_weight . '<br />';
        echo '=========================================================================================================================' . '<br />';
        echo 'Free Shipping/ Gift/ No Courier Charge: ' . $free_shipping . '<br />';
        echo '=========================================================================================================================' . '<br />';
        echo 'Vat Percentage: ' . $vat_percentage . '<br />';

    }
}
?>