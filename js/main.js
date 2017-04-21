/*global $*/

$(document).ready(function() {
    window.nav = {
        open: function() {
            $("main").css({"margin-right":"25%"});
            $("aside").css({"width":"25%"});
        },
        close: function() {
            $("main").css({"margin-right":"0"});
            $("aside").css({"width":"0"});
        }
    }
    
    $('#navClose').click(nav.close);
    $('#navOpen').click(nav.open);
});