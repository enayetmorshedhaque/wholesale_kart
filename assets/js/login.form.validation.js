// // My validation method
$(document).ready(function () {
  $("form").addClass("was-validate");

  // Check all input forms are empty or filled
  $("#user_login").on("click", function (e) {
    if (
      $.trim($("#loginEmail").val()) === "" ||
      $.trim($("#loginPassword").val()) === ""
    ){
      e.preventDefault();
      e.stopPropagation();
    }

    $(".form-control").each(function () {
      var error = false;

      var data = $(this).val();
      // console.log((i+1) + ': ' + data);
      var len = data.length;
      if (len <= 0) {
        if ($("div").hasClass("feedback")) {
          $(".feedback")
            .html("This field is required")
            .addClass("feedback invalid-feedback");
          $(this).removeClass("form-control is-valid");
          $(this).addClass("form-control is-invalid");
        } else {
          $("div.valid-feedback").removeClass("feedback invalid-feedback");
          $(this).removeClass("form-control is-invalid");
          $(this).addClass("form-control is-valid");
        }
        error = true;
      }

      if (!error) {
        $("#user_login").unbind("click");
      }
    });
  });

  // Validating the login email
  $("#loginEmail").on("keyup focusout", function () {
    if (!$(this).val()) {
      $("#loginEmail").removeClass("is-valid");
      $("#loginEmailValidation")
        .html("Please enter your email")
        .addClass("invalid-feedback");
      $(this).addClass("form-control is-invalid");
    } else if (IsEmail($(this).val()) == false) {
      $("#loginEmail").removeClass("is-valid");
      $("#loginEmailValidation")
        .html("Please enter a valid email")
        .addClass("invalid-feedback");
      $("this").addClass("form-control is-invalid");
    } else {
      checkLoginEmailAvailability();
    }
  });

  // Password field strength check
  $("#loginPassword").on("keyup focusout", function () {
    if (!$(this).val()) {
      $("#loginPassword").removeClass("is-valid");
      $("#loginPasswordValidation")
        .html("Please enter your Password")
        .addClass("invalid-feedback");
      $("#loginPassword").addClass("form-control is-invalid");
    } else {
        if (!$("#loginEmail").val()) {
          $("#loginPassword").removeClass("is-valid");
          $("#loginPasswordValidation")
            .html("Please enter your email first")
            .addClass("invalid-feedback disable");
        $("#loginPassword").addClass("form-control is-invalid");  
        } else {
          checkPasswordMatch();
      }
    }
  });

  // Email Validation Check
  function IsEmail(email) {
    var regex =
      /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!regex.test(email)) {
      return false;
    } else {
      return true;
    }
  }

  // Check Email Registered or Not
  function checkLoginEmailAvailability() {
    var email = $(".checking_login_input_email").val();
    // alert(email);

    $.ajax({
      type: "POST",
      url: "./assets/db/checklogincredentials.php",
      data: {
        checking_login_email: 1,
        login_email: email,
      },
      success: function (emailResponse) {
        $("#loginEmailValidation").replaceWith(emailResponse);
      },
    });
  }

  // Check Password Matches or Not
  function checkPasswordMatch() {
    var email = $(".checking_login_input_email").val();
    var password = $(".checking_login_input_password").val();
    // alert(email);

    $.ajax({
      type: "POST",
      url: "./assets/db/checklogincredentials.php",
      data: {
        checking_login_password: 1,
        login_email: email,
        login_password: password,
      },
      success: function (passwordResponse) {
        $("#loginPasswordValidation").replaceWith(passwordResponse);
      },
    });
  }
});
