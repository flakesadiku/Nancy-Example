// Document Ready
$(document).ready(function() {
	var x = $('.rows .texts').height();
	var y = x + 30;
	$('.images').height(y);
	$('.mob-menu').click(function(){
		$('.header .mid ul.menyja').slideToggle();
	})
	$('.bxslider').bxSlider({
			  mode: 'fade',
			  pager: false,
			  controls: true,
			  captions: true
			});
			
});

// Window Resize
$(window).resize(function(){
	var x = $('.rows .texts').height();
	$('.images').height(x);
});
