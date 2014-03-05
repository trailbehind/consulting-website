$(document).ready(function(){
	hashLinks();
	scrollLinks(1000);
	navClicker();
	//window.scrollReveal = new scrollReveal();
})

function scrollLinks(speed){
	var $root = $('html, body');
	var $navbar = $('.navbar-fixed-top')
	$('a:not(.carousel-control)').click(function(){
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

function navClicker(){
	$('.navbar-default .navbar-nav>li:not(.active)>a').click(function(e){	//When clicking an inactive nav link
		$nav = $(e.currentTarget.parentNode);
		$nav.toggleClass('active');										//activate the clicked link
		$nav.siblings().removeClass('active');							//deactivate the others
	});
	$('.navbar-default a.navbar-brand').click(function(){				//When clicking the brand name
		$('.navbar-default .navbar-nav>li').removeClass('active');		//Make all navs inactive
	});
}