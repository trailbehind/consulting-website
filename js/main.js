$(document).ready(function(){
	$(".jumbotron h1").fadeTo(1250, 1, "easeInOutCubic", function(){ // Fade in headline
		$(".jumbotron h2").fadeTo(1500, 1, "easeInOutCubic");
	});
	scrollLinks(1000); // Scroll to the appropriate window location when clicking nav links
	$('body').scrollspy({ target: '#bs-example-navbar-collapse-1', offset: 90 }); // Bootstrap plugin for highlighting navbar on scroll
    $('.form-contact').submit(function(){
      $.ajax({
        dataType: 'jsonp',
        url: "http://getsimpleform.com/messages/ajax?form_api_token=9b13afc776663f71eb50042377d81f68",
        data: $('.form-contact').serialize() 
      }).done(function() {
        //callback which can be used to show a thank you message
        //and reset the form
        alert("Thank you for contacting Uncharted Apps.");
		$('.form-contact .btn').addClass('btn-success').html('Submitted');
      });
      return false; //to stop the form from submitting
    });
  
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