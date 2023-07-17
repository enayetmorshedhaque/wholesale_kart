<?php
    require('connection.php');

    // Check connection
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    } else {
        if (isset($_REQUEST['check_increment_order_number'])) {
            $query = "SELECT order_no FROM `orders_table` ORDER BY order_no DESC";
            $result = mysqli_query($conn, $query);

            $row = mysqli_fetch_array($result);

            if (empty($row['order_no'])) {
                $number = "BB-HO-0000001";
                echo $number;
            } else {
                $orderId = str_replace("BB-HO-", "", $row['order_no']);
                $id = str_pad(($orderId + 1), 7, 0, STR_PAD_LEFT);
                $number = "BB-HO-" . $id;
                echo $number;
            }
        }

        if (isset($_REQUEST['check_increment_invoice_number'])) {
            $query = "SELECT invoice_no FROM `invoices_table` ORDER BY invoice_no DESC";
            $result = mysqli_query($conn, $query);

            $row = mysqli_fetch_array($result);

            if (empty($row['invoice_no'])) {
                $number = "INV-BB-0000001";
                echo $number;
            } else {
                $invoiceId = str_replace("INV-BB-", "", $row['invoice_no']);
                $id = str_pad(($invoiceId + 1), 7, 0, STR_PAD_LEFT);
                $number = "INV-BB-" . $id;
                echo $number;
            }
        }

    }
    mysqli_close($conn);
?>