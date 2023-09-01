<?php
require 'connection.php';

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
} else {

    // Insert Customer Type Data
    if (isset($_REQUEST['supplier_type'], $_REQUEST['supplier_name_bangla'], $_REQUEST['supplier_name_english'], $_REQUEST['supplier_address'], $_REQUEST['supplier_contact'], $_REQUEST['supplier_location'], $_REQUEST['supplier_bin_number'], $_REQUEST['supplier_tin_number'], $_REQUEST['supplier_vat_percentage'], $_REQUEST['supplier_owner_name'], $_REQUEST['supplier_owner_contact'], $_REQUEST['supplier_owner_email'], $_REQUEST['supplier_contact_person_name'], $_REQUEST['supplier_contact_person_designation'], $_REQUEST['supplier_contact_person_contact'], $_REQUEST['supplier_mfs_service'], $_REQUEST['supplier_mfs_number'], $_REQUEST['supplier_mfs_type'], $_REQUEST['supplier_bank_account_no'], $_REQUEST['supplier_bank_name'], $_REQUEST['supplier_bank_branch_name'], $_REQUEST['supplier_social_contact_number'], $_REQUEST['supplier_social_contact_service'], $_REQUEST['supplier_social_contact_email'])) {

        // Empty Value Information
        $empty_value = 'N/A';

        // Get Business Information
        $supplier_type = $_REQUEST['supplier_type'];
        $supplier_name_bangla = $_REQUEST['supplier_name_bangla'];
        $supplier_name_english = $_REQUEST['supplier_name_english'];
        $supplier_address = $_REQUEST['supplier_address'];
        $supplier_contact = $_REQUEST['supplier_contact'];
        $supplier_location = $_REQUEST['supplier_location'];
        $supplier_bin_number = empty($_REQUEST['supplier_bin_number']) ? $empty_value : $_REQUEST['supplier_bin_number'];
        $supplier_tin_number = empty($_REQUEST['supplier_tin_number']) ? $empty_value : $_REQUEST['supplier_tin_number'];
        $supplier_vat_percentage = empty($_REQUEST['supplier_vat_percentage']) ? $empty_value : $_REQUEST['supplier_vat_percentage'];

        // Get Owner Information
        $supplier_owner_name = empty($_REQUEST['supplier_owner_name']) ? $empty_value : $_REQUEST['supplier_owner_name'];
        $supplier_owner_contact = empty($_REQUEST['supplier_owner_contact']) ? $empty_value : $_REQUEST['supplier_owner_contact'];
        $supplier_owner_email = empty($_REQUEST['supplier_owner_email']) ? $empty_value : $_REQUEST['supplier_owner_email'];

        // Get Key Contact Person Information
        $supplier_contact_person_name = empty($_REQUEST['supplier_contact_person_name']) ? $empty_value : $_REQUEST['supplier_contact_person_name'];
        $supplier_contact_person_designation = empty($_REQUEST['supplier_contact_person_designation']) ? $empty_value : $_REQUEST['supplier_contact_person_designation'];
        $supplier_contact_person_contact = empty($_REQUEST['supplier_contact_person_contact']) ? $empty_value : $_REQUEST['supplier_contact_person_contact'];

        // Get MFS Information
        $supplier_mfs_service = empty($_REQUEST['supplier_mfs_service']) ? $empty_value : $_REQUEST['supplier_mfs_service'];
        $supplier_mfs_number = empty($_REQUEST['supplier_mfs_number']) ? $empty_value : $_REQUEST['supplier_mfs_number'];
        $supplier_mfs_type = empty($_REQUEST['supplier_mfs_type']) ? $empty_value : $_REQUEST['supplier_mfs_type'];

        // Get Bank Information
        $supplier_bank_account_no = empty($_REQUEST['supplier_bank_account_no']) ? $empty_value : $_REQUEST['supplier_bank_account_no'];
        $supplier_bank_name = empty($_REQUEST['supplier_bank_name']) ? $empty_value : $_REQUEST['supplier_bank_name'];
        $supplier_bank_branch_name = empty($_REQUEST['supplier_bank_branch_name']) ? $empty_value : $_REQUEST['supplier_bank_branch_name'];

        // Get Social Contact Information
        $supplier_social_contact_number = $_REQUEST['supplier_social_contact_number'];
        $supplier_social_contact_service = $_REQUEST['supplier_social_contact_service'];
        $supplier_social_contact_email = empty($_REQUEST['supplier_social_contact_email']) ? $empty_value : $_REQUEST['supplier_social_contact_email'];

        // Generate Slug
        $slug = strtolower(str_replace(' ', '-', $supplier_name_english));

        $sql = "INSERT INTO `add_supplier` (supplier_id, supplier_type, supplier_name_bangla, supplier_name_english, supplier_address, supplier_contact, supplier_location, supplier_bin_number, supplier_tin_number, supplier_vat_percentage, supplier_owner_name, supplier_owner_contact, supplier_owner_email, supplier_contact_person_name, supplier_contact_person_designation, supplier_contact_person_contact, supplier_mfs_service, supplier_mfs_number, supplier_mfs_type, supplier_bank_account_no, supplier_bank_name, supplier_bank_branch_name, supplier_social_contact_number, supplier_social_contact_service, supplier_social_contact_email, slug) VALUES ('','$supplier_type', '$supplier_name_bangla', '$supplier_name_english', '$supplier_address', '$supplier_contact', '$supplier_location', '$supplier_bin_number', '$supplier_tin_number', '$supplier_vat_percentage', '$supplier_owner_name', '$supplier_owner_contact', '$supplier_owner_email', '$supplier_contact_person_name', '$supplier_contact_person_designation', '$supplier_contact_person_contact', '$supplier_mfs_service', '$supplier_mfs_number', '$supplier_mfs_type', '$supplier_bank_account_no', '$supplier_bank_name', '$supplier_bank_branch_name', '$supplier_social_contact_number', '$supplier_social_contact_service', '$supplier_social_contact_email', '$slug')";

        $result = mysqli_query($conn, $sql);

        if ($result) {
            echo "added successfully";
        } else {
            echo "addition failed";
        }
    }

    // Insert Customer Type Data
    if (isset($_REQUEST['customer_type'], $_REQUEST['customer_name_bangla'], $_REQUEST['customer_name_english'], $_REQUEST['customer_address'], $_REQUEST['customer_contact'], $_REQUEST['customer_location'], $_REQUEST['customer_bin_number'], $_REQUEST['customer_tin_number'], $_REQUEST['customer_vat_percentage'], $_REQUEST['customer_owner_name'], $_REQUEST['customer_owner_contact'], $_REQUEST['customer_owner_email'], $_REQUEST['customer_key_contact_person_name'], $_REQUEST['customer_key_contact_person_designation'], $_REQUEST['customer_key_contact_person_contact'], $_REQUEST['customer_mfs_service'], $_REQUEST['customer_mfs_number'], $_REQUEST['customer_mfs_type'], $_REQUEST['customer_bank_account_no'], $_REQUEST['customer_bank_name'], $_REQUEST['customer_bank_branch_name'], $_REQUEST['customer_social_contact_number'], $_REQUEST['customer_social_contact_service'], $_REQUEST['customer_social_contact_email'])) {

        // Empty Value Information
        $empty_value = 'N/A';

        // Get Business Information
        $customer_type = $_REQUEST['customer_type'];
        $customer_name_bangla = $_REQUEST['customer_name_bangla'];
        $customer_name_english = $_REQUEST['customer_name_english'];
        $customer_address = $_REQUEST['customer_address'];
        $customer_contact = $_REQUEST['customer_contact'];
        $customer_location = $_REQUEST['customer_location'];
        $customer_bin_number = empty($_REQUEST['customer_bin_number']) ? $empty_value : $_REQUEST['customer_bin_number'];
        $customer_tin_number = empty($_REQUEST['customer_tin_number']) ? $empty_value : $_REQUEST['customer_tin_number'];
        $customer_vat_percentage = empty($_REQUEST['customer_vat_percentage']) ? $empty_value : $_REQUEST['customer_vat_percentage'];

        // Get Owner Information
        $customer_owner_name = empty($_REQUEST['customer_owner_name']) ? $empty_value : $_REQUEST['customer_owner_name'];
        $customer_owner_contact = empty($_REQUEST['customer_owner_contact']) ? $empty_value : $_REQUEST['customer_owner_contact'];
        $customer_owner_email = empty($_REQUEST['customer_owner_email']) ? $empty_value : $_REQUEST['customer_owner_email'];

        // Get Key Contact Person Information
        $customer_key_contact_person_name = empty($_REQUEST['customer_key_contact_person_name']) ? $empty_value : $_REQUEST['customer_key_contact_person_name'];
        $customer_key_contact_person_designation = empty($_REQUEST['customer_key_contact_person_designation']) ? $empty_value : $_REQUEST['customer_key_contact_person_designation'];
        $customer_key_contact_person_contact = empty($_REQUEST['customer_key_contact_person_contact']) ? $empty_value : $_REQUEST['customer_key_contact_person_contact'];

        // Get MFS Information
        $customer_mfs_service = empty($_REQUEST['customer_mfs_service']) ? $empty_value : $_REQUEST['customer_mfs_service'];
        $customer_mfs_number = empty($_REQUEST['customer_mfs_number']) ? $empty_value : $_REQUEST['customer_mfs_number'];
        $customer_mfs_type = empty($_REQUEST['customer_mfs_type']) ? $empty_value : $_REQUEST['customer_mfs_type'];

        // Get Bank Information
        $customer_bank_account_no = empty($_REQUEST['customer_bank_account_no']) ? $empty_value : $_REQUEST['customer_bank_account_no'];
        $customer_bank_name = empty($_REQUEST['customer_bank_name']) ? $empty_value : $_REQUEST['customer_bank_name'];
        $customer_bank_branch_name = empty($_REQUEST['customer_bank_branch_name']) ? $empty_value : $_REQUEST['customer_bank_branch_name'];

        // Get Social Contact Information
        $customer_social_contact_number = $_REQUEST['customer_social_contact_number'];
        $customer_social_contact_service = $_REQUEST['customer_social_contact_service'];
        $customer_social_contact_email = empty($_REQUEST['customer_social_contact_email']) ? $empty_value : $_REQUEST['customer_social_contact_email'];

        // Generate Slug
        $slug = strtolower(str_replace(' ', '-', $customer_name_english));

        $sql = "INSERT INTO `add_customer` (customer_id, customer_type, customer_name_bangla, customer_name_english, customer_address, customer_contact, customer_location, customer_bin_number, customer_tin_number, customer_vat_percentage, customer_owner_name, customer_owner_contact, customer_owner_email, customer_key_contact_person_name, customer_key_contact_person_designation, customer_key_contact_person_contact, customer_mfs_service, customer_mfs_number, customer_mfs_type, customer_bank_account_no, customer_bank_name, customer_bank_branch_name, customer_social_contact_number, customer_social_contact_service, customer_social_contact_email, slug) VALUES ('','$customer_type', '$customer_name_bangla', '$customer_name_english', '$customer_address', '$customer_contact', '$customer_location', '$customer_bin_number', '$customer_tin_number', '$customer_vat_percentage', '$customer_owner_name', '$customer_owner_contact', '$customer_owner_email', '$customer_key_contact_person_name', '$customer_key_contact_person_designation', '$customer_key_contact_person_contact', '$customer_mfs_service', '$customer_mfs_number', '$customer_mfs_type', '$customer_bank_account_no', '$customer_bank_name', '$customer_bank_branch_name', '$customer_social_contact_number', '$customer_social_contact_service', '$customer_social_contact_email', '$slug')";

        $result = mysqli_query($conn, $sql);

        if ($result) {
            echo "added successfully";
        } else {
            echo "addition failed";
        }
    }
}
mysqli_close($conn);
