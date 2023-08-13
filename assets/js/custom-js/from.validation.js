$(document).ready(function () {
    // Example starter JavaScript for disabling form submissions if there are invalid fields
    (() => {
        'use strict'

        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        const forms = document.querySelectorAll('.needs-validation')

        // Loop over them and prevent submission
        Array.from(forms).forEach(form => {
            form.addEventListener('submit', event => {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
    })()

    $("#createNewSupplier").click(function () {
        $(".mandatory_fields").each(function (e) {
            var error = false;

            var data = $(this).val();
            console.log(data);
            // console.log((i+1) + ': ' + data);
            var len = data.length;
            if (len <= 0) {
                if ($("div").hasClass("feedback")) {
                    $(".feedback")
                        .html("")
                        .addClass("feedback invalid-feedback");
                    $(this).removeClass("form-control is-valid");
                    $(this).addClass("form-control is-invalid");
                } else {
                    $("div.valid-feedback").removeClass("feedback invalid-feedback");
                    $(this).removeClass("form-control is-invalid");
                    $(this).addClass("form-control is-valid");
                    // console.log("else printing");
                }
                error = true;
                // return;
            }
            if (
                $.trim($(".name_bangla").val()) === "" ||
                $.trim($(".name_english").val()) === "" ||
                $.trim($(".contact_number").val()) === ""
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
});


// function addValidationRules() {
//     $(".name_bangla, .name_english").each(
//         (i, e) => {
//             $(e).rules("add", { required: true });
//         }
//     );
// }