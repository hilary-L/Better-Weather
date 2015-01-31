Forecastio = {};

Forecastio.getForecast = function(longitude, latitude) {

	var url = "https://api.forecast.io/forecast/" + "96d1db4ce776234edb7924b4e3641a1b" + "/" + latitude + "," + longitude;

	var forecastResponse = Meteor.http.get(
		url,
		{
			timeout: 5000
		}
	);
	if(forecastResponse.statusCode === 200)
		return forecastResponse;

}

Meteor.methods({
	'getForecastData': function(longitude, latitude) {
		return Forecastio.getForecast(longitude, latitude);
	}
});

Meteor.methods({
	'updateForecast': function(newForecast) {
		Forecasts.update({}, {temperature: newForecast.temperature.toPrecision(2), outlook: newForecast.outlook});
	}
});