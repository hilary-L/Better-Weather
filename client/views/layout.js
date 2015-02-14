Template.layout.events({
	'submit form': function(e) {
		e.preventDefault();

	var search = {
		location: $(e.target).find('[name=search]').val()
	}


	var longitude = 0;
	var latitude = 0;

	Meteor.call('getGeoCode', search.location, function(error, result) {
		var resultArray = result;
		var resultObject = resultArray[0];
		longitude = resultObject.longitude;
		latitude = resultObject.latitude;
		city = resultObject.city;

		Meteor.call('getForecastData', longitude, latitude, function(error, result) {
			console.log(result);
			var forecastObject = $.parseJSON(result.content);
			Meteor.call('updateForecast', forecastObject)


			});

		Meteor.call('getFlickrPhotos', city, function(error, result) {
			var photosObject = $.parseJSON(result.content);

			Meteor.call('pickPhoto', photosObject, function(error, result) {

				var href = "url(" + result + ")";

				$('body').css({'background-image': href});


			});


		});
	});


}

});

Template.layout.rendered = function() {
	$(window).scroll(function() {
		if($(this).scrollTop() > 25) {
			$('.navbar').hide("drop", {direction: "up"}, 600);
		}
		else
			$('.navbar').show("drop", {direction: "up"}, 600);
	});
};