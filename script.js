/*global $*/
$(document).ready(function() {
    var splashHeight = $('.splash').outerHeight();
    $.ajax({url: "./pages/home.html", success: function(result){
            $(".well").html(result);}});
    
    $('.fa-chevron-down').click(function(){//auto scroll with chevron
        $('body').animate({scrollTop: splashHeight}, 2000);//.scrollTop(splashHeight);
    });
    
    $(window).scroll(function(){
        var smallHeader = $('.smallHeader');
        var chevron = $('.fa-chevron-down');
        // console.log($('body').scrollTop());
        if($('body').scrollTop() > (splashHeight / 3 * 2)) {
            smallHeader.attr('hidden', false);
            chevron.hide();
        } else {
            smallHeader.attr('hidden', true);
            chevron.show();
        }
    });
    
    $('nav li').click(function() {
        var url = $(this).text().toLowerCase();
        $.ajax({url: "./pages/" + url + ".html", success: function(result){
            $(".well").html(result);
        }
        });
    });
});