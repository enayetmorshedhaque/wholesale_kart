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
        
        $count = mysqli_num_rows($result);
        $per_page = 25;

        if(isset($_REQUEST['pages'])){
            $pages = $_REQUEST['pages'];
            $pages = mysqli_real_escape_string($conn, $pages);
            $pages = htmlentities($pages);
        }else{
            $pages = 1;
        }

        $no_of_pages = ceil($count/$per_page);

        if ($pages > $no_of_pages) {
            //Set the current page number to the last page
            $pages = $no_of_pages;
        }

        $previous = $no_of_pages - 1;
        $next = $pages + 1;
        $start = ($pages - 1) * $per_page;
        $limit = min($per_page, $count - $start);
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
                
                LIMIT $limit OFFSET $start;
                ";
        $result = mysqli_query($conn, $sql);

        if(mysqli_num_rows($result) > 0){

        }else{
            header("Location: invoice-list.html/pages=1");
        }
    }
    mysqli_close($conn);
?>