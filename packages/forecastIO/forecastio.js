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
		console.log("test");
		console.log(forecastObject.daily.data[0].apparentTemperatureMax);

		Forecasts.update({}, 
			{
			temperature: forecastObject.currently.apparentTemperature.toPrecision(2),
			outlook: forecastObject.currently.summary,
			day1: {
				temperature: forecastObject.daily.data[0].apparentTemperatureMax.toPrecision(2),
			},
			day2: {
				temperature: forecastObject.daily.data[1].apparentTemperatureMax.toPrecision(2),
			},
			day3: {
				temperature: forecastObject.daily.data[2].apparentTemperatureMax.toPrecision(2),
			}


			});
	}
});