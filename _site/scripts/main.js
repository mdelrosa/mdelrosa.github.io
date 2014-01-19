// main.js

$(document).ready(function() {

	$(".panel-heading a").click(function() {
		$(this).parents(".panel-heading").next().collapse('toggle');
	});

	$(".tooltip-elem").tooltip();

})