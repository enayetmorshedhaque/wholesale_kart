<?php
require 'connection.php';

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
} else {
    if (isset($_REQUEST['checking_submit_btn'])) {
        $add_mfs_type = $_REQUEST['add_mfs_type'];

        $sql = "INSERT INTO `dynamic_settings_mfs_type` (mfs_type_id, mfs_type_value) VALUES ('','$add_mfs_type')";
        $result = mysqli_query($conn, $sql);

        if ($result) {
            echo "inserted successfully";
        } else {
            echo "insertion failed";
        }
    }
}
mysqli_close($conn);