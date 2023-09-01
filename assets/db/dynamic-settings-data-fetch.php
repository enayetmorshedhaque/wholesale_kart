<?php
require 'connection.php';

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Getting Courier Companies Data
$courier_companies_sql = "SELECT * FROM `dynamic_settings_courier_companies`";
$courier_companies_result = mysqli_query($conn, $courier_companies_sql);

if (mysqli_num_rows($courier_companies_result) > 0) {
    $courier_companies_serial = 1;
}

// Getting Customer Types Data
$customer_type_sql = "SELECT * FROM `dynamic_settings_customer_type`";
$customer_type_result = mysqli_query($conn, $customer_type_sql);

if (mysqli_num_rows($customer_type_result) > 0) {
    $customer_type_serial = 1;
}

// Getting MFS Type Data
$mfs_type_sql = "SELECT * FROM `dynamic_settings_mfs_type`";
$mfs_type_result = mysqli_query($conn, $mfs_type_sql);

if (mysqli_num_rows($mfs_type_result) > 0) {
    $mfs_type_serial = 1;
}

// Getting MFS Service Data
$mfs_service_sql = "SELECT * FROM `dynamic_settings_mfs_services`";
$mfs_service_result = mysqli_query($conn, $mfs_service_sql);

if (mysqli_num_rows($mfs_service_result) > 0) {
    $mfs_services_serial = 1;
}

// Getting Social Messaging Data
$social_messaging_service_sql = "SELECT * FROM `dynamic_settings_social_messaging`";
$social_messaging_service_result = mysqli_query($conn, $social_messaging_service_sql);

if (mysqli_num_rows($social_messaging_service_result) > 0) {
    $social_messaging_service_serial = 1;
}

// Getting Supplier Types Data
$supplier_type_sql = "SELECT * FROM `dynamic_settings_supplier_type`";
$supplier_type_result = mysqli_query($conn, $supplier_type_sql);

if (mysqli_num_rows($supplier_type_result) > 0) {
    $supplier_type_serial = 1;
}

mysqli_close($conn);