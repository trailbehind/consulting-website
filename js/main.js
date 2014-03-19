$(document).ready(function(){
	hashLinks();
	scrollLinks(1000);
	$('body').scrollspy({ target: '#bs-example-navbar-collapse-1', offset: 50 });
	$(".jumbotron h1").fadeTo(1250, 1, "easeInOutCubic", function(){
		$(".jumbotron h2").fadeTo(1500, 1, "easeInOutCubic");
	});
	//window.scrollReveal = new scrollReveal();
	//populateTeam();
	hashLinks();
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

function populateTeam(){
	$.ajax({
		dataType: "jsonp", 
		url: "team.json",
		success: addMembers,
		jsonp: "addMembers",
		error: function (jqxhr, textStatus, error){
			var err = textStatus + ", " + error;
			console.log("Request failed: " + err);
		}
	});
}

function addMembers(data){
	var members = data.team.length;
	var fullRows = Math.floor(members / 4);
	var $section = $(".background.team .container");
	var rowLength = 4;
	var roles = true;
	var currentMember, currentRow;
	for(i=0;i<fullRows;i++){
		$section.append("<div class='row' id=row" + i);
		$currentRow = ("#row" + i);
		for(j=0;j<rowLength;j++){
			currentMember = data.team[j + (i*4)];
			if(currentMember.roles.length == 1){ roles = false; }
			$currentRow.append("<div class='person col-md-3'> <a data-toggle='modal' data-target='#" + currentMember.id + "'> img class ='headshot' src='images/" + currentMember.photo + "'" + "></a> <div class='label'> <strong>" + currentMember.name + "</strong> <span>" + currentMember.roles[0] + "</span></div></div>");
			$('body').append("<div class='modal fade' id='" + currentMember.id + "' tabindex='-1' role='dialog' aria-labelledby='myModalLabel' aria-hidden='true'> <div class='modal-dialog'> <div class='modal-content'> <div class='modal-header'> <button type='button' class='close' data-dismiss='modal' aria-hidden='true'>&times;</button><h4 class='modal-title' id='" + currentMember.id + "'>" + currentMember.name + "</h4> </div><div class='modal-body'><h5><strong>" + roles ? "Roles: " : "Role: " + "</strong>" + currentMember.roles[0] + "</h5>" + currentMember.bio + "</div><div class='modal-footer'><button type='button' class='btn btn-default' data-dismiss='modal'>Close</button></div> </div></div></div>");
		}
	}
}