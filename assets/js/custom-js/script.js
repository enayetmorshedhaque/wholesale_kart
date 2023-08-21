$(document).ready(function () {
    $("form").addClass("was-validate");

    $("#add_mfs_type_input").on("blur", function () {
        let numbers = /([0-9])/;
        let specialCharacters = /[^\w\s]/gi;

        if ($(this).val() === "" || $.trim(($(this).val())) === "") {

            $("#mfs_type_feedback").html("Enter Mfs Type.").removeClass("valid-feedback").addClass("invalid-feedback");
            $("#add_mfs_type_input").removeClass("is-valid").addClass("is-invalid");

        } else if ($(this).val().match(numbers)) {

            $("#mfs_type_feedback").html("Numbers are not allowed.").removeClass("valid-feedback").addClass("invalid-feedback");
            $("#add_mfs_type_input").removeClass("is-valid").addClass("is-invalid");

        } else if ($(this).val().match(specialCharacters)) {

            $("#mfs_type_feedback").html("Special Characters are not allowed.").removeClass("valid-feedback").addClass("invalid-feedback");
            $("#add_mfs_type_input").removeClass("is-valid").addClass("is-invalid");

        } else {

            $("#mfs_type_feedback").html("Looks good!").removeClass("invalid-feedback").addClass("valid-feedback");
            $("#add_mfs_type_input").removeClass("is-invalid").addClass("is-valid");

        }
    });

    $("#addMfsType").on("click", function (event) {

        // Perform validation
        let mfs_type_input = $("#add_mfs_type_input").val();
        let input_length = mfs_type_input.length;
        let isValid = true;

        if (input_length <= 0) {
            $("#mfs_type_feedback").html("This field is required.").removeClass("valid-feedback").addClass("invalid-feedback");
            $("#add_mfs_type_input").removeClass("is-valid").addClass("is-invalid");
            isValid = false;
        }

        // Prevent form submission if there are errors
        if ($(".invalid-feedback:visible").length > 0 || $(".is-invalid:visible").length > 0) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            event.preventDefault();
            $.ajax({
                type: "POST",
                url: "../assets/db/dynamic-settings-data-submit.php",
                data: {
                    "checking_submit_btn": 1,
                    "add_mfs_type": mfs_type_input,
                },
                success: function (response) {
                    Swal.fire({
                        toast: true,
                        title: 'Data ' + response,
                        position: 'top-end', // Change position as needed (top-start, top-end, bottom-start, bottom-end)
                        showConfirmButton: false,
                        timer: 3000, // Duration in milliseconds (3 seconds in this example)
                        timerProgressBar: true,
                        didOpen: (toast) => {
                            toast.addEventListener('mouseenter', Swal.stopTimer)
                            toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                    });
                },
            });
            $("#add_mfs_type_input").val("");
            $("#mfs_type_feedback").html("").removeClass("valid-feedback");
            $("#add_mfs_type_input").removeClass("is-valid");
        }
    });
});
