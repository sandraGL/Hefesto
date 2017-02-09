var advanced_search_link = window.document.getElementById('advanced_search_link');
var sign_in_link = window.document.getElementById('sign_in_link');
var user_menu_link = window.document.getElementById('user_menu_link');
var profile_link_big = window.document.getElementById("profile_link_big");
var edit_profile_data = window.document.getElementById('edit_profile_data');
var cancel_profile_edit = window.document.getElementById('cancel_profile_edit');
var sell_link_big = window.document.getElementById("sell_link_big");
var my_products_link_big = window.document.getElementById("my_products_link_big");
var basket_link_big = window.document.getElementById("basket_link_big");
var my_sales_link_big = window.document.getElementById("my_sales_link_big");


advanced_search_link.addEventListener('click', function() {
    if (window.document.getElementById('advanced_search').style.display == 'block') {
        window.document.getElementById('advanced_search').style.display = 'none';
    } else window.document.getElementById('advanced_search').style.display = 'block';

});
sign_in_link.addEventListener('click', function() {
    if (window.document.getElementById('sign_in').style.display == 'block') {
        window.document.getElementById('sign_in').style.display = 'none';
    } else window.document.getElementById('sign_in').style.display = 'block';
});
user_menu_link.addEventListener('click', function() {
    if (window.document.getElementById('user_menu').style.display == 'block') {
        window.document.getElementById('user_menu').style.display = 'none';
    } else window.document.getElementById('user_menu').style.display = 'block';
});

profile_link_big.addEventListener('click', function() {
    window.document.getElementById('sales_div').classList.add("hide");
    window.document.getElementById('my_products').classList.add("hide");
    window.document.getElementById('basket_div').classList.add("hide");
    window.document.getElementById('sell_div').classList.add("hide");
    window.document.getElementById('profile_div').classList.remove("hide");
});

edit_profile_data.addEventListener('click', function() {
    window.document.getElementById('data_profile_div').classList.add('hide');
    window.document.getElementById('edit_profile_div').classList.remove('hide');
    window.document.getElementById('edit_profile_data').classList.add('hide');
});

cancel_profile_edit.addEventListener('click', function() {
    window.document.getElementById('edit_profile_div').classList.add('hide');
    window.document.getElementById('data_profile_div').classList.remove('hide');
    window.document.getElementById('edit_profile_data').classList.remove('hide');
});
sell_link_big.addEventListener('click', function() {
    window.document.getElementById('profile_div').classList.add("hide");
    window.document.getElementById('sales_div').classList.add("hide");
    window.document.getElementById('my_products').classList.add("hide");
    window.document.getElementById('basket_div').classList.add("hide");
    window.document.getElementById('sell_div').classList.remove("hide");
});

my_products_link_big.addEventListener('click', function() {
    window.document.getElementById('profile_div').classList.add("hide");
    window.document.getElementById('sales_div').classList.add("hide");
    window.document.getElementById('basket_div').classList.add("hide");
    window.document.getElementById('sell_div').classList.add("hide");
    window.document.getElementById('my_products').classList.remove("hide");
});
basket_link_big.addEventListener('click', function() {
    window.document.getElementById('profile_div').classList.add("hide");
    window.document.getElementById('sales_div').classList.add("hide");
    window.document.getElementById('my_products').classList.add("hide");
    window.document.getElementById('sell_div').classList.add("hide");
    window.document.getElementById('basket_div').classList.remove("hide");
});

my_sales_link_big.addEventListener('click', function() {
    window.document.getElementById('profile_div').classList.add("hide");
    window.document.getElementById('my_products').classList.add("hide");
    window.document.getElementById('sell_div').classList.add("hide");
    window.document.getElementById('basket_div').classList.add("hide");
    window.document.getElementById('sales_div').classList.remove("hide");
});