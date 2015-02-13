Router.configure({
	layoutTemplate: 'layout'
});

Router.map(function() {
	this.route('forecastList', {
		path: '/',
		data: function() {
			forecastData = {
					fData: Forecasts.findOne({}, {precipHour: true, precipDay: true})
				}
			return forecastData;
		}
	});
});