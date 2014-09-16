$(document).ready(function() {

		//blur in effect for header
	setTimeout(function() {
		$('#wemadeit').addClass('de-blur');
	}, 1000);
		//change text-shadow on scroll
	$(window).scroll(function() {

		if($(this).scrollTop() > 20) {

			$('#wemadeit').addClass('scrolled');
		} else {
			$('#wemadeit').removeClass('scrolled');
		}
	});
	
	
	$(window).scroll(function() {
		
		var scrollTop = $(window).scrollTop();
		var offset = $('#portfolio').offset().top;
		var difference = (offset - scrollTop);
		 //fade in images on scroll
		if(difference < 300) {
			$('#portfolio img').each(function() {
				$(this).css('display', 'inline-block');
			});
		}
		//fade in about us section once you're past top of portfolio div
		if(difference < -50) {
			$('#about h1').addClass('animated fadeInUp');
		} else {

		//hide the about us section again if scrolled up
			$('#about h1').removeClass('animated fadeInUp');
		}
		//fade in get in touch line
		if(difference < -300) {

			$('#getInTouch').addClass('animated fadeInLeft');
		} else {
			$('#getInTouch').removeClass('animated fadeInLeft');
		}

	});

});