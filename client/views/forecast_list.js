var forecastData = [
	{
		currently: '',
		minutely: '',
		hourly: '',
		daily: '',
		temperature: '30',
		outlook: 'Today is forecasted to be sunny.',
		feelsLike: '25',
	}
];
Template.forecastList.helpers({
	forecasts: forecastData
});