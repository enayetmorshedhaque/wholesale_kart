<?php
    session_start();
    require('connection.php');

    // Check connection
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    } else {
        if (isset($_REQUEST['user_login'])) {
            $email = $_REQUEST["loginEmail"];
            $password = md5($_REQUEST["loginPassword"]);

            $sql = "SELECT * FROM `users` WHERE user_email='$email' AND user_password='$password'";
            $result = mysqli_query($conn, $sql);

            if (mysqli_num_rows($result) === 1) {
                $row = mysqli_fetch_assoc($result);
                if ($row['user_email'] == $email && $row['user_password'] == $password) {
                    $user_token = $row['user_token'];
                    $user_name = $row['user_name'];
                    $_SESSION['user_name'] = $user_name;
                    $_SESSION['user_token'] = $user_token;
                    header('Location: ../../dashboard.html');
                } else {
                    // echo "Error: " . $sql . "<br>" . mysqli_error($conn);
                    header('Location: ../../index.html');
                }
            } else {
                header('Location: ../../index.html');
                // echo "Error: " . $sql . "<br>" . mysqli_error($conn);
            }
        }
    }
    mysqli_close($conn);
?>