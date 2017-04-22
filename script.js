/*global $*/
$(document).ready(function() {
    var splashHeight = $('.splash').outerHeight();
    $.ajax({url: "./pages/home.html", success: function(result){
        checkExternal();    
        $(".well").html(result);
        
    }});
    
    checkMobile();
    
    $('.fa-chevron-down').click(function(){//auto scroll with chevron
        var height = splashHeight / 4 * 3;
        $('body').animate({scrollTop: height}, 2000);//.scrollTop(splashHeight);
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
    
    function checkExternal() {
        $('.external').each(function() {
            //$(this).before('<i class="fa fa-external-link" aria-hidden="true"></i>');
            $(this).attr('target','_blank');
        });
    }
    
    function checkMobile() {
        
        if(window.innerWidth <= 800) {
            $('.smallHeader').css({'background':'rgba(245,245,245,0.95'});
        }
    }
});