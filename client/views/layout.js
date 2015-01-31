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

		Meteor.call('getForecastData', longitude, latitude, function(error, result) {
		console.log(result);
		var forecastObject = $.parseJSON(result.content);
		var newForecast = {
			temperature: forecastObject.currently.apparentTemperature,
			outlook: forecastObject.currently.summary
		};
		console.log(forecastObject.currently.apparentTemperature);
		Meteor.call('updateForecast', newForecast);
	});
	});



}

});