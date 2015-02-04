Template.layout.events({
	'submit form': function(e) {
		e.preventDefault();

	var search = {
		location: $(e.target).find('[name=search]').val()
	}

	console.log(search.location);

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

			console.log(forecastObject.currently.apparentTemperature);
			Meteor.call('updateForecast', forecastObject)


			});

		Meteor.call('getFlickrPhotos', city, function(error, result) {
			console.log(error);
			var photosObject = $.parseJSON(result.content);
			console.log(photosObject);

			Meteor.call('pickPhoto', photosObject, function(error, result) {
				console.log(error);
				console.log(result);

				var href = "url(" + result + ")";

				console.log(href);

				$('body').css({'background-image': href});


			});


		});
	});



}

});