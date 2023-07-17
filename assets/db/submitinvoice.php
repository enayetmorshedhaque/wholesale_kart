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

            //Get the form data as arrays
            $bookName = $_REQUEST["bookName"];
            $bookQuantity = $_REQUEST["bookQuantity"];
            $bookPublishedPrice = $_REQUEST["bookPublishedPrice"];
            $bookSellPrice = $_REQUEST["bookSellPrice"];
            
            //Create an empty array to store the rows
            $rows = array();

            //Loop through the arrays and create an associative array for each row
            for ($i = 0; $i < count((array) $_REQUEST['bookName']); $i++) {
                $row = array("bookName" => htmlentities($bookName[$i]), "bookQuantity" => $bookQuantity[$i], "bookPublishedPrice" => $bookPublishedPrice[$i], "bookSellPrice" => $bookSellPrice[$i]);
                //Push the row to the rows array
                array_push($rows, $row);
            }

            //Convert the rows array to a JSON object
            $bookDetails = json_encode($rows, JSON_PRETTY_PRINT);

            //Convert it to a PHP array
            $books = json_decode($bookDetails, true);

            //Initialize a variable to store the total bookSellPrice
            $subtotal = 0;

            //Loop through the array and calculate the subtotal
            foreach ($books as $book) {
                $quantity = $book["bookQuantity"];
                $sellPrice = $book["bookSellPrice"];
                $subtotal += ($quantity * $sellPrice);
            }

            // Get Vat Related Values
            $vat_percentage = "";

            if (empty($_REQUEST["vatAmount"])) {
                $vat_percentage = 0;
            } else {
                $vat_percentage = $_REQUEST["vatAmount"];
            }

            // Get Courier Related Values
            $courier_base_charge = $_REQUEST["selectCourier"];

            // Get Courier Services Based On Delivery Charge
            $courier_name = "";
            $courier_name_custom = "";
            $courier_charge_custom = "";

            switch ($courier_base_charge) {
                case "50":
                    $courier_name_value = "Sundarban(O/D) ";
                    $courier_name = strtok($courier_name_value, ' ');
                    break;
                case "60":
                    $courier_name_value = "Steadfast(28685) (Inside Dhaka)";
                    $courier_name = strtok($courier_name_value, ' ');
                    break;
                case "100":
                    $courier_name_value = "Steadfast(28685) (Suburb & Outside Dhaka)";
                    $courier_name = strtok($courier_name_value, ' ');
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

            switch ($payment_method_value) {
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

            if (empty($total_weight)) {
                $total_weight = 0;
            }

            if ($total_weight >= 0.5) {
                $total_weight = ceil($total_weight);
            } else {
                $total_weight = 1;
            }

            // Get Free Shipping Related Values
            $free_shipping = "";
            $total_courier_charge = "";

            if (empty($_REQUEST["freeShipping"])) {
                $free_shipping = 0;
                // Calculate Total Courier Charge Based on Weight
                $extra_courier_charge = 20;
                if ($total_weight <= 1) {
                    $total_courier_charge = $courier_base_charge;
                } else {
                    $total_courier_charge = $courier_base_charge + ($total_weight - 1) * $extra_courier_charge;
                }
            } else {
                $free_shipping = $_REQUEST["freeShipping"];
                $total_courier_charge = 0;
            }

            $total_bill = $subtotal + (($subtotal * $vat_percentage) / 100) + $total_courier_charge;

            //Start a transaction
            mysqli_begin_transaction($conn);

            //Insert order data into the orders table
            mysqli_query($conn, "INSERT INTO `orders_table` (order_id, order_no, order_date) VALUES('', '$order_no', '$order_date')");

            //Get the last inserted id
            $order_id = mysqli_insert_id($conn);

            echo $order_id;

            //Insert invoice data into the invoices table
            mysqli_query($conn, "INSERT INTO `invoices_table` (invoice_id, invoice_no, invoice_date, order_id) VALUES('', '$invoice_no', '$invoice_date', '$order_id')");

            //Insert customer data into the customers table

            mysqli_query($conn, "INSERT INTO `customers_table` (customer_id, customer_name, customer_mobile, customer_address, order_id) VALUES('', '$customer_name', '$customer_mobile', '$customer_address', '$order_id')");

            //Insert book details data into the book details table
            mysqli_query($conn, "INSERT INTO `order_details_table` (order_details_id, order_details, order_id) VALUES('', '$bookDetails', '$order_id')");

            //Insert payment method details data into the payment method details table
            mysqli_query($conn, "INSERT INTO `payment_details_table` (payment_id, payment_method, order_id) VALUES('', '$payment_method', '$order_id')");

            //Insert courier details data into the courier details table
            mysqli_query($conn, "INSERT INTO `couriers_table` (courier_id, courier_name, total_weight, courier_base_charge, courier_name_custom, courier_charge_custom, free_shipping, order_id) VALUES('', '$courier_name', '$total_weight', '$courier_base_charge', '$courier_name_custom', '$courier_charge_custom', '$free_shipping', '$order_id')");

            //Get the last inserted id
            $courier_id = mysqli_insert_id($conn);


            //Insert billing details data into the billing details table
            mysqli_query($conn, "INSERT INTO `billing_details_table` (billing_details_id, subtotal, total_courier_charge, vat_percentage, total_bill, order_id, courier_id) VALUES('', '$subtotal', '$total_courier_charge', '$vat_percentage', '$total_bill', '$order_id', '$courier_id')");


            //Commit the transaction
            mysqli_commit($conn);

            // if (mysqli_multi_query($conn, $sql)) {
            //     // $sql = ";
            //     //     ";
            //     echo "
            //         <div class='alert alert-success alert-dismissible fade show' role='alert'>Invoice Created Successfully.</div>
            //     ";
            //     // header('Location: ../../invoice-list.html');
            // }else{
            //     header('Location: ../../generate-invoice.html');
            // }

            // //Print the result
            // echo "Total Sell Price: <strong>" .$total . "</strong><br/>"; //700
            // echo '=========================================================================================================================' . '<br />';
            // echo '=========================================================================================================================' . '<br />';
            // echo 'Order Number: ' . $order_no. '<br/>' . 'Order Date: ' . $order_date . '<br />';
            // echo '=========================================================================================================================' . '<br />';
            // echo 'Invoice Number: ' . $invoice_no . '<br/>' . 'Invoice Date: ' . $invoice_date . '<br />';
            // echo '=========================================================================================================================' . '<br />';
            // echo 'Customer Name: ' . $customer_name . '<br />' . 'Customer Address: ' . $customer_address . '<br />' . 'Customer Contact: '. $customer_mobile . '<br />';
            // echo '=========================================================================================================================' . '<br />';
            // //Print the result
            // print_r("<pre>" . $bookDetails . "<pre/>");
            // echo '=========================================================================================================================' . '<br />';
            // echo 'Selected Courier: ' . $courier_name . '<br/>' . 'Selected Courier Base Charge: ' . $courier_base_charge . '<br />';
            // echo 'Total Weight of Ordered Books: ' . $total_weight . '<br />';
            // echo 'Total Courier Charge for ' . $total_weight . ' KG is is: ' . $total_courier_charge . '<br />';
            // echo '=========================================================================================================================' . '<br />';
            // echo 'Selected Payment Method: ' . $payment_method . '<br />';
            // echo '=========================================================================================================================' . '<br />';
            // echo 'Free Shipping/ Gift/ No Courier Charge: ' . $free_shipping . '<br />';
            // echo '=========================================================================================================================' . '<br />';
            // echo 'Vat Percentage: ' . $vat_percentage . '<br />';
            // echo '=========================================================================================================================' . '<br />';

        }
    }
    mysqli_close($conn);
?>