<?php
    require('connection.php');

    // Check connection
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    } else {
        if (isset($_REQUEST['checking_customer_number'])) {
            $customer_mobile = $_REQUEST['mobile_number_input'];
            $sql = "SELECT customer_mobile, customer_id FROM `customers_table` WHERE customer_mobile LIKE '%" . $customer_mobile . "%' LIMIT 5";
            $result = mysqli_query($conn, $sql);
            
            $search_array = array();

            while ($fetch = mysqli_fetch_assoc($result)) {
                $customer_id = $fetch['customer_id'];
                $customer_mobile = $fetch['customer_mobile'];

                $search_array[] = array("customer_id" => $customer_id, "customer_mobile" => $customer_mobile);
            }

            echo json_encode($search_array);
        }

        if (isset($_REQUEST['set_customer_details'])) {
            $customer_id = $_REQUEST['contact_number_id'];
            
            $sql = "SELECT customer_name, customer_address FROM `customers_table` WHERE customer_id ='$customer_id'";

            $result = mysqli_query($conn, $sql);

            $return_array = array();
            while ($fetch = mysqli_fetch_assoc($result)) {
                $customer_name = $fetch['customer_name'];
                $customer_address = $fetch['customer_address'];

                $return_array[] = array("customer_name" => $customer_name, "customer_address" => $customer_address);
            }

            echo json_encode($return_array);
        }

    }
    mysqli_close($conn);
?>