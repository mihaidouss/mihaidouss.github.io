// Clicking menu item will cause popup menu to close (by unchecking checkbox that controls hamburger menu)

$(function() {

    $("#menu li").click(function() {
        $('input[type=checkbox]').prop('checked', false)
    });

});