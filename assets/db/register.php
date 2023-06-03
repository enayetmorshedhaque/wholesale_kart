<?php
    require('connection.php');
    
    // Check connection
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    } else {
        if (isset($_REQUEST['user_register'])) {
            $name = $_REQUEST['registrationName'];
            $email = $_REQUEST["registrationEmail"];
            $password = md5($_REQUEST["registrationPassword"]);
            $repeatPassword = md5($_REQUEST["repeatPassword"]);

            if ($repeatPassword == $password) {
                $sql = "INSERT INTO `users` (user_id, user_name, user_email, user_password) VALUES ('','$name', '$email', '$password')";
                if (mysqli_query($conn, $sql)) {
                    header('Location: ../../dashboard.html');
                } else {
                    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
                }
            }else{
                header('Location: ../../register.html');
            }
        }
    }
    mysqli_close($conn);
?>