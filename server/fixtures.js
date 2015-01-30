if (Forecasts.find().count() === 0) {
	Forecasts.insert({
		location: 'New York',
		temperature: '35',
		outlook: 'Rainy',
	});
}