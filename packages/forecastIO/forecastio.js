Forecastio = {};

Forecastio.getForecast = function(longitude, latitude) {

	var url = "https://api.forecast.io/forecast/" + "96d1db4ce776234edb7924b4e3641a1b" + "/" + latitude + "," + longitude;

	var forecastResponse = Meteor.http.get(
		url,
		{
			timeout: 60000
		}
	);
	if(forecastResponse.statusCode === 200)
		return forecastResponse;
	else {
		console.log (forecastResponse.statusCode);
		console.log(forecastResponse);
	}


}

Meteor.methods({
	'getForecastData': function(longitude, latitude) {
		return Forecastio.getForecast(longitude, latitude);
	}
});

Meteor.methods({
	'updateForecast': function(forecastObject) {
		var newForecast = {
				temperature: forecastObject.currently.apparentTemperature,
				outlook: forecastObject.currently.summary
			};
		Forecasts.update({}, {temperature: newForecast.temperature.toPrecision(2), outlook: newForecast.outlook});
	}
});