Forecastio = {};

Forecastio.getForecast = function(longitude, latitude) {

	var apiKey = Meteor.settings.forecastio.toString();

	var url = "https://api.forecast.io/forecast/" + apiKey + "/" + latitude + "," + longitude;

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

		Forecasts.update({}, 
			{
				temperature: forecastObject.currently.temperature.toFixed(),
				outlook: forecastObject.currently.summary,
				icon: forecastObject.daily.data[0].icon,
				summary: forecastObject.daily.data[0].summary,
				dayLabel: day.format('dddd'),
				feelsLike: forecastObject.currently.apparentTemperature.toFixed(),
				day1: {
					temperature: forecastObject.daily.data[1].temperatureMax.toFixed(),
					temperatureLow: forecastObject.daily.data[1].temperatureMin.toFixed(),
					icon: forecastObject.daily.data[1].icon,
					summary: forecastObject.daily.data[1].summary,
					dayLabel: day.add(1, 'days').format('dddd')
				},
				day2: {
					temperature: forecastObject.daily.data[2].temperatureMax.toFixed(),
					temperatureLow: forecastObject.daily.data[2].temperatureMin.toFixed(),
					icon: forecastObject.daily.data[2].icon,
					summary: forecastObject.daily.data[2].summary,
					dayLabel: day.add(1, 'days').format('dddd')
				},
				day3: {
					temperature: forecastObject.daily.data[3].temperatureMax.toFixed(),
					temperatureLow: forecastObject.daily.data[3].temperatureMin.toFixed(),
					icon: forecastObject.daily.data[3].icon,
					summary: forecastObject.daily.data[3].summary,
					dayLabel: day.add(1, 'days').format('dddd')
				},
				day4: {
					temperature: forecastObject.daily.data[4].temperatureMax.toFixed(),
					temperatureLow: forecastObject.daily.data[4].temperatureMin.toFixed(),
					icon: forecastObject.daily.data[4].icon,
					summary: forecastObject.daily.data[4].summary,
					dayLabel: day.add(1, 'days').format('dddd')
				},
				day5: {
					temperature: forecastObject.daily.data[5].temperatureMax.toFixed(),
					temperatureLow: forecastObject.daily.data[5].temperatureMin.toFixed(),
					icon: forecastObject.daily.data[5].icon,
					summary: forecastObject.daily.data[5].summary,
					dayLabel: day.add(1, 'days').format('dddd')
				},
				precipHour: forecastObject.minutely.data,
				precipDay: forecastObject.hourly.data

			});
	}
});