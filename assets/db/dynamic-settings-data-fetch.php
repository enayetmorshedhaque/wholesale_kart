<?php
require 'connection.php';

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$sql = "SELECT * FROM `dynamic_settings_mfs_type`";
$mfs_type_result = mysqli_query($conn, $sql);

$data = array();

while ($rows = mysqli_fetch_assoc($mfs_type_result)) {
    $data[] = $rows;
}

mysqli_close($conn);

// Return data as JSON
echo json_encode($data);