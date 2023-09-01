<?php
require 'connection.php';

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
} else {
    // Fetch Supplier Bangla Name, and Slug Data
    $supplier_b_name_slug = "SELECT supplier_name_bangla, slug FROM `add_supplier`";
    $supplier_b_name_slug_result = mysqli_query($conn, $supplier_b_name_slug);

    if (mysqli_num_rows($supplier_b_name_slug_result) > 0) {
    }

    // Fetch Customer Bangla Name, and Slug Data
    $customer_b_name_slug = "SELECT customer_name_bangla, slug FROM `add_customer`";
    $customer_b_name_slug_result = mysqli_query($conn, $customer_b_name_slug);

    if (mysqli_num_rows($customer_b_name_slug_result) > 0) {
    }
}
mysqli_close($conn);