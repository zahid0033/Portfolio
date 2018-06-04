(function($){
jQuery(function(){
    // Stats Count To
        //-----------------------------------------------
        /*  */
        if ($(".stats [data-to]").length>0) {
            $(".stats [data-to]").each(function() {
                var stat_item = $(this),
                offset = stat_item.offset().top;
                if($(window).scrollTop() > (offset - 800) && !(stat_item.hasClass('counting'))) {
                    stat_item.addClass('counting');
                    stat_item.countTo();
                };
                $(window).scroll(function() {
                    if($(window).scrollTop() > (offset - 800) && !(stat_item.hasClass('counting'))) {
                        stat_item.addClass('counting');
                        stat_item.countTo();
                    }
                });
            });
        };
    }
    ); 

})(this.jQuery);