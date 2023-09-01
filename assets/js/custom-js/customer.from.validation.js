$(document).ready(function () {
    $("form").addClass("was-validate");

    // Add New Customer validation starts here
    $("#customer_type").on("blur", function () {
        if ($(this).val() === "") {
            $("#customer_type_feedback").html("Select Customer Type").removeClass("valid-feedback").addClass("invalid-feedback ");
            $("#customer_type").removeClass("is-valid").addClass("is-invalid");
        } else {
            $("#customer_type_feedback").html("Looks Good!").removeClass("invalid-feedback").addClass("valid-feedback");
            $("#customer_type").removeClass("is-invalid").addClass("is-valid");
        }
    });

    $("#customer_name_bangla").on("blur", function () {
        let bengaliCharacterPattern = /^[\u0980-\u09FF\s]+$/;
        let bengaliNumberPattern = /^[\u09E6-\u09EF]+$/;
        let englishCharacterPattern = /^[a-zA-Z\s]+$/;
        let numbers = /([0-9])/;

        if ($(this).val() === "" || $.trim(($(this).val())) === "") {
            $("#customer_name_bangla_feedback").html("Enter Customer Name (Bangla).").removeClass("valid-feedback").addClass("invalid-feedback");
            $("#customer_name_bangla").removeClass("is-valid").addClass("is-invalid");
        } else if (bengaliNumberPattern.test($(this).val())) {
            $("#customer_name_bangla_feedback").html("Bengali Numbers are not Allowed.").removeClass("valid-feedback").addClass("invalid-feedback");
            $("#customer_name_bangla").removeClass("is-valid").addClass("is-invalid");
        } else if (englishCharacterPattern.test($(this).val())) {
            $("#customer_name_bangla_feedback").html("English Characters are not Allowed.").removeClass("valid-feedback").addClass("invalid-feedback");
            $("#customer_name_bangla").removeClass("is-valid").addClass("is-invalid");
        } else if ($(this).val().match(numbers)) {
            $("#customer_name_bangla_feedback").html("English Numbers are not Allowed.").removeClass("valid-feedback").addClass("invalid-feedback");
            $("#customer_name_bangla").removeClass("is-valid").addClass("is-invalid");
        } else if (bengaliCharacterPattern.test($(this).val())) {
            $("#customer_name_bangla_feedback").html("Looks Good!").removeClass("invalid-feedback").addClass("valid-feedback");
            $("#customer_name_bangla").removeClass("is-invalid").addClass("is-valid");
        } else {
            $("#customer_name_bangla_feedback").html("Special Characters are not allowed.").removeClass("valid-feedback").addClass("invalid-feedback");
            $("#customer_name_bangla").removeClass("is-valid").addClass("is-invalid");
        }
    });

    $("#customer_name_english").on("blur", function () {
        let bengaliCharacterPattern = /^[\u0980-\u09FF\s]+$/;
        let bengaliNumberPattern = /^[\u09E6-\u09EF]+$/;
        let numbers = /([0-9])/;
        let specialCharacters = /[^\w\s]/gi;

        if ($(this).val() === "" || $.trim(($(this).val())) === "") {
            $("#customer_name_english_feedback").html("Enter Customer Name (English).").removeClass("valid-feedback").addClass("invalid-feedback");
            $("#customer_name_english").removeClass("is-valid").addClass("is-invalid");
        } else if (bengaliNumberPattern.test($(this).val())) {
            $("#customer_name_english_feedback").html("Bengali Numbers are not Allowed.").removeClass("valid-feedback").addClass("invalid-feedback");
            $("#customer_name_english").removeClass("is-valid").addClass("is-invalid");
        } else if (bengaliCharacterPattern.test($(this).val())) {
            $("#customer_name_english_feedback").html("Bengali Characters are not Allowed.").removeClass("valid-feedback").addClass("invalid-feedback");
            $("#customer_name_english").removeClass("is-valid").addClass("is-invalid");
        } else if ($(this).val().match(numbers)) {
            $("#customer_name_english_feedback").html("English Numbers are not Allowed.").removeClass("valid-feedback").addClass("invalid-feedback");
            $("#customer_name_english").removeClass("is-valid").addClass("is-invalid");
        } else if ($(this).val().match(specialCharacters)) {
            $("#customer_name_english_feedback").html("Special Characters are not allowed.").removeClass("valid-feedback").addClass("invalid-feedback");
            $("#customer_name_english").removeClass("is-valid").addClass("is-invalid");
        } else {
            $("#customer_name_english_feedback").html("Looks Good!").removeClass("invalid-feedback").addClass("valid-feedback");
            $("#customer_name_english").removeClass("is-invalid").addClass("is-valid");
        }
    });

    $("#customer_address").on("blur", function () {
        let bengaliCharacterPattern = /^[\u0980-\u09FF\s]+$/;
        let bengaliNumberPattern = /^[\u09E6-\u09EF]+$/;
        let numbers = /([0-9])/;
        let specialCharacters = /[^\w\s]/gi;

        if ($(this).val() === "" || $.trim(($(this).val())) === "") {
            $("#customer_address_feedback").html("Enter Customer Address.").removeClass("valid-feedback").addClass("invalid-feedback");
            $("#customer_address").removeClass("is-valid").addClass("is-invalid");
        } else if (bengaliNumberPattern.test($(this).val())) {
            $("#customer_address_feedback").html("Bengali Numbers are not Allowed.").removeClass("valid-feedback").addClass("invalid-feedback");
            $("#customer_address").removeClass("is-valid").addClass("is-invalid");
        } else if (bengaliCharacterPattern.test($(this).val())) {
            $("#customer_address_feedback").html("Bengali Characters are not Allowed.").removeClass("valid-feedback").addClass("invalid-feedback");
            $("#customer_address").removeClass("is-valid").addClass("is-invalid");
        } else if (($(this).val()).charAt(0).match(numbers)) {
            $("#customer_address_feedback").html("Numbers at beginning are not Allowed.").removeClass("valid-feedback").addClass("invalid-feedback");
            $("#customer_address").removeClass("is-valid").addClass("is-invalid");
        } else if (($(this).val()).charAt(0).match(specialCharacters)) {
            $("#customer_address_feedback").html("Special Characters at beginning are not allowed.").removeClass("valid-feedback").addClass("invalid-feedback");
            $("#customer_address").removeClass("is-valid").addClass("is-invalid");
        } else {
            $("#customer_address_feedback").html("Looks Good!").removeClass("invalid-feedback").addClass("valid-feedback");
            $("#customer_address").removeClass("is-invalid").addClass("is-valid");
        }
    });

    $("#customer_contact").on("blur", function () {
        let phone_number_validation = /([1-9])/;

        if ($(this).val() === "" || $.trim(($(this).val())) === "") {
            $("#customer_contact_feedback").html("Enter Customer Contact Number.").removeClass("valid-feedback").addClass("invalid-feedback");
            $("#customer_contact").removeClass("is-valid").addClass("is-invalid");
        } else if (($(this).val()).length != 11 || ($(this).val()).charAt(0).match(phone_number_validation)) {
            $("#customer_contact_feedback").html("Enter Valid Contact Number.").removeClass("valid-feedback").addClass("invalid-feedback");
            $("#customer_contact").removeClass("is-valid").addClass("is-invalid");
        } else {
            $("#customer_contact_feedback").html("Looks Good!").removeClass("invalid-feedback").addClass("valid-feedback");
            $("#customer_contact").removeClass("is-invalid").addClass("is-valid");
        }
    });

    $("#customer_mfs_type").on("blur", function () {
        if (($(this).val()).length > 0) {
            $("#customer_mfs_type_feedback").html("Looks Good!").removeClass("invalid-feedback").addClass("valid-feedback");
            $("#customer_mfs_type").removeClass("is-invalid").addClass("is-valid");
        } else {
            $("#customer_mfs_type_feedback").html("").removeClass("valid-feedback");
            $("#customer_mfs_type").removeClass("is-valid");

            let Customer_mfs_number = $("#customer_mfs_number").val();
            let Customer_mfs_service = $("#customer_mfs_service").val();

            if (Customer_mfs_number.length <= 0) {
                $("#customer_mfs_number_feedback").html("").removeClass("valid-feedback invalid-feedback");
                $("#customer_mfs_number").removeClass("is-valid is-invalid");
            }

            if (Customer_mfs_service.length <= 0) {
                $("#customer_mfs_service_feedback").html("").removeClass("valid-feedback invalid-feedback");
                $("#customer_mfs_service").removeClass("is-valid is-invalid");
            }
        }
    });

    $("#customer_mfs_number").on("blur", function () {
        let phone_number_validation = /([1-9])/;

        if (($(this).val()).length <= 0) {
            $("#customer_mfs_number_feedback").html("").removeClass("valid-feedback");
            $("#customer_mfs_number").removeClass("is-valid");

            let Customer_mfs_service = $("#customer_mfs_service").val();
            let Customer_mfs_type = $("#customer_mfs_type").val();

            if (Customer_mfs_type.length <= 0) {
                $("#customer_mfs_type_feedback").html("").removeClass("valid-feedback invalid-feedback");
                $("#customer_mfs_type").removeClass("is-valid is-invalid");
            }

            if (Customer_mfs_service.length <= 0) {
                $("#customer_mfs_service_feedback").html("").removeClass("valid-feedback invalid-feedback");
                $("#customer_mfs_service").removeClass("is-valid is-invalid");
            }
        } else if (($(this).val()).length < 11 || ($(this).val()).length > 12 || ($(this).val()).charAt(0).match(phone_number_validation)) {
            $("#customer_mfs_number_feedback").html("Enter Valid MFS Number.").removeClass("valid-feedback").addClass("invalid-feedback");
            $("#customer_mfs_number").removeClass("is-valid").addClass("is-invalid");
        } else {
            $("#customer_mfs_number_feedback").html("Looks Good!").removeClass("invalid-feedback").addClass("valid-feedback");
            $("#customer_mfs_number").removeClass("is-invalid").addClass("is-valid");
        }
    });

    $("#customer_mfs_service").on("blur", function () {
        if (($(this).val()).length > 0) {
            $("#customer_mfs_service_feedback").html("Looks Good!").removeClass("invalid-feedback").addClass("valid-feedback");
            $("#customer_mfs_service").removeClass("is-invalid").addClass("is-valid");
        } else {
            $("#customer_mfs_service_feedback").html("").removeClass("valid-feedback");
            $("#customer_mfs_service").removeClass("is-valid");

            let Customer_mfs_number = $("#customer_mfs_number").val();
            let Customer_mfs_type = $("#customer_mfs_type").val();

            if (Customer_mfs_type.length <= 0) {
                $("#customer_mfs_type_feedback").html("").removeClass("valid-feedback invalid-feedback");
                $("#customer_mfs_type").removeClass("is-valid is-invalid");
            }

            if (Customer_mfs_number.length <= 0) {
                $("#customer_mfs_number_feedback").html("").removeClass("valid-feedback invalid-feedback");
                $("#customer_mfs_number").removeClass("is-valid is-invalid");
            }
        }
    });

    $("#customer_bank_account_no").on("blur", function () {
        if (($(this).val()).length > 0) {
            $("#customer_bank_account_no_feedback").html("Looks Good!").removeClass("invalid-feedback").addClass("valid-feedback");
            $("#customer_bank_account_no").removeClass("is-invalid").addClass("is-valid");
        } else {
            $("#customer_bank_account_no_feedback").html("").removeClass("valid-feedback invalid-feedback");
            $("#customer_bank_account_no").removeClass("is-valid is-invalid");

            let Customer_bank_name = $("#customer_bank_name").val();
            let Customer_bank_branch_name = $("#customer_bank_branch_name").val();

            if (Customer_bank_name.length <= 0) {
                $("#customer_bank_name_feedback").html("").removeClass("valid-feedback invalid-feedback");
                $("#customer_bank_name").removeClass("is-valid is-invalid");
            }

            if (Customer_bank_branch_name.length <= 0) {
                $("#customer_bank_branch_name_feedback").html("").removeClass("valid-feedback invalid-feedback");
                $("#customer_bank_branch_name").removeClass("is-valid is-invalid");
            }
        }
    });

    $("#customer_bank_name").on("blur", function () {
        if (($(this).val()).length > 0) {
            $("#customer_bank_name_feedback").html("Looks Good!").removeClass("invalid-feedback").addClass("valid-feedback");
            $("#customer_bank_name").removeClass("is-invalid").addClass("is-valid");
        } else {
            $("#customer_bank_name_feedback").html("").removeClass("valid-feedback invalid-feedback");
            $("#customer_bank_name").removeClass("is-valid is-invalid");

            let Customer_bank_account_no = $("#customer_bank_account_no").val();
            let Customer_bank_branch_name = $("#customer_bank_branch_name").val();

            if (Customer_bank_account_no.length <= 0) {
                $("#customer_bank_account_no_feedback").html("").removeClass("valid-feedback invalid-feedback");
                $("#customer_bank_account_no").removeClass("is-valid is-invalid");
            }

            if (Customer_bank_branch_name.length <= 0) {
                $("#customer_bank_branch_name_feedback").html("").removeClass("valid-feedback invalid-feedback");
                $("#customer_bank_branch_name").removeClass("is-valid is-invalid");
            }
        }
    });

    $("#customer_bank_branch_name").on("blur", function () {
        if (($(this).val()).length > 0) {
            $("#customer_bank_branch_name_feedback").html("Looks Good!").removeClass("invalid-feedback").addClass("valid-feedback");
            $("#customer_bank_branch_name").removeClass("is-invalid").addClass("is-valid");
        } else {
            $("#customer_bank_branch_name_feedback").html("").removeClass("valid-feedback invalid-feedback");
            $("#customer_bank_branch_name").removeClass("is-valid is-invalid");
        }
    });

    $("#customer_social_contact_number").on("blur", function () {
        let phone_number_validation = /([1-9])/;

        if ($(this).val() === "" || $.trim(($(this).val())) === "") {
            $("#customer_social_contact_number_feedback").html("Enter Customer Social Contact Number.").removeClass("valid-feedback").addClass("invalid-feedback");
            $("#customer_social_contact_number").removeClass("is-valid").addClass("is-invalid");

        } else if (($(this).val()).length != 11 || ($(this).val()).charAt(0).match(phone_number_validation)) {
            $("#customer_social_contact_number_feedback").html("Enter Valid Contact Number.").removeClass("valid-feedback").addClass("invalid-feedback");
            $("#customer_social_contact_number").removeClass("is-valid").addClass("is-invalid");

        } else {
            $("#customer_social_contact_number_feedback").html("Looks Good!").removeClass("invalid-feedback").addClass("valid-feedback");
            $("#customer_social_contact_number").removeClass("is-invalid").addClass("is-valid");

        }
    });

    $("#customer_social_contact_service").on("blur", function () {
        if ($(this).val() === "") {
            $("#customer_social_contact_service_feedback").html("Select Customer Social Contact Service.").removeClass("valid-feedback").addClass("invalid-feedback");
            $("#customer_social_contact_service").removeClass("is-valid").addClass("is-invalid");
        } else {
            $("#customer_social_contact_service_feedback").html("Looks Good!").removeClass("invalid-feedback").addClass("valid-feedback");
            $("#customer_social_contact_service").removeClass("is-invalid").addClass("is-valid");

        }
    });

    $("#createNewCustomer").on("click", function (event) {

        // Perform validation

        // Business Information
        let Customer_type = $("#customer_type").val();
        let Customer_name_bangla = $("#customer_name_bangla").val();
        let Customer_name_english = $("#customer_name_english").val();
        let Customer_address = $("#customer_address").val();
        let Customer_contact = $("#customer_contact").val();

        // MFS Information
        let Customer_mfs_service = $("#customer_mfs_service").val();
        let Customer_mfs_number = $("#customer_mfs_number").val();
        let Customer_mfs_type = $("#customer_mfs_type").val();

        // Bank Information
        let Customer_bank_account_no = $("#customer_bank_account_no").val();
        let Customer_bank_name = $("#customer_bank_name").val();
        let Customer_bank_branch_name = $("#customer_bank_branch_name").val();

        // Social Contact Information
        let Customer_social_contact_number = $("#customer_social_contact_number").val();
        let Customer_social_contact_service = $("#customer_social_contact_service").val();

        // ===========================================================================================================

        // Business Information Length
        let Customer_type_input_length = Customer_type.length;
        let Customer_name_bengali_input_length = Customer_name_bangla.length;
        let Customer_name_english_input_length = Customer_name_english.length;
        let Customer_address_input_length = Customer_address.length;
        let Customer_contact_input_length = Customer_contact.length;

        // MFS Information
        let Customer_mfs_service_input_length = Customer_mfs_service.length;
        let Customer_mfs_number_input_length = Customer_mfs_number.length;
        let Customer_mfs_type_input_length = Customer_mfs_type.length;

        // Bank Information Length
        let Customer_bank_account_no_input_length = Customer_bank_account_no.length;
        let Customer_bank_name_input_length = Customer_bank_name.length;
        let Customer_bank_branch_name_input_length = Customer_bank_branch_name.length;

        // Social Contact Length
        let Customer_social_contact_number_input_length = Customer_social_contact_number.length;
        let Customer_social_contact_service_input_length = Customer_social_contact_service.length;

        let isValid = true;

        if (Customer_type_input_length <= 0) {
            $("#customer_type_feedback").html("This field is required.").removeClass("valid-feedback").addClass("invalid-feedback");
            $("#customer_type").removeClass("is-valid").addClass("is-invalid");
            isValid = false;
        }

        if (Customer_name_bengali_input_length <= 0) {
            $("#customer_name_bangla_feedback").html("This field is required.").removeClass("valid-feedback").addClass("invalid-feedback");
            $("#customer_name_bangla").removeClass("is-valid").addClass("is-invalid");
            isValid = false;
        }

        if (Customer_name_english_input_length <= 0) {
            $("#customer_name_english_feedback").html("This field is required.").removeClass("valid-feedback").addClass("invalid-feedback");
            $("#customer_name_english").removeClass("is-valid").addClass("is-invalid");
            isValid = false;
        }

        if (Customer_address_input_length <= 0) {
            $("#customer_address_feedback").html("This field is required.").removeClass("valid-feedback").addClass("invalid-feedback");
            $("#customer_address").removeClass("is-valid").addClass("is-invalid");
            isValid = false;
        }

        if (Customer_contact_input_length <= 0) {
            $("#customer_contact_feedback").html("This field is required.").removeClass("valid-feedback").addClass("invalid-feedback");
            $("#customer_contact").removeClass("is-valid").addClass("is-invalid");
            isValid = false;
        }

        if (Customer_mfs_service_input_length > 0 && Customer_mfs_number_input_length <= 0 && Customer_mfs_type_input_length <= 0) {
            $("#customer_mfs_number_feedback").html("This field is required.").removeClass("valid-feedback").addClass("invalid-feedback");
            $("#customer_mfs_number").removeClass("is-valid").addClass("is-invalid");

            $("#customer_mfs_type_feedback").html("This field is required.").removeClass("valid-feedback").addClass("invalid-feedback");
            $("#customer_mfs_type").removeClass("is-valid").addClass("is-invalid");
            isValid = false;
        }

        if (Customer_mfs_number_input_length > 0 && Customer_mfs_type_input_length <= 0 && Customer_mfs_service_input_length <= 0) {
            $("#customer_mfs_type_feedback").html("This field is required.").removeClass("valid-feedback").addClass("invalid-feedback");
            $("#customer_mfs_type").removeClass("is-valid").addClass("is-invalid");

            $("#customer_mfs_service_feedback").html("This field is required.").removeClass("valid-feedback").addClass("invalid-feedback");
            $("#customer_mfs_service").removeClass("is-valid").addClass("is-invalid");
            isValid = false;
        }

        if (Customer_mfs_type_input_length > 0 && Customer_mfs_service_input_length <= 0 && Customer_mfs_number_input_length <= 0) {
            $("#customer_mfs_number_feedback").html("This field is required.").removeClass("valid-feedback").addClass("invalid-feedback");
            $("#customer_mfs_number").removeClass("is-valid").addClass("is-invalid");

            $("#customer_mfs_service_feedback").html("This field is required.").removeClass("valid-feedback").addClass("invalid-feedback");
            $("#customer_mfs_service").removeClass("is-valid").addClass("is-invalid");
            isValid = false;
        }

        if (Customer_mfs_service_input_length > 0 && Customer_mfs_number_input_length > 0 && Customer_mfs_type_input_length <= 0) {
            $("#customer_mfs_type_feedback").html("This field is required.").removeClass("valid-feedback").addClass("invalid-feedback");
            $("#customer_mfs_type").removeClass("is-valid").addClass("is-invalid");
            isValid = false;
        }

        if (Customer_mfs_number_input_length > 0 && Customer_mfs_type_input_length > 0 && Customer_mfs_service_input_length <= 0) {
            $("#customer_mfs_service_feedback").html("This field is required.").removeClass("valid-feedback").addClass("invalid-feedback");
            $("#customer_mfs_service").removeClass("is-valid").addClass("is-invalid");
            isValid = false;
        }

        if (Customer_mfs_type_input_length > 0 && Customer_mfs_service_input_length > 0 && Customer_mfs_number_input_length <= 0) {
            $("#customer_mfs_number_feedback").html("This field is required.").removeClass("valid-feedback").addClass("invalid-feedback");
            $("#customer_mfs_number").removeClass("is-valid").addClass("is-invalid");
            isValid = false;
        }

        if (Customer_bank_account_no_input_length > 0 && Customer_bank_name_input_length <= 0 && Customer_bank_branch_name_input_length <= 0) {
            $("#customer_bank_name_feedback").html("This field is required.").removeClass("valid-feedback").addClass("invalid-feedback");
            $("#customer_bank_name").removeClass("is-valid").addClass("is-invalid");

            $("#customer_bank_branch_name_feedback").html("This field is required.").removeClass("valid-feedback").addClass("invalid-feedback");
            $("#customer_bank_branch_name").removeClass("is-valid").addClass("is-invalid");
            isValid = false;
        }

        if (Customer_bank_name_input_length > 0 && Customer_bank_account_no_input_length <= 0 && Customer_bank_branch_name_input_length <= 0) {
            $("#customer_bank_account_no_feedback").html("This field is required.").removeClass("valid-feedback").addClass("invalid-feedback");
            $("#customer_bank_account_no").removeClass("is-valid").addClass("is-invalid");

            $("#customer_bank_branch_name_feedback").html("This field is required.").removeClass("valid-feedback").addClass("invalid-feedback");
            $("#customer_bank_branch_name").removeClass("is-valid").addClass("is-invalid");
            isValid = false;
        }

        if (Customer_bank_branch_name_input_length > 0 && Customer_bank_name_input_length <= 0 && Customer_bank_account_no_input_length <= 0) {
            $("#customer_bank_name_feedback").html("This field is required.").removeClass("valid-feedback").addClass("invalid-feedback");
            $("#customer_bank_name").removeClass("is-valid").addClass("is-invalid");

            $("#customer_bank_account_no_feedback").html("This field is required.").removeClass("valid-feedback").addClass("invalid-feedback");
            $("#customer_bank_account_no").removeClass("is-valid").addClass("is-invalid");
            isValid = false;
        }

        if (Customer_bank_account_no_input_length > 0 && Customer_bank_name_input_length > 0 && Customer_bank_branch_name_input_length <= 0) {
            $("#customer_bank_branch_name_feedback").html("This field is required.").removeClass("valid-feedback").addClass("invalid-feedback");
            $("#customer_bank_branch_name").removeClass("is-valid").addClass("is-invalid");
            isValid = false;
        }

        if (Customer_bank_name_input_length > 0 && Customer_bank_branch_name_input_length > 0 && Customer_bank_account_no_input_length <= 0) {
            $("#customer_bank_account_no_feedback").html("This field is required.").removeClass("valid-feedback").addClass("invalid-feedback");
            $("#customer_bank_account_no").removeClass("is-valid").addClass("is-invalid");
            isValid = false;
        }

        if (Customer_bank_account_no_input_length > 0 && Customer_bank_branch_name_input_length > 0 && Customer_bank_name_input_length <= 0) {
            $("#customer_bank_name_feedback").html("This field is required.").removeClass("valid-feedback").addClass("invalid-feedback");
            $("#customer_bank_name").removeClass("is-valid").addClass("is-invalid");
            isValid = false;
        }

        if (Customer_social_contact_number_input_length <= 0) {
            $("#customer_social_contact_number_feedback").html("This field is required.").removeClass("valid-feedback").addClass("invalid-feedback");
            $("#customer_social_contact_number").removeClass("is-valid").addClass("is-invalid");
            isValid = false;
        }

        if (Customer_social_contact_service_input_length == 0) {
            $("#customer_social_contact_service_feedback").html("This field is required.").removeClass("valid-feedback").addClass("invalid-feedback");
            $("#customer_social_contact_service").removeClass("is-valid").addClass("is-invalid");
            isValid = false;
        }

        // Prevent form submission if there are errors
        if ($(".is-invalid:visible").length > 0 || $(".is-invalid:visible").length > 0) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            event.preventDefault();

            // Serialize the form data into a JSON object
            let customerFormData = $("#addNewCustomerForm").serialize();

            $.ajax({
                type: "POST",
                url: '../assets/db/add-new-supplier-customer-submit.php', // Change this to the path of your PHP script
                data: customerFormData,
                success: function (response) {
                    Swal.fire({
                        toast: true,
                        title: 'New customer ' + response,
                        position: 'top-end', // Change position as needed (top-start, top-end, bottom-start, bottom-end)
                        showConfirmButton: false,
                        timer: 2000, // Duration in milliseconds (2 seconds in this example)
                        timerProgressBar: true,
                        didOpen: (toast) => {
                            toast.addEventListener('mouseenter', Swal.stopTimer)
                            toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                    });
                },
            });
            $("#addNewCustomerForm input").val("").removeClass("is-valid");
            $("#addNewCustomerForm select").val("").removeClass("is-valid");
            $("#addNewCustomerForm textarea").val("").removeClass("is-valid");
            $(".feedback").html("").removeClass("valid-feedback");
        }
    });
    // Add New Customer validation ends here   
});