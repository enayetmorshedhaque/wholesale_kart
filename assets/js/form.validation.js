// // My validation method
// $(document).ready(function(){
//   $("form").addClass("was-validate");
  
//   $("form").click("submit", function(e){
//     e.preventDefault();
    
//     // Validating the registration name
//     $("input[type='text']").on("keyup focusout", function () {
//       var numbers = /([0-9])/;
//       if (!$(this).val()) {
//         $("#registrationName").removeClass("is-valid");
//         $("#greetUser")
//           .html("Please enter your name")
//           .css("display", "block")
//           .addClass("invalid-feedback");
//         $(this).addClass("form-control is-invalid");
//       } else if ($(this).val().match(numbers)) {
//         $("#greetUser")
//           .html("Name don't contain number")
//           .css("display", "block")
//           .addClass("invalid-feedback");
//         $(this).addClass("form-control is-invalid");
//       } else {
//         $("#registrationName").removeClass("is-invalid");
//         $("#greetUser").removeClass("invalid-feedback");
//         $("#greetUser")
//           .html("Howdy, " + $(this).val() + "!")
//           .css("display", "block")
//           .addClass("valid-feedback");
//         $("#registrationName").addClass("is-valid");
//       }
//     });

//     // Validating the registration email
//     $("input[type='email']").on("keyup focusout", function () {
//       if (!$(this).val()) {
//         $("#registrationEmail").removeClass("is-valid");
//         $("#emailValidation")
//           .html("Please enter your email")
//           .css("display", "block")
//           .addClass("invalid-feedback");
//         $(this).addClass("form-control is-invalid");
//       } else if (IsEmail($(this).val()) == false) {
//         $("#registrationEmail").removeClass("is-valid");
//         $("#emailValidation")
//           .html("Please enter a valid email")
//           .css("display", "block")
//           .addClass("invalid-feedback");
//         $(this).addClass("form-control is-invalid");
//       } else {
//         checkEmailAvailability();
//       }
//     });

//     // Password field strength check
//     $("#registrationPassword").on("keyup focusout", function () {
//       var numbers = /([0-9])/;
//       var alphabets = /([a-zA-Z])/;
//       var specialCharacters = /([.,~,!,@,#,$,%,^,&,*,(,),-,_,+,=,?,>,<])/;
//       var countText = $(this).val().length;

//       if (!$("#registrationPassword").val()) {
//         $("#passwordStrength")
//           .html("Please enter your password")
//           .addClass("invalid-feedback")
//           .css("display", "block");
//       } else {
//         $("#passwordStrength").html("").css("display", "none");
//       }
//       if (countText > 0 && countText < 20) {
//         $(".span1").addClass("weak");
//         $("#registrationPassword").removeClass("form-control is-invalid");
//         $("#registrationPassword").addClass("form-control is-valid");
//       } else {
//         $(".span1").removeClass("weak");
//         $("#registrationPassword").removeClass("form-control is-valid");
//         $("#registrationPassword").addClass("form-control is-invalid");
//       }
//       if ($(this).val().match(alphabets) && $(this).val().match(numbers)) {
//         $(".span2").addClass("medium");
//       } else {
//         $(".span2").removeClass("medium");
//       }
//       if (
//         $(this).val().match(alphabets) &&
//         $(this).val().match(numbers) &&
//         $(this).val().match(specialCharacters)
//       ) {
//         $(".span3").addClass("strong");
//       } else {
//         $(".span3").removeClass("strong");
//       }
//     });

//     // Repeat Password Check
//     $("#repeatPassword").on("keyup focusout", function () {
//       var passwordValue = $("#registrationPassword").val();
//       var repeatPasswordValue = $("#repeatPassword").val();
//       if (!repeatPasswordValue) {
//         $("#repeatPassword").removeClass("form-control is-valid");
//         $("#repeatPasswordFeedback")
//           .html("Please re-enter your password.")
//           .css("display", "block")
//           .addClass("invalid-feedback");
//         $("#repeatPassword").addClass("form-control is-invalid");
//       } else if (passwordValue == repeatPasswordValue) {
//         $("#repeatPassword").removeClass("form-control is-invalid");
//         $("#repeatPassword").addClass("form-control is-valid");
//         $("#repeatPasswordFeedback").removeClass("invalid-feedback");
//         $("#repeatPasswordFeedback")
//           .html("Password Matched")
//           .css("display", "block")
//           .addClass("valid-feedback");
//       } else {
//         $("#repeatPassword").removeClass("form-control is-valid");
//         $("#repeatPassword").addClass("form-control is-invalid");
//         $("#repeatPasswordFeedback").removeClass("valid-feedback");
//         $("#repeatPasswordFeedback")
//           .html("Ohho! Password Mismatched")
//           .css("display", "block")
//           .addClass("invalid-feedback");
//       }
//     });
//     $("form").unbind("click");
//   });
// });
// // Email Validation Check
// function IsEmail(email) {
//   var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
//   if (!regex.test(email)) {
//     return false;
//   } else {
//     return true;
//   }
// }

// // Check Email Uniqueness
// function checkEmailAvailability() {
//   var email = $(".checking_email").val();
//   // alert(email);

//   $.ajax({
//     type: "POST",
//     url: "./assets/db/checkemail.php",
//     data: {
//       "checking_submit_btn": 1,
//       "email_id": email,
//     },
//     success: function (response) {
//       $("#emailValidation").replaceWith(response);
//     },
//   });
// }


// Form Validation With jQuery Form Validation
$(document).ready(function () {
  $("#userRegistrationForm").validate({
    rules: {
      registrationName: {
        required: true,
        digits: false,
      },
      registrationEmail: {
        required: false,
      },
      registrationPassword: {
        required: false,
      },
      repeatPassword: {
        required: false,
      },
    },
  });

  $("#registrationName").rules("add", {
    required: true,
    minlength: 2,
    messages: {
      required: "Please enter your name",
      digits: "$('#greetUser').html('Name don't contain number').css('display', 'block').addClass('invalid-feedback')",
    },
  });

  $("#userRegistrationForm").submit(function (e) {
    e.preventDefault();
  });
});

