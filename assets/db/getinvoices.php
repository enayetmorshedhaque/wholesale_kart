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

        if(isset($_REQUEST['pages'])){
            $pages = $_REQUEST['pages'];
            $pages = mysqli_real_escape_string($conn, $pages);
            $pages = htmlentities($pages);
        }else{
            $pages = 1;
        }

        $count = mysqli_num_rows($result);
        $per_page = 1;
        $no_of_pages = ceil($count/$per_page);
        $previous = $no_of_pages - 1;
        $next = $pages + 1;
        $start = ($pages - 1) * $per_page;
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
                
                LIMIT $start, $per_page
                ";
            $result = mysqli_query($conn, $sql);

            if(mysqli_num_rows($result) > 0){

            }else{
                header("Location: invoice-list.html/pages=1");
            }
    }
?>