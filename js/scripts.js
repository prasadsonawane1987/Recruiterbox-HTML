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
	
	/*== AOS  ============================*/ 
	var s = skrollr.init();
	if (s.isMobile()) {
		s.destroy();
	}
});