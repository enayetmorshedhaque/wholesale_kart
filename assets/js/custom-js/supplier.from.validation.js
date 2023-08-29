$(document).ready(function () {
    $("form").addClass("was-validate");

    // Add New Supplier validation starts here
    $("#supplier_type").on("blur", function () {
        if ($(this).val() === "") {
            $("#supplier_type_feedback").html("Select Supplier Type").removeClass("valid-feedback").addClass("invalid-feedback ");
            $("#supplier_type").removeClass("is-valid").addClass("is-invalid");
        } else {
            $("#supplier_type_feedback").html("Looks Good!").removeClass("invalid-feedback").addClass("valid-feedback");
            $("#supplier_type").removeClass("is-invalid").addClass("is-valid");
        }
    });

    $("#supplier_name_bangla").on("blur", function () {
        let bengaliCharacterPattern = /^[\u0980-\u09FF\s]+$/;
        let bengaliNumberPattern = /^[\u09E6-\u09EF]+$/;
        let englishCharacterPattern = /^[a-zA-Z\s]+$/;
        let numbers = /([0-9])/;

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
        let phone_number_validation = /([1-9])/;

        if ($(this).val() === "" || $.trim(($(this).val())) === "") {

            $("#supplier_contact_feedback").html("Enter Supplier Contact Number.").removeClass("valid-feedback").addClass("invalid-feedback");
            $("#supplier_contact").removeClass("is-valid").addClass("is-invalid");

        } else if (($(this).val()).length != 11 || ($(this).val()).charAt(0).match(phone_number_validation)) {

            $("#supplier_contact_feedback").html("Enter Valid Contact Number.").removeClass("valid-feedback").addClass("invalid-feedback");
            $("#supplier_contact").removeClass("is-valid").addClass("is-invalid");

        } else {

            $("#supplier_contact_feedback").html("Looks Good!").removeClass("invalid-feedback").addClass("valid-feedback");
            $("#supplier_contact").removeClass("is-invalid").addClass("is-valid");

        }
    });

    $("#supplier_mfs_type").on("blur", function () {
        if (($(this).val()).length > 0) {
            $("#supplier_mfs_type_feedback").html("Looks Good!").removeClass("invalid-feedback").addClass("valid-feedback");
            $("#supplier_mfs_type").removeClass("is-invalid").addClass("is-valid");
        } else {
            $("#supplier_mfs_type_feedback").html("").removeClass("valid-feedback");
            $("#supplier_mfs_type").removeClass("is-valid");

            let supplier_mfs_number = $("#supplier_mfs_number").val();
            let supplier_mfs_service = $("#supplier_mfs_service").val();

            if (supplier_mfs_number.length <= 0) {
                $("#supplier_mfs_number_feedback").html("").removeClass("valid-feedback invalid-feedback");
                $("#supplier_mfs_number").removeClass("is-valid is-invalid");
            }

            if (supplier_mfs_service.length <= 0) {
                $("#supplier_mfs_service_feedback").html("").removeClass("valid-feedback invalid-feedback");
                $("#supplier_mfs_service").removeClass("is-valid is-invalid");
            }
        }
    });

    $("#supplier_mfs_number").on("blur", function () {
        let phone_number_validation = /([1-9])/;

        if (($(this).val()).length <= 0) {
            $("#supplier_mfs_number_feedback").html("").removeClass("valid-feedback");
            $("#supplier_mfs_number").removeClass("is-valid");

            let supplier_mfs_service = $("#supplier_mfs_service").val();
            let supplier_mfs_type = $("#supplier_mfs_type").val();

            if (supplier_mfs_type.length <= 0) {
                $("#supplier_mfs_type_feedback").html("").removeClass("valid-feedback invalid-feedback");
                $("#supplier_mfs_type").removeClass("is-valid is-invalid");
            }

            if (supplier_mfs_service.length <= 0) {
                $("#supplier_mfs_service_feedback").html("").removeClass("valid-feedback invalid-feedback");
                $("#supplier_mfs_service").removeClass("is-valid is-invalid");
            }
        } else if (($(this).val()).length < 11 || ($(this).val()).length > 12 || ($(this).val()).charAt(0).match(phone_number_validation)) {
            $("#supplier_mfs_number_feedback").html("Enter Valid MFS Number.").removeClass("valid-feedback").addClass("invalid-feedback");
            $("#supplier_mfs_number").removeClass("is-valid").addClass("is-invalid");
        } else {
            $("#supplier_mfs_number_feedback").html("Looks Good!").removeClass("invalid-feedback").addClass("valid-feedback");
            $("#supplier_mfs_number").removeClass("is-invalid").addClass("is-valid");
        }
    });

    $("#supplier_mfs_service").on("blur", function () {
        if (($(this).val()).length > 0) {
            $("#supplier_mfs_service_feedback").html("Looks Good!").removeClass("invalid-feedback").addClass("valid-feedback");
            $("#supplier_mfs_service").removeClass("is-invalid").addClass("is-valid");
        } else {
            $("#supplier_mfs_service_feedback").html("").removeClass("valid-feedback");
            $("#supplier_mfs_service").removeClass("is-valid");

            let supplier_mfs_number = $("#supplier_mfs_number").val();
            let supplier_mfs_type = $("#supplier_mfs_type").val();

            if (supplier_mfs_type.length <= 0) {
                $("#supplier_mfs_type_feedback").html("").removeClass("valid-feedback invalid-feedback");
                $("#supplier_mfs_type").removeClass("is-valid is-invalid");
            }

            if (supplier_mfs_number.length <= 0) {
                $("#supplier_mfs_number_feedback").html("").removeClass("valid-feedback invalid-feedback");
                $("#supplier_mfs_number").removeClass("is-valid is-invalid");
            }
        }
    });

    $("#supplier_bank_account_no").on("blur", function () {
        if (($(this).val()).length > 0) {
            $("#supplier_bank_account_no_feedback").html("Looks Good!").removeClass("invalid-feedback").addClass("valid-feedback");
            $("#supplier_bank_account_no").removeClass("is-invalid").addClass("is-valid");
        } else {
            $("#supplier_bank_account_no_feedback").html("").removeClass("valid-feedback invalid-feedback");
            $("#supplier_bank_account_no").removeClass("is-valid is-invalid");

            let supplier_bank_name = $("#supplier_bank_name").val();
            let supplier_bank_branch_name = $("#supplier_bank_branch_name").val();

            if (supplier_bank_name.length <= 0) {
                $("#supplier_bank_name_feedback").html("").removeClass("valid-feedback invalid-feedback");
                $("#supplier_bank_name").removeClass("is-valid is-invalid");
            }

            if (supplier_bank_branch_name.length <= 0) {
                $("#supplier_bank_branch_name_feedback").html("").removeClass("valid-feedback invalid-feedback");
                $("#supplier_bank_branch_name").removeClass("is-valid is-invalid");
            }
        }
    });

    $("#supplier_bank_name").on("blur", function () {
        if (($(this).val()).length > 0) {
            $("#supplier_bank_name_feedback").html("Looks Good!").removeClass("invalid-feedback").addClass("valid-feedback");
            $("#supplier_bank_name").removeClass("is-invalid").addClass("is-valid");
        } else {
            $("#supplier_bank_name_feedback").html("").removeClass("valid-feedback invalid-feedback");
            $("#supplier_bank_name").removeClass("is-valid is-invalid");

            let supplier_bank_account_no = $("#supplier_bank_account_no").val();
            let supplier_bank_branch_name = $("#supplier_bank_branch_name").val();

            if (supplier_bank_account_no.length <= 0) {
                $("#supplier_bank_account_no_feedback").html("").removeClass("valid-feedback invalid-feedback");
                $("#supplier_bank_account_no").removeClass("is-valid is-invalid");
            }

            if (supplier_bank_branch_name.length <= 0) {
                $("#supplier_bank_branch_name_feedback").html("").removeClass("valid-feedback invalid-feedback");
                $("#supplier_bank_branch_name").removeClass("is-valid is-invalid");
            }
        }
    });

    $("#supplier_bank_branch_name").on("blur", function () {
        if (($(this).val()).length > 0) {
            $("#supplier_bank_branch_name_feedback").html("Looks Good!").removeClass("invalid-feedback").addClass("valid-feedback");
            $("#supplier_bank_branch_name").removeClass("is-invalid").addClass("is-valid");
        } else {
            $("#supplier_bank_branch_name_feedback").html("").removeClass("valid-feedback invalid-feedback");
            $("#supplier_bank_branch_name").removeClass("is-valid is-invalid");
        }
    });

    $("#supplier_social_contact_number").on("blur", function () {
        let phone_number_validation = /([1-9])/;

        if ($(this).val() === "" || $.trim(($(this).val())) === "") {
            $("#supplier_social_contact_number_feedback").html("Enter Supplier Social Contact Number.").removeClass("valid-feedback").addClass("invalid-feedback");
            $("#supplier_social_contact_number").removeClass("is-valid").addClass("is-invalid");

        } else if (($(this).val()).length != 11 || ($(this).val()).charAt(0).match(phone_number_validation)) {
            $("#supplier_social_contact_number_feedback").html("Enter Valid Contact Number.").removeClass("valid-feedback").addClass("invalid-feedback");
            $("#supplier_social_contact_number").removeClass("is-valid").addClass("is-invalid");

        } else {
            $("#supplier_social_contact_number_feedback").html("Looks Good!").removeClass("invalid-feedback").addClass("valid-feedback");
            $("#supplier_social_contact_number").removeClass("is-invalid").addClass("is-valid");

        }
    });

    $("#supplier_social_contact_service").on("blur", function () {
        if ($(this).val() === "") {
            $("#supplier_social_contact_service_feedback").html("Select Supplier Social Contact Service.").removeClass("valid-feedback").addClass("invalid-feedback");
            $("#supplier_social_contact_service").removeClass("is-valid").addClass("is-invalid");
        } else {
            $("#supplier_social_contact_service_feedback").html("Looks Good!").removeClass("invalid-feedback").addClass("valid-feedback");
            $("#supplier_social_contact_service").removeClass("is-invalid").addClass("is-valid");

        }
    });

    $("#createNewSupplier").on("click", function (event) {

        // Perform validation

        // Business Information
        let supplier_type = $("#supplier_type").val();
        let supplier_name_bangla = $("#supplier_name_bangla").val();
        let supplier_name_english = $("#supplier_name_english").val();
        let supplier_address = $("#supplier_address").val();
        let supplier_contact = $("#supplier_contact").val();

        // MFS Information
        let supplier_mfs_service = $("#supplier_mfs_service").val();
        let supplier_mfs_number = $("#supplier_mfs_number").val();
        let supplier_mfs_type = $("#supplier_mfs_type").val();

        // Bank Information
        let supplier_bank_account_no = $("#supplier_bank_account_no").val();
        let supplier_bank_name = $("#supplier_bank_name").val();
        let supplier_bank_branch_name = $("#supplier_bank_branch_name").val();

        // Social Contact Information
        let supplier_social_contact_number = $("#supplier_social_contact_number").val();
        let supplier_social_contact_service = $("#supplier_social_contact_service").val();

        // ===========================================================================================================

        // Business Information Length
        let supplier_type_input_length = supplier_type.length;
        let supplier_name_bengali_input_length = supplier_name_bangla.length;
        let supplier_name_english_input_length = supplier_name_english.length;
        let supplier_address_input_length = supplier_address.length;
        let supplier_contact_input_length = supplier_contact.length;

        // MFS Information
        let supplier_mfs_service_input_length = supplier_mfs_service.length;
        let supplier_mfs_number_input_length = supplier_mfs_number.length;
        let supplier_mfs_type_input_length = supplier_mfs_type.length;

        // Bank Information Length
        let supplier_bank_account_no_input_length = supplier_bank_account_no.length;
        let supplier_bank_name_input_length = supplier_bank_name.length;
        let supplier_bank_branch_name_input_length = supplier_bank_branch_name.length;

        // Social Contact Length
        let supplier_social_contact_number_input_length = supplier_social_contact_number.length;
        let supplier_social_contact_service_input_length = supplier_social_contact_service.length;

        let isValid = true;

        if (supplier_type_input_length <= 0) {
            $("#supplier_type_feedback").html("This field is required.").removeClass("valid-feedback").addClass("invalid-feedback");
            $("#supplier_type").removeClass("is-valid").addClass("is-invalid");
            isValid = false;
        }

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

        if (supplier_mfs_service_input_length > 0 && supplier_mfs_number_input_length <= 0 && supplier_mfs_type_input_length <= 0) {
            $("#supplier_mfs_number_feedback").html("This field is required.").removeClass("valid-feedback").addClass("invalid-feedback");
            $("#supplier_mfs_number").removeClass("is-valid").addClass("is-invalid");

            $("#supplier_mfs_type_feedback").html("This field is required.").removeClass("valid-feedback").addClass("invalid-feedback");
            $("#supplier_mfs_type").removeClass("is-valid").addClass("is-invalid");
            isValid = false;
        }

        if (supplier_mfs_number_input_length > 0 && supplier_mfs_type_input_length <= 0 && supplier_mfs_service_input_length <= 0) {
            $("#supplier_mfs_type_feedback").html("This field is required.").removeClass("valid-feedback").addClass("invalid-feedback");
            $("#supplier_mfs_type").removeClass("is-valid").addClass("is-invalid");

            $("#supplier_mfs_service_feedback").html("This field is required.").removeClass("valid-feedback").addClass("invalid-feedback");
            $("#supplier_mfs_service").removeClass("is-valid").addClass("is-invalid");
            isValid = false;
        }

        if (supplier_mfs_type_input_length > 0 && supplier_mfs_service_input_length <= 0 && supplier_mfs_number_input_length <= 0) {
            $("#supplier_mfs_number_feedback").html("This field is required.").removeClass("valid-feedback").addClass("invalid-feedback");
            $("#supplier_mfs_number").removeClass("is-valid").addClass("is-invalid");

            $("#supplier_mfs_service_feedback").html("This field is required.").removeClass("valid-feedback").addClass("invalid-feedback");
            $("#supplier_mfs_service").removeClass("is-valid").addClass("is-invalid");
            isValid = false;
        }

        if (supplier_mfs_service_input_length > 0 && supplier_mfs_number_input_length > 0 && supplier_mfs_type_input_length <= 0) {
            $("#supplier_mfs_type_feedback").html("This field is required.").removeClass("valid-feedback").addClass("invalid-feedback");
            $("#supplier_mfs_type").removeClass("is-valid").addClass("is-invalid");
            isValid = false;
        }

        if (supplier_mfs_number_input_length > 0 && supplier_mfs_type_input_length > 0 && supplier_mfs_service_input_length <= 0) {
            $("#supplier_mfs_service_feedback").html("This field is required.").removeClass("valid-feedback").addClass("invalid-feedback");
            $("#supplier_mfs_service").removeClass("is-valid").addClass("is-invalid");
            isValid = false;
        }

        if (supplier_mfs_type_input_length > 0 && supplier_mfs_service_input_length > 0 && supplier_mfs_number_input_length <= 0) {
            $("#supplier_mfs_number_feedback").html("This field is required.").removeClass("valid-feedback").addClass("invalid-feedback");
            $("#supplier_mfs_number").removeClass("is-valid").addClass("is-invalid");
            isValid = false;
        }

        if (supplier_bank_account_no_input_length > 0 && supplier_bank_name_input_length <= 0 && supplier_bank_branch_name_input_length <= 0) {
            $("#supplier_bank_name_feedback").html("This field is required.").removeClass("valid-feedback").addClass("invalid-feedback");
            $("#supplier_bank_name").removeClass("is-valid").addClass("is-invalid");

            $("#supplier_bank_branch_name_feedback").html("This field is required.").removeClass("valid-feedback").addClass("invalid-feedback");
            $("#supplier_bank_branch_name").removeClass("is-valid").addClass("is-invalid");
            isValid = false;
        }

        if (supplier_bank_name_input_length > 0 && supplier_bank_account_no_input_length <= 0 && supplier_bank_branch_name_input_length <= 0) {
            $("#supplier_bank_account_no_feedback").html("This field is required.").removeClass("valid-feedback").addClass("invalid-feedback");
            $("#supplier_bank_account_no").removeClass("is-valid").addClass("is-invalid");

            $("#supplier_bank_branch_name_feedback").html("This field is required.").removeClass("valid-feedback").addClass("invalid-feedback");
            $("#supplier_bank_branch_name").removeClass("is-valid").addClass("is-invalid");
            isValid = false;
        }

        if (supplier_bank_branch_name_input_length > 0 && supplier_bank_name_input_length <= 0 && supplier_bank_account_no_input_length <= 0) {
            $("#supplier_bank_name_feedback").html("This field is required.").removeClass("valid-feedback").addClass("invalid-feedback");
            $("#supplier_bank_name").removeClass("is-valid").addClass("is-invalid");

            $("#supplier_bank_account_no_feedback").html("This field is required.").removeClass("valid-feedback").addClass("invalid-feedback");
            $("#supplier_bank_account_no").removeClass("is-valid").addClass("is-invalid");
            isValid = false;
        }

        if (supplier_bank_account_no_input_length > 0 && supplier_bank_name_input_length > 0 && supplier_bank_branch_name_input_length <= 0) {
            $("#supplier_bank_branch_name_feedback").html("This field is required.").removeClass("valid-feedback").addClass("invalid-feedback");
            $("#supplier_bank_branch_name").removeClass("is-valid").addClass("is-invalid");
            isValid = false;
        }

        if (supplier_bank_name_input_length > 0 && supplier_bank_branch_name_input_length > 0 && supplier_bank_account_no_input_length <= 0) {
            $("#supplier_bank_account_no_feedback").html("This field is required.").removeClass("valid-feedback").addClass("invalid-feedback");
            $("#supplier_bank_account_no").removeClass("is-valid").addClass("is-invalid");
            isValid = false;
        }

        if (supplier_bank_account_no_input_length > 0 && supplier_bank_branch_name_input_length > 0 && supplier_bank_name_input_length <= 0) {
            $("#supplier_bank_name_feedback").html("This field is required.").removeClass("valid-feedback").addClass("invalid-feedback");
            $("#supplier_bank_name").removeClass("is-valid").addClass("is-invalid");
            isValid = false;
        }

        if (supplier_social_contact_number_input_length <= 0) {
            $("#supplier_social_contact_number_feedback").html("This field is required.").removeClass("valid-feedback").addClass("invalid-feedback");
            $("#supplier_social_contact_number").removeClass("is-valid").addClass("is-invalid");
            isValid = false;
        }

        if (supplier_social_contact_service_input_length == 0) {
            $("#supplier_social_contact_service_feedback").html("This field is required.").removeClass("valid-feedback").addClass("invalid-feedback");
            $("#supplier_social_contact_service").removeClass("is-valid").addClass("is-invalid");
            isValid = false;
        }

        // Prevent form submission if there are errors
        if ($(".is-invalid:visible").length > 0 || $(".is-invalid:visible").length > 0) {
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