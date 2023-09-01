<?php
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

    $sql = "INSERT INTO `add_supplier` (customer_id, customer_type, customer_name_bangla, customer_name_english, customer_address, customer_contact, customer_location, customer_bin_number, customer_tin_number, customer_vat_percentage, customer_owner_name, customer_owner_contact, customer_owner_email, customer_key_contact_person_name, customer_key_contact_person_designation, customer_key_contact_person_contact, customer_mfs_service, customer_mfs_number, customer_mfs_type, customer_bank_account_no, customer_bank_name, customer_bank_branch_name, customer_social_contact_number, customer_social_contact_service, customer_social_contact_email, slug) VALUES ('','$customer_type', '$customer_name_bangla', '$customer_name_english', '$customer_address', '$customer_contact', '$customer_location', '$customer_bin_number', '$customer_tin_number', '$customer_vat_percentage', '$customer_owner_name', '$customer_owner_contact', '$customer_owner_email', '$customer_key_contact_person_name', '$customer_key_contact_person_designation', '$customer_key_contact_person_contact', '$customer_mfs_service', '$customer_mfs_number', '$customer_mfs_type', '$customer_bank_account_no', '$customer_bank_name', '$customer_bank_branch_name', '$customer_social_contact_number', '$customer_social_contact_service', '$customer_social_contact_email', '$slug')";

    $result = mysqli_query($conn, $sql);

    if ($result) {
        echo "added successfully";
    } else {
        echo "addition failed";
    }
}

?>
CREATE TABLE `add_customer` (
`customer_id` int(11) NOT NULL,
`customer_type` int(11) NOT NULL,
`customer_name_bangla` text NOT NULL,
`customer_name_english` text NOT NULL,
`customer_address` text NOT NULL,
`customer_contact` varchar(12) NOT NULL,
`customer_location` varchar(15) NOT NULL,
`customer_bin_number` varchar(20) NOT NULL,
`customer_tin_number` varchar(20) NOT NULL,
`customer_vat_percentage` float NOT NULL,
`customer_owner_name` text NOT NULL,
`customer_owner_contact` varchar(12) NOT NULL,
`customer_owner_email` text NOT NULL,
`customer_key_contact_person_name` text NOT NULL,
`customer_key_contact_person_designation` text NOT NULL,
`customer_key_contact_person_contact` varchar(12) NOT NULL,
`customer_mfs_service` int(11) NOT NULL,
`customer_mfs_number` varchar(12) NOT NULL,
`customer_mfs_type` int(11) NOT NULL,
`customer_bank_account_no` varchar(20) NOT NULL,
`customer_bank_name` text NOT NULL,
`customer_bank_branch_name` text NOT NULL,
`customer_social_contact_number` varchar(12) NOT NULL,
`customer_social_contact_service` int(11) NOT NULL,
`customer_social_contact_email` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;