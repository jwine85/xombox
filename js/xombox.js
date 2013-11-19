$(document).ready(function(){
	$('section[data-type="background"]').each(function(){
		var $bgobj = $(this) //assigning the object
		$(window).scroll(function(){
			var yPos = -($window.scrollTop() / $bgobj.data('speed'));
			//Get Background Position
			var coords = '50% ' + yPos + 'px'; 
			//Move Background
			$bgobj.css({backgroundPosition: coords});
		});
;	});
});