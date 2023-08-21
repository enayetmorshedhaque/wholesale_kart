<?php
require 'connection.php';

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
} else {
    // Insert Customer Type Data
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $add_new_courier = $_REQUEST['add_new_courier'];
        $courier_shop_id = $_REQUEST['courier_shop_id'];
        $courier_location_value = $_REQUEST['courier_location'];
        $add_courier_base_charge = $_REQUEST['add_courier_base_charge'];
        $add_courier_extra_charge = $_REQUEST['add_courier_extra_charge'];
        $maximum_allowed_weight = $_REQUEST['maximum_allowed_weight'];

        $courier_location = "";
        if (empty($maximum_allowed_weight)) {
            $maximum_allowed_weight = 0;
        }

        switch ($courier_location_value) {
            case "1":
                $courier_location = "Inside Dhaka";
                break;
            case "2":
                $courier_location = "Dhaka Suburb";
                break;
            case "3":
                $courier_location = "Outside Dhaka";
                break;
            default:
                $courier_name = "Unknown Option";
                break;
        }

        $sql = "INSERT INTO `dynamic_settings_courier_companies` (courier_id, courier_name, courier_shop_id, courier_location, courier_base_charge, courier_extra_charge, courier_maximum_allowed_weight) VALUES ('','$add_new_courier', '$courier_shop_id', '$courier_location', '$add_courier_base_charge', '$add_courier_extra_charge', '$maximum_allowed_weight')";

        $result = mysqli_query($conn, $sql);

        if ($result) {
            echo "inserted successfully";
        } else {
            echo "insertion failed";
        }
    }

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