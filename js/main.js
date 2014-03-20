$(document).ready(function(){
	hashLinks();
	scrollLinks(1000);
	$('body').scrollspy({ target: '#bs-example-navbar-collapse-1', offset: 90 });
	$(".jumbotron h1").fadeTo(1250, 1, "easeInOutCubic", function(){
		$(".jumbotron h2").fadeTo(1500, 1, "easeInOutCubic");
	});
	hashLinks();
})

function scrollLinks(speed){
	var $root = $('html, body');
	var $navbar = $('.navbar-fixed-top')
	var $navLinks = $('.navbar-default a:not(.carousel-control)');
	var $button = $('.jumbotron a');
	$button.add($navLinks).on('click', function(){
	    var href = $.attr(this, 'href');
		$root.animate({
			scrollTop: $( $(this).attr('href') ).offset().top - ($navbar.height())
	    }, speed, function () {
        window.location.hash = href;
    	});
	    return false;
	});
}

function hashLinks(){
	
}