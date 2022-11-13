jQuery(document).ready(function () {
    $('#addNewRow').click(function () {
        table_input_one = '<td><input type="text" class="rounded-0 bookDetail book-name"></td>';
        table_input_two = '<td><input type="text" class="rounded-0 bookDetail book-quantity"></td>';
        table_input_three = '<td><input type="text" class="rounded-0 bookDetail book-published-price"></td>';
        table_input_four = '<td> <input type="text" class="rounded-0 bookDetail book-sell-price"></td>';
        table_input_five = '<td><button class="btn btn-danger deleteThis"><i class="fa-solid fa-trash"></i></button></td>';

        markup =
            "<tr>" + table_input_one + table_input_two + table_input_three + table_input_four + table_input_five + "</tr>";
        tableBody = $("table tbody");
        tableBody.append(markup);
    })

    $("#invoiceTable").on('click', '.deleteThis', function () {
        $(this).closest('tr').remove();
    });
});
