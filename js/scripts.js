$(document).ready(function () {
	/*== Menu  ============================*/
	$('a.menu-icon').click(function () {
		if ($(this).hasClass('active')) {
			$(this).parent().find('ul.main-nav').slideUp();
			$(this).removeClass('active');
		} else {
			$(this).addClass('active');
			$(this).parent().find('ul.main-nav').slideDown();
		}
	});
	
	/*== Scroll  ============================*/
	$(".scrollDwn").click(function () {
		$(".scrollDwn").removeClass('active');
		$(this).addClass('active');
		var hgt = $(this).attr('rel');
		$('html,body').animate({
			scrollTop: $('section.' + hgt).offset().top - $('header').height() - 30
		}, 'slow');
	});

	/*== Ttile Show  ============================*/
	$('ul.sidebar-nav li a').click(function () {
		var myEm = $(this).attr('data-my-element');
		$('.secTtl .ttl').css("opacity", "0");
		$('.secTtl .ttl[data-my-element = ' + myEm + ']').css("opacity", "1");
	}); 
	
	/*== AOS  ============================*/
	AOS.init({
		easing: 'ease-in-out-sine'
	});
	
	/*== Paroller Parallax  ============================*/ 
	$(".paroller, [data-paroller-factor]").paroller({
		factor: 0.3,            // multiplier for scrolling speed and offset
		factorXs: 0.1,          // multiplier for scrolling speed and offset if window width is <576px
		factorSm: 0.2,          // multiplier for scrolling speed and offset if window width is <=768px
		factorMd: 0.2,          // multiplier for scrolling speed and offset if window width is <=1024px
		factorLg: 0.3,          // multiplier for scrolling speed and offset if window width is <=1200px
		type: 'foreground',     // background, foreground
		direction: 'horizontal' // vertical, horizontal
	});
});