/*global $*/

$(document).ready(function() {
    dynamicBits();
});

function dynamicBits() {
    generateNav();
    $('.external').each(function() {
        $(this).before('<i class="fa fa-external-link" aria-hidden="true"></i>');
        $(this).attr('target','_blank');
    });
    $('footer').html('&copy; 2017 | AF "Herald" Team');
}

function generateNav() {
        var nav = {
            toggle: function() {
                var navToggler = $("#navToggler");
                var navIcon = navToggler.children().first();
                if(this.isOpen) {
                    $("main").css({"margin-right":"0"});
                    $("aside").css({"width":"0"});
                    navIcon.removeClass('fa-times');
                    navIcon.addClass('fa-bars');
                    this.isOpen = false;
                } else {
                    $("main").css({"margin-right":"25%"});
                    $("aside").css({"width":"25%"});
                    navIcon.removeClass('fa-bars');
                    navIcon.addClass('fa-times');
                    this.isOpen = true;
                }
                
            },
            isOpen: false
    }
    $('#navToggler').click(nav.toggle);
}