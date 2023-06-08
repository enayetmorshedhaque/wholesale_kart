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
            $token = bin2hex(random_bytes(32));
            
            if(empty($name) || empty($email) || empty($password) || empty($repeatPassword)){
                header('Location: ../../register.html');
            }else if ($repeatPassword == $password) {
                $sql = "INSERT INTO `users` (user_id, user_name, user_email, user_password, user_token) VALUES ('','$name', '$email', '$password', '$token')";
                if (mysqli_query($conn, $sql)) {
                    header('Location: ../../dashboard.html');
                } else {
                    header('Location: ../../register.html');
                }
            }else{
                header('Location: ../../register.html');
            }
        }
    }
    mysqli_close($conn);
?>