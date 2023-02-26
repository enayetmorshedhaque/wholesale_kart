jQuery(document).ready(function () {
    $('#addNewRow').click(function () {
        table_input_one = '<td><input type="text" placeholder="Book Name (Required)" class="rounded-0 bookDetail bookName"</td>';
        table_input_two = '<td><input type="text" placeholder="Unit (Required)" class="rounded-0 bookDetail bookQuantity"</td>';
        table_input_three = '<td><input type="text" placeholder="Published Price (Required)" class="rounded-0 bookDetail bookPublishedPrice"></td>';
        table_input_four = '<td><input type="text" placeholder="Selling Price (Required)" class="rounded-0 bookDetail bookSellPrice"></td>';
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
