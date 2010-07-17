;(function($) {
    
    $.fn.fancyHover = function(options) {
        
        var options = $.extend({}, $.fn.fancyHover.defaults, options);
        
        return this.each(function() {
        
            var element = $(this);
            
            element.hover(
                function() {
                    $(this).css({'z-index' : '10'}); 
                    //$('body').css({'opacity': '0.2'});
                    $(this).find('.fancy-item').addClass("hover").stop() 
                		.animate({
                			marginTop: '-110px', 
                			marginLeft: '-110px',
                			top: '50%',
                			left: '50%',
                			width: '174px', 
                			height: '174px', 
                			padding: '20px'
                		}, 200); 
                },
                function() {
                    $(this).css({'z-index' : '0'}); 
                    //$('body').css({'opacity': '1'});
                    $(this).find('.fancy-item').removeClass("hover").stop()  
                		.animate({
                			marginTop: '0', 
                			marginLeft: '0',
                			top: '0',
                			left: '0',
                			width: '100px', 
                			height: '100px',
                			padding: '5px'
                		}, 300);
                }
            );
        });
    };
    
    $.fn.fancyHover.defaults = {
    }
    
    
})(jQuery);
