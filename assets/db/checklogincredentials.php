<?php
require('connection.php');

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
} else {
    if (isset($_REQUEST['checking_login_email'])) {
        $email = $_REQUEST['email_id'];

        $email_query = "SELECT user_email FROM `users` WHERE user_email='$email'";
        $email_query_run = mysqli_query($conn, $email_query);
        if (mysqli_num_rows($email_query_run) > 0) {
            echo '
                <div id="loginEmailValidation" class="valid-feedback">Email Matched</div>
                <script>
                    $(".checking_email").removeClass("form-control is-invalid");
                    $(".checking_email").addClass("form-control is-valid");
                </script>      
                ';
        } else {
            echo '
                <div id="loginEmailValidation" class="invalid-feedback">Hey, enter a registered email.</div>
                <script>
                    $(".checking_email").removeClass("form-control is-valid");
                    $(".checking_email").addClass("form-control is-invalid");
                </script>     
                ';
        }
        if (isset($_REQUEST['checking_login_password'])) {
            $password = md5($_REQUEST['user_password']);
    
            $password_query = "SELECT user_password FROM `users` WHERE user_password='$password'";
            $password_query_run = mysqli_query($conn, $password_query);
            if (mysqli_num_rows($password_query_run) > 0) {
                echo '
                    <div id="loginPasswordValidation" class="valid-feedback">Password Matched</div>
                    <script>
                        $(".checking_password").removeClass("form-control is-invalid");
                        $(".checking_password").addClass("form-control is-valid");
                    </script>      
                    ';
            } else {
                echo '
                    <div id="loginPasswordValidation" class="invalid-feedback">Hey, please check your password again.</div>
                    <script>
                        $(".checking_password").removeClass("form-control is-valid");
                        $(".checking_password").addClass("form-control is-invalid");
                    </script>     
                    ';
            }
        }
    }
}
mysqli_close($conn);
?>