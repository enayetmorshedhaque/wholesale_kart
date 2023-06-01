<?php
    require('connection.php');

    // Check connection
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    } else{ 
        if (isset($_REQUEST['checking_submit_btn'])) {
            $email = $_REQUEST['email_id'];

            $email_query = "SELECT user_email FROM `users` WHERE user_email='$email'";
            $email_query_run = mysqli_query($conn, $email_query);
            if (mysqli_num_rows($email_query_run) > 0) {
                echo '
                    <div id="emailValidation" class="invalid-feedback" style="display: block;">Ooopsss...! This email is already taken.</div>
                    <script>
                        $(".checking_email").removeClass("form-control is-valid");
                        $(".checking_email").addClass("form-control is-invalid");
                    </script>      
                ';
            } else {
                echo '
                    <div id="emailValidation" class="valid-feedback" style="display: block;">Welcome Aboard!</div>
                    <script>
                        $(".checking_email").removeClass("form-control is-invalid");
                        $(".checking_email").addClass("form-control is-valid");
                    </script>    
                ';
            }
        }
    }
    mysqli_close($conn);
?>