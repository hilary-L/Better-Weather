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

		var day = moment();
		console.log(day.format('dddd'));

		Forecasts.update({}, 
			{
				temperature: forecastObject.currently.apparentTemperature.toPrecision(2),
				outlook: forecastObject.currently.summary,
				icon: forecastObject.daily.data[0].icon,
				summary: forecastObject.daily.data[0].summary,
				dayLabel: day.format('dddd'),
				day1: {
					temperature: forecastObject.daily.data[1].apparentTemperatureMax.toPrecision(2),
					temperatureLow: forecastObject.daily.data[1].apparentTemperatureMin.toPrecision(2),
					icon: forecastObject.daily.data[1].icon,
					summary: forecastObject.daily.data[1].summary,
					dayLabel: day.add(1, 'days').format('dddd')
				},
				day2: {
					temperature: forecastObject.daily.data[2].apparentTemperatureMax.toPrecision(2),
					temperatureLow: forecastObject.daily.data[2].apparentTemperatureMin.toPrecision(2),
					icon: forecastObject.daily.data[2].icon,
					summary: forecastObject.daily.data[2].summary,
					dayLabel: day.add(1, 'days').format('dddd')
				},
				day3: {
					temperature: forecastObject.daily.data[3].apparentTemperatureMax.toPrecision(2),
					temperatureLow: forecastObject.daily.data[3].apparentTemperatureMin.toPrecision(2),
					icon: forecastObject.daily.data[3].icon,
					summary: forecastObject.daily.data[3].summary,
					dayLabel: day.add(1, 'days').format('dddd')
				},
				day4: {
					temperature: forecastObject.daily.data[4].apparentTemperatureMax.toPrecision(2),
					temperatureLow: forecastObject.daily.data[4].apparentTemperatureMin.toPrecision(2),
					icon: forecastObject.daily.data[4].icon,
					summary: forecastObject.daily.data[4].summary,
					dayLabel: day.add(1, 'days').format('dddd')
				},
				day5: {
					temperature: forecastObject.daily.data[5].apparentTemperatureMax.toPrecision(2),
					temperatureLow: forecastObject.daily.data[5].apparentTemperatureMin.toPrecision(2),
					icon: forecastObject.daily.data[5].icon,
					summary: forecastObject.daily.data[5].summary,
					dayLabel: day.add(1, 'days').format('dddd')
				}

			});
	}
});