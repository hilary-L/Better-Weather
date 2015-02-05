Template.upcoming.rendered = function() {
	$('.day').draggable();
	$('.forecast-container .col-md-5').draggable();
	$('.forecast-container .col-md-4').draggable();

	$('.day').dblclick(function() {
		$(this).hide('shake');
	});

	$('.forecast-container .col-md-5').dblclick(function() {
		$(this).hide('shake');
	});

	$('.forecast-container .col-md-4').dblclick(function() {
		$(this).hide('shake');
	});

	$('.navbar').dblclick(function() {
		$('.day').show('puff');
		$('.forecast-container .col-md-5').show('puff');
		$('.forecast-container .col-md-4').show('puff');
	});
};