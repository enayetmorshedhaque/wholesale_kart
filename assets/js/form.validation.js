// // My validation method
$(document).ready(function () {
  $("form").addClass("was-validate");

  // Check all input forms are empty or filled
  $("#user_registration").on("click", function (e) {
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
          console.log("else printing");
        }
        error = true;
        // return;
      }
      if (
        $.trim($("#registrationName").val()) === "" ||
        $.trim($("#registrationEmail").val()) === "" ||
        $.trim($("#registrationPassword").val()) === "" ||
        $.trim($("#repeatPassword").val()) === ""
      ) {
        e.preventDefault();
        e.stopPropagation();
        error = true;
      }

      if (!error) {
        // if not any errors
        $("#user_registration").unbind("click"); // you submit form
      }
    });
  });

  // Validate the registration name
  $("#registrationName").on("keyup focusout", function () {
    var numbers = /([0-9])/;
    var specialCharacters = /[^\w\s]/gi;
    if (!$(this).val()) {
      $("#registrationName").removeClass("is-valid");
      $("#registrationName").removeClass("is-invalid");
      $("#greetUser")
        .html("Please enter your name")
        .addClass("feedback invalid-feedback");
      $(this).addClass("form-control is-invalid");
    } else if ($(this).val().match(numbers)) {
      $("#greetUser")
        .html("Name don't contain number")
        .addClass("feedback invalid-feedback")
        .removeClass("valid-feedback");
      $(this).addClass("form-control is-invalid");
    } else if ($(this).val().match(specialCharacters)) {
      $("#greetUser")
        .html("Name don't contain special characters")
        .addClass("feedback invalid-feedback")
        .removeClass("valid-feedback");
      $(this).addClass("form-control is-invalid");
    } else {
      $("#registrationName").removeClass("is-invalid");
      $("#greetUser").removeClass("feedback invalid-feedback");
      $("#greetUser")
        .html("Howdy, " + $(this).val() + "!")
        .addClass("valid-feedback");
      $("#registrationName").addClass("is-valid");
    }
  });

  // Validating the registration email
  $("#registrationEmail").on("keyup focusout", function () {
    if (!$(this).val()) {
      $("#registrationEmail").removeClass("is-valid");
      $("#emailValidation")
        .html("Please enter your email")
        .addClass("invalid-feedback");
      $(this).addClass("form-control is-invalid");
    } else if (IsEmail($(this).val()) == false) {
      $("#registrationEmail").removeClass("is-valid");
      $("#emailValidation")
        .html("Please enter a valid email")
        .addClass("invalid-feedback");
      $(this).addClass("form-control is-invalid");
    } else {
      checkEmailAvailability();
    }
  });

  // Password field strength check
  $("#registrationPassword").on("keyup focusout", function () {
    var numbers = /([0-9])/;
    var alphabets = /([a-zA-Z])/;
    var specialCharacters = /[^\w\s]/gi;
    var countText = $(this).val().length;

    if (!$("#registrationPassword").val()) {
      $("#passwordStrength")
        .html("Please enter your password")
        .addClass("invalid-feedback");
    } else {
      $("#passwordStrength").html("").css("display", "none");
    }
    if (countText > 0 && countText < 20) {
      $(".span1").addClass("weak");
      $("#registrationPassword").removeClass("form-control is-invalid");
      $("#registrationPassword").addClass("form-control is-valid");
    } else {
      $(".span1").removeClass("weak");
      $("#registrationPassword").removeClass("form-control is-valid");
      $("#registrationPassword").addClass("form-control is-invalid");
    }
    if ($(this).val().match(alphabets) && $(this).val().match(numbers)) {
      $(".span2").addClass("medium");
    } else {
      $(".span2").removeClass("medium");
    }
    if (
      $(this).val().match(alphabets) &&
      $(this).val().match(numbers) &&
      $(this).val().match(specialCharacters)
    ) {
      $(".span3").addClass("strong");
    } else {
      $(".span3").removeClass("strong");
    }
  });

  // Repeat Password Check
  $("#repeatPassword").on("keyup focusout", function () {
    var passwordValue = $("#registrationPassword").val();
    var repeatPasswordValue = $("#repeatPassword").val();
    if (!repeatPasswordValue) {
      $("#repeatPassword").removeClass("form-control is-valid");
      $("#repeatPasswordFeedback")
        .html("Please re-enter your password.")
        .addClass("invalid-feedback");
      $("#repeatPassword").addClass("form-control is-invalid");
    } else if (passwordValue == repeatPasswordValue) {
      $("#repeatPassword").removeClass("form-control is-invalid");
      $("#repeatPassword").addClass("form-control is-valid");
      $("#repeatPasswordFeedback").removeClass("invalid-feedback");
      $("#repeatPasswordFeedback")
        .html("Password Matched")
        .addClass("valid-feedback");
    } else {
      $("#repeatPassword").removeClass("form-control is-valid");
      $("#repeatPassword").addClass("form-control is-invalid");
      $("#repeatPasswordFeedback").removeClass("valid-feedback");
      $("#repeatPasswordFeedback")
        .html("Ohho! Password Mismatched")
        .addClass("invalid-feedback");
    }
  });

  // Email Validation Check
  function IsEmail(email) {
    var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!regex.test(email)) {
      return false;
    } else {
      return true;
    }
  }

  // Check Email Uniqueness
  function checkEmailAvailability() {
    var email = $(".checking_email").val();
    // alert(email);

    $.ajax({
      type: "POST",
      url: "./assets/db/checkemail.php",
      data: {
        "checking_submit_btn": 1,
        "email_id": email,
      },
      success: function (response) {
        $("#emailValidation").replaceWith(response);
      },
    });
  }
});