<?php
require 'connection.php';

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
} else {
    if (isset($_REQUEST['customer_name'])) {
        $customer_sql = "SELECT * FROM `add_customer` WHERE slug='{$_REQUEST["customer_name"]}'";
        $customer_result = mysqli_query($conn, $customer_sql);

        if (mysqli_num_rows($customer_result) > 0) {
            
        }
    }
}
mysqli_close($conn);