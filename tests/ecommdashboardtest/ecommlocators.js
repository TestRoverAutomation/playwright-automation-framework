export const dashboard_locators = {
    edit_account_loc: ' Edit your account information',
    firstName_loc: '#input-firstname',
    lastName_loc: '#input-lastname',
    click_continue: "input[value='Continue']",
    account_updated: ' Success: Your account has been successfully updated.'
}

export const ete_test_locators = {
    shop_by_category_loc: {role: 'button', name:'Shop by Category'},
    laptop_Notebook_loc: {role: 'link', name: ' Laptops & Notebooks'},
    laptop_header: { role:'heading', name: 'Laptops' },
    click_on_HTC_Touch: { role: 'link', name: 'HTC Touch HD HTC Touch HD HTC' },
    add_cart_btn : { role: 'button', name: 'Add to Cart' },
    view_cart_btn: {role: 'link', name: 'View Cart ' },
    inputbox_cartpage: "form[action^='https://ecommerce-playground.lambdatest.io/index.php?route=checkout/cart/edit'] input",
    clickOnUpdate_btn: {role: 'button', name: '' },
    checkout_btn: {role:'link', name: 'Checkout' },
    add_comment_box: 'Add Comments About Your Order',
    term_condition_checkbox: 'I have read and agree to the Terms & Conditions',
    continue_btn: {role:'button', name: 'Continue ' },
    Product_Name: "//td[normalize-space()='HTC Touch HD']",
    Model: "//td[normalize-space()='Product 1']",
    Quantity: "//td[normalize-space()='5']",
    Price	: "//td[normalize-space()='$120.00']",
    Total: "(//td[contains(text(),'$600.00')])[2]",
    confirm_order_btn: {role: 'button',name: 'Confirm Order ' },
    yourOrderHearder: {role: 'heading',name: ' Your order has been placed!' }
}