<?php
    session_start();
    require('connection.php');

    // Check connection
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    } else{
        $sql = "SELECT 
                    orders_table.order_id, invoice_date, invoice_no, customer_name, total_bill, payment_method
                FROM
                    orders_table,
                    invoices_table,
                    customers_table,
                    billing_details_table,
                    payment_details_table
                WHERE 
                    orders_table.order_id = invoices_table.order_id
                    AND customers_table.order_id = invoices_table.order_id
                    AND billing_details_table.order_id = invoices_table.order_id
                    AND payment_details_table.order_id = orders_table.order_id
                ";
        $result = mysqli_query($conn, $sql);

        
    }
?>