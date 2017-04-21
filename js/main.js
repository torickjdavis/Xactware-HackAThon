/*global $*/

$(document).ready(function() {
    window.nav = {
        open: function() {
            $("main").css({"margin-right":"25%"});
            $("aside").css({"width":"25%"});
            $("header")
            console.log("Nav:Open");
        },
        close: function() {
            $("main").css({"margin-right":"0"});
            $("aside").css({"width":"0"});
            console.log("Nav:Close");
        }
    }
    
    $('#navClose').click(nav.close);
    $('#navOpen').click(nav.open);
});