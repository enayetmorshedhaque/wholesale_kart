<?php
require 'connection.php';

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
} else {
    // Insert Customer Type Data
    if (isset($_REQUEST['add_customer_type_btn'])) {
        $add_customer_type = $_REQUEST['add_customer_type'];

        $sql = "INSERT INTO `dynamic_settings_customer_type` (customer_type_id, customer_type_value) VALUES ('','$add_customer_type')";
        $result = mysqli_query($conn, $sql);

        if ($result) {
            echo "inserted successfully";
        } else {
            echo "insertion failed";
        }
    }

    // Insert MFS Type Data
    if (isset($_REQUEST['add_mfs_type_btn'])) {
        $add_mfs_type = $_REQUEST['add_mfs_type'];

        $sql = "INSERT INTO `dynamic_settings_mfs_type` (mfs_type_id, mfs_type_value) VALUES ('','$add_mfs_type')";
        $result = mysqli_query($conn, $sql);

        if ($result) {
            echo "inserted successfully";
        } else {
            echo "insertion failed";
        }
    }

    // Insert MFS Service Data
    if (isset($_REQUEST['add_mfs_service_btn'])) {
        $add_mfs_service = $_REQUEST['add_mfs_service'];

        $sql = "INSERT INTO `dynamic_settings_mfs_services` (mfs_service_id, mfs_service_value) VALUES ('','$add_mfs_service')";
        $result = mysqli_query($conn, $sql);

        if ($result) {
            echo "inserted successfully";
        } else {
            echo "insertion failed";
        }
    }

    // Insert Social Messaging Data
    if (isset($_REQUEST['add_social_messaging_service_btn'])) {
        $add_social_messaging_service = $_REQUEST['add_social_messaging_service'];

        $sql = "INSERT INTO `dynamic_settings_social_messaging` (social_messaging_id, social_messaging_value) VALUES ('','$add_social_messaging_service')";
        $result = mysqli_query($conn, $sql);

        if ($result) {
            echo "inserted successfully";
        } else {
            echo "insertion failed";
        }
    }
}
mysqli_close($conn);