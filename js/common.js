$(document).ready(function () {

    
    var userMail = $('.user-email'),
        saveEdit = $('.save-edit');

    saveEdit.click(function(){

        if ($(this).text() == "Edit") { 
            $(this).text("Save"); 
        } else { 
            $(this).text("Edit"); 
        }

        userMail.toggleClass('edit');

        var userMailAttr = $('.user-email').attr('contenteditable');
        if(userMailAttr == 'false') {
            userMail.attr('contenteditable', 'true')
        } else {
            userMail.attr('contenteditable', 'false')
        }
    });

});