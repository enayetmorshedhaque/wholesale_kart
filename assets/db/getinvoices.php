<?php
    session_start();
    require('connection.php');

    // Check connection
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    } else{
        $sql = "SELECT * FROM invoices_table";
        $result = mysqli_query($conn, $sql);
    }
?>