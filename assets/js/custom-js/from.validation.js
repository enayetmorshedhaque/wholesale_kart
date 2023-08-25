$(document).ready(function () {
    $("form").addClass("was-validate");

    // Add New Supplier validation starts here
    $("#supplier_name_bangla").on("blur", function () {
        let bengaliCharacterPattern = /^[\u0980-\u09FF\s]+$/;
        let bengaliNumberPattern = /^[\u09E6-\u09EF]+$/;
        let englishCharacterPattern = /^[a-zA-Z\s]+$/;
        let numbers = /([0-9])/;
        let specialCharacters = /[^\w\s]/gi;

        if ($(this).val() === "" || $.trim(($(this).val())) === "") {

            $("#supplier_name_bangla_feedback").html("Enter Supplier Name (Bangla).").removeClass("valid-feedback").addClass("invalid-feedback");
            $("#supplier_name_bangla").removeClass("is-valid").addClass("is-invalid");

        } else if (bengaliNumberPattern.test($(this).val())) {

            $("#supplier_name_bangla_feedback").html("Bengali Numbers are not Allowed.").removeClass("valid-feedback").addClass("invalid-feedback");
            $("#supplier_name_bangla").removeClass("is-valid").addClass("is-invalid");

        } else if (englishCharacterPattern.test($(this).val())) {

            $("#supplier_name_bangla_feedback").html("English Characters are not Allowed.").removeClass("valid-feedback").addClass("invalid-feedback");
            $("#supplier_name_bangla").removeClass("is-valid").addClass("is-invalid");

        } else if ($(this).val().match(numbers)) {

            $("#supplier_name_bangla_feedback").html("English Numbers are not Allowed.").removeClass("valid-feedback").addClass("invalid-feedback");
            $("#supplier_name_bangla").removeClass("is-valid").addClass("is-invalid");

        } else if (bengaliCharacterPattern.test($(this).val())) {

            $("#supplier_name_bangla_feedback").html("Looks Good!").removeClass("invalid-feedback").addClass("valid-feedback");
            $("#supplier_name_bangla").removeClass("is-invalid").addClass("is-valid");

        } else {

            $("#supplier_name_bangla_feedback").html("Special Characters are not allowed.").removeClass("valid-feedback").addClass("invalid-feedback");
            $("#supplier_name_bangla").removeClass("is-valid").addClass("is-invalid");

        }
    });

    $("#supplier_name_english").on("blur", function () {
        let bengaliCharacterPattern = /^[\u0980-\u09FF\s]+$/;
        let bengaliNumberPattern = /^[\u09E6-\u09EF]+$/;
        let englishCharacterPattern = /^[a-zA-Z\s]+$/;
        let numbers = /([0-9])/;
        let specialCharacters = /[^\w\s]/gi;

        if ($(this).val() === "" || $.trim(($(this).val())) === "") {

            $("#supplier_name_english_feedback").html("Enter Supplier Name (English).").removeClass("valid-feedback").addClass("invalid-feedback");
            $("#supplier_name_english").removeClass("is-valid").addClass("is-invalid");

        } else if (bengaliNumberPattern.test($(this).val())) {

            $("#supplier_name_english_feedback").html("Bengali Numbers are not Allowed.").removeClass("valid-feedback").addClass("invalid-feedback");
            $("#supplier_name_english").removeClass("is-valid").addClass("is-invalid");

        } else if (bengaliCharacterPattern.test($(this).val())) {

            $("#supplier_name_english_feedback").html("Bengali Characters are not Allowed.").removeClass("valid-feedback").addClass("invalid-feedback");
            $("#supplier_name_english").removeClass("is-valid").addClass("is-invalid");

        } else if ($(this).val().match(numbers)) {

            $("#supplier_name_english_feedback").html("English Numbers are not Allowed.").removeClass("valid-feedback").addClass("invalid-feedback");
            $("#supplier_name_english").removeClass("is-valid").addClass("is-invalid");

        } else if ($(this).val().match(specialCharacters)) {

            $("#supplier_name_english_feedback").html("Special Characters are not allowed.").removeClass("valid-feedback").addClass("invalid-feedback");
            $("#supplier_name_english").removeClass("is-valid").addClass("is-invalid");

        } else {

            $("#supplier_name_english_feedback").html("Looks Good!").removeClass("invalid-feedback").addClass("valid-feedback");
            $("#supplier_name_english").removeClass("is-invalid").addClass("is-valid");

        }
    });

    $("#supplier_address").on("blur", function () {
        let bengaliCharacterPattern = /^[\u0980-\u09FF\s]+$/;
        let bengaliNumberPattern = /^[\u09E6-\u09EF]+$/;
        let englishCharacterPattern = /^[a-zA-Z\s]+$/;
        let numbers = /([0-9])/;
        let specialCharacters = /[^\w\s]/gi;

        if ($(this).val() === "" || $.trim(($(this).val())) === "") {

            $("#supplier_address_feedback").html("Enter Supplier Address.").removeClass("valid-feedback").addClass("invalid-feedback");
            $("#supplier_address").removeClass("is-valid").addClass("is-invalid");

        } else if (bengaliNumberPattern.test($(this).val())) {

            $("#supplier_address_feedback").html("Bengali Numbers are not Allowed.").removeClass("valid-feedback").addClass("invalid-feedback");
            $("#supplier_address").removeClass("is-valid").addClass("is-invalid");

        } else if (bengaliCharacterPattern.test($(this).val())) {

            $("#supplier_address_feedback").html("Bengali Characters are not Allowed.").removeClass("valid-feedback").addClass("invalid-feedback");
            $("#supplier_address").removeClass("is-valid").addClass("is-invalid");

        } else if (($(this).val()).charAt(0).match(numbers)) {

            $("#supplier_address_feedback").html("Numbers at beginning are not Allowed.").removeClass("valid-feedback").addClass("invalid-feedback");
            $("#supplier_address").removeClass("is-valid").addClass("is-invalid");

        } else if (($(this).val()).charAt(0).match(specialCharacters)) {

            $("#supplier_address_feedback").html("Special Characters at beginning are not allowed.").removeClass("valid-feedback").addClass("invalid-feedback");
            $("#supplier_address").removeClass("is-valid").addClass("is-invalid");

        } else {

            $("#supplier_address_feedback").html("Looks Good!").removeClass("invalid-feedback").addClass("valid-feedback");
            $("#supplier_address").removeClass("is-invalid").addClass("is-valid");

        }
    });

    $("#supplier_contact").on("blur", function () {

        if ($(this).val() === "" || $.trim(($(this).val())) === "") {

            $("#supplier_contact_feedback").html("Enter Supplier Contact Number.").removeClass("valid-feedback").addClass("invalid-feedback");
            $("#supplier_contact").removeClass("is-valid").addClass("is-invalid");

        } else if (($(this).val()).length != 11) {

            $("#supplier_contact_feedback").html("Enter Valid Contact Number.").removeClass("valid-feedback").addClass("invalid-feedback");
            $("#supplier_contact").removeClass("is-valid").addClass("is-invalid");

        } else {

            $("#supplier_contact_feedback").html("Looks Good!").removeClass("invalid-feedback").addClass("valid-feedback");
            $("#supplier_contact").removeClass("is-invalid").addClass("is-valid");

        }
    });

    $("#supplier_mfs_service").on("blur", function () {

        if ($(this).val().length > 0) {

            $("#supplier_mfs_service_feedback").html("Looks Good!").removeClass("invalid-feedback").addClass("valid-feedback");
            $("#supplier_mfs_service").removeClass("is-invalid").addClass("is-valid");

        } else {

            $("#supplier_mfs_service_feedback").html("Select Supplier MFS Service").removeClass("valid-feedback").addClass("invalid-feedback");
            $("#supplier_mfs_service").removeClass("is-valid").addClass("is-invalid");

        }
    });

    $("#createNewSupplier").on("click", function (event) {

        // Perform validation
        let supplier_name_bangla = $("#supplier_name_bangla").val();
        let supplier_name_english = $("#supplier_name_english").val();
        let supplier_address = $("#supplier_address").val();
        let supplier_contact = $("#supplier_contact").val();

        let supplier_name_bengali_input_length = supplier_name_bangla.length;
        let supplier_name_english_input_length = supplier_name_english.length;
        let supplier_address_input_length = supplier_address.length;
        let supplier_contact_input_length = supplier_contact.length;

        let isValid = true;

        if (supplier_name_bengali_input_length <= 0) {
            $("#supplier_name_bangla_feedback").html("This field is required.").removeClass("valid-feedback").addClass("invalid-feedback");
            $("#supplier_name_bangla").removeClass("is-valid").addClass("is-invalid");
            isValid = false;
        }

        if (supplier_name_english_input_length <= 0) {
            $("#supplier_name_english_feedback").html("This field is required.").removeClass("valid-feedback").addClass("invalid-feedback");
            $("#supplier_name_english").removeClass("is-valid").addClass("is-invalid");
            isValid = false;
        }

        if (supplier_address_input_length <= 0) {
            $("#supplier_address_feedback").html("This field is required.").removeClass("valid-feedback").addClass("invalid-feedback");
            $("#supplier_address").removeClass("is-valid").addClass("is-invalid");
            isValid = false;
        }

        if (supplier_contact_input_length <= 0) {
            $("#supplier_contact_feedback").html("This field is required.").removeClass("valid-feedback").addClass("invalid-feedback");
            $("#supplier_contact").removeClass("is-valid").addClass("is-invalid");
            isValid = false;
        }

        // Prevent form submission if there are errors
        if ($(".invalid-feedback:visible").length > 0 || $(".is-invalid:visible").length > 0) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            // event.preventDefault();
            // $.ajax({
            //     type: "POST",
            //     url: "../assets/db/dynamic-settings-data-submit.php",
            //     data: {
            //         "add_social_messaging_service_btn": 1,
            //         "add_social_messaging_service": add_social_messaging_service,
            //     },
            //     success: function (response) {
            //         Swal.fire({
            //             toast: true,
            //             title: 'Data ' + response,
            //             position: 'top-end', // Change position as needed (top-start, top-end, bottom-start, bottom-end)
            //             showConfirmButton: false,
            //             timer: 2000, // Duration in milliseconds (3 seconds in this example)
            //             timerProgressBar: true,
            //             didOpen: (toast) => {
            //                 toast.addEventListener('mouseenter', Swal.stopTimer)
            //                 toast.addEventListener('mouseleave', Swal.resumeTimer)
            //             }
            //         });
            //     },
            // });
            // $("#add_social_messaging_service").val("");
            // $("#social_messaging_feedback").html("").removeClass("valid-feedback");
            // $("#add_social_messaging_service").removeClass("is-valid");
        }
    });
    // Add New Supplier validation ends here   
});