Template.layout.events({
	'submit form': function(e) {
		e.preventDefault();

	var search = {
		location: $(e.target).find('[name=search]').val()
	}

	console.log(search.location);
	}
});