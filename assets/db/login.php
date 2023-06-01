<?php
    require('connection.php');

    // Check connection
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    } else {
        if (isset($_REQUEST['user_login'])) {
            $email = $_REQUEST["loginEmail"];
            $password = md5($_REQUEST["loginPassword"]);

            echo "hi<br>";
            echo $email. " ".$password."<br>";

            $sql = "SELECT * FROM `users` WHERE user_email='$email' AND user_password='$password'";
            $result = mysqli_query($conn, $sql);
            
            if(mysqli_num_rows($result) === 1){
                $row = mysqli_fetch_assoc($result);
                if($row['user_email'] == $email && $row['user_password'] == $password){
                    header('Location: ../../dashboard.html');
                }else{
                    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
                }
            }else{
                echo "Error: " . $sql . "<br>" . mysqli_error($conn);
            }
        }
    }
    mysqli_close($conn);
?>