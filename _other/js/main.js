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
 function calculateAltitude () {
        var elev = prompt("Please enter your elevation.", "0");
        var time = prompt("please enter your time.", "0");
        var final;
        if (elev < 3124 || elev === "null") {
        alert("Your speed wouldn't change with this altitude!");
    }
        else if (elev < 4009 && elev > 3124) {
        final=time - 12.29;
        alert("Your time would be "+final+" seconds!");
    }
        else if (elev < 6001 && elev > 4009) {
            final=time - 17.36;
        alert("Your time would be "+final+" seconds less!");
    }   
        else if (elev < 7703 && elev > 6001) {
        final=time - 32.76;
        alert("Your time would be "+final+" seconds less!");
    }
        else {
        alert("Invalid Input!");    
    }
}
document.getElementById('altitudecalc').innerHTML.onclick=calculateAltitude();