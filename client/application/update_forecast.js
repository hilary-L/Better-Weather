Meteor.methods({
	'updateForecast': function(newForecast) {
		Forecasts.update({}, {temperature: newForecast.temperature, outlook: newForecast.outlook});
	}
});