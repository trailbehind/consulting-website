$(document).ready(function(){
	hashLinks();
	scrollLinks(1000);
	$('body').scrollspy({ target: '#bs-example-navbar-collapse-1', offset: 50 });
	$(".jumbotron h1").fadeTo(1250, 1, "easeInOutCubic", function(){
		$(".jumbotron h2").fadeTo(1500, 1, "easeInOutCubic");
	});
	//window.scrollReveal = new scrollReveal();
})

function scrollLinks(speed){
	var $root = $('html, body');
	var $navbar = $('.navbar-fixed-top')
	$('.navbar-default a:not(.carousel-control)').click(function(){
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