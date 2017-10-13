$(function() {
	$('.fa-bars').on('click', function() {
		$('.nav__menu').slideToggle();
	});

	$(window).scroll(function() {
		if ($(this).scrollTop() > 0){  
			$('nav').addClass("header__nav--sticky");
		} else {
			$('nav').removeClass("header__nav--sticky");
		}
	});

	$('a[href^="#"]').on('click', function(event) {
		var target = $(this.getAttribute('href'));
		if(target.length) {
			event.preventDefault();
			$('html, body').stop().animate({
				scrollTop: target.offset().top - 90}, 1000);
		}
	});
});