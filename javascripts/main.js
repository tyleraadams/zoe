
$(document).ready(function() {
	// get the value of the bottom of the #main element by adding the offset of that element plus its height, set it as a variable
	var headerPhotoHeight =  $('.header_photo').height();

	// on scroll, 


	$(window).on('scroll',function(){
		
	    // we round here to reduce a little workload
	    var scrollStop = Math.round($(window).scrollTop());
	    if (scrollStop > headerPhotoHeight) {
	    	// debugger
	        $('nav').addClass('past-photo');
	    } else {
	        $('nav').removeClass('past-photo');
	    }

	});

});