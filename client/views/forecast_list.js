Template.forecastList.helpers({
	forecasts: function() {
		return Forecasts.find();
	}
});