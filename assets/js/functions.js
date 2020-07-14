$(function() {
	workBelt();
	workBelt6();
	workLoad();
	workLoad6();
	clientStuff();
	scrollStick();
	stateChange();


	
	
	$("header h1").fitText(1, { minFontSize: '50px', maxFontSize: '72px' });
	
});


function stateChange() {

	$('.services-content').hover(function() {
	     $('.services-full', $(this)).slideToggle(100, 'linear').display(100, 'linear');
	});


}

function workBelt() {

	$('.thumb-unit').click(function() {
		$('.work-belt').css('left','-100%');
		$('.work-container').show();
	});

	$('.work-return').click(function() {
		$('.work-belt').css('left','0%');
		$('.work-container').hide(800);
	});

}


function workLoad() {
  
  $.ajaxSetup({ cache: true });
  
  $('.thumb-unit').click(function() {
  
  	var $this = $(this),
  		newTitle = $this.find('strong').text(),
  		newfolder = $this.data('folder'),
  		spinner = '<div class="loader">Loading...</div>',
  		newHTML = '/work/'+ newfolder +'.html';
  	$('.project-load').html(spinner).load(newHTML);
  	$('.project-title').text(newTitle);
  });
  
 }
 
 
 
function workBelt6() {
 
	$('.thumb-unit-01').click(function() {
 		$('.work-belt').css('left','-100%');
 		$('.work-container').show();
 	});
 
 	$('.work-return').click(function() {
 		$('.work-belt').css('left','0%');
 		$('.work-container').hide(800);
 	});
 
}
 
 
function workLoad6() {
  
  $.ajaxSetup({ cache: true });
  
  $('.thumb-unit-01').click(function() {
  
  	var $this = $(this),
  		newTitle = $this.find('strong').text(),
  		newfolder = $this.data('folder'),
  		spinner = '<div class="loader">Loading...</div>',
  		newHTML = '/work/'+ newfolder +'.html';
  	$('.project-load').html(spinner).load(newHTML);
  	$('.project-title').text(newTitle);
  });
  
 }
 
 
 
 
function clientStuff() {
 
 	$('.client-unit').first().addClass('active-client');
 	$('.client-logo').first().addClass('active-client');
 	$('.clients-mobile-nav span').first().addClass('active-client');
 	
 	$('.client-logo, .clients-mobile-nav span').click(function() {
 		var $this = $(this),
 			$siblings = $this.parent().children(),
 			position = $siblings.index($this);
 			
		$('.client-unit').removeClass('active-client').eq(position).addClass('active-client');
		$siblings.removeClass('active-client');
		$this.addClass('active-client');
	});
	
	$('.client-control-next, .client-control-prev').click(function() {
		
		var $this = $(this),
			curActiveClient = $('.clients-belt').find('.active-client'),
			position = $('.clients-belt').children().index(curActiveClient),
			clientNum = $('.client-unit').length;
		if($this.hasClass('client-control-next')) {		
			if(position < clientNum -1){ 
				$('.active-client').removeClass('active-client').next().addClass('active-client');	
			} else {
				$('.client-unit').removeClass('active-client').first().addClass('active-client');
				$('.client-logo').removeClass('active-client').first().addClass('active-client');
			}
		} else {
			
			if (position === 0) {
				$('.client-unit').removeClass('active-client').last().addClass('active-client');
				$('.client-logo').removeClass('active-client').last().addClass('active-client');
			
			} else { 
			$('.active-client').removeClass('active-client').prev().addClass('active-client');
			}
			
		}
				
			
	});
	
 }
 
 

(function( $ ){

  $.fn.fitText = function( kompressor, options ) {

    // Setup options
    var compressor = kompressor || 1,
        settings = $.extend({
          'minFontSize' : Number.NEGATIVE_INFINITY,
          'maxFontSize' : Number.POSITIVE_INFINITY
        }, options);

    return this.each(function(){

      // Store the object
      var $this = $(this);

      // Resizer() resizes items based on the object width divided by the compressor * 10
      var resizer = function () {
        $this.css('font-size', Math.max(Math.min($this.width() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
      };

      // Call once to set.
      resizer();

      // Call on resize. Opera debounces their resize by default.
      $(window).on('resize.fittext orientationchange.fittext', resizer);

    });

  };

})( jQuery );
