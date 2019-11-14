// for wordpress  jQuery(function ($) {
(function() {

    $(window).on('load', function(){
        $("body").addClass("load-done");

    });

    $(document).scroll(function(e){

    });

    $(window).resize(function(){
        var w = $(window).width();
        if(w > 992) {
            $("body").removeClass('menu-active');
            $(".hamburger-menu-icon").removeClass('active');
        }
    });     

    $(document).scroll(function(e){
        sticky();
    });

    sticky();

    $(".hamburger-menu-icon").click(function(e){
        e.preventDefault();
		$(this).toggleClass("active");
		$("body").toggleClass("menu-active");
    });    

    $("header nav ul > li > a").click(function(e) {
        e.preventDefault();
        var headeH = $("header").height();
        var aid = $(this).attr("href");
        $('html,body').animate({scrollTop: $(aid).offset().top - headeH},'slow');

        $("body").removeClass('menu-active');
        $(".hamburger-menu-icon").removeClass('active');        
    });

    $(".selling").click(function(e) {
        e.preventDefault();
        var headeH = $("header").height();
        var aid = $(this).attr("href");
        $('html,body').animate({scrollTop: $(aid).offset().top - headeH},'slow');
        console.log("s");
    });

    function sticky(){
        var fromTop = $(document).scrollTop();
        if(fromTop>10){
            $("body").addClass("sticky");
        } else{
            $("body").removeClass("sticky");
        }
    }






})();

// for wordpress });



