$(document).ready(function () {

    $(".main-nav").clone().appendTo(".mobile-header__nav");

    $('.hamburger').on('click', function () {
        $(this).toggleClass('is-active');
        $('.mobile-header__nav').toggleClass('on-off');
        searchBlockMobile.removeClass('on-off');
      });

    
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